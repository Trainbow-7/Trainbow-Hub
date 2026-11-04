"use client";

import * as React from "react";
import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import { getMotionPreference } from "@/lib/motion";

export interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const [motionPolicy, setMotionPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    // Flag document as hydrated and motion-ready
    document.documentElement.setAttribute("data-motion-ready", "true");
    
    // Evaluate active motion preference
    const policy = getMotionPreference();
    setMotionPolicy(policy);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion={motionPolicy === "reduced" ? "always" : "user"}
        transition={
          motionPolicy === "off"
            ? { duration: 0 }
            : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
        }
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

