"use client";

import * as React from "react";
import { m, type HTMLMotionProps } from "motion/react";
import { MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  liftAmount?: number;
  className?: string;
}

export function HoverLift({
  children,
  liftAmount = MOTION_TOKENS.distance.lift, // -2px
  className = "",
  ...rest
}: HoverLiftProps) {
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
      whileHover={{ y: liftAmount }}
      transition={{
        duration: MOTION_TOKENS.duration.base,
        ease: MOTION_TOKENS.ease.entrance,
      }}
      className={className}
      {...rest}
    >
      {children}
    </m.div>
  );
}

