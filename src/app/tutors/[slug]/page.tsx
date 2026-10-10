import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { SEED_TUTORS } from "@/lib/data/seed-data";
import {
  ShieldCheck,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Award,
  Globe,
  ArrowRight,
  AlertCircle,
  FileText,
} from "lucide-react";

export function generateStaticParams() {
  return SEED_TUTORS.map((t) => ({ slug: t.slug }));
}

interface TutorDetailPageProps {
  params: {
    slug: string;
  };
}

export default function TutorDetailPage({ params }: TutorDetailPageProps) {
  const tutor = SEED_TUTORS.find((t) => t.slug === params.slug);

  if (!tutor) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/tutors" className="hover:text-neutral-slate-900">Tutors</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900">{tutor.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tutor Profile Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header Identity Card */}
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar name={tutor.name} size="xl" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold font-heading text-neutral-slate-900">
                        {tutor.name}
                      </h1>
                      <Badge variant="tutor" className="gap-1 text-xs">
                        <ShieldCheck className="h-3 w-3" />
                        Verified
                      </Badge>
                    </div>
                    <p className="text-xs font-semibold text-service-tutor-700 mt-0.5">
                      {tutor.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-neutral-slate-500 mt-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{tutor.location}, {tutor.state}</span>
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto">
                  <span className="text-2xl font-extrabold font-heading text-neutral-slate-900">
                    ₦{(tutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}
                  </span>
                  <span className="text-xs text-neutral-slate-500 block">/ 60-minute lesson</span>
                </div>
              </div>

              {/* Badges / Quick attributes */}
              <div className="flex flex-wrap items-center gap-4 py-3 border-y border-neutral-slate-100 text-xs">
                <Rating value={tutor.rating} count={tutor.completedLessons} />
                <span className="text-neutral-slate-300">•</span>
                <span className="text-neutral-slate-600 font-medium">{tutor.completedLessons} Completed Lessons</span>
                <span className="text-neutral-slate-300">•</span>
                <div className="flex items-center gap-1 text-neutral-slate-600">
                  <Globe className="h-3.5 w-3.5 text-neutral-slate-400" />
                  <span>Languages: {tutor.languages.join(", ")}</span>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <h2 className="font-heading font-bold text-sm text-neutral-slate-900">About the Tutor</h2>
                <p className="text-sm text-neutral-slate-600 leading-relaxed font-sans">{tutor.bio}</p>
              </div>

              {/* Teaching Approach */}
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm text-neutral-slate-900">Teaching Philosophy & Methodology</h3>
                <p className="text-sm text-neutral-slate-600 leading-relaxed font-sans">{tutor.teachingApproach}</p>
              </div>
            </div>

            {/* Qualifications & Vetting Credentials */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-blue-600" />
                <h2 className="font-heading font-bold text-base text-neutral-slate-900">
                  Verified Academic Credentials
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-slate-700">
                {tutor.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0" />
                    <span className="font-medium">{qual}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0" />
                  <span className="font-medium">Signed Trainbow Child Safeguarding Code of Conduct</span>
                </li>
              </ul>
            </div>

            {/* Approved Subjects and Levels */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-4">
              <h2 className="font-heading font-bold text-base text-neutral-slate-900">
                Approved Subjects & Curriculum Levels
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-neutral-slate-500 block mb-1.5">Subjects:</span>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((sub) => (
                      <Badge key={sub} variant="brand" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-slate-500 block mb-1.5">Levels:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {tutor.levels.map((lvl) => (
                      <span key={lvl} className="px-2.5 py-1 rounded bg-neutral-slate-100 text-xs font-medium text-neutral-slate-800">
                        {lvl}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-slate-500 block mb-1.5">Delivery Formats:</span>
                  <div className="flex flex-wrap gap-2">
                    {tutor.deliveryFormats.map((fmt) => (
                      <span key={fmt} className="px-2.5 py-1 rounded border border-teal-200 bg-teal-50 text-xs font-semibold text-service-tutor-700">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation & Refund Terms (PW-03 Requirement) */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-neutral-slate-600" />
                <h2 className="font-heading font-bold text-base text-neutral-slate-900">
                  Cancellation & Rescheduling Policy
                </h2>
              </div>
              <p className="text-xs text-neutral-slate-600 leading-relaxed font-sans">
                {tutor.cancellationPolicy}
              </p>
              <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 text-xs text-neutral-slate-600 space-y-1">
                <p>• <strong>&gt; 24h prior:</strong> 100% refund to student</p>
                <p>• <strong>12h - 24h prior:</strong> 50% refund to student</p>
                <p>• <strong>Tutor cancellation:</strong> Automatic 100% refund, alternative tutor suggested</p>
              </div>
            </div>
          </div>

          {/* Right Column: Availability Calendar & Checkout Card */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-lg space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-neutral-slate-500">Lesson Rate</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">
                    ₦{(tutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}
                  </span>
                  <span className="text-xs text-neutral-slate-500">/ hour</span>
                </div>
              </div>

              {/* Slot Picker Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-slate-900">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-brand-blue-600" />
                    Available Weekly Windows
                  </span>
                  <span className="text-[10px] text-neutral-slate-500 font-mono">WAT Timezone</span>
                </div>

                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Available weekly lesson time slots"
                  className="space-y-2 max-h-60 overflow-y-auto pr-1 focus:outline-none focus:ring-1 focus:ring-brand-blue-600 rounded-lg"
                >
                  {tutor.weeklyAvailability.map((avail) => (
                    <div key={avail.day} className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 text-xs">
                      <span className="font-bold text-neutral-slate-900 block mb-1">{avail.day}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {avail.slots.map((slot) => (
                          <span key={slot} className="px-2 py-0.5 rounded bg-white border border-neutral-slate-300 text-[11px] font-mono text-neutral-slate-700">
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temporary Hold Notice (BK-01 Requirement) */}
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-neutral-slate-900 flex items-start gap-2">
                <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-tight">
                  Slots are held for <strong>10 minutes</strong> during checkout to prevent double-booking.
                </p>
              </div>

              {/* Primary Book CTA */}
              <div className="space-y-2">
                <Link href="/login" className="block w-full">
                  <Button variant="tutor" size="lg" className="w-full justify-center font-bold text-base shadow-sm">
                    Book a Lesson
                  </Button>
                </Link>
                <p className="text-[11px] text-neutral-slate-500 text-center">
                  Protected by Trainbow Child Safeguarding & Escrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
