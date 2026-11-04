"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeftIcon, AlertIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

interface SubjectDetail {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  levels: string[];
  deliveryFormats: string[];
  status: "DRAFT" | "ACTIVE" | "RETIRED";
  icon: string;
  color: string;
  pricingTierMinorUnits: number;
  commissionRatePercent: number;
  aiEnabled: boolean;
  aiEvaluationStatus: "NOT_STARTED" | "IN_EVALUATION" | "PASSED" | "FAILED";
  aiEvaluationScore?: number;
  aiGroundingSummary?: string;
  aiVerificationMethod?: string;
}

interface CourseItem {
  id: string;
  slug: string;
  title: string;
  level: string;
  shortDescription: string;
}

interface TutorItem {
  id: string;
  slug: string;
  fullName: string;
  title: string;
  bio: string;
  hourlyRateMinorUnits: number;
  rating: number;
  completedLessons: number;
  trcnCertified: boolean;
}

export default function SubjectDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string)?.toLowerCase();

  const [subject, setSubject] = useState<SubjectDetail | null>(null);
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [tutors, setTutors] = useState<TutorItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSubjectData() {
      if (!slug) return;
      try {
        setLoading(true);
        const res = await fetch(`/api/subjects/${slug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Failed to load subject details");
        } else {
          setSubject(data.subject);
          setCourses(data.courses || []);
          setTutors(data.tutors || []);
        }
      } catch (err: any) {
        setError(err.message || "Network error loading subject");
      } finally {
        setLoading(false);
      }
    }
    loadSubjectData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-slate-50 flex items-center justify-center p-8">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-brand-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-neutral-slate-600 font-semibold text-sm">Loading curriculum tracks...</p>
        </div>
      </div>
    );
  }

  if (error || !subject) {
    return (
      <div className="min-h-screen bg-neutral-slate-50 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg border border-neutral-slate-200 max-w-md w-full text-center space-y-4">
          <AlertIcon className="w-10 h-10 text-red-500 mx-auto" />
          <h1 className="text-lg font-bold text-neutral-slate-900">Subject not found</h1>
          <p className="text-xs text-neutral-slate-600">{error || "The requested academic subject is not available."}</p>
          <Link href="/subjects" className="inline-block">
            <Button size="sm">Back to all subjects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedRate = `₦${(subject.pricingTierMinorUnits / 100).toLocaleString()}/hr`;

  return (
    <div className="min-h-screen bg-neutral-slate-50 text-neutral-slate-900 pb-20">
      {/* Top Breadcrumb Header */}
      <div className="bg-neutral-slate-900 text-white border-b border-neutral-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <Link
            href="/subjects"
            className="inline-flex items-center gap-1 text-xs text-neutral-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeftIcon className="w-3.5 h-3.5" />
            <span>Back to all subjects</span>
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-slate-800 text-neutral-slate-300 border border-neutral-slate-700">
                  {subject.category}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 border border-emerald-700">
                  {subject.status}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight mt-1" data-testid="subject-detail-title">
                {subject.name}
              </h1>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-neutral-slate-400 block">Lesson rate from</span>
              <span className="text-lg font-black text-white">{formattedRate}</span>
            </div>
          </div>

          <p className="text-neutral-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed pt-1">
            {subject.description}
          </p>

          {/* Supported Levels */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-neutral-slate-400">Curriculum levels:</span>
            {subject.levels.map((lvl) => (
              <span
                key={lvl}
                className="px-2.5 py-1 rounded text-xs font-semibold bg-neutral-slate-800 text-neutral-slate-200 border border-neutral-slate-700"
              >
                {lvl}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-10">
        {/* AI Study Helper Section */}
        {subject.aiEnabled ? (
          <div
            data-testid="subject-ai-launcher"
            className="bg-brand-navy-900 text-white rounded-lg p-6 sm:p-8 border border-neutral-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-white/10 text-white">
                Study helper available
              </span>
              <h2 className="text-xl sm:text-2xl font-black">
                Practice {subject.name} with hints and step-by-step guidance
              </h2>
              <p className="text-neutral-slate-200 text-xs sm:text-sm leading-relaxed">
                Trained on curriculum topics with calculation checks ({subject.aiVerificationMethod || "automated verification"}).
                Guides you step by step with hints first before revealing the complete solution.
              </p>
              {subject.aiEvaluationScore && (
                <p className="text-[11px] text-neutral-slate-300 font-mono">
                  Curriculum evaluation score: {subject.aiEvaluationScore}%
                </p>
              )}
            </div>

            <div>
              <Link href={`/ai?subject=${subject.slug}`}>
                <Button variant="primary" className="font-bold px-6 py-3 text-sm w-full sm:w-auto">
                  Launch study helper
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div
            data-testid="subject-ai-pending-notice"
            className="bg-white rounded-lg p-6 border border-neutral-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 max-w-2xl">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                Study helper under evaluation
              </span>
              <h2 className="text-base font-bold text-neutral-slate-900">
                AI study helper in academic review
              </h2>
              <p className="text-xs text-neutral-slate-600 leading-relaxed">
                Study helper guidance for{" "}
                <span className="font-semibold text-neutral-slate-800">{subject.name}</span> is currently undergoing curriculum checks.
                Explore our tutors below for 1-on-1 lessons.
              </p>
            </div>

            <Link href={`/tutors?subject=${subject.slug}`}>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                Find {subject.name} tutors
              </Button>
            </Link>
          </div>
        )}

        {/* Section 1: Tutors for this Subject */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-neutral-slate-900">
                Tutors in {subject.name} ({tutors.length})
              </h2>
              <p className="text-xs text-neutral-slate-600 mt-0.5">
                Tutors approved for this specific curriculum subject.
              </p>
            </div>
            <Link href="/request-tutor" className="text-xs font-bold text-brand-blue-700 hover:underline">
              Request a tutor match
            </Link>
          </div>

          {tutors.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-lg border border-neutral-slate-200 space-y-2">
              <p className="text-xs font-semibold text-neutral-slate-700">No tutors currently listed for this subject.</p>
              <p className="text-[11px] text-neutral-slate-500">Tutor applications are currently in credential review.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="subject-tutors-list">
              {tutors.map((tutor) => (
                <div
                  key={tutor.slug}
                  data-testid={`subject-tutor-card-${tutor.slug}`}
                  className="bg-white rounded-lg border border-neutral-slate-200 p-5 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-sm text-neutral-slate-900">
                          <Link href={`/tutors/${tutor.slug}`} className="hover:underline">
                            {tutor.fullName}
                          </Link>
                        </h3>
                        <p className="text-xs text-neutral-slate-500">{tutor.title}</p>
                      </div>
                      <div className="text-xs font-bold text-neutral-slate-800 bg-neutral-slate-100 px-2 py-0.5 rounded border border-neutral-slate-200">
                        Rating: {tutor.rating.toFixed(1)}
                      </div>
                    </div>

                    <p className="text-xs text-neutral-slate-600 line-clamp-2">
                      {tutor.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tutor.trcnCertified && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
                          TRCN Certified
                        </span>
                      )}
                      <span className="text-[10px] bg-neutral-slate-100 text-neutral-slate-700 font-medium px-2 py-0.5 rounded">
                        {tutor.completedLessons} lessons taught
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-slate-500 block">Rate</span>
                      <span className="text-xs font-black text-neutral-slate-900">
                        ₦{(tutor.hourlyRateMinorUnits / 100).toLocaleString()}/hr
                      </span>
                    </div>

                    <Link
                      href={`/tutors/${tutor.slug}`}
                      className="px-3 py-1.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white rounded text-xs font-bold transition-colors"
                    >
                      Book lesson
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 2: Self-Paced Academy Courses */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-neutral-slate-900">
                Self-paced courses ({courses.length})
              </h2>
              <p className="text-xs text-neutral-slate-600 mt-0.5">
                Structured lessons, practice quizzes, and examination review materials.
              </p>
            </div>
            <Link href="/academy" className="text-xs font-bold text-brand-blue-700 hover:underline">
              Explore academy
            </Link>
          </div>

          {courses.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-lg border border-neutral-slate-200 space-y-2">
              <p className="text-xs font-semibold text-neutral-slate-700">No Academy courses published yet for this subject.</p>
              <p className="text-[11px] text-neutral-slate-500">Curriculum managers are drafting new modules.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="subject-courses-list">
              {courses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-white rounded-lg border border-neutral-slate-200 p-5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
                      {course.level}
                    </span>
                    <h3 className="font-bold text-sm text-neutral-slate-900 mt-1">
                      <Link href={`/academy/${course.slug}`} className="hover:underline">
                        {course.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-neutral-slate-600 line-clamp-2">
                      {course.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700">Enrolment open</span>
                    <Link
                      href={`/academy/${course.slug}`}
                      className="text-xs font-bold text-brand-blue-700 hover:underline flex items-center gap-1"
                    >
                      <span>View syllabus</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
