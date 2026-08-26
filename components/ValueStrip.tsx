"use client";

import React from "react";
import { Palette, Smartphone, Zap, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export default function ValueStrip() {
  const items = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Built around your brand.",
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description: "Flawless on all screens.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fast, clean & optimized.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Dedicated care post-launch.",
    },
  ];

  return (
    <section className="border-y border-border-muted py-6 sm:py-8 md:py-10 bg-surface-container-low/40 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={idx * 0.5}
              className="flex items-start sm:items-center gap-3 sm:gap-4 group p-2 rounded-sm"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-surface-variant/80 border border-border-muted group-hover:border-metallic-gold/60 flex items-center justify-center transition-colors duration-300 flex-shrink-0 mt-0.5 sm:mt-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-metallic-gold" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.14em] text-warm-ivory font-semibold group-hover:text-metallic-gold transition-colors duration-300 truncate">
                  {item.title}
                </span>
                <span className="font-sans text-[11px] text-on-surface-variant leading-tight mt-0.5">
                  {item.description}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
