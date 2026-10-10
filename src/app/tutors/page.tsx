import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TutorDirectory } from "@/components/tutors/TutorDirectory";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Vetted Tutors Directory — Trainbow HUB",
  description: "Find approved Nigerian educators for 1-on-1 Mathematics, Science, and Music tuition. Verified background checks and secure Paystack payments.",
};

export default function TutorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Hero Section */}
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <Badge variant="tutor" className="gap-1.5">
                <ShieldCheck className="h-3 w-3" />
                100% Vetted Educators
              </Badge>
              <span className="text-xs text-neutral-slate-300">Nigeria-wide directory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Connect with Nigeria&apos;s Top 1-on-1 Tutors
            </h1>

            <p className="text-sm sm:text-base text-neutral-slate-200 leading-relaxed max-w-2xl">
              Every educator has undergone academic verification, identity screening, and signed our strict Child Safeguarding Code. Book hourly sessions in naira with automated reminders and 10-minute safe slot holds.
            </p>
          </div>
        </div>

        {/* Directory & Filter Engine */}
        <TutorDirectory />
      </main>

      <Footer />
    </div>
  );
}
