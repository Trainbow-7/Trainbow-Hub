"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  ShieldAlert,
  Users,
  GraduationCap,
  Calendar,
  Clock,
  BookOpen,
  Award,
  Video,
  Receipt,
  Bell,
  Lock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Plus,
  Trash2,
  ExternalLink,
  Smartphone,
  Mail,
  MessageSquare,
  Sparkles,
  FileText,
  ChevronRight,
  Flame,
  Check,
  X,
  CreditCard,
} from "lucide-react";

export type GuardianTab = "children" | "timetable" | "notes" | "receipts" | "notifications";

export default function GuardianPortalPage() {
  const { user, refresh, isLoading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<GuardianTab>("children");
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Data states
  const [children, setChildren] = useState<any[]>([]);
  const [timetable, setTimetable] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [preferences, setPreferences] = useState<any>({
    emailAlerts: true,
    smsAlerts: true,
    whatsappAlerts: false,
    genericLockscreenPreviews: true,
    digestFrequency: "REALTIME",
  });

  // Link ward form state
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkEmail, setLinkEmail] = useState("");
  const [linkOtp, setLinkOtp] = useState("");
  const [linkRelationship, setLinkRelationship] = useState("Legal Guardian");
  const [linkLoading, setLinkLoading] = useState(false);

  // Revocation state
  const [revokingChildId, setRevokingChildId] = useState<string | null>(null);

  // Receipt modal state
  const [activeReceipt, setActiveReceipt] = useState<any | null>(null);

  // Quick Parent Sign-In for demo evaluation
  const handleParentSignIn = async () => {
    setLoading(true);
    setNotice(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "parent@trainbowhub.ng", password: "Trainbow2026!" }),
      });
      if (res.ok) {
        await refresh();
        setNotice({ message: "Signed in as Chief Emeka Eze (Verified Parent/Guardian)", type: "success" });
      } else {
        setNotice({ message: "Sign-in failed. Please check credentials.", type: "error" });
      }
    } catch {
      setNotice({ message: "Network error during sign-in", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // Fetch all guardian portal data
  const fetchData = useCallback(async () => {
    if (!user || (user.role !== "PARENT" && user.role !== "ADMIN")) return;
    setLoading(true);
    try {
      const [childRes, timeRes, notesRes, finRes, prefRes] = await Promise.all([
        fetch("/api/guardian/children"),
        fetch("/api/guardian/timetable"),
        fetch("/api/guardian/notes"),
        fetch("/api/guardian/financials"),
        fetch("/api/guardian/notifications"),
      ]);

      if (childRes.ok) {
        const d = await childRes.json();
        setChildren(d.children || []);
      }
      if (timeRes.ok) {
        const d = await timeRes.json();
        setTimetable(d.timetable || []);
      }
      if (notesRes.ok) {
        const d = await notesRes.json();
        setNotes(d.notes || []);
      }
      if (finRes.ok) {
        const d = await finRes.json();
        setTransactions(d.transactions || []);
      }
      if (prefRes.ok) {
        const d = await prefRes.json();
        if (d.preferences) setPreferences(d.preferences);
      }
    } catch (e) {
      console.error("Failed to load guardian data", e);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle Child Linking
  const handleLinkChild = async (e: React.FormEvent) => {
    e.preventDefault();
    setLinkLoading(true);
    setNotice(null);
    try {
      const res = await fetch("/api/guardian/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentEmail: linkEmail,
          otpCode: linkOtp,
          relationship: linkRelationship,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNotice({ message: data.message || "Ward linked successfully!", type: "success" });
        setShowLinkModal(false);
        setLinkEmail("");
        setLinkOtp("");
        await fetchData();
      } else {
        setNotice({ message: data.error || "Failed to link ward", type: "error" });
      }
    } catch {
      setNotice({ message: "Network error during child linking", type: "error" });
    } finally {
      setLinkLoading(false);
    }
  };

  // Handle Revoking Access
  const handleRevokeAccess = async (studentId: string) => {
    if (!confirm("Are you sure you want to revoke guardian access for this ward? Access will be severed immediately per NDPA 2023.")) {
      return;
    }
    setLoading(true);
    setNotice(null);
    try {
      const res = await fetch("/api/guardian/access", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          reason: "Guardian self-service revocation from portal",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNotice({ message: data.message || "Guardian access revoked immediately.", type: "success" });
        await fetchData();
      } else {
        setNotice({ message: data.error || "Failed to revoke access", type: "error" });
      }
    } catch {
      setNotice({ message: "Network error during access revocation", type: "error" });
    } finally {
      setLoading(false);
      setRevokingChildId(null);
    }
  };

  // Handle Saving Notification Preferences
  const handleSavePreferences = async () => {
    setLoading(true);
    setNotice(null);
    try {
      const res = await fetch("/api/guardian/notifications", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(preferences),
      });
      const data = await res.json();
      if (res.ok) {
        setNotice({ message: "Notification preferences saved with NDPA privacy protections active.", type: "success" });
        if (data.preferences) setPreferences(data.preferences);
      } else {
        setNotice({ message: data.error || "Failed to save preferences", type: "error" });
      }
    } catch {
      setNotice({ message: "Network error updating preferences", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // Format currency in Nigerian Naira
  const formatNgn = (minorUnits: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(minorUnits / 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900 pb-16">
      <Navbar />

      {/* Top Banner & Title Bar */}
      <div className="bg-white border-b border-neutral-slate-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-900" />
                  NDPA 2023 & Child Rights Act Compliant
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-950 border border-emerald-300">
                  <Lock className="w-3 h-3 text-emerald-800" />
                  Verified Guardian Oversight
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-slate-900 mt-2 tracking-tight">
                Parent & Guardian Oversight Portal
              </h1>
              <p className="text-sm text-neutral-slate-600 mt-1">
                Monitor your linked wards&apos; curriculum mastery, live classes, tutor feedback, and financial receipts.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={fetchData}
                disabled={loading}
                className="gap-2 border-neutral-slate-300 hover:bg-neutral-slate-100 text-neutral-slate-800"
                data-testid="guardian-refresh-button"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-brand-blue-600" : "text-neutral-slate-600"}`} />
                <span>Refresh</span>
              </Button>

              {(!user || user.role !== "PARENT") && (
                <Button
                  size="sm"
                  onClick={handleParentSignIn}
                  disabled={loading}
                  className="bg-amber-800 hover:bg-amber-900 text-white font-semibold shadow-xs"
                  data-testid="guardian-quick-signin"
                >
                  <Users className="w-4 h-4 mr-1.5" />
                  <span>Demo Parent Sign-In</span>
                </Button>
              )}
            </div>
          </div>

          {/* Feedback Notice */}
          {notice && (
            <div
              className={`mt-4 p-3.5 rounded-lg border text-sm flex items-center justify-between transition-all ${
                notice.type === "success"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-red-50 border-red-300 text-red-950"
              }`}
              data-testid="guardian-notice-banner"
            >
              <div className="flex items-center gap-2">
                {notice.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
                )}
                <span className="font-medium">{notice.message}</span>
              </div>
              <button
                onClick={() => setNotice(null)}
                className="text-neutral-slate-500 hover:text-neutral-slate-800 p-1 rounded-md"
                aria-label="Dismiss notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Primary Navigation Tabs */}
          <nav
            className="flex items-center space-x-2 sm:space-x-4 border-b border-neutral-slate-200 mt-6 overflow-x-auto text-sm font-semibold"
            aria-label="Guardian portal sections"
          >
            <button
              onClick={() => setActiveTab("children")}
              className={`pb-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === "children"
                  ? "border-amber-600 text-amber-950 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
              data-testid="tab-guardian-children"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Linked Wards ({children.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("timetable")}
              className={`pb-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === "timetable"
                  ? "border-amber-600 text-amber-950 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
              data-testid="tab-guardian-timetable"
            >
              <Calendar className="w-4 h-4" />
              <span>Timetable & Live Observer</span>
            </button>

            <button
              onClick={() => setActiveTab("notes")}
              className={`pb-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === "notes"
                  ? "border-amber-600 text-amber-950 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
              data-testid="tab-guardian-notes"
            >
              <FileText className="w-4 h-4" />
              <span>Tutor Notes & Homework ({notes.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("receipts")}
              className={`pb-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === "receipts"
                  ? "border-amber-600 text-amber-950 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
              data-testid="tab-guardian-receipts"
            >
              <Receipt className="w-4 h-4" />
              <span>Payment Receipts ({transactions.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("notifications")}
              className={`pb-3 px-3 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === "notifications"
                  ? "border-amber-600 text-amber-950 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
              data-testid="tab-guardian-notifications"
            >
              <Bell className="w-4 h-4" />
              <span>Privacy & Alerts (NDPA)</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Role Check Warning if user is not PARENT */}
        {user && user.role !== "PARENT" && user.role !== "ADMIN" && (
          <div className="mb-6 p-4 rounded-xl border border-amber-300 bg-amber-50 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Learner Account Active: {user.fullName}</p>
                <p className="text-xs text-amber-900 mt-0.5">
                  You are logged in as a learner. To evaluate parent portal features, sign in as Chief Emeka Eze.
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={handleParentSignIn}
              className="bg-amber-700 hover:bg-amber-800 text-white font-semibold shrink-0"
            >
              Switch to Demo Parent Account
            </Button>
          </div>
        )}

        {/* TAB 1: LINKED WARDS & PROGRESS (PP-01) */}
        {activeTab === "children" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-xl font-bold text-neutral-slate-900">Verified Linked Wards</h2>
                <p className="text-sm text-neutral-slate-600">
                  Per NDPA 2023 Section 31, guardian oversight is strictly restricted to verified wards.
                </p>
              </div>
              <Button
                onClick={() => setShowLinkModal(true)}
                className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold gap-1.5 shadow-xs"
                data-testid="link-ward-button"
              >
                <Plus className="w-4 h-4" />
                <span>Link Additional Ward</span>
              </Button>
            </div>

            {children.length === 0 ? (
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-8 text-center">
                <Users className="w-12 h-12 text-neutral-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-neutral-slate-800">No Verified Wards Found</h3>
                <p className="text-sm text-neutral-slate-600 max-w-md mx-auto mt-1 mb-4">
                  Link a ward account using the student&apos;s registered email and 6-digit verification code.
                </p>
                <Button onClick={() => setShowLinkModal(true)} className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white">
                  Link First Ward
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {children.map((ward) => (
                  <div
                    key={ward.student.id}
                    className="bg-white rounded-xl border border-neutral-slate-200 shadow-xs overflow-hidden flex flex-col justify-between"
                    data-testid={`ward-card-${ward.student.id}`}
                  >
                    {/* Header */}
                    <div className="p-5 border-b border-neutral-slate-100 bg-neutral-slate-50/50 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-brand-blue-100 text-brand-blue-800 font-extrabold flex items-center justify-center text-base border border-brand-blue-200">
                          {ward.student.fullName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-neutral-slate-900">{ward.student.fullName}</h3>
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-950 border border-emerald-300">
                              Verified
                            </span>
                          </div>
                          <p className="text-xs text-neutral-slate-500">
                            {ward.student.email} · {ward.guardianship.relationship}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRevokeAccess(ward.student.id)}
                        className="text-xs font-semibold text-red-700 hover:text-red-900 hover:bg-red-50 p-2 rounded-lg border border-transparent hover:border-red-200 transition-colors flex items-center gap-1"
                        title="Revoke guardian access immediately per NDPA 2023"
                        data-testid={`revoke-ward-btn-${ward.student.id}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Revoke Access</span>
                      </button>
                    </div>

                    {/* Progress Metrics Body */}
                    <div className="p-5 space-y-5">
                      {/* Course Completion */}
                      <div>
                        <div className="flex items-center justify-between text-xs font-semibold text-neutral-slate-600 mb-1.5">
                          <span className="flex items-center gap-1 text-neutral-slate-800 font-bold">
                            <BookOpen className="w-3.5 h-3.5 text-brand-blue-600" />
                            Active Course Curriculum
                          </span>
                          <span>
                            {ward.courses.length > 0 ? `${ward.courses[0].progressPercentage}% Complete` : "Not Enrolled"}
                          </span>
                        </div>
                        {ward.courses.length > 0 ? (
                          <div>
                            <div className="w-full bg-neutral-slate-100 rounded-full h-2.5 overflow-hidden">
                              <div
                                className="bg-brand-blue-600 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${ward.courses[0].progressPercentage}%` }}
                              />
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-neutral-slate-500 mt-1">
                              <span className="truncate max-w-[240px] font-medium text-neutral-slate-700">
                                {ward.courses[0].courseSlug.replace(/-/g, " ").toUpperCase()}
                              </span>
                              <span>{ward.courses[0].completedLessonCount} lessons finished</span>
                            </div>
                          </div>
                        ) : (
                          <div className="text-xs text-neutral-slate-500 italic">No courses currently active.</div>
                        )}
                      </div>

                      {/* Diagnostic Quizzes & Topic Recommendations */}
                      <div className="p-3.5 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-neutral-slate-800 flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-purple-600" />
                            Quiz Performance
                          </span>
                          <span className="text-xs font-extrabold text-neutral-slate-900">
                            Avg: {ward.quizzes.averageScore}% ({ward.quizzes.totalAttempts} attempts)
                          </span>
                        </div>
                        {ward.quizzes.recommendedTopics && ward.quizzes.recommendedTopics.length > 0 && (
                          <div className="text-xs pt-1 border-t border-neutral-slate-200/80">
                            <span className="text-neutral-slate-600 font-medium">Recommended Revision Focus: </span>
                            <span className="font-semibold text-purple-900 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200 inline-block mt-0.5">
                              {ward.quizzes.recommendedTopics.join(", ")}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Activity & AI Quota Grid */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200 flex items-center gap-2.5">
                          <Flame className="w-5 h-5 text-amber-600 shrink-0" />
                          <div>
                            <div className="font-extrabold text-neutral-slate-900 text-sm">{ward.studyStats.streakDays} Days</div>
                            <div className="text-[11px] text-neutral-slate-600">{ward.studyStats.totalMinutesStudied} mins studied</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 flex items-center gap-2.5">
                          <Sparkles className="w-5 h-5 text-brand-blue-600 shrink-0" />
                          <div>
                            <div className="font-extrabold text-neutral-slate-900 text-sm">
                              {ward.aiQuota.queriesUsedToday} / {ward.aiQuota.dailyLimit}
                            </div>
                            <div className="text-[11px] text-neutral-slate-600">Daily AI Queries Used</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 bg-neutral-slate-50 border-t border-neutral-slate-100 flex items-center justify-between text-xs">
                      <span className="text-neutral-slate-500">
                        Consent active since {new Date(ward.guardianship.consentGivenAt || Date.now()).toLocaleDateString("en-NG")}
                      </span>
                      <button
                        onClick={() => setActiveTab("timetable")}
                        className="text-brand-blue-600 hover:text-brand-blue-800 font-bold flex items-center gap-1"
                      >
                        <span>View Timetable</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: TIMETABLE & OBSERVER ENTRY (PP-02) */}
        {activeTab === "timetable" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-neutral-slate-900">Upcoming Lessons & Live Observer Entry</h2>
              <p className="text-sm text-neutral-slate-600">
                Guardians can enter live virtual classrooms as verified silent observers with 1 tap per Child Rights Act.
              </p>
            </div>

            {timetable.length === 0 ? (
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-8 text-center">
                <Calendar className="w-12 h-12 text-neutral-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-neutral-slate-800">No Scheduled Lessons</h3>
                <p className="text-sm text-neutral-slate-600 mt-1">
                  When your wards book 1-on-1 tutoring sessions, they will automatically appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {timetable.map((item) => (
                  <div
                    key={item.bookingId}
                    className="bg-white rounded-xl border border-neutral-slate-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                    data-testid={`timetable-item-${item.bookingId}`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-base text-neutral-slate-900">{item.subject}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-blue-50 text-brand-blue-900 border border-brand-blue-200">
                          Ward: {item.studentName}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                            item.attendanceStatus === "ATTENDED"
                              ? "bg-emerald-50 text-emerald-950 border-emerald-300"
                              : item.attendanceStatus === "UPCOMING"
                              ? "bg-blue-50 text-blue-950 border-blue-300"
                              : "bg-neutral-slate-100 text-neutral-slate-800 border-neutral-slate-200"
                          }`}
                        >
                          Status: {item.attendanceStatus}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-slate-600 flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1 font-medium text-neutral-slate-800">
                          <Users className="w-3.5 h-3.5 text-neutral-slate-500" />
                          Tutor: {item.tutorName}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-neutral-slate-500" />
                          Date: {item.slotDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-slate-500" />
                          Time: {item.slotTime} (WAT)
                        </span>
                        {item.durationSeconds > 0 && (
                          <span className="text-emerald-950 font-bold">
                            Logged Duration: {Math.round(item.durationSeconds / 60)} mins
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* PP-02 1-Tap Guardian Observer Entry */}
                      <Link
                        href={item.observerLink}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs shadow-xs transition-colors"
                        data-testid="guardian-observer-link"
                      >
                        <Video className="w-4 h-4" />
                        <span>Enter as Observer</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: TUTOR NOTES & HOMEWORK (PP-04) */}
        {activeTab === "notes" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-neutral-slate-900">Post-Lesson Tutor Progress Notes</h2>
              <p className="text-sm text-neutral-slate-600">
                Qualitative feedback, conceptual strengths, diagnostic areas for improvement, and assigned homework.
              </p>
            </div>

            {notes.length === 0 ? (
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-8 text-center">
                <FileText className="w-12 h-12 text-neutral-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-neutral-slate-800">No Tutor Progress Notes Recorded</h3>
                <p className="text-sm text-neutral-slate-600 mt-1">
                  Once tutors submit post-lesson evaluations, detailed qualitative progress notes will display here.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-white rounded-xl border border-neutral-slate-200 shadow-xs p-6 space-y-4"
                    data-testid={`tutor-note-${note.id}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-neutral-slate-900">{note.subject} Lesson Evaluation</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-brand-blue-50 text-brand-blue-900 border border-brand-blue-200 font-semibold">
                            Tutor: {note.tutorSlug.replace(/-/g, " ").toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-slate-500 mt-0.5">
                          Session Date: {note.sessionDate} · Recorded on {new Date(note.createdAt).toLocaleDateString("en-NG")}
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-slate-500 mb-1">
                        Executive Summary
                      </h4>
                      <p className="text-sm text-neutral-slate-800 leading-relaxed font-medium bg-neutral-slate-50 p-3 rounded-lg border border-neutral-slate-200">
                        {note.summary}
                      </p>
                    </div>

                    {/* Strengths & Improvements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {note.strengths && (
                        <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
                          <h4 className="text-xs font-bold text-emerald-950 flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                            Demonstrated Strengths
                          </h4>
                          <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                            {note.strengths}
                          </p>
                        </div>
                      )}

                      {note.areasForImprovement && (
                        <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200">
                          <h4 className="text-xs font-bold text-amber-950 flex items-center gap-1.5 mb-1">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-800" />
                            Target Areas for Growth
                          </h4>
                          <p className="text-xs text-amber-950 font-medium leading-relaxed">
                            {note.areasForImprovement}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Assigned Homework */}
                    {note.homeworkAssignment && (
                      <div className="p-3.5 rounded-lg bg-purple-50/70 border border-purple-200">
                        <h4 className="text-xs font-bold text-purple-950 flex items-center gap-1.5 mb-1">
                          <BookOpen className="w-3.5 h-3.5 text-purple-700" />
                          Homework & Practice Assignment
                        </h4>
                        <p className="text-xs text-purple-950 font-semibold leading-relaxed">
                          {note.homeworkAssignment}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: PAYMENT RECEIPTS (PP-02) */}
        {activeTab === "receipts" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-neutral-slate-900">Unified Paystack Payment Receipts</h2>
              <p className="text-sm text-neutral-slate-600">
                Audited payment receipts and financial settlement logs across all linked wards.
              </p>
            </div>

            {transactions.length === 0 ? (
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-8 text-center">
                <Receipt className="w-12 h-12 text-neutral-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-neutral-slate-800">No Payment Transactions Found</h3>
                <p className="text-sm text-neutral-slate-600 mt-1">
                  Verified Paystack booking transactions will be listed here automatically.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-neutral-slate-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs" data-testid="guardian-receipts-table">
                    <thead className="bg-neutral-slate-50 border-b border-neutral-slate-200 text-neutral-slate-600 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Reference</th>
                        <th className="py-3 px-4">Ward</th>
                        <th className="py-3 px-4">Subject & Tutor</th>
                        <th className="py-3 px-4">Amount</th>
                        <th className="py-3 px-4">Channel</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-slate-200">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-neutral-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-neutral-slate-900">{tx.reference}</td>
                          <td className="py-3.5 px-4 font-semibold text-neutral-slate-800">{tx.studentName}</td>
                          <td className="py-3.5 px-4">
                            <div className="font-medium text-neutral-slate-900">{tx.subject}</div>
                            <div className="text-[11px] text-neutral-slate-500">{tx.tutorName}</div>
                          </td>
                          <td className="py-3.5 px-4 font-extrabold text-neutral-slate-900">
                            {formatNgn(tx.amountMinorUnits)}
                          </td>
                          <td className="py-3.5 px-4 uppercase text-neutral-slate-600 font-medium">{tx.channel}</td>
                          <td className="py-3.5 px-4">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-950 border border-emerald-300">
                              {tx.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => setActiveReceipt(tx)}
                              className="text-brand-blue-600 hover:text-brand-blue-800 font-bold hover:underline"
                              data-testid={`view-receipt-btn-${tx.reference}`}
                            >
                              View Receipt
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: PRIVACY & NOTIFICATION PREFERENCES (PP-03) */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-neutral-slate-900">Privacy Settings & Alert Preferences</h2>
              <p className="text-sm text-neutral-slate-600">
                Configure delivery channels and manage Nigeria Data Protection Act 2023 privacy safeguards.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Alert Controls */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-neutral-slate-200 p-6 shadow-xs space-y-6">
                <h3 className="text-base font-bold text-neutral-slate-900">Delivery Channels</h3>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center justify-between p-3.5 rounded-lg border border-neutral-slate-200 hover:bg-neutral-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-brand-blue-600" />
                      <div>
                        <div className="text-sm font-bold text-neutral-slate-900">Email Notifications</div>
                        <div className="text-xs text-neutral-slate-500">Receive progress summaries and lesson confirmations via email.</div>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.emailAlerts}
                      onChange={(e) => setPreferences({ ...preferences, emailAlerts: e.target.checked })}
                      className="w-4 h-4 rounded text-brand-blue-600 focus:ring-brand-blue-500 border-neutral-slate-300"
                      data-testid="toggle-email-alerts"
                    />
                  </div>

                  {/* SMS */}
                  <div className="flex items-center justify-between p-3.5 rounded-lg border border-neutral-slate-200 hover:bg-neutral-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-brand-blue-600" />
                      <div>
                        <div className="text-sm font-bold text-neutral-slate-900">SMS Urgent Alerts</div>
                        <div className="text-xs text-neutral-slate-500">Live lesson start reminders and urgent safeguarding alerts.</div>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.smsAlerts}
                      onChange={(e) => setPreferences({ ...preferences, smsAlerts: e.target.checked })}
                      className="w-4 h-4 rounded text-brand-blue-600 focus:ring-brand-blue-500 border-neutral-slate-300"
                      data-testid="toggle-sms-alerts"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center justify-between p-3.5 rounded-lg border border-neutral-slate-200 hover:bg-neutral-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-emerald-600" />
                      <div>
                        <div className="text-sm font-bold text-neutral-slate-900">WhatsApp Updates (Optional)</div>
                        <div className="text-xs text-neutral-slate-500">Instant lesson timetable links via WhatsApp messenger.</div>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.whatsappAlerts}
                      onChange={(e) => setPreferences({ ...preferences, whatsappAlerts: e.target.checked })}
                      className="w-4 h-4 rounded text-brand-blue-600 focus:ring-brand-blue-500 border-neutral-slate-300"
                      data-testid="toggle-whatsapp-alerts"
                    />
                  </div>
                </div>

                {/* Digest Frequency */}
                <div className="pt-4 border-t border-neutral-slate-200">
                  <label htmlFor="digest-frequency-select" className="block text-sm font-bold text-neutral-slate-900 mb-1.5">
                    Notification Digest Frequency
                  </label>
                  <select
                    id="digest-frequency-select"
                    value={preferences.digestFrequency}
                    onChange={(e) => setPreferences({ ...preferences, digestFrequency: e.target.value })}
                    className="w-full sm:w-72 rounded-lg border border-neutral-slate-300 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    data-testid="select-digest-frequency"
                  >
                    <option value="REALTIME">Real-time (Immediate notifications)</option>
                    <option value="DAILY_DIGEST">Daily Digest (1 summary at 18:00 WAT)</option>
                    <option value="WEEKLY_SUMMARY">Weekly Summary (Every Friday evening)</option>
                  </select>
                </div>

                <Button
                  onClick={handleSavePreferences}
                  disabled={loading}
                  className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold"
                  data-testid="save-preferences-btn"
                >
                  Save Notification Preferences
                </Button>
              </div>

              {/* PP-03 NDPA 2023 Lockscreen Privacy Card */}
              <div className="bg-white rounded-xl border border-neutral-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                  <Lock className="w-4 h-4 text-amber-800" />
                  <span>NDPA 2023 Lockscreen Invariant</span>
                </div>

                <p className="text-xs text-neutral-slate-600 leading-relaxed">
                  Under Section 31 of the Nigeria Data Protection Act 2023, notification previews on lockscreens must remain strictly generic. Private grades, individual lesson subjects, and ward names are shielded from unauthenticated passersby.
                </p>

                {/* Simulated Smartphone Lockscreen Screen */}
                <div className="rounded-2xl border-2 border-neutral-slate-800 bg-neutral-slate-900 p-4 text-white shadow-md">
                  <div className="text-center text-[10px] text-neutral-slate-400 font-semibold mb-3">
                    12:45 PM · Friday, October 12
                  </div>

                  {/* Notification bubble */}
                  <div className="rounded-xl bg-neutral-slate-800/90 border border-neutral-slate-700 p-3 shadow-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-neutral-slate-400">
                      <span className="font-bold text-brand-blue-400">Trainbow Hub</span>
                      <span>Now</span>
                    </div>
                    <div className="text-xs font-semibold text-white" data-testid="lockscreen-preview-text">
                      Trainbow Hub: New activity update for your ward
                    </div>
                    <div className="text-[10px] text-neutral-slate-400">
                      Unlock device to view detailed progress report.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-950 bg-emerald-50 border border-emerald-300 p-2.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Lockscreen Privacy Shield: Always Enforced</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: LINK CHILD (PP-05) */}
        {showLinkModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-neutral-slate-200 space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-blue-600" />
                  <h3 className="text-lg font-bold text-neutral-slate-900">Link Student Ward</h3>
                </div>
                <button
                  onClick={() => setShowLinkModal(false)}
                  className="text-neutral-slate-400 hover:text-neutral-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-neutral-slate-600">
                Enter your ward&apos;s registered student email and the 6-digit verification code. Student approval is required per NDPA 2023.
              </p>

              <form onSubmit={handleLinkChild} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-slate-700 mb-1">
                    Student Registered Email
                  </label>
                  <input
                    type="email"
                    required
                    value={linkEmail}
                    onChange={(e) => setLinkEmail(e.target.value)}
                    placeholder="e.g. minor@trainbowhub.ng"
                    className="w-full rounded-lg border border-neutral-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                    data-testid="input-link-student-email"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-neutral-slate-700">
                      6-Digit Verification Code (OTP)
                    </label>
                    <button
                      type="button"
                      onClick={() => setLinkOtp("202610")}
                      className="text-[11px] font-bold text-brand-blue-600 hover:underline"
                    >
                      Fill Demo OTP (202610)
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={linkOtp}
                    onChange={(e) => setLinkOtp(e.target.value)}
                    placeholder="202610"
                    className="w-full rounded-lg border border-neutral-slate-300 p-2.5 text-xs tracking-widest text-center font-mono font-bold focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                    data-testid="input-link-otp"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-slate-700 mb-1">
                    Your Relationship to Student
                  </label>
                  <select
                    value={linkRelationship}
                    onChange={(e) => setLinkRelationship(e.target.value)}
                    className="w-full rounded-lg border border-neutral-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                    data-testid="select-link-relationship"
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Legal Guardian">Legal Guardian</option>
                    <option value="Educational Sponsor">Educational Sponsor</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowLinkModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    disabled={linkLoading}
                    className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold"
                    data-testid="submit-link-child-btn"
                  >
                    {linkLoading ? "Verifying..." : "Verify & Link Ward"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: VIEW RECEIPT */}
        {activeReceipt && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-neutral-slate-200 space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-brand-blue-600" />
                  <h3 className="text-lg font-bold text-neutral-slate-900">Official Payment Receipt</h3>
                </div>
                <button
                  onClick={() => setActiveReceipt(null)}
                  className="text-neutral-slate-400 hover:text-neutral-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Receipt Details */}
              <div className="bg-neutral-slate-50 p-4 rounded-xl border border-neutral-slate-200 space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-slate-500">Transaction Reference:</span>
                  <span className="font-mono font-bold text-neutral-slate-900">{activeReceipt.reference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-slate-500">Student Ward:</span>
                  <span className="font-bold text-neutral-slate-900">{activeReceipt.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-slate-500">Subject:</span>
                  <span className="font-semibold text-neutral-slate-800">{activeReceipt.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-slate-500">Assigned Tutor:</span>
                  <span className="font-semibold text-neutral-slate-800">{activeReceipt.tutorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-slate-500">Payment Channel:</span>
                  <span className="font-semibold text-neutral-slate-800 uppercase">{activeReceipt.channel}</span>
                </div>
                <div className="flex justify-between border-t border-neutral-slate-200 pt-2 text-sm">
                  <span className="font-bold text-neutral-slate-900">Total Settled:</span>
                  <span className="font-extrabold text-brand-blue-700">
                    {formatNgn(activeReceipt.amountMinorUnits)}
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-neutral-slate-500 text-center">
                Verified via Paystack Payments Nigeria. Compliant with Nigeria Data Protection Act 2023.
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setActiveReceipt(null)} size="sm">
                  Close Receipt
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <MobileBottomNav role="PARENT" />
    </div>
  );
}
