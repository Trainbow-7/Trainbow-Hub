"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollProgress, Carousel, HoverLift, ProgressBar } from "@/components/motion";
import { ChevronRightIcon, ChevronLeftIcon, LoaderIcon, CheckIcon, AlertIcon, PlayIcon, DownloadIcon } from "@/components/ui/icons";
import { LessonVideoPlayer, LessonVideoData } from "@/components/video/LessonVideoPlayer";
import { InlineMathText } from "@/components/ui/InlineMathText";
import { LessonNotesRenderer } from "@/components/academy/LessonNotesRenderer";
import { ScrollableTabs } from "@/components/ui/responsive/ScrollableTabs";
import { BottomSheet } from "@/components/ui/responsive/BottomSheet";
import { getWeakAreaByCode } from "@/lib/data/english-deficiency-map";
import { AssessmentPlayer } from "@/components/assessment/AssessmentPlayer";

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
    isMastered?: boolean;
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
  const [syllabusSheetOpen, setSyllabusSheetOpen] = React.useState(false);

  // Quiz runner state
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [isCompletedLocal, setIsCompletedLocal] = React.useState(false);
  const [isMasteredLocal, setIsMasteredLocal] = React.useState(false);
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
        setIsMasteredLocal(Boolean(json.progress.isMastered));
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
          <AlertIcon className="h-12 w-12 text-amber-500 mx-auto" />
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

  const renderSyllabusTree = () => (
    <div className="space-y-4">
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
        className="space-y-3 max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-1 text-xs"
      >
        {course.syllabus.map((mod) => (
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
                    onClick={() => setSyllabusSheetOpen(false)}
                    className={`block p-2.5 transition-colors ${isActive
                        ? "bg-brand-blue-50 text-brand-blue-700 font-medium border-l-4 border-brand-blue-600"
                        : "hover:bg-neutral-slate-50 text-neutral-slate-700"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 truncate">
                        {isDone ? (
                          <span className="text-status-green-600 font-bold text-xs">✓</span>
                        ) : isActive ? (
                          <PlayIcon className="h-3.5 w-3.5 text-brand-blue-600 shrink-0" />
                        ) : null}
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
  );

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />
      <ScrollProgress />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 pb-28 lg:pb-8">
        {/* Top Navigation & Breadcrumb Row */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-neutral-slate-500 flex-wrap overflow-hidden" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-neutral-slate-900 shrink-0">Home</Link>
            <span>/</span>
            <Link href="/academy" className="hover:text-neutral-slate-900 shrink-0">Academy</Link>
            <span>/</span>
            <Link href={`/courses/${course.slug}`} className="hover:text-neutral-slate-900 font-medium truncate max-w-[140px] sm:max-w-[200px]">
              {course.title}
            </Link>
            <span>/</span>
            <span className="font-semibold text-neutral-slate-900 truncate max-w-[140px] sm:max-w-[220px]">{lesson.title}</span>
          </nav>

          {/* Mobile Syllabus Pill Button (< 1024px) */}
          <button
            type="button"
            onClick={() => setSyllabusSheetOpen(true)}
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-neutral-slate-200 text-neutral-slate-700 hover:bg-neutral-slate-100 shadow-xs min-h-[36px]"
          >

            <span>Syllabus ({progress.progressPercentage}%)</span>
          </button>
        </div>

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
                {isMasteredLocal && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-status-green-100 text-status-green-800 border border-status-green-200">
                    ★ Concept Mastered
                  </span>
                )}
                {(() => {
                  const weakCode = (lesson as any).weakAreaCodes?.[0];
                  if (!weakCode) return null;
                  const wa = getWeakAreaByCode(weakCode);
                  return (
                    <span className="text-xs text-neutral-slate-600 font-normal">
                      Fixes: {wa ? wa.title : weakCode}
                    </span>
                  );
                })()}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
                {lesson.title}
              </h1>
            </div>

            {/* Video Player or Level-Appropriate Fallback */}
            {video?.hasVideo && video.primary ? (
              <LessonVideoPlayer
                primaryVideo={video.primary}
                alternates={video.alternates}
                slug={course.slug}
                courseSlug={course.slug}
                lessonSlug={lesson.id}
                lessonId={lesson.id}
                lessonTitle={lesson.title}
                initialPositionSeconds={video.userProgress?.positionSeconds || 0}
                isWaecAligned={video.isWaecAligned}
              />
            ) : (
              <div className="rounded-2xl border border-neutral-slate-200 bg-black overflow-hidden shadow-sm aspect-video w-full flex items-center justify-center">
                <div className="bg-neutral-slate-900 text-white p-6 sm:p-12 text-center space-y-4 w-full">
                  <p className="text-xs text-neutral-slate-400 uppercase tracking-wider font-semibold">Video Unavailable</p>
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
                      Read Lesson Notes
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setActiveTab("quiz")}
                    >
                      Take Checkpoint Quiz
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Action Bar: Prev / Next & Mark Complete (>= 1024px) */}
            <div className="hidden lg:flex items-center justify-between gap-4 py-3 border-y border-neutral-slate-200 text-xs">
              <div>
                {navigation.prevLesson ? (
                  <Link href={`/courses/${course.slug}/lessons/${navigation.prevLesson.slug || navigation.prevLesson.id}`}>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ChevronLeftIcon className="h-4 w-4" />
                      <span>Previous: </span>
                      <span className="truncate max-w-[140px]">{navigation.prevLesson.title}</span>
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" disabled className="gap-1 opacity-40">
                    <ChevronLeftIcon className="h-4 w-4" />
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
                  <span className="text-status-green-600 font-bold text-xs">✓</span>
                  <span>{isCompletedLocal ? "Completed" : "Mark Complete"}</span>
                </Button>
              </div>

              <div>
                {navigation.nextLesson ? (
                  <Link href={`/courses/${course.slug}/lessons/${navigation.nextLesson.slug || navigation.nextLesson.id}`}>
                    <Button variant="primary" size="sm" className="gap-1">
                      <span>Next: </span>
                      <span className="truncate max-w-[140px]">{navigation.nextLesson.title}</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" disabled className="gap-1 opacity-40">
                    <span>Next</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Responsive Tab Navigation: Notes, Quiz, Resources */}
            <ScrollableTabs
              tabs={[
                { id: "notes", label: "Lesson Notes" },
                { id: "quiz", label: "Practice Quiz", count: lesson.quiz?.questions?.length || 0 },
                { id: "resources", label: "Resources", count: lesson.worksheets?.length || 0 },
              ]}
              activeId={activeTab}
              onChange={(id) => setActiveTab(id as any)}
            />

            {/* Tab Panels */}
            {activeTab === "notes" && (
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 sm:p-8 space-y-6">
                {lesson.markdownNotes ? (
                  <LessonNotesRenderer content={lesson.markdownNotes} />
                ) : (
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
                  </div>
                )}
              </div>
            )}

            {activeTab === "quiz" && (
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-neutral-slate-900">
                    Checkpoint Assessment: {lesson.title}
                  </h3>
                  <p className="text-xs text-neutral-slate-500">
                    Prove your mathematical understanding of this syllabus topic.
                  </p>
                </div>

                <AssessmentPlayer
                  courseSlug={course.slug}
                  lessonId={lesson.id}
                  initialMode="practice"
                  onMasteryChange={(isMastered) => {
                    if (isMastered) {
                      setIsMasteredLocal(true);
                    }
                  }}
                />
              </div>
            )}

            {activeTab === "resources" && (
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 sm:p-8 space-y-4">
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
                        <div>
                          <h4 className="font-semibold text-neutral-slate-900">{w.title}</h4>
                          <span className="text-neutral-slate-500">{w.size} • {w.type}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="gap-1">
                        <DownloadIcon size="sm" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Lessons Carousel */}
            {(() => {
              const allLessons = course.syllabus.flatMap((m) => m.lessons);
              const curIdx = allLessons.findIndex((l) => l.id === lesson.id || (l as any).slug === lessonSlug);
              const upcoming = allLessons.slice(curIdx + 1, curIdx + 7);
              if (upcoming.length === 0) return null;
              return (
                <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                        Next lessons in this course
                      </h3>
                      <p className="text-xs text-neutral-slate-500">
                        Continue through your syllabus curriculum
                      </p>
                    </div>
                  </div>
                  <Carousel
                    items={upcoming}
                    ariaLabel="Upcoming lessons carousel"
                    slidesPerView={{ default: 1, sm: 2 }}
                    showControls={true}
                    showProgress={true}
                    renderItem={(nextLes) => (
                      <HoverLift className="h-full">
                        <Link
                          href={`/courses/${course.slug}/lessons/${(nextLes as any).slug || nextLes.id}`}
                          className="group block p-4 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 hover:bg-brand-blue-50/50 hover:border-brand-blue-300 transition-colors h-full flex flex-col justify-between space-y-2"
                        >
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">
                              Upcoming
                            </span>
                            <h4 className="font-heading font-bold text-xs sm:text-sm text-neutral-slate-900 group-hover:text-brand-blue-700 transition-colors line-clamp-2">
                              {nextLes.title}
                            </h4>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-neutral-slate-500 pt-2 border-t border-neutral-slate-200/60">
                            <span>{nextLes.durationMinutes}m</span>
                            <span className="font-semibold text-brand-blue-600">Start lesson →</span>
                          </div>
                        </Link>
                      </HoverLift>
                    )}
                  />
                </div>
              );
            })()}
          </div>

          {/* Right Sidebar: Course Syllabus Tree (4 Cols on desktop >= 1024px) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-5 shadow-sm space-y-4">
              {renderSyllabusTree()}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Syllabus Bottom Sheet (< 1024px) */}
      <BottomSheet
        open={syllabusSheetOpen}
        onOpenChange={setSyllabusSheetOpen}
        title="Course Syllabus"
        description={`${course.title} • ${progress.progressPercentage}% completed`}
      >
        {renderSyllabusTree()}
      </BottomSheet>

      {/* Pinned Bottom Navigation Bar on Mobile (< 1024px) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 dark:bg-[#0B1226]/95 backdrop-blur-md border-t border-neutral-slate-200 dark:border-white/10 px-3 py-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(11,27,58,0.08)]"
      >
        <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
          {navigation.prevLesson ? (
            <Link href={`/courses/${course.slug}/lessons/${navigation.prevLesson.slug || navigation.prevLesson.id}`} className="shrink-0">
              <Button variant="outline" size="sm" className="gap-1 min-h-[44px]">
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Prev</span>
              </Button>
            </Link>
          ) : (
            <Button variant="outline" size="sm" disabled className="gap-1 opacity-40 shrink-0 min-h-[44px]">
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Prev</span>
            </Button>
          )}

          <Button
            variant={isCompletedLocal ? "outline" : "primary"}
            size="sm"
            onClick={handleToggleComplete}
            disabled={isMarkingComplete}
            className="flex-1 justify-center gap-1.5 min-h-[44px]"
          >
            <span className="text-status-green-600 font-bold text-xs">✓</span>
            <span className="truncate">{isCompletedLocal ? "Completed" : "Mark Complete"}</span>
          </Button>

          {navigation.nextLesson ? (
            <Link href={`/courses/${course.slug}/lessons/${navigation.nextLesson.slug || navigation.nextLesson.id}`} className="shrink-0">
              <Button variant="primary" size="sm" className="gap-1 min-h-[44px]">
                <span className="hidden sm:inline">Next</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" size="sm" disabled className="gap-1 opacity-40 shrink-0 min-h-[44px]">
              <span className="hidden sm:inline">Next</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
