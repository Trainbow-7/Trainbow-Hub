"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Music,
  CheckCircle2,
  Sparkles,
  Bot,
  Users,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Star,
  ChevronLeft,
  Calendar,
  Layers,
  AlertCircle,
  Clock,
} from "lucide-react";
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

const ICON_MAP: Record<string, any> = {
  Calculator,
  BookOpen,
  Atom,
  FlaskConical,
  Dna,
  Music,
};

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
          <div className="w-10 h-10 border-4 border-brand-purple-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-neutral-slate-600 font-semibold text-sm">Loading curriculum tracks...</p>
        </div>
      </div>
    );
  }

  if (error || !subject) {
    return (
      <div className="min-h-screen bg-neutral-slate-50 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-2xl border border-neutral-slate-200 max-w-md w-full text-center space-y-4">
          <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
          <h1 className="text-lg font-bold text-neutral-slate-900">Subject Not Found</h1>
          <p className="text-xs text-neutral-slate-600">{error || "The requested academic subject is not available."}</p>
          <Link href="/subjects" className="inline-block">
            <Button size="sm">Back to All Subjects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComp = ICON_MAP[subject.icon] || BookOpen;
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
            <ChevronLeft className="w-3.5 h-3.5" /> Back to All Subjects
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/30 text-purple-300 border border-purple-500/40 flex items-center justify-center shadow-inner">
                <IconComp className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-neutral-slate-800 text-neutral-slate-300 border border-neutral-slate-700">
                    {subject.category}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-900 text-emerald-300 border border-emerald-700">
                    {subject.status}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight mt-1" data-testid="subject-detail-title">
                  {subject.name}
                </h1>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-neutral-slate-400 block">Baseline Lesson Rate</span>
              <span className="text-lg font-black text-white">{formattedRate}</span>
            </div>
          </div>

          <p className="text-neutral-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed pt-1">
            {subject.description}
          </p>

          {/* Supported Levels & Delivery Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-neutral-slate-400">Curriculum Levels:</span>
            {subject.levels.map((lvl) => (
              <span
                key={lvl}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-slate-800 text-neutral-slate-200 border border-neutral-slate-700"
              >
                {lvl}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-10">
        {/* AI Socratic Assistant Governance Section */}
        {subject.aiEnabled ? (
          <div
            data-testid="subject-ai-launcher"
            className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-purple-700 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-700/50 text-purple-200 text-xs font-bold border border-purple-500/40">
                <Bot className="w-4 h-4 text-brand-teal-300" />
                <span>Verified Socratic AI Pedagogical Assistant</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black">
                Practice {subject.name} with AI Hints &amp; Step-by-Step Guidance
              </h2>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                Trained on the Nigerian curriculum with programmatic mathematical verification ({subject.aiVerificationMethod}).
                Never dumps raw answers — guides you step-by-step through Socratic inquiry.
              </p>
              {subject.aiEvaluationScore && (
                <p className="text-[11px] text-purple-300 font-mono">
                  Curriculum Benchmarking Score: {subject.aiEvaluationScore}% · Pass Criteria Met
                </p>
              )}
            </div>

            <div>
              <Link href={`/ai?subject=${subject.slug}`}>
                <Button className="bg-white text-purple-950 hover:bg-neutral-slate-100 font-bold px-6 py-3 shadow-lg text-sm w-full sm:w-auto">
                  <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                  Launch Socratic AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div
            data-testid="subject-ai-pending-notice"
            className="bg-white rounded-2xl p-6 border border-neutral-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Academic Quality Gate Active (SB-06)</span>
              </div>
              <h2 className="text-base font-bold text-neutral-slate-900">
                AI Socratic Assistant In Pre-Release Academic Evaluation
              </h2>
              <p className="text-xs text-neutral-slate-600 leading-relaxed">
                To prevent hallucinations and protect Nigerian learners under the Child Rights Act, AI guidance for{" "}
                <span className="font-semibold text-neutral-slate-800">{subject.name}</span> is currently undergoing rigorous rubric testing.
                Browse our TRCN-certified human tutors below for live 1-on-1 coaching.
              </p>
            </div>

            <Link href={`/tutors?subject=${subject.slug}`}>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                Find {subject.name} Tutors
              </Button>
            </Link>
          </div>
        )}

        {/* Section 1: Verified Tutors for this Subject */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-neutral-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-700" />
                Verified Tutors in {subject.name} ({tutors.length})
              </h2>
              <p className="text-xs text-neutral-slate-600 mt-0.5">
                Every tutor is identity-checked (NIN), TRCN certified, and approved for this specific curriculum.
              </p>
            </div>
            <Link href="/tutors" className="text-xs font-bold text-brand-purple-700 hover:underline">
              View All Tutors
            </Link>
          </div>

          {tutors.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-neutral-slate-200 space-y-2">
              <p className="text-xs font-semibold text-neutral-slate-700">No tutors currently listed for this subject.</p>
              <p className="text-[11px] text-neutral-slate-500">Tutor applications are currently in administrative credential review.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="subject-tutors-list">
              {tutors.map((tutor) => (
                <div
                  key={tutor.slug}
                  data-testid={`subject-tutor-card-${tutor.slug}`}
                  className="bg-white rounded-2xl border border-neutral-slate-200 p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
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
                      <div className="flex items-center gap-1 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span className="text-amber-950 font-bold">{tutor.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-slate-600 line-clamp-2">
                      {tutor.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tutor.trcnCertified && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" /> TRCN Certified
                        </span>
                      )}
                      <span className="text-[10px] bg-neutral-slate-100 text-neutral-slate-700 font-medium px-2 py-0.5 rounded-full">
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
                      className="px-3 py-1.5 bg-brand-purple-700 hover:bg-brand-purple-800 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      Book Lesson
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
              <h2 className="text-lg font-bold text-neutral-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-teal-700" />
                Self-Paced Courses ({courses.length})
              </h2>
              <p className="text-xs text-neutral-slate-600 mt-0.5">
                Structured lessons, interactive quizzes, and examination review materials.
              </p>
            </div>
            <Link href="/academy" className="text-xs font-bold text-brand-teal-700 hover:underline">
              Explore Academy
            </Link>
          </div>

          {courses.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-neutral-slate-200 space-y-2">
              <p className="text-xs font-semibold text-neutral-slate-700">No Academy courses published yet for this subject.</p>
              <p className="text-[11px] text-neutral-slate-500">Curriculum managers are drafting new modules.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="subject-courses-list">
              {courses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-white rounded-2xl border border-neutral-slate-200 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
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
                    <span className="text-xs font-bold text-emerald-700">Enrolment Open</span>
                    <Link
                      href={`/academy/${course.slug}`}
                      className="text-xs font-bold text-brand-teal-700 hover:underline flex items-center gap-1"
                    >
                      View Syllabus <ArrowRight className="w-3 h-3" />
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
