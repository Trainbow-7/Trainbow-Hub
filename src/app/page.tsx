import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  BookOpen,
  GraduationCap,
  Music,
  ArrowRight,
  Star,
  Clock,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      {/* Real Public Navigation Shell */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero (Navy 900 Gradient with Guaranteed High Contrast) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-900 via-brand-navy-900 to-brand-navy-950 py-16 sm:py-24 text-white">
          {/* Subtle Ambient Glow Elements */}
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-brand-blue-600/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-service-ai-600/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Value Proposition & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Status / Launch Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy-950/80 px-3.5 py-1 text-xs font-semibold text-brand-blue-50 border border-brand-blue-500/30">
                  <span className="flex h-2 w-2 rounded-full bg-brand-blue-500 animate-pulse" />
                  <span>Mathematics Curriculum & Verified Tutors Active</span>
                </div>

                {/* Primary Heading with strict high contrast */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.1] text-white">
                  Learn smarter. <br />
                  Find the right tutor. <br />
                  <span className="text-brand-blue-500">Grow with confidence.</span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-neutral-slate-200 max-w-2xl leading-relaxed">
                  One account for lessons, AI help and verified tutors, built for Nigerian students and the parents who support them.
                </p>

                {/* Call to Actions */}
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link href="/tutors">
                    <Button
                      variant="primary"
                      size="lg"
                      className="font-semibold text-base shadow-lg shadow-brand-blue-600/25 px-6 py-3"
                    >
                      Find a tutor
                    </Button>
                  </Link>

                  <Link href="/ai">
                    <Button
                      variant="ai"
                      size="lg"
                      className="font-semibold text-base px-6 py-3"
                    >
                      Try the AI maths helper
                    </Button>
                  </Link>
                </div>

                {/* Trust Row */}
                <div className="pt-6 border-t border-brand-navy-950/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-status-green-500 shrink-0" />
                    <span>Verified tutors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-blue-500 shrink-0" />
                    <span>Child-safe by design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-status-green-500 shrink-0" />
                    <span>Secure payments in naira</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Fidelity SVG/CSS Product Composition */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md space-y-4">
                  {/* Composition Card 1: Verified Tutor Card */}
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md shadow-2xl transition hover:border-white/20">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-sm shadow-inner ring-2 ring-service-tutor-500/50">
                          TO
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h2 className="font-heading text-sm font-bold text-white">Dr. Tayo Okafor</h2>
                            <span className="inline-flex items-center gap-0.5 rounded bg-service-tutor-700/80 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                              <ShieldCheck className="h-2.5 w-2.5" />
                              Verified
                            </span>
                          </div>
                          <p className="text-xs text-neutral-slate-300">Senior Secondary & WAEC Mathematics</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-white">₦7,500</div>
                        <span className="text-[10px] text-neutral-slate-300">/ 60 min</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-[11px] text-neutral-slate-300">
                      <span className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="h-3 w-3 fill-amber-400" />
                        5.0 (42 lessons)
                      </span>
                      <span className="text-brand-blue-200">Next Slot: Today, 4:00 PM</span>
                    </div>
                  </div>

                  {/* Composition Card 2: AI Socratic Chat Bubble */}
                  <div className="rounded-xl border border-service-ai-600/30 bg-service-ai-600/20 p-4 backdrop-blur-md shadow-2xl space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-service-ai-500" />
                        Trainbow AI Mathematics Helper
                      </span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-neutral-slate-200 font-mono">
                        Hint-First
                      </span>
                    </div>
                    <div className="rounded-lg bg-brand-navy-950/80 p-3 text-xs text-neutral-slate-200 space-y-1.5 border border-white/5">
                      <p className="font-medium text-white text-[11px]">
                        <strong>Student:</strong> How do I solve 2x² + 5x - 3 = 0?
                      </p>
                      <div className="pt-1 border-t border-white/10 text-[11px] text-brand-blue-50 leading-relaxed">
                        <p className="text-brand-blue-200 font-semibold">💡 Socratic Step 1:</p>
                        <p>Identify the quadratic coefficients: a = 2, b = 5, c = -3. Now calculate the discriminant (b² - 4ac) before using the formula.</p>
                      </div>
                    </div>
                  </div>

                  {/* Composition Card 3: Real-Time Progress Ring Widget */}
                  <div className="rounded-xl border border-white/10 bg-white/10 p-3.5 backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* SVG Progress Ring */}
                      <div className="relative h-12 w-12 flex items-center justify-center">
                        <svg className="h-12 w-12 -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-white/10"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-brand-blue-500"
                            strokeDasharray="85, 100"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="absolute text-[11px] font-bold text-white">85%</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">WAEC Mastery Track</div>
                        <p className="text-[11px] text-neutral-slate-300">Algebra & Geometry Modules Completed</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-status-green-600/30 text-green-300 border border-green-500/30 px-2 py-0.5 text-[10px] font-semibold">
                      On Track
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Four Services, One Platform */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
              Four Core Services. One Unified Account.
            </h2>
            <p className="text-sm sm:text-base text-neutral-slate-600 leading-relaxed">
              Every learner gets access to curriculum lessons, AI guidance, verified tutors, and music tuition through one shared calendar, wallet, and progress record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Academy */}
            <Card className="border-t-4 border-t-brand-blue-600 flex flex-col justify-between hover:shadow-hover transition-all">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                  <BookOpen className="h-5 w-5" />
                </div>
                <Badge variant="brand" className="w-fit">Academy</Badge>
                <CardTitle className="text-lg">Structured Courses</CardTitle>
                <CardDescription className="text-xs text-neutral-slate-600">
                  Curriculum-aligned video lessons, step-by-step quizzes, and revision tracking.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue-600 shrink-0" />
                  <span>Mathematics launch-ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue-600 shrink-0" />
                  <span>WAEC, JAMB & IGCSE tracks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue-600 shrink-0" />
                  <span>Resumable progress across devices</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/academy" className="block w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Explore Academy</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 2. AI Assistant */}
            <Card className="border-t-4 border-t-service-ai-600 flex flex-col justify-between hover:shadow-hover transition-all">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-50 text-service-ai-600 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <Badge variant="ai" className="w-fit">Trainbow AI</Badge>
                <CardTitle className="text-lg">Socratic AI Assistant</CardTitle>
                <CardDescription className="text-xs text-neutral-slate-600">
                  Step-by-step Mathematics guidance that guides students to the answer without giving it away.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-ai-600 shrink-0" />
                  <span>Hint-first pedagogy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-ai-600 shrink-0" />
                  <span>Programmatically verified formulas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-ai-600 shrink-0" />
                  <span>One-click tutor escalation</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/ai" className="block w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Try AI Assistant</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 3. Tutors Marketplace */}
            <Card className="border-t-4 border-t-service-tutor-700 flex flex-col justify-between hover:shadow-hover transition-all">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-teal-50 text-service-tutor-700 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <Badge variant="tutor" className="w-fit">Tutors</Badge>
                <CardTitle className="text-lg">Verified 1-on-1 Tutors</CardTitle>
                <CardDescription className="text-xs text-neutral-slate-600">
                  Book vetted educators for tailored online lessons or in-person sessions across Nigeria.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-tutor-700 shrink-0" />
                  <span>ID & credential background checks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-tutor-700 shrink-0" />
                  <span>10-minute safe slot reservation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-tutor-700 shrink-0" />
                  <span>Secure in-app virtual classroom</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/tutors" className="block w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Find a Tutor</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 4. Music */}
            <Card className="border-t-4 border-t-service-music-500 flex flex-col justify-between hover:shadow-hover transition-all">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Music className="h-5 w-5" />
                </div>
                <Badge variant="neutral" className="w-fit border-amber-300 bg-amber-50 text-amber-900">Music</Badge>
                <CardTitle className="text-lg">Music & Instruments</CardTitle>
                <CardDescription className="text-xs text-neutral-slate-600">
                  Theory tuition, piano, guitar, and vocal coaching using the same unified account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>Theory & practical tuition</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>Shared booking calendar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>Parent progress tracking</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/music" className="block w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Discover Music</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 3: How It Works (Dual Track: Student & Parent) */}
        <section className="bg-white border-y border-neutral-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
                How Trainbow HUB Works
              </h2>
              <p className="text-sm text-neutral-slate-600">
                Designed for learner autonomy and complete parental peace of mind.
              </p>
            </div>

            {/* Student Track */}
            <div className="rounded-xl border border-neutral-slate-200 bg-neutral-slate-50 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="brand">For Students</Badge>
                <h3 className="font-heading font-bold text-neutral-slate-900 text-base">
                  Your Path to Academic Excellence
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-full bg-brand-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    1
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                    Learn with Syllabus Courses
                  </h4>
                  <p className="text-xs text-neutral-slate-600 leading-relaxed">
                    Watch bite-sized video lessons and solve practice quizzes built specifically for WAEC and JAMB.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-full bg-service-ai-600 text-white font-bold flex items-center justify-center text-xs">
                    2
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                    Get Instant AI Hints
                  </h4>
                  <p className="text-xs text-neutral-slate-600 leading-relaxed">
                    Stuck on an equation? Trainbow AI breaks down the logic step by step instead of just giving away the final number.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-xs">
                    3
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                    Book an Expert Tutor
                  </h4>
                  <p className="text-xs text-neutral-slate-600 leading-relaxed">
                    Schedule 1-on-1 virtual sessions with vetted Nigerian tutors when you need deep, personalized guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Parent Track */}
            <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="tutor">For Parents & Guardians</Badge>
                <h3 className="font-heading font-bold text-neutral-slate-900 text-base">
                  Full Oversight & Child Safeguarding
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-xs">
                    1
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                    Link Your Child
                  </h4>
                  <p className="text-xs text-neutral-slate-600 leading-relaxed">
                    Verify consent via OTP. Under-18 accounts cannot book sessions or message tutors without parent verification.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-xs">
                    2
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                    Approve and Pay in Naira
                  </h4>
                  <p className="text-xs text-neutral-slate-600 leading-relaxed">
                    Review tutor credentials, lesson rates, and approve checkout through trusted Paystack payments.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-xs">
                    3
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-slate-900 text-sm">
                    Follow Attendance & Progress
                  </h4>
                  <p className="text-xs text-neutral-slate-600 leading-relaxed">
                    Receive lesson completion alerts, view quiz score trends, and join virtual classrooms as an observer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Real Public Footer */}
      <Footer />
    </div>
  );
}
