import React from "react";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import Introduction from "@/components/Introduction";
import Portfolio from "@/components/Portfolio";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import WhyElevora from "@/components/WhyElevora";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Maintenance from "@/components/Maintenance";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] flex flex-col relative selection:bg-metallic-gold selection:text-pure-black">
      {/* 1. ELEVORA Custom Page Load Sequence */}
      <PageLoader />

      {/* 2. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3. Subtle Desktop Interactive Pointer */}
      <CustomCursor />

      {/* 4. Sticky Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 overflow-x-hidden w-full max-w-full">
        {/* Hero Section */}
        <Hero />

        {/* Value / Trust Strip */}
        <ValueStrip />

        {/* Introduction / Deserves More Section */}
        <Introduction />

        {/* Portfolio Showcase (Featured Ember & Oak + Concepts) */}
        <Portfolio />

        {/* Industries (Who We Build For) */}
        <Industries />

        {/* Editorial Services */}
        <Services />

        {/* Why ELEVORA Principles */}
        <WhyElevora />

        {/* 6-Step Workflow Process */}
        <Process />

        {/* Transparent Pricing Plans */}
        <Pricing />

        {/* Ongoing Maintenance Packages */}
        <Maintenance />

        {/* Founder & About */}
        <About />

        {/* Testimonials Placeholder */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Final CTA & Interactive Contact Form */}
        <Contact />
      </main>

      {/* Refined Footer */}
      <Footer />
    </div>
  );
}
