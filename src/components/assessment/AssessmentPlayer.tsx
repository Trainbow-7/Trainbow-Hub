"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { InlineMathText } from "@/components/ui/InlineMathText";
import { SanitizedAssessmentItem, AssessmentGradingResult } from "@/lib/assessment/types";
import { MathInputHelper } from "./MathInputHelper";
import { AssessmentResultView } from "./AssessmentResultView";

interface AssessmentPlayerProps {
  courseSlug: string;
  lessonId: string;
  moduleId?: string;
  type?: "checkpoint" | "module_test" | "final_assessment";
  initialMode?: "practice" | "test" | "jamb_speed";
  onMasteryChange?: (isMastered: boolean) => void;
}

export function AssessmentPlayer({
  courseSlug,
  lessonId,
  moduleId,
  type = "checkpoint",
  initialMode = "practice",
  onMasteryChange,
}: AssessmentPlayerProps) {
  const [mode, setMode] = React.useState<"practice" | "test" | "jamb_speed">(initialMode);
  const [questions, setQuestions] = React.useState<SanitizedAssessmentItem[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<string, any>>({});
  const [flaggedIds, setFlaggedIds] = React.useState<Set<string>>(new Set());
  const [practiceRevealed, setPracticeRevealed] = React.useState<Record<string, boolean>>({});
  const [loading, setLoading] = React.useState(true);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [gradingResult, setGradingResult] = React.useState<AssessmentGradingResult | null>(null);

  // Timer
  const [secondsRemaining, setSecondsRemaining] = React.useState<number | null>(null);
  const [timeSpentSeconds, setTimeSpentSeconds] = React.useState(0);

  // Reporting modal
  const [reportingQuestionId, setReportingQuestionId] = React.useState<string | null>(null);
  const [reportReason, setReportReason] = React.useState("");
  const [reportSubmitted, setReportSubmitted] = React.useState(false);

  // Storage key for local resume
  const storageKey = `trainbow_assessment_${courseSlug}_${lessonId}_${type}`;

  // Fetch assessment questions from server
  const loadAssessment = React.useCallback(async (selectedMode = mode) => {
    setLoading(true);
    setError(null);
    setGradingResult(null);
    try {
      const url = new URL("/api/academy/quiz/assessment", window.location.origin);
      url.searchParams.set("courseSlug", courseSlug);
      if (lessonId) url.searchParams.set("lessonId", lessonId);
      if (moduleId) url.searchParams.set("moduleId", moduleId);
      url.searchParams.set("type", type);
      url.searchParams.set("mode", selectedMode);

      const res = await fetch(url.toString());
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to load assessment");
      }

      setQuestions(data.questions || []);
      setCurrentIndex(0);
      setUserAnswers({});
      setFlaggedIds(new Set());
      setPracticeRevealed({});
      setTimeSpentSeconds(0);

      if (data.timeLimitSeconds) {
        setSecondsRemaining(data.timeLimitSeconds);
      } else {
        setSecondsRemaining(null);
      }

      // Try restoring saved answers from localStorage if available
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.answers && Object.keys(parsed.answers).length > 0) {
            setUserAnswers(parsed.answers);
          }
        }
      } catch {
        // ignore storage errors
      }
    } catch (err: any) {
      setError(err.message || "Failed to load assessment questions");
    } finally {
      setLoading(false);
    }
  }, [courseSlug, lessonId, moduleId, type, mode, storageKey]);

  React.useEffect(() => {
    loadAssessment();
  }, [loadAssessment]);

  // Timer ticker
  React.useEffect(() => {
    if (loading || gradingResult || submitting) return;

    const interval = setInterval(() => {
      setTimeSpentSeconds((prev) => prev + 1);

      if (secondsRemaining !== null) {
        setSecondsRemaining((prev) => {
          if (prev === null) return null;
          if (prev <= 1) {
            clearInterval(interval);
            // Auto-submit when time expires
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [loading, gradingResult, submitting, secondsRemaining]);

  // Persist answers to localStorage as learner progresses
  React.useEffect(() => {
    if (Object.keys(userAnswers).length > 0 && !gradingResult) {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ answers: userAnswers, updatedAt: Date.now() }));
      } catch {
        // ignore
      }
    }
  }, [userAnswers, storageKey, gradingResult]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (!currentQuestion) return;
    if (currentQuestion.questionType === "multi_select") {
      const currentSelected: string[] = Array.isArray(userAnswers[currentQuestion.id])
        ? userAnswers[currentQuestion.id]
        : [];
      const exists = currentSelected.includes(optionId);
      const updated = exists
        ? currentSelected.filter((id) => id !== optionId)
        : [...currentSelected, optionId];
      setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: updated }));
    } else {
      setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
    }
  };

  const handleToggleFlag = () => {
    if (!currentQuestion) return;
    setFlaggedIds((prev) => {
      const copy = new Set(prev);
      if (copy.has(currentQuestion.id)) {
        copy.delete(currentQuestion.id);
      } else {
        copy.add(currentQuestion.id);
      }
      return copy;
    });
  };

  const handleMoveOrderItem = (index: number, direction: "up" | "down") => {
    if (!currentQuestion) return;
    const currentOrder: string[] =
      userAnswers[currentQuestion.id] ||
      (currentQuestion.orderItems ? currentQuestion.orderItems.map((o) => o.id) : []);
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentOrder.length) return;

    const copy = [...currentOrder];
    const [moved] = copy.splice(index, 1);
    copy.splice(targetIndex, 0, moved);

    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: copy }));
  };

  const handleSubmit = async () => {
    if (submitting || questions.length === 0) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/academy/quiz/submit-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseSlug,
          lessonId,
          mode,
          answers: userAnswers,
          timeSpentSeconds,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit assessment answers");
      }

      setGradingResult(data.grading);
      if (onMasteryChange && data.grading.isMastered) {
        onMasteryChange(true);
      }

      // Clear stored attempt
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReportQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportingQuestionId || !reportReason) return;
    try {
      await fetch("/api/admin/quizzes/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: reportingQuestionId,
          reason: reportReason,
        }),
      });
      setReportSubmitted(true);
      setTimeout(() => {
        setReportingQuestionId(null);
        setReportReason("");
        setReportSubmitted(false);
      }, 1500);
    } catch {
      // ignore
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center space-y-3">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-blue-600 border-t-transparent" />
        <p className="text-xs text-neutral-slate-500 font-medium">Loading assessment questions...</p>
      </div>
    );
  }

  if (error && !gradingResult) {
    return (
      <div className="p-6 rounded-xl border border-status-red-200 bg-status-red-50 text-center space-y-3">
        <h3 className="font-heading font-bold text-sm text-status-red-900">Assessment Unavailable</h3>
        <p className="text-xs text-status-red-700">{error}</p>
        <Button size="sm" variant="outline" onClick={() => loadAssessment()}>
          Try Again
        </Button>
      </div>
    );
  }

  if (gradingResult) {
    return (
      <AssessmentResultView
        grading={gradingResult}
        courseSlug={courseSlug}
        lessonId={lessonId}
        onRetake={() => loadAssessment()}
      />
    );
  }

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center space-y-2">
        <p className="text-sm font-semibold text-neutral-slate-700">No questions found for this checkpoint.</p>
        <p className="text-xs text-neutral-slate-500">Please check back shortly as lesson materials are updated.</p>
      </div>
    );
  }

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  const formatTimer = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* 1. Top Control Bar: Mode Toggle & Timer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 text-xs">
        {/* Mode Selector */}
        <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Assessment Mode">
          <button
            type="button"
            onClick={() => {
              setMode("practice");
              loadAssessment("practice");
            }}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${mode === "practice" ? "bg-white text-brand-blue-700 shadow-xs border border-brand-blue-200" : "text-neutral-slate-600 hover:text-neutral-slate-900"}`}
          >
            Practice Mode
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("test");
              loadAssessment("test");
            }}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${mode === "test" ? "bg-white text-brand-blue-700 shadow-xs border border-brand-blue-200" : "text-neutral-slate-600 hover:text-neutral-slate-900"}`}
          >
            Test Mode
          </button>
          {courseSlug.includes("jamb") && (
            <button
              type="button"
              onClick={() => {
                setMode("jamb_speed");
                loadAssessment("jamb_speed");
              }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${mode === "jamb_speed" ? "bg-white text-purple-700 shadow-xs border border-purple-200" : "text-neutral-slate-600 hover:text-neutral-slate-900"}`}
            >
              JAMB Speed Round
            </button>
          )}
        </div>

        {/* Timer or StopWatch */}
        <div className="flex items-center gap-2 font-mono">
          {secondsRemaining !== null ? (
            <div className={`px-2.5 py-1 rounded text-xs font-bold ${secondsRemaining < 60 ? "bg-status-red-100 text-status-red-800 animate-pulse" : "bg-neutral-slate-200 text-neutral-slate-800"}`}>
              ⏱ {formatTimer(secondsRemaining)}
            </div>
          ) : (
            <span className="text-neutral-slate-500 font-sans text-xs">
              Time: {formatTimer(timeSpentSeconds)}
            </span>
          )}

          {secondsRemaining !== null && secondsRemaining < 120 && (
            <button
              type="button"
              onClick={() => setSecondsRemaining((prev) => (prev || 0) + 300)}
              className="text-[11px] text-brand-blue-600 hover:underline font-sans"
            >
              +5 mins
            </button>
          )}
        </div>
      </div>

      {/* 2. Progress Indicator & Question Map */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-neutral-slate-600">
          <span className="font-bold text-neutral-slate-900">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>{answeredCount} of {questions.length} answered ({progressPercent}%)</span>
        </div>

        <div className="w-full h-1.5 bg-neutral-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Jumper Grid */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== "";
            const isFlagged = flaggedIds.has(q.id);

            let btnClass = "border-neutral-slate-200 bg-white text-neutral-slate-700 hover:bg-neutral-slate-100";
            if (isAnswered) btnClass = "border-brand-blue-500 bg-brand-blue-50 text-brand-blue-800 font-bold";
            if (isFlagged) btnClass = "border-amber-500 bg-amber-50 text-amber-800 font-bold";
            if (isCurrent) btnClass = "ring-2 ring-brand-blue-600 ring-offset-1 font-extrabold";

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`w-7 h-7 text-xs rounded border flex items-center justify-center transition-all ${btnClass}`}
                title={`Question ${idx + 1}${isFlagged ? " (Flagged)" : ""}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Current Question Card */}
      <div className="p-5 sm:p-6 rounded-2xl border border-neutral-slate-200 bg-white shadow-xs space-y-5">
        {/* Question Header: Objective, Type & Flag Button */}
        <div className="flex items-start justify-between gap-3 border-b border-neutral-slate-100 pb-3">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-600 block">
              Objective • <span className="capitalize">{currentQuestion.thinkingLevel.replace("_", " ")}</span>
            </span>
            <p className="text-xs text-neutral-slate-600 font-medium">
              <InlineMathText text={currentQuestion.objective} />
            </p>
          </div>

          <button
            type="button"
            onClick={handleToggleFlag}
            className={`shrink-0 text-xs px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${flaggedIds.has(currentQuestion.id) ? "border-amber-400 bg-amber-50 text-amber-800 font-bold" : "border-neutral-slate-200 text-neutral-slate-600 hover:bg-neutral-slate-50"}`}
          >
            <span>{flaggedIds.has(currentQuestion.id) ? "★ Flagged" : "☆ Flag"}</span>
          </button>
        </div>

        {/* Prompt */}
        <div className="text-base sm:text-lg font-medium text-neutral-slate-900 leading-relaxed">
          <InlineMathText text={currentQuestion.prompt} />
        </div>

        {/* Interactive Answer Inputs based on QuestionType */}
        <div className="pt-2">
          {/* A. Single Choice & True/False */}
          {(currentQuestion.questionType === "single_choice" ||
            currentQuestion.questionType === "true_false_justification" ||
            currentQuestion.questionType === "table_reading") && (
              <div className="space-y-2.5" role="radiogroup">
                {(currentQuestion.options || []).map((opt) => {
                  const isSelected = userAnswers[currentQuestion.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm flex items-start gap-3 transition-colors ${isSelected ? "border-brand-blue-600 bg-brand-blue-50/70 text-brand-blue-950 shadow-xs font-semibold" : "border-neutral-slate-200 hover:border-brand-blue-300 text-neutral-slate-800"}`}
                    >
                      <span className={`w-6 h-6 shrink-0 rounded-full text-xs font-bold flex items-center justify-center border transition-colors ${isSelected ? "bg-brand-blue-600 text-white border-brand-blue-600" : "bg-neutral-slate-100 text-neutral-slate-600 border-neutral-slate-200"}`}>
                        {opt.id}
                      </span>
                      <span className="leading-snug pt-0.5">
                        <InlineMathText text={opt.text} />
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

          {/* B. Multi-Select */}
          {currentQuestion.questionType === "multi_select" && (
            <div className="space-y-2.5">
              <p className="text-xs text-neutral-slate-500 font-medium mb-2">Select all options that apply:</p>
              {(currentQuestion.options || []).map((opt) => {
                const currentSelected: string[] = Array.isArray(userAnswers[currentQuestion.id])
                  ? userAnswers[currentQuestion.id]
                  : [];
                const isSelected = currentSelected.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm flex items-start gap-3 transition-colors ${isSelected ? "border-brand-blue-600 bg-brand-blue-50/70 text-brand-blue-950 shadow-xs font-semibold" : "border-neutral-slate-200 hover:border-brand-blue-300 text-neutral-slate-800"}`}
                  >
                    <span className={`w-5 h-5 shrink-0 rounded text-xs font-bold flex items-center justify-center border transition-colors ${isSelected ? "bg-brand-blue-600 text-white border-brand-blue-600" : "bg-neutral-slate-100 text-neutral-slate-600 border-neutral-slate-200"}`}>
                      {isSelected ? "✓" : ""}
                    </span>
                    <span className="leading-snug">
                      <InlineMathText text={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* C. Numeric Entry & Symbolic Entry */}
          {(currentQuestion.questionType === "numeric_entry" ||
            currentQuestion.questionType === "symbolic_entry") && (
              <div className="space-y-3">
                <MathInputHelper
                  value={userAnswers[currentQuestion.id] || ""}
                  onChange={(val) => setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }))}
                  placeholder={currentQuestion.questionType === "numeric_entry" ? "Enter numeric value (e.g. 7 or 14.5)" : "Enter algebraic expression (e.g. 2x + 4 or x^2 - 9)"}
                />
              </div>
            )}

          {/* D. Ordering Question */}
          {currentQuestion.questionType === "ordering" && (
            <div className="space-y-2">
              <p className="text-xs text-neutral-slate-500 font-medium">Use the up/down buttons to arrange the steps into correct mathematical sequence:</p>
              {(() => {
                const order: string[] =
                  userAnswers[currentQuestion.id] ||
                  (currentQuestion.orderItems ? currentQuestion.orderItems.map((o) => o.id) : []);

                const itemsMap = new Map<string, string>();
                (currentQuestion.orderItems || []).forEach((o) => itemsMap.set(o.id, o.text));

                return order.map((stepId, idx) => (
                  <div key={stepId} className="flex items-center gap-2 p-3 bg-neutral-slate-50 rounded-lg border border-neutral-slate-200 text-xs">
                    <span className="w-5 font-bold text-neutral-slate-400">{idx + 1}.</span>
                    <span className="flex-1 font-medium text-neutral-slate-800">
                      <InlineMathText text={itemsMap.get(stepId) || stepId} />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        type="button"
                        onClick={() => handleMoveOrderItem(idx, "up")}
                        disabled={idx === 0}
                        className="px-2 py-0.5 text-[10px] rounded bg-white border border-neutral-slate-200 disabled:opacity-30 hover:bg-neutral-slate-100"
                      >
                        ▲
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveOrderItem(idx, "down")}
                        disabled={idx === order.length - 1}
                        className="px-2 py-0.5 text-[10px] rounded bg-white border border-neutral-slate-200 disabled:opacity-30 hover:bg-neutral-slate-100"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                ));
              })()}
            </div>
          )}

          {/* E. Structured Theory Question */}
          {currentQuestion.questionType === "structured_theory" && (
            <div className="space-y-3">
              <p className="text-xs text-neutral-slate-600">Enter your final dimensions or solution below:</p>
              <MathInputHelper
                value={userAnswers[currentQuestion.id] || ""}
                onChange={(val) => setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }))}
                placeholder="e.g. L = 12, W = 8"
              />
            </div>
          )}
        </div>

        {/* Practice Mode Instant Hint / Explanation */}
        {mode === "practice" && currentQuestion.hint && (
          <div className="pt-2">
            <details className="text-xs text-brand-blue-800 bg-brand-blue-50/60 p-3 rounded-lg border border-brand-blue-100 cursor-pointer">
              <summary className="font-semibold select-none">Need a hint?</summary>
              <p className="mt-1.5 leading-relaxed text-neutral-slate-700">
                <InlineMathText text={currentQuestion.hint} />
              </p>
            </details>
          </div>
        )}

        {/* Question Footer: Report problem button */}
        <div className="pt-3 border-t border-neutral-slate-100 flex items-center justify-between text-xs text-neutral-slate-500">
          <button
            type="button"
            onClick={() => setReportingQuestionId(currentQuestion.id)}
            className="hover:text-status-red-600 transition-colors"
          >
            Report a problem with this question
          </button>
          <span>Difficulty: {currentQuestion.difficultyScore}/5</span>
        </div>
      </div>

      {/* 4. Bottom Action Bar: Navigation & Submit */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
        >
          ← Previous
        </Button>

        <div className="flex items-center gap-2">
          {currentIndex < questions.length - 1 ? (
            <Button
              variant="primary"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
            >
              Next →
            </Button>
          ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-status-green-600 hover:bg-status-green-700 font-bold"
            >
              {submitting ? "Submitting..." : `Submit Assessment (${answeredCount}/${questions.length})`}
            </Button>
          )}
        </div>
      </div>

      {/* 5. Report Problem Modal */}
      {reportingQuestionId && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4 shadow-xl border border-neutral-slate-200">
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Report Question
            </h3>
            {reportSubmitted ? (
              <div className="p-4 bg-status-green-50 text-status-green-800 rounded-lg text-sm text-center font-medium">
                Thank you. Report received and sent to curriculum review.
              </div>
            ) : (
              <form onSubmit={handleReportQuestion} className="space-y-4">
                <p className="text-xs text-neutral-slate-600">
                  Please let us know if there is a typographical error, ambiguous phrasing, or mathematical issue:
                </p>
                <textarea
                  required
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  placeholder="Describe the issue with this question..."
                  rows={3}
                  className="w-full p-2.5 text-xs rounded-lg border border-neutral-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                />
                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setReportingQuestionId(null);
                      setReportReason("");
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Submit Report
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

