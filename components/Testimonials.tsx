"use client";

import React from "react";
import { MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-low border-y border-border-muted text-center relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center max-w-xl"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-metallic-gold/30 flex items-center justify-center mb-4 sm:mb-6 bg-surface/50">
            <MessageSquareQuote className="w-5 h-5 sm:w-6 sm:h-6 text-metallic-gold" strokeWidth={1.5} />
          </div>
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-metallic-gold mb-2.5 sm:mb-3 font-semibold">
            Social Proof &amp; Reviews
          </span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-ivory/70 uppercase tracking-[0.12em] sm:tracking-[0.15em] font-light leading-snug">
            Client Stories Coming Soon
          </h2>
          <p className="font-sans text-xs sm:text-sm text-on-surface-variant/70 max-w-md mt-3 sm:mt-4 leading-relaxed">
            We are currently documenting impactful case studies and client feedback from our newest bespoke launches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
