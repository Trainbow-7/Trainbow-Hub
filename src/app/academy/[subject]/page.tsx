import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { SEED_SUBJECTS, SEED_COURSES } from "@/lib/data/seed-data";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/motion";

interface SubjectPageProps {
  params: {
    subject: string;
  };
}

export function generateStaticParams() {
  return SEED_SUBJECTS.map((s) => ({ subject: s.slug }));
}

export function generateMetadata({ params }: SubjectPageProps) {
  const subject = SEED_SUBJECTS.find((s) => s.slug === params.subject);
  if (!subject) return { title: "Subject Not Found — Trainbow HUB" };
  return {
    title: `${subject.name} Courses & Syllabus — Trainbow HUB Academy`,
    description: subject.description,
  };
}

export default function SubjectDetailPage({ params }: SubjectPageProps) {
  const subject = SEED_SUBJECTS.find((s) => s.slug === params.subject);
  if (!subject) notFound();

  const courses = SEED_COURSES.filter((c) => c.subjectSlug === subject.slug);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-neutral-slate-900">Academy</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900">{subject.name}</span>
        </nav>

        {/* Hero Header */}
        <Reveal>
          <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 lg:p-14 relative border border-brand-navy-800 shadow-md text-center">
            <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/30">
                  {subject.category} curriculum
                </Badge>
                {subject.aiEnabled ? (
                  <Badge variant="ai">
                    Study helper enabled
                  </Badge>
                ) : (
                  <span className="text-xs text-neutral-slate-300">
                    Helper testing in progress
                  </span>
                )}
              </div>

              <h1 className="text-display font-extrabold font-heading text-white tracking-tight text-center">
                {subject.name}
              </h1>
              <p className="text-body-lg text-neutral-slate-200 leading-relaxed max-w-2xl mx-auto text-center">
                {subject.description} Structured lessons, practice sets, and 1-on-1 tutor support for Nigerian examination boards.
              </p>

              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <span className="text-xs text-neutral-slate-400 font-semibold mr-1 self-center">Levels:</span>
                {subject.levels.map((lvl) => (
                  <span key={lvl} className="px-2.5 py-0.5 rounded bg-white/10 text-xs text-white border border-white/10">
                    {lvl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Courses Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
              {subject.name} courses ({courses.length})
            </h2>
            {courses.length === 0 && (
              <span className="text-xs text-amber-700 font-semibold">New courses publishing soon</span>
            )}
          </div>

          {courses.length > 0 ? (
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <StaggerItem key={course.id} index={idx}>
                  <HoverLift className="h-full">
                    <Card className="flex flex-col justify-between h-full">
                      <CardHeader className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="brand">{course.level}</Badge>
                          <span className="text-xs font-bold text-neutral-slate-900">
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
                        <div className="flex items-center justify-between text-xs text-neutral-slate-500 border-t border-neutral-slate-100 pt-3">
                          <span>{course.lessonCount} lessons</span>
                          <span>{course.durationHours} hours</span>
                          {course.reviewCount > 0 ? (
                            <Rating value={course.rating} count={course.reviewCount} />
                          ) : (
                            <span className="text-[11px] text-neutral-slate-400 font-medium">New course</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-slate-700">
                          <Avatar name={course.instructorName} size="sm" />
                          <span className="font-medium truncate">{course.instructorName}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Link href={`/courses/${course.slug}`} className="w-full">
                          <Button variant="outline" size="sm" className="w-full justify-center">
                            <span>View syllabus</span>
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="rounded-lg border border-neutral-slate-200 bg-white p-8 text-center space-y-3">
              <h3 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                Courses in authoring pipeline
              </h3>
              <p className="text-xs text-neutral-slate-500 max-w-md mx-auto">
                Lesson recordings and practice items are being reviewed for {subject.name}. Check back as new course syllabi are added.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
