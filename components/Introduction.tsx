"use client";

import React from "react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function Introduction() {
  return (
    <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto text-center relative" id="deserves-more">
      {/* Header Info */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUpVariant}
        className="max-w-3xl mx-auto flex flex-col items-center gap-4 sm:gap-6"
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-metallic-gold" />
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
            Digital Craftsmanship
          </span>
        </div>

        <h2 className="font-serif text-[28px] sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.18] sm:leading-tight text-warm-ivory font-semibold">
          Your business deserves <br className="hidden sm:inline" />
          more than a template.
        </h2>

        <p className="font-sans text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          We craft bespoke digital experiences that reflect the unique quality of your offerings.
          No shortcuts, just pure digital craftsmanship tailored to elevate your brand from the generic to the exceptional.
        </p>
      </motion.div>

      {/* Visual Comparison: Vertical Flow on Mobile, Horizontal on Desktop */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-14 lg:gap-16 w-full"
      >
        {/* 1. Template Card (Muted, reveals first) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 0.6, y: 0, transition: { duration: DURATIONS.cinematic, ease: EASINGS.luxury } },
          }}
          whileHover={{ opacity: 0.85, transition: { duration: 0.3 } }}
          className="flex flex-col items-center gap-3 grayscale w-full max-w-[260px] sm:max-w-xs"
        >
          <div className="w-full h-32 sm:h-36 border border-border-muted flex flex-col items-center justify-center bg-surface-container/60 p-4">
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-on-surface-variant font-bold">
              TEMPLATE
            </span>
            <span className="text-[11px] text-on-surface-variant/70 mt-1">Pre-built • Rigid • Common</span>
          </div>
          <span className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant">
            Generic &amp; Limiting
          </span>
        </motion.div>

        {/* 2. Transition Indicator (Down arrow on mobile, Right arrow on desktop) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: DURATIONS.standard, delay: 0.2, ease: EASINGS.luxury } },
          }}
          className="flex items-center justify-center"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-metallic-gold/40 flex items-center justify-center bg-surface shadow-md">
            <ArrowDown className="w-4 h-4 text-metallic-gold md:hidden" />
            <ArrowRight className="w-5 h-5 text-metallic-gold hidden md:block" />
          </div>
        </motion.div>

        {/* 3. Elevora Custom Card (Illuminated with gold sheen) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: DURATIONS.cinematic, delay: 0.35, ease: EASINGS.luxury } },
          }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: EASINGS.luxury } }}
          className="flex flex-col items-center gap-3 group w-full max-w-[280px] sm:max-w-xs"
        >
          <div className="w-full h-36 sm:h-44 border border-metallic-gold flex flex-col items-center justify-center bg-surface-variant shadow-[0_0_35px_rgba(197,160,89,0.15)] editorial-border relative p-5 sm:p-6">
            <span className="font-sans text-xs sm:text-sm tracking-[0.2em] font-bold text-metallic-gold uppercase">
              ELEVORA CUSTOM
            </span>
            <span className="text-[11px] sm:text-xs text-warm-ivory/80 mt-1.5 sm:mt-2">
              Bespoke Architecture • Fast • Scalable
            </span>
          </div>
          <span className="font-sans text-xs uppercase tracking-[0.15em] text-metallic-gold font-semibold">
            Bespoke &amp; Scalable
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
