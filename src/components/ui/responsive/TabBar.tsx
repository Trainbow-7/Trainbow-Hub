"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface TabBarItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

export interface TabBarProps {
  items: TabBarItem[];
  className?: string;
}

export function TabBar({ items, className }: TabBarProps) {
  const pathname = usePathname();
  const [keyboardOpen, setKeyboardOpen] = React.useState(false);

  // Detect virtual keyboard opening to avoid blocking inputs
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    const vv = window.visualViewport;
    const initialHeight = window.innerHeight;

    function handleResize() {
      if (vv && initialHeight - vv.height > 150) {
        setKeyboardOpen(true);
      } else {
        setKeyboardOpen(false);
      }
    }

    vv.addEventListener("resize", handleResize);
    return () => vv.removeEventListener("resize", handleResize);
  }, []);

  if (keyboardOpen) return null;

  return (
    <nav
      aria-label="Mobile Navigation"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden",
        "bg-white/95 dark:bg-[#0B1226]/95 backdrop-blur-md",
        "border-t border-neutral-slate-200 dark:border-white/10",
        "pb-[max(0.5rem,env(safe-area-inset-bottom))]",
        "pt-1.5 px-2",
        "shadow-[0_-2px_12px_rgba(11,27,58,0.06)]",
        className
      )}
    >
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center py-1 px-2 rounded-control transition-colors min-w-[56px] min-h-[44px]",
                isActive
                  ? "text-brand-blue-600 dark:text-sky-400 font-semibold"
                  : "text-neutral-slate-500 hover:text-neutral-slate-800 dark:text-slate-400 dark:hover:text-white"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-5 h-5", isActive ? "stroke-[2.25]" : "stroke-2")} />
                {item.badge !== undefined && (
                  <span className="absolute -top-1 -right-2 bg-brand-blue-600 text-white text-[10px] font-bold rounded-full px-1 min-w-[16px] text-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight leading-none truncate max-w-[64px]">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-6 h-0.5 bg-brand-blue-600 dark:bg-sky-400 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

