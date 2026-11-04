import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata = {
  title: "Request a Tutor Match — Trainbow HUB",
  description: "Get matched with an experienced tutor selected by Mr Oyedeji S.T, Director of Trainbow HUB.",
};

export default function RequestTutorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Header Hero */}
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 lg:p-14 relative border border-brand-navy-800 shadow-md text-center">
          <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center text-center">
            <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/40 w-fit">
              Tutor matching
            </Badge>

            <h1 className="text-display font-extrabold font-heading text-white tracking-tight leading-tight text-center">
              Get matched with a tutor, selected for your goals.
            </h1>

            <p className="text-base sm:text-lg text-neutral-slate-200 leading-relaxed max-w-2xl mx-auto text-center">
              Tell us what you need. Mr Oyedeji S.T, our Director, matches you with a tutor who is available. A parent or guardian approves every match for learners under 18.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-4 text-xs text-neutral-slate-300">
              <span>Direct coordinator review</span>
              <span>•</span>
              <span>Confirmed availability</span>
              <span>•</span>
              <span>Guardian approval required under 18</span>
            </div>
          </div>
        </div>

        {/* How It Works Editorial Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-service-tutor-700">Step 1</span>
            <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
              Tell us what you need
            </h3>
            <p className="text-sm text-neutral-slate-600 leading-relaxed">
              Share the subject, exam target (WAEC, JAMB, IGCSE), preferred days, format (online or in-person), and budget.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-service-tutor-700">Step 2</span>
            <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
              Director review
            </h3>
            <p className="text-sm text-neutral-slate-600 leading-relaxed">
              Mr Oyedeji S.T reviews your requirements and pairs you with a qualified tutor who fits your schedule.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-service-tutor-700">Step 3</span>
            <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
              Approve and begin
            </h3>
            <p className="text-sm text-neutral-slate-600 leading-relaxed">
              Review the tutor&apos;s background, credentials, and quote. Accept to begin lessons in our supervised online classroom.
            </p>
          </div>
        </div>

        {/* CTA Card to Launch Flow */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-8 sm:p-10 space-y-5">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl font-bold font-heading text-neutral-slate-900">
              Ready to request a tutor match?
            </h2>
            <p className="text-sm sm:text-base text-neutral-slate-600">
              Fill out our simple matching form. No upfront payment required to request a proposal.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link href="/request-tutor/new">
              <Button variant="primary" size="lg" className="w-full sm:w-auto font-semibold px-8 py-3 min-h-[44px]">
                <span>Start tutor request</span>
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold px-6 py-3 min-h-[44px]">
                <span>Matching questions</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
