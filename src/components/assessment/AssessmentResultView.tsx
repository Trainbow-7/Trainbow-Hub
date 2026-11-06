"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { InlineMathText } from "@/components/ui/InlineMathText";
import { AssessmentGradingResult } from "@/lib/assessment/types";

interface AssessmentResultViewProps {
  grading: AssessmentGradingResult;
  courseSlug: string;
  lessonId: string;
  onRetake: () => void;
}

export function AssessmentResultView({
  grading,
  courseSlug,
  lessonId,
  onRetake,
}: AssessmentResultViewProps) {
  const [filter, setFilter] = React.useState<"all" | "incorrect" | "correct">("all");

  const filteredResults = grading.results.filter((r) => {
    if (filter === "incorrect") return !r.isCorrect;
    if (filter === "correct") return r.isCorrect;
    return true;
  });

  const minutes = Math.floor(grading.timeSpentSeconds / 60);
  const seconds = grading.timeSpentSeconds % 60;
  const timeFormatted = `${minutes}m ${seconds}s`;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* 1. Primary Score Banner */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${grading.passed ? "bg-status-green-50/60 border-status-green-200" : "bg-neutral-slate-50 border-neutral-slate-200"} text-center space-y-3`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-xs">
          {grading.isMastered ? (
            <span className="text-status-green-700">★ Concept Mastered (≥ 80%)</span>
          ) : grading.passed ? (
            <span className="text-status-green-700">✓ Checkpoint Passed (≥ 60%)</span>
          ) : (
            <span className="text-amber-700">⚠ Review Recommended (&lt; 60%)</span>
          )}
        </div>

        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl sm:text-5xl font-extrabold font-heading text-neutral-slate-900">
            {grading.score}%
          </span>
          <span className="text-sm sm:text-base text-neutral-slate-600 font-medium">
            ({grading.correctCount} of {grading.totalQuestions} correct)
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-slate-600 max-w-md mx-auto">
          {grading.isMastered
            ? "Outstanding work! You have proven deep conceptual mastery of this topic."
            : grading.passed
            ? "Good job! You have passed this checkpoint. Review the areas below to strengthen your understanding."
            : "Keep practicing. Work through the targeted explanations below and retake the checkpoint to demonstrate mastery."}
        </p>

        <div className="pt-2 flex items-center justify-center gap-6 text-xs text-neutral-slate-500">
          <span>Time: <strong>{timeFormatted}</strong></span>
          <span>Mode: <strong className="capitalize">{grading.mode.replace("_", " ")}</strong></span>
        </div>

        <div className="pt-3 flex flex-wrap justify-center gap-3">
          <Button variant="primary" size="sm" onClick={onRetake}>
            Retake with new questions
          </Button>
          <Link href={`/courses/${courseSlug}`}>
            <Button variant="outline" size="sm">
              Back to Course Syllabus
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Mastery by Objective */}
      <div className="p-5 sm:p-6 rounded-xl border border-neutral-slate-200 bg-white space-y-4">
        <h3 className="font-heading font-bold text-sm sm:text-base text-neutral-slate-900">
          Mastery by Curriculum Objective
        </h3>
        <div className="space-y-3">
          {grading.objectiveMasteries.map((obj, i) => {
            const badgeClass =
              obj.status === "understood"
                ? "bg-status-green-100 text-status-green-800 border-status-green-200"
                : obj.status === "almost_there"
                ? "bg-amber-100 text-amber-800 border-amber-200"
                : "bg-status-red-100 text-status-red-800 border-status-red-200";

            const label =
              obj.status === "understood"
                ? "Understood (≥ 80%)"
                : obj.status === "almost_there"
                ? "Almost There (60–79%)"
                : "Needs Work (< 60%)";

            return (
              <div key={i} className="p-3 rounded-lg border border-neutral-slate-100 bg-neutral-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-medium text-neutral-slate-900">
                    <InlineMathText text={obj.objective} />
                  </p>
                  <p className="text-[11px] text-neutral-slate-500">
                    {obj.correctQuestions} of {obj.totalQuestions} items correct ({obj.percentage}%)
                  </p>
                </div>
                <span className={`shrink-0 inline-block px-2.5 py-0.5 rounded text-xs font-semibold border ${badgeClass}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Misconceptions Identified (if any) */}
      {grading.identifiedMisconceptions && grading.identifiedMisconceptions.length > 0 && (
        <div className="p-5 sm:p-6 rounded-xl border border-amber-200 bg-amber-50/50 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-800 font-bold text-sm">Targeted Misconception Feedback</span>
          </div>
          <p className="text-xs text-neutral-slate-700">
            Based on your answers, here are the specific conceptual traps you encountered:
          </p>
          <div className="space-y-2 pt-1">
            {grading.identifiedMisconceptions.map((misc) => (
              <div key={misc.id} className="p-3 bg-white rounded-lg border border-amber-200 space-y-1">
                <h4 className="text-xs font-bold text-amber-900">{misc.title}</h4>
                <p className="text-xs text-neutral-slate-700">{misc.remediation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Question-by-Question Review */}
      <div className="p-5 sm:p-6 rounded-xl border border-neutral-slate-200 bg-white space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-slate-100 pb-4">
          <h3 className="font-heading font-bold text-sm sm:text-base text-neutral-slate-900">
            Detailed Question Review
          </h3>
          <div className="flex items-center gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${filter === "all" ? "bg-brand-blue-600 text-white" : "bg-neutral-slate-100 text-neutral-slate-700 hover:bg-neutral-slate-200"}`}
            >
              All ({grading.results.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("incorrect")}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${filter === "incorrect" ? "bg-status-red-600 text-white" : "bg-neutral-slate-100 text-neutral-slate-700 hover:bg-neutral-slate-200"}`}
            >
              Incorrect ({grading.results.filter((r) => !r.isCorrect).length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("correct")}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${filter === "correct" ? "bg-status-green-600 text-white" : "bg-neutral-slate-100 text-neutral-slate-700 hover:bg-neutral-slate-200"}`}
            >
              Correct ({grading.results.filter((r) => r.isCorrect).length})
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {filteredResults.map((res, idx) => (
            <div
              key={res.questionId}
              className={`p-4 sm:p-5 rounded-xl border ${res.isCorrect ? "border-status-green-200 bg-status-green-50/20" : "border-status-red-200 bg-status-red-50/20"} space-y-3`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-slate-500">
                  Question {idx + 1} • <span className="capitalize">{res.thinkingLevel.replace("_", " ")}</span>
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${res.isCorrect ? "bg-status-green-100 text-status-green-800" : "bg-status-red-100 text-status-red-800"}`}>
                  {res.isCorrect ? "Correct ✓" : "Incorrect ✗"}
                </span>
              </div>

              <div className="text-sm font-medium text-neutral-slate-900 leading-relaxed">
                <InlineMathText text={res.prompt} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2.5 rounded bg-white border border-neutral-slate-200">
                  <span className="text-[10px] uppercase font-bold text-neutral-slate-500 block mb-0.5">Your Answer:</span>
                  <span className="font-semibold text-neutral-slate-900">
                    {typeof res.userAnswer === "object" ? JSON.stringify(res.userAnswer) : String(res.userAnswer || "None")}
                  </span>
                </div>
                <div className="p-2.5 rounded bg-white border border-neutral-slate-200">
                  <span className="text-[10px] uppercase font-bold text-status-green-700 block mb-0.5">Correct Answer:</span>
                  <span className="font-semibold text-status-green-900">
                    {typeof res.correctAnswer === "object" ? JSON.stringify(res.correctAnswer) : String(res.correctAnswer)}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-neutral-slate-200 text-xs text-neutral-slate-800 space-y-1.5">
                <span className="font-bold text-neutral-slate-900 block">Explanation:</span>
                <InlineMathText text={res.explanation} />
              </div>

              {res.feedback && (
                <div className="p-2.5 bg-amber-50 rounded border border-amber-200 text-xs text-amber-900">
                  <strong>Pitfall Note:</strong> {res.feedback}
                </div>
              )}

              {/* Study helper link passing question context */}
              <div className="pt-1 flex items-center justify-end">
                <Link
                  href={`/ai?q=${encodeURIComponent(`Help me understand this question step-by-step: ${res.prompt}`)}`}
                  className="text-xs text-brand-blue-600 hover:text-brand-blue-700 hover:underline font-medium inline-flex items-center gap-1"
                >
                  Ask the study helper about this question →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

