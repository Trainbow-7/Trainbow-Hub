"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Sparkles,
  BookOpen,
  Calendar,
  DollarSign,
  User,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

const SUBJECT_OPTIONS = [
  "Mathematics",
  "Further Mathematics",
  "English Language",
  "Physics",
  "Chemistry",
  "Biology",
  "Music Theory",
  "Piano / Keyboard",
  "Guitar",
  "Vocal Coaching",
];

const LEVEL_OPTIONS = [
  "Primary (Primary 4-6)",
  "Junior Secondary (JSS 1-3)",
  "Senior Secondary (SS 1-3)",
  "WAEC / SSCE Exam Preparation",
  "JAMB / UTME Speed Drills",
  "Cambridge IGCSE / Checkpoint",
  "A-Levels / JUPEB",
];

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const TIME_SLOTS = [
  "Morning (8:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 4:00 PM)",
  "Evening (4:00 PM - 7:00 PM)",
  "Night (7:00 PM - 9:00 PM)",
];

export default function NewTutorRequestPage() {
  const router = useRouter();
  const { user } = useAuth();

  const [step, setStep] = React.useState<number>(1);
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [submittedRequest, setSubmittedRequest] = React.useState<any | null>(null);

  // Form State
  const [isMinor, setIsMinor] = React.useState<boolean>(user?.isMinor || false);
  const [guardianName, setGuardianName] = React.useState<string>("");
  const [guardianPhone, setGuardianPhone] = React.useState<string>("");
  const [hasGuardianConsent, setHasGuardianConsent] = React.useState<boolean>(false);

  const [subject, setSubject] = React.useState<string>("Mathematics");
  const [level, setLevel] = React.useState<string>("Senior Secondary (SS 1-3)");
  const [examGoal, setExamGoal] = React.useState<string>("WAEC");
  const [topicsNeedingHelp, setTopicsNeedingHelp] = React.useState<string>("");

  const [lessonFormat, setLessonFormat] = React.useState<"ONLINE" | "IN_PERSON" | "EITHER">("ONLINE");
  const [preferredDays, setPreferredDays] = React.useState<string[]>(["Monday", "Wednesday"]);
  const [preferredTimes, setPreferredTimes] = React.useState<string[]>(["Evening (4:00 PM - 7:00 PM)"]);
  const [locationState, setLocationState] = React.useState<string>("Lagos State");
  const [locationArea, setLocationArea] = React.useState<string>("Ikeja / Mainland");

  const [urgency, setUrgency] = React.useState<"WITHIN_48_HOURS" | "THIS_WEEK" | "FLEXIBLE">("WITHIN_48_HOURS");
  const [budgetPerLesson, setBudgetPerLesson] = React.useState<number>(7500);
  const [extraNotes, setExtraNotes] = React.useState<string>("");

  const toggleDay = (day: string) => {
    setPreferredDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleTime = (time: string) => {
    setPreferredTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleSubmit = async () => {
    setErrorMsg(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/tutor-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: user?.id || "usr-std-001",
          subject,
          level,
          examGoal,
          topicsNeedingHelp: topicsNeedingHelp || "Comprehensive curriculum mastery and revision",
          preferredDays,
          preferredTimes,
          lessonFormat,
          locationState: lessonFormat !== "ONLINE" ? locationState : undefined,
          locationArea: lessonFormat !== "ONLINE" ? locationArea : undefined,
          budgetRangeMin: budgetPerLesson * 100,
          budgetRangeMax: (budgetPerLesson + 2500) * 100,
          urgency,
          extraNotes,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        if (data.requiresConsent) {
          setErrorMsg(
            "NDPA 2023 Section 31 requires verified parent/guardian consent for students under 18 before submitting a tutor request."
          );
        } else {
          setErrorMsg(data.error || "Failed to submit request.");
        }
        setSubmitting(false);
        return;
      }

      setSubmittedRequest(data.request);
      setStep(5);
    } catch (err: any) {
      setErrorMsg(err?.message || "An unexpected network error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Breadcrumb / Title */}
        <div className="space-y-2">
          <Link
            href="/request-tutor"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-slate-500 hover:text-neutral-slate-900 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Tutor Concierge</span>
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
                Request a Personal Tutor Match
              </h1>
              <p className="text-xs sm:text-sm text-neutral-slate-600">
                Directly overseen by Mr Oyedeji S.T, Director of Trainbow HUB.
              </p>
            </div>
            {step < 5 && (
              <Badge variant="brand" className="w-fit self-start sm:self-auto">
                Step {step} of 4
              </Badge>
            )}
          </div>
        </div>

        {/* Stepper Indicator */}
        {step < 5 && (
          <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
            {[
              { num: 1, label: "Learner" },
              { num: 2, label: "Goals" },
              { num: 3, label: "Schedule" },
              { num: 4, label: "Review" },
            ].map((s) => (
              <div
                key={s.num}
                className={`py-2 px-3 text-center border-b-2 transition-colors ${
                  step === s.num
                    ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                    : step > s.num
                    ? "border-status-green-600 text-status-green-700"
                    : "border-neutral-slate-200 text-neutral-slate-400"
                }`}
              >
                <span>{s.num}. {s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Submission Blocked</p>
              <p>{errorMsg}</p>
              {isMinor && (
                <Link
                  href="/guardian/consent"
                  className="inline-block mt-1 font-bold underline hover:text-red-950"
                >
                  Verify Guardian Consent Now →
                </Link>
              )}
            </div>
          </div>
        )}

        {/* STEP 1: Learner Profile & NDPA Consent */}
        {step === 1 && (
          <Card className="p-6 sm:p-8 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-lg">Step 1: Learner &amp; Guardian Information</CardTitle>
              <CardDescription className="text-xs text-neutral-slate-500">
                Under NDPA 2023 regulations, we verify guardian identity for learners under 18.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-slate-800">Who will be learning?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsMinor(false)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all min-h-[44px] ${
                      !isMinor
                        ? "border-brand-blue-600 bg-brand-blue-50/60 text-brand-blue-900 ring-1 ring-brand-blue-600"
                        : "border-neutral-slate-200 bg-white hover:bg-neutral-slate-50"
                    }`}
                  >
                    <p className="font-bold">Adult Student (18+)</p>
                    <p className="text-[11px] text-neutral-slate-500 font-normal">Independent learner</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMinor(true)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all min-h-[44px] ${
                      isMinor
                        ? "border-brand-blue-600 bg-brand-blue-50/60 text-brand-blue-900 ring-1 ring-brand-blue-600"
                        : "border-neutral-slate-200 bg-white hover:bg-neutral-slate-50"
                    }`}
                  >
                    <p className="font-bold">Minor Student (Under 18)</p>
                    <p className="text-[11px] text-neutral-slate-500 font-normal">Parent/Guardian supervised</p>
                  </button>
                </div>
              </div>

              {isMinor && (
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <span>NDPA 2023 Section 31 Guardian Verification</span>
                  </div>
                  <p className="text-[11px] text-neutral-slate-600 leading-relaxed">
                    Nigerian data protection law requires parental consent prior to pairing minors with instructors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-slate-700">Guardian Full Name</label>
                      <Input
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        placeholder="e.g. Chief Adeleke"
                        className="mt-1 bg-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-slate-700">Guardian Phone (WhatsApp/SMS)</label>
                      <Input
                        value={guardianPhone}
                        onChange={(e) => setGuardianPhone(e.target.value)}
                        placeholder="+234 803 000 0000"
                        className="mt-1 bg-white text-xs"
                      />
                    </div>
                  </div>
                  <label className="flex items-start gap-2 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasGuardianConsent}
                      onChange={(e) => setHasGuardianConsent(e.target.checked)}
                      className="mt-0.5 rounded border-neutral-slate-300 text-brand-blue-600 focus:ring-brand-blue-500 h-4 w-4"
                    />
                    <span className="text-[11px] text-neutral-slate-700">
                      I confirm I am the parent/legal guardian and consent to personal tutor matching and session coordination under Trainbow HUB child safeguarding standards.
                    </span>
                  </label>
                </div>
              )}

              <div className="flex justify-end pt-4">
                <Button
                  variant="primary"
                  size="md"
                  disabled={isMinor && !hasGuardianConsent}
                  onClick={() => setStep(2)}
                  className="min-h-[44px] px-6"
                >
                  <span>Continue to Academic Goals</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* STEP 2: Subject & Academic Goals */}
        {step === 2 && (
          <Card className="p-6 sm:p-8 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-lg">Step 2: Subject &amp; Academic Focus</CardTitle>
              <CardDescription className="text-xs text-neutral-slate-500">
                Help Mr Oyedeji S.T find the tutor with the exact curriculum specialization.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Target Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-control border border-neutral-slate-300 bg-white px-3 py-2 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600 h-11"
                >
                  {SUBJECT_OPTIONS.map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Current Academic Level</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full rounded-control border border-neutral-slate-300 bg-white px-3 py-2 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600 h-11"
                >
                  {LEVEL_OPTIONS.map((lvl) => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Primary Examination Target</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["WAEC / SSCE", "JAMB UTME", "Cambridge IGCSE", "General Mastery"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setExamGoal(g)}
                      className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all min-h-[44px] ${
                        examGoal === g
                          ? "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-900 ring-1 ring-brand-blue-600"
                          : "border-neutral-slate-200 bg-white hover:bg-neutral-slate-50 text-neutral-slate-700"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">
                  Specific Topics Needing Help (Optional)
                </label>
                <textarea
                  value={topicsNeedingHelp}
                  onChange={(e) => setTopicsNeedingHelp(e.target.value)}
                  placeholder="e.g. Circle Theorems, Calculus, Simultaneous Equations, or Exam Past-Paper Drills"
                  rows={3}
                  className="w-full rounded-control border border-neutral-slate-300 bg-white p-3 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button variant="outline" size="md" onClick={() => setStep(1)} className="min-h-[44px]">
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  <span>Back</span>
                </Button>
                <Button variant="primary" size="md" onClick={() => setStep(3)} className="min-h-[44px] px-6">
                  <span>Continue to Schedule</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* STEP 3: Format & Schedule */}
        {step === 3 && (
          <Card className="p-6 sm:p-8 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-lg">Step 3: Learning Format &amp; Availability</CardTitle>
              <CardDescription className="text-xs text-neutral-slate-500">
                Choose online video classroom or in-person lessons, and select times.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Lesson Delivery Format</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "ONLINE", title: "Online Video", desc: "Monitored virtual classroom" },
                    { id: "IN_PERSON", title: "In-Person", desc: "Home tutor visit" },
                    { id: "EITHER", title: "Either", desc: "Flexible delivery" },
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setLessonFormat(fmt.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all min-h-[44px] ${
                        lessonFormat === fmt.id
                          ? "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-900 ring-1 ring-brand-blue-600"
                          : "border-neutral-slate-200 bg-white hover:bg-neutral-slate-50"
                      }`}
                    >
                      <p className="text-xs font-bold">{fmt.title}</p>
                      <p className="text-[10px] text-neutral-slate-500">{fmt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {lessonFormat !== "ONLINE" && (
                <div className="p-4 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-slate-700">State</label>
                      <Input
                        value={locationState}
                        onChange={(e) => setLocationState(e.target.value)}
                        placeholder="e.g. Lagos State, FCT Abuja, Oyo"
                        className="mt-1 bg-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-slate-700">Area / Neighborhood</label>
                      <Input
                        value={locationArea}
                        onChange={(e) => setLocationArea(e.target.value)}
                        placeholder="e.g. Lekki Phase 1, Ikeja, Bodija"
                        className="mt-1 bg-white text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Preferred Days of the Week</label>
                <div className="flex flex-wrap gap-2">
                  {DAYS_OF_WEEK.map((day) => {
                    const selected = preferredDays.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all min-h-[44px] ${
                          selected
                            ? "bg-brand-blue-600 text-white border-brand-blue-600"
                            : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-neutral-slate-50"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Preferred Times (WAT)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const selected = preferredTimes.includes(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => toggleTime(slot)}
                        className={`p-3 rounded-lg text-left text-xs font-semibold border transition-all min-h-[44px] ${
                          selected
                            ? "bg-brand-blue-50 text-brand-blue-900 border-brand-blue-600 ring-1 ring-brand-blue-600"
                            : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-neutral-slate-50"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button variant="outline" size="md" onClick={() => setStep(2)} className="min-h-[44px]">
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  <span>Back</span>
                </Button>
                <Button variant="primary" size="md" onClick={() => setStep(4)} className="min-h-[44px] px-6">
                  <span>Continue to Review</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* STEP 4: Budget, Urgency & Review */}
        {step === 4 && (
          <Card className="p-6 sm:p-8 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-lg">Step 4: Budget, Urgency &amp; Final Review</CardTitle>
              <CardDescription className="text-xs text-neutral-slate-500">
                Review your request details before submitting to the Director's Matching Desk.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Matching Urgency</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "WITHIN_48_HOURS", title: "Urgent", desc: "Within 48 hours" },
                    { id: "THIS_WEEK", title: "Standard", desc: "This week" },
                    { id: "FLEXIBLE", title: "Flexible", desc: "Planning ahead" },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUrgency(u.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all min-h-[44px] ${
                        urgency === u.id
                          ? "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-900 ring-1 ring-brand-blue-600"
                          : "border-neutral-slate-200 bg-white hover:bg-neutral-slate-50"
                      }`}
                    >
                      <p className="text-xs font-bold">{u.title}</p>
                      <p className="text-[10px] text-neutral-slate-500">{u.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-neutral-slate-800">Target Budget per 60-min Lesson</label>
                  <span className="font-extrabold text-brand-blue-600">₦{budgetPerLesson.toLocaleString("en-NG")}</span>
                </div>
                <input
                  type="range"
                  min="4000"
                  max="20000"
                  step="500"
                  value={budgetPerLesson}
                  onChange={(e) => setBudgetPerLesson(Number(e.target.value))}
                  className="w-full accent-brand-blue-600 cursor-pointer h-2 bg-neutral-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-slate-500">
                  <span>₦4,000</span>
                  <span>₦12,000 (Avg)</span>
                  <span>₦20,000+</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-slate-800">Additional Instructions (Optional)</label>
                <textarea
                  value={extraNotes}
                  onChange={(e) => setExtraNotes(e.target.value)}
                  placeholder="Any particular personality, pacing, or teaching style preferences?"
                  rows={2}
                  className="w-full rounded-control border border-neutral-slate-300 bg-white p-3 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600"
                />
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-brand-navy-950 text-white space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-slate-800 pb-2">
                  <span className="text-xs font-bold text-brand-blue-400">Request Overview</span>
                  <Badge variant="tutor" className="text-[10px]">Concierge</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-slate-400 block">Subject</span>
                    <span className="font-semibold text-white">{subject}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-slate-400 block">Level &amp; Goal</span>
                    <span className="font-semibold text-white">{level} ({examGoal})</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-slate-400 block">Format &amp; Urgency</span>
                    <span className="font-semibold text-white">{lessonFormat} · {urgency}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-slate-400 block">Preferred Days</span>
                    <span className="font-semibold text-white">{preferredDays.join(", ") || "Any"}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button variant="outline" size="md" onClick={() => setStep(3)} className="min-h-[44px]">
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  <span>Back</span>
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  disabled={submitting}
                  onClick={handleSubmit}
                  className="min-h-[44px] px-8 font-bold shadow-md"
                >
                  {submitting ? "Submitting to Director..." : "Submit Tutor Request"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* STEP 5: Success & Live Request Tracker */}
        {step === 5 && submittedRequest && (
          <div className="rounded-2xl border border-status-green-200 bg-white p-6 sm:p-10 space-y-8 shadow-floating">
            <div className="text-center space-y-3 max-w-lg mx-auto">
              <div className="h-14 w-14 rounded-full bg-status-green-100 text-status-green-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black font-heading text-neutral-slate-900">
                Tutor Request Submitted!
              </h2>
              <p className="text-xs text-neutral-slate-600">
                Your request has been routed to Mr Oyedeji S.T, Director of Trainbow HUB, for personal matching from our private roster.
              </p>
            </div>

            {/* Reference & SLA Badge */}
            <div className="p-4 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500 block">
                  Reference Code
                </span>
                <span className="text-lg font-black text-brand-blue-700 tracking-wide font-mono">
                  {submittedRequest.referenceCode}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-slate-200 text-xs text-neutral-slate-700 shadow-xs">
                <Clock className="w-4 h-4 text-brand-blue-600" />
                <span>Target Match SLA: <strong>Under 24 Hours</strong></span>
              </div>
            </div>

            {/* Visual Lifecycle Stepper */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-neutral-slate-800">Request Lifecycle</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-status-green-300 bg-status-green-50 text-status-green-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-status-green-600" />
                    <span>1. Received</span>
                  </div>
                  <p className="text-[10px] text-status-green-700">Request logged in Matching Desk queue</p>
                </div>

                <div className="p-3 rounded-lg border border-brand-blue-300 bg-brand-blue-50/50 text-brand-blue-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5 text-brand-blue-600 animate-pulse" />
                    <span>2. Matching</span>
                  </div>
                  <p className="text-[10px] text-neutral-slate-600">Director reviewing private tutor availability</p>
                </div>

                <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 text-neutral-slate-500 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <User className="w-3.5 h-3.5" />
                    <span>3. Proposal</span>
                  </div>
                  <p className="text-[10px]">Tutor background &amp; quote sent for your review</p>
                </div>

                <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 text-neutral-slate-500 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>4. Confirmed</span>
                  </div>
                  <p className="text-[10px]">Parent approval &amp; classroom activation</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full min-h-[44px] px-6">
                  <span>Track in My Dashboard</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/request-tutor" className="w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full min-h-[44px]">
                  <span>Back to Overview</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
