"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { EASINGS, DURATIONS, fadeUpVariant, imageMaskVariant } from "@/lib/motion";

export default function About() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-surface border-t border-border-muted" id="about">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Portrait: Appears on Top for Mobile, Right Column on Desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={imageMaskVariant}
            className="md:col-span-5 order-1 md:order-2 flex justify-center w-full"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5] sm:aspect-square bg-[#1a1a1a] editorial-border relative border border-border-muted/60 overflow-hidden shadow-2xl group">
              <Image
                src="/images/founder-portrait.png"
                alt={`${SITE_CONFIG.founder.name} — Founder of ${SITE_CONFIG.name}`}
                width={600}
                height={600}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 80vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-metallic-gold block font-semibold">
                  ELEVORA DIGITAL ATELIER
                </span>
                <span className="font-serif text-xs sm:text-sm text-warm-ivory">
                  Bespoke Craftsmanship
                </span>
              </div>
            </div>
          </motion.div>

          {/* Vision & Founder Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariant}
            className="md:col-span-7 flex flex-col gap-5 sm:gap-6 md:gap-8 order-2 md:order-1"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-px bg-metallic-gold" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
                Studio Leadership
              </span>
            </div>

            <h2 className="font-serif text-[28px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold leading-tight">
              Building digital legacies.
            </h2>

            <blockquote className="font-serif text-base sm:text-lg md:text-xl text-on-surface-variant italic leading-relaxed border-l-2 border-metallic-gold/50 pl-4 sm:pl-6 my-1 sm:my-2">
              &ldquo;{SITE_CONFIG.founder.bioQuote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border-muted/50">
              <div>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-warm-ivory font-medium">
                  {SITE_CONFIG.founder.name}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.15em] text-metallic-gold mt-0.5 sm:mt-1">
                  {SITE_CONFIG.founder.title}
                </p>
              </div>

              <motion.a
                href={SITE_CONFIG.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1.5, transition: { duration: 0.15, ease: EASINGS.snappy } }}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.15em] text-on-surface-variant hover:text-metallic-gold transition-colors py-2 group min-h-[44px]"
              >
                <Instagram className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                <span>{SITE_CONFIG.contact.instagram.handle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
