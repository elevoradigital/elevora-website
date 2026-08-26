"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understanding your brand vision, target audience, competitive edge, and business goals.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Planning page architecture, user journeys, content structure, and conversion funnels.",
    },
    {
      number: "03",
      title: "Design",
      description: "Crafting bespoke, high-fidelity editorial layouts and refined interaction details.",
    },
    {
      number: "04",
      title: "Develop",
      description: "Building with clean Next.js, responsive layouts, and performance-optimized code.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Comprehensive QA testing across devices, speed validation, and flawless domain deployment.",
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing proactive maintenance, security checks, and continuous feature evolution.",
    },
  ];

  return (
    <section
      className="py-20 sm:py-28 md:py-36 bg-surface-container-lowest border-y border-border-muted"
      id="process"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mb-14 sm:mb-20 text-center"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center">
            <div className="w-8 h-px bg-metallic-gold" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
              From Idea to Launch
            </span>
            <div className="w-8 h-px bg-metallic-gold" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold mb-3 sm:mb-4">
            Our Process
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-lg mx-auto">
            A methodical, milestone-driven workflow ensuring clarity, speed, and uncompromising quality.
          </p>
        </motion.div>

        {/* 1. Mobile Vertical Timeline Layout (Clean, readable, connected progress) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l border-metallic-gold/30 ml-2 sm:ml-4 flex flex-col gap-8 sm:gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: DURATIONS.standard, delay: idx * 0.06, ease: EASINGS.luxury }}
              className="relative flex flex-col items-start text-left group"
            >
              {/* Connected Gold Node on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#101010] border-2 border-metallic-gold flex items-center justify-center shadow-[0_0_12px_rgba(197,160,89,0.4)]">
                <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold" />
              </div>

              {/* Step Header */}
              <div className="flex items-center gap-2 mb-1">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-metallic-gold font-semibold">
                  {step.number}
                </span>
                <span className="text-on-surface-variant/40">•</span>
                <h3 className="font-serif text-lg sm:text-xl text-warm-ivory font-medium">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 2. Desktop 6-Column Horizontal Timeline Layout */}
        <div className="hidden lg:grid grid-cols-6 gap-8 relative">
          {/* Animated Horizontal Connecting Hairline */}
          <div className="absolute top-3 left-6 right-6 h-px bg-border-muted/50 z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, ease: EASINGS.luxury }}
              className="h-full bg-gradient-to-r from-metallic-gold/20 via-metallic-gold to-metallic-gold/80 origin-left"
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: DURATIONS.standard, delay: idx * 0.1, ease: EASINGS.luxury }}
              className="relative z-10 flex flex-col items-start text-left group"
            >
              {/* Node Indicator */}
              <div className="w-6 h-6 rounded-full bg-[#121212] border-2 border-metallic-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(197,160,89,0.3)] group-hover:bg-metallic-gold transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-metallic-gold group-hover:bg-pure-black transition-colors duration-300" />
              </div>

              {/* Step Number */}
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-metallic-gold mb-2 font-semibold">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl text-warm-ivory mb-2 font-medium">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
