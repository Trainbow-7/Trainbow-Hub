"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseItem } from "@/lib/data/seed-data";
import { getCourseDiagnostic, CourseDiagnostic, DiagnosticQuestion } from "@/lib/data/english-diagnostics";
import { getWeakAreaByCode, WeakAreaRecord } from "@/lib/data/english-deficiency-map";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InlineMathText } from "@/components/ui/InlineMathText";
import { Reveal, HoverLift } from "@/components/motion";

interface CourseDiagnosticViewProps {
  course: CourseItem;
}

export function CourseDiagnosticView({ course }: CourseDiagnosticViewProps) {
  const diagnostic = React.useMemo(() => getCourseDiagnostic(course.slug), [course.slug]);
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);

  const questions: DiagnosticQuestion[] = diagnostic?.questions || [];

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Score computation
  const { correctCount, totalCount, percentage, missedWeakAreas, recommendedLessons } = React.useMemo(() => {
    if (!questions.length) {
      return {
        correctCount: 0,
        totalCount: 0,
        percentage: 0,
        missedWeakAreas: [] as WeakAreaRecord[],
        recommendedLessons: [] as { slug: string; title: string; weakArea: string }[],
      };
    }

    let correct = 0;
    const missedCodes = new Set<string>();
    const recLessonSlugs = new Set<string>();

    for (const q of questions) {
      const isCorrect = selectedAnswers[q.id]?.toUpperCase() === q.correctOptionId.toUpperCase();
      if (isCorrect) {
        correct++;
      } else {
        missedCodes.add(q.weakAreaCode);
        if (q.recommendedLessonSlug) {
          recLessonSlugs.add(q.recommendedLessonSlug);
        }
      }
    }

    const weakAreas: WeakAreaRecord[] = [];
    for (const code of missedCodes) {
      const wa = getWeakAreaByCode(code);
      if (wa) weakAreas.push(wa);
    }
    // Sort by priority first
    weakAreas.sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));

    // Find lesson titles in course syllabus for recommended lesson slugs
    const allCourseLessons = course.syllabus.flatMap((m) => m.lessons);
    const recs: { slug: string; title: string; weakArea: string }[] = [];

    for (const slug of recLessonSlugs) {
      const match = allCourseLessons.find((l) => (l as any).slug === slug || l.id === slug);
      if (match) {
        const waCode = (match as any).weakAreaCodes?.[0];
        const wa = waCode ? getWeakAreaByCode(waCode) : null;
        recs.push({
          slug: (match as any).slug || match.id,
          title: match.title,
          weakArea: wa ? wa.title : "Priority Foundation",
        });
      }
    }

    // If fewer than 3 recommended from errors, add the first syllabus lessons to form a 3-6 lesson path
    if (recs.length < 3) {
      for (const l of allCourseLessons) {
        const lSlug = (l as any).slug || l.id;
        if (!recs.some((r) => r.slug === lSlug)) {
          const waCode = (l as any).weakAreaCodes?.[0];
          const wa = waCode ? getWeakAreaByCode(waCode) : null;
          recs.push({
            slug: lSlug,
            title: l.title,
            weakArea: wa ? wa.title : "Core Syllabus Mastery",
          });
        }
        if (recs.length >= 4) break;
      }
    }

    const pct = Math.round((correct / questions.length) * 100);

    return {
      correctCount: correct,
      totalCount: questions.length,
      percentage: pct,
      missedWeakAreas: weakAreas,
      recommendedLessons: recs.slice(0, 6),
    };
  }, [questions, selectedAnswers, course.syllabus]);

  const allAnswered = questions.length > 0 && Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-neutral-slate-900">Academy</Link>
          <span>/</span>
          <Link href={`/courses/${course.slug}`} className="hover:text-neutral-slate-900 truncate max-w-xs">
            {course.title}
          </Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900">Diagnostic</span>
        </nav>

        {/* Header Banner */}
        <Reveal>
          <div className="rounded-2xl bg-brand-navy-900 text-white p-6 sm:p-10 border border-brand-navy-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/30">
                Diagnostic Assessment
              </Badge>
              <span className="text-xs text-neutral-slate-300">{course.level}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              {diagnostic?.title || `${course.title} Diagnostic`}
            </h1>
            <p className="text-sm text-neutral-slate-200 leading-relaxed max-w-2xl">
              {diagnostic?.description || "Identify specific weak areas and get a personalized remediation path."}
            </p>
            <div className="pt-2 text-xs text-neutral-slate-400">
              <span>{questions.length} diagnostic questions • 10–15 minutes • No penalty for guessing</span>
            </div>
          </div>
        </Reveal>

        {/* Diagnostic Form or Results View */}
        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-6">
              {questions.map((q, idx) => {
                const selected = selectedAnswers[q.id];
                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-neutral-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-bold text-neutral-slate-400 uppercase tracking-wider">
                        Question {idx + 1} of {questions.length}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-medium text-neutral-slate-900 leading-relaxed">
                      <InlineMathText text={q.prompt} />
                    </p>

                    <div className="space-y-2 pt-1">
                      {q.options.map((opt) => {
                        const isSelected = selected === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleSelectOption(q.id, opt.id)}
                            className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm flex items-center justify-between transition-colors min-h-[44px] ${
                              isSelected
                                ? "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-900 font-semibold"
                                : "border-neutral-slate-200 hover:border-neutral-slate-300 text-neutral-slate-700 hover:bg-neutral-slate-50"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span className="font-bold w-5">{opt.id}.</span>
                              <InlineMathText text={opt.text} />
                            </span>
                            {isSelected && (
                              <span className="text-xs text-brand-blue-600 font-bold shrink-0">Selected</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 pb-12 border-t border-neutral-slate-200 flex-wrap gap-4">
              <span className="text-xs text-neutral-slate-500">
                {Object.keys(selectedAnswers).length} of {questions.length} questions answered
              </span>
              <Button
                variant="primary"
                size="md"
                disabled={!allAnswered}
                onClick={() => {
                  setSubmitted(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Submit Diagnostic Assessment
              </Button>
            </div>
          </div>
        ) : (
          /* RESULTS SCREEN */
          <div className="space-y-8 pb-12">
            {/* Score Card */}
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-slate-100 pb-5">
                <div>
                  <span className="text-xs font-bold text-neutral-slate-500 uppercase tracking-wider">
                    Diagnostic Baseline Result
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-neutral-slate-900 mt-1">
                    Computed Score: {correctCount} / {totalCount} ({percentage}%)
                  </h2>
                </div>
                <div className="shrink-0">
                  <Button variant="outline" size="sm" onClick={handleRetake}>
                    Retake Diagnostic
                  </Button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                This diagnostic measures your current baseline against standard Nigerian curriculum benchmarks. Review your priority focus areas below to target the exact topics where marks are commonly lost.
              </p>
              <p className="text-[11px] text-neutral-slate-400">
                Diagnostic baseline results are saved to your student profile and visible to linked parents/guardians.
              </p>
            </div>

            {/* Identified Weak Areas */}
            {missedWeakAreas.length > 0 && (
              <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
                    Your Priority Weak Areas ({missedWeakAreas.length})
                  </h3>
                  <p className="text-xs text-neutral-slate-500 mt-0.5">
                    Specific syllabus skills identified for improvement based on your diagnostic answers:
                  </p>
                </div>

                <div className="space-y-4">
                  {missedWeakAreas.map((wa) => (
                    <div
                      key={wa.code}
                      className="rounded-xl border border-neutral-slate-200 p-4 sm:p-5 space-y-2 bg-neutral-slate-50/50"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="font-heading font-bold text-sm text-neutral-slate-900">
                          {wa.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-neutral-slate-500">{wa.code}</span>
                          {wa.priority && (
                            <Badge variant="tutor" className="text-[10px]">High Exam Weight</Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-neutral-slate-600 leading-relaxed">
                        {wa.description}
                      </p>
                      <div className="text-[11px] text-neutral-slate-400 pt-1">
                        Evidence Source: {wa.evidenceSource} ({wa.evidenceDate})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personalized "Start Here" Lesson Path */}
            <div className="rounded-2xl border border-brand-blue-200 bg-brand-blue-50/40 p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-xs font-bold text-brand-blue-700 uppercase tracking-wider">
                  Personalized Study Plan
                </span>
                <h3 className="font-heading font-bold text-lg text-neutral-slate-900 mt-1">
                  Start Here: Your Recommended Lessons (3–6)
                </h3>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Begin with these targeted lessons to remediate your diagnostic weak points, then continue with the rest of the syllabus:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedLessons.map((rec, idx) => (
                  <HoverLift key={rec.slug} className="h-full">
                    <Link
                      href={`/courses/${course.slug}/lessons/${rec.slug}`}
                      className="block p-4 rounded-xl border border-brand-blue-100 bg-white hover:border-brand-blue-300 transition-colors h-full flex flex-col justify-between space-y-3 shadow-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-brand-blue-700 font-semibold">
                          <span>Step {idx + 1} of {recommendedLessons.length}</span>
                          <span className="text-neutral-slate-500 font-normal truncate max-w-[140px]">
                            {rec.weakArea}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-sm text-neutral-slate-900">
                          {rec.title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between text-xs text-brand-blue-600 font-semibold pt-2 border-t border-neutral-slate-100">
                        <span>Start lesson</span>
                        <span>→</span>
                      </div>
                    </Link>
                  </HoverLift>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-brand-blue-100">
                <Link href={`/courses/${course.slug}`} className="text-xs text-brand-blue-700 hover:underline font-medium">
                  ← View Full Course Syllabus
                </Link>
                <Link href="/ai" className="text-xs text-neutral-slate-600 hover:text-neutral-slate-900">
                  Ask the Study Helper about these topics →
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

