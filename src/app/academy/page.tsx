import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { SEED_SUBJECTS, SEED_COURSES } from "@/lib/data/seed-data";
import { BookOpen, Clock, ChevronRight, CheckCircle2, Sparkles, GraduationCap, Award } from "lucide-react";

export const metadata = {
  title: "Academy — Trainbow HUB",
  description: "Curriculum-aligned courses and step-by-step assessments for WAEC, JAMB, and Cambridge IGCSE.",
};

export default function AcademyPage() {
  const activeSubjects = SEED_SUBJECTS.filter((s) => s.status === "active");

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Header Hero */}
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-soft">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/40">
                Trainbow HUB Academy
              </Badge>
              <span className="text-xs text-neutral-slate-300 flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-brand-blue-400" />
                WAEC • JAMB • Cambridge IGCSE
              </span>
            </div>

            <h1 className="text-display font-extrabold font-heading text-white tracking-tight">
              Curriculum-Aligned Courses &amp; Revision Mastery
            </h1>

            <p className="text-body-lg text-neutral-slate-200 leading-relaxed max-w-2xl">
              Structured modules designed by top Nigerian educators and examiners. Master key concepts with step-by-step video lessons, verified practice quizzes, and interactive progress tracking.
            </p>
          </div>
        </div>

        {/* Subjects Browser Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-h2 font-bold font-heading text-neutral-slate-900">
              Browse by Subject
            </h2>
            <span className="text-caption text-neutral-slate-500">{activeSubjects.length} Active Subjects</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {activeSubjects.map((sub) => (
              <Link
                key={sub.id}
                href={`/academy/${sub.slug}`}
                className="group p-4 rounded-xl border border-neutral-slate-200 bg-white hover:border-brand-blue-600 hover:shadow-soft transition-all duration-150 flex flex-col justify-between gap-3 min-h-[140px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">
                      {sub.category}
                    </span>
                    {sub.aiEnabled && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-service-ai-600 bg-purple-50 px-1.5 py-0.5 rounded">
                        <Sparkles className="h-2.5 w-2.5" />
                        AI On
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-neutral-slate-900 group-hover:text-brand-blue-600 transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-neutral-slate-500 line-clamp-2 mt-1">
                    {sub.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-slate-100 text-[11px] text-neutral-slate-600">
                  <span className="font-medium">{sub.courseCount} Courses</span>
                  <ChevronRight className="h-3.5 w-3.5 text-neutral-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Courses Catalogue Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-h2 font-bold font-heading text-neutral-slate-900">
                All Available Courses ({SEED_COURSES.length})
              </h2>
              <p className="text-caption text-neutral-slate-600">
                Mathematics curriculum is complete and launch-ready across secondary and exam levels.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEED_COURSES.map((course) => (
              <Card key={course.id} className="flex flex-col justify-between hover:shadow-soft hover:-translate-y-0.5 transition-all duration-150">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="brand">{course.level}</Badge>
                    <span className="text-sm font-extrabold text-neutral-slate-900 font-heading">
                      ₦{(course.priceMinorUnits / 100).toLocaleString("en-NG")}
                    </span>
                  </div>
                  <CardTitle className="text-base line-clamp-2">
                    <Link href={`/courses/${course.slug}`} className="hover:text-brand-blue-600 transition-colors">
                      {course.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-xs text-neutral-slate-600 line-clamp-2">
                    {course.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  {/* Progress Preview Bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-neutral-slate-500">
                      <span>Curriculum coverage</span>
                      <span className="font-medium text-neutral-slate-700">100% Verified</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-blue-600 rounded-full w-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-slate-500 border-t border-neutral-slate-100 pt-3">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-neutral-slate-400" />
                      {course.lessonCount} Lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-neutral-slate-400" />
                      {course.durationHours} Hours
                    </span>
                    <Rating value={course.rating} count={course.reviewCount} />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-slate-700">
                    <Avatar name={course.instructorName} size="sm" />
                    <div className="truncate">
                      <p className="font-semibold text-neutral-slate-900 truncate">{course.instructorName}</p>
                      <p className="text-[10px] text-neutral-slate-500 truncate">{course.instructorTitle}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={`/courses/${course.slug}`} className="w-full">
                    <Button variant="primary" className="w-full justify-between h-11">
                      <span>Explore Syllabus</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
