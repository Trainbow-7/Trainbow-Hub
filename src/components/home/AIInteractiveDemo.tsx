import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  Lightbulb,
  CheckCircle2,
  BookOpen,
  Camera,
  ArrowRight,
  ShieldCheck,
  Brain,
  GraduationCap
} from "lucide-react";

export function AIInteractiveDemo() {
  const pillars = [
    {
      icon: Lightbulb,
      iconBg: "bg-purple-50 text-service-ai-600 border-purple-200",
      title: "Socratic Hint-First Pedagogy",
      description:
        "Unlike generic chatbots that simply hand out final answers, Trainbow AI guides learners step-by-step with progressive hints, helping students truly grasp core principles.",
      badge: "Pedagogical",
    },
    {
      icon: CheckCircle2,
      iconBg: "bg-status-green-600/10 text-status-green-600 border-status-green-600/20",
      title: "Verified Mathematical Logic",
      description:
        "Formulas, equations, and solutions undergo deterministic verification with built-in CAS and math engines, eliminating hallucinations and ensuring 100% accuracy.",
      badge: "Formula-Verified",
    },
    {
      icon: BookOpen,
      iconBg: "bg-brand-blue-50 text-brand-blue-600 border-brand-blue-200",
      title: "Curriculum-Aligned (WAEC, JAMB & IGCSE)",
      description:
        "Tuned specifically for West African and international syllabi—covering WAEC SSCE, JAMB UTME, Cambridge IGCSE, and BECE with examiner marking criteria.",
      badge: "Curriculum Focused",
    },
    {
      icon: Camera,
      iconBg: "bg-service-prep-50 text-service-prep-600 border-service-prep-200",
      title: "Vision & Diagram Reasoning",
      description:
        "Snap and upload past questions, handwritten calculations, or geometric figures. Trainbow AI extracts equations, renders figures, and breaks down the steps.",
      badge: "Multimodal AI",
    },
  ];

  return (
    <div className="rounded-2xl border border-service-ai-600/30 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-service-ai-600/5 blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-purple-50 text-service-ai-600 flex items-center justify-center shrink-0 border border-purple-100 shadow-xs">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-xl font-bold text-neutral-slate-900">
                Meet Trainbow AI
              </h3>
              <Badge variant="ai" className="text-[11px] py-0.5">
                Academic Reasoning Engine
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-neutral-slate-600">
              The purpose-built learning companion designed to build genuine mastery, not dependency.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-slate-600 bg-neutral-slate-50 border border-neutral-slate-200 px-3 py-1.5 rounded-lg">
          <ShieldCheck className="h-4 w-4 text-status-green-600" />
          <span>Child-Safe &amp; NDPA Compliant</span>
        </div>
      </div>

      {/* Core Feature Cards */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-5 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50/70 hover:bg-white hover:border-service-ai-600/40 hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`h-9 w-9 rounded-lg flex items-center justify-center border shrink-0 ${pillar.iconBg}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-semibold text-neutral-slate-600 bg-white border border-neutral-slate-200 px-2 py-0.5 rounded-full">
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
          );
        })}
      </div>

      {/* Highlights & Call to Action Footer */}
      <div className="pt-6 border-t border-neutral-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-slate-700">
          <Brain className="h-4 w-4 text-service-ai-600 shrink-0" />
          <span>
            Covers <strong>Mathematics, Sciences, Arts &amp; Commercial</strong> subjects.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <Link href="/ai" className="flex-1 sm:flex-none">
            <Button variant="ai" size="sm" className="w-full sm:w-auto gap-1.5 text-xs sm:text-sm font-semibold shadow-xs">
              <span>Open Academic AI Workspace</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/request-tutor" className="flex-1 sm:flex-none">
            <Button variant="outline" size="sm" className="w-full sm:w-auto gap-1.5 text-xs sm:text-sm">
              <GraduationCap className="h-3.5 w-3.5 text-brand-blue-600" />
              <span>Need 1-on-1 Coaching?</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
