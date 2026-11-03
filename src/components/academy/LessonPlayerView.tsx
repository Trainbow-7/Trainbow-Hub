"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
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
  Clock,
  Video,
  ExternalLink,
} from "lucide-react";
import { RealVideoPlayer, LessonVideoData } from "@/components/video/RealVideoPlayer";
import { InlineMathText } from "@/components/ui/InlineMathText";

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
        slug: string;
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
    prevLesson: { id: string; slug?: string; title: string } | null;
    nextLesson: { id: string; slug?: string; title: string } | null;
  };
}

interface LessonPlayerViewProps {
  courseSlug: string;
  lessonSlug: string;
}

export function LessonPlayerView({ courseSlug, lessonSlug }: LessonPlayerViewProps) {
  const router = useRouter();
  const [data, setData] = React.useState<LessonPayload | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<"notes" | "quiz" | "resources">("notes");

  // Quiz runner state
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [isCompletedLocal, setIsCompletedLocal] = React.useState(false);
  const [isMarkingComplete, setIsMarkingComplete] = React.useState(false);

  const syllabusContainerRef = React.useRef<HTMLDivElement | null>(null);
  const activeLessonRef = React.useRef<HTMLAnchorElement | null>(null);

  // Fetch lesson data
  const fetchLesson = React.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`/api/academy/courses/${courseSlug}/lessons/${lessonSlug}`);
      if (!res.ok) {
        if (res.status === 404) {
          setError("Lesson not found in this course.");
          return;
        }
        throw new Error(`Failed to load lesson (${res.status})`);
      }
      const json: LessonPayload = await res.json();
      if (json.success) {
        setData(json);
        setIsCompletedLocal(json.progress.isCompleted);
      } else {
        setError((json as any).error || "Failed to load lesson");
      }
    } catch (err: any) {
      console.error("Lesson fetch error:", err);
      setError(err.message || "Failed to load lesson");
    } finally {
      setLoading(false);
    }
  }, [courseSlug, lessonSlug]);

  React.useEffect(() => {
    fetchLesson();
  }, [fetchLesson]);

  // Smooth scroll active lesson into view
  React.useEffect(() => {
    if (activeLessonRef.current && syllabusContainerRef.current) {
      activeLessonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [data]);

  // Handle Mark Complete toggle
  const handleToggleComplete = async () => {
    if (!data || isMarkingComplete) return;
    setIsMarkingComplete(true);
    const newStatus = !isCompletedLocal;
    setIsCompletedLocal(newStatus);

    try {
      await fetch(`/api/academy/courses/${courseSlug}/lessons/${data.lesson.id}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: newStatus }),
      });
    } catch (e) {
      console.error("Completion update error:", e);
    } finally {
      setIsMarkingComplete(false);
    }
  };

  // Grade Quiz
  const handleGradeQuiz = () => {
    setQuizSubmitted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-slate-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center space-y-3">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-blue-600 border-t-transparent" />
            <p className="text-xs text-neutral-slate-500 font-medium">Loading syllabus lesson...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-slate-50">
        <Navbar />
        <main className="flex-1 max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto" />
          <h1 className="text-2xl font-bold font-heading text-neutral-slate-900">
            {error || "Lesson Not Found"}
          </h1>
          <p className="text-xs text-neutral-slate-600">
            This lesson does not belong to course &ldquo;{courseSlug}&rdquo; or has been moved.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <Link href={`/courses/${courseSlug}`}>
              <Button variant="primary" size="sm">
                Back to Course Syllabus
              </Button>
            </Link>
            <Link href="/academy/mathematics">
              <Button variant="outline" size="sm">
                Browse Mathematics Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { course, lesson, video, progress, navigation } = data;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Breadcrumb Navigation: Home > Academy > Subject > Course > Module > Lesson */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-neutral-slate-900">Academy</Link>
          <span>/</span>
          <Link href="/academy/mathematics" className="hover:text-neutral-slate-900">Mathematics</Link>
          <span>/</span>
          <Link href={`/courses/${course.slug}`} className="hover:text-neutral-slate-900 font-medium truncate max-w-[200px]">
            {course.title}
          </Link>
          <span>/</span>
          <span className="text-neutral-slate-400 truncate max-w-[150px]">{lesson.moduleTitle}</span>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900 truncate max-w-[200px]">{lesson.title}</span>
        </nav>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="brand">{course.level}</Badge>
                <span className="text-xs text-neutral-slate-500">{lesson.moduleTitle}</span>
                {lesson.isFreePreview && (
                  <Badge variant="tutor" className="text-[10px]">Free Preview</Badge>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
                {lesson.title}
              </h1>
            </div>

            {/* Video Player or Level-Appropriate Fallback */}
            <div className="rounded-2xl border border-neutral-slate-200 bg-black overflow-hidden shadow-sm">
              {video?.hasVideo && video.primary ? (
                <RealVideoPlayer
                  primaryVideo={video.primary}
                  alternates={video.alternates}
                  slug={course.slug}
                  lessonId={lesson.id}
                  lessonTitle={lesson.title}
                  initialPositionSeconds={video.userProgress?.positionSeconds || 0}
                  isWaecAligned={video.isWaecAligned}
                />
              ) : (
                <div className="bg-neutral-slate-900 text-white p-8 sm:p-12 text-center space-y-4">
                  <Video className="h-12 w-12 text-neutral-slate-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      Video Lesson in Production
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-slate-300 max-w-md mx-auto leading-relaxed">
                      A verified recording for this syllabus topic is pending teacher review. In the meantime, study the comprehensive lesson notes, formulas, and test your understanding with the checkpoint quiz below.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white/20 hover:bg-white/10"
                      onClick={() => setActiveTab("notes")}
                    >
                      <BookOpen className="h-4 w-4 mr-1.5" />
                      Read Lesson Notes
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setActiveTab("quiz")}
                    >
                      <HelpCircle className="h-4 w-4 mr-1.5" />
                      Take Checkpoint Quiz
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar: Prev / Next & Mark Complete */}
            <div className="flex items-center justify-between gap-4 py-3 border-y border-neutral-slate-200 text-xs">
              <div>
                {navigation.prevLesson ? (
                  <Link href={`/courses/${course.slug}/lessons/${navigation.prevLesson.slug || navigation.prevLesson.id}`}>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Previous: </span>
                      <span className="truncate max-w-[120px]">{navigation.prevLesson.title}</span>
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" disabled className="gap-1 opacity-40">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={isCompletedLocal ? "outline" : "primary"}
                  size="sm"
                  onClick={handleToggleComplete}
                  disabled={isMarkingComplete}
                  className="gap-1.5"
                >
                  <CheckCircle2 className={`h-4 w-4 ${isCompletedLocal ? "text-status-green-600" : ""}`} />
                  <span>{isCompletedLocal ? "Completed" : "Mark Complete"}</span>
                </Button>
              </div>

              <div>
                {navigation.nextLesson ? (
                  <Link href={`/courses/${course.slug}/lessons/${navigation.nextLesson.slug || navigation.nextLesson.id}`}>
                    <Button variant="primary" size="sm" className="gap-1">
                      <span className="hidden sm:inline">Next: </span>
                      <span className="truncate max-w-[120px]">{navigation.nextLesson.title}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" disabled className="gap-1 opacity-40">
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Tab Navigation: Notes, Quiz, Resources */}
            <div className="border-b border-neutral-slate-200">
              <nav className="flex space-x-6 text-sm font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("notes")}
                  className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
                    activeTab === "notes"
                      ? "border-brand-blue-600 text-brand-blue-600"
                      : "border-transparent text-neutral-slate-500 hover:text-neutral-slate-900"
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  Lesson Notes
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("quiz")}
                  className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
                    activeTab === "quiz"
                      ? "border-brand-blue-600 text-brand-blue-600"
                      : "border-transparent text-neutral-slate-500 hover:text-neutral-slate-900"
                  }`}
                >
                  <HelpCircle className="h-4 w-4" />
                  Practice Quiz ({lesson.quiz?.questions?.length || 0})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("resources")}
                  className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
                    activeTab === "resources"
                      ? "border-brand-blue-600 text-brand-blue-600"
                      : "border-transparent text-neutral-slate-500 hover:text-neutral-slate-900"
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  Resources ({lesson.worksheets?.length || 0})
                </button>
              </nav>
            </div>

            {/* Tab Panels */}
            {activeTab === "notes" && (
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-6 prose prose-slate max-w-none">
                <div className="space-y-4 text-xs sm:text-sm text-neutral-slate-700 leading-relaxed">
                  <div className="p-4 rounded-lg bg-brand-blue-50/50 border border-brand-blue-100">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-blue-800 mb-2">
                      Key Objectives
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      {lesson.keyObjectives.map((obj, i) => (
                        <li key={i}><InlineMathText text={obj} /></li>
                      ))}
                    </ul>
                  </div>

                  <div className="whitespace-pre-line font-sans">
                    <InlineMathText text={lesson.markdownNotes} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "quiz" && (
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                    {lesson.quiz?.title || "Checkpoint Quiz"}
                  </h3>
                  <p className="text-xs text-neutral-slate-500">
                    Test your understanding of this topic before proceeding.
                  </p>
                </div>

                <div className="space-y-6">
                  {(lesson.quiz?.questions || []).map((q, idx) => {
                    const selected = selectedAnswers[q.id];
                    const isGraded = quizSubmitted;
                    const isCorrect = selected === q.correctOptionId;

                    return (
                      <div key={q.id} className="p-4 rounded-xl border border-neutral-slate-200 space-y-3">
                        <span className="text-xs font-bold text-brand-blue-600">Question {idx + 1}</span>
                        <p className="text-sm font-medium text-neutral-slate-900">
                          <InlineMathText text={q.prompt} />
                        </p>

                        <div className="space-y-2 pt-2">
                          {q.options.map((opt) => {
                            const isOptSelected = selected === opt.id;
                            let btnStyle = "border-neutral-slate-200 hover:border-brand-blue-300";
                            if (isOptSelected) btnStyle = "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-900";
                            if (isGraded && opt.id === q.correctOptionId) {
                              btnStyle = "border-status-green-600 bg-status-green-50 text-status-green-900 font-semibold";
                            } else if (isGraded && isOptSelected && !isCorrect) {
                              btnStyle = "border-status-red-600 bg-status-red-50 text-status-red-900";
                            }

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => !quizSubmitted && setSelectedAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                                className={`w-full text-left p-3 rounded-lg border text-xs flex items-center justify-between transition-colors ${btnStyle}`}
                              >
                                <span className="flex items-center gap-2">
                                  <span className="font-bold">{opt.id}.</span>
                                  <InlineMathText text={opt.text} />
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {isGraded && (
                          <div className={`p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? "bg-status-green-50 text-status-green-900 border border-status-green-200" : "bg-status-red-50 text-status-red-900 border border-status-red-200"}`}>
                            <span className="font-bold block mb-1">
                              {isCorrect ? "Correct!" : "Explanation:"}
                            </span>
                            <InlineMathText text={q.explanation} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!quizSubmitted ? (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={handleGradeQuiz}
                    disabled={Object.keys(selectedAnswers).length === 0}
                  >
                    Submit Answers
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setQuizSubmitted(false);
                      setSelectedAnswers({});
                    }}
                  >
                    Retake Quiz
                  </Button>
                )}
              </div>
            )}

            {activeTab === "resources" && (
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-4">
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                  Worksheets & Study Materials
                </h3>
                <div className="space-y-3">
                  {(lesson.worksheets || []).map((w, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-neutral-slate-200 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-brand-blue-600 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-slate-900">{w.title}</h4>
                          <span className="text-neutral-slate-500">{w.size} • {w.type}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Course Syllabus Tree (4 Cols) */}
          <div className="lg:col-span-4 sticky top-20 space-y-4">
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-5 shadow-sm space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">
                  Course Syllabus
                </span>
                <h3 className="font-heading font-bold text-sm text-neutral-slate-900 truncate">
                  <Link href={`/courses/${course.slug}`} className="hover:text-brand-blue-600 transition-colors">
                    {course.title}
                  </Link>
                </h3>
              </div>

              {/* Course Progress */}
              <div className="space-y-1.5 pt-2 border-t border-neutral-slate-100">
                <div className="flex items-center justify-between text-xs text-neutral-slate-600">
                  <span>Course Progress</span>
                  <span className="font-bold">{progress.progressPercentage}%</span>
                </div>
                <ProgressBar value={progress.progressPercentage} />
              </div>

              {/* Scrollable Module & Lesson List */}
              <div
                ref={syllabusContainerRef}
                className="space-y-3 max-h-[600px] overflow-y-auto pr-1 text-xs"
              >
                {course.syllabus.map((mod, mIdx) => (
                  <div key={mod.id} className="rounded-lg border border-neutral-slate-200 overflow-hidden">
                    <div className="bg-neutral-slate-50 px-3 py-2 border-b border-neutral-slate-200 font-semibold text-neutral-slate-900 text-[11px]">
                      {mod.title}
                    </div>
                    <div className="divide-y divide-neutral-slate-100">
                      {mod.lessons.map((les) => {
                        const isActive = les.id === lesson.id || les.slug === lessonSlug;
                        const isDone = progress.completedLessonIds.includes(les.id);

                        return (
                          <Link
                            key={les.id}
                            ref={isActive ? activeLessonRef : null}
                            href={`/courses/${course.slug}/lessons/${les.slug || les.id}`}
                            className={`block p-2.5 transition-colors ${
                              isActive
                                ? "bg-brand-blue-50 text-brand-blue-700 font-medium border-l-4 border-brand-blue-600"
                                : "hover:bg-neutral-slate-50 text-neutral-slate-700"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 truncate">
                                {isDone ? (
                                  <CheckCircle2 className="h-3.5 w-3.5 text-status-green-600 shrink-0" />
                                ) : isActive ? (
                                  <Play className="h-3.5 w-3.5 text-brand-blue-600 shrink-0" />
                                ) : (
                                  <BookOpen className="h-3.5 w-3.5 text-neutral-slate-400 shrink-0" />
                                )}
                                <span className="truncate">{les.title}</span>
                              </div>
                              <span className="text-[10px] text-neutral-slate-400 shrink-0">
                                {les.durationMinutes}m
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

