"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/components/auth/AuthProvider";
import { PlayCircle, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";

interface Props {
  courseSlug: string;
  priceMinorUnits: number;
  firstLessonId: string;
}

export function CourseEnrollmentAction({ courseSlug, priceMinorUnits, firstLessonId }: Props) {
  const router = useRouter();
  const { user } = useAuth();
  const [isEnrolled, setIsEnrolled] = React.useState(false);
  const [lastLessonId, setLastLessonId] = React.useState(firstLessonId);
  const [progressPct, setProgressPct] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [enrolling, setEnrolling] = React.useState(false);

  React.useEffect(() => {
    async function checkEnrollment() {
      try {
        const res = await fetch("/api/academy/dashboard");
        const json = await res.json();
        if (json.success && json.enrollments) {
          const match = json.enrollments.find((e: any) => e.courseSlug === courseSlug);
          if (match) {
            setIsEnrolled(true);
            setLastLessonId(match.lastAccessedLessonId || firstLessonId);
            setProgressPct(match.progressPercentage || 0);
          }
        }
      } catch (err) {
        // Silently handle guest error
      } finally {
        setLoading(false);
      }
    }
    checkEnrollment();
  }, [courseSlug, firstLessonId]);

  const handleEnroll = async () => {
    setEnrolling(true);
    try {
      const res = await fetch("/api/academy/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug }),
      });
      const json = await res.json();
      if (json.success) {
        router.push(`/learn/${courseSlug}/${json.firstLessonId || firstLessonId}`);
      } else {
        router.push(`/learn/${courseSlug}/${firstLessonId}`);
      }
    } catch (err) {
      router.push(`/learn/${courseSlug}/${firstLessonId}`);
    } finally {
      setEnrolling(false);
    }
  };

  if (!loading && isEnrolled) {
    return (
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-status-green-600/10 border border-status-green-600/30 text-xs text-status-green-900 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-status-green-700 shrink-0" />
          <span>You are enrolled in this course ({progressPct}% completed)</span>
        </div>
        <Link href={`/learn/${courseSlug}/${lastLessonId}`} className="block w-full">
          <Button
            variant="primary"
            size="lg"
            className="w-full justify-center font-bold text-base shadow-sm gap-2"
            data-testid="continue-learning-cta"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Button
        variant="primary"
        size="lg"
        onClick={handleEnroll}
        disabled={enrolling}
        className="w-full justify-center font-bold text-base shadow-sm gap-2"
        data-testid="enrol-course-btn"
      >
        {enrolling ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Enrolling...</span>
          </>
        ) : (
          <span>Enrol in Course</span>
        )}
      </Button>
      <p className="text-[11px] text-neutral-slate-500 text-center">
        Instant access on desktop and mobile. 100% money-back guarantee within 7 days.
      </p>
    </div>
  );
}
