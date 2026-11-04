import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroProductTour } from "@/components/home/HeroProductTour";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/motion";
import { SEED_SUBJECTS } from "@/lib/data/seed-data";

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
        <section className="relative bg-[#0B1226] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Immediate text (Never initial 0 opacity on LCP) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Audience Statement */}
                <span className="text-xs sm:text-sm font-medium text-sky-200 uppercase tracking-wider">
                  Built for WAEC, JAMB and IGCSE students
                </span>

                {/* Main Headline */}
                <h1
                  className="mt-3 sm:mt-4 font-heading font-extrabold text-white text-left tracking-tight"
                  style={{
                    fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Learn smarter.{" "}
                  <br className="hidden sm:inline" />
                  Find the right tutor.
                </h1>

                {/* Supporting Sentence */}
                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-[520px] font-normal leading-relaxed">
                  Structured lessons, AI help and tutors matched to you, built for Nigerian students and their families.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
                  <Link href="/request-tutor" className="w-full sm:w-auto">
                    <span className="w-full sm:w-auto min-h-[44px] h-[48px] px-6 rounded-md bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                      Request a tutor
                    </span>
                  </Link>

                  <Link href="/ai" className="w-full sm:w-auto">
                    <span className="w-full sm:w-auto min-h-[44px] h-[48px] px-6 rounded-md bg-transparent border border-white/25 hover:bg-white/[0.08] hover:border-white/40 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                      {aiHelperLabel}
                    </span>
                  </Link>
                </div>

                {/* Trust Row */}
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300">
                  <span>Child-safe by design</span>
                  <span className="text-slate-500">•</span>
                  <span>Tutors matched by our Director</span>
                  <span className="text-slate-500">•</span>
                  <span>Pay in naira</span>
                </div>
              </div>

              {/* Right Column: Hero Visual Product Tour */}
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                <HeroProductTour />
              </div>
            </div>
          </div>
        </section>

        {/* 2. EVERYTHING IN ONE PLACE */}
        <section className="py-12 sm:py-16 bg-white border-b border-neutral-slate-200">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-neutral-slate-900 tracking-tight text-left mb-6 sm:mb-8">
                Everything in one place
              </h2>
            </Reveal>

            <Stagger className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 no-scrollbar pb-2 sm:pb-0">
              <StaggerItem index={0} className="min-w-[80vw] sm:min-w-0 snap-start">
                <HoverLift>
                  <Link
                    href="/academy"
                    className="group rounded-md border border-neutral-slate-200 border-l-[3px] border-l-brand-blue-600 bg-white p-5 flex flex-col justify-between hover:border-neutral-slate-300 transition-colors h-full block"
                  >
                    <div>
                      <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                        Academy
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-slate-600">
                        Video lessons and quizzes for your exams.
                      </p>
                    </div>
                  </Link>
                </HoverLift>
              </StaggerItem>

              <StaggerItem index={1} className="min-w-[80vw] sm:min-w-0 snap-start">
                <HoverLift>
                  <Link
                    href="/ai"
                    className="group rounded-md border border-neutral-slate-200 border-l-[3px] border-l-purple-600 bg-white p-5 flex flex-col justify-between hover:border-neutral-slate-300 transition-colors h-full block"
                  >
                    <div>
                      <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                        AI
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-slate-600">
                        Step-by-step guidance without giving away answers.
                      </p>
                    </div>
                  </Link>
                </HoverLift>
              </StaggerItem>

              <StaggerItem index={2} className="min-w-[80vw] sm:min-w-0 snap-start">
                <HoverLift>
                  <Link
                    href="/request-tutor"
                    className="group rounded-md border border-neutral-slate-200 border-l-[3px] border-l-teal-600 bg-white p-5 flex flex-col justify-between hover:border-neutral-slate-300 transition-colors h-full block"
                  >
                    <div>
                      <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                        Tutors
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-slate-600">
                        Teachers matched personally by our Director.
                      </p>
                    </div>
                  </Link>
                </HoverLift>
              </StaggerItem>

              <StaggerItem index={3} className="min-w-[80vw] sm:min-w-0 snap-start">
                <HoverLift>
                  <Link
                    href="/music"
                    className="group rounded-md border border-neutral-slate-200 border-l-[3px] border-l-amber-600 bg-white p-5 flex flex-col justify-between hover:border-neutral-slate-300 transition-colors h-full block"
                  >
                    <div>
                      <h3 className="text-base font-bold font-heading text-neutral-slate-900 mb-1">
                        Music
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-slate-600">
                        Theory and instrument coaching for all levels.
                      </p>
                    </div>
                  </Link>
                </HoverLift>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* 3. HOW IT WORKS (Tagline: Learn • Build • Grow) */}
        <section className="py-12 sm:py-16 bg-neutral-slate-50 border-b border-neutral-slate-200">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-neutral-slate-900 tracking-tight text-left mb-6 sm:mb-8">
                How it works
              </h2>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggerItem index={0}>
                <div className="rounded-md bg-white border border-neutral-slate-200 p-5 space-y-1 text-left h-full">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-600 block">
                    Learn
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-slate-700">
                    Lessons and exam practice.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem index={1}>
                <div className="rounded-md bg-white border border-neutral-slate-200 p-5 space-y-1 text-left h-full">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
                    Build
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-slate-700">
                    Director matching with parental approval.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem index={2}>
                <div className="rounded-md bg-white border border-neutral-slate-200 p-5 space-y-1 text-left h-full">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
                    Grow
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-slate-700">
                    Study habits and confidence.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* 4. FINAL CALL TO ACTION */}
        <section className="py-12 sm:py-16 bg-brand-navy-900 text-white text-left">
          <Reveal className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
              Ready to start learning?
            </h2>

            <Link href="/request-tutor">
              <span className="min-h-[44px] h-[48px] px-8 rounded-md bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                Request a tutor
              </span>
            </Link>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
