"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EASINGS, DURATIONS, fadeUpVariant } from "@/lib/motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a website project take?",
      answer:
        "A typical custom business website takes 2 to 4 weeks from discovery and wireframing to live deployment. E-commerce stores and advanced custom web applications generally take 4 to 8 weeks depending on the complexity of integrations and product volume.",
    },
    {
      question: "Do you use templates?",
      answer:
        "No. Every single ELEVORA project is designed and custom-coded from scratch. We believe high-value businesses require a distinct digital identity, optimal speed, and clean code that generic website templates cannot provide.",
    },
    {
      question: "Do I need to buy a domain and hosting?",
      answer:
        "If you already own a domain and hosting, we will configure everything seamlessly. If you are starting fresh, we provide complete guidance on purchasing the right domain and set up high-speed global cloud hosting with free SSL.",
    },
    {
      question: "Can you build e-commerce websites?",
      answer:
        "Yes, we specialize in high-conversion e-commerce stores. We integrate secure payment gateways (such as Razorpay and Stripe), setup product filters, customer accounts, and build frictionless mobile-first checkout flows.",
    },
    {
      question: "Do you provide ongoing maintenance after launch?",
      answer:
        "Yes! Through Elevora Care and Elevora Pro Care, we provide ongoing maintenance, continuous uptime monitoring, weekly cloud backups, security patches, and monthly content/image updates so you never have to worry about technical issues.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can perform a comprehensive audit of your current site, retain your existing SEO rankings, and transform the entire user experience with modern editorial design, faster load times, and better conversion paths.",
    },
    {
      question: "Will my website look great on mobile devices?",
      answer:
        "Every layout is engineered mobile-first. We rigorously test across various viewport sizes (320px to 4K desktop screens) to guarantee flawless responsiveness, swift tap interactions, and crisp typography everywhere.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-surface border-t border-border-muted" id="faq">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center">
            <div className="w-8 h-px bg-metallic-gold" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
              Frequently Asked Questions
            </span>
            <div className="w-8 h-px bg-metallic-gold" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-4xl md:text-5xl text-warm-ivory font-semibold mb-3 sm:mb-4">
            Common Questions
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant">
            Everything you need to know about partnering with ELEVORA.
          </p>
        </motion.div>

        {/* Accordion List with Smooth Height & Opacity Interpolation */}
        <div className="max-w-3xl mx-auto flex flex-col gap-2 sm:gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-border-muted transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-4 sm:py-5 md:py-6 flex justify-between items-center gap-3 sm:gap-4 group focus:outline-none min-h-[54px]"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`font-serif text-base sm:text-lg md:text-xl pr-2 transition-colors duration-300 ${
                      isOpen
                        ? "text-metallic-gold font-medium"
                        : "text-warm-ivory group-hover:text-metallic-gold"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: DURATIONS.fast, ease: EASINGS.snappy }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "border-metallic-gold bg-metallic-gold/10"
                        : "border-border-muted group-hover:border-metallic-gold/50"
                    }`}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                        isOpen ? "text-metallic-gold" : "text-on-surface-variant group-hover:text-metallic-gold"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASINGS.luxury }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed pb-5 sm:pb-6 pl-0.5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
