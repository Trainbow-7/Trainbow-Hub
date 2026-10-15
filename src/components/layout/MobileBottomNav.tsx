"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Sparkles, Users, Calendar, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  role?: "STUDENT" | "PARENT" | "TUTOR" | "ADMIN";
}

export function MobileBottomNav({ role = "STUDENT" }: MobileBottomNavProps) {
  const pathname = usePathname();

  const studentNavItems = [
    { label: "Dashboard", href: "/dashboard", icon: BookOpen },
    { label: "AI Practice", href: "/ai", icon: Sparkles },
    { label: "Find Tutor", href: "/tutors", icon: Users },
    { label: "Bookings", href: "/bookings", icon: Calendar },
  ];

  const parentNavItems = [
    { label: "Overview", href: "/guardian", icon: BookOpen },
    { label: "Tutors", href: "/tutors", icon: Users },
    { label: "Bookings", href: "/bookings", icon: Calendar },
    { label: "Consent", href: "/guardian/consent", icon: ShieldAlert },
  ];

  const tutorNavItems = [
    { label: "Schedule", href: "/dashboard/tutor", icon: Calendar },
    { label: "Students", href: "/dashboard", icon: Users },
    { label: "AI Tools", href: "/ai", icon: Sparkles },
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
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-neutral-slate-200 z-40 px-3 py-1 flex items-center justify-around shadow-floating"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center min-w-[64px] min-h-[48px] px-2 py-1 rounded-lg text-[11px] font-medium transition-colors",
              isActive
                ? "text-brand-blue-600 font-bold"
                : "text-neutral-slate-500 hover:text-neutral-slate-900 active:text-brand-blue-600"
            )}
          >
            <Icon className={cn("w-5 h-5 mb-0.5", isActive ? "stroke-[2.25]" : "stroke-[1.75]")} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
