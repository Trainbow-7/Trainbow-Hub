import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/motion";

export const metadata = {
  title: "About Us — Trainbow HUB",
  description: "Learn • Build • Grow. Nigeria's online learning hub connecting learners, parents, and tutors.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Hero Header */}
        <Reveal>
          <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 lg:p-14 text-center border border-brand-navy-800 shadow-md">
            <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-300 block">
                About Trainbow HUB
              </span>

              <h1 className="text-display font-extrabold font-heading text-white tracking-tight leading-tight text-center">
                Learn • Build • Grow
              </h1>

              <p className="text-base sm:text-lg text-neutral-slate-200 leading-relaxed max-w-2xl mx-auto text-center">
                Trainbow HUB was created to solve a persistent challenge for Nigerian families: fragmented learning materials, unvetted private tutors, and rote memorization that fails students during high-stakes WAEC and JAMB examinations.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 Core Pillars */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <StaggerItem className="h-full">
            <HoverLift className="h-full">
              <div className="rounded-lg border border-neutral-slate-200 bg-white border-l-[3px] border-l-brand-blue-600 p-6 space-y-2 h-full">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-600 block">
                  Learn
                </span>
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                  Curriculum lessons
                </h3>
                <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                  Curriculum-aligned Mathematics lessons, practice quizzes, and a step-by-step study helper that guides students without giving away direct answers.
                </p>
              </div>
            </HoverLift>
          </StaggerItem>

          <StaggerItem className="h-full">
            <HoverLift className="h-full">
              <div className="rounded-lg border border-neutral-slate-200 bg-white border-l-[3px] border-l-teal-600 p-6 space-y-2 h-full">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
                  Build
                </span>
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                  Director-matched tutoring
                </h3>
                <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                  Tell us what you need. Mr Oyedeji S.T, our Director, matches you with a tutor who is available. A parent or guardian approves every match for learners under 18.
                </p>
              </div>
            </HoverLift>
          </StaggerItem>

          <StaggerItem className="h-full">
            <HoverLift className="h-full">
              <div className="rounded-lg border border-neutral-slate-200 bg-white border-l-[3px] border-l-purple-600 p-6 space-y-2 h-full">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
                  Grow
                </span>
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                  Measurable progress
                </h3>
                <p className="text-xs sm:text-sm text-neutral-slate-600 leading-relaxed">
                  Students gain deep subject confidence, parents follow weekly attendance, and learners track their mastery across devices.
                </p>
              </div>
            </HoverLift>
          </StaggerItem>
        </Stagger>

        {/* Safeguarding & Child Protection Commitment */}
        <Reveal>
          <div className="rounded-lg border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-6 text-left">
            <div className="border-b border-neutral-slate-100 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-neutral-slate-900">
                Child protection and safety
              </h2>
              <p className="text-xs sm:text-sm text-neutral-slate-600 mt-1">
                Online tutoring cannot compromise on student safety. Every student under 18 must be linked to a parent or guardian before booking lessons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-slate-700">
              <div className="p-4 rounded-md bg-neutral-slate-50 border border-neutral-slate-200 space-y-1">
                <h4 className="font-bold text-neutral-slate-900">Screening and conduct</h4>
                <p className="text-neutral-slate-600 leading-relaxed">
                  Tutors undergo identity checks, credential vetting, and reference reviews. Every tutor agrees to our binding Child Safeguarding Code of Conduct.
                </p>
              </div>

              <div className="p-4 rounded-md bg-neutral-slate-50 border border-neutral-slate-200 space-y-1">
                <h4 className="font-bold text-neutral-slate-900">Monitored learning channels</h4>
                <p className="text-neutral-slate-600 leading-relaxed">
                  Minors cannot message educators privately off-platform. In-app sessions include a visible problem-reporting tool with direct safeguarding triage.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
