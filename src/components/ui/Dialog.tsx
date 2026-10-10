"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function Dialog({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in-0 duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      {/* Modal Dialog Box */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-50 w-full max-w-lg rounded-xl border border-neutral-slate-200 bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-md p-1 text-neutral-slate-400 hover:bg-neutral-slate-100 hover:text-neutral-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1.5 pb-4 text-left", className)} {...props} />;
}

export function DialogTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("font-heading text-lg font-bold text-neutral-slate-900", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-neutral-slate-600", className)} {...props} />;
}

export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}
