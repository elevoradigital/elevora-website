"use client";

import React from "react";
import {
  Utensils,
  Dumbbell,
  Scissors,
  Home,
  ShoppingBag,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Rocket,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function Industries() {
  const industries = [
    { title: "Restaurants", category: "Hospitality & Dining", icon: Utensils },
    { title: "Gyms", category: "Fitness & Studios", icon: Dumbbell },
    { title: "Salons", category: "Beauty & Wellness", icon: Scissors },
    { title: "Real Estate", category: "Property & Estates", icon: Home },
    { title: "Retail", category: "Boutiques & Stores", icon: ShoppingBag },
    { title: "E-commerce", category: "Digital Commerce", icon: ShoppingCart },
    { title: "Healthcare", category: "Clinics & Medical", icon: HeartPulse },
    { title: "Education", category: "Academies & EdTech", icon: GraduationCap },
    { title: "Startups", category: "Tech & Innovation", icon: Rocket },
    { title: "Professional Services", category: "Corporate & Consulting", icon: Briefcase },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-surface border-t border-border-muted" id="industries">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center">
            <div className="w-8 h-px bg-metallic-gold" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
              Industries
            </span>
            <div className="w-8 h-px bg-metallic-gold" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory text-center mb-3 sm:mb-4 font-semibold">
            Who We Build For
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant text-center max-w-xl mx-auto">
            Tailored web solutions engineered to meet the distinct operational and conversion requirements of your industry.
          </p>
        </motion.div>

        {/* 10-Industry Staggered Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 text-center">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: DURATIONS.standard, delay: idx * 0.04, ease: EASINGS.luxury }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: EASINGS.luxury } }}
                className="p-4 sm:p-6 md:p-8 border border-border-muted hover:border-metallic-gold/60 transition-colors duration-300 bg-[#121212] flex flex-col items-center justify-center group shadow-sm min-h-[140px] sm:min-h-[160px]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-surface-variant/60 border border-border-muted/50 group-hover:border-metallic-gold/40 flex items-center justify-center mb-3 sm:mb-4 transition-colors flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-metallic-gold/80 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-sm sm:text-base md:text-lg text-warm-ivory mb-1 font-medium group-hover:text-metallic-gold transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-wider line-clamp-1 sm:line-clamp-none">
                  {item.category}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
