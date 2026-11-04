"use client";

import * as React from "react";
import { m, type HTMLMotionProps } from "motion/react";
import { VARIANTS, MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "fade" | "fadeUp" | "scaleIn";
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
  disableOnLcp?: boolean;
}

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = MOTION_TOKENS.duration.base,
  amount = 0.2,
  className = "",
  disableOnLcp = false,
  ...rest
}: RevealProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  // SSR, no-JS, LCP, or motion off: render fully visible content immediately
  if (!mounted || disableOnLcp || policy === "off") {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  // Reduced motion: subtle instant or short fade
  if (policy === "reduced") {
    return (
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount }}
        transition={{ duration: MOTION_TOKENS.duration.fast }}
        className={className}
        {...rest}
      >
        {children}
      </m.div>
    );
  }

  const selectedVariant = VARIANTS[variant] || VARIANTS.fadeUp;

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: MOTION_TOKENS.ease.entrance,
      }}
      className={className}
      {...rest}
    >
      {children}
    </m.div>
  );
}

