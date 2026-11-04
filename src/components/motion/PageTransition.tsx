"use client";

import * as React from "react";
import { m } from "motion/react";
import { MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  if (!mounted || policy === "off" || policy === "reduced") {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: MOTION_TOKENS.distance.micro }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: MOTION_TOKENS.duration.base,
        ease: MOTION_TOKENS.ease.entrance,
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

