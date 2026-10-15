import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { ShieldCheck, Heart, Award, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us — Trainbow HUB",
  description: "Learn • Connect • Grow. Nigeria's mobile-first online learning hub connecting learners, parents, and verified tutors.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero Header */}
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-14 relative overflow-hidden shadow-soft">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/40">
              Our Vision &amp; Mission
            </Badge>

            <h1 className="text-display font-extrabold font-heading text-white tracking-tight leading-tight">
              Empowering Nigerian Learners to <br />
              <span className="text-brand-blue-400">Learn, Connect &amp; Grow.</span>
            </h1>

            <p className="text-body-lg text-neutral-slate-200 leading-relaxed max-w-2xl">
              Trainbow HUB was created to solve a persistent challenge for Nigerian families: fragmented learning apps, unvetted private tutors, and rote memorization that fails students during high-stakes WAEC and JAMB examinations.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3 shadow-soft hover:-translate-y-0.5 transition-all duration-150">
            <div className="h-10 w-10 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              1. Learn
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Curriculum-aligned Mathematics lessons, practice quizzes, and an intelligent Socratic AI assistant that guides students without spoiling the answer.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-teal-50 text-service-tutor-700 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              2. Connect
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Connecting students with thoroughly vetted Nigerian tutors for tailored 1-on-1 virtual or in-person sessions, with verified guardian oversight.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-status-green-600/10 text-status-green-600 flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              3. Grow
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Measurable progress tracking across devices. Students gain deep subject confidence, parents follow weekly attendance, and tutors earn dependable income.
            </p>
          </div>
        </div>

        {/* Safeguarding & Nigeria-First Commitment */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <Badge variant="tutor" className="gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              Our Uncompromising Safeguarding Promise
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              Built on Child Protection and NDPA 2023 Principles
            </h2>
            <p className="text-sm text-neutral-slate-600 leading-relaxed">
              Online tutoring cannot compromise on student safety. In accordance with the Nigeria Data Protection Act (NDPA) 2023, every student under 18 must be linked to a verified guardian via OTP before booking lessons or communicating with tutors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-slate-700">
            <div className="p-4 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 space-y-2">
              <h4 className="font-bold text-neutral-slate-900">Identity & Criminal Record Screenings</h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                Tutors undergo identity verification, credential vetting, and reference checks. Every tutor signs our binding Child Safeguarding Code of Conduct.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 space-y-2">
              <h4 className="font-bold text-neutral-slate-900">Monitored Virtual Learning Channels</h4>
              <p className="text-neutral-slate-600 leading-relaxed">
                Minors cannot message educators privately off-platform. In-app virtual rooms include a visible report button with a strict 24-hour triage SLA.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
