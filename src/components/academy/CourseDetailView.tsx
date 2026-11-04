"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { CourseItem } from "@/lib/data/seed-data";
import { CourseEnrollmentAction } from "@/components/academy/CourseEnrollmentAction";
import { StickyActionBar } from "@/components/ui/responsive/StickyActionBar";
import { ChevronRightIcon, PlayIcon } from "@/components/ui/icons";
import { InlineMathText } from "@/components/ui/InlineMathText";

interface CourseDetailViewProps {
  course: CourseItem;
}

export function CourseDetailView({ course }: CourseDetailViewProps) {
  const firstLesson = course.syllabus[0]?.lessons[0];
  const firstLessonSlug = (firstLesson as any)?.slug || firstLesson?.id || "l1";

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

            {/* Course Syllabus */}
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

              <div className="space-y-4">
                {course.syllabus.map((mod) => (
                  <div key={mod.id} className="rounded-lg border border-neutral-slate-200 overflow-hidden">
                    <div className="bg-neutral-slate-50 px-4 py-3 border-b border-neutral-slate-200 flex items-center justify-between flex-wrap gap-1">
                      <div>
                        <span className="font-heading font-semibold text-xs sm:text-sm text-neutral-slate-900 block">
                          {mod.title}
                        </span>
                        {(mod as any).description && (
                          <span className="text-[11px] text-neutral-slate-500">{(mod as any).description}</span>
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-slate-500 font-medium shrink-0 ml-auto">
                        {mod.lessons.length} Lessons
                      </span>
                    </div>

                    <div className="divide-y divide-neutral-slate-100 p-2">
                      {mod.lessons.map((lesson) => {
                        const lessonSlug = (lesson as any).slug || lesson.id;
                        const lessonRow = (
                          <div className="flex items-center justify-between py-2.5 px-3 text-xs min-h-[44px]">
                            <div className="flex items-center gap-2.5 truncate mr-2">
                              <span className={lesson.isFreePreview ? "font-medium text-brand-blue-700 hover:underline truncate" : "text-neutral-slate-700 truncate"}>
                                <InlineMathText text={lesson.title} />
                              </span>
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Checkout Sidebar Card (4 cols, desktop) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-lg space-y-6">
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
