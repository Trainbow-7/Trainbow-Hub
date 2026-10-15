import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { SEED_SUBJECTS, SEED_COURSES, SEED_TUTORS } from "@/lib/data/seed-data";
import { BookOpen, Clock, ChevronRight, Sparkles, GraduationCap, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return SEED_SUBJECTS.map((s) => ({ subject: s.slug }));
}

interface SubjectPageProps {
  params: {
    subject: string;
  };
}

export default function SubjectDetailPage({ params }: SubjectPageProps) {
  const subject = SEED_SUBJECTS.find((s) => s.slug === params.subject);

  if (!subject) {
    notFound();
  }

  const courses = SEED_COURSES.filter((c) => c.subjectSlug === subject.slug);
  const relatedTutors = SEED_TUTORS.filter((t) =>
    t.subjects.some((sub) => sub.toLowerCase().includes(subject.name.toLowerCase()))
  );

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
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/30">
                {subject.category} Curriculum
              </Badge>
              {subject.aiEnabled ? (
                <Badge variant="ai" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  Socratic AI Enabled
                </Badge>
              ) : (
                <span className="text-xs text-neutral-slate-300">
                  AI pending evaluation sign-off
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              {subject.name}
            </h1>
            <p className="text-sm sm:text-base text-neutral-slate-200 leading-relaxed max-w-2xl">
              {subject.description} Structured lessons, practice sets, and verified 1-on-1 tutors aligned to Nigerian educational boards.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs text-neutral-slate-400 font-semibold mr-1">Supported Levels:</span>
              {subject.levels.map((lvl) => (
                <span key={lvl} className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs text-white border border-white/10">
                  {lvl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
              {subject.name} Courses ({courses.length})
            </h2>
            {courses.length === 0 && (
              <span className="text-xs text-amber-600 font-semibold">New courses publishing soon</span>
            )}
          </div>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="flex flex-col justify-between hover:shadow-hover transition-all">
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
                      <span className="font-medium truncate">{course.instructorName}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href={`/courses/${course.slug}`} className="w-full">
                      <Button variant="outline" size="sm" className="w-full justify-between">
                        <span>View Syllabus</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-8 text-center space-y-3">
              <BookOpen className="h-8 w-8 text-neutral-slate-400 mx-auto" />
              <h3 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                Courses in Authoring Pipeline
              </h3>
              <p className="text-xs text-neutral-slate-500 max-w-md mx-auto">
                Our content managers are reviewing lesson recordings and quiz items for {subject.name}. In the meantime, book 1-on-1 tutoring sessions with our verified educators below.
              </p>
            </div>
          )}
        </div>

        {/* Related Vetted Tutors */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                Verified {subject.name} Tutors ({relatedTutors.length})
              </h2>
              <p className="text-xs text-neutral-slate-500">
                Available for 1-on-1 online lessons or in-person sessions.
              </p>
            </div>
            <Link href="/request-tutor" className="text-xs font-semibold text-brand-blue-600 hover:text-brand-blue-700">
              Request a tutor match →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTutors.slice(0, 3).map((tutor) => (
              <Card key={tutor.id} className="flex flex-col justify-between hover:shadow-hover transition-all">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={tutor.name} size="md" />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-neutral-slate-900">
                          <Link href={`/tutors/${tutor.slug}`} className="hover:text-brand-blue-600 transition-colors">
                            {tutor.name}
                          </Link>
                        </h4>
                        <p className="text-xs text-neutral-slate-500">{tutor.location}</p>
                      </div>
                    </div>
                    <Badge variant="tutor" className="shrink-0 text-[10px]">
                      Verified
                    </Badge>
                  </div>
                  <CardDescription className="text-xs text-neutral-slate-600 line-clamp-2">
                    {tutor.bio}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 pt-0 text-xs">
                  <div className="flex items-center justify-between">
                    <Rating value={tutor.rating} count={tutor.completedLessons} />
                    <span className="font-bold text-neutral-slate-900">
                      ₦{(tutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}/hr
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={`/tutors/${tutor.slug}`} className="w-full">
                    <Button variant="tutor" size="sm" className="w-full justify-between">
                      <span>Book Lesson</span>
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
