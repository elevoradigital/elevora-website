"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { EASINGS, DURATIONS } from "@/lib/motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out pt-[env(safe-area-inset-top,0px)] ${
        isScrolled
          ? "bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-border-muted py-3 shadow-2xl"
          : "bg-[#0e0e0e]/85 backdrop-blur-md border-b border-border-muted/50 py-4 md:py-5"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Logo & Brand */}
        <Link href="#" className="flex items-center gap-3 group min-h-[44px]">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 overflow-hidden flex items-center justify-center rounded-full flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ELEVORA Studio Logo"
              width={40}
              height={40}
              className="object-contain group-hover:opacity-80 transition-opacity duration-300"
              priority
            />
          </div>
          <span className="font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-warm-ivory uppercase">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation with Smooth Hover Hairline */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-xs uppercase tracking-[0.15em] text-on-surface-variant hover:text-metallic-gold transition-colors duration-300 py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-metallic-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA with Tactile Motion */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="#contact"
            whileHover={{ y: -1.5, transition: { duration: 0.15, ease: EASINGS.snappy } }}
            whileTap={{ scale: 0.98 }}
            className="border border-metallic-gold text-metallic-gold font-sans text-xs font-semibold uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-metallic-gold hover:text-pure-black transition-all duration-300 inline-flex items-center gap-2 group min-h-[44px]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle Button (Touch Friendly 44x44px minimum) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-on-surface hover:text-metallic-gold transition-colors w-11 h-11 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-metallic-gold active:bg-surface-variant/50 rounded-sm"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-metallic-gold" />
          ) : (
            <Menu className="w-6 h-6 text-warm-ivory" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation with Staggered Links */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASINGS.luxury }}
            className="md:hidden overflow-hidden bg-[#101010]/98 backdrop-blur-2xl border-b border-border-muted shadow-2xl"
          >
            <div className="px-5 py-6 flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.035, duration: DURATIONS.fast }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-sm uppercase tracking-[0.18em] text-on-surface hover:text-metallic-gold active:text-metallic-gold transition-colors py-3 px-2 border-b border-border-muted/30 flex items-center justify-between min-h-[48px]"
                >
                  <span className="font-medium">{link.name}</span>
                  <span className="text-metallic-gold/60 text-xs">→</span>
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: DURATIONS.fast }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full bg-metallic-gold text-pure-black text-center font-sans text-xs font-bold uppercase tracking-[0.18em] py-4 hover:bg-warm-ivory transition-colors duration-300 flex items-center justify-center gap-2 min-h-[50px] shadow-lg"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
