import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SocraticWorkspace } from "@/components/ai/SocraticWorkspace";
import { AIInteractiveDemo } from "@/components/home/AIInteractiveDemo";
import {
  Sparkles,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Calculator,
  Lock,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Trainbow AI — Socratic Mathematics Learning Assistant",
  description:
    "Hint-first Mathematics guidance, programmatic formula verification, and seamless human tutor escalation for Nigerian curricula (WAEC, JAMB, IGCSE).",
};

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero Section */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-900 to-purple-950 text-white p-8 sm:p-14 relative overflow-hidden shadow-soft">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <Badge variant="ai" className="bg-service-ai-600/30 text-purple-200 border-service-ai-500/40">
              Socratic Pedagogical Assistant
            </Badge>

            <h1 className="text-display font-extrabold font-heading text-white tracking-tight leading-tight">
              Trainbow HUB AI: <br />
              <span className="text-service-ai-400">Learn How to Think,</span> Not Just the Answer.
            </h1>

            <p className="text-body-lg text-neutral-slate-200 leading-relaxed max-w-2xl">
              Generic chatbots simply spit out final numbers, depriving students of the problem-solving journey.
              Trainbow AI uses a pedagogical hint-first approach built specifically for approved Nigerian Mathematics
              curricula (WAEC SSCE, JAMB UTME, Cambridge IGCSE, BECE).
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a href="#workspace">
                <Button variant="ai" className="h-11 font-semibold text-sm shadow-soft px-6">
                  Open AI Workspace <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </a>
              <Link href="/tutors">
                <Button variant="secondary" className="h-11 font-semibold text-sm px-6">
                  Meet Human Tutors
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Live Socratic Assistant Workspace Section (Phase F Core Engine) */}
        <section id="workspace" className="space-y-4 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="ai" className="text-xs">
                  Active Assistant
                </Badge>
                <span className="text-xs text-neutral-slate-600 font-medium">
                  WAEC SSCE • JAMB UTME • Cambridge IGCSE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
                Live Socratic Mathematics Workspace
              </h2>
            </div>
            <p className="text-xs text-neutral-slate-600 max-w-md">
              Ask any mathematical question. Every hint preserves step-by-step reasoning and evaluates formulas on the
              server before displaying to you.
            </p>
          </div>

          <SocraticWorkspace />
        </section>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-neutral-slate-200 bg-white space-y-3">
            <div className="h-10 w-10 rounded-lg bg-purple-50 text-service-ai-600 flex items-center justify-center">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              1. Hints Before Solutions
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              When a student enters a problem, the AI delivers Level 1 hints (formula cues) and Level 2 step breakdowns
              before ever exposing the full worked solution.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-slate-200 bg-white space-y-3">
            <div className="h-10 w-10 rounded-lg bg-status-green-600/10 text-status-green-600 flex items-center justify-center">
              <Calculator className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              2. Programmatic Verification
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              LLMs often hallucinate arithmetic. Every formula, discriminant, derivative, and equation root is
              programmatically verified on our server before reaching the learner.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-slate-200 bg-white space-y-3">
            <div className="h-10 w-10 rounded-lg bg-teal-50 text-service-tutor-700 flex items-center justify-center">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              3. 1-Tap Tutor Escalation
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              If a student is still struggling after hints, they can seamlessly escalate the exact conversation to an
              approved human tutor for an in-depth lesson.
            </p>
          </div>
        </div>

        {/* Teaser Question Preview */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              Interactive Teaser Previews
            </h2>
            <p className="text-sm text-neutral-slate-600">
              Test pre-computed Nigerian curriculum questions and inspect the pedagogical hint stages.
            </p>
          </div>

          <AIInteractiveDemo />
        </div>

        {/* Safety & Quota Specifications */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="brand">Safety &amp; Governance</Badge>
            <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
              Architectural Safeguards for Nigerian Students
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-slate-700">
            <div className="space-y-2">
              <h4 className="font-bold text-neutral-slate-900 flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-brand-blue-600" />
                Server-Side Gateway &amp; Anonymization
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                Client browsers never receive API keys. Student identities and personal names are stripped prior to
                model requests, ensuring compliance with the Nigeria Data Protection Act (NDPA) 2023.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-neutral-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-status-green-600" />
                Age-Appropriate Content Moderation
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                Both student inputs and AI outputs pass strict automated moderation filters. Off-topic, unsafe, or
                abusive prompts are immediately blocked and flagged for safeguarding review.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-neutral-slate-900 flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-service-ai-600" />
                Daily Quotas &amp; Provider Fallbacks
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                Students receive a daily quota of questions to encourage thoughtful practice. If external provider
                outages occur, failed requests do not deduct student quotas.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-neutral-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-service-tutor-700" />
                Evaluation Sign-Off Before New Subjects
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                Mathematics is live. Other subjects (English, Physics, Chemistry, Biology) receive AI assistance only
                after passing rigorous academic accuracy evaluations.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
