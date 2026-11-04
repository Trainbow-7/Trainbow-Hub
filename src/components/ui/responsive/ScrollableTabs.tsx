"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ActiveIndicator } from "@/components/motion";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface ScrollableTabsProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  ariaLabel?: string;
}

export function ScrollableTabs({
  tabs,
  activeId,
  onChange,
  className,
  ariaLabel = "Tabs",
}: ScrollableTabsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const activeTabRef = React.useRef<HTMLButtonElement>(null);
  const [showLeftFade, setShowLeftFade] = React.useState(false);
  const [showRightFade, setShowRightFade] = React.useState(false);

  const checkScrollFades = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 4);
    setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    checkScrollFades();
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollFades, { passive: true });
      window.addEventListener("resize", checkScrollFades);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollFades);
      window.removeEventListener("resize", checkScrollFades);
    };
  }, [checkScrollFades]);

  // Center active tab when it changes
  React.useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      const tab = activeTabRef.current;
      const container = containerRef.current;
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Left gradient fade */}
      {showLeftFade && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent dark:from-[#0B1226] z-10"
        />
      )}

      {/* Tabs list */}
      <div
        ref={containerRef}
        role="tablist"
        aria-label={ariaLabel}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 scroll-smooth snap-x touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              ref={isActive ? activeTabRef : null}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className={cn(
                "snap-start shrink-0 relative inline-flex items-center gap-2 px-3.5 py-2 rounded-control text-xs sm:text-sm font-semibold transition-all select-none min-h-[44px]",
                isActive
                  ? "bg-brand-blue-600 text-white shadow-sm"
                  : "bg-neutral-slate-100 hover:bg-neutral-slate-200 text-neutral-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300"
              )}
            >
              {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
              <span>{tab.label}</span>
              {typeof tab.count === "number" && (
                <span
                  className={cn(
                    "ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-neutral-slate-200 text-neutral-slate-800 dark:bg-white/15 dark:text-slate-200"
                  )}
                >
                  {tab.count}
                </span>
              )}
              {isActive && (
                <ActiveIndicator
                  layoutId="scrollable-tab-indicator"
                  className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-white rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Right gradient fade */}
      {showRightFade && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent dark:from-[#0B1226] z-10"
        />
      )}
    </div>
  );
}

