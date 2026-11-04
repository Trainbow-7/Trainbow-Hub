"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  role?: "STUDENT" | "PARENT" | "TUTOR" | "ADMIN";
}

export function MobileBottomNav({ role = "STUDENT" }: MobileBottomNavProps) {
  const pathname = usePathname();

  const studentNavItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "AI Practice", href: "/ai" },
    { label: "Get Tutor", href: "/request-tutor" },
    { label: "Bookings", href: "/bookings" },
  ];

  const parentNavItems = [
    { label: "Overview", href: "/guardian" },
    { label: "Get Tutor", href: "/request-tutor" },
    { label: "Bookings", href: "/bookings" },
    { label: "Consent", href: "/guardian/consent" },
  ];

  const tutorNavItems = [
    { label: "Schedule", href: "/dashboard/tutor" },
    { label: "Students", href: "/dashboard" },
    { label: "AI Tools", href: "/ai" },
  ];

  const items =
    role === "PARENT"
      ? parentNavItems
      : role === "TUTOR"
      ? tutorNavItems
      : studentNavItems;

  return (
    <nav
      aria-label="Mobile application navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#0B1226]/95 backdrop-blur-md border-t border-neutral-slate-200 dark:border-white/10 z-40 px-2 py-1 pb-[max(0.6rem,env(safe-area-inset-bottom))] flex items-center justify-around"
    >
      {items.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center min-w-[64px] min-h-[44px] px-2.5 py-1.5 rounded-md text-xs transition-colors",
              isActive
                ? "text-brand-blue-600 dark:text-sky-400 font-bold border-b-2 border-brand-blue-600 dark:border-sky-400"
                : "text-neutral-slate-600 hover:text-neutral-slate-900 dark:text-slate-400 dark:hover:text-white font-medium"
            )}
          >
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
