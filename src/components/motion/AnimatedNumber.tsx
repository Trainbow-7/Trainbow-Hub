"use client";

import * as React from "react";
import { useMotionValue, useSpring, useTransform, m } from "motion/react";
import { getMotionPreference } from "@/lib/motion";

export interface AnimatedNumberProps {
  value: number;
  format?: (n: number) => string;
  className?: string;
}

export function AnimatedNumber({
  value,
  format = (n) => Math.round(n).toLocaleString(),
  className = "",
}: AnimatedNumberProps) {
  const [mounted, setMounted] = React.useState(false);
  const [displayValue, setDisplayValue] = React.useState<string>(format(value));
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 220,
    damping: 28,
  });

  React.useEffect(() => {
    setMounted(true);
    const activePolicy = getMotionPreference();
    setPolicy(activePolicy);

    if (activePolicy === "off" || activePolicy === "reduced") {
      setDisplayValue(format(value));
      return;
    }

    motionValue.set(value);
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(format(latest));
    });

    return () => unsubscribe();
  }, [value, motionValue, springValue, format]);

  // SSR or non-JS immediately displays the real final value
  if (!mounted || policy === "off" || policy === "reduced") {
    return <span className={className}>{format(value)}</span>;
  }

  return <span className={className}>{displayValue}</span>;
}

