"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      number: "01",
      title: "Business Websites",
      description:
        "Professional, authoritative digital presence designed to build trust, establish industry authority, and consistently generate high-value client leads.",
      deliverables: [
        "Custom Layout Architecture",
        "Brand Identity Integration",
        "Lead Capture & CRM Integrations",
        "Mobile & Tablet Optimization",
      ],
    },
    {
      number: "02",
      title: "E-commerce",
      description:
        "Beautifully designed online storefronts focused on frictionless checkout, high conversion rates, seamless payment gateways, and intuitive product catalog management.",
      deliverables: [
        "High-Conversion Product Pages",
        "Seamless Cart & Checkout",
        "Secure Payment Gateway Setup",
        "Inventory & Order Tracking",
      ],
    },
    {
      number: "03",
      title: "Custom Websites",
      description:
        "Bespoke web platforms and interactive applications requiring unique functionality, dynamic databases, third-party API integrations, and custom logic.",
      deliverables: [
        "Custom Web App Architecture",
        "Dynamic Database Integrations",
        "API & Third-Party Connections",
        "Scalable Cloud Hosting Setup",
      ],
    },
    {
      number: "04",
      title: "Website Redesign",
      description:
        "Modernizing outdated or underperforming websites to dramatically improve load speed, visual hierarchy, mobile responsiveness, and overall visitor engagement.",
      deliverables: [
        "Complete UI/UX Refresh",
        "Speed & Core Web Vitals Overhaul",
        "SEO Preservation & Upgrades",
        "Conversion Optimization",
      ],
    },
  ];

  return (
    <section
      className="py-20 sm:py-28 md:py-36 border-t border-border-muted bg-surface-container-low"
      id="services"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 h-px bg-metallic-gold" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
                Expertise
              </span>
            </div>
            <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold">
              Our Services
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-md md:text-right">
            Specialized solutions tailored to establish authority, captivate your audience, and drive measurable business growth.
          </p>
        </motion.div>

        {/* Services List with Tactile Hover System */}
        <div className="flex flex-col border-t border-border-muted">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={service.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUpVariant}
                custom={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex flex-col lg:flex-row lg:items-center py-8 sm:py-10 md:py-12 border-b border-border-muted transition-colors duration-400 px-3 sm:px-6 md:px-8 cursor-pointer ${
                  isHovered ? "bg-surface-variant/40" : "bg-transparent"
                }`}
              >
                {/* Service Number with Gold Illumination */}
                <div
                  className={`font-serif text-3xl sm:text-4xl md:text-5xl transition-colors duration-400 w-16 sm:w-24 flex-shrink-0 mb-2 lg:mb-0 ${
                    isHovered ? "text-metallic-gold" : "text-metallic-gold/40"
                  }`}
                >
                  {service.number}
                </div>

                {/* Service Info */}
                <div className="flex-1 mt-2 lg:mt-0 lg:pl-6">
                  <h3
                    className={`font-serif text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 transition-colors duration-300 ${
                      isHovered ? "text-metallic-gold" : "text-warm-ivory"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 pt-1">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-sans text-on-surface-variant/85"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-metallic-gold/80 flex-shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Indicator with Touch Target */}
                <div className="mt-5 lg:mt-0 lg:pl-6 flex items-center">
                  <motion.a
                    href="#contact"
                    animate={{
                      x: isHovered ? 6 : 0,
                      opacity: isHovered ? 1 : 0.7,
                    }}
                    transition={{ duration: DURATIONS.fast, ease: EASINGS.snappy }}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-metallic-gold min-h-[44px]"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-4 h-4 text-metallic-gold" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
