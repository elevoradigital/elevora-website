"use client";

import React from "react";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function Maintenance() {
  const careFeatures = [
    "Minor text and image updates",
    "Small styling and bug fixes",
    "24/7 Website uptime & monitoring",
    "Automated weekly backup checks",
    "Technical support via Email & WhatsApp",
    "Up to 2 small update requests / month",
  ];

  const proCareFeatures = [
    "Everything included in Elevora Care",
    "Up to 5 update requests / month",
    "New content & section updates",
    "Continuous speed & performance audits",
    "Monthly SEO health & ranking checks",
    "Priority turnaround (under 24 hours)",
    "Comprehensive monthly website review",
  ];

  return (
    <section className="py-18 sm:py-24 md:py-32 bg-surface border-b border-border-muted" id="maintenance">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center">
            <div className="w-8 h-px bg-metallic-gold" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
              Post-Launch Protection
            </span>
            <div className="w-8 h-px bg-metallic-gold" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold mb-3 sm:mb-4">
            Ongoing Maintenance
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant">
            Keep your website secure, pristine, and performing at peak speeds long after launch.
          </p>
        </motion.div>

        {/* Maintenance Cards with Smooth Hovers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Elevora Care */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: DURATIONS.standard, ease: EASINGS.luxury }}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: EASINGS.luxury } }}
            className="border border-border-muted p-6 sm:p-8 md:p-10 bg-surface-container flex flex-col justify-between hover:border-metallic-gold/40 transition-colors duration-300 shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory mb-1">
                    {SITE_CONFIG.maintenance.care.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant">
                    Essential updates, security &amp; monitoring.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-serif text-2xl sm:text-3xl text-metallic-gold font-semibold block">
                    {SITE_CONFIG.maintenance.care.price}
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-sans">
                    {SITE_CONFIG.maintenance.care.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 sm:gap-3 border-t border-border-muted/50 pt-5 sm:pt-6 mb-6 sm:mb-8">
                {careFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-on-surface-variant"
                  >
                    <Check className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ y: -1.5, transition: { duration: 0.15, ease: EASINGS.snappy } }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-center border border-border-muted hover:border-metallic-gold text-warm-ivory hover:text-metallic-gold font-sans text-xs uppercase tracking-[0.15em] font-semibold py-3.5 transition-colors duration-300 flex items-center justify-center min-h-[48px]"
            >
              Choose Care
            </motion.a>
          </motion.div>

          {/* Elevora Pro Care */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: DURATIONS.standard, delay: 0.08, ease: EASINGS.luxury }}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: EASINGS.luxury } }}
            className="border-2 border-metallic-gold p-6 sm:p-8 md:p-10 bg-surface-variant flex flex-col justify-between relative shadow-[0_0_30px_rgba(197,160,89,0.12)] mt-3 md:mt-0"
          >
            <div className="absolute -top-3.5 left-6 sm:left-8 bg-metallic-gold text-pure-black font-sans text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Zap className="w-3 h-3" />
              {SITE_CONFIG.maintenance.proCare.badge}
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6 pt-2">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory mb-1">
                    {SITE_CONFIG.maintenance.proCare.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant">
                    Priority support, content &amp; SEO health.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-serif text-2xl sm:text-3xl text-metallic-gold font-semibold block">
                    {SITE_CONFIG.maintenance.proCare.price}
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-sans">
                    {SITE_CONFIG.maintenance.proCare.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 sm:gap-3 border-t border-border-muted/50 pt-5 sm:pt-6 mb-6 sm:mb-8">
                {proCareFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-on-surface-variant"
                  >
                    <Check className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ y: -1.5, transition: { duration: 0.15, ease: EASINGS.snappy } }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-center bg-metallic-gold text-pure-black hover:bg-warm-ivory font-sans text-xs uppercase tracking-[0.15em] font-bold py-3.5 transition-colors duration-300 flex items-center justify-center shadow-md min-h-[48px]"
            >
              Choose Pro Care
            </motion.a>
          </motion.div>
        </div>

        {/* Scope Note */}
        <p className="font-sans text-[11px] sm:text-xs text-center text-on-surface-variant/70 mt-8 sm:mt-10 max-w-2xl mx-auto leading-relaxed">
          * Major redesigns, new page creations, complex backend logic, and custom third-party integrations are quoted separately.
        </p>
      </div>
    </section>
  );
}
