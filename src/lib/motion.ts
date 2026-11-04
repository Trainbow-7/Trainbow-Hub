/**
 * Trainbow HUB Motion System
 * 
 * Tokens, variants and helpers.
 * Invariants:
 * - Durations: fast (120ms), base (200ms), slow (360ms)
 * - Easing: [0.22, 1, 0.36, 1] for entrances, easeInOut for exits
 * - Spring: stiffness: 220, damping: 28, no overshoot
 * - Distances: at most 24px (12px for standard rise, 8px for page/message entrance)
 * - Transforms & opacity ONLY
 * - No bounce, no rotation, no continuous loops
 */

export const MOTION_TOKENS = {
  duration: {
    fast: 0.12, // 120ms
    base: 0.20, // 200ms
    slow: 0.36, // 360ms
    carousel: 0.45, // slide change
  },
  ease: {
    entrance: [0.22, 1, 0.36, 1] as [number, number, number, number],
    exit: "easeInOut",
  },
  spring: {
    type: "spring" as const,
    stiffness: 220,
    damping: 28,
    mass: 1,
  },
  distance: {
    rise: 12, // standard entrance
    micro: 8,  // message/page entrance
    slide: 24, // wizard steps & carousels
    lift: -2,  // hover lift
  },
} as const;

/**
 * Check active motion policy: "full" | "reduced" | "off"
 * Controlled via NEXT_PUBLIC_MOTION, Data Saver header / navigator, and OS prefers-reduced-motion.
 */
export function getMotionPreference(): "full" | "reduced" | "off" {
  if (typeof window === "undefined") {
    return "full";
  }

  // Explicit env override
  const envMotion = process.env.NEXT_PUBLIC_MOTION?.toLowerCase();
  if (envMotion === "off") return "off";
  if (envMotion === "reduced") return "reduced";

  // Data Saver check
  const nav = navigator as unknown as { connection?: { saveData?: boolean } };
  if (nav.connection?.saveData === true) {
    return "reduced";
  }

  // Document attributes check (Data Saver attribute)
  if (
    document.documentElement.getAttribute("data-data-saver") === "true" ||
    document.documentElement.getAttribute("data-saver") === "true"
  ) {
    return "reduced";
  }

  // OS prefers-reduced-motion check
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "reduced";
  }

  return "full";
}

export const VARIANTS = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: MOTION_TOKENS.duration.base,
        ease: MOTION_TOKENS.ease.entrance,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: MOTION_TOKENS.duration.fast,
        ease: MOTION_TOKENS.ease.exit,
      },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: MOTION_TOKENS.distance.rise },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_TOKENS.duration.base,
        ease: MOTION_TOKENS.ease.entrance,
      },
    },
    exit: {
      opacity: 0,
      y: -MOTION_TOKENS.distance.rise,
      transition: {
        duration: MOTION_TOKENS.duration.fast,
        ease: MOTION_TOKENS.ease.exit,
      },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: MOTION_TOKENS.duration.base,
        ease: MOTION_TOKENS.ease.entrance,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: MOTION_TOKENS.duration.fast,
        ease: MOTION_TOKENS.ease.exit,
      },
    },
  },
  slideX: (direction: number = 1) => ({
    hidden: { opacity: 0, x: direction * MOTION_TOKENS.distance.slide },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: MOTION_TOKENS.duration.base,
        ease: MOTION_TOKENS.ease.entrance,
      },
    },
    exit: {
      opacity: 0,
      x: -direction * MOTION_TOKENS.distance.slide,
      transition: {
        duration: MOTION_TOKENS.duration.fast,
        ease: MOTION_TOKENS.ease.exit,
      },
    },
  }),
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06, // 60ms between children
        delayChildren: 0.02,
      },
    },
  },
} as const;

