/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        "deep-charcoal": "#121212",
        "pure-black": "#000000",
        "warm-ivory": "#FDFCF8",
        "metallic-gold": "#C5A059",
        surface: "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "surface-variant": "#353534",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#d1c5b4",
        primary: "#e9c176",
        "primary-container": "#c5a059",
        "border-muted": "rgba(253, 252, 248, 0.15)",
        "border-gold": "rgba(197, 160, 89, 0.3)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "display-lg": ["var(--font-playfair)", "Playfair Display", "serif"],
        "headline-lg": ["var(--font-playfair)", "Playfair Display", "serif"],
        "headline-md": ["var(--font-playfair)", "Playfair Display", "serif"],
        quote: ["var(--font-playfair)", "Playfair Display", "serif"],
        "body-lg": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "body-md": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "label-caps": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      spacing: {
        "container-max": "1440px",
        gutter: "32px",
        "margin-mobile": "24px",
        "margin-desktop": "80px",
        unit: "8px",
      },
      letterSpacing: {
        widest: "0.15em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        reveal: "reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards",
      },
    },
  },
  plugins: [],
};
