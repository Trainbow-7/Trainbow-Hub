import * as React from "react";
import Link from "next/link";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-slate-200 bg-white text-neutral-slate-900 mt-auto">
      {/* Top Banner / Safeguarding Trust Note */}
      <div className="bg-neutral-slate-50 border-b border-neutral-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-status-green-600/10 text-status-green-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-slate-900">
                Child Safeguarding & Parental Peace of Mind
              </p>
              <p className="text-xs text-neutral-slate-600">
                All tutors are verified against identity and credentials. Under-18 accounts require guardian consent before booking.
              </p>
            </div>
          </div>
          <Link
            href="/legal/safeguarding"
            className="text-xs font-semibold text-brand-blue-600 hover:text-brand-blue-700 underline underline-offset-4"
          >
            Read our Safeguarding Policy →
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <TrainbowLogo />
            <p className="text-sm text-neutral-slate-600 max-w-sm leading-relaxed">
              Nigeria&apos;s mobile-first online learning hub. Connecting students, parents, and verified tutors with syllabus-aligned mathematics, Socratic AI assistance, and safe virtual classrooms.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy-900">
              <span>Tagline:</span>
              <span className="text-brand-blue-600 font-bold">Learn • Connect • Grow</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-slate-900">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate-600">
              <li>
                <Link href="/academy" className="hover:text-brand-blue-600 transition-colors">
                  Academy (Courses & Quizzes)
                </Link>
              </li>
              <li>
                <Link href="/ai" className="hover:text-service-ai-600 transition-colors">
                  Trainbow AI (Maths Assistant)
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="hover:text-service-tutor-700 transition-colors">
                  Find a Tutor (1-on-1 Lessons)
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-brand-navy-900 transition-colors">
                  Music (Theory & Tuition)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-blue-600 transition-colors">
                  Pricing & AI Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate-600">
              <li>
                <Link href="/about" className="hover:text-brand-blue-600 transition-colors">
                  About Trainbow HUB
                </Link>
              </li>
              <li>
                <Link href="/become-a-tutor" className="hover:text-brand-blue-600 transition-colors">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-blue-600 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue-600 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-slate-900">
              Policies
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate-600">
              <li>
                <Link href="/legal/terms" className="hover:text-brand-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-brand-blue-600 transition-colors">
                  Privacy Notice (NDPA 2023)
                </Link>
              </li>
              <li>
                <Link href="/legal/safeguarding" className="hover:text-brand-blue-600 transition-colors">
                  Child Safeguarding Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refunds" className="hover:text-brand-blue-600 transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-10 pt-8 border-t border-neutral-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-neutral-slate-600">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-blue-600 shrink-0" />
            <span>Support: support@trainbowhub.ng</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-blue-600 shrink-0" />
            <span>Assistance: +234 (0) 800-TRAINBOW</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-blue-600 shrink-0" />
            <span>Lagos, Nigeria · Operating in West Africa Time (WAT)</span>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-neutral-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-slate-600">
          <p>© {new Date().getFullYear()} Trainbow HUB Limited. All rights reserved.</p>
          <p className="text-neutral-slate-600">
            Secure NGN transactions processed via Paystack. Child safety strictly monitored under NDPA 2023 regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
