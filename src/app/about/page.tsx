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

        {/* Founder Profile — About Mr Oyedeji S.T. */}
        <Reveal>
          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 sm:p-10 space-y-5 text-left shadow-sm">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue-600 block mb-1">
                Leadership &amp; Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-neutral-slate-900">
                About Mr Oyedeji S.T.
              </h2>
              <p className="text-sm sm:text-base font-semibold text-neutral-slate-700 mt-1">
                Educator. Learning Innovator. Founder of Trainbow Hub.
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-slate-700 leading-relaxed">
              Mr Oyedeji S.T. is a Nigerian educator with over 15 years of teaching experience and a B.Sc. in Mathematics Education from the University of Lagos. He is a TRCN-certified teacher with a passion for making quality education more accessible, engaging and effective.
            </p>

            <div className="space-y-2">
              <p className="text-sm sm:text-base text-neutral-slate-700 leading-relaxed">
                As the founder of <strong className="font-semibold text-neutral-slate-900">Trainbow Hub</strong>, he is building a modern learning ecosystem that gives every student four ways to grow:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-neutral-slate-700 pl-1">
                <li>
                  <strong className="font-semibold text-neutral-slate-900">Academy</strong>: Structured lessons, quizzes and examination-focused learning resources aligned with WAEC, NECO, UTME and Cambridge standards.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-slate-900">AI</strong>: Intelligent, instant study assistance that helps learners understand difficult concepts, practise and learn at their own pace.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-slate-900">Tutors</strong>: Access to personalised academic support through tutor matching.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-slate-900">Music</strong>: Opportunities to explore music theory and develop practical instrumental skills.
                </li>
              </ul>
            </div>

            <p className="text-sm sm:text-base text-neutral-slate-700 leading-relaxed">
              Driven by the belief that every learner deserves the opportunity to excel, he combines years of classroom experience with educational technology to make learning more accessible, personalised and rewarding.
            </p>

            <div className="pt-4 border-t border-neutral-slate-100 space-y-3">
              <p className="text-sm sm:text-base text-neutral-slate-700 leading-relaxed">
                <strong className="font-semibold text-neutral-slate-900">A Message to Parents</strong>: Your child&apos;s potential deserves the right environment to flourish. At Trainbow Hub, we bring quality teaching, smart learning technology and personalised support together to help your child learn better, grow in confidence and achieve more.
              </p>

              <p className="text-sm sm:text-base font-bold text-neutral-slate-900 leading-relaxed">
                Give your child a better way to learn. Welcome to Trainbow Hub.
              </p>
            </div>
          </div>
        </Reveal>

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
