import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TrainbowLogoProps {
  className?: string;
  showTagline?: boolean;
  isDarkSurface?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "mark-and-text";
}

export function TrainbowLogo({
  className,
  showTagline = true,
  isDarkSurface = false,
  size = "md",
  variant = "full",
}: TrainbowLogoProps) {
  // Dimensions for the official logo
  // Logo is 1:1 square artwork featuring TH emblem, 'Trainbow Hub', and 'Learn • Build • Grow'
  const sizeMap = {
    sm: { height: 36, width: 36, textClass: "text-base", subClass: "text-[10px]" },
    md: { height: 48, width: 48, textClass: "text-lg", subClass: "text-xs" },
    lg: { height: 60, width: 60, textClass: "text-xl", subClass: "text-xs" },
    xl: { height: 80, width: 80, textClass: "text-2xl", subClass: "text-sm" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 rounded-lg transition-transform active:scale-95",
        className
      )}
      aria-label="Trainbow HUB Homepage"
    >
      {/* Official Trainbow Hub Emblem Image */}
      <div className="relative shrink-0 overflow-hidden rounded-xl bg-white p-0.5 shadow-xs border border-neutral-slate-200/60 group-hover:shadow-sm transition-all">
        <Image
          src="/trainbow-logo.png"
          alt="Trainbow Hub Official Logo"
          width={currentSize.width}
          height={currentSize.height}
          className="h-auto w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
          priority
        />
      </div>

      {/* Brand Typography & Tagline */}
      <div className="flex flex-col items-start leading-tight">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "font-heading font-extrabold tracking-tight",
              currentSize.textClass,
              isDarkSurface ? "text-white" : "text-brand-navy-900"
            )}
          >
            Trainbow
          </span>
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-blue-600 bg-brand-blue-50 px-1.5 py-0.5 rounded border border-brand-blue-200/40">
            HUB
          </span>
        </div>

        {showTagline && (
          <span
            className={cn(
              "font-medium tracking-wide mt-0.5",
              currentSize.subClass,
              isDarkSurface ? "text-neutral-slate-300" : "text-neutral-slate-600"
            )}
          >
            Learn • Build • Grow
          </span>
        )}
      </div>
    </Link>
  );
}

