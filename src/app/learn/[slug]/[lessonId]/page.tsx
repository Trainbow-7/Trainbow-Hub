"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  FileText,
  HelpCircle,
  Download,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  WifiOff,
  RefreshCw,
  Clock,
  ShieldCheck,
  Check,
  Layers,
  Award,
} from "lucide-react";
import { RealVideoPlayer, LessonVideoData } from "@/components/video/RealVideoPlayer";

interface LessonPayload {
  success: boolean;
  course: {
    id: string;
    slug: string;
    title: string;
    level: string;
    subjectName: string;
    instructorName: string;
    syllabus: Array<{
      id: string;
      title: string;
      lessons: Array<{
        id: string;
        title: string;
        durationMinutes: number;
        isFreePreview: boolean;
      }>;
    }>;
  };
  lesson: {
    id: string;
    courseSlug: string;
    title: string;
    moduleTitle: string;
    durationMinutes: number;
    isFreePreview: boolean;
    videoTitle: string;
    keyObjectives: string[];
    markdownNotes: string;
    worksheets: Array<{
      title: string;
      filename: string;
      size: string;
      type: string;
    }>;
    quiz: {
      id: string;
      title: string;
      passPercentage: number;
      questions: Array<{
        id: string;
        prompt: string;
        options: Array<{ id: string; text: string }>;
        correctOptionId: string;
        explanation: string;
        topic: string;
      }>;
    };
  };
  video?: {
    hasVideo: boolean;
    primary: LessonVideoData | null;
    alternates: LessonVideoData[];
    userProgress?: {
      positionSeconds: number;
      percentWatched: number;
      completedAt?: string;
    } | null;
    isWaecAligned: boolean;
  };
  progress: {
    isEnrolled: boolean;
    isCompleted: boolean;
    completedLessonIds: string[];
    progressPercentage: number;
    totalLessons: number;
  };
  navigation: {
    prevLesson: { id: string; title: string } | null;
    nextLesson: { id: string; title: string } | null;
  };
}

export default function InteractiveLessonPage({
  params,
}: {
  params: { slug: string; lessonId: string };
}) {
  const router = useRouter();
  const { slug, lessonId } = params;

  const [data, setData] = React.useState<LessonPayload | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<"notes" | "quiz" | "resources">("notes");

  // Video player simulation state
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playbackSpeed, setPlaybackSpeed] = React.useState<"1x" | "1.25x" | "1.5x">("1x");
  const [simulatedProgressSec, setSimulatedProgressSec] = React.useState(180);

  // Lesson completion state
  const [isMarkingComplete, setIsMarkingComplete] = React.useState(false);
  const [isCompletedLocal, setIsCompletedLocal] = React.useState(false);

  // Quiz Runner & Resilience State (LN-02, LN-04, LN-05)
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [quizGrading, setQuizGrading] = React.useState<any>(null);
  const [isSubmittingQuiz, setIsSubmittingQuiz] = React.useState(false);
  const [simulateOffline, setSimulateOffline] = React.useState(false);
  const [networkError, setNetworkError] = React.useState<string | null>(null);
  const [draftSavedTimestamp, setDraftSavedTimestamp] = React.useState<string | null>(null);

  // Local storage cache key for draft resilience (LN-04)
  const draftStorageKey = `trainbow_quiz_draft_${slug}_${lessonId}`;

  // Fetch lesson data
  const fetchLesson = React.useCallback(async () => {
    try {
      const res = await fetch(`/api/academy/courses/${slug}/lessons/${lessonId}`);
      const json = await res.json();
      if (json.success) {
        setData(json);
        setIsCompletedLocal(json.progress.isCompleted);
      }
    } catch (err) {
      console.error("Failed to load lesson:", err);
    } finally {
      setLoading(false);
    }
  }, [slug, lessonId]);

  React.useEffect(() => {
    fetchLesson();
  }, [fetchLesson]);

  // Restore quiz draft from localStorage (LN-04)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(draftStorageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          setSelectedAnswers(parsed.answers || {});
          setDraftSavedTimestamp(parsed.timestamp || null);
        }
      } catch {
        // Ignore local storage read errors
      }
    }
  }, [draftStorageKey]);

  // Handle Option Selection with Auto-Save (LN-04)
  const handleSelectOption = (questionId: string, optionId: string) => {
    const updated = { ...selectedAnswers, [questionId]: optionId };
    setSelectedAnswers(updated);

    // Persist to local storage
    if (typeof window !== "undefined") {
      try {
        const nowStr = new Date().toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        localStorage.setItem(
          draftStorageKey,
          JSON.stringify({ answers: updated, timestamp: nowStr })
        );
        setDraftSavedTimestamp(nowStr);
      } catch {
        // Ignore
      }
    }
  };

  // Submit Quiz with Network Resilience (LN-02, LN-04, LN-05)
  const handleSubmitQuiz = async () => {
    if (simulateOffline) {
      setNetworkError("Network request failed (offline simulation active). Your answers are saved locally. Click 'Retry Submission' when ready.");
      return;
    }

    setIsSubmittingQuiz(true);
    setNetworkError(null);

    try {
      const res = await fetch("/api/academy/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseSlug: slug,
          lessonId,
          answers: selectedAnswers,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setQuizGrading(json.grading);
        setQuizSubmitted(true);
        // Clear local draft upon successful grading
        if (typeof window !== "undefined") {
          localStorage.removeItem(draftStorageKey);
        }
      } else {
        setNetworkError(json.error || "Failed to submit quiz attempt. Please retry.");
      }
    } catch (err) {
      setNetworkError("Connection error while grading quiz. Answers preserved locally. Please retry.");
    } finally {
      setIsSubmittingQuiz(false);
    }
  };

  // Mark lesson as complete
  const handleMarkComplete = async () => {
    setIsMarkingComplete(true);
    try {
      const res = await fetch(`/api/academy/courses/${slug}/lessons/${lessonId}/complete`, {
        method: "POST",
      });
      const json = await res.json();
      if (json.success) {
        setIsCompletedLocal(true);
        if (json.nextLessonId) {
          router.push(`/learn/${slug}/${json.nextLessonId}`);
        } else {
          router.push("/dashboard");
        }
      }
    } catch (err) {
      console.error("Failed to complete lesson:", err);
    } finally {
      setIsMarkingComplete(false);
    }
  };

  if (loading || !data) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-slate-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="flex items-center gap-3 text-neutral-slate-600 font-semibold text-sm">
            <RefreshCw className="w-5 h-5 animate-spin text-brand-blue-600" />
            <h1 className="text-sm font-semibold">Loading lesson curriculum...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { course, lesson, progress, navigation } = data;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      {/* Lesson Header Navigation Bar */}
      <nav className="sticky top-18 z-30 bg-white border-b border-neutral-slate-200 shadow-xs" aria-label="Lesson Subnavigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-xs font-semibold gap-1 pl-1">
                <ChevronLeft className="w-4 h-4" />
                <span>Dashboard</span>
              </Button>
            </Link>

            <span className="text-neutral-slate-300" aria-hidden="true">|</span>

            <div>
              <div className="flex items-center gap-2 text-[11px] text-neutral-slate-600">
                <span className="font-semibold text-neutral-slate-700">{course.title}</span>
                <span>•</span>
                <span className="truncate max-w-[200px]">{lesson.moduleTitle}</span>
              </div>
              <h1 className="text-sm sm:text-base font-bold font-heading text-neutral-slate-900 truncate max-w-md">
                {lesson.title}
              </h1>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden md:flex flex-col items-end text-xs">
              <span className="text-neutral-slate-600 font-medium">
                {progress.completedLessonIds.length} of {progress.totalLessons} completed
              </span>
              <span className="font-bold text-brand-blue-600">{progress.progressPercentage}%</span>
            </div>

            <Button
              variant={isCompletedLocal ? "outline" : "primary"}
              size="sm"
              onClick={handleMarkComplete}
              disabled={isMarkingComplete}
              className="text-xs font-bold gap-1.5"
              data-testid="mark-complete-btn"
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompletedLocal ? "text-status-green-600" : ""}`} />
              <span>{isCompletedLocal ? "Completed ✓" : "Mark Complete"}</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Workspace: 2-Column Responsive View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Syllabus Navigation (Accordion) */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-neutral-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 bg-neutral-slate-100/70 border-b border-neutral-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-blue-600" />
                <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-slate-800">
                  Course Syllabus
                </h2>
              </div>
              <span className="text-[11px] text-neutral-slate-600 font-semibold">
                {course.syllabus.length} Modules
              </span>
            </div>

            <div className="divide-y divide-neutral-slate-100 max-h-[600px] overflow-y-auto">
              {course.syllabus.map((mod) => (
                <div key={mod.id} className="p-2 space-y-1">
                  <span className="px-2.5 py-1 text-[11px] font-bold text-neutral-slate-600 uppercase tracking-wide block">
                    {mod.title}
                  </span>
                  <div className="space-y-0.5">
                    {mod.lessons.map((l) => {
                      const isActive = l.id === lesson.id;
                      const isCompleted = progress.completedLessonIds.includes(l.id);

                      return (
                        <Link
                          key={l.id}
                          href={`/learn/${slug}/${l.id}`}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                            isActive
                              ? "bg-brand-blue-50 text-brand-blue-700 font-bold border border-brand-blue-200"
                              : "text-neutral-slate-700 hover:bg-neutral-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-status-green-600 shrink-0" />
                            ) : (
                              <Play className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brand-blue-600" : "text-neutral-slate-400"}`} />
                            )}
                            <span className="truncate">{l.title}</span>
                          </div>
                          <span className="text-[10px] text-neutral-600 shrink-0 ml-2">
                            {l.durationMinutes}m
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video Stage & Interactive Workspace */}
          <div className="lg:col-span-8 space-y-6">
            {/* Real Educational Video Player (Click-to-Play, youtube-nocookie, Attributions, Alternates) */}
            <RealVideoPlayer
              primaryVideo={data?.video?.primary || null}
              alternates={data?.video?.alternates || []}
              lessonTitle={lesson.title}
              isWaecAligned={data?.video?.isWaecAligned || false}
              initialPositionSeconds={data?.video?.userProgress?.positionSeconds || 0}
              slug={slug}
              lessonId={lessonId}
              onRequestTutor={() => router.push(`/request-tutor?topic=${encodeURIComponent(lesson.title)}`)}
              onProgressUpdate={(posSec, pct) => {
                fetch(`/api/academy/courses/${slug}/lessons/${lessonId}/video-progress`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    videoId: data?.video?.primary?.id,
                    positionSeconds: posSec,
                    percentWatched: pct,
                  }),
                }).catch(() => {});
              }}
              onLessonAutoCompleted={() => {
                setIsCompletedLocal(true);
                // Refresh lesson progress
                fetchLesson();
              }}
            />

            {/* Content Tabs Navigation */}
            <div className="border-b border-neutral-slate-200 flex items-center gap-6 text-sm font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("notes")}
                className={`pb-3 border-b-2 flex items-center gap-2 transition-colors ${
                  activeTab === "notes"
                    ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                    : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-800"
                }`}
                data-testid="tab-notes-btn"
              >
                <BookOpen className="w-4 h-4" />
                <span>Theory & Notes</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("quiz")}
                className={`pb-3 border-b-2 flex items-center gap-2 transition-colors ${
                  activeTab === "quiz"
                    ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                    : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-800"
                }`}
                data-testid="tab-quiz-btn"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Practice Checkpoint Quiz</span>
                <span className="px-1.5 py-0.2 rounded-full bg-brand-blue-50 text-brand-blue-600 text-[10px]">
                  {lesson.quiz.questions.length} Qs
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("resources")}
                className={`pb-3 border-b-2 flex items-center gap-2 transition-colors ${
                  activeTab === "resources"
                    ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                    : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-800"
                }`}
                data-testid="tab-resources-btn"
              >
                <Download className="w-4 h-4" />
                <span>Worksheets & Drills</span>
              </button>
            </div>

            {/* TAB 1: Theory & Notes */}
            {activeTab === "notes" && (
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-6 sm:p-8 space-y-6">
                {/* Objectives */}
                <div className="p-4 rounded-xl bg-blue-50/60 border border-brand-blue-100 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue-700 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    Key Learning Objectives
                  </h3>
                  <ul className="space-y-1.5 text-xs text-neutral-slate-700">
                    {lesson.keyObjectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-blue-600 font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formatted Notes Body */}
                <div className="prose prose-slate max-w-none text-sm text-neutral-slate-700 leading-relaxed space-y-4">
                  <div className="whitespace-pre-line font-sans">{lesson.markdownNotes}</div>
                </div>

                {/* WAEC Alert Banner */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-amber-950">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>WAEC Chief Examiner Marking Invariant</span>
                  </div>
                  <p className="leading-relaxed">
                    Under WASSCE General Mathematics marking schemes, full method marks are awarded for clear mathematical workings.
                    Never jump directly to an answer without stating the conversion formula or algebraic equation.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Interactive Practice Quiz (LN-02, LN-04, LN-05) */}
            {activeTab === "quiz" && (
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-slate-200">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
                      {lesson.quiz.title}
                    </h3>
                    <p className="text-xs text-neutral-slate-600">
                      Pass mark: {lesson.quiz.passPercentage}% • Instant automated grading with step-by-step explanations
                    </p>
                  </div>

                  {/* Resilient Draft Indicator & Offline Simulator (LN-04) */}
                  <div className="flex flex-wrap items-center gap-3">
                    {draftSavedTimestamp && !quizSubmitted && (
                      <span className="text-[11px] text-neutral-slate-600 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-status-green-600" />
                        Draft saved locally ({draftSavedTimestamp})
                      </span>
                    )}

                    <Button
                      variant={simulateOffline ? "destructive" : "outline"}
                      size="sm"
                      onClick={() => setSimulateOffline(!simulateOffline)}
                      className="text-xs font-semibold gap-1.5"
                      data-testid="simulate-offline-toggle"
                    >
                      <WifiOff className="w-3.5 h-3.5" />
                      <span>{simulateOffline ? "Offline Sim Active" : "Simulate Offline"}</span>
                    </Button>
                  </div>
                </div>

                {/* Offline Warning Banner (LN-04) */}
                {networkError && (
                  <div
                    className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3"
                    data-testid="offline-retry-banner"
                  >
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <span className="font-bold block">Network Connection Interrupted</span>
                      <p className="leading-relaxed">{networkError}</p>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSubmitQuiz}
                        disabled={isSubmittingQuiz}
                        className="text-xs font-bold gap-1 mt-1"
                        data-testid="retry-quiz-submission-btn"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isSubmittingQuiz ? "animate-spin" : ""}`} />
                        <span>Retry Submission</span>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Quiz Grading Result Banner */}
                {quizSubmitted && quizGrading && (
                  <div
                    className={`p-6 rounded-xl border text-xs space-y-4 ${
                      quizGrading.passed
                        ? "bg-green-50/70 border-status-green-600/30 text-green-950"
                        : "bg-amber-50/70 border-amber-300 text-amber-950"
                    }`}
                    data-testid="quiz-result-banner"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-full ${
                            quizGrading.passed ? "bg-status-green-600 text-white" : "bg-amber-500 text-white"
                          }`}
                        >
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-base font-extrabold font-heading block">
                            Checkpoint Result: {quizGrading.score}%
                          </span>
                          <span className="text-xs text-neutral-slate-600">
                            {quizGrading.correctCount} of {quizGrading.totalQuestions} questions correct
                          </span>
                        </div>
                      </div>

                      <Badge variant={quizGrading.passed ? "success" : "warning"} className="text-xs font-bold">
                        {quizGrading.passed ? "Checkpoint Passed" : "Needs Review"}
                      </Badge>
                    </div>

                    {/* Targeted Revision Recommendations (LN-05) */}
                    {quizGrading.recommendedTopics.length > 0 && (
                      <div className="pt-3 border-t border-amber-200/60 space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
                          <Lightbulb className="w-4 h-4 text-amber-600" />
                          <span>Targeted Revision Recommendations (LN-05)</span>
                        </div>
                        <p className="text-[11px] text-neutral-slate-700">
                          Based on your answers, review the following syllabus concepts before continuing:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-[11px] font-semibold text-amber-950">
                          {quizGrading.recommendedTopics.map((top: string, idx: number) => (
                            <li key={idx}>{top}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Questions List */}
                <div className="space-y-6">
                  {lesson.quiz.questions.map((q, qIndex) => {
                    const selected = selectedAnswers[q.id];
                    const gradedQ = quizGrading?.questionResults.find((qr: any) => qr.id === q.id);

                    return (
                      <div
                        key={q.id}
                        className="p-5 rounded-xl border border-neutral-slate-200 space-y-4"
                        data-testid={`question-card-${q.id}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <span className="text-[11px] font-bold text-neutral-slate-600 uppercase tracking-wider block">
                              Question {qIndex + 1} of {lesson.quiz.questions.length} • {q.topic}
                            </span>
                            <h4 className="font-heading font-semibold text-sm text-neutral-slate-900">
                              {q.prompt}
                            </h4>
                          </div>

                          {gradedQ && (
                            <Badge variant={gradedQ.isCorrect ? "success" : "destructive"}>
                              {gradedQ.isCorrect ? "Correct ✓" : "Incorrect ✗"}
                            </Badge>
                          )}
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {q.options.map((opt) => {
                            const isChosen = selected === opt.id;
                            let optStyle = "border-neutral-slate-200 hover:border-brand-blue-300 hover:bg-neutral-slate-50";

                            if (quizSubmitted && gradedQ) {
                              if (opt.id === q.correctOptionId) {
                                optStyle = "border-status-green-600 bg-status-green-600/10 text-status-green-950 font-bold";
                              } else if (isChosen && !gradedQ.isCorrect) {
                                optStyle = "border-red-500 bg-red-50 text-red-950 line-through";
                              }
                            } else if (isChosen) {
                              optStyle = "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-900 font-bold ring-2 ring-brand-blue-600/20";
                            }

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => !quizSubmitted && handleSelectOption(q.id, opt.id)}
                                disabled={quizSubmitted}
                                className={`p-3.5 rounded-lg border text-xs text-left flex items-center justify-between transition-colors ${optStyle}`}
                                data-testid={`option-${q.id}-${opt.id}`}
                              >
                                <span className="font-medium">
                                  <strong className="mr-2 font-bold">{opt.id})</strong> {opt.text}
                                </span>
                                {isChosen && <Check className="w-4 h-4 text-brand-blue-600 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>

                        {/* Step-by-Step Explanation when graded */}
                        {quizSubmitted && gradedQ && (
                          <div className="p-3.5 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 text-xs text-neutral-slate-700 space-y-1">
                            <span className="font-bold text-neutral-slate-900 block flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-brand-blue-600" />
                              Step-by-Step Mathematical Explanation:
                            </span>
                            <p className="leading-relaxed">{gradedQ.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Submit / Reset Actions */}
                <div className="pt-4 border-t border-neutral-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-neutral-slate-600">
                    {Object.keys(selectedAnswers).length} of {lesson.quiz.questions.length} questions answered
                  </span>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {quizSubmitted ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setQuizSubmitted(false);
                          setQuizGrading(null);
                        }}
                        className="text-xs font-semibold"
                      >
                        Retry Checkpoint
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handleSubmitQuiz}
                        disabled={isSubmittingQuiz || Object.keys(selectedAnswers).length === 0}
                        className="w-full sm:w-auto font-bold text-xs gap-1.5 shadow-sm"
                        data-testid="submit-quiz-btn"
                      >
                        {isSubmittingQuiz ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Grading...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Submit Checkpoint Answers</span>
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Resources & Downloads */}
            {activeTab === "resources" && (
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-6 sm:p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                    Worksheets, Formula Cards & WAEC Past Questions
                  </h3>
                  <p className="text-xs text-neutral-slate-600">
                    High-yield revision materials designed for offline practice and exam drill
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {lesson.worksheets.map((sheet, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-neutral-slate-200 flex items-center justify-between hover:border-brand-blue-300 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-blue-50 text-brand-blue-600">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-neutral-slate-900">{sheet.title}</h4>
                          <span className="text-[11px] text-neutral-slate-600">
                            {sheet.type} • {sheet.size}
                          </span>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="text-xs font-semibold gap-1.5">
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Lesson Navigation Bar */}
            <div className="p-4 bg-white rounded-xl border border-neutral-slate-200 flex items-center justify-between">
              {navigation.prevLesson ? (
                <Link
                  href={`/learn/${slug}/${navigation.prevLesson.id}`}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "text-xs font-semibold gap-1 min-h-[36px]",
                  })}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev: {navigation.prevLesson.title}</span>
                </Link>
              ) : (
                <div />
              )}

              {navigation.nextLesson ? (
                <Link
                  href={`/learn/${slug}/${navigation.nextLesson.id}`}
                  className={buttonVariants({
                    variant: "primary",
                    size: "sm",
                    className: "text-xs font-bold gap-1 shadow-sm min-h-[36px]",
                  })}
                >
                  <span>Next: {navigation.nextLesson.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "primary",
                    size: "sm",
                    className: "text-xs font-bold gap-1 min-h-[36px]",
                  })}
                >
                  <span>Return to Dashboard</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
