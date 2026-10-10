import * as React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ShieldCheck, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Trainbow HUB",
  description: "Terms and conditions governing the use of the Trainbow HUB online learning platform in Nigeria.",
};

export default function TermsOfServicePage() {
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
              Legal Agreement
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-slate-900 mt-1">
              Terms of Service
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-neutral-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Effective Date: October 10, 2026
              </span>
              <span>•</span>
              <span>Jurisdiction: Federal Republic of Nigeria</span>
              <span>•</span>
              <span>Version: 1.1 (Draft)</span>
            </div>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-slate-700">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                1. Acceptance of Terms & Operator Information
              </h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a binding legal agreement between you (&quot;User&quot;, &quot;Student&quot;, &quot;Parent/Guardian&quot;, or &quot;Tutor&quot;) and <strong>Trainbow HUB Limited</strong> (&quot;Trainbow HUB&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated under the laws of the Federal Republic of Nigeria.
              </p>
              <p>
                By creating an account, browsing the catalogue, purchasing a course, booking a tutoring session, or interacting with our Socratic AI features, you agree to be bound by these Terms and our related policies. If you do not agree to these Terms, you must immediately cease accessing the platform.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                2. Age Eligibility & Guardian Consent (NDPA 2023 Compliance)
              </h2>
              <p>
                Trainbow HUB provides educational services designed for primary, secondary, and exam-preparation students. In accordance with the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and the Child&apos;s Rights Act:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minors Under 18 Years:</strong> Students under the age of eighteen (18) may only register and use Trainbow HUB with the verifiable consent of a parent or legal guardian.
                </li>
                <li>
                  <strong>Parental Account Linking:</strong> The parent or guardian must provide verifiable authorization (including SMS/email OTP verification) and maintains supervisory oversight of the student&apos;s account, lesson schedules, and transaction records.
                </li>
                <li>
                  <strong>Adult Learners & Tutors:</strong> Must be at least 18 years of age and possess the legal capacity to enter into binding commercial contracts.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                3. Platform Services & Pedagogical Purpose
              </h2>
              <p>
                Trainbow HUB operates four primary service pillars unified under a single learner profile:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Trainbow Academy:</strong> Syllabus-aligned curriculum courses (WAEC, JAMB, NECO, IGCSE) comprising video lessons, step-by-step walkthroughs, and practice quizzes.
                </li>
                <li>
                  <strong>Trainbow Socratic AI:</strong> An interactive, hint-first artificial intelligence assistant engineered to guide students through quantitative and conceptual problem-solving without directly delivering unearned answers.
                </li>
                <li>
                  <strong>Tutor Marketplace:</strong> A curated directory of vetted Nigerian educators offering real-time 1-on-1 virtual sessions in West Africa Time (WAT).
                </li>
                <li>
                  <strong>Music Tuition:</strong> Performance and theory coaching governed by structured shared practice calendars.
                </li>
              </ol>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                4. Financial Terms, Pricing & Currency
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Nigerian Naira (NGN):</strong> All standard platform transactions are quoted and processed in Nigerian Naira (NGN), with internal accounting calculated in integer kobo to eliminate floating-point discrepancies.
                </li>
                <li>
                  <strong>Payment Processing:</strong> Transactions are processed securely via licensed Nigerian payment gateways (Paystack / central switch partners). Trainbow HUB does not store raw credit/debit card numbers.
                </li>
                <li>
                  <strong>Tutor Marketplace Commission:</strong> Trainbow HUB deducts a standard platform commission (currently fifteen percent — 15%) from completed tutoring sessions to cover hosting, payment processing, infrastructure, and safeguarding administration.
                </li>
                <li>
                  <strong>Slot Hold Expiry:</strong> When a learner initiates a booking, the tutor&apos;s calendar slot is placed on a temporary ten-minute (10-min) hold. If payment is not completed within 10 minutes, the hold automatically expires and releases the slot to other students.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                5. Code of Conduct & Safeguarding Safeguards
              </h2>
              <p>
                Trainbow HUB enforces an absolute zero-tolerance policy regarding any behavior that jeopardizes child safety, academic integrity, or personal dignity:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>No Unmonitored Direct Communication:</strong> Direct off-platform messaging between adult tutors and minor students (including exchange of WhatsApp numbers, social media handles, or private video channels) is strictly prohibited.
                </li>
                <li>
                  <strong>Prohibited Content:</strong> Harassment, discriminatory language, sexual solicitation, examination fraud (such as &quot;miracle center&quot; cheating schemes), or academic malpractice will result in immediate permanent expulsion and reporting to law enforcement authorities.
                </li>
                <li>
                  <strong>Virtual Lesson Monitoring:</strong> Lessons conducted within the virtual classroom may be subject to automated metadata logging and random quality audits by authorized safeguarding officers.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                6. Intellectual Property Rights
              </h2>
              <p>
                All course content, video lectures, diagnostic question banks, platform software, trademarks, logos, and UI designs are the exclusive intellectual property of Trainbow HUB Limited or licensed third-party contributors.
              </p>
              <p>
                Users are granted a limited, non-exclusive, non-transferable, revocable license to access educational materials solely for their own personal, non-commercial academic study. Any reproduction, recording, scraping, or redistribution without prior written consent is strictly prohibited.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                7. Disclaimers of Warranties & Limitation of Liability
              </h2>
              <p>
                Trainbow HUB provides educational enhancement tools. While we meticulously vet tutors and align curriculum with official Nigerian standards (NERDC, WAEC, JAMB syllabus), we do not guarantee specific academic marks, exam scores, or university admission outcomes.
              </p>
              <p>
                To the maximum extent permitted by Nigerian law, Trainbow HUB shall not be liable for any indirect, incidental, punitive, or consequential damages arising from internet service provider downtime, local power interruptions, or unauthorized account access resulting from user negligence.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                8. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. In the event of any dispute, claim, or controversy arising out of or relating to these Terms, the parties shall first attempt to resolve the matter through good-faith mediation at the <strong>Lagos Multi-Door Courthouse (LMDC)</strong>. If unresolved within thirty (30) days, the dispute shall be subject to the exclusive jurisdiction of the competent courts in Lagos State, Nigeria.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                9. Contact & Official Notices
              </h2>
              <p>
                For questions regarding these Terms or formal legal correspondence, please contact:
              </p>
              <div className="bg-neutral-slate-50 p-4 rounded-xl border border-neutral-slate-200 text-sm space-y-1">
                <p><strong>Legal & Compliance Desk:</strong> Trainbow HUB Limited</p>
                <p><strong>Address:</strong> Lagos, Nigeria</p>
                <p><strong>Email:</strong> legal@trainbowhub.ng</p>
                <p><strong>Phone:</strong> +234 (0) 800-TRAINBOW</p>
              </div>
            </section>
          </div>
        </div>

        {/* Safeguarding Footer Note */}
        <div className="mt-8 flex items-center justify-between text-xs text-neutral-slate-600 px-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-status-green-600" />
            <span>Enforced by Trainbow HUB Trust & Safety Team</span>
          </div>
          <Link href="/legal/privacy" className="text-brand-blue-600 hover:underline">
            Read Privacy Notice →
          </Link>
        </div>
      </div>
    </div>
  );
}
