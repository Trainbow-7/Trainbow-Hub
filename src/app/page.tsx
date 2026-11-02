import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroHubVisual } from "@/components/home/HeroHubVisual";
import { SEED_SUBJECTS } from "@/lib/data/seed-data";
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Music,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  CreditCard,
} from "lucide-react";

export default function HomePage() {
  // Determine AI CTA label dynamically based on active AI-enabled subjects
  const activeAiSubjects = SEED_SUBJECTS.filter(
    (subject) => subject.status === "active" && subject.aiEnabled
  );
  const aiHelperLabel =
    activeAiSubjects.length > 1 ? "Try the AI helper" : "Try the AI maths helper";

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden bg-[#0B1226] text-white py-12 sm:py-16 lg:py-24">
          {/* Subtle ambient light */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-25 blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.45) 0%, rgba(99,102,241,0.2) 50%, transparent 70%)",
            }}
          />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Audience Statement Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-sky-200 border border-sky-400/20 backdrop-blur-sm">
                  <span>Built for WAEC, JAMB and IGCSE students</span>
                </div>

                {/* Main Headline */}
                <h1
                  className="mt-4 sm:mt-5 font-heading font-extrabold text-white text-left tracking-tight"
                  style={{
                    fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Learn smarter.{" "}
                  <br className="hidden sm:inline" />
                  Find the{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #7DD3FC 0%, #818CF8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    right tutor
                  </span>
                  .
                </h1>

                {/* Supporting Sentence (20 words or fewer) */}
                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-[520px] font-normal leading-relaxed">
                  Structured lessons, AI help and tutors matched to you, built for Nigerian students and their families.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
                  <Link href="/request-tutor" className="w-full sm:w-auto">
                    <span className="w-full sm:w-auto min-h-[44px] h-[48px] px-6 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1226]">
                      <span>Request a tutor</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link href="/ai" className="w-full sm:w-auto">
                    <span className="w-full sm:w-auto min-h-[44px] h-[48px] px-6 rounded-xl bg-transparent border border-white/25 hover:bg-white/[0.08] hover:border-white/40 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1226]">
                      <Sparkles className="h-4 w-4 text-purple-300" />
                      <span>{aiHelperLabel}</span>
                    </span>
                  </Link>
                </div>

                {/* Trust Row (3 items, all true by design) */}
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Child-safe by design</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <UserCheck className="h-4 w-4 text-sky-400 shrink-0" />
                    <span>Tutors matched by our Director</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <CreditCard className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Pay in naira</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Hub Visual */}
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                <HeroHubVisual />
              </div>
            </div>
          </div>
        </section>

        {/* 2. EVERYTHING IN ONE PLACE */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-neutral-slate-200">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-neutral-slate-900 tracking-tight text-center mb-8 sm:mb-12">
              Everything in one place
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Academy Card */}
              <Link
                href="/academy"
                className="group rounded-2xl border border-neutral-slate-200 bg-neutral-slate-50/50 p-5 sm:p-6 flex flex-col justify-between hover:bg-white hover:border-brand-blue-500 hover:shadow-md transition-all duration-150"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-brand-blue-600 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                    Academy
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                    Video lessons and practice quizzes for your exams.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-slate-200/60 flex items-center justify-end text-brand-blue-600 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              {/* AI Helper Card */}
              <Link
                href="/ai"
                className="group rounded-2xl border border-neutral-slate-200 bg-neutral-slate-50/50 p-5 sm:p-6 flex flex-col justify-between hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-150"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-purple-50 text-service-ai-600 flex items-center justify-center mb-4">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                    AI
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                    Step-by-step guidance without giving away direct answers.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-slate-200/60 flex items-center justify-end text-service-ai-600 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              {/* Tutors Card */}
              <Link
                href="/request-tutor"
                className="group rounded-2xl border border-neutral-slate-200 bg-neutral-slate-50/50 p-5 sm:p-6 flex flex-col justify-between hover:bg-white hover:border-teal-500 hover:shadow-md transition-all duration-150"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-teal-50 text-service-tutor-700 flex items-center justify-center mb-4">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                    Tutors
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                    Expert educators matched personally by our Director.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-slate-200/60 flex items-center justify-end text-service-tutor-700 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              {/* Music Card */}
              <Link
                href="/music"
                className="group rounded-2xl border border-neutral-slate-200 bg-neutral-slate-50/50 p-5 sm:p-6 flex flex-col justify-between hover:bg-white hover:border-amber-500 hover:shadow-md transition-all duration-150"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                    <Music className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                    Music
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                    Theory and instrument coaching for all levels.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-slate-200/60 flex items-center justify-end text-amber-700 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section className="py-12 sm:py-16 lg:py-24 bg-neutral-slate-50">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-neutral-slate-900 tracking-tight text-center mb-8 sm:mb-12">
              How it works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="rounded-2xl bg-white border border-neutral-slate-200/80 p-5 sm:p-6 text-center space-y-2">
                <div className="h-9 w-9 rounded-full bg-brand-blue-50 text-brand-blue-600 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  1
                </div>
                <p className="font-heading font-bold text-neutral-slate-900 text-sm sm:text-base">
                  Tell us what you need.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-white border border-neutral-slate-200/80 p-5 sm:p-6 text-center space-y-2">
                <div className="h-9 w-9 rounded-full bg-brand-blue-50 text-brand-blue-600 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  2
                </div>
                <p className="font-heading font-bold text-neutral-slate-900 text-sm sm:text-base">
                  We match you with a tutor.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-white border border-neutral-slate-200/80 p-5 sm:p-6 text-center space-y-2">
                <div className="h-9 w-9 rounded-full bg-brand-blue-50 text-brand-blue-600 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  3
                </div>
                <p className="font-heading font-bold text-neutral-slate-900 text-sm sm:text-base">
                  Learn and track progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FINAL CALL TO ACTION */}
        <section className="py-12 sm:py-16 lg:py-20 bg-brand-navy-900 text-white text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-white tracking-tight">
              Ready to start learning?
            </h2>

            <div>
              <Link href="/request-tutor" className="inline-block">
                <span className="min-h-[44px] h-[48px] px-8 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-900">
                  <span>Request a tutor</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
