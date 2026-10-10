"use client";

import * as React from "react";
import Link from "next/link";
import { SEED_AI_PREVIEW_QUESTIONS, AIPreviewQuestion } from "@/lib/data/seed-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Lightbulb, CheckCircle2, ArrowRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export function AIInteractiveDemo() {
  const [selectedQuestion, setSelectedQuestion] = React.useState<AIPreviewQuestion>(
    SEED_AI_PREVIEW_QUESTIONS[0]
  );
  const [hintStep, setHintStep] = React.useState<1 | 2 | 3>(1);

  const handleSelectQuestion = (q: AIPreviewQuestion) => {
    setSelectedQuestion(q);
    setHintStep(1);
  };

  return (
    <div className="rounded-2xl border border-service-ai-600/30 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Example Label Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-purple-50 text-service-ai-600 flex items-center justify-center shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-neutral-slate-900 flex items-center gap-2">
              <span>Interactive Socratic AI Demo</span>
              <span className="rounded bg-service-ai-600/10 px-2 py-0.5 text-[10px] font-bold text-service-ai-600 uppercase tracking-wider">
                Example
              </span>
            </h3>
            <p className="text-xs text-neutral-slate-600">
              Pick a question below to see our pedagogical hint-first response in action. No sign-up required.
            </p>
          </div>
        </div>

        <Badge variant="ai" className="text-xs py-1">
          Formula Verified
        </Badge>
      </div>

      {/* Question Selector Tabs */}
      <div className="py-6 space-y-3">
        <span className="text-xs font-semibold text-neutral-slate-700 block uppercase tracking-wider">
          Choose a Sample Question:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {SEED_AI_PREVIEW_QUESTIONS.map((q) => {
            const isSelected = selectedQuestion.id === q.id;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => handleSelectQuestion(q)}
                className={cn(
                  "p-3 rounded-lg text-left text-xs font-medium border transition-all text-neutral-slate-900 flex flex-col justify-between gap-1.5 focus:outline-none focus:ring-2 focus:ring-service-ai-600",
                  isSelected
                    ? "border-service-ai-600 bg-purple-50/50 shadow-sm ring-1 ring-service-ai-600 text-service-ai-700 font-semibold"
                    : "border-neutral-slate-200 bg-neutral-slate-50 hover:bg-neutral-slate-100 hover:border-neutral-slate-300"
                )}
              >
                <span className="font-semibold text-neutral-slate-900 line-clamp-2">
                  {q.question}
                </span>
                <span className="text-[10px] text-service-ai-600 font-semibold bg-white px-1.5 py-0.5 rounded w-fit border border-purple-200">
                  {q.topic}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Socratic Chat Simulation Box */}
      <div className="rounded-xl border border-neutral-slate-200 bg-neutral-slate-50 p-4 sm:p-6 space-y-4">
        {/* Student Question Bubble */}
        <div className="flex items-start gap-3">
          <div className="h-7 w-7 rounded-full bg-brand-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
            S
          </div>
          <div className="rounded-lg bg-white p-3.5 border border-neutral-slate-200 text-xs text-neutral-slate-900 max-w-xl shadow-xs">
            <span className="font-semibold text-neutral-slate-500 block mb-1">Student Ask:</span>
            <p className="font-medium text-sm text-neutral-slate-900">{selectedQuestion.question}</p>
          </div>
        </div>

        {/* AI Hint Stage 1 */}
        <div className="flex items-start gap-3">
          <div className="h-7 w-7 rounded-full bg-service-ai-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="space-y-3 flex-1 max-w-2xl">
            <div className="rounded-lg bg-white p-4 border border-service-ai-600/30 text-xs space-y-2 shadow-xs">
              <div className="flex items-center gap-1.5 text-service-ai-600 font-semibold text-xs">
                <Lightbulb className="h-3.5 w-3.5" />
                <span>Socratic Hint 1 (Guiding Principle)</span>
              </div>
              <p className="text-neutral-slate-700 leading-relaxed text-xs sm:text-sm font-sans">
                {selectedQuestion.hint1}
              </p>
            </div>

            {/* Hint Stage 2 (If Unlocked) */}
            {hintStep >= 2 && (
              <div className="rounded-lg bg-white p-4 border border-service-ai-600/40 text-xs space-y-2 shadow-xs animate-in fade-in duration-300">
                <div className="flex items-center gap-1.5 text-service-ai-600 font-semibold text-xs">
                  <Lightbulb className="h-3.5 w-3.5" />
                  <span>Socratic Hint 2 (Next Calculation Step)</span>
                </div>
                <p className="text-neutral-slate-700 leading-relaxed text-xs sm:text-sm font-sans">
                  {selectedQuestion.hint2}
                </p>
              </div>
            )}

            {/* Full Solution (If Unlocked) */}
            {hintStep === 3 && (
              <div className="rounded-lg bg-status-green-600/10 p-4 border border-status-green-600/30 text-xs space-y-2 shadow-xs animate-in fade-in duration-300">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-status-green-700 font-bold">
                    <CheckCircle2 className="h-4 w-4 text-status-green-600" />
                    Verified Mathematical Solution
                  </span>
                  <span className="text-[10px] font-mono text-status-green-700">Calculated on Server</span>
                </div>
                <pre className="whitespace-pre-wrap font-sans text-neutral-slate-900 text-xs sm:text-sm leading-relaxed">
                  {selectedQuestion.fullSolution}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Controls & Escalation */}
      <div className="mt-6 pt-4 border-t border-neutral-slate-200 flex flex-wrap items-center justify-between gap-4">
        {/* Step Progression Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {hintStep < 2 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setHintStep(2)}
              className="text-xs"
            >
              Reveal Hint 2 →
            </Button>
          )}

          {hintStep < 3 && (
            <Button
              variant="ai"
              size="sm"
              onClick={() => setHintStep(3)}
              className="text-xs"
            >
              Show Full Solution
            </Button>
          )}

          {hintStep > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setHintStep(1)}
              className="text-xs text-neutral-slate-500"
            >
              Reset to Hint 1
            </Button>
          )}
        </div>

        {/* Human Tutor Escalation CTA */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-neutral-slate-500 hidden sm:inline">Still need 1-on-1 coaching?</span>
          <Link href="/tutors">
            <Button variant="tutor" size="sm" className="gap-1.5 text-xs">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Escalate to a Vetted Tutor</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
