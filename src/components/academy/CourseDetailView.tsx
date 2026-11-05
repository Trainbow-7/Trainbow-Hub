"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { CourseItem, ALL_COURSES } from "@/lib/data/seed-data";
import { getWeakAreaByCode } from "@/lib/data/english-deficiency-map";
import { CourseEnrollmentAction } from "@/components/academy/CourseEnrollmentAction";
import { StickyActionBar } from "@/components/ui/responsive/StickyActionBar";
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon, PlayIcon } from "@/components/ui/icons";
import { InlineMathText } from "@/components/ui/InlineMathText";
import { Reveal, Collapse, Carousel, HoverLift } from "@/components/motion";

interface CourseDetailViewProps {
  course: CourseItem;
}

export function CourseDetailView({ course }: CourseDetailViewProps) {
  const firstLesson = course.syllabus[0]?.lessons[0];
  const firstLessonSlug = (firstLesson as any)?.slug || firstLesson?.id || "l1";

  // Accordion state for modules (first open by default)
  const [openModules, setOpenModules] = React.useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    course.syllabus.forEach((mod, idx) => {
      initial[mod.id] = idx === 0;
    });
    return initial;
  });

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const relatedCourses = ALL_COURSES.filter(
    (c) => c.id !== course.id && (c.subjectSlug === course.subjectSlug || c.level === course.level)
  ).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10 pb-24 lg:pb-10">
        {/* Breadcrumb Navigation: Home > Academy > Subject > Course */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-neutral-slate-900">Academy</Link>
          <span>/</span>
          <Link href={`/academy/${course.subjectSlug}`} className="hover:text-neutral-slate-900">
            {course.subjectName}
          </Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900 truncate max-w-xs">{course.title}</span>
        </nav>

        {/* Course Header Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <Reveal>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="brand">{course.level}</Badge>
                  <Badge variant="neutral">{course.subjectName}</Badge>
                  {(course as any).teacherReviewCompleted ? (
                    <span className="text-xs text-status-green-800 font-bold flex items-center gap-1">
                      <span className="text-status-green-600 font-bold text-xs shrink-0 mt-0.5">✓</span>
                      Syllabus Verified
                    </span>
                  ) : (
                    <span className="text-xs text-neutral-slate-600 font-medium flex items-center gap-1">
                      <span className="text-status-green-600 font-bold text-xs shrink-0 mt-0.5">✓</span>
                      Syllabus mapping in review
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-neutral-slate-900 tracking-tight leading-tight">
                  {course.title}
                </h1>

                <p className="text-sm sm:text-base text-neutral-slate-600 leading-relaxed">
                  {course.fullDescription}
                </p>
              </div>
            </Reveal>

            {/* Quick Stats Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-4 border-y border-neutral-slate-200 text-xs text-neutral-slate-600">
              {course.reviewCount > 0 ? (
                <Rating value={course.rating} count={course.reviewCount} />
              ) : (
                <span className="text-[11px] text-neutral-slate-400 font-medium">New course</span>
              )}
              <div className="flex items-center gap-1.5">
                <span>{course.lessonCount} Structured Lessons</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>
                  {course.durationHours > 0
                    ? `${course.durationHours} Hours Video & Quizzes`
                    : "Videos coming soon"}
                </span>
              </div>
            </div>

            {/* Instructor Profile Card */}
            <div className="p-4 rounded-xl border border-neutral-slate-200 bg-white flex items-center gap-4">
              <Avatar name={course.instructorName} size="lg" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">
                  Instruction & Curriculum
                </span>
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                  {course.instructorName}
                </h3>
                <p className="text-xs text-neutral-slate-600">
                  {course.instructorTitle && course.instructorTitle !== "UTME Quantitative Specialist & CBT Strategy Lead"
                    ? course.instructorTitle
                    : "Course by Trainbow HUB Academy"}
                </p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <Reveal>
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 sm:p-6 space-y-4">
                <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
                  What You Will Master
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-slate-700">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-status-green-600 font-bold text-xs shrink-0 mt-0.5">✓</span>
                      <span><InlineMathText text={outcome} /></span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Course Syllabus Accordion with Collapse */}
            <Reveal>
              <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 sm:p-6 space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
                      Course Syllabus
                    </h2>
                    <p className="text-xs text-neutral-slate-500">
                      {course.syllabus.length} Modules • {course.lessonCount} Lessons
                    </p>
                  </div>
                  <span className="text-xs text-neutral-slate-500">Resumable on phone & laptop</span>
                </div>

                {/* Diagnostic Entrance */}
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm text-brand-navy-900">
                      Find your weak spots
                    </h3>
                    <p className="text-xs text-neutral-slate-600 max-w-xl">
                      Take a 10-minute diagnostic test to identify your priority weak areas and generate a personalized lesson path.
                    </p>
                  </div>
                  <Link href={`/courses/${course.slug}/diagnostic`} className="shrink-0">
                    <Button variant="outline" size="sm" className="border-indigo-300 text-indigo-700 hover:bg-indigo-100">
                      Start diagnostic test
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  {course.syllabus.map((mod) => {
                    const isOpen = !!openModules[mod.id];
                    return (
                      <div key={mod.id} className="rounded-lg border border-neutral-slate-200 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => toggleModule(mod.id)}
                          aria-expanded={isOpen}
                          className="w-full text-left bg-neutral-slate-50 px-4 py-3 border-b border-neutral-slate-200 flex items-center justify-between flex-wrap gap-2 hover:bg-neutral-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600"
                        >
                          <div className="flex-1 min-w-[200px]">
                            <span className="font-heading font-semibold text-xs sm:text-sm text-neutral-slate-900 block">
                              {mod.title}
                            </span>
                            {(mod as any).description && (
                              <span className="text-[11px] text-neutral-slate-500">{(mod as any).description}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[11px] text-neutral-slate-500 font-medium">
                              {mod.lessons.length} Lessons
                            </span>
                            {isOpen ? (
                              <ChevronUpIcon size="sm" fallbackText="Collapse" />
                            ) : (
                              <ChevronDownIcon size="sm" fallbackText="Expand" />
                            )}
                          </div>
                        </button>

                        <Collapse isOpen={isOpen}>
                          <div className="divide-y divide-neutral-slate-100 p-2">
                            {mod.lessons.map((lesson) => {
                              const lessonSlug = (lesson as any).slug || lesson.id;
                              const weakAreaCode = (lesson as any).weakAreaCodes?.[0];
                              const weakArea = weakAreaCode ? getWeakAreaByCode(weakAreaCode) : null;
                              const lessonRow = (
                                <div className="flex items-center justify-between py-2.5 px-3 text-xs min-h-[44px]">
                                  <div className="flex items-center gap-2.5 truncate mr-2 flex-wrap sm:flex-nowrap">
                                    <span className={lesson.isFreePreview ? "font-medium text-brand-blue-700 hover:underline truncate" : "text-neutral-slate-700 truncate"}>
                                      <InlineMathText text={lesson.title} />
                                    </span>
                                    {weakArea && (
                                      <span className="text-[11px] text-neutral-slate-500 font-normal shrink-0">
                                        Fixes: {weakArea.title}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-3 shrink-0">
                                    <span className="text-[11px] text-neutral-slate-500">{lesson.durationMinutes}m</span>
                                    {lesson.isFreePreview ? (
                                      <span className="rounded bg-brand-blue-50 text-brand-blue-600 px-2 py-0.5 text-[10px] font-bold">
                                        Free Preview
                                      </span>
                                    ) : (
                                      <span className="text-[10px] text-neutral-slate-400 font-semibold">Locked</span>
                                    )}
                                  </div>
                                </div>
                              );

                              return (
                                <Link
                                  key={lesson.id}
                                  href={`/courses/${course.slug}/lessons/${lessonSlug}`}
                                  className="block hover:bg-brand-blue-50/50 rounded-md transition-colors"
                                >
                                  {lessonRow}
                                </Link>
                              );
                            })}
                          </div>
                        </Collapse>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Related Courses Carousel */}
            {relatedCourses.length > 0 && (
              <Reveal>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-heading font-bold text-lg sm:text-xl text-neutral-slate-900">
                        Related examination courses
                      </h2>
                      <p className="text-xs text-neutral-slate-500">
                        Continue building your exam preparation track
                      </p>
                    </div>
                  </div>

                  <Carousel
                    items={relatedCourses}
                    ariaLabel="Related courses carousel"
                    slidesPerView={{ default: 1, sm: 2 }}
                    showControls={true}
                    showProgress={true}
                    renderItem={(rel) => (
                      <HoverLift className="h-full">
                        <Link
                          href={`/courses/${rel.slug}`}
                          className="group block p-5 rounded-xl border border-neutral-slate-200 bg-white hover:border-brand-blue-600 transition-colors h-full flex flex-col justify-between space-y-3"
                        >
                          <div className="space-y-2">
                            <Badge variant="brand">{rel.level}</Badge>
                            <h3 className="font-heading font-bold text-sm text-neutral-slate-900 group-hover:text-brand-blue-600 transition-colors">
                              {rel.title}
                            </h3>
                            <p className="text-xs text-neutral-slate-600 line-clamp-2">
                              {rel.shortDescription}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-neutral-slate-100 text-[11px] text-neutral-slate-500">
                            <span>{rel.lessonCount} Lessons</span>
                            <span className="font-semibold text-brand-blue-600">View course →</span>
                          </div>
                        </Link>
                      </HoverLift>
                    )}
                  />
                </div>
              </Reveal>
            )}
          </div>

          {/* Sticky Checkout Sidebar Card (4 cols, desktop) */}
          <div className="lg:col-span-4 sticky top-24">
            <Reveal variant="scaleIn">
              <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-soft space-y-6">
                <div>
                  <span className="text-xs font-semibold text-neutral-slate-500 block mb-1">Tuition Fee</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">
                      ₦{(course.priceMinorUnits / 100).toLocaleString("en-NG")}
                    </span>
                    <span className="text-xs text-neutral-slate-500">/ one-time or Academy pass</span>
                  </div>
                </div>

                <CourseEnrollmentAction
                  courseSlug={course.slug}
                  priceMinorUnits={course.priceMinorUnits}
                  firstLessonId={firstLessonSlug}
                />

                <div className="pt-4 border-t border-neutral-slate-100 space-y-2.5 text-xs text-neutral-slate-600">
                  <div className="flex items-center gap-2">
                    <span>Syllabus mapped to official examination standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Practice checkpoints with automated grading</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      {/* Sticky Action Bar on Mobile (< 1024px) */}
      <StickyActionBar>
        <div>
          <span className="text-[10px] font-semibold text-neutral-slate-500 uppercase tracking-wider block">Tuition Fee</span>
          <span className="text-lg font-extrabold font-heading text-neutral-slate-900">
            ₦{(course.priceMinorUnits / 100).toLocaleString("en-NG")}
          </span>
        </div>
        <div className="flex-1 max-w-[220px]">
          <CourseEnrollmentAction
            courseSlug={course.slug}
            priceMinorUnits={course.priceMinorUnits}
            firstLessonId={firstLessonSlug}
          />
        </div>
      </StickyActionBar>

      <Footer />
    </div>
  );
}
