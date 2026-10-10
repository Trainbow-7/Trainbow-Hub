"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  id,
  title,
  children,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div className={cn("border-b border-neutral-slate-200", className)}>
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left font-heading text-base font-semibold text-neutral-slate-900 transition-all hover:text-brand-blue-600 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 rounded-sm"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-neutral-slate-500 transition-transform duration-200",
            isOpen && "rotate-180 text-brand-blue-600"
          )}
        />
      </button>
      {isOpen && (
        <div
          id={`accordion-panel-${id}`}
          role="region"
          aria-labelledby={`accordion-btn-${id}`}
          className="pb-5 pt-1 text-sm text-neutral-slate-600 leading-relaxed"
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-neutral-slate-200", className)}>
      {children}
    </div>
  );
}
