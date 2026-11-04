"use client";

import * as React from "react";
import { m, type HTMLMotionProps } from "motion/react";
import { MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface PressProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export function Press({
  children,
  scale = 0.98,
  className = "",
  ...rest
}: PressProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  if (!mounted || policy === "off" || policy === "reduced") {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      whileTap={{ scale }}
      transition={{
        duration: MOTION_TOKENS.duration.fast,
        ease: MOTION_TOKENS.ease.exit,
      }}
      className={className}
      {...rest}
    >
      {children}
    </m.div>
  );
}

