import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, UserCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Request a Personally Matched Tutor — Trainbow HUB",
  description: "Get matched with an experienced Nigerian tutor personally selected by Mr Oyedeji S.T, Director of Trainbow HUB.",
};

export default function RequestTutorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
        {/* Header Hero */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-navy-900 via-brand-navy-900 to-brand-navy-950 text-white p-8 sm:p-12 shadow-floating relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-brand-blue-500/15 blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-500/20 text-brand-blue-200 border border-brand-blue-400/30 px-3.5 py-1 text-xs font-semibold">
              <ShieldCheck className="h-4 w-4 text-brand-blue-300" />
              <span>Concierge Tutor Matching Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Get matched with a verified tutor, <br />
              <span className="text-brand-blue-400">personally selected for your child.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-slate-200 leading-relaxed">
              No endless searching or unavailable tutors. Every request is directly reviewed by <strong className="text-white">Mr Oyedeji S.T</strong>, Director of Trainbow HUB, who hand-matches an experienced tutor available right now.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-status-green-400 shrink-0" />
                <span>Private verified roster</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-status-green-400 shrink-0" />
                <span>Zero guesswork &amp; confirmed availability</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-status-green-400 shrink-0" />
                <span>Parent review &amp; approval</span>
              </span>
            </div>
          </div>
        </div>

        {/* How It Works 3-Step Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-2.5 shadow-xs">
            <div className="h-9 w-9 rounded-lg bg-brand-blue-50 text-brand-blue-600 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Submit Your Needs
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Tell us the subject, exam target (WAEC, JAMB, IGCSE), preferred days, format (online or in-person), and budget.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-2.5 shadow-xs">
            <div className="h-9 w-9 rounded-lg bg-purple-50 text-purple-700 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Director Matching
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Mr Oyedeji S.T reviews your requirements and pairs you with a top tutor from our private roster confirmed available.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-2.5 shadow-xs">
            <div className="h-9 w-9 rounded-lg bg-status-green-50 text-status-green-700 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Approve &amp; Learn
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Review the tutor's background, credentials, and quote. Accept to begin lessons in our monitored virtual classroom.
            </p>
          </div>
        </div>

        {/* CTA Card to Launch Flow */}
        <div className="rounded-2xl border-2 border-brand-blue-600/20 bg-brand-blue-50/50 p-8 sm:p-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-blue-700 text-xs font-semibold border border-brand-blue-200 shadow-xs">
            <Clock className="h-3.5 w-3.5" />
            <span>Average match turnaround: Under 24 hours</span>
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold font-heading text-neutral-slate-900">
              Ready to find the ideal tutor?
            </h2>
            <p className="text-sm text-neutral-slate-600">
              Fill out our simple matching form. No upfront commitment required to request a match proposal.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/request-tutor/new">
              <Button variant="primary" size="lg" className="w-full sm:w-auto font-semibold px-8 py-3 shadow-md min-h-[44px]">
                <span>Start Tutor Request Form</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold px-6 py-3 min-h-[44px]">
                <span>Matching FAQs</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
