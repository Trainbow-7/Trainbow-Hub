import * as React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ShieldCheck, Clock, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Trainbow HUB",
  description: "Transparent cancellation windows, tutor compensation, and refund timelines for Trainbow HUB lessons and subscriptions.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-neutral-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Mandatory Legal Review Banner */}
        <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 p-4 sm:p-5 shadow-sm" role="alert">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-amber-900 uppercase tracking-wide">
                Regulatory & Legal Notice
              </h2>
              <p className="mt-1 text-sm text-amber-900 leading-relaxed font-medium">
                DRAFT POLICY — Flagged for formal legal review by a qualified Nigerian legal practitioner under the Nigeria Data Protection Act 2023.
              </p>
            </div>
          </div>
        </div>

        {/* Main Document Card */}
        <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-sm p-6 sm:p-10 text-neutral-slate-800">
          <div className="border-b border-neutral-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">
              Commercial Terms
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-slate-900 mt-1">
              Refund & Cancellation Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-neutral-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Effective Date: October 10, 2026
              </span>
              <span>•</span>
              <span>Currency: Nigerian Naira (NGN Minor Kobo Units)</span>
              <span>•</span>
              <span>Version: 1.1 (Draft)</span>
            </div>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-slate-700">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                1. Overview & Fair Balance Principle
              </h2>
              <p>
                At Trainbow HUB, our cancellation and refund policies are designed to maintain mutual fairness between students, parents, and professional tutors. Tutors set aside dedicated instructional slots in their calendars, while students require flexibility for unexpected academic or family scheduling conflicts.
              </p>
              <p>
                All refunds are calculated against the exact payment made in Nigerian Naira (NGN) and tracked to the minor kobo unit to ensure complete transactional transparency.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                2. 1-on-1 Tutoring Cancellation Schedule
              </h2>
              <p>
                When a student or guardian cancels a confirmed tutoring lesson, the following tiered policy applies based on the notice given prior to the scheduled lesson start time:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Tier 1 */}
                <div className="p-5 rounded-2xl border-2 border-status-green-600/30 bg-status-green-50/40 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-status-green-600 text-white text-[11px] font-bold rounded-full mb-3 uppercase tracking-wider">
                      More than 24h
                    </span>
                    <h3 className="font-bold text-neutral-slate-900 text-base">
                      100% Full Refund
                    </h3>
                    <p className="text-xs text-neutral-slate-700 mt-2 leading-relaxed">
                      Cancel at least 24 hours before the lesson to receive a 100% refund or free rebooking credit.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-status-green-600/20 flex items-center gap-1.5 text-xs font-semibold text-status-green-700">
                    <CheckCircle2 className="h-4 w-4" /> Full amount credited
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="p-5 rounded-2xl border-2 border-amber-300 bg-amber-50/40 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-amber-500 text-neutral-slate-900 text-[11px] font-bold rounded-full mb-3 uppercase tracking-wider">
                      12 to 24 Hours
                    </span>
                    <h3 className="font-bold text-neutral-slate-900 text-base">
                      50% Partial Refund
                    </h3>
                    <p className="text-xs text-neutral-slate-700 mt-2 leading-relaxed">
                      50% is refunded to your account; 50% is compensated to the tutor for reserved calendar time.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-amber-300/50 flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                    <RotateCcw className="h-4 w-4" /> Fair 50/50 split
                  </div>
                </div>

                {/* Tier 3 */}
                <div className="p-5 rounded-2xl border-2 border-status-red-200 bg-status-red-50/40 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-status-red-600 text-white text-[11px] font-bold rounded-full mb-3 uppercase tracking-wider">
                      Less than 12 Hours
                    </span>
                    <h3 className="font-bold text-neutral-slate-900 text-base">
                      No Refund (0%)
                    </h3>
                    <p className="text-xs text-neutral-slate-700 mt-2 leading-relaxed">
                      Late cancellations or student no-shows cannot be refunded; 100% lesson fee (minus fee) goes to tutor.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-status-red-200 flex items-center gap-1.5 text-xs font-semibold text-status-red-700">
                    <XCircle className="h-4 w-4" /> Tutor time protected
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                3. Tutor Cancellation or Tutor No-Show
              </h2>
              <div className="bg-brand-blue-50/60 p-4 rounded-xl border border-brand-blue-200">
                <p className="font-semibold text-brand-navy-900 text-sm">
                  100% Immediate Protection Guarantee:
                </p>
                <p className="text-xs sm:text-sm text-neutral-slate-700 mt-1 leading-relaxed">
                  If a tutor cancels a scheduled session at any time, or fails to join the virtual classroom within ten (10) minutes of the start time, the student receives an immediate <strong>100% full refund</strong> or instant lesson rebooking credit, plus priority matching with another verified educator.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                4. Ten-Minute Slot Hold Expiry Window
              </h2>
              <p>
                To prevent calendar blocking and ghost bookings:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When you select a lesson slot, it is placed on a temporary <strong>10-minute hold</strong> for checkout.</li>
                <li>If the Paystack transaction is not successfully completed within 10 minutes, the hold expires automatically.</li>
                <li>The slot is immediately returned to the tutor&apos;s public availability schedule for other learners.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                5. Academy Passes & Digital Course Subscriptions
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>7-Day Satisfaction Guarantee:</strong> Annual or Term Academy subscription passes are eligible for a full refund within seven (7) calendar days of purchase, provided that less than twenty percent (20%) of course content has been accessed.
                </li>
                <li>
                  <strong>Monthly AI Passes:</strong> Due to immediate compute allocation, monthly AI passes (₦3,500/month) are non-refundable once activated, but can be cancelled at any time to prevent auto-renewal for subsequent billing cycles.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                6. Refund Processing Timelines & Disbursement Methods
              </h2>
              <p>
                Approved refunds are processed via our licensed payment gateway partner (Paystack):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Platform Wallet Credit:</strong> Available instantly upon cancellation approval for rebooking alternative lessons or courses.
                </li>
                <li>
                  <strong>Bank Account / Card Reversal:</strong> Typically reflects in your Nigerian bank account within <strong>3 to 5 business days</strong>, subject to standard interbank settlement schedules.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                7. Billing Inquiries & Escalation
              </h2>
              <p>
                If you experience any discrepancy with a lesson charge or refund status, our billing support desk is available to assist:
              </p>
              <div className="bg-neutral-slate-50 p-4 rounded-xl border border-neutral-slate-200 text-sm space-y-1">
                <p><strong>Billing Support:</strong> billing@trainbowhub.ng</p>
                <p><strong>General Support:</strong> support@trainbowhub.ng</p>
                <p><strong>Phone Support:</strong> +234 (0) 800-TRAINBOW</p>
                <p><strong>Resolution SLA:</strong> Within 48 business hours</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 flex items-center justify-between text-xs text-neutral-slate-600 px-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-status-green-600" />
            <span>Guaranteed Fairness for Learners and Educators</span>
          </div>
          <Link href="/pricing" className="text-brand-blue-600 hover:underline">
            View Platform Pricing →
          </Link>
        </div>
      </div>
    </div>
  );
}
