"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { EASINGS, DURATIONS } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !("ontouchstart" in window));
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop, { passive: true });
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Subtle 3D Perspective Tilt on Pointer Move (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[90vh] flex flex-col justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Copy & Responsive Hierarchy */}
        <div className="lg:col-span-7 z-10 flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:pr-6">
          {/* 1. Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: DURATIONS.cinematic, delay: 0.1, ease: EASINGS.luxury }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 28 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASINGS.luxury }}
              className="h-px bg-metallic-gold"
            />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
              Web Design &amp; Development
            </span>
          </motion.div>

          {/* 2. Main Headline (Responsive typography for mobile screens) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.cinematic, delay: 0.2, ease: EASINGS.luxury }}
            className="font-serif text-[34px] leading-[1.12] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] lg:leading-[1.08] text-warm-ivory font-bold tracking-tight"
          >
            We build <br className="hidden xs:inline sm:inline" />
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASINGS.luxury }}
              className="italic font-normal text-metallic-gold font-serif inline-block mr-2"
            >
              websites
            </motion.span>
            that <br />
            build your business.
          </motion.h1>

          {/* 3. Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.cinematic, delay: 0.4, ease: EASINGS.luxury }}
            className="font-sans text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed"
          >
            Professional, responsive websites designed around your brand, your
            customers, and your goals. Digital craftsmanship for the bold.
          </motion.p>

          {/* 4. Touch-Friendly CTAs (Full width on mobile, side-by-side on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.cinematic, delay: 0.5, ease: EASINGS.luxury }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto pt-1 w-full"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, transition: { duration: 0.2, ease: EASINGS.snappy } }}
              whileTap={{ scale: 0.98 }}
              className="bg-metallic-gold text-pure-black font-sans text-xs uppercase tracking-[0.18em] font-bold px-7 py-4 sm:py-5 hover:bg-warm-ivory transition-colors duration-300 inline-flex items-center justify-center gap-3 shadow-lg min-h-[50px] sm:min-h-[54px] w-full sm:w-auto"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="#work"
              whileHover={{ y: -2, transition: { duration: 0.2, ease: EASINGS.snappy } }}
              whileTap={{ scale: 0.98 }}
              className="border border-border-muted hover:border-metallic-gold text-warm-ivory hover:text-metallic-gold font-sans text-xs uppercase tracking-[0.18em] font-semibold px-7 py-4 sm:py-5 transition-all duration-300 inline-flex items-center justify-center gap-3 bg-surface/50 min-h-[50px] sm:min-h-[54px] w-full sm:w-auto"
            >
              <span>View Our Work</span>
              <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* 5. Supporting Service Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="pt-4 border-t border-border-muted/40 w-full flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-sans text-on-surface-variant/80 tracking-wide"
          >
            <span className="text-metallic-gold">✦</span>
            <span>Business Websites</span>
            <span className="text-border-muted">•</span>
            <span>E-commerce</span>
            <span className="text-border-muted">•</span>
            <span>Custom Web Solutions</span>
          </motion.div>
        </div>

        {/* Right Column: Multi-Device Website Mockup with Mobile Safeguards */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASINGS.luxury }}
          style={
            isDesktop
              ? {
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                }
              : {}
          }
          className="lg:col-span-5 relative mt-4 sm:mt-6 lg:mt-0 w-full max-w-xl mx-auto lg:max-w-none"
        >
          {/* Ambient Gold Radial Glow */}
          <div className="absolute -inset-6 sm:-inset-10 bg-metallic-gold/12 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

          {/* Gentle Floating Mockup Showcase */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative image-zoom-container p-2 sm:p-2.5 bg-[#121212]/85 border border-border-muted/70 shadow-2xl backdrop-blur-md editorial-border"
          >
            <Image
              src="/images/hero-mockup.png"
              alt="ELEVORA Multi-Device Website Showcase"
              width={1376}
              height={768}
              priority
              className="w-full h-auto object-cover drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
