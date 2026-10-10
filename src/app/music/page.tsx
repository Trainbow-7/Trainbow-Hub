import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { SEED_SUBJECTS, SEED_TUTORS } from "@/lib/data/seed-data";
import {
  Music,
  CheckCircle2,
  Calendar,
  CreditCard,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Disc,
} from "lucide-react";

export const metadata = {
  title: "Music & Instruments Tuition — Trainbow HUB",
  description: "Classical and contemporary music theory, piano, guitar, and vocal lessons on the same unified platform.",
};

export default function MusicPage() {
  const musicSubjects = SEED_SUBJECTS.filter((s) => s.category === "Music");
  const musicTutors = SEED_TUTORS.filter((t) =>
    t.subjects.some((s) => s.includes("Music") || s.includes("Piano") || s.includes("Guitar") || s.includes("Vocal"))
  );

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero Section */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-900 to-amber-950 text-white p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <Badge variant="neutral" className="border-amber-400 bg-amber-500/20 text-amber-300 font-semibold">
              Trainbow HUB Music
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Master the Craft of Music. <br />
              <span className="text-amber-400">Theory, Instruments & Voice.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-slate-200 leading-relaxed max-w-2xl">
              One account connects academic tutoring and musical education. Book vetted music teachers for ABRSM/MUSON theory preparation, piano, acoustic guitar, or vocal coaching.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link href="/tutors">
                <Button variant="primary" size="lg" className="font-semibold text-base px-6 py-3 shadow-lg">
                  Find a Music Tutor
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg" className="font-semibold text-base px-6 py-3">
                  View Lesson Rates
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Trainbow Music */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {musicSubjects.map((sub) => (
            <Card key={sub.id} className="border-t-4 border-t-amber-500 flex flex-col justify-between hover:shadow-hover transition-all">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Music className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">{sub.name}</CardTitle>
                <CardDescription className="text-xs text-neutral-slate-600 line-clamp-3">
                  {sub.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-xs text-neutral-slate-500">
                <div className="space-y-1">
                  <span className="font-semibold text-neutral-slate-700 block text-[11px]">Levels:</span>
                  <div className="flex flex-wrap gap-1">
                    {sub.levels.map((l) => (
                      <span key={l} className="px-2 py-0.5 rounded bg-neutral-slate-100 text-[10px]">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href={`/tutors?subject=${sub.slug}`} className="w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between text-xs">
                    <span>Find Instructors</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Shared Infrastructure Banner */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="brand">One Unified System</Badge>
            <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
              Why Trainbow Music Works Better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-slate-600">
            <div className="space-y-2">
              <div className="h-8 w-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <Calendar className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-neutral-slate-900 text-sm">One Shared Calendar</h3>
              <p className="leading-relaxed">
                Music lessons sit right alongside Mathematics sessions on your dashboard calendar. No juggling separate platforms or conflicting schedules.
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-8 w-8 rounded-lg bg-status-green-600/10 text-status-green-600 flex items-center justify-center">
                <CreditCard className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-neutral-slate-900 text-sm">One Naira Wallet</h3>
              <p className="leading-relaxed">
                Pay tuition fees directly through Paystack. Same transparent cancellation policies and automatic receipts for parents.
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-8 w-8 rounded-lg bg-purple-50 text-service-ai-600 flex items-center justify-center">
                <Disc className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Practice Notes & Goals</h3>
              <p className="leading-relaxed">
                Tutors record weekly homework and repertoire notes accessible to both the student and linked guardians.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Music Educators */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                Verified Music Instructors
              </h2>
              <p className="text-xs text-neutral-slate-500">
                ABRSM, MUSON, and Trinity College London certified tutors.
              </p>
            </div>
            <Link href="/tutors" className="text-xs font-semibold text-brand-blue-600 hover:text-brand-blue-700">
              Browse all tutors →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {musicTutors.map((tutor) => (
              <Card key={tutor.id} className="flex flex-col justify-between hover:shadow-hover transition-all">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={tutor.name} size="md" />
                      <div>
                        <h3 className="font-heading font-bold text-sm text-neutral-slate-900">
                          <Link href={`/tutors/${tutor.slug}`} className="hover:text-brand-blue-600 transition-colors">
                            {tutor.name}
                          </Link>
                        </h3>
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
                      <span>Book Music Lesson</span>
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
