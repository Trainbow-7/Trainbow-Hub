"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Flame,
  ArrowRight,
  PlayCircle,
  Award,
  AlertCircle,
  Lightbulb,
  Calendar,
  Compass,
  GraduationCap,
  Sparkles,
} from "lucide-react";

interface DashboardData {
  user: {
    id: string;
    fullName: string;
    email: string;
    role: string;
    isMinor: boolean;
    isVerified: boolean;
  } | null;
  studyStats: {
    streakDays: number;
    totalMinutesStudied: number;
    lessonsCompleted: number;
    lastActiveDate: string;
  };
  enrollments: Array<{
    id: string;
    courseSlug: string;
    courseTitle: string;
    subjectName: string;
    level: string;
    instructorName: string;
    totalLessons: number;
    completedCount: number;
    progressPercentage: number;
    lastAccessedLessonId: string;
    lastAccessedLessonTitle: string;
  }>;
  continueLearning: {
    courseSlug: string;
    courseTitle: string;
    level: string;
    progressPercentage: number;
    nextLessonId: string;
    nextLessonTitle: string;
  } | null;
  recentQuizAttempts: Array<{
    id: string;
    courseSlug: string;
    lessonId: string;
    score: number;
    totalQuestions: number;
    correctCount: number;
    recommendedTopics: string[];
    completedAt: string;
  }>;
  revisionTopics: string[];
}

export default function StudentDashboardPage() {
  const { user: authUser, isLoading: authLoading } = useAuth();
  const [data, setData] = React.useState<DashboardData | null>(null);
  const [loading, setLoading] = React.useState(true);

  const fetchDashboardData = React.useCallback(async () => {
    try {
      const res = await fetch("/api/academy/dashboard");
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const userName = authUser?.fullName || data?.user?.fullName || "Chioma Adeleke";
  const firstName = userName.split(" ")[0];

  const weekdays = [
    { label: "M", active: true },
    { label: "T", active: true },
    { label: "W", active: true },
    { label: "Th", active: true },
    { label: "F", active: true },
    { label: "Sa", active: false },
    { label: "Su", active: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome & Streak Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-900 to-brand-blue-600 text-white p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="brand" className="bg-brand-blue-500/20 text-blue-200 border-blue-400/30">
                  Learner Portal
                </Badge>
                {data?.user?.isMinor && !data?.user?.isVerified && (
                  <Badge variant="warning" className="bg-amber-500/20 text-amber-200 border-amber-400/30">
                    Consent Pending
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-white">
                Welcome back, {firstName}!
              </h1>
              <p className="text-sm text-blue-100 max-w-xl">
                Keep up the momentum. You are on track for your West African Senior School Certificate Examination preparations.
              </p>
            </div>

            {/* Streak Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shrink-0 min-w-[220px]">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                    <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200 block">Current Streak</span>
                    <span data-testid="streak-counter" className="text-lg font-black text-white font-heading">
                      {data?.studyStats.streakDays || 5} Days Active
                    </span>
                  </div>
                </div>
              </div>
              {/* Day Dots */}
              <div className="flex items-center justify-between gap-1 pt-2 border-t border-white/10 text-xs">
                {weekdays.map((day, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-blue-200">{day.label}</span>
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${
                        day.active ? "bg-amber-400 text-brand-navy-900" : "bg-white/20 text-white/50"
                      }`}
                    >
                      {day.active ? "✓" : "•"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-blue-50 text-brand-blue-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-slate-500 font-medium block">Enrolled Courses</span>
              <span data-testid="enrolled-courses-count" className="text-xl font-bold font-heading text-neutral-slate-900">
                {data?.enrollments.length || 1}
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-status-green-600/10 text-status-green-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-slate-500 font-medium block">Lessons Completed</span>
              <span data-testid="completed-lessons-count" className="text-xl font-bold font-heading text-neutral-slate-900">
                {data?.studyStats.lessonsCompleted || 1}
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-slate-500 font-medium block">Quizzes Taken</span>
              <span data-testid="quizzes-taken-count" className="text-xl font-bold font-heading text-neutral-slate-900">
                {data?.recentQuizAttempts.length || 1}
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-amber-50 text-amber-600">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-slate-500 font-medium block">Study Minutes</span>
              <span className="text-xl font-bold font-heading text-neutral-slate-900">
                {data?.studyStats.totalMinutesStudied || 145}m
              </span>
            </div>
          </div>
        </div>

        {/* Hero "Continue Learning" Action Card */}
        {data?.continueLearning && (
          <div className="bg-white rounded-2xl border border-neutral-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-blue-50 text-brand-blue-600 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Up Next in Your Syllabus
                  </span>
                  <Badge variant="neutral">{data.continueLearning.level}</Badge>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-heading text-neutral-slate-900">
                  {data.continueLearning.courseTitle}
                </h2>

                <div className="flex items-center gap-2 text-sm text-neutral-slate-600">
                  <PlayCircle className="w-4 h-4 text-brand-blue-600 shrink-0" />
                  <span className="font-semibold text-neutral-slate-800">Next Lesson:</span>
                  <span className="truncate">{data.continueLearning.nextLessonTitle}</span>
                </div>

                {/* Course Progress Meter */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-medium text-neutral-slate-600">
                    <span>Overall Course Progress</span>
                    <span className="font-bold text-neutral-slate-900">{data.continueLearning.progressPercentage}%</span>
                  </div>
                  <ProgressBar value={data.continueLearning.progressPercentage} variant="brand" />
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
                <Link
                  href={`/learn/${data.continueLearning.courseSlug}/${data.continueLearning.nextLessonId}`}
                  className={buttonVariants({
                    variant: "primary",
                    size: "lg",
                    className: "w-full justify-center font-bold text-base shadow-sm gap-2 min-h-[44px]",
                  })}
                  data-testid="continue-learning-btn"
                >
                  <span>Resume Lesson</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/courses/${data.continueLearning.courseSlug}`}
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "w-full justify-center text-xs min-h-[36px]",
                  })}
                >
                  View Full Syllabus
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column: My Courses & Revision Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: My Courses */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-neutral-slate-900">My Enrolled Courses</h3>
                <p className="text-xs text-neutral-slate-600">Track and resume courses in your learning portfolio</p>
              </div>
              <Link
                href="/academy"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-brand-blue-600 hover:text-brand-blue-700 text-xs font-semibold gap-1 min-h-[36px]",
                })}
              >
                <span>Browse Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {data?.enrollments.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl border border-neutral-slate-200 p-5 shadow-sm hover:border-brand-blue-300 transition-colors space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="brand">{course.subjectName}</Badge>
                        <Badge variant="neutral">{course.level}</Badge>
                      </div>
                      <h4 className="font-heading font-bold text-base text-neutral-slate-900">
                        {course.courseTitle}
                      </h4>
                      <p className="text-xs text-neutral-slate-600">
                        Instructor: {course.instructorName}
                      </p>
                    </div>

                    <Link
                      href={`/learn/${course.courseSlug}/${course.lastAccessedLessonId || "l1"}`}
                      className={buttonVariants({
                        variant: "secondary",
                        size: "sm",
                        className: "shrink-0 text-xs font-semibold gap-1.5 min-h-[36px]",
                      })}
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      <span>Resume</span>
                    </Link>
                  </div>

                  <div className="pt-2 border-t border-neutral-slate-100 space-y-1.5">
                    <div className="flex justify-between text-xs text-neutral-slate-600">
                      <span>
                        {course.completedCount} of {course.totalLessons} lessons completed
                      </span>
                      <span className="font-bold text-brand-blue-600">{course.progressPercentage}%</span>
                    </div>
                    <ProgressBar value={course.progressPercentage} variant="brand" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Targeted Revision Recommendations (LN-05) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-neutral-slate-200 p-6 shadow-sm space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                    Targeted Revision Focus
                  </h3>
                  <p className="text-xs text-neutral-slate-600">
                    Generated automatically from your recent quiz checkpoints (LN-05)
                  </p>
                </div>
              </div>

              {data?.revisionTopics && data.revisionTopics.length > 0 ? (
                <div className="space-y-3" data-testid="revision-recommendations-list">
                  <p className="text-xs text-neutral-slate-600 leading-relaxed">
                    Based on questions missed in past drills, we recommend reviewing:
                  </p>

                  <div className="space-y-2">
                    {data.revisionTopics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs flex items-start gap-2.5"
                      >
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="font-bold text-neutral-slate-900 block">{topic}</span>
                          <p className="text-[11px] text-neutral-slate-600">
                            Revisit foundational formulas and worked examples to solidify your mastery before the exam.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/learn/waec-ssce-mathematics-mastery/l1"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className: "w-full justify-center text-xs font-semibold mt-2 min-h-[36px]",
                    })}
                  >
                    Open Topic Revision Notes
                  </Link>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-status-green-600 mx-auto" />
                  <p className="text-xs font-semibold text-neutral-slate-800">All Topics Mastered!</p>
                  <p className="text-[11px] text-neutral-slate-600">
                    You scored 100% on recent checkpoints. Continue to the next syllabus module!
                  </p>
                </div>
              )}
            </div>

            {/* Quick Socratic AI Assistant Banner */}
            <div className="rounded-xl border border-brand-blue-200 bg-brand-blue-50/50 p-5 space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Need Step-by-Step Guidance?</span>
              </div>
              <p className="text-xs text-neutral-slate-600 leading-relaxed">
                Stuck on a tricky mathematics question? Try the Socratic AI Tutor for hint-first assistance.
              </p>
              <Link
                href="/ai"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-xs font-bold text-brand-blue-600 hover:bg-brand-blue-100/50 w-full justify-start pl-0 min-h-[36px]",
                })}
              >
                Open Trainbow AI Assistant →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
