import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { AIInteractiveDemo } from "@/components/home/AIInteractiveDemo";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import {
  SEED_SUBJECTS,
  SEED_COURSES,
  SEED_TUTORS,
} from "@/lib/data/seed-data";
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
  Users,
  Eye,
  CreditCard,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const activeSubjects = SEED_SUBJECTS.filter((s) => s.status === "active");
  const featuredCourses = SEED_COURSES.slice(0, 3);
  const featuredTutors = SEED_TUTORS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Hero Section (Navy 900 Gradient with Guaranteed High Contrast) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-900 via-brand-navy-900 to-brand-navy-950 py-16 sm:py-24 text-white">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-brand-blue-600/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-service-ai-600/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Value Proposition & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy-950/80 px-3.5 py-1 text-xs font-semibold text-brand-blue-50 border border-brand-blue-500/30">
                  <span className="flex h-2 w-2 rounded-full bg-brand-blue-500 animate-pulse" />
                  <span>Mathematics Curriculum & Verified Tutors Active</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.1] text-white">
                  Learn smarter. <br />
                  Find the right tutor. <br />
                  <span className="text-brand-blue-500">Grow with confidence.</span>
                </h1>

                <p className="text-base sm:text-lg text-neutral-slate-200 max-w-2xl leading-relaxed">
                  One account for lessons, AI help and verified tutors, built for Nigerian students and the parents who support them.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link href="/request-tutor">
                    <Button
                      variant="primary"
                      size="lg"
                      className="font-semibold text-base shadow-lg shadow-brand-blue-600/25 px-6 py-3"
                    >
                      Request a tutor
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

        {/* 2. Four Services, One Platform */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            <Card className="rounded-card border-t-4 border-t-brand-blue-600 flex flex-col justify-between hover-lift">
              <CardHeader className="space-y-2">
                <div className="h-11 w-11 rounded-control bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
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
                  <Button variant="outline" size="md" className="w-full justify-between min-h-[44px]">
                    <span>Explore Academy</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 2. AI Assistant */}
            <Card className="rounded-card border-t-4 border-t-service-ai-600 flex flex-col justify-between hover-lift">
              <CardHeader className="space-y-2">
                <div className="h-11 w-11 rounded-control bg-purple-50 text-service-ai-600 flex items-center justify-center">
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
                  <Button variant="outline" size="md" className="w-full justify-between min-h-[44px]">
                    <span>Try AI Assistant</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 3. Tutors Marketplace */}
            <Card className="rounded-card border-t-4 border-t-service-tutor-700 flex flex-col justify-between hover-lift">
              <CardHeader className="space-y-2">
                <div className="h-11 w-11 rounded-control bg-teal-50 text-service-tutor-700 flex items-center justify-center">
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
                <Link href="/request-tutor" className="block w-full">
                  <Button variant="outline" size="md" className="w-full justify-between min-h-[44px]">
                    <span>Request a Match</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 4. Music */}
            <Card className="rounded-card border-t-4 border-t-service-music-500 flex flex-col justify-between hover-lift">
              <CardHeader className="space-y-2">
                <div className="h-11 w-11 rounded-control bg-amber-50 text-amber-900 flex items-center justify-center">
                  <Music className="h-5 w-5" />
                </div>
                <Badge variant="neutral" className="w-fit border-amber-300 bg-amber-50 text-neutral-slate-900 font-semibold">Music</Badge>
                <CardTitle className="text-lg">Music & Instruments</CardTitle>
                <CardDescription className="text-xs text-neutral-slate-600">
                  Theory tuition, piano, guitar, and vocal coaching using the same unified account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                  <span>Theory & practical tuition</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                  <span>Shared booking calendar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                  <span>Parent progress tracking</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/music" className="block w-full">
                  <Button variant="outline" size="md" className="w-full justify-between min-h-[44px]">
                    <span>Discover Music</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* 3. How It Works (Connected Horizontal Stepper) */}
        <section className="bg-white border-y border-neutral-slate-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="neutral">Clear, Safe Workflow</Badge>
              <h2 className="text-h2 font-extrabold font-heading text-neutral-slate-900 tracking-tight">
                How Trainbow HUB Works
              </h2>
              <p className="text-body text-neutral-slate-600 leading-relaxed">
                Designed for student autonomy, verified progress, and complete parental peace of mind.
              </p>
            </div>

            {/* Student Track - Connected Stepper */}
            <div className="rounded-panel border border-neutral-slate-200 bg-neutral-slate-50/70 p-6 sm:p-10 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-neutral-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <Badge variant="brand">For Students</Badge>
                  <h3 className="font-heading font-bold text-neutral-slate-900 text-base sm:text-lg">
                    Your Path to Academic Excellence
                  </h3>
                </div>
                <span className="text-xs font-medium text-neutral-slate-500">Autonomous & Syllabus-Aligned</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Horizontal connector line on desktop */}
                <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-neutral-slate-200 -z-0" />

                <div className="space-y-3 relative z-10 text-left bg-neutral-slate-50/70 sm:bg-transparent">
                  <div className="h-12 w-12 rounded-full bg-brand-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md ring-4 ring-white">
                    1
                  </div>
                  <h4 className="font-heading font-bold text-neutral-slate-900 text-base">
                    Learn with Syllabus Courses
                  </h4>
                  <p className="text-small text-neutral-slate-600 leading-relaxed">
                    Watch bite-sized video lessons and solve practice quizzes built specifically for WAEC and JAMB.
                  </p>
                </div>

                <div className="space-y-3 relative z-10 text-left bg-neutral-slate-50/70 sm:bg-transparent">
                  <div className="h-12 w-12 rounded-full bg-service-ai-600 text-white font-bold flex items-center justify-center text-sm shadow-md ring-4 ring-white">
                    2
                  </div>
                  <h4 className="font-heading font-bold text-neutral-slate-900 text-base">
                    Get Instant AI Hints
                  </h4>
                  <p className="text-small text-neutral-slate-600 leading-relaxed">
                    Stuck on an equation? Trainbow AI breaks down the logic step by step instead of just giving away the final number.
                  </p>
                </div>

                <div className="space-y-3 relative z-10 text-left bg-neutral-slate-50/70 sm:bg-transparent">
                  <div className="h-12 w-12 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-sm shadow-md ring-4 ring-white">
                    3
                  </div>
                  <h4 className="font-heading font-bold text-neutral-slate-900 text-base">
                    Book an Expert Tutor
                  </h4>
                  <p className="text-small text-neutral-slate-600 leading-relaxed">
                    Schedule 1-on-1 virtual sessions with vetted Nigerian tutors when you need deep, personalized guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Parent Track - Connected Stepper */}
            <div className="rounded-panel border border-teal-200/80 bg-teal-50/40 p-6 sm:p-10 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-teal-200/60">
                <div className="flex items-center gap-2.5">
                  <Badge variant="tutor">For Parents & Guardians</Badge>
                  <h3 className="font-heading font-bold text-neutral-slate-900 text-base sm:text-lg">
                    Full Oversight & Child Safeguarding
                  </h3>
                </div>
                <span className="text-xs font-semibold text-service-tutor-700">Strict NDPA 2023 Consent</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Horizontal connector line on desktop */}
                <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-teal-200 -z-0" />

                <div className="space-y-3 relative z-10 text-left">
                  <div className="h-12 w-12 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-sm shadow-md ring-4 ring-white">
                    1
                  </div>
                  <h4 className="font-heading font-bold text-neutral-slate-900 text-base">
                    Link Your Child
                  </h4>
                  <p className="text-small text-neutral-slate-600 leading-relaxed">
                    Verify consent via OTP. Under-18 accounts cannot book sessions or message tutors without parent verification.
                  </p>
                </div>

                <div className="space-y-3 relative z-10 text-left">
                  <div className="h-12 w-12 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-sm shadow-md ring-4 ring-white">
                    2
                  </div>
                  <h4 className="font-heading font-bold text-neutral-slate-900 text-base">
                    Approve and Pay in Naira
                  </h4>
                  <p className="text-small text-neutral-slate-600 leading-relaxed">
                    Review tutor credentials, lesson rates, and approve checkout through trusted Paystack payments.
                  </p>
                </div>

                <div className="space-y-3 relative z-10 text-left">
                  <div className="h-12 w-12 rounded-full bg-service-tutor-700 text-white font-bold flex items-center justify-center text-sm shadow-md ring-4 ring-white">
                    3
                  </div>
                  <h4 className="font-heading font-bold text-neutral-slate-900 text-base">
                    Follow Attendance & Progress
                  </h4>
                  <p className="text-small text-neutral-slate-600 leading-relaxed">
                    Receive lesson completion alerts, view quiz score trends, and join virtual classrooms as an observer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Live Catalogue Preview (Subject Chips, 3 Featured Courses, 3 Featured Tutors) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="brand">Curriculum & Directory</Badge>
                <span className="text-xs text-neutral-slate-500 font-medium">Seeded Live Catalogue</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
                Explore Courses & Vetted Nigerian Tutors
              </h2>
              <p className="text-sm text-neutral-slate-600 max-w-2xl">
                Browse curriculum courses and connect with approved tutors ready to schedule 1-on-1 lessons.
              </p>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700 flex items-center gap-1 shrink-0">
              <span>View all courses</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Subject Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-neutral-slate-500 mr-2">Active Subjects:</span>
            {activeSubjects.map((sub) => (
              <Link
                key={sub.id}
                href={`/academy/${sub.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-neutral-slate-200 hover:border-brand-blue-600 hover:text-brand-blue-600 transition-colors shadow-xs"
              >
                <span>{sub.name}</span>
                {sub.aiEnabled ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-service-ai-600" title="AI Assistant Active" />
                ) : null}
              </Link>
            ))}
          </div>

          {/* Featured Courses Grid */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
              Featured Academy Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
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
          </div>

          {/* Concierge Tutor Matching Feature Spotlight */}
          <div className="space-y-4 pt-6">
            <div className="rounded-2xl border border-service-tutor-200 bg-gradient-to-br from-white to-purple-50/40 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-service-tutor-100 text-service-tutor-900 px-3 py-1 text-xs font-semibold">
                    <ShieldCheck className="h-4 w-4 text-service-tutor-700" />
                    <span>Personal Concierge Matching · Zero Guesswork</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-neutral-slate-900">
                    Handpicked 1-on-1 Tutors, Personally Matched for Your Child
                  </h3>
                  <p className="text-sm text-neutral-slate-600 leading-relaxed">
                    No searching unverified directories or dealing with unavailable tutors. Every tutoring need is personally reviewed by <strong className="text-neutral-slate-900">Mr Oyedeji S.T</strong>, Director of Trainbow HUB, who matches your child with a vetted tutor available right now.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-neutral-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0" />
                      <span>Private vetted roster</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0" />
                      <span>Guaranteed real-time availability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0" />
                      <span>Parent match approval</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <Link href="/request-tutor" className="block w-full">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto font-semibold px-6 py-3 shadow-md">
                      <span>Request a Tutor Match</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Trainbow AI Overview Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="ai">Pedagogical Guardrails</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              How Trainbow AI Works
            </h2>
            <p className="text-sm text-neutral-slate-600">
              Unlike generic chatbots that simply give away answers, Trainbow AI empowers learners through guided reasoning and curriculum-verified logic.
            </p>
          </div>

          <AIInteractiveDemo />
        </section>

        {/* 6. Parents and Safeguarding Assurance */}
        <section className="bg-neutral-slate-100/70 border-y border-neutral-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="tutor" className="gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                Child-Safe By Design
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900 leading-tight">
                Designed for Nigerian Parents Who Value Safety Above All Else
              </h2>
              <p className="text-sm text-neutral-slate-600 leading-relaxed">
                We believe online learning must be as safe as an in-person classroom. Under the Nigeria Data Protection Act (NDPA) 2023, every student under 18 is protected by strict platform-level guardrails.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-status-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-slate-900">Guardian Verification & Consent</h3>
                    <p className="text-xs text-neutral-slate-600">Accounts for minors cannot book tutors or authorize payments without parent OTP approval.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-status-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-slate-900">No Private Off-Platform Messaging</h3>
                    <p className="text-xs text-neutral-slate-600">All student-tutor communication runs through supervised channels with conduct reporting tools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-status-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-slate-900">Rigorous Identity & Credential Vetting</h3>
                    <p className="text-xs text-neutral-slate-600">Every educator signs our Safeguarding Code of Conduct before a single lesson can be taught.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/legal/safeguarding">
                  <Button variant="outline" size="sm" className="gap-2">
                    <span>Read Full Child Safeguarding Policy</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                  Parent Peace-of-Mind Checklist
                </h3>
                <div className="space-y-3 text-xs text-neutral-slate-700">
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <span className="font-medium">Observed Virtual Classrooms</span>
                    <span className="text-status-green-800 font-bold">Enabled</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <span className="font-medium">Real-Time Attendance Timestamps</span>
                    <span className="text-status-green-800 font-bold">Logged to Order</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <span className="font-medium">Incident Response SLA</span>
                    <span className="text-brand-blue-600 font-bold">Triaged &lt; 24h</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <span className="font-medium">Payment Data Security</span>
                    <span className="text-neutral-slate-900 font-bold">PCI-DSS (Paystack)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Become a Tutor Band */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-service-tutor-700/60 px-3 py-1 text-xs font-semibold text-white border border-service-tutor-500/40">
                <Award className="h-3.5 w-3.5" />
                Join Nigeria&apos;s Elite Educator Network
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Are you an expert educator? Teach on Trainbow HUB.
              </h2>
              <p className="text-sm text-neutral-slate-200 leading-relaxed">
                Set your own rates in naira, teach ambitious students across Nigeria, and earn reliable weekly income with zero scheduling hassle or payment chasing.
              </p>
            </div>
            <Link href="/become-a-tutor" className="shrink-0 relative z-10">
              <Button variant="primary" size="lg" className="font-semibold text-base px-8 py-3 shadow-lg">
                Apply to Become a Tutor
              </Button>
            </Link>
          </div>
        </section>

        {/* 8. Transparent Pricing Teaser */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="brand">Transparent Pricing</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              Simple, Predictable Learning Costs
            </h2>
            <p className="text-sm text-neutral-slate-600">
              Pay only for what you need. No hidden fees or surprise auto-renewals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Pay per lesson */}
            <Card className="flex flex-col justify-between border-neutral-slate-200 hover:shadow-hover transition-all">
              <CardHeader className="space-y-2">
                <Badge variant="tutor" className="w-fit">1-on-1 Tutoring</Badge>
                <CardTitle className="text-lg">Pay Per Lesson</CardTitle>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">From ₦5,000</span>
                  <span className="text-xs text-neutral-slate-500 block">/ 60-minute session</span>
                </div>
                <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                  Tailored 1-on-1 coaching with approved educators for WAEC, JAMB, or junior school.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-tutor-700" />
                  <span>Choose tutor by rate and qualifications</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-tutor-700" />
                  <span>Interactive virtual classroom included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-tutor-700" />
                  <span>100% refund on tutor cancellation</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/request-tutor" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Request a Match
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* AI Assistant Plan */}
            <Card className="flex flex-col justify-between border-2 border-service-ai-600 bg-purple-50/20 shadow-md relative hover:shadow-hover transition-all">
              <div className="absolute -top-3 right-4 bg-service-ai-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Popular
              </div>
              <CardHeader className="space-y-2">
                <Badge variant="ai" className="w-fit">Trainbow AI</Badge>
                <CardTitle className="text-lg">Socratic AI Pass</CardTitle>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">₦3,500</span>
                  <span className="text-xs text-neutral-slate-500 block">/ month</span>
                </div>
                <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                  Unlimited 24/7 homework assistance, hint-first guidance, and verified math calculations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-ai-600" />
                  <span>Generous daily question quota</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-ai-600" />
                  <span>WAEC & JAMB step-by-step solver</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-service-ai-600" />
                  <span>One-click tutor escalation</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/pricing" className="w-full">
                  <Button variant="ai" size="sm" className="w-full">
                    Get AI Access
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Academy Full Pass */}
            <Card className="flex flex-col justify-between border-neutral-slate-200 hover:shadow-hover transition-all">
              <CardHeader className="space-y-2">
                <Badge variant="brand" className="w-fit">Academy Pass</Badge>
                <CardTitle className="text-lg">Curriculum Courses</CardTitle>
                <div className="pt-2">
                  <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">₦15,000</span>
                  <span className="text-xs text-neutral-slate-500 block">/ term per subject</span>
                </div>
                <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                  All structured modules, video explanations, past exam questions, and stored quiz attempts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue-600" />
                  <span>All lessons and practice quizzes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue-600" />
                  <span>Resumable progress across devices</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue-600" />
                  <span>Parent progress tracking reports</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/academy" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Academy
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* 9. FAQ Accordion & Final CTA Band */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <Badge variant="neutral">Got Questions?</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-neutral-slate-600">
              Clear, transparent answers about our curriculum, safety rules, and booking policies.
            </p>
          </div>

          <HomeFAQ />

          {/* Final Conversion CTA Band */}
          <div className="rounded-2xl border border-brand-blue-600/30 bg-gradient-to-r from-brand-navy-900 via-brand-navy-900 to-brand-blue-900 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Give your child the academic edge they deserve.
            </h3>
            <p className="text-sm sm:text-base text-neutral-slate-200 max-w-xl mx-auto leading-relaxed">
              Join hundreds of Nigerian students excelling in Mathematics and WAEC exams with verified tutors and Socratic AI guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/register">
                <Button variant="primary" size="lg" className="font-semibold text-base px-8 py-3 shadow-lg">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/request-tutor">
                <Button variant="secondary" size="lg" className="font-semibold text-base px-8 py-3">
                  Request a Tutor Match
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Real Public Footer */}
      <Footer />
    </div>
  );
}
