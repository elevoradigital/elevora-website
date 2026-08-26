"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Send, MessageCircle, Mail, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    websiteType: "",
    budget: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const submittingRef = useRef(false);

  const businessTypes = [
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

  const websiteTypes = [
    "Business Website (Starter / Business)",
    "E-commerce Store",
    "Custom Web Application",
    "Website Redesign",
    "Ongoing Maintenance",
    "Not Sure Yet",
  ];

  const budgetRanges = [
    "Under ₹10,000 (Starter)",
    "₹10,000 – ₹20,000 (Business)",
    "₹20,000 – ₹30,000 (E-Commerce)",
    "₹30,000+ (Custom / Complex)",
    "Not sure yet",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 5) {
      newErrors.phone = "Please enter your phone or WhatsApp number.";
    }
    if (!formData.websiteType) {
      newErrors.websiteType = "Please select a website type.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please share your project details & goals (at least 10 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Prevent duplicate clicks
    if (submittingRef.current || isSubmitting) return;

    if (!validate()) return;

    submittingRef.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          data.error ||
            "We couldn't send your enquiry right now. Please try again or contact ELEVORA directly by email or WhatsApp."
        );
      }
    } catch {
      setErrorMessage(
        "We couldn't send your enquiry right now. Please try again or contact ELEVORA directly by email or WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
      submittingRef.current = false;
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      businessType: "",
      websiteType: "",
      budget: "",
      message: "",
      honeypot: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setErrorMessage("");
  };

  const clearErrorKeepData = () => {
    setErrorMessage("");
  };

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-surface-variant relative overflow-hidden" id="contact">
      {/* Radial Gradient Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-metallic-gold/10 via-background/80 to-background pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 justify-between items-start">
          {/* Left Column: Final Call to Action with Reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariant}
            className="lg:col-span-5 flex flex-col justify-center pt-2 sm:pt-4"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 h-px bg-metallic-gold" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
                Start a Conversation
              </span>
            </div>

            <h2 className="font-serif text-[32px] sm:text-4xl md:text-5xl lg:text-[52px] text-warm-ivory font-bold leading-[1.12] mb-4 sm:mb-6">
              Ready to build <br />
              your website?
            </h2>

            <p className="font-sans text-sm sm:text-base text-on-surface-variant mb-8 sm:mb-10 max-w-md leading-relaxed">
              Tell us about your business and let&apos;s create a digital experience your customers will remember.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-8 sm:mb-10 w-full">
              <motion.a
                href="#contact-form"
                whileHover={{ y: -2, transition: { duration: 0.15, ease: EASINGS.snappy } }}
                whileTap={{ scale: 0.98 }}
                className="bg-metallic-gold text-pure-black font-sans text-xs uppercase tracking-[0.16em] font-bold px-7 py-4 hover:bg-warm-ivory transition-colors duration-300 inline-flex justify-center items-center gap-3 shadow-lg min-h-[50px] w-full sm:w-auto"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, transition: { duration: 0.15, ease: EASINGS.snappy } }}
                whileTap={{ scale: 0.98 }}
                className="border border-metallic-gold text-metallic-gold font-sans text-xs uppercase tracking-[0.16em] font-semibold px-7 py-4 hover:bg-metallic-gold/15 transition-colors duration-300 inline-flex justify-center items-center gap-3 bg-surface/40 min-h-[50px] w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                <span>WhatsApp ELEVORA</span>
              </motion.a>
            </div>

            <div className="p-5 sm:p-6 bg-surface/60 border border-border-muted/50 flex flex-col gap-2">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-metallic-gold font-semibold">
                Direct Communication
              </span>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Prefer direct email? Reach founder Sai Darshan at:{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}?subject=Website%20Project%20Enquiry%20%E2%80%94%20ELEVORA`}
                  className="text-warm-ivory hover:text-metallic-gold underline transition-colors break-all"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Project Enquiry Form with Single-Column Stack on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: DURATIONS.cinematic, ease: EASINGS.luxury }}
            className="lg:col-span-7 bg-[#131313] p-5 sm:p-8 md:p-12 editorial-border border border-border-muted shadow-2xl w-full"
            id="contact-form"
          >
            <div className="mb-6 sm:mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mb-2">
                Project Enquiry
              </h3>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant">
                Fill out the form below. We will review your project details and respond within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: DURATIONS.standard, ease: EASINGS.luxury }}
                className="py-8 sm:py-10 flex flex-col items-center text-center gap-4 sm:gap-5"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-metallic-gold/10 border border-metallic-gold flex items-center justify-center text-metallic-gold shadow-lg">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-ivory mb-2 sm:mb-3 font-semibold">
                    Thank you.
                  </h4>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Your project enquiry has been received. We&apos;ll review your requirements and get back to you soon.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-4 w-full sm:w-auto">
                  <motion.a
                    href="#"
                    whileHover={{ y: -1.5 }}
                    className="border border-border-muted hover:border-metallic-gold text-warm-ivory hover:text-metallic-gold font-sans text-xs uppercase tracking-widest px-6 py-3.5 transition-colors text-center min-h-[48px] flex items-center justify-center"
                  >
                    Back to Home
                  </motion.a>
                  <motion.a
                    href="#work"
                    whileHover={{ y: -1.5 }}
                    className="bg-metallic-gold text-pure-black font-sans text-xs uppercase tracking-widest font-bold px-6 py-3.5 hover:bg-warm-ivory transition-colors shadow-md text-center min-h-[48px] flex items-center justify-center"
                  >
                    Explore Our Work
                  </motion.a>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-sans uppercase tracking-widest text-on-surface-variant/70 hover:text-metallic-gold transition-colors mt-2 focus:outline-none py-2 min-h-[44px]"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6" noValidate>
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Error Banner with Retry & Direct Contacts */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 sm:p-5 bg-red-950/40 border border-red-800 text-red-200 text-xs font-sans flex flex-col gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-red-100">
                          We couldn&apos;t send your enquiry right now.
                        </p>
                        <p className="mt-1 text-red-300/90 leading-relaxed">
                          Please try again or contact ELEVORA directly by email or WhatsApp.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-red-900/50">
                      <button
                        type="button"
                        onClick={clearErrorKeepData}
                        className="bg-red-900/60 hover:bg-red-900 text-red-100 px-3.5 py-2 rounded text-xs font-medium inline-flex items-center gap-1.5 transition-colors min-h-[44px]"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Try Again</span>
                      </button>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}?subject=Website%20Project%20Enquiry%20%E2%80%94%20ELEVORA`}
                        className="border border-red-700/60 hover:border-red-500 text-red-200 px-3.5 py-2 rounded text-xs font-medium inline-flex items-center gap-1.5 transition-colors min-h-[44px]"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email ELEVORA</span>
                      </a>
                      <a
                        href={SITE_CONFIG.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-red-700/60 hover:border-red-500 text-red-200 px-3.5 py-2 rounded text-xs font-medium inline-flex items-center gap-1.5 transition-colors min-h-[44px]"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name */}
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="name">
                      Your Name <span className="text-metallic-gold">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      inputMode="text"
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full bg-[#0e0e0e] border px-4 py-3.5 text-base sm:text-sm text-warm-ivory placeholder:text-on-surface-variant/40 focus:outline-none focus:border-metallic-gold transition-colors min-h-[48px] ${
                        errors.name ? "border-red-500" : "border-border-muted"
                      }`}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-[11px] text-red-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="businessName">
                      Business / Brand Name
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      inputMode="text"
                      autoComplete="organization"
                      placeholder="e.g. Artisanal Roastery"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-[#0e0e0e] border border-border-muted px-4 py-3.5 text-base sm:text-sm text-warm-ivory placeholder:text-on-surface-variant/40 focus:outline-none focus:border-metallic-gold transition-colors min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Email */}
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="email">
                      Email Address <span className="text-metallic-gold">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full bg-[#0e0e0e] border px-4 py-3.5 text-base sm:text-sm text-warm-ivory placeholder:text-on-surface-variant/40 focus:outline-none focus:border-metallic-gold transition-colors min-h-[48px] ${
                        errors.email ? "border-red-500" : "border-border-muted"
                      }`}
                    />
                    {errors.email && (
                      <span id="email-error" className="text-[11px] text-red-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="phone">
                      Phone / WhatsApp <span className="text-metallic-gold">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full bg-[#0e0e0e] border px-4 py-3.5 text-base sm:text-sm text-warm-ivory placeholder:text-on-surface-variant/40 focus:outline-none focus:border-metallic-gold transition-colors min-h-[48px] ${
                        errors.phone ? "border-red-500" : "border-border-muted"
                      }`}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="text-[11px] text-red-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                  {/* Business Type */}
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="businessType">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-[#0e0e0e] border border-border-muted px-4 py-3.5 text-base sm:text-sm text-warm-ivory focus:outline-none focus:border-metallic-gold transition-colors min-h-[48px]"
                    >
                      <option value="">Select industry</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#121212] text-warm-ivory">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Website Type */}
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="websiteType">
                      Website Type <span className="text-metallic-gold">*</span>
                    </label>
                    <select
                      id="websiteType"
                      value={formData.websiteType}
                      onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                      aria-invalid={!!errors.websiteType}
                      aria-describedby={errors.websiteType ? "website-error" : undefined}
                      className={`w-full bg-[#0e0e0e] border px-4 py-3.5 text-base sm:text-sm text-warm-ivory focus:outline-none focus:border-metallic-gold transition-colors min-h-[48px] ${
                        errors.websiteType ? "border-red-500" : "border-border-muted"
                      }`}
                    >
                      <option value="">Select type</option>
                      {websiteTypes.map((w) => (
                        <option key={w} value={w} className="bg-[#121212] text-warm-ivory">
                          {w}
                        </option>
                      ))}
                    </select>
                    {errors.websiteType && (
                      <span id="website-error" className="text-[11px] text-red-400 mt-1 block">
                        {errors.websiteType}
                      </span>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="budget">
                      Budget
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#0e0e0e] border border-border-muted px-4 py-3.5 text-base sm:text-sm text-warm-ivory focus:outline-none focus:border-metallic-gold transition-colors min-h-[48px]"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-[#121212] text-warm-ivory">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Project Details & Goals */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-1.5 font-medium" htmlFor="message">
                    Project Details &amp; Goals <span className="text-metallic-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your brand, requirements, deadlines, or any reference websites you like..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full bg-[#0e0e0e] border px-4 py-3 text-base sm:text-sm text-warm-ivory placeholder:text-on-surface-variant/40 focus:outline-none focus:border-metallic-gold transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-border-muted"
                    }`}
                  />
                  {errors.message && (
                    <span id="message-error" className="text-[11px] text-red-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button with Tactile Feedback */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { y: -2, transition: { duration: 0.15, ease: EASINGS.snappy } } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full bg-metallic-gold text-pure-black font-sans text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 sm:py-4.5 hover:bg-warm-ivory transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2 min-h-[52px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND PROJECT ENQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
