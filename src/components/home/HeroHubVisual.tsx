"use client";

import * as React from "react";
import Link from "next/link";

export interface HeroHubVisualProps {
  className?: string;
}

/**
 * HeroHubVisual
 * 
 * Calm, typographic services index for the hero section:
 * - Four clear rows (Academy, AI, Tutors, Music)
 * - 3px left service accent borders
 * - Zero decorative icons or truncated text
 * - Uncompromised accessibility and responsive fit
 */
export function HeroHubVisual({ className }: HeroHubVisualProps) {
  const services = [
    {
      id: "academy",
      name: "Academy",
      desc: "Lessons and quizzes",
      href: "/academy",
      accentBorder: "border-l-blue-500",
      accentText: "text-blue-400",
    },
    {
      id: "ai",
      name: "AI",
      desc: "Instant study help",
      href: "/ai",
      accentBorder: "border-l-purple-500",
      accentText: "text-purple-400",
    },
    {
      id: "tutors",
      name: "Tutors",
      desc: "Matched to you",
      href: "/request-tutor",
      accentBorder: "border-l-teal-500",
      accentText: "text-teal-400",
    },
    {
      id: "music",
      name: "Music",
      desc: "Theory and instruments",
      href: "/music",
      accentBorder: "border-l-amber-500",
      accentText: "text-amber-400",
    },
  ];

  return (
    <div
      data-testid="hub-services-index"
      className={`w-full max-w-md rounded-lg border border-white/15 bg-white/[0.04] p-5 sm:p-6 text-left space-y-4 ${className || ""}`}
    >
      <div className="border-b border-white/10 pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
          One account
        </span>
        <h2 className="text-base sm:text-lg font-bold font-heading text-white mt-0.5">
          Four ways to learn
        </h2>
      </div>

      <div className="space-y-2.5">
        {services.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`group block p-3 rounded-md bg-white/[0.02] hover:bg-white/[0.07] border border-white/10 border-l-[3px] ${item.accentBorder} transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400`}
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-sm text-white group-hover:text-slate-100 transition-colors">
                {item.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400 group-hover:text-white transition-colors">
                Open
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroHubVisual;
