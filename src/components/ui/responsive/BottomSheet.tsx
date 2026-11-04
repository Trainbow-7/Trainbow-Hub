"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/ui/icons";

export interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  maxHeight?: string;
}

export function BottomSheet({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  maxHeight = "max-h-[88dvh]",
}: BottomSheetProps) {
  const [startY, setStartY] = React.useState<number | null>(null);
  const [currentTranslateY, setCurrentTranslateY] = React.useState<number>(0);
  const sheetRef = React.useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  React.useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  // Handle escape key
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  // Touch handlers for swipe down to dismiss
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY === null) return;
    const delta = e.touches[0].clientY - startY;
    if (delta > 0) {
      setCurrentTranslateY(delta);
    }
  };

  const handleTouchEnd = () => {
    if (currentTranslateY > 120) {
      onOpenChange(false);
    }
    setCurrentTranslateY(0);
    setStartY(null);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />

      {/* Drawer Card */}
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Drawer"}
        style={{
          transform: currentTranslateY > 0 ? `translateY(${currentTranslateY}px)` : undefined,
          transition: currentTranslateY === 0 ? "transform 0.2s ease-out" : "none",
        }}
        className={cn(
          "relative z-10 w-full max-w-2xl bg-white dark:bg-[#0B1226]",
          "rounded-t-2xl border-t border-x border-neutral-slate-200 dark:border-white/10",
          "shadow-2xl flex flex-col overflow-hidden",
          "pb-[max(1.25rem,env(safe-area-inset-bottom))]",
          maxHeight,
          "animate-in slide-in-from-bottom duration-250",
          className
        )}
      >
        {/* Drag handle */}
        <div
          className="w-full flex justify-center py-2.5 cursor-grab active:cursor-grabbing touch-none shrink-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-12 h-1.5 rounded-full bg-neutral-slate-300 dark:bg-slate-600" />
        </div>

        {/* Header */}
        {(title || description) && (
          <div className="flex items-center justify-between px-5 pb-3 border-b border-neutral-slate-200 dark:border-white/10 shrink-0">
            <div>
              {title && (
                <h3 className="font-heading font-bold text-lg text-neutral-slate-900 dark:text-white">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-xs text-neutral-slate-500 dark:text-slate-400 mt-0.5">
                  {description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="p-2 -mr-2 rounded-control text-neutral-slate-500 hover:text-neutral-slate-800 hover:bg-neutral-slate-100 dark:hover:bg-white/10 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="Close drawer"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto overscroll-contain px-5 py-4 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

