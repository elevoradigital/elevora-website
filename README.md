# ELEVORA — Digital Growth Studio

Official web presence and bespoke client acquisition platform for **ELEVORA**, designed and developed by Founder & Creative Director **Sai Darshan**.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router, Static Site Generation)
- **UI / Styling**: React 18, Tailwind CSS, Lucide Icons
- **Motion**: Framer Motion (Editorial Easing Curves, Magnetic Pointer, Section Reveals)
- **Lead Capture & Transactional Email**: Resend API with server-side validation and anti-spam honeypot
- **SEO & Social**: OpenGraph, Twitter Cards, Schema.org `ProfessionalService` JSON-LD, `sitemap.xml`, `robots.txt`

---

## 📧 Email Setup & Lead Generation Guide

The project enquiry form connects to [Resend](https://resend.com) to automatically deliver project leads directly to ELEVORA's Gmail (`getelevora@gmail.com`) and send a polite confirmation receipt to the prospective client.

### Quick Setup:

1. **Create a Resend Account**:
   - Sign up at [resend.com](https://resend.com).
   - Generate an API key from the [Resend API Keys Dashboard](https://resend.com/api-keys).


     ```

3. **Development / Local Testing**:
   - In local development mode (`NODE_ENV=development`), if `RESEND_API_KEY` is not set yet, the server will safely log the structured lead to the console without breaking the form flow.
   - When `RESEND_API_KEY` is provided, real emails will be dispatched to `CONTACT_EMAIL`.

4. **Production Custom Domain Verification**:
   - In Resend, add and verify your custom sending domain (e.g. `elevora.in`).
   - Update `EMAIL_FROM` in your hosting platform (Vercel, etc.):
     ```env
     EMAIL_FROM=ELEVORA <hello@elevora.in>
     ```

5. **Reply-To Functionality**:
   - All inbound lead notification emails have their `Reply-To` header set directly to the prospect's email address. Clicking **Reply** in Gmail immediately opens a conversation with the potential client.

6. **Spam Defense**:
   - Invisible honeypot traps bots automatically.
   - In-memory rate limiting prevents spam floods (5 submissions per 10 minutes per IP).
   - Complete server-side sanitization prevents HTML injection.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
