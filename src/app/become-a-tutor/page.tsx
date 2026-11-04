import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Teach with Trainbow HUB",
  description: "Join our educator network. Set your own rates in naira, teach ambitious students, and coordinate through our platform.",
};

export default function BecomeATutorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero */}
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 lg:p-14 relative border border-brand-navy-800 shadow-md text-center">
          <div className="max-w-3xl mx-auto space-y-5 flex flex-col items-center text-center">
            <Badge variant="tutor" className="bg-service-tutor-700/60 text-white border-service-tutor-500/40 w-fit">
              Educators
            </Badge>

            <h1 className="text-display font-extrabold font-heading text-white tracking-tight leading-tight text-center">
              Teach on Trainbow HUB.
            </h1>

            <p className="text-base sm:text-lg text-neutral-slate-200 leading-relaxed max-w-2xl mx-auto text-center">
              We connect qualified educators with motivated learners and supportive parents. Set your own hourly rates in naira and teach scheduled sessions through our online classroom.
            </p>

            <div className="pt-2 flex justify-center">
              <Link href="/register">
                <Button variant="primary" size="lg" className="font-semibold text-base px-8 py-3">
                  Submit tutor application
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits of Teaching */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-lg border border-neutral-slate-200 bg-white p-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-service-tutor-700">Rates</span>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Set your own rates
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Charge what your expertise warrants (typically ₦5,000 to ₦15,000/hr). Earnings are recorded clearly and settled directly to your bank account.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-slate-200 bg-white p-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-service-tutor-700">Availability</span>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Flexible schedule
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Set your recurring availability slots or add one-off hours. Booking rules prevent conflicting slots.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-slate-200 bg-white p-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-service-tutor-700">Learners</span>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Focused learners
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Teach students preparing for WAEC, JAMB, Cambridge IGCSE, and Common Entrance with active parent involvement.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-slate-200 bg-white p-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-service-tutor-700">Safety</span>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Supervised classroom
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Conduct video sessions with attendance tracking, lesson notes, and student safeguarding standards.
            </p>
          </div>
        </div>

        {/* 4-Stage Vetting Process */}
        <div className="rounded-lg border border-neutral-slate-200 bg-white p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <Badge variant="brand">Application stages</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              Application process
            </h2>
            <p className="text-sm text-neutral-slate-600">
              To support student safety and instructional quality, all applicants complete review stages before teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-neutral-slate-700">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-brand-navy-900">Stage 1</span>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Create profile</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Provide your bio, teaching experience, subjects, target levels (Primary, JSS, SSS, WAEC, JAMB), and hourly rates in naira.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-brand-navy-900">Stage 2</span>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Upload credentials</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Submit government ID (NIN, Voter&apos;s Card, or Passport) and academic certificates (degree or teaching certification).
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-brand-navy-900">Stage 3</span>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Sign safeguarding policy</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Review and sign our code of conduct for online teaching and student interactions.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-brand-navy-900">Stage 4</span>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Review &amp; activation</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Our academic team reviews your documents. Once approved, you can receive lesson requests from students and parents.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-slate-100 flex justify-start">
            <Link href="/register">
              <Button variant="primary" size="lg" className="font-bold px-8">
                Start application
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
