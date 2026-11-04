import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SocraticWorkspace } from "@/components/ai/SocraticWorkspace";

export const metadata = {
  title: "Study Helper — Trainbow HUB",
  description:
    "Ask a question or upload a photo of a problem. Get a worked solution, step by step, for Nigerian and international curricula.",
};

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Header Hero */}
        <div className="rounded-lg bg-brand-navy-900 text-white p-8 sm:p-12 text-left border border-brand-navy-800">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 block">
              Study helper
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ask a question or upload a photo of a problem.
            </h1>

            <p className="text-base sm:text-lg text-neutral-slate-200 leading-relaxed max-w-2xl">
              Get a worked solution, step by step. Built for WAEC SSCE, JAMB UTME, Cambridge IGCSE, and BECE students.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <a href="#workspace">
                <Button variant="primary" className="h-11 font-semibold text-sm px-6">
                  Open study helper
                </Button>
              </a>
              <Link href="/request-tutor">
                <Button variant="secondary" className="h-11 font-semibold text-sm px-6">
                  Ask for a tutor
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Example Socratic Dialogue Showcase */}
        <section className="rounded-lg border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-4 text-left">
          <div className="flex items-center justify-between border-b border-neutral-slate-100 pb-3">
            <div>
              <h2 className="text-sm sm:text-base font-bold font-heading text-neutral-slate-900">
                How the study helper guides you
              </h2>
              <p className="text-xs text-neutral-slate-600">
                Step-by-step problem solving without giving away direct answers
              </p>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-slate-100 text-neutral-slate-700">
              Example
            </span>
          </div>

          <div className="space-y-3 pt-1">
            {/* Message 1 */}
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-lg bg-brand-blue-600 px-4 py-2.5 text-white">
                <p className="text-xs sm:text-sm font-medium">
                  How do I solve <span className="font-semibold">x² − 5x + 6 = 0</span>?
                </p>
              </div>
            </div>

            {/* Message 2 */}
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-lg bg-purple-50 border border-purple-200 px-4 py-2.5 text-neutral-slate-800 space-y-1">
                <p className="text-xs font-semibold text-purple-900">Study helper</p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Let’s factor this quadratic. What two numbers multiply to <span className="font-semibold text-neutral-slate-900">6</span> and add up to <span className="font-semibold text-neutral-slate-900">−5</span>?
                </p>
              </div>
            </div>

            {/* Message 3 */}
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-lg bg-brand-blue-600 px-4 py-2.5 text-white">
                <p className="text-xs sm:text-sm font-medium">
                  −2 and −3, because (−2) × (−3) = 6 and (−2) + (−3) = −5.
                </p>
              </div>
            </div>

            {/* Message 4 */}
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-lg bg-purple-50 border border-purple-200 px-4 py-2.5 text-neutral-slate-800 space-y-1">
                <p className="text-xs font-semibold text-purple-900">Study helper</p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Spot on! That gives <span className="font-semibold text-neutral-slate-900">(x − 2)(x − 3) = 0</span>. Therefore, setting each factor to zero yields <span className="font-semibold text-neutral-slate-900">x = 2</span> or <span className="font-semibold text-neutral-slate-900">x = 3</span>. We check this by substitution in the original equation: 2² − 5(2) + 6 = 0.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Academic AI Workspace Section */}
        <section id="workspace" className="space-y-4 scroll-mt-24 text-left">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-neutral-slate-200 pb-3">
            <div>
              <span className="text-xs font-medium text-neutral-slate-600 uppercase tracking-wider block">
                WAEC SSCE • JAMB UTME • Cambridge IGCSE • BECE
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-neutral-slate-900 mt-0.5">
                Study helper
              </h2>
            </div>
            <p className="text-xs text-neutral-slate-600 max-w-md">
              Ask a question or upload a photo of a problem. Get a worked solution, step by step.
            </p>
          </div>

          <SocraticWorkspace />
        </section>

        {/* 3 Plain Statements (Replacing numbered icon cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-lg border border-neutral-slate-200 bg-white border-l-[3px] border-l-brand-blue-600 space-y-1.5">
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Hints first
            </h3>
            <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
              You get a hint before the full solution.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-neutral-slate-200 bg-white border-l-[3px] border-l-teal-600 space-y-1.5">
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Answers are checked
            </h3>
            <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
              We check calculations with software where we can, and we tell you when we could not.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-neutral-slate-200 bg-white border-l-[3px] border-l-purple-600 space-y-1.5">
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              A tutor when you need one
            </h3>
            <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
              Ask for a tutor from any answer.
            </p>
          </div>
        </div>

        {/* Safety Section: How we keep it safe */}
        <div className="rounded-lg border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-4 text-left">
          <div className="border-b border-neutral-slate-100 pb-3">
            <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
              How we keep it safe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-slate-700">
            <div className="space-y-1">
              <h4 className="font-bold text-neutral-slate-900">
                Privacy
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                We do not send your name or contact details to the AI service.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-neutral-slate-900">
                Content filters
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                Questions that are unsafe or off-topic are blocked.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-neutral-slate-900">
                Daily limits
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                There is a daily question limit.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-neutral-slate-900">
                Vetted subjects
              </h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                AI is switched on for a subject only after we have tested its answers.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
