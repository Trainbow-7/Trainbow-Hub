"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StickyActionBarProps {
  children: React.ReactNode;
  className?: string;
  /**
   * If true, keeps the bar visible only below lg (< 1024px).
   * Above lg, desktop page typically displays its own inline action buttons.
   */
  mobileOnly?: boolean;
}

export function StickyActionBar({
  children,
  className,
  mobileOnly = true,
}: StickyActionBarProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-30",
        "bg-white/95 dark:bg-[#0B1226]/95 backdrop-blur-md",
        "border-t border-neutral-slate-200 dark:border-white/10",
        "shadow-[0_-4px_16px_rgba(11,27,58,0.08)]",
        "px-4 py-3 sm:px-6",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        mobileOnly ? "lg:hidden" : "block",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {children}
      </div>
    </div>
  );
}

