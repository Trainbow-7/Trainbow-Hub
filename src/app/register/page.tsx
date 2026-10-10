"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/auth/AuthProvider";
import { calculateAge, isMinorFromDob } from "@/lib/auth/utils";
import {
  ShieldAlert,
  ShieldCheck,
  GraduationCap,
  Users,
  Briefcase,
  AlertCircle,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

type RoleType = "STUDENT" | "PARENT" | "TUTOR";

export default function RegisterPage() {
  const router = useRouter();
  const { refresh } = useAuth();

  const [role, setRole] = React.useState<RoleType>("STUDENT");

  // Common fields
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("+234");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  // Learner fields
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [guardianName, setGuardianName] = React.useState("");
  const [guardianEmail, setGuardianEmail] = React.useState("");
  const [guardianPhone, setGuardianPhone] = React.useState("+234");
  const [guardianRelationship, setGuardianRelationship] = React.useState("Mother");

  // Tutor fields
  const [tutorSubject, setTutorSubject] = React.useState("Senior Secondary Mathematics (WAEC/JAMB)");
  const [tutorBio, setTutorBio] = React.useState("");

  // Parent fields
  const [wardName, setWardName] = React.useState("");
  const [wardDob, setWardDob] = React.useState("");

  // State
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  // Minor detection
  const isMinor = role === "STUDENT" && dateOfBirth ? isMinorFromDob(dateOfBirth) : false;
  const learnerAge = dateOfBirth ? calculateAge(dateOfBirth) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters long.");
      return;
    }

    if (isMinor && !guardianEmail && !guardianPhone) {
      setErrorMsg(
        "Under NDPA 2023, learners under 18 must provide a parent/guardian email or phone number for verification."
      );
      return;
    }

    setIsLoading(true);

    try {
      const payload: Record<string, unknown> = {
        fullName,
        email,
        phoneNumber,
        password,
        role,
      };

      if (role === "STUDENT") {
        payload.dateOfBirth = dateOfBirth;
        if (isMinor) {
          payload.guardianName = guardianName;
          payload.guardianEmail = guardianEmail;
          payload.guardianPhone = guardianPhone;
          payload.guardianRelationship = guardianRelationship;
        }
      } else if (role === "TUTOR") {
        payload.title = tutorSubject;
        payload.bio = tutorBio || "Passionate educator dedicated to student excellence.";
        payload.hourlyRateMinorUnits = 650000;
      } else if (role === "PARENT") {
        payload.wardName = wardName;
        payload.wardDob = wardDob;
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Registration failed. Please check your information.");
        setIsLoading(false);
        return;
      }

      await refresh();

      if (data.requiresGuardianConsent) {
        window.location.href = `/guardian/consent?studentId=${data.user.id}`;
      } else {
        window.location.href = "/";
      }
    } catch {
      setErrorMsg("A network error occurred during registration. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="flex justify-center mb-6">
          <TrainbowLogo />
        </div>
        <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-neutral-slate-900 font-heading">
          Create your Trainbow HUB account
        </h1>
        <p className="mt-2 text-center text-sm text-neutral-slate-600">
          Join thousands of learners, parents, and certified tutors across Nigeria.
        </p>

        {/* Role Selector Tabs */}
        <div className="mt-6 grid grid-cols-3 gap-2 p-1.5 bg-neutral-slate-200/80 rounded-xl" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={role === "STUDENT"}
            onClick={() => {
              setRole("STUDENT");
              setErrorMsg(null);
            }}
            className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              role === "STUDENT"
                ? "bg-white text-brand-blue-700 shadow-xs"
                : "text-neutral-slate-600 hover:text-neutral-slate-900"
            }`}
          >
            <GraduationCap className="w-4 h-4 mb-1" />
            <span>Learner</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={role === "PARENT"}
            onClick={() => {
              setRole("PARENT");
              setErrorMsg(null);
            }}
            className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              role === "PARENT"
                ? "bg-white text-brand-blue-700 shadow-xs"
                : "text-neutral-slate-600 hover:text-neutral-slate-900"
            }`}
          >
            <Users className="w-4 h-4 mb-1" />
            <span>Parent / Guardian</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={role === "TUTOR"}
            onClick={() => {
              setRole("TUTOR");
              setErrorMsg(null);
            }}
            className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              role === "TUTOR"
                ? "bg-white text-brand-blue-700 shadow-xs"
                : "text-neutral-slate-600 hover:text-neutral-slate-900"
            }`}
          >
            <Briefcase className="w-4 h-4 mb-1" />
            <span>Tutor</span>
          </button>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-6 shadow-sm border border-neutral-slate-200 rounded-2xl sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {errorMsg && (
              <div
                role="alert"
                className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-sm text-red-700"
              >
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Full Name */}
            <div>
              <Input
                id="reg-fullname"
                label={role === "PARENT" ? "Parent / Guardian Full Name" : "Full Name"}
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Babatunde Adeleke"
              />
            </div>

            {/* Email Address */}
            <div>
              <Input
                id="reg-email"
                label="Email Address"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. student@trainbowhub.ng"
              />
            </div>

            {/* Phone Number */}
            <div>
              <Input
                id="reg-phone"
                label="Phone Number (WhatsApp-enabled recommended)"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+234 802 000 0000"
                helperText="Used for lesson scheduling SMS reminders."
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="reg-password"
                className="block text-xs font-semibold uppercase tracking-wider text-neutral-slate-700 mb-1.5"
              >
                Password (minimum 8 characters)
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="flex h-10 w-full rounded-md border border-neutral-slate-200 bg-white px-3 py-2 pr-10 text-sm text-neutral-slate-900 placeholder:text-neutral-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-slate-400 hover:text-neutral-slate-600 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Learner Specific: Date of Birth & Minor Safeguard */}
            {role === "STUDENT" && (
              <div className="space-y-4 pt-2 border-t border-neutral-slate-100">
                <div>
                  <Input
                    id="reg-dob"
                    label="Date of Birth"
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    helperText={
                      learnerAge !== null
                        ? `Age: ${learnerAge} years old · ${
                            isMinor
                              ? "Minor (Under 18) — NDPA Guardian Safeguard applies"
                              : "Adult learner (18+) — Direct booking enabled"
                          }`
                        : "Required to verify eligibility and apply appropriate NDPA 2023 safeguarding."
                    }
                  />
                </div>

                {/* NDPA 2023 Minor Safeguard Panel */}
                {isMinor && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-4">
                    <div className="flex items-start gap-2.5">
                      <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <h2 className="text-sm font-bold text-amber-900">
                          Parent / Guardian Consent Required (NDPA 2023 Section 31)
                        </h2>
                        <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                          Because you are under 18 ({learnerAge} years old), Nigerian data protection regulations require consent from a parent or legal guardian. We will dispatch a 6-digit verification passcode to confirm your guardian&apos;s authorization.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <Input
                          id="guardian-name"
                          label="Guardian Full Name"
                          type="text"
                          required
                          value={guardianName}
                          onChange={(e) => setGuardianName(e.target.value)}
                          placeholder="e.g. Chief Emeka Eze"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="guardian-rel"
                          className="block text-xs font-semibold uppercase tracking-wider text-neutral-slate-700 mb-1.5"
                        >
                          Relationship
                        </label>
                        <select
                          id="guardian-rel"
                          value={guardianRelationship}
                          onChange={(e) => setGuardianRelationship(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-neutral-slate-200 bg-white px-3 py-2 text-sm text-neutral-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600"
                        >
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                          <option value="Legal Guardian">Legal Guardian</option>
                          <option value="Other">Other Authorized Relative</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <Input
                          id="guardian-email"
                          label="Guardian Email"
                          type="email"
                          value={guardianEmail}
                          onChange={(e) => setGuardianEmail(e.target.value)}
                          placeholder="guardian@example.com"
                        />
                      </div>
                      <div>
                        <Input
                          id="guardian-phone"
                          label="Guardian Phone"
                          type="tel"
                          value={guardianPhone}
                          onChange={(e) => setGuardianPhone(e.target.value)}
                          placeholder="+234 803 555 4433"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {!isMinor && dateOfBirth && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Adult learner verified (18+). Direct booking and scheduling permissions active upon registration.</span>
                  </div>
                )}
              </div>
            )}

            {/* Parent Specific: Ward Details */}
            {role === "PARENT" && (
              <div className="space-y-4 pt-2 border-t border-neutral-slate-100">
                <div className="p-3.5 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100 text-xs text-brand-blue-900 leading-relaxed">
                  As a parent or guardian, you manage lesson bookings, receive tutor session reports, and approve minor account requests.
                </div>
                <div>
                  <Input
                    id="ward-name"
                    label="Child / Ward Full Name"
                    type="text"
                    value={wardName}
                    onChange={(e) => setWardName(e.target.value)}
                    placeholder="e.g. Kelechi Eze"
                  />
                </div>
                <div>
                  <Input
                    id="ward-dob"
                    label="Child / Ward Date of Birth"
                    type="date"
                    value={wardDob}
                    onChange={(e) => setWardDob(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Tutor Specific: Subject & Qualifications */}
            {role === "TUTOR" && (
              <div className="space-y-4 pt-2 border-t border-neutral-slate-100">
                <div>
                  <label
                    htmlFor="tutor-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-slate-700 mb-1.5"
                  >
                    Primary Teaching Subject
                  </label>
                  <select
                    id="tutor-subject"
                    value={tutorSubject}
                    onChange={(e) => setTutorSubject(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-neutral-slate-200 bg-white px-3 py-2 text-sm text-neutral-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600"
                  >
                    <option value="Senior Secondary Mathematics (WAEC/JAMB)">Senior Secondary Mathematics (WAEC/JAMB)</option>
                    <option value="Further Mathematics & Calculus">Further Mathematics & Calculus</option>
                    <option value="Junior Secondary Mathematics (BECE)">Junior Secondary Mathematics (BECE)</option>
                    <option value="Physics & Engineering Mechanics">Physics & Engineering Mechanics</option>
                    <option value="Music Theory & Piano (ABRSM / MUSON)">Music Theory & Piano (ABRSM / MUSON)</option>
                    <option value="Guitar & Contemporary Music">Guitar & Contemporary Music</option>
                  </select>
                </div>
                <div>
                  <Input
                    id="tutor-bio"
                    label="Professional Bio & Qualifications"
                    type="text"
                    value={tutorBio}
                    onChange={(e) => setTutorBio(e.target.value)}
                    placeholder="e.g. B.Sc Mathematics (Unilag), 8 years WAEC examiner"
                    helperText="All tutor profiles undergo TRCN certificate and NIN national identity verification."
                  />
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              className="w-full justify-center py-2.5 text-base font-semibold shadow-sm mt-4"
            >
              {isLoading
                ? "Creating account..."
                : isMinor
                ? "Create Account & Send Guardian Passcode"
                : "Complete Registration"}
            </Button>
          </form>

          {/* Compliance notice */}
          <div className="mt-6 pt-5 border-t border-neutral-slate-100 flex items-start gap-2 text-xs text-neutral-slate-500">
            <ShieldCheck className="w-4 h-4 text-brand-teal-600 shrink-0 mt-0.5" />
            <p>
              By registering, you agree to the{" "}
              <Link href="/legal/terms" className="text-brand-blue-600 hover:underline">
                Terms of Service
              </Link>
              ,{" "}
              <Link href="/legal/privacy" className="text-brand-blue-600 hover:underline">
                Privacy Notice
              </Link>
              , and{" "}
              <Link href="/legal/safeguarding" className="text-brand-blue-600 hover:underline">
                Child Safeguarding Policy
              </Link>
              .
            </p>
          </div>

          <div className="mt-5 text-center text-sm text-neutral-slate-600">
            <span>Already have an account? </span>
            <Link
              href="/login"
              className="font-semibold text-brand-blue-600 hover:text-brand-blue-700 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-medium text-neutral-slate-500 hover:text-neutral-slate-700"
          >
            ← Back to Trainbow HUB Home
          </Link>
        </div>
      </div>
    </div>
  );
}
