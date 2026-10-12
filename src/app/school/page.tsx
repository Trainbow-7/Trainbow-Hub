"use client";

import React, { useState, useEffect, useId } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { DataSaverToggle } from "@/components/ui/DataSaverToggle";
import {
  SUPPORTED_LOCALES,
  LocaleCode,
  getDictionary,
  TranslationDictionary,
} from "@/lib/i18n";
import {
  saveOfflineAttempt,
  getOfflineAttempts,
  getPendingSyncCount,
  syncOfflineAttempts,
  isDataSaverEnabled,
  toggleDataSaver,
} from "@/lib/offline/sync";
import {
  Building2,
  Users,
  GraduationCap,
  Award,
  Layers,
  Upload,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  WifiOff,
  RefreshCw,
  Plus,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

interface SchoolOverviewData {
  school: {
    id: string;
    name: string;
    code: string;
    type: string;
    state: string;
    lga: string;
    address: string;
    studentCapacity: number;
    seatsAllocated: number;
    status: string;
    contactEmail: string;
  };
  cohorts: Array<{
    id: string;
    name: string;
    gradeLevel: string;
    academicTerm: string;
    teacherName: string;
    studentCount: number;
  }>;
  analytics: {
    totalStudents: number;
    activeCohorts: number;
    avgAttendanceRate: number;
    avgScore: number;
    totalCompletedLessons: number;
    totalStudyHours: number;
  };
  availableSchools: Array<{
    id: string;
    name: string;
    code: string;
    state: string;
    studentCapacity: number;
    seatsAllocated: number;
  }>;
}

interface StudentEnrollmentItem {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  gradeLevel: string;
  cohortId: string;
  status: string;
  enrolledAt: string;
}

export default function SchoolPage() {
  const [data, setData] = useState<SchoolOverviewData | null>(null);
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>("sch-seed-001");
  const [students, setStudents] = useState<StudentEnrollmentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"overview" | "cohorts" | "students" | "multilingual" | "offline">("overview");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentLocale, setCurrentLocale] = useState<LocaleCode>("en");
  const [dict, setDict] = useState<TranslationDictionary>(getDictionary("en"));

  // Bulk enrollment modal state
  const [isBulkModalOpen, setIsBulkModalOpen] = useState<boolean>(false);
  const [bulkCsvText, setBulkCsvText] = useState<string>(
    "Amina Bello, amina.b@example.ng, SSS 3, coh-seed-001\nTunde Bakare, tunde.b@example.ng, SSS 3, coh-seed-001\nEmeka Nwosu, emeka.n@example.ng, JSS 2, coh-seed-002"
  );
  const [bulkLoading, setBulkLoading] = useState<boolean>(false);
  const [bulkMessage, setBulkMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // New cohort modal state
  const [isCohortModalOpen, setIsCohortModalOpen] = useState<boolean>(false);
  const [newCohortName, setNewCohortName] = useState<string>("");
  const [newCohortGrade, setNewCohortGrade] = useState<string>("SSS 1");
  const [newCohortTeacher, setNewCohortTeacher] = useState<string>("");

  // Offline sync state
  const [pendingSync, setPendingSync] = useState<number>(0);
  const [syncStatusMsg, setSyncStatusMsg] = useState<string>("");

  // Unique accessible IDs
  const schoolSelectId = useId();
  const searchInputId = useId();
  const bulkTextareaId = useId();
  const cohortNameId = useId();
  const cohortGradeId = useId();
  const cohortTeacherId = useId();

  // Load locale preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("trainbow_locale") as LocaleCode | null;
      if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
        setCurrentLocale(saved);
        setDict(getDictionary(saved));
      }
    } catch {
      // fallback
    }

    const locHandler = (e: CustomEvent<{ locale: LocaleCode }>) => {
      if (e.detail?.locale) {
        setCurrentLocale(e.detail.locale);
        setDict(getDictionary(e.detail.locale));
      }
    };

    window.addEventListener("trainbow-locale-change" as any, locHandler);
    return () => window.removeEventListener("trainbow-locale-change" as any, locHandler);
  }, []);

  // Sync offline counter
  useEffect(() => {
    setPendingSync(getPendingSyncCount());
    const queueHandler = (e: CustomEvent<{ count: number }>) => {
      setPendingSync(e.detail.count);
    };
    window.addEventListener("trainbow-offline-queue-change" as any, queueHandler);
    return () => window.removeEventListener("trainbow-offline-queue-change" as any, queueHandler);
  }, []);

  // Fetch school overview & students
  const fetchSchoolData = async (schoolId: string) => {
    setLoading(true);
    try {
      const [resOverview, resStudents] = await Promise.all([
        fetch(`/api/school/overview?schoolId=${schoolId}`),
        fetch(`/api/school/students?schoolId=${schoolId}`),
      ]);

      if (resOverview.ok) {
        const ovData = await resOverview.json();
        setData(ovData);
      }
      if (resStudents.ok) {
        const stData = await resStudents.json();
        setStudents(stData.students || []);
      }
    } catch (err) {
      console.error("Failed to load school portal data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchoolData(selectedSchoolId);
  }, [selectedSchoolId]);

  const handleSchoolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSchoolId(e.target.value);
  };

  const handleLocaleChange = (locale: LocaleCode) => {
    setCurrentLocale(locale);
    setDict(getDictionary(locale));
    try {
      localStorage.setItem("trainbow_locale", locale);
      window.dispatchEvent(new CustomEvent("trainbow-locale-change", { detail: { locale } }));
    } catch {}
  };

  const handleCreateCohort = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCohortName.trim()) return;

    try {
      const res = await fetch("/api/school/cohorts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          schoolId: selectedSchoolId,
          name: newCohortName,
          gradeLevel: newCohortGrade,
          teacherName: newCohortTeacher || "Class Mentor",
        }),
      });

      if (res.ok) {
        setIsCohortModalOpen(false);
        setNewCohortName("");
        setNewCohortTeacher("");
        fetchSchoolData(selectedSchoolId);
      }
    } catch (err) {
      console.error("Failed to create cohort:", err);
    }
  };

  const handleBulkEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    setBulkLoading(true);
    setBulkMessage(null);

    try {
      // Parse CSV lines: fullName, email, gradeLevel, cohortId
      const lines = bulkCsvText
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.length > 0 && !l.startsWith("#"));

      const parsedStudents = lines.map((line, idx) => {
        const parts = line.split(",").map((p) => p.trim());
        return {
          fullName: parts[0] || `Student ${idx + 1}`,
          email: parts[1] || `student${Date.now()}_${idx}@school.ng`,
          gradeLevel: parts[2] || "SSS 3",
          cohortId: parts[3] || data?.cohorts[0]?.id || "coh-seed-001",
        };
      });

      const res = await fetch("/api/school/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          schoolId: selectedSchoolId,
          students: parsedStudents,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        setBulkMessage({
          type: "success",
          text: `Successfully enrolled ${result.enrolledCount} students and allocated institutional seats.`,
        });
        fetchSchoolData(selectedSchoolId);
        setTimeout(() => {
          setIsBulkModalOpen(false);
          setBulkMessage(null);
        }, 1500);
      } else {
        setBulkMessage({
          type: "error",
          text: result.error || "Failed to process bulk enrollment",
        });
      }
    } catch (err: any) {
      setBulkMessage({
        type: "error",
        text: err?.message || "Failed to submit bulk enrollment",
      });
    } finally {
      setBulkLoading(false);
    }
  };

  const handleSimulateOfflineQuiz = () => {
    const attempt = saveOfflineAttempt({
      quizId: "quiz-sample-offline",
      studentId: "usr-std-001",
      score: 9,
      totalQuestions: 10,
      completedAt: new Date().toISOString(),
      answers: { q1: "A", q2: "B", q3: "C" },
    });
    setPendingSync(getPendingSyncCount());
    setSyncStatusMsg(`Stored quiz attempt #${attempt.id.slice(-6)} locally in browser offline cache.`);
  };

  const handleTriggerSync = async () => {
    setSyncStatusMsg("Flushing offline records to Trainbow cloud...");
    const res = await syncOfflineAttempts();
    setPendingSync(getPendingSyncCount());
    setSyncStatusMsg(`Sync completed: ${res.synced} attempt(s) verified on server.`);
  };

  const filteredStudents = students.filter(
    (s) =>
      s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.studentEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.gradeLevel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const seatPercent = data
    ? Math.min(100, Math.round((data.school.seatsAllocated / data.school.studentCapacity) * 100))
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900" data-testid="school-page-container">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Hero & Institution Header */}
        <div className="bg-[#0B1B3A] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-900 shadow-sm">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-100 text-xs font-bold border border-emerald-700">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Institutional Multi-Tenant Portal (ADR-013)</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {dict.school.title}
                </h1>
                <p className="text-sm sm:text-base text-white/95 max-w-2xl font-medium">
                  {dict.school.subtitle}
                </p>
              </div>

              {/* Institution Switcher & Language Pill */}
              <div className="flex flex-wrap items-center gap-3 bg-brand-blue-950/90 p-3 rounded-2xl border border-brand-blue-700">
                <div className="space-y-1">
                  <label htmlFor={schoolSelectId} className="block text-[11px] font-bold text-white">
                    Active Institution
                  </label>
                  <select
                    id={schoolSelectId}
                    data-testid="school-selector"
                    value={selectedSchoolId}
                    onChange={handleSchoolChange}
                    aria-label="Select institution to manage"
                    className="text-xs font-bold rounded-lg bg-white text-neutral-slate-900 border border-neutral-slate-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    {data?.availableSchools.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.state})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="school-locale-select" className="block text-[11px] font-bold text-white">
                    Language / Èdè
                  </label>
                  <select
                    id="school-locale-select"
                    data-testid="locale-preview-select"
                    value={currentLocale}
                    onChange={(e) => handleLocaleChange(e.target.value as LocaleCode)}
                    aria-label="Select regional language"
                    className="text-xs font-bold rounded-lg bg-white text-neutral-slate-900 border border-neutral-slate-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    {SUPPORTED_LOCALES.map((l) => (
                      <option key={l.code} value={l.code}>
                        {l.name} ({l.nativeName})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* School Profile Badge Strip */}
            {data && (
              <div className="flex flex-wrap items-center gap-4 text-xs text-white pt-2 border-t border-brand-blue-800">
                <span className="font-bold text-white">
                  📍 {data.school.address}, {data.school.lga}, {data.school.state} State
                </span>
                <span className="hidden sm:inline text-white/60">•</span>
                <span>Code: <strong className="text-white font-mono">{data.school.code}</strong></span>
                <span className="hidden sm:inline text-white/60">•</span>
                <span>Type: <strong className="text-white">{data.school.type}</strong></span>
                <span className="hidden sm:inline text-white/60">•</span>
                <span className="inline-flex items-center gap-1 text-emerald-200 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Ministry Verified
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
          {/* License Seat Meter & KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="license-seat-meter">
            {/* License Allocation Card */}
            <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-neutral-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-neutral-slate-900">
                    {dict.school.seatCapacity}
                  </h2>
                  <p className="text-xs text-neutral-slate-500">
                    Institutional multi-seat license quota for 2026/2027 session
                  </p>
                </div>
                <span className="text-2xl font-black text-brand-blue-700">
                  {data?.school.seatsAllocated} / {data?.school.studentCapacity}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full bg-neutral-slate-100 rounded-full h-3.5 overflow-hidden border border-neutral-slate-200">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      seatPercent >= 90
                        ? "bg-amber-600"
                        : "bg-emerald-600"
                    }`}
                    style={{ width: `${seatPercent}%` }}
                    role="progressbar"
                    aria-valuenow={seatPercent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Student license seat utilization"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-slate-600">
                  <span>{seatPercent}% {dict.school.seatsUsed}</span>
                  <span className="font-semibold text-emerald-800">
                    {(data?.school.studentCapacity || 0) - (data?.school.seatsAllocated || 0)} {dict.school.availableSeats}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  data-testid="open-bulk-enroll-modal"
                  onClick={() => setIsBulkModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-xs transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span>{dict.school.bulkEnroll}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsCohortModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-neutral-slate-100 hover:bg-neutral-slate-200 text-neutral-slate-800 border border-neutral-slate-300 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Cohort</span>
                </button>
              </div>
            </div>

            {/* KPI Metric 1: Average Score */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-neutral-slate-500">
                <span className="text-xs font-semibold uppercase tracking-wider">{dict.school.averageScore}</span>
                <Award className="w-5 h-5 text-amber-700" />
              </div>
              <div className="my-2">
                <span className="text-3xl font-black text-neutral-slate-900">
                  {data?.analytics.avgScore || 84.2}%
                </span>
                <span className="block text-xs font-semibold text-emerald-700 mt-1">
                  ↑ 6.4% above Lagos State private average
                </span>
              </div>
              <div className="text-[11px] text-neutral-slate-500 border-t border-neutral-slate-100 pt-2">
                Based on WAEC & Cambridge mock assessments
              </div>
            </div>

            {/* KPI Metric 2: Completion Rate & Hours */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-neutral-slate-500">
                <span className="text-xs font-semibold uppercase tracking-wider">{dict.school.completionRate}</span>
                <GraduationCap className="w-5 h-5 text-brand-blue-600" />
              </div>
              <div className="my-2">
                <span className="text-3xl font-black text-neutral-slate-900">
                  {data?.analytics.totalCompletedLessons || 428}
                </span>
                <span className="block text-xs font-semibold text-brand-blue-700 mt-1">
                  {data?.analytics.totalStudyHours || 1480} supervised study hrs
                </span>
              </div>
              <div className="text-[11px] text-neutral-slate-500 border-t border-neutral-slate-100 pt-2">
                Attendance rate: <strong>{data?.analytics.avgAttendanceRate || 94.6}%</strong>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-neutral-slate-200 flex flex-wrap items-center gap-2">
            {[
              { id: "overview", label: "Cohorts & Classes", icon: Layers },
              { id: "students", label: "Enrolled Students Roster", icon: Users },
              { id: "multilingual", label: "Multilingual Localization (ADR-013)", icon: Sparkles },
              { id: "offline", label: "Low-Bandwidth & Offline PWA", icon: WifiOff },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                    isActive
                      ? "border-brand-blue-600 text-brand-blue-600"
                      : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900 hover:border-neutral-slate-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: COHORTS & OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-neutral-slate-900">
                    {dict.school.cohorts}
                  </h2>
                  <p className="text-xs text-neutral-slate-500">
                    Active academic streams, lead tutor assignments, and enrolled student distribution.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCohortModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-blue-600 text-white hover:bg-brand-blue-700 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Class Cohort</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data?.cohorts.map((cohort) => (
                  <div
                    key={cohort.id}
                    data-testid="cohort-card"
                    className="bg-white rounded-2xl p-6 border border-neutral-slate-200 shadow-xs hover:border-brand-blue-400 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200">
                          {cohort.gradeLevel}
                        </span>
                        <span className="text-xs text-neutral-slate-500 font-medium">
                          {cohort.academicTerm}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-neutral-slate-900">
                        {cohort.name}
                      </h3>
                      <p className="text-xs text-neutral-slate-600 flex items-center gap-1.5">
                        <span>Lead Teacher:</span>
                        <strong className="text-neutral-slate-800">{cohort.teacherName}</strong>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-slate-100 flex items-center justify-between text-xs">
                      <span className="text-neutral-slate-600">
                        <strong>{cohort.studentCount}</strong> Students Enrolled
                      </span>
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Licensed
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: STUDENTS ROSTER */}
          {activeTab === "students" && (
            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden space-y-4 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-neutral-slate-900">
                    {dict.school.students}
                  </h2>
                  <p className="text-xs text-neutral-slate-500">
                    Manage institutional licenses, active student accounts, and cohort allocations.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-slate-400" />
                    <input
                      id={searchInputId}
                      type="text"
                      placeholder="Search student or email..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search student roster"
                      className="pl-9 pr-3 py-1.5 text-xs rounded-xl border border-neutral-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 w-64"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsBulkModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-brand-blue-600 text-white hover:bg-brand-blue-700 shadow-xs"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Bulk Onboard</span>
                  </button>
                </div>
              </div>

              {/* Roster Table with accessible scroll container */}
              <div
                tabIndex={0}
                role="region"
                aria-label="Enrolled Students Roster"
                className="overflow-x-auto border border-neutral-slate-200 rounded-xl"
              >
                <table className="w-full text-left text-xs" data-testid="student-roster-table">
                  <thead className="bg-neutral-slate-100 text-neutral-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-slate-200">
                    <tr>
                      <th scope="col" className="py-3 px-4">Student Name</th>
                      <th scope="col" className="py-3 px-4">Institutional Email</th>
                      <th scope="col" className="py-3 px-4">Grade / Level</th>
                      <th scope="col" className="py-3 px-4">Cohort Assigned</th>
                      <th scope="col" className="py-3 px-4">License Status</th>
                      <th scope="col" className="py-3 px-4">Enrolled Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-slate-100">
                    {filteredStudents.length > 0 ? (
                      filteredStudents.map((st) => (
                        <tr key={st.id} className="hover:bg-neutral-slate-50 transition-colors">
                          <td className="py-3 px-4 font-bold text-neutral-slate-900">
                            {st.studentName}
                          </td>
                          <td className="py-3 px-4 text-neutral-slate-600 font-mono">
                            {st.studentEmail}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-brand-blue-50 text-brand-blue-700 font-semibold">
                              {st.gradeLevel}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-neutral-slate-700 font-medium">
                            {st.cohortId}
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              <CheckCircle2 className="w-3 h-3" />
                              {st.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-neutral-slate-500">
                            {new Date(st.enrolledAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-neutral-slate-500">
                          No students matching your search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: REGIONAL MULTILINGUAL LOCALIZATION (ADR-013) */}
          {activeTab === "multilingual" && (
            <div className="bg-white rounded-2xl p-6 border border-neutral-slate-200 shadow-xs space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                  <span>5-Language Regional Localization Engine</span>
                </div>
                <h2 className="text-xl font-bold text-neutral-slate-900">
                  Regional Multilingual Interface & Translation Dictionary
                </h2>
                <p className="text-xs text-neutral-slate-600 max-w-3xl">
                  Trainbow HUB supports English, Yorùbá, Harshen Hausa, Asụsụ Igbo, and Naijá Pidgin, enabling inclusive comprehension for learners, parents, and community schools across Nigeria.
                </p>
              </div>

              {/* Language Selector Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {SUPPORTED_LOCALES.map((loc) => {
                  const isCurrent = currentLocale === loc.code;
                  return (
                    <button
                      key={loc.code}
                      type="button"
                      onClick={() => handleLocaleChange(loc.code)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isCurrent
                          ? "border-brand-blue-600 bg-brand-blue-50 ring-2 ring-brand-blue-600"
                          : "border-neutral-slate-300 hover:border-neutral-slate-400 hover:bg-neutral-slate-50"
                      }`}
                    >
                      <span className="block text-xs font-bold text-neutral-slate-700">
                        {loc.name}
                      </span>
                      <span className="block text-sm font-extrabold text-neutral-slate-900 mt-1">
                        {loc.nativeName}
                      </span>
                      <span className="block text-[10px] uppercase font-mono text-brand-blue-800 mt-2 font-bold">
                        Locale: [{loc.code}]
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Preview of Dictionary Strings */}
              <div className="bg-neutral-slate-50 rounded-xl p-5 border border-neutral-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-slate-700">
                  Active Translation Dictionary Preview ({currentLocale.toUpperCase()})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-neutral-slate-200">
                    <span className="text-[10px] text-neutral-slate-600 font-bold block uppercase">App Tagline</span>
                    <strong className="text-neutral-slate-900">{dict.tagline}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-slate-200">
                    <span className="text-[10px] text-neutral-slate-600 font-bold block uppercase">Portal Title</span>
                    <strong className="text-neutral-slate-900">{dict.school.title}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-slate-200">
                    <span className="text-[10px] text-neutral-slate-600 font-bold block uppercase">Seat Capacity</span>
                    <strong className="text-neutral-slate-900">{dict.school.seatCapacity}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-slate-200">
                    <span className="text-[10px] text-neutral-slate-600 font-bold block uppercase">Bulk Enrollment</span>
                    <strong className="text-neutral-slate-900">{dict.school.bulkEnroll}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LOW-BANDWIDTH & OFFLINE PWA */}
          {activeTab === "offline" && (
            <div className="bg-white rounded-2xl p-6 border border-neutral-slate-200 shadow-xs space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold">
                  <WifiOff className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Offline-First PWA & Low-Bandwidth 2G/3G Engine</span>
                </div>
                <h2 className="text-xl font-bold text-neutral-slate-900">
                  Resilient Progressive Web App & Offline Quiz Synchronization
                </h2>
                <p className="text-xs text-neutral-slate-600 max-w-3xl">
                  Enables students in areas with volatile cellular network to complete practice quizzes locally. When connectivity is restored, cached submissions are automatically flushed to the Trainbow cloud.
                </p>
              </div>

              {/* Status and Action Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-slate-700">Data Saver Mode</span>
                    <DataSaverToggle />
                  </div>
                  <p className="text-xs text-neutral-slate-500 leading-relaxed">
                    Disables heavy background animations, compresses image payloads, and caches interactive lesson content.
                  </p>
                </div>

                <div className="p-5 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-slate-700">Pending Offline Attempts</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-black bg-brand-blue-100 text-brand-blue-800">
                      {pendingSync} Queued
                    </span>
                  </div>
                  <p className="text-xs text-neutral-slate-500 leading-relaxed">
                    Attempts stored in browser localStorage waiting for online sync.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      data-testid="simulate-offline-quiz-btn"
                      onClick={handleSimulateOfflineQuiz}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white shadow-xs"
                    >
                      + Simulate Offline Quiz
                    </button>
                    <button
                      type="button"
                      data-testid="sync-offline-btn"
                      onClick={handleTriggerSync}
                      disabled={pendingSync === 0}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs disabled:opacity-50"
                    >
                      Sync Now
                    </button>
                  </div>
                </div>

                <div className="p-5 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 space-y-3">
                  <span className="text-xs font-bold text-neutral-slate-700">PWA Manifest & Cache</span>
                  <div className="space-y-1 text-xs text-neutral-slate-600">
                    <p>✓ Manifest: <code className="text-brand-blue-700 font-mono">/manifest.webmanifest</code></p>
                    <p>✓ Service Ready: Standalone Display</p>
                    <p>✓ Adaptive Theme: Nigerian Dark Navy (#0B1B3A)</p>
                  </div>
                </div>
              </div>

              {syncStatusMsg && (
                <div className="p-3 bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-800 rounded-xl text-xs font-medium flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-brand-blue-600 animate-spin" />
                  <span>{syncStatusMsg}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MODAL: BULK ONBOARDING */}
        {isBulkModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="bulk-onboarding-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-slate-200 pb-3">
                <h3 id="bulk-onboarding-title" className="text-lg font-bold text-neutral-slate-900">
                  Bulk Student Roster Onboarding
                </h3>
                <button
                  type="button"
                  onClick={() => setIsBulkModalOpen(false)}
                  aria-label="Close bulk onboarding modal"
                  className="text-neutral-slate-400 hover:text-neutral-700 font-bold text-lg"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleBulkEnroll} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor={bulkTextareaId} className="block text-xs font-bold text-neutral-slate-700">
                    Paste Student Roster (CSV format: Full Name, Email, Grade, Cohort ID)
                  </label>
                  <textarea
                    id={bulkTextareaId}
                    data-testid="bulk-enroll-textarea"
                    rows={6}
                    value={bulkCsvText}
                    onChange={(e) => setBulkCsvText(e.target.value)}
                    aria-label="Paste Student Roster in CSV format"
                    className="w-full text-xs font-mono p-3 rounded-xl border border-neutral-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 bg-neutral-slate-50"
                  />
                  <span className="block text-[11px] text-neutral-slate-500">
                    Each row will be assigned an institutional license seat up to the available capacity.
                  </span>
                </div>

                {bulkMessage && (
                  <div
                    className={`p-3 rounded-xl text-xs font-medium flex items-center gap-2 ${
                      bulkMessage.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {bulkMessage.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    )}
                    <span>{bulkMessage.text}</span>
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsBulkModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-slate-700 hover:bg-neutral-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    data-testid="submit-bulk-enroll-button"
                    disabled={bulkLoading}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-xs disabled:opacity-50"
                  >
                    {bulkLoading ? "Enrolling & Allocating..." : "Allocate Seats & Enroll"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD COHORT */}
        {isCohortModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-cohort-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-slate-200 pb-3">
                <h3 id="add-cohort-title" className="text-lg font-bold text-neutral-slate-900">
                  Create Class Cohort
                </h3>
                <button
                  type="button"
                  onClick={() => setIsCohortModalOpen(false)}
                  aria-label="Close create cohort modal"
                  className="text-neutral-slate-400 hover:text-neutral-700 font-bold text-lg"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateCohort} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor={cohortNameId} className="block text-xs font-bold text-neutral-slate-700">
                    Cohort / Arm Name (e.g. SSS 3 Silver - Arts)
                  </label>
                  <input
                    id={cohortNameId}
                    type="text"
                    required
                    placeholder="e.g. SSS 3 Silver"
                    value={newCohortName}
                    onChange={(e) => setNewCohortName(e.target.value)}
                    aria-label="Cohort name"
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor={cohortGradeId} className="block text-xs font-bold text-neutral-slate-700">
                    Grade Level
                  </label>
                  <select
                    id={cohortGradeId}
                    value={newCohortGrade}
                    onChange={(e) => setNewCohortGrade(e.target.value)}
                    aria-label="Grade Level"
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  >
                    <option value="JSS 1">JSS 1</option>
                    <option value="JSS 2">JSS 2</option>
                    <option value="JSS 3">JSS 3</option>
                    <option value="SSS 1">SSS 1</option>
                    <option value="SSS 2">SSS 2</option>
                    <option value="SSS 3">SSS 3</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor={cohortTeacherId} className="block text-xs font-bold text-neutral-slate-700">
                    Lead Tutor / Class Mentor
                  </label>
                  <input
                    id={cohortTeacherId}
                    type="text"
                    placeholder="e.g. Dr. Babatunde Fashola"
                    value={newCohortTeacher}
                    onChange={(e) => setNewCohortTeacher(e.target.value)}
                    aria-label="Lead tutor name"
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsCohortModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-slate-700 hover:bg-neutral-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-xs"
                  >
                    Create Cohort
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
