import * as React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ShieldCheck, Clock, AlertOctagon, PhoneCall, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safeguarding Policy | Trainbow HUB",
  description: "Child safeguarding protocols, tutor vetting standards, and 24-hour incident reporting pipeline at Trainbow HUB.",
};

export default function SafeguardingPolicyPage() {
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

        {/* Incident Reporting Quick Escalation Box */}
        <div className="mb-8 rounded-2xl border-2 border-status-red-600 bg-white p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-status-red-600/10 text-status-red-600 flex items-center justify-center shrink-0">
                <AlertOctagon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-slate-900">
                  24-Hour Emergency Incident Reporting Pipeline
                </h3>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  If you suspect inappropriate conduct, abuse, or any breach of child safety, report immediately:
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="mailto:safeguarding@trainbowhub.ng?subject=URGENT:%20Child%20Safeguarding%20Report"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-status-red-600 hover:bg-status-red-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors text-center"
              >
                Report Incident Now
              </a>
              <a
                href="tel:+23480087246269"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-slate-100 hover:bg-neutral-slate-200 text-neutral-slate-800 font-semibold text-xs rounded-xl transition-colors text-center"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Hotline: +234 800-TRAINBOW
              </a>
            </div>
          </div>
        </div>

        {/* Main Document Card */}
        <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-sm p-6 sm:p-10 text-neutral-slate-800">
          <div className="border-b border-neutral-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-status-green-700">
              Trust & Safety Protocol
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-slate-900 mt-1">
              Child Safeguarding Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-neutral-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Effective Date: October 10, 2026
              </span>
              <span>•</span>
              <span>Framework: Child&apos;s Rights Act & NDPA 2023</span>
              <span>•</span>
              <span>Version: 1.1 (Draft)</span>
            </div>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-slate-700">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                1. Core Safeguarding Principles
              </h2>
              <p>
                Trainbow HUB is committed to creating an uncompromised, secure digital learning environment where every child and young learner is respected, protected, and empowered. Every child, regardless of age, gender, background, or ability, has the right to be protected from harm, abuse, and exploitation.
              </p>
              <p>
                Our policy aligns with the <strong>Child&apos;s Rights Act (2003)</strong> of Nigeria, relevant State Child Rights Laws, the <strong>Nigeria Data Protection Act 2023</strong>, and international digital safeguarding standards.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                2. Multi-Stage Tutor Vetting & Identity Verification
              </h2>
              <p>
                No educator is admitted to our active tutor roster without completing our rigorous four-stage vetting pipeline:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <div className="flex items-center gap-2 font-bold text-neutral-slate-900 text-sm mb-1">
                    <CheckCircle2 className="h-4 w-4 text-status-green-600" />
                    <span>Stage 1: Government KYC</span>
                  </div>
                  <p className="text-xs text-neutral-slate-600">
                    Mandatory National Identity Number (NIN) verification, proof of address, and valid government ID verification.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <div className="flex items-center gap-2 font-bold text-neutral-slate-900 text-sm mb-1">
                    <CheckCircle2 className="h-4 w-4 text-status-green-600" />
                    <span>Stage 2: Academic Credentials</span>
                  </div>
                  <p className="text-xs text-neutral-slate-600">
                    Verification of undergraduate/postgraduate degrees, TRCN certifications, or professional music diplomas.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <div className="flex items-center gap-2 font-bold text-neutral-slate-900 text-sm mb-1">
                    <CheckCircle2 className="h-4 w-4 text-status-green-600" />
                    <span>Stage 3: Live Pedagogical Interview</span>
                  </div>
                  <p className="text-xs text-neutral-slate-600">
                    Live subject-matter demonstration assessing pedagogical depth, clear communication, and digital empathy.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <div className="flex items-center gap-2 font-bold text-neutral-slate-900 text-sm mb-1">
                    <CheckCircle2 className="h-4 w-4 text-status-green-600" />
                    <span>Stage 4: Safeguarding Training</span>
                  </div>
                  <p className="text-xs text-neutral-slate-600">
                    Mandatory completion of our Child Safety & Professional Boundaries certification before receiving lesson bookings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                3. Prohibited Conduct & Professional Boundaries
              </h2>
              <p>
                All tutors, staff, and adult participants must observe strict boundary guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Absolute Ban on Off-Platform Messaging:</strong> Direct unmonitored communication between tutors and minor learners (via WhatsApp, Telegram, personal email, phone calls, or social media) is strictly forbidden.
                </li>
                <li>
                  <strong>No Private Meeting Venues:</strong> All lessons must occur through the authenticated Trainbow HUB virtual classroom. Requesting or agreeing to in-person meetings without express platform facilitation is cause for permanent termination.
                </li>
                <li>
                  <strong>Appropriate Attire and Setting:</strong> Both tutors and students must conduct lessons in appropriate daytime attire within a suitable, well-lit study environment.
                </li>
                <li>
                  <strong>No Personal or Financial Requests:</strong> Tutors may not solicit gifts, personal favors, loans, or side payments directly from learners or families.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                4. Parental Oversight & Guardian Rights
              </h2>
              <p>
                Parents and legal guardians maintain complete visibility and control over their children&apos;s learning experience:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Guardian Portal:</strong> Linked guardians receive instant notifications of all booked lessons, rescheduling requests, and payment receipts.
                </li>
                <li>
                  <strong>Open Lesson Observation:</strong> Guardians possess the permanent right to observe any virtual classroom session live without advance notice.
                </li>
                <li>
                  <strong>Post-Lesson Lesson Summaries:</strong> After each lesson, the tutor must file a syllabus-aligned progress report detailing covered topics, student comprehension, and assigned homework.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                5. 24-Hour Incident Response & Escalation Procedure
              </h2>
              <p>
                When a safeguarding alert or concern is submitted, Trainbow HUB enforces a strict, time-bound protocol:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Immediate Triage (&lt; 2 Hours):</strong> The report is received by the dedicated Safeguarding Lead. If immediate harm or danger is suspected, access for the implicated individual is suspended immediately.
                </li>
                <li>
                  <strong>Formal Investigation (&lt; 24 Hours):</strong> The Safeguarding Team reviews session logs, chat transcripts, and interviews involved parties (with guardian presence for any minor student).
                </li>
                <li>
                  <strong>Resolution & Action:</strong> Depending on findings, actions include permanent platform ban, revocation of credentials, and immediate referral to relevant authorities (such as the Nigeria Police Force or National Agency for the Prohibition of Trafficking in Persons - NAPTIP).
                </li>
                <li>
                  <strong>Guardian Debriefing:</strong> The reporting guardian receives a formal written summary of findings and actions taken.
                </li>
              </ol>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                6. Contacting the Safeguarding Lead
              </h2>
              <div className="bg-neutral-slate-50 p-4 rounded-xl border border-neutral-slate-200 text-sm space-y-1">
                <p><strong>Designated Safeguarding Lead:</strong> Head of Trust & Safety</p>
                <p><strong>Emergency Incident Desk:</strong> safeguarding@trainbowhub.ng</p>
                <p><strong>Emergency Hotline:</strong> +234 (0) 800-TRAINBOW (Available 24/7)</p>
                <p><strong>Operating Headquarters:</strong> Lagos, Nigeria</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 flex items-center justify-between text-xs text-neutral-slate-600 px-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-status-green-600" />
            <span>Dedicated to Child Protection in Digital Learning</span>
          </div>
          <Link href="/legal/refunds" className="text-brand-blue-600 hover:underline">
            Read Refund & Cancellation Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
