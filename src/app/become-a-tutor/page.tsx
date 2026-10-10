import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  GraduationCap,
  ShieldCheck,
  CreditCard,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Become a Tutor — Trainbow HUB",
  description: "Join Nigeria's vetted educator network. Set your own rates in naira, teach ambitious students, and earn reliable weekly income.",
};

export default function BecomeATutorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero */}
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <Badge variant="tutor" className="bg-service-tutor-700/60 text-white border-service-tutor-500/40">
              Educator Recruitment
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Teach on Trainbow HUB. <br />
              <span className="text-service-tutor-500">Inspire the Next Generation.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-slate-200 leading-relaxed max-w-2xl">
              We connect qualified Nigerian educators with ambitious learners and supportive parents. Set your own hourly rates in naira, teach from anywhere via our virtual classroom, and get paid dependably every week.
            </p>

            <div className="pt-2">
              <Link href="/register">
                <Button variant="primary" size="lg" className="font-semibold text-base px-8 py-3 shadow-lg">
                  Submit Tutor Application
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Benefits of Teaching on Trainbow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-teal-50 text-service-tutor-700 flex items-center justify-center">
              <CreditCard className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Set Your Own Rates
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Charge what your expertise is worth (typically ₦5,000 to ₦15,000/hr). Earnings are calculated from ledger events and paid directly to your Nigerian bank.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
              <Calendar className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Flexible Schedule
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Set your recurring availability slots or add one-off hours. Our concurrency-safe booking engine prevents double-booking automatically.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-purple-50 text-service-ai-600 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Motivated Students
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Teach verified learners preparing for WAEC, JAMB, Cambridge IGCSE, and Common Entrance with engaged parent support.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3">
            <div className="h-10 w-10 rounded-lg bg-status-green-600/10 text-status-green-600 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-neutral-slate-900">
              Safe Virtual Classroom
            </h3>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Conduct high-quality video sessions with integrated attendance tracking, screen sharing, and conduct safeguards.
            </p>
          </div>
        </div>

        {/* 4-Step Vetting & Onboarding Process */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <Badge variant="brand">Vetting Process</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              How to Become an Approved Tutor
            </h2>
            <p className="text-sm text-neutral-slate-600">
              To protect students and maintain instructional excellence, all applicants must pass our 4-stage review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-neutral-slate-700">
            <div className="space-y-2.5">
              <div className="h-8 w-8 rounded-full bg-brand-navy-900 text-white font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Create Profile</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Provide your bio, teaching experience, subjects, target levels (Primary, JSS, SSS, WAEC, JAMB), and hourly rates in naira.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="h-8 w-8 rounded-full bg-brand-navy-900 text-white font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Upload Credentials</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Submit government ID (NIN, Voter&apos;s Card, or Passport), degree certificates (B.Sc, B.Ed, M.Sc), and TRCN certification if available.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="h-8 w-8 rounded-full bg-brand-navy-900 text-white font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Sign Safeguarding Code</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Review and sign our legally binding Child Safeguarding Code of Conduct governing interactions with minors under NDPA 2023.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="h-8 w-8 rounded-full bg-status-green-600 text-white font-bold flex items-center justify-center text-xs">
                4
              </div>
              <h3 className="font-bold text-neutral-slate-900 text-sm">Admin Approval & Go Live</h3>
              <p className="text-neutral-slate-600 leading-relaxed">
                Our verification team reviews your documents. Once approved, your profile and availability appear live in the public directory!
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-slate-100 flex justify-center">
            <Link href="/register">
              <Button variant="primary" size="lg" className="font-bold px-8">
                Start Your Application Now →
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
