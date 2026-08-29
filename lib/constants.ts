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
        "An immersive restaurant website built around atmosphere, storytelling, menu discovery and reservations.",
    },
    completed: [
      {
        id: "ember-and-oak",
        index: "01",
        label: "01 / RESTAURANT",
        name: "Ember & Oak",
        industry: "Hospitality",
        category: "Restaurant & Hospitality",
        badge: "LIVE PROJECT",
        conceptBadge: "CONCEPT PROJECT — ELEVORA",
        url: "https://ember-and-oak-chi.vercel.app/",
        image: "/images/ember-and-oak.png",
        description:
          "An immersive restaurant website built around atmosphere, storytelling, menu discovery and reservations.",
        highlights: [
          "Editorial Dining Storytelling",
          "Tasting Menus & Wine Pairing",
          "Seamless Online Reservations",
          "Atmospheric Dark Aesthetic",
        ],
      },
      {
        id: "volt-athletics",
        index: "02",
        label: "02 / FITNESS",
        name: "Volt Athletics",
        industry: "Fitness & Performance",
        category: "Fitness & Performance",
        badge: "LIVE PROJECT",
        conceptBadge: "CONCEPT PROJECT — ELEVORA",
        url: "https://volt-athletics-pi.vercel.app/",
        image: "/images/volt-athletics.png",
        description:
          "A high-performance fitness website built around training programs, memberships, class scheduling and trial bookings.",
        highlights: [
          "4 Structured Training Tracks",
          "Dynamic Class Timetable",
          "Membership Tier Comparison",
          "Instant Free Trial Booking",
        ],
      },
    ],
    upcoming: [
      {
        title: "Luxury E-commerce",
        category: "Retail & Fashion",
        tag: "Coming Soon",
        status: "In Development",
        description:
          "Minimalist storefront built for high-ticket lifestyle apparel and seamless checkout.",
      },
      {
        title: "Real Estate",
        category: "Property & Architecture",
        tag: "Coming Soon",
        status: "In Development",
        description:
          "Editorial property portfolio showcasing luxury architectural developments.",
      },
      {
        title: "Premium Salon",
        category: "Beauty & Care",
        tag: "Coming Soon",
        status: "In Development",
        description:
          "Sophisticated salon experience with tiered service menus and stylist scheduling.",
      },
    ],
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
