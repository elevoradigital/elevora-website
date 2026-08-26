"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EASINGS } from "@/lib/motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Check if loader has already shown this session to keep repeated browsing instant
    const hasLoaded = sessionStorage.getItem("elevora_loader_seen");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Sequence duration: ~1000ms
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("elevora_loader_seen", "true");
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="elevora-page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.5, ease: EASINGS.luxury },
          }}
          className="fixed inset-0 z-[9999] bg-[#0e0e0e] flex flex-col items-center justify-center pointer-events-none select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.08)_0%,_transparent_70%)]" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            {/* Logo Mark Fade-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASINGS.luxury }}
              className="w-14 h-14 relative"
            >
              <Image
                src="/images/logo.png"
                alt="ELEVORA Mark"
                width={56}
                height={56}
                className="object-contain drop-shadow-md"
                priority
              />
            </motion.div>

            {/* Wordmark Mask Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: EASINGS.luxury }}
              className="overflow-hidden"
            >
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-[0.25em] text-warm-ivory uppercase block">
                ELEVORA
              </span>
            </motion.div>

            {/* Expanding Gold Hairline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASINGS.luxury }}
              className="h-px bg-gradient-to-r from-transparent via-metallic-gold to-transparent my-1"
            />

            {/* Tagline Reveal */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 0.45, delay: 0.45, ease: EASINGS.luxury }}
            >
              <span className="font-sans text-[10px] md:text-xs text-metallic-gold uppercase font-semibold">
                BUILD • ELEVATE • GROW
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
