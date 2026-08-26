"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function Pricing() {
  const plans = [
    {
      name: SITE_CONFIG.pricing.starter.name,
      price: SITE_CONFIG.pricing.starter.price,
      prefix: "",
      description: SITE_CONFIG.pricing.starter.description,
      featured: false,
      badge: null,
      features: [
        "Up to 5 Custom Pages",
        "100% Bespoke Design (No Templates)",
        "Mobile & Tablet Responsive",
        "Contact & Lead Capture Form",
        "Basic SEO & Meta Configuration",
        "Lightning-Fast Speed Optimization",
      ],
      buttonText: "Inquire Plan",
      buttonStyle:
        "border border-border-muted text-warm-ivory hover:bg-surface-variant hover:border-metallic-gold/50",
    },
    {
      name: SITE_CONFIG.pricing.business.name,
      price: SITE_CONFIG.pricing.business.price,
      prefix: "",
      description: SITE_CONFIG.pricing.business.description,
      featured: true,
      badge: SITE_CONFIG.pricing.business.badge,
      features: [
        "Up to 12 Custom Pages",
        "CMS / Dynamic Content Setup",
        "Advanced Editorial Motion & Micro-Interactions",
        "Complete SEO Architecture & Schema",
        "Lead Capture & WhatsApp Integration",
        "Priority Revisions & Fast Delivery",
      ],
      buttonText: "Inquire Plan",
      buttonStyle: "bg-metallic-gold text-pure-black font-bold hover:bg-warm-ivory shadow-lg",
    },
    {
      name: SITE_CONFIG.pricing.ecommerce.name,
      price: SITE_CONFIG.pricing.ecommerce.price,
      prefix: SITE_CONFIG.pricing.ecommerce.prefix,
      description: SITE_CONFIG.pricing.ecommerce.description,
      featured: false,
      badge: null,
      features: [
        "Full Online Store Setup",
        "Secure Payment Gateway Integration",
        "Product Catalog & Filter System",
        "High-Conversion Cart & Checkout",
        "Inventory & Order Tracking Flow",
        "Mobile-First Shopping Experience",
      ],
      buttonText: "Inquire Plan",
      buttonStyle:
        "border border-border-muted text-warm-ivory hover:bg-surface-variant hover:border-metallic-gold/50",
    },
    {
      name: SITE_CONFIG.pricing.custom.name,
      price: SITE_CONFIG.pricing.custom.price,
      prefix: "",
      description: SITE_CONFIG.pricing.custom.description,
      featured: false,
      badge: null,
      features: [
        "Unlimited Custom Scope",
        "Custom Web App Architecture",
        "Database & Third-Party API Sync",
        "Custom Calculators / Portals",
        "Dedicated Project Management",
        "Priority Support & Strategy",
      ],
      buttonText: "Contact Us",
      buttonStyle:
        "border border-border-muted text-warm-ivory hover:bg-surface-variant hover:border-metallic-gold/50",
    },
  ];

  return (
    <section
      className="py-20 sm:py-28 md:py-36 bg-surface-container-low border-b border-border-muted"
      id="pricing"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="text-center mb-14 sm:mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-8 h-px bg-metallic-gold" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
              Investment
            </span>
            <div className="w-8 h-px bg-metallic-gold" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold mb-3 sm:mb-4">
            Transparent Pricing
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-lg">
            Clear, honest pricing with zero hidden fees. Built for return on investment.
          </p>
        </motion.div>

        {/* Pricing Cards Grid with 1 card per row on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: DURATIONS.standard, delay: idx * 0.07, ease: EASINGS.luxury }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASINGS.luxury } }}
              className={`p-6 sm:p-8 flex flex-col items-start transition-colors duration-300 relative ${
                plan.featured
                  ? "bg-surface-variant border-2 border-metallic-gold shadow-[0_0_35px_rgba(197,160,89,0.15)] lg:-translate-y-3 z-10"
                  : "bg-background border border-border-muted hover:border-metallic-gold/40"
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-metallic-gold text-pure-black font-sans text-[10px] uppercase tracking-[0.2em] font-bold px-3.5 sm:px-4 py-1.5 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory mb-2">
                {plan.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-6 min-h-[42px] leading-relaxed">
                {plan.description}
              </p>

              {/* Price Display */}
              <div className="mb-5 sm:mb-6 flex flex-col">
                {plan.prefix && (
                  <span className="text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-widest mb-1">
                    {plan.prefix}
                  </span>
                )}
                <span
                  className={`font-serif text-3xl sm:text-4xl font-semibold ${
                    plan.featured ? "text-metallic-gold" : "text-warm-ivory"
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              {/* Feature List */}
              <ul className="flex flex-col gap-3 mb-6 sm:mb-8 flex-1 w-full border-t border-border-muted/50 pt-5 sm:pt-6">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-on-surface-variant/90 border-b border-border-muted/30 pb-2.5"
                  >
                    <Check className="w-4 h-4 text-metallic-gold flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button with Touch Target */}
              <motion.a
                href="#contact"
                whileHover={{ y: -1.5, transition: { duration: 0.15, ease: EASINGS.snappy } }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-center font-sans text-xs uppercase tracking-[0.16em] font-semibold py-3.5 sm:py-4 transition-colors duration-300 flex items-center justify-center min-h-[48px] ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Pricing Disclaimer Note */}
        <p className="font-sans text-[11px] sm:text-xs text-center text-on-surface-variant/70 mt-10 sm:mt-12 max-w-2xl mx-auto leading-relaxed">
          * Domain, hosting, third-party services (APIs, CRM licenses) and major scope additions are quoted separately based on project requirements.
        </p>
      </div>
    </section>
  );
}
