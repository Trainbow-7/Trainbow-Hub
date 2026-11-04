"use client";

import * as React from "react";
import { m, AnimatePresence } from "motion/react";
import { VARIANTS, MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface StepTransitionProps {
  stepKey: string | number;
  direction?: number; // 1 for forward, -1 for backward
  children: React.ReactNode;
  className?: string;
}

export function StepTransition({
  stepKey,
  direction = 1,
  children,
  className = "",
}: StepTransitionProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  if (!mounted || policy === "off") {
    return <div className={className}>{children}</div>;
  }

  const variants = policy === "reduced" ? VARIANTS.fade : VARIANTS.slideX(direction);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={stepKey}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{
          duration: policy === "reduced" ? MOTION_TOKENS.duration.fast : MOTION_TOKENS.duration.base,
          ease: MOTION_TOKENS.ease.entrance,
        }}
        className={className}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}

