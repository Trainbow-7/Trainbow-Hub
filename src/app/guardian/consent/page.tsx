"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Send,
  KeyRound,
  FileCheck,
} from "lucide-react";

function GuardianConsentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const studentIdParam = searchParams.get("studentId");
  const { user, guardianship, refresh } = useAuth();

  const [otpCode, setOtpCode] = React.useState("");
  const [agreedToSafeguards, setAgreedToSafeguards] = React.useState(true);
  const [resendCooldown, setResendCooldown] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [infoMsg, setInfoMsg] = React.useState<string | null>(null);

  // Student name to display
  const studentName = user?.fullName || "Learner Ward";
  const studentId = studentIdParam || user?.id;

  // Countdown timer for resend
  React.useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleFillDemoOtp = () => {
    setOtpCode("202610");
    setErrorMsg(null);
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setErrorMsg(null);
    setInfoMsg(null);

    try {
      const res = await fetch("/api/auth/guardian/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId }),
      });

      const data = await res.json();
      if (res.ok) {
        setInfoMsg(`A fresh verification passcode has been dispatched to ${data.targetMasked || "your guardian"}.`);
        setResendCooldown(60);
      } else {
        setErrorMsg(data.error || "Failed to resend passcode. Please try again.");
      }
    } catch {
      setErrorMsg("Network error dispatching passcode.");
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);

    if (otpCode.length !== 6) {
      setErrorMsg("Please enter the complete 6-digit verification passcode.");
      return;
    }

    if (!agreedToSafeguards) {
      setErrorMsg("Guardian consent agreement is required to activate this account.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/guardian/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          guardianshipId: guardianship?.id,
          otpCode,
          agreedToSafeguards,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Verification failed. Please check the passcode.");
        setIsLoading(false);
        return;
      }

      await refresh();
      setIsSuccess(true);
      setIsLoading(false);
    } catch {
      setErrorMsg("Network error occurred during verification.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="flex justify-center mb-6">
          <TrainbowLogo />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>NDPA 2023 Section 31 Statutory Safeguard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-slate-900 font-heading">
            Parent / Guardian Verification
          </h1>
          <p className="mt-2 text-sm text-neutral-slate-600">
            Authorizing educational access for minor learner <span className="font-semibold text-neutral-slate-900">{studentName}</span>.
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-6 shadow-sm border border-neutral-slate-200 rounded-2xl sm:px-10">
          {isSuccess ? (
            <div className="text-center space-y-5">
              <div className="mx-auto w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-neutral-slate-900 font-heading">
                Guardian Consent Confirmed!
              </h2>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-left text-xs text-emerald-900 space-y-2">
                <p className="font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-700" />
                  <span>Statutory Compliance Audit Log Recorded</span>
                </p>
                <p>
                  Per the <strong>Nigeria Data Protection Act 2023 Section 31</strong>, parental authorization has been recorded. Full access to curriculum courses, AI math assistance, and verified tutor bookings has been activated.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="primary"
                  onClick={() => router.push("/academy")}
                  className="w-full sm:w-auto"
                >
                  Explore Academy Courses
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/tutors")}
                  className="w-full sm:w-auto"
                >
                  Find a Vetted Tutor
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleVerify} className="space-y-6">
              {errorMsg && (
                <div
                  role="alert"
                  className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-sm text-red-700"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {infoMsg && (
                <div
                  role="status"
                  className="p-3.5 rounded-lg bg-brand-blue-50 border border-brand-blue-200 flex items-start gap-2.5 text-sm text-brand-blue-800"
                >
                  <Send className="w-5 h-5 shrink-0 text-brand-blue-600 mt-0.5" />
                  <span>{infoMsg}</span>
                </div>
              )}

              {/* Legal explanation box */}
              <div className="p-4 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 text-xs text-neutral-slate-600 leading-relaxed">
                <strong className="text-neutral-slate-800 block mb-1">
                  Why is this required?
                </strong>
                Under Nigerian privacy law, online educational platforms must obtain verifiable consent from a parent or legal guardian before processing personal data or delivering interactive tutoring to minors under 18 years of age.
              </div>

              {/* Passcode input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="guardian-otp"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-slate-700"
                  >
                    6-Digit Verification Passcode
                  </label>
                  <button
                    type="button"
                    onClick={handleFillDemoOtp}
                    className="text-xs font-semibold text-brand-blue-600 hover:text-brand-blue-700 underline"
                  >
                    Use Demo Code (202610)
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-slate-400">
                    <KeyRound className="h-5 w-5" />
                  </div>
                  <input
                    id="guardian-otp"
                    type="text"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    inputMode="numeric"
                    required
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/[^0-9]/g, ""))}
                    placeholder="202610"
                    className="flex h-12 w-full tracking-widest text-center text-xl font-bold font-mono rounded-md border border-neutral-slate-200 bg-white px-3 py-2 pl-10 text-neutral-slate-900 placeholder:text-neutral-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600"
                  />
                </div>
                <p className="mt-1.5 text-xs text-neutral-slate-500">
                  Passcode is valid for 15 minutes. Check your guardian SMS or email inbox.
                </p>
              </div>

              {/* Consent checkbox */}
              <div className="p-3.5 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50/50 flex items-start gap-3">
                <input
                  id="consent-checkbox"
                  type="checkbox"
                  checked={agreedToSafeguards}
                  onChange={(e) => setAgreedToSafeguards(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-neutral-slate-300 text-brand-blue-600 focus:ring-brand-blue-500"
                />
                <label
                  htmlFor="consent-checkbox"
                  className="text-xs text-neutral-slate-700 leading-snug cursor-pointer"
                >
                  I confirm that I am the parent or legal guardian of this student. I grant consent under <strong>NDPA 2023 Section 31</strong> and the{" "}
                  <Link href="/legal/safeguarding" className="text-brand-blue-700 underline font-semibold hover:text-brand-blue-900">
                    Child Safeguarding Policy
                  </Link>{" "}
                  for academic tutoring and learning access.
                </label>
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isLoading || otpCode.length !== 6 || !agreedToSafeguards}
                  className="w-full justify-center py-2.5 text-base font-semibold shadow-sm"
                >
                  {isLoading ? "Verifying Passcode..." : "Authorize & Activate Account"}
                </Button>

                <div className="flex items-center justify-between text-xs text-neutral-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Passcode expires in 15 mins</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendCooldown > 0}
                    className="font-medium text-brand-blue-600 hover:text-brand-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {resendCooldown > 0
                      ? `Resend available in ${resendCooldown}s`
                      : "Resend Passcode"}
                  </button>
                </div>
              </div>
            </form>
          )}

          <div className="mt-6 pt-5 border-t border-neutral-slate-100 text-center">
            <Link
              href="/"
              className="text-xs font-medium text-neutral-slate-500 hover:text-neutral-slate-700"
            >
              ← Return to Trainbow HUB Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GuardianConsentPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-neutral-slate-50 text-xs text-neutral-slate-500">Loading consent verification...</div>}>
      <GuardianConsentContent />
    </React.Suspense>
  );
}
