import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { PRIMARY_INSTRUCTOR } from "@/data/instructor";
import { CATALOGUE_SUBJECTS, DEPARTMENTS } from "@/data/courses";
import { EXAM_TRACKS } from "@/data/pricing";
import { CheckIcon, ChevronRightIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return [{ instructorSlug: PRIMARY_INSTRUCTOR.slug }];
}

interface InstructorPageProps {
  params: {
    instructorSlug: string;
  };
}

export function generateMetadata({ params }: InstructorPageProps) {
  return {
    title: `${PRIMARY_INSTRUCTOR.name} — Senior Mathematics Lecturer & WAEC Chief Examiner Consultant — Trainbow HUB`,
    description: PRIMARY_INSTRUCTOR.shortBio,
  };
}

export default function InstructorProfilePage({ params }: InstructorPageProps) {
  if (params.instructorSlug !== PRIMARY_INSTRUCTOR.slug) {
    notFound();
  }

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
          <span className="font-semibold text-neutral-slate-900">{PRIMARY_INSTRUCTOR.name}</span>
        </nav>

        {/* HERO BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-800 to-brand-navy-900 text-white p-8 sm:p-12 shadow-soft space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar
              name={PRIMARY_INSTRUCTOR.name}
              size="xl"
              className="h-24 w-24 sm:h-28 sm:w-28 text-3xl font-extrabold border-4 border-brand-blue-400 shrink-0"
            />
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/40">
                  Academic Director &amp; Lead Examiner
                </Badge>
                <span className="text-xs text-neutral-slate-300 flex items-center gap-1.5">
                  
                  WAEC Chief Examiner Consultant
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                {PRIMARY_INSTRUCTOR.name}
              </h1>

              <p className="text-base sm:text-lg text-brand-blue-200 font-medium max-w-2xl">
                {PRIMARY_INSTRUCTOR.title}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-center">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl font-extrabold text-white block">
                {PRIMARY_INSTRUCTOR.yearsOfExperience}+ Years
              </span>
              <span className="text-xs text-neutral-slate-300">Examiner Experience</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl font-extrabold text-brand-blue-300 block">
                {PRIMARY_INSTRUCTOR.totalStudentsTrained.toLocaleString()}+
              </span>
              <span className="text-xs text-neutral-slate-300">Students Coached</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl font-extrabold text-status-green-400 block">
                {PRIMARY_INSTRUCTOR.distinctionRate}
              </span>
              <span className="text-xs text-neutral-slate-300">Distinction Rate</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl font-extrabold text-amber-300 block">
                {CATALOGUE_SUBJECTS.length} Subjects
              </span>
              <span className="text-xs text-neutral-slate-300">Curriculum Directed</span>
            </div>
          </div>
        </div>

        {/* BIO & CREDENTIALS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Detailed Biography */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                About {PRIMARY_INSTRUCTOR.name}
              </h2>
              <p className="text-sm sm:text-base text-neutral-slate-700 leading-relaxed">
                {PRIMARY_INSTRUCTOR.bio}
              </p>
              <p className="text-sm text-neutral-slate-700 leading-relaxed">
                Under his leadership, Trainbow Hub curriculum packages have been calibrated to remove ambiguous question wording, align strictly with official West African and Cambridge examination marking rubrics, and deliver structured past question solving frameworks that support students to attain straight distinctions.
              </p>
            </div>

            {/* Courses Taught by Mr Oyedeji */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-heading text-neutral-slate-900">
                  Accredited Courses Directed by {PRIMARY_INSTRUCTOR.name}
                </h3>
                <Link href="/academy" className="text-xs text-brand-blue-600 hover:text-brand-blue-700 font-semibold">
                  Open Catalogue Card →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CATALOGUE_SUBJECTS.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/instructors/${PRIMARY_INSTRUCTOR.slug}/courses/waec-ssce/${sub.slug}`}
                    className="group p-4 rounded-xl border border-neutral-slate-200 bg-white hover:border-brand-blue-600 hover:shadow-soft transition-all duration-150 flex flex-col justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <Badge variant="neutral" className="text-[10px]">
                          {DEPARTMENTS[sub.department].name}
                        </Badge>
                        <span className="text-[11px] text-status-green-700 font-semibold flex items-center gap-1">
                          <CheckIcon className="h-4 w-4" />
                          100% Verified
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-neutral-slate-900 group-hover:text-brand-blue-600 transition-colors">
                        {sub.name}
                      </h4>
                      <p className="text-xs text-neutral-slate-500 line-clamp-2 mt-1">
                        {sub.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-neutral-slate-100 text-[11px] text-neutral-slate-600">
                      <span>{sub.lessonCount} Lessons • {sub.durationHours}h</span>
                      <span className="font-semibold text-brand-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        <span>Explore Syllabus</span>
                        <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-neutral-slate-900 flex items-center gap-2">
                
                <span>Examiner Credentials</span>
              </h3>
              <ul className="space-y-3 text-xs text-neutral-slate-700">
                {PRIMARY_INSTRUCTOR.examinerCredentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckIcon className="h-4 w-4" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-neutral-slate-900 flex items-center gap-2">
                
                <span>Academic Qualifications</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-slate-700">
                {PRIMARY_INSTRUCTOR.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-600 shrink-0 mt-1.5" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-brand-navy-900 text-white p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-white">
                Need Dedicated 1-on-1 Mentorship?
              </h3>
              <p className="text-xs text-neutral-slate-300 leading-relaxed">
                Book a direct diagnostic consultation or tailored examination revision session with {PRIMARY_INSTRUCTOR.name} and his senior team.
              </p>
              <Link href="/request-tutor" className="block">
                <Button variant="primary" className="w-full text-xs font-semibold">
                  Request Tutor Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

