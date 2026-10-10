import * as React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ShieldCheck, Clock, Lock, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice (NDPA 2023) | Trainbow HUB",
  description: "Privacy Notice and data protection disclosures in compliance with the Nigeria Data Protection Act 2023.",
};

export default function PrivacyNoticePage() {
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
              Regulatory Compliance
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-slate-900 mt-1">
              Privacy Notice & Data Protection Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-neutral-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Effective Date: October 10, 2026
              </span>
              <span>•</span>
              <span>Governing Statute: Nigeria Data Protection Act (NDPA) 2023</span>
              <span>•</span>
              <span>Version: 1.1 (Draft)</span>
            </div>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-slate-700">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                1. Data Controller & Designated Data Protection Officer
              </h2>
              <p>
                <strong>Trainbow HUB Limited</strong> (&quot;Trainbow HUB&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates as a Data Controller and Data Processor in accordance with the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong>.
              </p>
              <div className="bg-neutral-slate-50 p-4 rounded-xl border border-neutral-slate-200 text-sm space-y-1">
                <p><strong>Designated Data Protection Officer (DPO):</strong> Compliance Desk</p>
                <p><strong>Official Address:</strong> Lagos, Nigeria</p>
                <p><strong>Direct DPO Email:</strong> dpo@trainbowhub.ng</p>
                <p><strong>Regulatory Oversight:</strong> Nigeria Data Protection Commission (NDPC)</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                2. Categories of Personal Data Collected
              </h2>
              <p>
                We adhere strictly to the principle of data minimization, collecting only information necessary to deliver educational instruction, ensure child safety, and execute lawful financial settlements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <h3 className="font-bold text-neutral-slate-900 text-sm mb-2">Students & Learners</h3>
                  <ul className="text-xs space-y-1.5 text-neutral-slate-700">
                    <li>• First and last name</li>
                    <li>• Age, grade level (Primary 1–6, JSS 1–3, SS 1–3)</li>
                    <li>• Course enrolment & quiz score analytics</li>
                    <li>• Socratic AI interaction transcripts</li>
                    <li>• Associated guardian contact link</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <h3 className="font-bold text-neutral-slate-900 text-sm mb-2">Parents & Guardians</h3>
                  <ul className="text-xs space-y-1.5 text-neutral-slate-700">
                    <li>• Full legal name</li>
                    <li>• Verified Nigerian telephone number (SMS OTP)</li>
                    <li>• Verified email address</li>
                    <li>• Paystack transaction reference receipts</li>
                    <li>• Booking consent records for linked minors</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <h3 className="font-bold text-neutral-slate-900 text-sm mb-2">Tutors & Educators</h3>
                  <ul className="text-xs space-y-1.5 text-neutral-slate-700">
                    <li>• National Identity Number (NIN) verification</li>
                    <li>• Academic credentials & degree certificates</li>
                    <li>• Bio, profile photo & introductory video</li>
                    <li>• Nigerian bank settlement account (for manual payouts)</li>
                    <li>• Student rating & feedback records</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50">
                  <h3 className="font-bold text-neutral-slate-900 text-sm mb-2">Automated Technical Data</h3>
                  <ul className="text-xs space-y-1.5 text-neutral-slate-700">
                    <li>• IP address and general geographic locality</li>
                    <li>• Device type, browser environment & OS</li>
                    <li>• Essential session cookies (for security & authentication)</li>
                    <li>• Audit logs for safeguarding events</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900 flex items-center gap-2">
                <Lock className="h-5 w-5 text-status-green-600" />
                3. Protection of Children&apos;s Data (NDPA Section 31)
              </h2>
              <p>
                The processing of personal data relating to children is subject to the highest duty of care under Section 31 of the NDPA 2023:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Mandatory Guardian Consent:</strong> A minor cannot activate an account or complete any booking without verifiable parental/guardian authorization validated via one-time SMS/email passcode (OTP).
                </li>
                <li>
                  <strong>Absence of Behavioral Advertising:</strong> Minor profiles are never profiled for behavioral or commercial advertising. No third-party ad networks or marketing trackers are loaded on learner dashboards.
                </li>
                <li>
                  <strong>Safeguarding Messaging Restrictions:</strong> Minor accounts cannot receive unsolicited messages. All tutor interactions are bound to scheduled virtual classroom sessions with full guardian audit trails.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                4. AI Gateway & Data Anonymization Standards
              </h2>
              <p>
                Trainbow HUB deploys an isolated server-side AI Gateway to power the Socratic Mathematics assistant:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Zero Student PII Transmission:</strong> When a learner submits a math question, the AI Gateway strips all personal identifiers (names, emails, user IDs, location) before passing the quantitative prompt to foundational model APIs.
                </li>
                <li>
                  <strong>No Model Training:</strong> All commercial model agreements explicitly forbid the provider from retaining learner prompts for foundation model training or commercial fine-tuning.
                </li>
                <li>
                  <strong>Programmatic Verification:</strong> Mathematical equations are parsed through deterministic server-side evaluation engines to verify factual correctness and eliminate hallucinations before returning guidance.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                5. Third-Party Service Providers (Data Processors)
              </h2>
              <p>
                We share data only with verified sub-processors bound by strict Data Processing Agreements (DPAs):
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 bg-neutral-slate-50 rounded-lg border border-neutral-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-brand-blue-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-slate-900 text-sm">Paystack (Payments): </span>
                    <span className="text-xs text-neutral-slate-600">
                      PCI-DSS Level 1 compliant gateway processing NGN card and bank transfer transactions.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-neutral-slate-50 rounded-lg border border-neutral-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-brand-blue-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-slate-900 text-sm">Termii / Resend (Communications): </span>
                    <span className="text-xs text-neutral-slate-600">
                      Licensed Nigerian telecommunication and email gateways for delivery of time-sensitive guardian OTPs and lesson reminders.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                6. Data Subject Rights Under the NDPA 2023
              </h2>
              <p>
                Nigerian data subjects (and authorized parents acting on behalf of minor wards) hold enforceable statutory rights under the NDPA:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Confirmation & Access:</strong> Request a copy of all personal and academic records maintained by the platform.</li>
                <li><strong>Right to Rectification:</strong> Require prompt correction of inaccurate or incomplete profile or qualification information.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of account data, subject to lawful financial retention obligations.</li>
                <li><strong>Right to Object or Restrict Processing:</strong> Request suspension of specific data processing activities.</li>
                <li><strong>Right to Lodge a Complaint:</strong> In the event of an unresolved grievance, you have the statutory right to file a formal petition with the <strong>Nigeria Data Protection Commission (NDPC)</strong> at <em>info@ndpc.gov.ng</em>.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                7. Data Retention & Information Security
              </h2>
              <p>
                We implement bank-grade security protocols, including AES-256 data encryption at rest, TLS 1.3 encryption in transit, strict role-based access controls (RBAC), and immutable append-only ledgers for all financial transactions.
              </p>
              <p>
                Academic progress records are retained for the duration of the student&apos;s active learning journey. Inactive accounts may be archived after twenty-four (24) continuous months of inactivity, following advance email notice.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-neutral-slate-900">
                8. Exercising Your Rights
              </h2>
              <p>
                To exercise any of your statutory rights or submit an inquiry to our Data Protection Officer, please submit a formal request to:
              </p>
              <p className="font-mono text-xs bg-neutral-slate-100 p-3 rounded-lg border border-neutral-slate-200">
                Email: dpo@trainbowhub.ng · Subject: [NDPA Data Request] · Response SLA: 72 hours
              </p>
            </section>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 flex items-center justify-between text-xs text-neutral-slate-600 px-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-status-green-600" />
            <span>NDPA 2023 Compliant Learning Platform</span>
          </div>
          <Link href="/legal/safeguarding" className="text-brand-blue-600 hover:underline">
            Read Safeguarding Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
