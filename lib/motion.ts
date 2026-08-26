/**
 * ELEVORA Signature Motion System
 * Reusable animation tokens, easings, and variants for Framer Motion.
 * Philosophy: Precision • Confidence • Craftsmanship • Less Motion, More Impact
 */

import { Variants } from "framer-motion";

// Luxury Editorial Easing Curves
export const EASINGS = {
  // Smooth, controlled deceleration
  luxury: [0.16, 1, 0.3, 1],
  // Precise snappy interaction
  snappy: [0.25, 0.1, 0.25, 1],
  // Subtle gentle transition
  gentle: [0.33, 1, 0.68, 1],
} as const;

// Transition Durations
export const DURATIONS = {
  fast: 0.2,
  standard: 0.4,
  cinematic: 0.7,
  slow: 1.0,
} as const;

// 1. Fade Up Reveal (for text, badges, cards)
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.cinematic,
      delay: custom * 0.1,
      ease: EASINGS.luxury,
    },
  }),
};

// 2. Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// 3. Mask Reveal for Images (Scale down slightly into focus)
export const imageMaskVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    clipPath: "inset(10% 0% 10% 0%)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.9,
      ease: EASINGS.luxury,
    },
  },
};

// 4. Line Draw Variant (for gold hairlines)
export const lineDrawVariant: Variants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: EASINGS.luxury,
    },
  },
};

// 5. Card Hover Interaction
export const cardHoverProps = {
  whileHover: {
    y: -4,
    transition: { duration: 0.3, ease: EASINGS.luxury },
  },
  whileTap: {
    scale: 0.99,
  },
};

// 6. Button Tactile Interaction
export const buttonHoverProps = {
  whileHover: {
    y: -1.5,
    transition: { duration: 0.2, ease: EASINGS.snappy },
  },
  whileTap: {
    scale: 0.97,
  },
};
