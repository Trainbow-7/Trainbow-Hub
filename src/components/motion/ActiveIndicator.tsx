"use client";

import * as React from "react";
import { m } from "motion/react";

export interface ActiveIndicatorProps {
  layoutId?: string;
  className?: string;
}

export function ActiveIndicator({
  layoutId = "active-tab-indicator",
  className = "absolute bottom-0 left-0 right-0 h-[2px] bg-brand-blue-600",
}: ActiveIndicatorProps) {
  return (
    <m.span
      layoutId={layoutId}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 28,
      }}
      className={className}
      aria-hidden="true"
    />
  );
}

