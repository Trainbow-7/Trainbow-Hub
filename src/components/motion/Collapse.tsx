"use client";

import * as React from "react";
import { m, AnimatePresence } from "motion/react";
import { MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export function Collapse({
  isOpen,
  children,
  className = "",
  duration = MOTION_TOKENS.duration.base,
}: CollapseProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  if (!mounted) {
    return isOpen ? <div className={className}>{children}</div> : null;
  }

  if (policy === "off" || policy === "reduced") {
    return isOpen ? <div className={className}>{children}</div> : null;
  }

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <m.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: "auto",
            opacity: 1,
            transition: {
              height: { duration, ease: MOTION_TOKENS.ease.entrance },
              opacity: { duration: MOTION_TOKENS.duration.fast, delay: 0.05 },
            },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: {
              height: { duration, ease: MOTION_TOKENS.ease.exit },
              opacity: { duration: MOTION_TOKENS.duration.fast },
            },
          }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
}

