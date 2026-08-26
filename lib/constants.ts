/**
 * ELEVORA Agency Global Configuration & Constants
 * Single source of truth for contact details, social links, and brand metadata.
 */

export const SITE_CONFIG = {
  name: "ELEVORA",
  legalName: "ELEVORA Studio",
  tagline: "BUILD • ELEVATE • GROW",
  taglineExtended: "We build websites that build your business.",
  description:
    "ELEVORA designs and develops modern, responsive websites for businesses, e-commerce brands and growing companies. Digital craftsmanship for the bold.",
  url: "https://elevora.com",
  founder: {
    name: "Sai Darshan",
    role: "Founder, ELEVORA",
    title: "Founder & Creative Director",
    bioQuote:
      "At Elevora, we believe that your digital presence should be as meticulously crafted as your business itself. We partner with ambitious brands to translate their vision into high-performing, beautifully designed web experiences.",
  },
  contact: {
    // Verified business communication channel
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "elevoradigital.in@gmail.com",
    // WhatsApp configuration (defaults to international business WhatsApp URL format)
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919444949868",
    whatsappDefaultMessage: "Hello ELEVORA, I'd like to discuss a website project.",
    get whatsappUrl() {
      const cleanNumber = this.whatsappNumber.replace(/[^0-9]/g, "");
      const encodedMsg = encodeURIComponent(this.whatsappDefaultMessage);
      return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
    },
    instagram: {
      handle: "@getelevora",
      url: "https://instagram.com/getelevora",
    },
  },
  portfolio: {
    featured: {
      name: "Ember & Oak",
      category: "Restaurant & Hospitality",
      badge: "CONCEPT PROJECT — ELEVORA",
      url: "https://ember-and-oak-chi.vercel.app/",
      description:
        "An immersive restaurant experience combining editorial design, premium interactions, responsive layouts and a seamless reservation journey.",
    },
  },
  pricing: {
    starter: {
      name: "Starter",
      price: "₹9,999",
      priceValue: 9999,
      description: "Perfect for emerging brands needing a strong, authoritative digital foundation.",
    },
    business: {
      name: "Business",
      price: "₹19,999",
      priceValue: 19999,
      badge: "MOST POPULAR",
      description: "Comprehensive solution for established companies ready to command their market.",
    },
    ecommerce: {
      name: "E-Commerce",
      price: "₹29,999",
      prefix: "From",
      priceValue: 29999,
      description: "Robust online storefronts engineered to maximize conversions and sales.",
    },
    custom: {
      name: "Custom",
      price: "Let's Talk",
      description: "Bespoke platforms, web applications, and specialized digital ecosystems.",
    },
  },
  maintenance: {
    care: {
      name: "ELEVORA CARE",
      price: "₹999",
      period: "/ month",
      priceValue: 999,
      requestsLimit: "Up to 2 small update requests/month",
    },
    proCare: {
      name: "ELEVORA PRO CARE",
      price: "₹1,999",
      period: "/ month",
      badge: "RECOMMENDED",
      priceValue: 1999,
      requestsLimit: "Up to 5 update requests/month",
    },
  },
} as const;
