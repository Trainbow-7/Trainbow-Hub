"use client";

import * as React from "react";
import { m, useScroll, useSpring } from "motion/react";
import { getMotionPreference } from "@/lib/motion";

export interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({
  className = "fixed top-0 left-0 right-0 h-[3px] bg-brand-blue-600 z-50 origin-left",
}: ScrollProgressProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  if (!mounted || policy === "off" || policy === "reduced") {
    return null;
  }

  return (
    <m.div
      style={{ scaleX }}
      className={className}
      aria-hidden="true"
    />
  );
}

