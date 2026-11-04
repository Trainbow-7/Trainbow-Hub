"use client";

import * as React from "react";
import { m, AnimatePresence } from "motion/react";
import { VARIANTS, MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface PresenceProps {
  present: boolean;
  children: React.ReactNode;
  variant?: "fade" | "fadeUp" | "scaleIn";
  className?: string;
  mode?: "sync" | "wait" | "popLayout";
}

export function Presence({
  present,
  children,
  variant = "fadeUp",
  className = "",
  mode = "sync",
}: PresenceProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  if (!mounted) {
    return present ? <div className={className}>{children}</div> : null;
  }

  if (policy === "off") {
    return present ? <div className={className}>{children}</div> : null;
  }

  const selectedVariant = VARIANTS[variant] || VARIANTS.fadeUp;

  return (
    <AnimatePresence mode={mode}>
      {present && (
        <m.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={policy === "reduced" ? VARIANTS.fade : selectedVariant}
          transition={{
            duration: policy === "reduced" ? MOTION_TOKENS.duration.fast : MOTION_TOKENS.duration.base,
            ease: MOTION_TOKENS.ease.entrance,
          }}
          className={className}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
}

