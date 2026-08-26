"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { EASINGS, DURATIONS, fadeUpVariant, imageMaskVariant } from "@/lib/motion";

export default function Portfolio() {
  const upcomingProjects = [
    {
      title: "Fitness Studio",
      category: "Health & Wellness",
      tag: "Coming Soon",
      description: "High-energy boutique studio platform with automated booking and membership flows.",
    },
    {
      title: "Luxury E-commerce",
      category: "Retail & Fashion",
      tag: "Coming Soon",
      description: "Minimalist storefront built for high-ticket lifestyle apparel and seamless checkout.",
    },
    {
      title: "Real Estate",
      category: "Property & Architecture",
      tag: "Coming Soon",
      description: "Editorial property portfolio showcasing luxury architectural developments.",
    },
    {
      title: "Premium Salon",
      category: "Beauty & Care",
      tag: "Coming Soon",
      description: "Sophisticated salon experience with tiered service menus and stylist scheduling.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-surface-container-lowest border-t border-border-muted" id="work">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Section Header */}
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
              Featured Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold">
              Selected Projects
            </h2>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-md">
              Each project is designed from a clean slate, engineered with precision, and tailored to command authority.
            </p>
          </div>
        </motion.div>

        {/* Featured Project: Ember & Oak (Editorial Case Study Card) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center group bg-[#131313] border border-border-muted hover:border-metallic-gold/50 transition-colors duration-500 p-5 sm:p-8 md:p-10 lg:p-12 mb-16 sm:mb-20 shadow-2xl"
        >
          {/* Project Showcase Image with Masked Reveal */}
          <div className="lg:col-span-8 overflow-hidden editorial-border bg-surface p-1.5 sm:p-2 border border-border-muted/40 w-full">
            <motion.a
              href={SITE_CONFIG.portfolio.featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden relative"
              aria-label="View Ember & Oak Live Website Demo (opens in new tab)"
            >
              <motion.div variants={imageMaskVariant}>
                <Image
                  src="/images/ember-and-oak.png"
                  alt="Ember & Oak Restaurant Website Mockup"
                  width={1376}
                  height={768}
                  className="w-full h-auto object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 60vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-pure-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </motion.a>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4 sm:gap-6 w-full">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-metallic-gold font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                {SITE_CONFIG.portfolio.featured.badge}
              </span>
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.15em] text-on-surface-variant">
                {SITE_CONFIG.portfolio.featured.category}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-warm-ivory italic font-normal">
              {SITE_CONFIG.portfolio.featured.name}
            </h3>

            <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed">
              {SITE_CONFIG.portfolio.featured.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full">
              <motion.a
                href={SITE_CONFIG.portfolio.featured.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, transition: { duration: 0.2, ease: EASINGS.snappy } }}
                whileTap={{ scale: 0.98 }}
                className="bg-metallic-gold text-pure-black font-sans text-xs uppercase tracking-[0.16em] font-bold px-6 py-4 hover:bg-warm-ivory transition-colors duration-300 inline-flex items-center gap-2.5 shadow-md w-full sm:w-auto justify-center min-h-[48px]"
              >
                <span>View Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2, transition: { duration: 0.2, ease: EASINGS.snappy } }}
                whileTap={{ scale: 0.98 }}
                className="border border-border-muted hover:border-metallic-gold text-warm-ivory hover:text-metallic-gold font-sans text-xs uppercase tracking-[0.16em] font-semibold px-6 py-4 transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center min-h-[48px] bg-surface/40"
              >
                <span>Build Similar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Future Projects Grid */}
        <div className="pt-10 sm:pt-12 border-t border-border-muted">
          <div className="mb-6 sm:mb-8 flex items-center justify-between">
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant font-semibold">
              Pipeline Concepts
            </span>
            <span className="font-sans text-xs text-metallic-gold tracking-wide">
              4 Studios in Development
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {upcomingProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: DURATIONS.standard, delay: idx * 0.08, ease: EASINGS.luxury }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: EASINGS.luxury } }}
                className="flex flex-col p-5 sm:p-6 bg-surface border border-border-muted hover:border-metallic-gold/50 transition-colors duration-300 group shadow-sm"
              >
                <div className="aspect-[16/10] bg-surface-variant flex flex-col items-center justify-center editorial-border mb-5 sm:mb-6 border border-border-muted/30">
                  <span className="font-serif text-base sm:text-lg text-warm-ivory/70 group-hover:text-warm-ivory transition-colors">
                    {project.title}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-metallic-gold/80 mt-1 font-medium">
                    {project.tag}
                  </span>
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-metallic-gold block mb-1 font-semibold">
                      {project.category}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-warm-ivory mb-2 font-medium">
                      {project.title}
                    </h4>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-muted/30 flex items-center justify-between text-xs text-on-surface-variant">
                    <span className="font-sans text-[11px] tracking-wider uppercase text-on-surface-variant/70">Status</span>
                    <span className="font-sans text-[11px] text-metallic-gold font-medium">In Development</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
