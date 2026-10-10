"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
  title?: string;
}

export function Sheet({
  open,
  onOpenChange,
  children,
  side = "right",
  className,
  title = "Navigation Menu",
}: SheetProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />

      {/* Sheet Content Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative z-50 flex w-full max-w-xs flex-1 flex-col bg-white shadow-2xl transition ease-in-out duration-300",
          side === "right" ? "ml-auto" : "mr-auto",
          className
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-slate-200 px-6 py-4">
          <span className="font-heading font-semibold text-neutral-slate-900 text-sm">
            {title}
          </span>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-lg p-2 text-neutral-slate-500 hover:bg-neutral-slate-100 hover:text-neutral-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
