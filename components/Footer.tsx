"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, ArrowUp, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-border-muted pt-16 sm:pt-20 pb-[max(2rem,env(safe-area-inset-bottom,2rem))] text-on-surface">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 justify-between">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
            <Link href="#" className="flex items-center gap-3.5 group min-h-[44px]">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="ELEVORA Studio Logo"
                  width={40}
                  height={40}
                  className="object-contain group-hover:opacity-80 transition-opacity"
                />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-warm-ivory uppercase">
                {SITE_CONFIG.name}
              </span>
            </Link>

            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-metallic-gold font-semibold">
              {SITE_CONFIG.tagline}
            </span>

            <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Professional website design and development studio. We build bespoke, high-converting digital platforms for ambitious businesses and growing brands.
            </p>

            <div className="pt-1 sm:pt-2">
              <span className="font-sans text-[11px] text-on-surface-variant/70 block">
                Founded by {SITE_CONFIG.founder.name}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-3 sm:gap-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-metallic-gold font-semibold mb-1 sm:mb-2">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 font-sans text-xs uppercase tracking-wider text-on-surface-variant">
              <li>
                <a href="#work" className="hover:text-warm-ivory transition-colors py-1 inline-block">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-warm-ivory transition-colors py-1 inline-block">
                  Services &amp; Expertise
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-warm-ivory transition-colors py-1 inline-block">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-warm-ivory transition-colors py-1 inline-block">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#maintenance" className="hover:text-warm-ivory transition-colors py-1 inline-block">
                  Maintenance Care
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-warm-ivory transition-colors py-1 inline-block">
                  About ELEVORA
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-warm-ivory transition-colors py-1 inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 flex flex-col gap-3 sm:gap-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-metallic-gold font-semibold mb-1 sm:mb-2">
              Connect &amp; Inquire
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-on-surface-variant">
              <li>
                <a
                  href={SITE_CONFIG.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-warm-ivory transition-colors group min-h-[44px] py-1"
                >
                  <Instagram className="w-4 h-4 text-metallic-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.instagram.handle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-2.5 hover:text-warm-ivory transition-colors group min-h-[44px] py-1 break-all"
                >
                  <Mail className="w-4 h-4 text-metallic-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-warm-ivory transition-colors group min-h-[44px] py-1"
                >
                  <MessageCircle className="w-4 h-4 text-metallic-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-2 sm:mt-4 inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.15em] text-metallic-gold/80 hover:text-metallic-gold transition-colors py-2 min-h-[44px]"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-muted/50 pt-6 sm:pt-8 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] font-sans text-on-surface-variant/60 tracking-wider text-center md:text-left">
        <p>© 2026 {SITE_CONFIG.name}. All Rights Reserved.</p>
        <div className="flex gap-5 sm:gap-6">
          <a href="#" className="hover:text-metallic-gold transition-colors py-1">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-metallic-gold transition-colors py-1">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
