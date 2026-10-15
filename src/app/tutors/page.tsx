import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TutorDirectory } from "@/components/tutors/TutorDirectory";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Calendar, CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title: "Vetted Tutors Directory — Trainbow HUB",
  description: "Find verified tutors in Nigeria for 1-on-1 Mathematics, Science, and Music tuition. Academic checks and secure Paystack payments.",
};

export default function TutorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12">
        {/* Responsive Two-Column Hero */}
        <section className="rounded-panel bg-gradient-to-br from-brand-navy-900 via-brand-navy-900 to-brand-navy-950 text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-floating">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-service-tutor-700/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-brand-blue-600/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/legal/safeguarding"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-service-tutor-700/80 hover:bg-service-tutor-700 text-white text-xs font-semibold border border-service-tutor-500/50 transition-colors shadow-xs"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-white" />
                  <span>Verified tutors</span>
                </Link>
                <span className="text-xs text-neutral-slate-300 font-medium">
                  4-step verification process
                </span>
              </div>

              <h1 className="text-h1 font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                Find a verified tutor in Nigeria
              </h1>

              <p className="text-small sm:text-body text-neutral-slate-200 leading-relaxed max-w-[60ch]">
                Every educator undergoes identity screening, subject credential vetting, and adheres to our Child Safeguarding Code. Book hourly sessions in naira with transparent rates and 10-minute safe slot holds.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center text-xs text-neutral-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-service-tutor-500 shrink-0" />
                  <span>Transparent rates from ₦4,000/hr</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand-blue-500 shrink-0" />
                  <span>10-min slot hold on booking</span>
                </span>
              </div>
            </div>

            {/* Right Visual Composition (Tutor Stack & Booking Glimpse) */}
            <div className="lg:col-span-5 relative hidden sm:block">
              <div className="relative mx-auto max-w-sm space-y-3">
                {/* Visual Card: Active Booking Hold Glimpse */}
                <div className="rounded-card border border-white/15 bg-white/10 backdrop-blur-md p-4 text-white shadow-soft transition-all hover:border-white/25">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                    <span className="flex items-center gap-1.5 text-brand-blue-200 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      Live Booking Slot Glimpse
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-status-green-600/40 text-green-300 text-[10px] font-bold">
                      Available Today
                    </span>
                  </div>
                  <div className="pt-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">4:00 PM – 5:00 PM (WAT)</p>
                      <p className="text-[11px] text-neutral-slate-300">WAEC / SSCE Mathematics</p>
                    </div>
                    <span className="text-sm font-extrabold text-white">₦7,500/hr</span>
                  </div>
                </div>

                {/* Visual Card: Verified Tutor Preview */}
                <div className="rounded-card border border-service-tutor-500/30 bg-brand-navy-950/80 p-4 text-white shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-service-tutor-700 flex items-center justify-center font-bold text-xs ring-2 ring-service-tutor-500/50">
                      FO
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-bold text-white">Mrs. Folashade Adeleke</p>
                        <ShieldCheck className="h-3 w-3 text-service-tutor-500" />
                      </div>
                      <p className="text-[11px] text-neutral-slate-300">B.Ed Mathematics · Ibadan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directory & Filter Engine */}
        <TutorDirectory />
      </main>

      <Footer />
    </div>
  );
}
