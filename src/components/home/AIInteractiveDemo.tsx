"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/icons";

export function AIInteractiveDemo() {
  const pillars = [
    {
      title: "Socratic hint-first pedagogy",
      description:
        "Unlike generic assistants that simply hand out final answers, Trainbow AI guides learners step-by-step with progressive hints, helping students grasp core principles.",
      badge: "Pedagogy",
      accentBorder: "border-service-ai-500",
    },
    {
      title: "Verified mathematical logic",
      description:
        "Formulas, equations, and solutions undergo deterministic verification with built-in CAS and math engines, ensuring accuracy and reliable step proofs.",
      badge: "Math check",
      accentBorder: "border-status-green-600",
    },
    {
      title: "Curriculum-aligned (WAEC, JAMB & IGCSE)",
      description:
        "Structured specifically for West African and international syllabi—covering WAEC SSCE, JAMB UTME, Cambridge IGCSE, and BECE with mark schemes.",
      badge: "Curriculum",
      accentBorder: "border-brand-blue-600",
    },
    {
      title: "Vision & diagram reasoning",
      description:
        "Upload past questions, handwritten calculations, or geometric figures. The assistant extracts equations, renders figures, and explains each step.",
      badge: "Diagrams",
      accentBorder: "border-service-prep-600",
    },
  ];

  return (
    <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 sm:p-10 shadow-xs relative">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-xl font-bold text-neutral-slate-900">
              Study helper
            </h3>
            <span className="text-xs uppercase tracking-wider font-semibold text-service-ai-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Socratic practice
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-slate-600 mt-1">
            A purposeful learning companion designed to build genuine mastery, not dependency.
          </p>
        </div>

        <div className="text-xs text-neutral-slate-600 bg-neutral-slate-50 border border-neutral-slate-200 px-3 py-1.5 rounded-lg">
          Designed for independent study and exam practice
        </div>
      </div>

      {/* Core Feature Cards */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="p-5 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50/70 hover:bg-white hover:border-neutral-slate-300 transition-all duration-200 space-y-3 border-l-4"
            style={{ borderLeftColor: pillar.accentBorder.replace('border-', '') }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-slate-600">
                {pillar.badge}
              </span>
            </div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-neutral-slate-900">
              {pillar.title}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-neutral-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-neutral-slate-700">
          Covers <strong>Mathematics, Sciences, Arts &amp; Commercial</strong> subjects.
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <Link href="/ai" className="flex-1 sm:flex-none">
            <Button variant="ai" size="sm" className="w-full sm:w-auto gap-1.5 text-xs sm:text-sm font-semibold shadow-xs">
              <span>Open study helper</span>
              <ArrowRightIcon size="sm" />
            </Button>
          </Link>
          <Link href="/request-tutor" className="flex-1 sm:flex-none">
            <Button variant="outline" size="sm" className="w-full sm:w-auto gap-1.5 text-xs sm:text-sm">
              <span>Request a tutor</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
