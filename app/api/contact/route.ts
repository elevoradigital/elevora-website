import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/lib/constants";

// 1. Allowed Select Options for Server-Side Validation
const ALLOWED_WEBSITE_TYPES = [
  "Business Website (Starter / Business)",
  "E-commerce Store",
  "Custom Web Application",
  "Website Redesign",
  "Ongoing Maintenance",
  "Not Sure Yet",
];

const ALLOWED_BUSINESS_TYPES = [
  "Restaurant & Hospitality",
  "Retail & Boutique",
  "Fitness & Gym",
  "Real Estate & Property",
  "Salon & Beauty",
  "Healthcare & Clinic",
  "Education & Academy",
  "E-commerce & Brand",
  "Professional Services",
  "Other",
];

const ALLOWED_BUDGET_RANGES = [
  "Under ₹10,000 (Starter)",
  "₹10,000 – ₹20,000 (Business)",
  "₹20,000 – ₹30,000 (E-Commerce)",
  "₹30,000+ (Custom / Complex)",
  "Not sure yet",
];

// 2. Simple In-Memory Rate Limiter (5 requests per 10 minutes per IP)
interface RateLimitEntry {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const entry = rateLimitMap.get(clientIp);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(clientIp, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= maxRequests) {
    return true;
  }

  entry.count += 1;
  return false;
}

// 3. HTML Escaping to prevent injection in generated emails
function sanitizeInput(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

export async function POST(request: Request) {
  try {
    // Determine Client IP for Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = (forwardedFor ? forwardedFor.split(",")[0] : realIp) || "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Malformed request payload." },
        { status: 400 }
      );
    }

    const {
      name,
      businessName,
      email,
      phone,
      businessType,
      websiteType,
      budget,
      message,
      honeypot, // Hidden bot check
    } = body;

    // 4. Honeypot check: reject spam silently
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Enquiry received." },
        { status: 200 }
      );
    }

    // 5. Server-Side Validation
    // Name (required, 2-100 chars)
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { error: "Please enter your name (2 to 100 characters)." },
        { status: 400 }
      );
    }

    // Email (required, RFC valid format)
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email.trim()) || email.trim().length > 150) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Phone (required, 5-30 chars)
    if (!phone || typeof phone !== "string" || phone.trim().length < 5 || phone.trim().length > 30) {
      return NextResponse.json(
        { error: "Please provide a valid phone or WhatsApp number." },
        { status: 400 }
      );
    }

    // Website Type (required, must match allowed option)
    if (!websiteType || typeof websiteType !== "string" || !ALLOWED_WEBSITE_TYPES.includes(websiteType.trim())) {
      return NextResponse.json(
        { error: "Please select a valid website type from the options provided." },
        { status: 400 }
      );
    }

    // Project Details / Message (required, 10-3000 chars)
    if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 3000) {
      return NextResponse.json(
        { error: "Please share project details and goals (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Optional Business Name (0-150 chars)
    if (businessName && (typeof businessName !== "string" || businessName.trim().length > 150)) {
      return NextResponse.json(
        { error: "Business name must be under 150 characters." },
        { status: 400 }
      );
    }

    // Optional Business Type (must match allowed if provided)
    if (businessType && (typeof businessType !== "string" || !ALLOWED_BUSINESS_TYPES.includes(businessType.trim()))) {
      return NextResponse.json(
        { error: "Please select a valid business type." },
        { status: 400 }
      );
    }

    // Optional Budget (must match allowed if provided)
    if (budget && (typeof budget !== "string" || !ALLOWED_BUDGET_RANGES.includes(budget.trim()))) {
      return NextResponse.json(
        { error: "Please select a valid budget range." },
        { status: 400 }
      );
    }

    // 6. Sanitize inputs for email delivery
    const cleanName = sanitizeInput(name);
    const rawBusinessName = businessName ? businessName.trim() : "";
    const cleanBusinessName = sanitizeInput(rawBusinessName);
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = sanitizeInput(phone);
    const cleanBusinessType = sanitizeInput(businessType || "Not specified");
    const cleanWebsiteType = sanitizeInput(websiteType);
    const cleanBudget = sanitizeInput(budget || "Not specified");
    const cleanMessage = sanitizeInput(message);

    // 7. Environment & Recipient Configuration
    const recipientEmail =
      process.env.CONTACT_EMAIL ||
      process.env.CONTACT_NOTIFICATION_EMAIL ||
      SITE_CONFIG.contact.email;

    const senderEmail =
      process.env.EMAIL_FROM ||
      "ELEVORA <onboarding@resend.dev>";

    const resendApiKey = process.env.RESEND_API_KEY;

    // 8. Build Email Subject Line
    // Subject format: New Website Enquiry — {Business Name} (or {Name} if business name is empty)
    const emailSubject = rawBusinessName
      ? `New Website Enquiry — ${rawBusinessName}`
      : `New Website Enquiry — ${cleanName}`;

    // 9. Build Professional Responsive HTML Email Template for ELEVORA Inbox
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0e0e0e; color: #e5e2e1; margin: 0; padding: 24px; }
    .wrapper { max-width: 620px; margin: 0 auto; background-color: #141414; border: 1px solid #c5a059; padding: 36px 32px; border-radius: 4px; }
    .brand-header { border-bottom: 1px solid rgba(197, 160, 89, 0.35); padding-bottom: 20px; margin-bottom: 28px; }
    .brand-title { color: #c5a059; font-size: 24px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 0; }
    .brand-subtitle { color: #d1c5b4; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 6px; margin-bottom: 0; }
    .section-title { font-size: 12px; font-weight: 700; color: #c5a059; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #282828; padding-bottom: 8px; margin-top: 24px; margin-bottom: 16px; }
    .row { margin-bottom: 12px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9e9a93; margin-bottom: 3px; }
    .value { font-size: 15px; color: #fdfcf8; font-weight: 500; }
    .value a { color: #c5a059; text-decoration: none; }
    .value a:hover { text-decoration: underline; }
    .message-box { background-color: #0a0a0a; border: 1px solid #2a2a2a; border-left: 3px solid #c5a059; padding: 18px; border-radius: 2px; font-size: 14px; line-height: 1.65; color: #e5e2e1; white-space: pre-wrap; margin-top: 8px; }
    .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(197, 160, 89, 0.25); text-align: center; font-size: 11px; color: #888; }
    .reply-hint { background-color: rgba(197, 160, 89, 0.1); border: 1px dashed #c5a059; padding: 12px; border-radius: 4px; text-align: center; font-size: 12px; color: #c5a059; margin-top: 24px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="brand-header">
      <h1 class="brand-title">ELEVORA</h1>
      <p class="brand-subtitle">NEW PROJECT ENQUIRY</p>
    </div>

    <div class="section-title">CONTACT DETAILS</div>
    <div class="row">
      <div class="label">Name</div>
      <div class="value">${cleanName}</div>
    </div>
    <div class="row">
      <div class="label">Business</div>
      <div class="value">${cleanBusinessName || "Not provided"}</div>
    </div>
    <div class="row">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></div>
    </div>
    <div class="row">
      <div class="label">Phone / WhatsApp</div>
      <div class="value"><a href="tel:${cleanPhone}">${cleanPhone}</a></div>
    </div>

    <div class="section-title">PROJECT</div>
    <div class="row">
      <div class="label">Business Type</div>
      <div class="value">${cleanBusinessType}</div>
    </div>
    <div class="row">
      <div class="label">Website Type</div>
      <div class="value">${cleanWebsiteType}</div>
    </div>
    <div class="row">
      <div class="label">Budget</div>
      <div class="value">${cleanBudget}</div>
    </div>

    <div class="section-title">PROJECT DETAILS</div>
    <div class="message-box">${cleanMessage}</div>

    <div class="reply-hint">
      💡 <strong>Direct Reply:</strong> Click &ldquo;Reply&rdquo; in your email client to message <strong>${cleanName}</strong> directly at <strong>${cleanEmail}</strong>.
    </div>

    <div class="section-title" style="margin-top: 28px;">SOURCE</div>
    <div class="row">
      <div class="label">Submitted from</div>
      <div class="value">ELEVORA Website</div>
    </div>
    <div class="row">
      <div class="label">Instagram</div>
      <div class="value"><a href="https://instagram.com/getelevora">@getelevora</a></div>
    </div>

    <div class="footer">
      ELEVORA Studio • BUILD • ELEVATE • GROW<br>
      Inquiry received on ${new Date().toUTCString()}
    </div>
  </div>
</body>
</html>
`;

    // Plain text alternative
    const emailText = `
ELEVORA
NEW PROJECT ENQUIRY
========================================

CONTACT DETAILS
----------------------------------------
Name: ${cleanName}
Business: ${cleanBusinessName || "Not provided"}
Email: ${cleanEmail}
Phone / WhatsApp: ${cleanPhone}

PROJECT
----------------------------------------
Business Type: ${cleanBusinessType}
Website Type: ${cleanWebsiteType}
Budget: ${cleanBudget}

PROJECT DETAILS
----------------------------------------
${cleanMessage}

SOURCE
----------------------------------------
Submitted from: ELEVORA Website
Instagram: @getelevora
Timestamp: ${new Date().toUTCString()}
========================================
Reply directly to this email to contact ${cleanName}.
`;

    // 10. Customer Auto-Reply Email
    const autoReplyHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0e0e0e; color: #e5e2e1; margin: 0; padding: 24px; }
    .wrapper { max-width: 580px; margin: 0 auto; background-color: #141414; border: 1px solid #c5a059; padding: 32px; border-radius: 4px; }
    .title { color: #c5a059; font-size: 20px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 16px 0; }
    p { font-size: 14px; line-height: 1.7; color: #e5e2e1; margin: 0 0 16px 0; }
    .signature { margin-top: 24px; padding-top: 16px; border-top: 1px solid #282828; font-size: 13px; color: #d1c5b4; }
    .signature a { color: #c5a059; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <h1 class="title">ELEVORA</h1>
    <p>Hello ${cleanName},</p>
    <p>Thank you for reaching out to ELEVORA.</p>
    <p>We've received your project enquiry and will review your requirements.</p>
    <p>We&apos;ll get back to you as soon as possible.</p>
    <div class="signature">
      <strong>Best,</strong><br>
      Sai Darshan<br>
      Founder &mdash; ELEVORA<br><br>
      Instagram: <a href="https://instagram.com/getelevora">@getelevora</a><br>
      Email: <a href="mailto:${recipientEmail}">${recipientEmail}</a>
    </div>
  </div>
</body>
</html>
`;

    const autoReplyText = `
Hello ${cleanName},

Thank you for reaching out to ELEVORA.

We've received your project enquiry and will review your requirements.
We'll get back to you as soon as possible.

Best,
Sai Darshan
Founder — ELEVORA

Instagram: @getelevora
Email: ${recipientEmail}
`;

    // 11. Transactional Email Dispatch with Resend
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // Send Notification to ELEVORA Business Inbox
      const notificationResult = await resend.emails.send({
        from: senderEmail,
        to: [recipientEmail],
        replyTo: cleanEmail,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      });

      if (notificationResult.error) {
        console.error("[ELEVORA API] Resend email delivery failed:", notificationResult.error.message);
        return NextResponse.json(
          { error: "We couldn't send your enquiry right now. Please try again or contact ELEVORA directly by email or WhatsApp." },
          { status: 502 }
        );
      }

      // Courtesy Auto-Reply to Customer (graceful if sending domain is in test mode)
      try {
        await resend.emails.send({
          from: senderEmail,
          to: [cleanEmail],
          replyTo: recipientEmail,
          subject: "We received your ELEVORA project enquiry",
          html: autoReplyHtml,
          text: autoReplyText,
        });
      } catch (autoReplyErr) {
        // Log silently; do not fail customer request if auto-reply fails (e.g. testing mode domain limitations)
        console.warn("[ELEVORA API] Auto-reply send error:", autoReplyErr);
      }
    } else {
      // In development mode without API key, log the structured lead for local testing
      if (process.env.NODE_ENV === "production") {
        console.error("[ELEVORA API] RESEND_API_KEY is missing in production environment.");
        return NextResponse.json(
          { error: "We couldn't send your enquiry right now. Please try again or contact ELEVORA directly by email or WhatsApp." },
          { status: 503 }
        );
      }

      console.log(`[ELEVORA DEV INQUIRY RECEIVED] -> ${recipientEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(`Reply-To: ${cleanEmail}`);
      console.log({
        name: cleanName,
        business: cleanBusinessName || "N/A",
        email: cleanEmail,
        phone: cleanPhone,
        businessType: cleanBusinessType,
        websiteType: cleanWebsiteType,
        budget: cleanBudget,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project enquiry has been received. We'll review your requirements and get back to you soon.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[ELEVORA API] Unexpected server error:", err);
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please try again or contact ELEVORA directly by email or WhatsApp." },
      { status: 500 }
    );
  }
}
