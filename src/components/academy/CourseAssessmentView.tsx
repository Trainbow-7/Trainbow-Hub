"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CourseItem } from "@/lib/data/seed-data";
import { AssessmentPlayer } from "@/components/assessment/AssessmentPlayer";

interface CourseAssessmentViewProps {
  course: CourseItem;
  type: "module_test" | "final_assessment";
  moduleId?: string;
}

export function CourseAssessmentView({
  course,
  type,
  moduleId,
}: CourseAssessmentViewProps) {
  const currentModule = moduleId ? course.syllabus.find((m) => m.id === moduleId) : null;

  const pageTitle =
    type === "module_test"
      ? `Module Assessment: ${currentModule?.title || "Module Test"}`
      : `Course Final Examination: ${course.title}`;

  const description =
    type === "module_test"
      ? `Comprehensive 12-question evaluation testing all syllabus concepts covered in ${currentModule?.title || "this module"}.`
      : `Complete 35-question final assessment testing mastery across all modules in ${course.title}.`;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-neutral-slate-900">Academy</Link>
          <span>/</span>
          <Link href={`/courses/${course.slug}`} className="hover:text-neutral-slate-900 truncate max-w-xs">
            {course.title}
          </Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900">
            {type === "module_test" ? "Module Test" : "Final Assessment"}
          </span>
        </nav>

        {/* Header */}
        <div className="p-6 rounded-2xl border border-neutral-slate-200 bg-white space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="brand">{course.level}</Badge>
            <Badge variant="neutral">{type === "module_test" ? "Module Test" : "Course Final Exam"}</Badge>
            {course.slug.includes("jamb") && (
              <Badge variant="tutor" className="text-[10px]">CBT Timed Mode</Badge>
            )}
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
            {pageTitle}
          </h1>

          <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Assessment Player */}
        <AssessmentPlayer
          courseSlug={course.slug}
          lessonId=""
          moduleId={moduleId}
          type={type}
          initialMode="test"
        />
      </main>

      <Footer />
    </div>
  );
}

