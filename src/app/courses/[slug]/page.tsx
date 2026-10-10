import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { SEED_COURSES } from "@/lib/data/seed-data";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  PlayCircle,
  Lock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Share2,
} from "lucide-react";

export function generateStaticParams() {
  return SEED_COURSES.map((c) => ({ slug: c.slug }));
}

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = SEED_COURSES.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-neutral-slate-900">Academy</Link>
          <span>/</span>
          <Link href={`/academy/${course.subjectSlug}`} className="hover:text-neutral-slate-900">{course.subjectName}</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900 truncate max-w-xs">{course.title}</span>
        </nav>

        {/* Course Header Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brand">{course.level}</Badge>
                <Badge variant="neutral">{course.subjectName}</Badge>
                <span className="text-xs text-status-green-800 font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-status-green-700" />
                  Syllabus Verified
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-neutral-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-neutral-slate-600 leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-neutral-slate-200 text-xs text-neutral-slate-600">
              <Rating value={course.rating} count={course.reviewCount} />
              <div className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-brand-blue-600" />
                <span>{course.lessonCount} Structured Lessons</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand-blue-600" />
                <span>{course.durationHours} Hours Video & Quizzes</span>
              </div>
            </div>

            {/* Instructor Profile Card */}
            <div className="p-4 rounded-xl border border-neutral-slate-200 bg-white flex items-center gap-4">
              <Avatar name={course.instructorName} size="lg" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">Instructor</span>
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">{course.instructorName}</h3>
                <p className="text-xs text-neutral-slate-600">{course.instructorTitle}</p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-4">
              <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
                What You Will Master
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-slate-700">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Modules */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
                  Course Syllabus ({course.syllabus.length} Modules)
                </h2>
                <span className="text-xs text-neutral-slate-500">Resumable on phone & laptop</span>
              </div>

              <div className="space-y-4">
                {course.syllabus.map((mod, mIdx) => (
                  <div key={mod.id} className="rounded-lg border border-neutral-slate-200 overflow-hidden">
                    <div className="bg-neutral-slate-50 px-4 py-3 border-b border-neutral-slate-200 flex items-center justify-between">
                      <span className="font-heading font-semibold text-xs sm:text-sm text-neutral-slate-900">
                        {mod.title}
                      </span>
                      <span className="text-[11px] text-neutral-slate-500 font-medium">
                        {mod.lessons.length} Lessons
                      </span>
                    </div>
                    <div className="divide-y divide-neutral-slate-100 p-2">
                      {mod.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center justify-between py-2.5 px-3 text-xs">
                          <div className="flex items-center gap-2.5">
                            {lesson.isFreePreview ? (
                              <PlayCircle className="h-4 w-4 text-brand-blue-600 shrink-0" />
                            ) : (
                              <Lock className="h-4 w-4 text-neutral-slate-400 shrink-0" />
                            )}
                            <span className={lesson.isFreePreview ? "font-medium text-neutral-slate-900" : "text-neutral-slate-700"}>
                              {lesson.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] text-neutral-slate-600">{lesson.durationMinutes}m</span>
                            {lesson.isFreePreview ? (
                              <span className="rounded bg-brand-blue-50 text-brand-blue-600 px-2 py-0.5 text-[10px] font-bold">
                                Free Preview
                              </span>
                            ) : (
                              <span className="text-[10px] text-neutral-slate-600 font-semibold">Locked</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Checkout Sidebar Card */}
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

              <div className="space-y-3">
                <Link href="/register" className="block w-full">
                  <Button variant="primary" size="lg" className="w-full justify-center font-bold text-base shadow-sm">
                    Enrol in Course
                  </Button>
                </Link>
                <p className="text-[11px] text-neutral-slate-500 text-center">
                  Instant access on desktop and mobile. 100% money-back guarantee within 7 days.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-slate-100 space-y-2.5 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-status-green-600" />
                  <span>Curriculum aligned with WAEC/JAMB syllabus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-blue-600" />
                  <span>Lifetime access to course revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-brand-blue-600" />
                  <span>Practice quizzes with automated grading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
