"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function WhyElevora() {
  const principles = [
    {
      number: "01",
      title: "Custom Design",
      description:
        "No templates. We design from scratch to perfectly align with your brand's unique identity, aesthetic, and market positioning.",
    },
    {
      number: "02",
      title: "Fully Responsive",
      description:
        "Flawless experiences engineered across all screen sizes, from 320px smartphones to high-resolution 4K desktop displays.",
    },
    {
      number: "03",
      title: "High Performance",
      description:
        "Lightning-fast load times, optimized assets, clean semantic markup, and top-tier Google Core Web Vitals scores.",
    },
    {
      number: "04",
      title: "Business-Focused",
      description:
        "Every page and section is strategically structured to guide visitors, showcase value, capture inquiries, and drive revenue.",
    },
    {
      number: "05",
      title: "Dedicated Support",
      description:
        "We don't just launch and disappear. We provide reliable monthly maintenance, security monitoring, and content updates.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-surface border-t border-border-muted" id="why-elevora">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-8 h-px bg-metallic-gold" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
              The Elevora Standard
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold mb-2 sm:mb-3">
                Why Elevora?
              </h2>
              <p className="font-serif text-base sm:text-lg md:text-xl text-metallic-gold/90 italic">
                Built around your business. Not a template.
              </p>
            </div>
            <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-md">
              Core architectural principles that guide every line of code, design decision, and client relationship.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-12 md:gap-y-16 gap-x-8 sm:gap-x-10">
          {principles.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: DURATIONS.standard, delay: idx * 0.08, ease: EASINGS.luxury }}
              className="border-l-2 border-metallic-gold/40 hover:border-metallic-gold pl-4 sm:pl-6 py-1 sm:py-2 transition-colors duration-300 group"
            >
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-metallic-gold/70 group-hover:text-metallic-gold block mb-1.5 sm:mb-2 font-semibold">
                {item.number}
              </span>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-warm-ivory mb-2 sm:mb-3 font-medium">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
