"use client";

import * as React from "react";
import { m } from "motion/react";
import { MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  className?: string;
  barClassName?: string;
  ariaLabel?: string;
  variant?: "brand" | "tutor" | "ai" | "success" | "warning" | string;
}

const VARIANT_COLORS: Record<string, string> = {
  brand: "bg-brand-blue-600",
  tutor: "bg-service-tutor-600",
  ai: "bg-service-ai-600",
  success: "bg-status-green-600",
  warning: "bg-amber-500",
};

export function ProgressBar({
  value,
  max = 100,
  className = "h-2 w-full bg-neutral-slate-200 rounded-full overflow-hidden",
  barClassName,
  ariaLabel = "Progress",
  variant = "brand",
}: ProgressBarProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const activeBarClass = barClassName || `h-full rounded-full ${VARIANT_COLORS[variant] || "bg-brand-blue-600"}`;

  if (!mounted || policy === "off" || policy === "reduced") {
    return (
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={ariaLabel}
        className={className}
      >
        <div className={activeBarClass} style={{ width: `${percentage}%` }} />
      </div>
    );
  }

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={ariaLabel}
      className={className}
    >
      <m.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{
          duration: MOTION_TOKENS.duration.slow,
          ease: MOTION_TOKENS.ease.entrance,
        }}
        className={activeBarClass}
      />
    </div>
  );
}

