"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight, Sparkles, CheckCircle2, Flame, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { EASINGS, DURATIONS, fadeUpVariant, imageMaskVariant } from "@/lib/motion";

export default function Portfolio() {
  const completedProjects = SITE_CONFIG.portfolio.completed;
  const upcomingProjects = SITE_CONFIG.portfolio.upcoming;

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-surface-container-lowest border-t border-border-muted" id="work">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mb-14 sm:mb-18 md:mb-24"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-px bg-metallic-gold" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
                Featured Work
              </span>
            </div>

            {/* Live Portfolio Status Counters */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-metallic-gold/10 border border-metallic-gold/40 text-metallic-gold font-sans text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-metallic-gold animate-pulse" />
                2 Projects Completed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-variant border border-border-muted/50 text-on-surface-variant font-sans text-[10px] sm:text-[11px] uppercase tracking-wider rounded-full hidden xs:inline-flex">
                3 In Development
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8">
            <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl lg:text-[48px] text-warm-ivory font-semibold leading-[1.14] max-w-2xl">
              Different businesses. <br className="hidden sm:inline" />
              Different experiences. <br className="hidden sm:inline" />
              <span className="italic font-normal text-metallic-gold font-serif">One standard of quality.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
              From hospitality to fitness, ELEVORA builds custom digital experiences around the business, the audience and the goal.
            </p>
          </div>
        </motion.div>

        {/* Completed Projects Showcase (2 Real Live Projects) */}
        <div className="space-y-16 sm:space-y-24 mb-16 sm:mb-24">
          {completedProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUpVariant}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center group bg-[#131313] border border-border-muted hover:border-metallic-gold/50 transition-colors duration-500 p-5 sm:p-8 md:p-10 lg:p-12 shadow-2xl relative"
              >
                {/* Visual Mockup Preview */}
                <div
                  className={`lg:col-span-7 overflow-hidden editorial-border bg-surface p-1.5 sm:p-2 border border-border-muted/40 w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden relative group/img"
                    aria-label={`View live ${project.name} website (opens in new tab)`}
                  >
                    <motion.div variants={imageMaskVariant}>
                      <Image
                        src={project.image}
                        alt={`${project.name} — ${project.category} Website Mockup by ELEVORA`}
                        width={1376}
                        height={768}
                        className="w-full h-auto object-cover grayscale-[10%] group-hover/img:grayscale-0 group-hover/img:scale-[1.03] transition-all duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-pure-black/15 group-hover/img:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </motion.a>
                </div>

                {/* Project Details */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5 w-full ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Top Badges & Meta */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-metallic-gold text-pure-black font-sans text-[10px] uppercase tracking-[0.18em] font-bold rounded-sm shadow-sm">
                      {project.id === "ember-and-oak" ? (
                        <Flame className="w-3 h-3" />
                      ) : (
                        <Zap className="w-3 h-3" />
                      )}
                      {project.badge}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-metallic-gold font-semibold">
                      {project.label}
                    </span>
                    <span className="text-border-muted hidden sm:inline">•</span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Brand */}
                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-warm-ivory italic font-normal tracking-tight mb-1">
                      {project.name}
                    </h3>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-metallic-gold/80 font-medium">
                      {project.conceptBadge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full pt-1 border-t border-border-muted/40">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-sans text-on-surface-variant/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-metallic-gold/80 flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                    <motion.a
                      href={project.url}
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
            );
          })}
        </div>

        {/* Portfolio In-Between Conversion Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
          className="p-6 sm:p-8 md:p-10 bg-surface border border-metallic-gold/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16 sm:mb-20 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-metallic-gold/5 blur-[50px] pointer-events-none" />
          <div className="flex flex-col gap-1.5 max-w-xl">
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-metallic-gold font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored Architecture
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory font-medium">
              Have a different business?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              We build custom websites around your brand, industry, and goals — engineered for conversion.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -2, transition: { duration: 0.15, ease: EASINGS.snappy } }}
            whileTap={{ scale: 0.98 }}
            className="bg-metallic-gold text-pure-black font-sans text-xs uppercase tracking-[0.18em] font-bold px-7 py-4 hover:bg-warm-ivory transition-colors duration-300 inline-flex items-center gap-2.5 shadow-md flex-shrink-0 min-h-[48px] w-full md:w-auto justify-center"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Future Pipeline Concepts (3 Projects) */}
        <div className="pt-10 sm:pt-12 border-t border-border-muted">
          <div className="mb-6 sm:mb-8 flex items-center justify-between">
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant font-semibold">
              Pipeline Concepts
            </span>
            <span className="font-sans text-xs text-metallic-gold tracking-wide">
              3 Studios in Development
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
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
                    <span className="font-sans text-[11px] text-metallic-gold font-medium">{project.status}</span>
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
