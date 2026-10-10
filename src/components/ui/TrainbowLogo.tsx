import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function TrainbowLogo({
  className,
  showTagline = true,
  isDarkSurface = false,
}: {
  className?: string;
  showTagline?: boolean;
  isDarkSurface?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex flex-col items-start select-none group focus:outline-none",
        className
      )}
      aria-label="Trainbow HUB Homepage"
    >
      <div className="flex items-center gap-2">
        {/* Rainbow Accent Glyph Icon */}
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy-900 shadow-sm border border-brand-blue-500/20 group-hover:scale-105 transition-transform">
          {/* Subtle multi-color layered rainbow arcs */}
          <span className="absolute h-6 w-6 rounded-full border-t-2 border-brand-blue-500" />
          <span className="absolute h-4.5 w-4.5 rounded-full border-t-2 border-service-ai-500" />
          <span className="absolute h-3 w-3 rounded-full border-t-2 border-service-tutor-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-service-music-500" />
        </div>

        {/* Wordmark */}
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "font-heading text-xl font-extrabold tracking-tight",
              isDarkSurface ? "text-white" : "text-brand-navy-900"
            )}
          >
            Trainbow
          </span>
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-blue-600 bg-brand-blue-50 px-1.5 py-0.5 rounded">
            HUB
          </span>
        </div>
      </div>

      {showTagline && (
        <span
          className={cn(
            "text-[10px] font-medium tracking-wide ml-10 mt-[-2px]",
            isDarkSurface ? "text-neutral-slate-400" : "text-neutral-slate-500"
          )}
        >
          Learn • Connect • Grow
        </span>
      )}
    </Link>
  );
}
