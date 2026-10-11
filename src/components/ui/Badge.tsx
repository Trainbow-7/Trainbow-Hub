import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "brand"
    | "ai"
    | "tutor"
    | "music"
    | "success"
    | "warning"
    | "destructive"
    | "neutral";
}

export function Badge({
  className,
  variant = "brand",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    // Brand: Blue 50 background with Blue 600 text
    brand: "bg-brand-blue-50 text-brand-blue-600 border-brand-blue-100",
    // AI: Violet 600 background with white text (passes WCAG AA)
    ai: "bg-service-ai-600 text-white border-transparent",
    // Tutor: Teal 700 with white text (passes WCAG AA)
    tutor: "bg-service-tutor-700 text-white border-transparent",
    // Music / Highlights: Amber 500 ALWAYS paired with dark Slate 900 text (Accessibility rule!)
    music: "bg-service-music-500 text-neutral-slate-900 font-semibold border-amber-600/20",
    // Status badges
    success: "bg-green-50 text-status-green-800 font-semibold border-green-200",
    warning: "bg-amber-50 text-status-orange-600 border-amber-200",
    destructive: "bg-red-50 text-status-red-600 border-red-200",
    neutral: "bg-neutral-slate-100 text-neutral-slate-700 border-neutral-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
