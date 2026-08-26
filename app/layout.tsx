import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "ELEVORA | Professional Websites for Businesses",
  description:
    "ELEVORA designs and develops modern, responsive websites for businesses, e-commerce brands and growing companies.",
  keywords: [
    "ELEVORA",
    "Website Design Studio",
    "Web Development Agency",
    "Custom Websites",
    "Business Websites",
    "E-commerce Development",
    "Website Redesign",
    "Website Maintenance",
    "Sai Darshan",
  ],
  authors: [{ name: SITE_CONFIG.founder.name, url: SITE_CONFIG.contact.instagram.url }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ELEVORA | Professional Websites for Businesses",
    description:
      "ELEVORA designs and develops modern, responsive websites for businesses, e-commerce brands and growing companies.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-mockup.png",
        width: 1200,
        height: 630,
        alt: "ELEVORA - Professional Web Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVORA | Professional Websites for Businesses",
    description:
      "ELEVORA designs and develops modern, responsive websites for businesses, e-commerce brands and growing companies.",
    images: ["/images/hero-mockup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.founder.name,
      jobTitle: SITE_CONFIG.founder.role,
    },
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.contact.email,
    sameAs: [SITE_CONFIG.contact.instagram.url],
    priceRange: "₹9,999 - ₹30,000+",
    areaServed: "Global",
    knowsAbout: [
      "Custom Website Design",
      "Next.js Development",
      "E-commerce Websites",
      "Website Maintenance",
      "UI/UX Design",
    ],
    offers: [
      {
        "@type": "Offer",
        name: `${SITE_CONFIG.name} Starter Plan`,
        price: "9999",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: `${SITE_CONFIG.name} Business Plan`,
        price: "19999",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: `${SITE_CONFIG.name} E-Commerce Plan`,
        price: "29999",
        priceCurrency: "INR",
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} bg-[#0e0e0e] text-[#e5e2e1] antialiased selection:bg-metallic-gold selection:text-pure-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
