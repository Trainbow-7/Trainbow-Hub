"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/Button";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Users,
  GraduationCap,
  DollarSign,
  CreditCard,
  TrendingUp,
  Bot,
  Clock,
  FileText,
  Filter,
  Search,
  RefreshCw,
  Check,
  X,
  ExternalLink,
  Lock,
  Unlock,
  Building2,
  Sparkles,
  ChevronRight,
  AlertCircle,
  Calendar,
  LogOut,
  Info,
  Layers,
  BookOpen,
  Plus,
} from "lucide-react";

export type AdminTab =
  | "overview"
  | "tutors"
  | "safeguarding"
  | "finance"
  | "ai"
  | "subjects"
  | "users"
  | "audit";

export default function AdminPortalPage() {
  const { user, refresh, isLoading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [watTime, setWatTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleAdminSignIn = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "admin@trainbowhub.ng", password: "TrainbowAdmin2026!" }),
      });
      if (res.ok) {
        await refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Data states
  const [overview, setOverview] = useState<any>(null);
  const [tutors, setTutors] = useState<any[]>([]);
  const [incidents, setIncidents] = useState<any[]>([]);
  const [payoutBalances, setPayoutBalances] = useState<any[]>([]);
  const [reconciliations, setReconciliations] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [aiAnalytics, setAiAnalytics] = useState<any>(null);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);

  // Phase I Subjects & Governance State
  const [subjectsList, setSubjectsList] = useState<any[]>([]);
  const [tutorQualificationsList, setTutorQualificationsList] = useState<any[]>([]);
  const [newSubjectModalOpen, setNewSubjectModalOpen] = useState(false);
  const [evalModalSubject, setEvalModalSubject] = useState<any | null>(null);
  const [newSubjectForm, setNewSubjectForm] = useState({
    name: "",
    slug: "",
    description: "",
    category: "STEM",
    levels: "JSS 1-3, SSS 1-3, WAEC/JAMB",
    pricingTierMinorUnits: 750000,
    commissionRatePercent: 15.0,
    icon: "BookOpen",
    color: "purple",
    aiVerificationMethod: "FACTUAL_RETRIEVAL",
  });
  const [evalForm, setEvalForm] = useState({
    rubricScore: "90",
    unsafeContentBlockedCount: "10",
    groundingCoveragePercent: "95",
    notes: "Pedagogical alignment verified against national curriculum benchmarks.",
    signOffSignature: "Grace Danladi & Evaluator Board",
  });

  // Selection states for modals
  const [selectedTutor, setSelectedTutor] = useState<any>(null);
  const [selectedIncident, setSelectedIncident] = useState<any>(null);
  const [triageStatus, setTriageStatus] = useState<string>("INVESTIGATING");
  const [triageNotes, setTriageNotes] = useState<string>("");
  const [payoutModalTutor, setPayoutModalTutor] = useState<any>(null);
  const [payoutAmount, setPayoutAmount] = useState<number>(0);
  const [payoutNotes, setPayoutNotes] = useState<string>("");

  // Filters
  const [tutorFilter, setTutorFilter] = useState("ALL");
  const [incidentSeverityFilter, setIncidentSeverityFilter] = useState("ALL");
  const [userRoleFilter, setUserRoleFilter] = useState("ALL");
  const [userSearch, setUserSearch] = useState("");

  // Live WAT Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setWatTime(
        new Intl.DateTimeFormat("en-NG", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now) + " WAT"
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchOverview = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/overview");
      if (res.ok) {
        const data = await res.json();
        setOverview(data.overview);
      }
    } catch (err) {
      console.error("Failed to fetch overview", err);
    }
  }, []);

  const fetchTutors = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/tutors?status=${tutorFilter}`);
      if (res.ok) {
        const data = await res.json();
        setTutors(data.tutors || []);
      }
    } catch (err) {
      console.error("Failed to fetch tutors", err);
    }
  }, [tutorFilter]);

  const fetchSafeguarding = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/safeguarding?severity=${incidentSeverityFilter}`);
      if (res.ok) {
        const data = await res.json();
        setIncidents(data.incidents || []);
      }
    } catch (err) {
      console.error("Failed to fetch safeguarding incidents", err);
    }
  }, [incidentSeverityFilter]);

  const fetchFinance = useCallback(async () => {
    try {
      const [payoutRes, recRes, bkgRes] = await Promise.all([
        fetch("/api/admin/finance/payouts"),
        fetch("/api/admin/finance/reconciliation"),
        fetch("/api/admin/bookings"),
      ]);
      if (payoutRes.ok) {
        const data = await payoutRes.json();
        setPayoutBalances(data.balances || []);
      }
      if (recRes.ok) {
        const data = await recRes.json();
        setReconciliations(data.reports || []);
      }
      if (bkgRes.ok) {
        const data = await bkgRes.json();
        setBookings(data.bookings || []);
      }
    } catch (err) {
      console.error("Failed to fetch finance data", err);
    }
  }, []);

  const fetchAi = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/ai/usage");
      if (res.ok) {
        const data = await res.json();
        setAiAnalytics(data.analytics);
      }
    } catch (err) {
      console.error("Failed to fetch AI analytics", err);
    }
  }, []);

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/users?role=${userRoleFilter}&search=${encodeURIComponent(userSearch)}`);
      if (res.ok) {
        const data = await res.json();
        setUsersList(data.users || []);
      }
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  }, [userRoleFilter, userSearch]);

  const fetchAuditLogs = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/audit-log");
      if (res.ok) {
        const data = await res.json();
        setAuditLogs(data.logs || []);
      }
    } catch (err) {
      console.error("Failed to fetch audit logs", err);
    }
  }, []);

  const fetchAlerts = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/alerts");
      if (res.ok) {
        const data = await res.json();
        setAlerts(data.alerts || []);
      }
    } catch (err) {
      console.error("Failed to fetch alerts", err);
    }
  }, []);

  const fetchSubjects = useCallback(async () => {
    try {
      const res = await fetch("/api/subjects?all=true");
      if (res.ok) {
        const data = await res.json();
        setSubjectsList(data.subjects || []);
      }
    } catch (err) {
      console.error("Failed to fetch subjects", err);
    }
  }, []);

  const fetchQualifications = useCallback(async () => {
    try {
      const res = await fetch("/api/tutors/dr-tayo-okafor/subjects");
      if (res.ok) {
        const data = await res.json();
        setTutorQualificationsList(data.qualifications || []);
      }
    } catch (err) {
      console.error("Failed to fetch qualifications", err);
    }
  }, []);

  const refreshAll = useCallback(async () => {
    setLoading(true);
    await Promise.all([
      fetchOverview(),
      fetchTutors(),
      fetchSafeguarding(),
      fetchFinance(),
      fetchAi(),
      fetchUsers(),
      fetchAuditLogs(),
      fetchAlerts(),
      fetchSubjects(),
      fetchQualifications(),
    ]);
    setLoading(false);
  }, [fetchOverview, fetchTutors, fetchSafeguarding, fetchFinance, fetchAi, fetchUsers, fetchAuditLogs, fetchAlerts, fetchSubjects, fetchQualifications]);

  useEffect(() => {
    if (user && user.role === "ADMIN") {
      refreshAll();
    }
  }, [user, refreshAll]);

  // Actions
  const handleApproveTutor = async (tutorProfileId: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/tutors", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorProfileId,
          status: "APPROVED",
          notes: "Credentials inspected and verified under NDPA 2023 Child Safeguarding Standard.",
        }),
      });
      if (res.ok) {
        setNotice({ message: "Tutor approved and listed in public directory.", type: "success" });
        setSelectedTutor(null);
        await refreshAll();
      } else {
        const data = await res.json();
        setNotice({ message: data.error || "Approval failed", type: "error" });
      }
    } catch (e: any) {
      setNotice({ message: e.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleSuspendTutor = async (tutorProfileId: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/tutors", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorProfileId,
          status: "SUSPENDED",
          notes: "Suspended pending administrative compliance review.",
        }),
      });
      if (res.ok) {
        setNotice({ message: "Tutor suspended from platform.", type: "success" });
        setSelectedTutor(null);
        await refreshAll();
      }
    } catch (e: any) {
      setNotice({ message: e.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleTriageIncident = async () => {
    if (!selectedIncident) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/safeguarding", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          incidentId: selectedIncident.id,
          status: triageStatus,
          resolutionNotes: triageNotes || "Reviewed by Designated Safeguarding Lead.",
          assignedTo: "Grace Danladi (Designated Safeguarding Lead)",
        }),
      });
      if (res.ok) {
        setNotice({ message: `Incident ${selectedIncident.id} updated to ${triageStatus}.`, type: "success" });
        setSelectedIncident(null);
        setTriageNotes("");
        await refreshAll();
      }
    } catch (e: any) {
      setNotice({ message: e.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleRunReconciliation = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/finance/reconciliation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      if (res.ok) {
        setNotice({ message: "Settlement reconciliation report generated successfully.", type: "success" });
        await refreshAll();
      }
    } catch (e: any) {
      setNotice({ message: e.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleProcessPayout = async () => {
    if (!payoutModalTutor) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/finance/payouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorSlug: payoutModalTutor.tutorSlug,
          amountMinorUnits: payoutAmount,
          notes: payoutNotes || "Disbursed via Nigerian NIP Bank Settlement.",
        }),
      });
      if (res.ok) {
        setNotice({ message: `Payout of ₦${(payoutAmount / 100).toLocaleString()} successfully disbursed and debited.`, type: "success" });
        setPayoutModalTutor(null);
        setPayoutNotes("");
        await refreshAll();
      } else {
        const err = await res.json();
        setNotice({ message: err.error || "Payout processing failed", type: "error" });
      }
    } catch (e: any) {
      setNotice({ message: e.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleAcknowledgeAlert = async (alertId: string) => {
    try {
      const res = await fetch("/api/admin/alerts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alertId, status: "ACKNOWLEDGED" }),
      });
      if (res.ok) {
        await refreshAll();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleUserSuspension = async (userId: string, currentSuspended: boolean) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          action: "TOGGLE_SUSPENSION",
          isSuspended: !currentSuspended,
          reason: !currentSuspended ? "Administrative action" : undefined,
        }),
      });
      if (res.ok) {
        setNotice({ message: `User account ${!currentSuspended ? "suspended" : "reactivated"}.`, type: "success" });
        await refreshAll();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Phase I Action Handlers
  const handleCreateSubject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const levelsArray = newSubjectForm.levels.split(",").map((s) => s.trim()).filter(Boolean);
      const res = await fetch("/api/subjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newSubjectForm,
          levels: levelsArray,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNotice({ message: `Subject "${data.subject.name}" registered successfully in DRAFT status.`, type: "success" });
        setNewSubjectModalOpen(false);
        setNewSubjectForm({
          name: "",
          slug: "",
          description: "",
          category: "STEM",
          levels: "JSS 1-3, SSS 1-3, WAEC/JAMB",
          pricingTierMinorUnits: 750000,
          commissionRatePercent: 15.0,
          icon: "BookOpen",
          color: "purple",
          aiVerificationMethod: "FACTUAL_RETRIEVAL",
        });
        await refreshAll();
      } else {
        setNotice({ message: data.error || "Failed to create subject", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleSubjectAI = async (slug: string, currentEnabled: boolean) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/subjects/${slug}/ai/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: !currentEnabled }),
      });
      const data = await res.json();
      if (res.ok) {
        setNotice({ message: data.message, type: "success" });
        await refreshAll();
      } else {
        setNotice({ message: data.error || "AI Gate: Cannot enable AI without approved evaluation", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitEvaluation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!evalModalSubject) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/subjects/${evalModalSubject.slug}/ai/evaluate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rubricScore: Number(evalForm.rubricScore),
          unsafeContentBlockedCount: Number(evalForm.unsafeContentBlockedCount),
          groundingCoveragePercent: Number(evalForm.groundingCoveragePercent),
          notes: evalForm.notes,
          signOffSignature: evalForm.signOffSignature,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNotice({
          message: data.subjectStatus === "PASSED"
            ? `Evaluation PASSED (${data.evaluation.rubricScore}%). AI gate unlocked for ${evalModalSubject.name}!`
            : `Evaluation FAILED (${data.evaluation.rubricScore}% < 80% threshold). Safety gate remains locked.`,
          type: data.subjectStatus === "PASSED" ? "success" : "error",
        });
        setEvalModalSubject(null);
        await refreshAll();
      } else {
        setNotice({ message: data.error || "Evaluation submission failed", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSubjectStatus = async (slug: string, newStatus: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/subjects/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setNotice({ message: `Subject status updated to ${newStatus}.`, type: "success" });
        await refreshAll();
      } else {
        const err = await res.json();
        setNotice({ message: err.error || "Status update failed", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyTutorQualification = async (qualificationId: string, status: "APPROVED" | "REJECTED") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/tutors/dr-tayo-okafor/subjects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qualificationId, status }),
      });
      if (res.ok) {
        setNotice({ message: `Tutor subject qualification marked as ${status}.`, type: "success" });
        await refreshAll();
      } else {
        const err = await res.json();
        setNotice({ message: err.error || "Verification failed", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // Auth Protection Screens
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-slate-50">
        <div className="text-center space-y-3">
          <RefreshCw className="w-8 h-8 animate-spin text-brand-blue-600 mx-auto" />
          <p className="text-sm font-semibold text-neutral-slate-700">Verifying Administrative Privileges...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-slate-50 px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-neutral-slate-200 p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center mx-auto text-purple-700">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-neutral-slate-900 tracking-tight">Trainbow Administrator Sign-In</h1>
            <p className="text-sm text-neutral-slate-600 mt-2">
              Privileged operations portal for platform governance, safeguarding triage, tutor vetting, and financial reconciliation.
            </p>
          </div>

          <div className="pt-2">
            <Button
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 shadow-md"
              data-testid="admin-quick-signin-btn"
              onClick={handleAdminSignIn}
            >
              <Shield className="w-4 h-4 mr-2" />
              1-Tap Demo Admin Sign-In
            </Button>
            <p className="text-xs text-neutral-slate-500 mt-2">Demo Credential: admin@trainbowhub.ng</p>
          </div>

          <div className="pt-4 border-t border-neutral-slate-100">
            <Link href="/" className="text-xs font-semibold text-neutral-slate-500 hover:text-neutral-slate-800">
              ← Return to Trainbow HUB Public Portal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (user.role !== "ADMIN") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-slate-50 px-4 py-12">
        <div
          data-testid="admin-403-banner"
          className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-red-200 p-8 text-center space-y-5"
        >
          <div className="w-16 h-16 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center mx-auto text-red-600">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-950">403 — Administrative Privilege Required</h1>
            <p className="text-sm text-neutral-slate-600 mt-2">
              Your account ({user.fullName}, {user.role}) is not authorized to access system administrative tools under PRD AD-01 least-privilege standards.
            </p>
          </div>
          <div className="pt-3">
            <Link href="/dashboard" className="text-sm font-bold text-brand-blue-700 hover:underline">
              Go to Your Dashboard →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-slate-100 text-neutral-slate-900 pb-20">
      {/* Top Banner / Status Strip */}
      <header className="bg-neutral-slate-900 text-white border-b border-neutral-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-600 text-white shadow-xs">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight">Trainbow HUB Operations</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-900 text-purple-200 border border-purple-700">
                  AD-01 Platform Admin
                </span>
              </div>
              <p className="text-xs text-neutral-slate-300">Governance, Vetting, Safeguarding SLA & Financial Ledger</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live WAT Clock */}
            <div
              data-testid="wat-admin-clock"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-slate-800 text-neutral-slate-300 text-xs font-mono font-medium border border-neutral-slate-700"
            >
              <Clock className="w-3.5 h-3.5 text-brand-teal-400" />
              <span>{watTime || "WAT Clock"}</span>
            </div>

            {/* Active Alerts Badge */}
            {overview?.activeAlertsCount > 0 && (
              <button
                onClick={() => setActiveTab("overview")}
                data-testid="active-alerts-badge"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold hover:bg-amber-500/30 transition-colors"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>{overview.activeAlertsCount} Alerts</span>
              </button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={refreshAll}
              disabled={loading}
              className="text-white border-neutral-slate-700 bg-neutral-slate-800 hover:bg-neutral-slate-700 text-xs"
              data-testid="admin-refresh-btn"
            >
              <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${loading ? "animate-spin" : ""}`} />
              Sync
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-slate-800/80 overflow-x-auto">
          <nav className="flex space-x-1 py-1" aria-label="Admin Navigation Tabs">
            {[
              { id: "overview", label: "Overview & KPIs", icon: TrendingUp },
              { id: "tutors", label: `Tutor Vetting (${overview?.pendingTutorApprovals || 0})`, icon: GraduationCap },
              { id: "safeguarding", label: `Safeguarding SLA (${overview?.openSafeguardingIncidents || 0})`, icon: ShieldAlert },
              { id: "finance", label: "Reconciliation & Payouts", icon: DollarSign },
              { id: "ai", label: "AI Usage & Governance", icon: Bot },
              { id: "subjects", label: `Subjects & AI Gates (${subjectsList.length})`, icon: Layers },
              { id: "users", label: "User Access", icon: Users },
              { id: "audit", label: "Immutable Audit Log", icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTab)}
                  data-testid={`tab-${tab.id}`}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-purple-700 text-white shadow-xs"
                      : "text-neutral-slate-400 hover:text-white hover:bg-neutral-slate-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Notification Toast */}
      {notice && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div
            className={`p-3 rounded-xl border flex items-center justify-between text-xs font-semibold ${
              notice.type === "success"
                ? "bg-emerald-50 text-emerald-900 border-emerald-300"
                : "bg-red-50 text-red-900 border-red-300"
            }`}
          >
            <div className="flex items-center gap-2">
              {notice.type === "success" ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-red-600" />}
              <span>{notice.message}</span>
            </div>
            <button onClick={() => setNotice(null)} className="text-neutral-slate-500 hover:text-neutral-900">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* ==================================================================== */}
        {/* TAB 1: OVERVIEW & OPERATIONAL KPIS */}
        {/* ==================================================================== */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-neutral-slate-500 text-xs font-bold">
                  <span>Registered Users</span>
                  <Users className="w-4 h-4 text-brand-blue-600" />
                </div>
                <div className="mt-2 text-2xl font-black text-neutral-slate-900" data-testid="kpi-total-users">
                  {overview?.totalUsers || 0}
                </div>
                <p className="text-[11px] text-neutral-slate-500 mt-1">
                  {overview?.totalStudents || 0} Students · {overview?.totalTutors || 0} Tutors
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-neutral-slate-500 text-xs font-bold">
                  <span>Gross Booking Volume</span>
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="mt-2 text-2xl font-black text-neutral-slate-900" data-testid="kpi-gross-volume">
                  ₦{((overview?.totalVolumeMinorUnits || 0) / 100).toLocaleString()}
                </div>
                <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                  ₦{((overview?.platformCommissionMinorUnits || 0) / 100).toLocaleString()} Platform Fee (15%)
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-neutral-slate-500 text-xs font-bold">
                  <span>Safeguarding Queue</span>
                  <ShieldAlert className="w-4 h-4 text-red-600" />
                </div>
                <div className="mt-2 text-2xl font-black text-neutral-slate-900" data-testid="kpi-open-incidents">
                  {overview?.openSafeguardingIncidents || 0}
                </div>
                <p className="text-[11px] text-red-700 font-bold mt-1">
                  {overview?.urgentIncidentsCount || 0} Urgent (&lt;24h SLA)
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-neutral-slate-500 text-xs font-bold">
                  <span>Daily AI Cost</span>
                  <Bot className="w-4 h-4 text-purple-600" />
                </div>
                <div className="mt-2 text-2xl font-black text-neutral-slate-900" data-testid="kpi-ai-cost">
                  ${overview?.dailyAiCostUsd || "0.00"}
                </div>
                <p className="text-[11px] text-neutral-slate-500 mt-1">
                  {overview?.dailyAiQueriesCount || 0} Verified Mathematical Turns
                </p>
              </div>
            </div>

            {/* Operational Alerts & System Health (AD-06) */}
            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-neutral-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <h2 className="text-sm font-bold text-neutral-slate-900">Active Operational Alerts & Webhook Status (AD-06)</h2>
                </div>
                <span className="text-xs text-neutral-slate-500 font-mono">Real-time Monitor</span>
              </div>

              <div className="divide-y divide-neutral-slate-100">
                {alerts.length === 0 ? (
                  <div className="p-6 text-center text-xs text-neutral-slate-500 font-medium">
                    No active system alerts. All payment webhooks, video rooms, and AI quotas operating normally.
                  </div>
                ) : (
                  alerts.map((alt) => (
                    <div key={alt.id} className="p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-start gap-3 max-w-2xl">
                        <span
                          className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase mt-0.5 ${
                            alt.severity === "CRITICAL"
                              ? "bg-red-100 text-red-800 border border-red-200"
                              : alt.severity === "WARNING"
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : "bg-blue-100 text-blue-800 border border-blue-200"
                          }`}
                        >
                          {alt.severity}
                        </span>
                        <div>
                          <p className="font-bold text-neutral-slate-900">{alt.title}</p>
                          <p className="text-neutral-slate-600 mt-0.5">{alt.message}</p>
                          <p className="text-[10px] text-neutral-slate-600 mt-1 font-mono">
                            {new Date(alt.createdAt).toLocaleTimeString()} · Status: {alt.status}
                          </p>
                        </div>
                      </div>

                      {alt.status === "ACTIVE" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAcknowledgeAlert(alt.id)}
                          className="text-xs"
                        >
                          <Check className="w-3 h-3 mr-1" />
                          Acknowledge
                        </Button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Action Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                onClick={() => setActiveTab("tutors")}
                className="bg-white p-5 rounded-2xl border border-neutral-slate-200 hover:border-purple-300 transition-all cursor-pointer shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-slate-900">Review Tutor Applications</h3>
                <p className="text-xs text-neutral-slate-600 mt-1">
                  Inspect TRCN teaching credentials, NIN identities, and university degrees before approval.
                </p>
                <div className="mt-3 text-xs font-bold text-purple-700 flex items-center gap-1">
                  <span>Open Vetting Queue ({overview?.pendingTutorApprovals || 0})</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab("safeguarding")}
                className="bg-white p-5 rounded-2xl border border-neutral-slate-200 hover:border-red-300 transition-all cursor-pointer shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-slate-900">Safeguarding & Incident Triage</h3>
                <p className="text-xs text-neutral-slate-600 mt-1">
                  Route concerns directly to Grace Danladi with &lt;24h statutory SLA under Child Rights Act.
                </p>
                <div className="mt-3 text-xs font-bold text-red-700 flex items-center gap-1">
                  <span>Triage Incidents ({overview?.openSafeguardingIncidents || 0})</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab("finance")}
                className="bg-white p-5 rounded-2xl border border-neutral-slate-200 hover:border-emerald-300 transition-all cursor-pointer shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-slate-900">Settlement & Tutor Payouts</h3>
                <p className="text-xs text-neutral-slate-600 mt-1">
                  Execute Paystack transaction reconciliation and disburse verified tutor net earnings (85%).
                </p>
                <div className="mt-3 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span>Review Payout Balances</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 2: TUTOR VETTING & CREDENTIAL INSPECTION (AD-02) */}
        {/* ==================================================================== */}
        {activeTab === "tutors" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
              <div>
                <h2 className="text-base font-bold text-neutral-slate-900">Tutor Vetting Queue (AD-02)</h2>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Verify NIN identities, TRCN certifications, degrees, and criminal history screens before public listing.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-slate-500 font-semibold">Filter:</span>
                <select
                  aria-label="Filter tutors by vetting status"
                  value={tutorFilter}
                  onChange={(e) => setTutorFilter(e.target.value)}
                  className="text-xs rounded-lg border border-neutral-slate-300 bg-white py-1.5 px-2.5 font-medium"
                >
                  <option value="ALL">All Applications</option>
                  <option value="PENDING_REVIEW">Pending Review Only</option>
                  <option value="APPROVED">Approved</option>
                  <option value="SUSPENDED">Suspended</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs" data-testid="tutor-vetting-table">
                <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                  <tr>
                    <th className="py-3 px-4">Educator / Name</th>
                    <th className="py-3 px-4">Subject & Level</th>
                    <th className="py-3 px-4">Rate (NGN)</th>
                    <th className="py-3 px-4">Verified Credentials</th>
                    <th className="py-3 px-4">Vetting Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-slate-100">
                  {tutors.map(({ profile, user: tutorUser }) => (
                    <tr key={profile.id} className="hover:bg-neutral-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-neutral-slate-900">{tutorUser.fullName}</div>
                        <div className="text-neutral-slate-500 text-[11px]">{tutorUser.email}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-slate-800">{profile.title}</div>
                        <div className="text-[11px] text-neutral-slate-500 truncate max-w-xs">{profile.degreeTitle || "Degree on file"}</div>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-neutral-slate-900">
                        ₦{(profile.hourlyRateMinorUnits / 100).toLocaleString()}/hr
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col gap-1">
                          <span className={`inline-flex items-center gap-1 font-semibold ${profile.ninVerified ? "text-emerald-700" : "text-amber-700"}`}>
                            {profile.ninVerified ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                            <span>NIN: {profile.ninNumber || "Verified"}</span>
                          </span>
                          <span className={`inline-flex items-center gap-1 font-semibold ${profile.trcnCertified ? "text-emerald-700" : "text-amber-700"}`}>
                            {profile.trcnCertified ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                            <span>TRCN: {profile.trcnCertificateNumber || (profile.trcnCertified ? "Certified" : "Pending Check")}</span>
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            profile.status === "APPROVED"
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : profile.status === "PENDING_REVIEW"
                              ? "bg-amber-100 text-amber-800 border border-amber-300"
                              : "bg-red-100 text-red-800 border border-red-300"
                          }`}
                        >
                          {profile.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedTutor({ profile, tutorUser })}
                          className="text-xs"
                          data-testid={`inspect-tutor-${profile.slug}`}
                        >
                          Inspect Docs
                        </Button>
                        {profile.status === "PENDING_REVIEW" && (
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                            onClick={() => handleApproveTutor(profile.id)}
                            data-testid="approve-tutor-btn"
                          >
                            Approve
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Credential Inspection Modal */}
            {selectedTutor && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-slate-100">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-purple-700" />
                      <h3 className="font-bold text-sm text-neutral-slate-900">Credential Inspection: {selectedTutor.tutorUser.fullName}</h3>
                    </div>
                    <button aria-label="Close credentials modal" onClick={() => setSelectedTutor(null)} className="text-neutral-slate-500 hover:text-neutral-900">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 space-y-1.5">
                      <p className="font-bold text-neutral-slate-900">Academic Qualifications & Institution</p>
                      <p className="text-neutral-slate-700">{selectedTutor.profile.degreeTitle || "Degree verified"}</p>
                      <p className="text-neutral-slate-500">{selectedTutor.profile.institutionName || "Accredited Nigerian Institution"}</p>
                    </div>

                    <div className="p-3 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 space-y-1.5">
                      <p className="font-bold text-neutral-slate-900">Identity & Statutory Background Records</p>
                      <p className="text-neutral-slate-700">National Identification (NIN): {selectedTutor.profile.ninNumber || "Verified via NIMC"}</p>
                      <p className="text-neutral-slate-700">Teachers Registration Council (TRCN): {selectedTutor.profile.trcnCertificateNumber || "Scan attached"}</p>
                      <p className="text-neutral-slate-500">Settlement Account: {selectedTutor.profile.settlementBankName} ({selectedTutor.profile.settlementAccount})</p>
                    </div>

                    <div className="p-3 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200">
                      <p className="font-bold text-neutral-slate-900">Educator Teaching Philosophy</p>
                      <p className="text-neutral-slate-600 mt-1">{selectedTutor.profile.teachingApproach}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-slate-100">
                    <Button variant="outline" size="sm" onClick={() => setSelectedTutor(null)}>
                      Close
                    </Button>
                    {selectedTutor.profile.status !== "SUSPENDED" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-700 hover:bg-red-50 border-red-200"
                        onClick={() => handleSuspendTutor(selectedTutor.profile.id)}
                      >
                        Suspend Tutor
                      </Button>
                    )}
                    {selectedTutor.profile.status === "PENDING_REVIEW" && (
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                        onClick={() => handleApproveTutor(selectedTutor.profile.id)}
                        data-testid="modal-approve-tutor-btn"
                      >
                        Verify & Approve
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 3: SAFEGUARDING & CHILD PROTECTION SLA QUEUE (AD-04, CL-04) */}
        {/* ==================================================================== */}
        {activeTab === "safeguarding" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
              <div>
                <h2 className="text-base font-bold text-neutral-slate-900">Designated Safeguarding Lead Triage Queue (AD-04)</h2>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Designated Safeguarding Lead: Grace Danladi · Strict SLA: &lt;24 hours for Urgent concerns under Child Rights Act & NDPA 2023.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-slate-500 font-semibold">Severity:</span>
                <select
                  aria-label="Filter incidents by severity"
                  value={incidentSeverityFilter}
                  onChange={(e) => setIncidentSeverityFilter(e.target.value)}
                  className="text-xs rounded-lg border border-neutral-slate-300 bg-white py-1.5 px-2.5 font-medium"
                >
                  <option value="ALL">All Severities</option>
                  <option value="URGENT">Urgent Only</option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs" data-testid="safeguarding-queue">
                <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                  <tr>
                    <th className="py-3 px-4">Severity / SLA Target</th>
                    <th className="py-3 px-4">Category & Details</th>
                    <th className="py-3 px-4">Reporter / Ward</th>
                    <th className="py-3 px-4">Assigned Officer</th>
                    <th className="py-3 px-4">Triage Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-slate-100">
                  {incidents.map((inc) => (
                    <tr key={inc.id} className="hover:bg-neutral-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              inc.severity === "URGENT"
                                ? "bg-red-100 text-red-900 border border-red-300 animate-pulse"
                                : inc.severity === "HIGH"
                                ? "bg-amber-100 text-amber-900 border border-amber-300"
                                : "bg-blue-100 text-blue-900 border border-blue-200"
                            }`}
                          >
                            {inc.severity}
                          </span>
                          <span className={`font-mono text-[11px] font-bold ${inc.isSlaBreached ? "text-red-700" : "text-neutral-slate-600"}`}>
                            {inc.remainingSlaHours}h SLA remaining
                          </span>
                        </div>
                        <div className="text-[10px] text-neutral-slate-600 mt-1 font-mono">{inc.id}</div>
                      </td>
                      <td className="py-3.5 px-4 max-w-sm">
                        <div className="font-bold text-neutral-slate-900">{inc.category}</div>
                        <div className="text-neutral-slate-600 text-[11px] truncate">{inc.description}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-slate-800">{inc.reporterName}</div>
                        <div className="text-[11px] text-neutral-slate-500">Student Account</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-neutral-slate-700">
                        {inc.assignedTo || "Grace Danladi"}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            inc.status === "RESOLVED"
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : inc.status === "INVESTIGATING"
                              ? "bg-blue-100 text-blue-800 border border-blue-300"
                              : "bg-amber-100 text-amber-800 border border-amber-300"
                          }`}
                        >
                          {inc.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedIncident(inc);
                            setTriageStatus(inc.status);
                            setTriageNotes(inc.resolutionNotes || "");
                          }}
                          className="text-xs"
                          data-testid={`triage-btn-${inc.id}`}
                        >
                          Triage Incident
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Incident Triage Modal */}
            {selectedIncident && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-slate-100">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-red-600" />
                      <h3 className="font-bold text-sm text-neutral-slate-900">Incident Triage: {selectedIncident.id}</h3>
                    </div>
                    <button onClick={() => setSelectedIncident(null)} className="text-neutral-slate-400 hover:text-neutral-900">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-3 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 text-xs space-y-1">
                    <p className="font-bold text-neutral-slate-900">Report Description</p>
                    <p className="text-neutral-slate-700">{selectedIncident.description}</p>
                    <p className="text-[10px] text-neutral-slate-600 mt-1">
                      Reported by: {selectedIncident.reporterName} · Timestamp: {new Date(selectedIncident.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label htmlFor="triage-status-select" className="block font-bold text-neutral-slate-700 mb-1">Update Triage Status</label>
                      <select
                        id="triage-status-select"
                        aria-label="Update Triage Status"
                        value={triageStatus}
                        onChange={(e) => setTriageStatus(e.target.value)}
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                        data-testid="triage-status-select"
                      >
                        <option value="OPEN">OPEN (Awaiting Initial Action)</option>
                        <option value="INVESTIGATING">INVESTIGATING (Reviewing Logs / Contacting Guardian)</option>
                        <option value="RESOLVED">RESOLVED (Remediation Complete)</option>
                        <option value="DISMISSED">DISMISSED (False Alarm / Technical Glitch)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-neutral-slate-700 mb-1">Resolution & Case File Notes</label>
                      <textarea
                        rows={3}
                        value={triageNotes}
                        onChange={(e) => setTriageNotes(e.target.value)}
                        placeholder="Document investigation outcome, guardian contact, or tutor suspension reason..."
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                        data-testid="triage-notes-textarea"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-slate-100">
                    <Button variant="outline" size="sm" onClick={() => setSelectedIncident(null)}>
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="bg-purple-700 hover:bg-purple-800 text-white font-bold"
                      onClick={handleTriageIncident}
                      data-testid="resolve-incident-btn"
                    >
                      Commit Triage Record
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 4: SETTLEMENT RECONCILIATION & TUTOR PAYOUTS (PY-07, PY-08) */}
        {/* ==================================================================== */}
        {activeTab === "finance" && (
          <div className="space-y-6">
            {/* Paystack Daily Reconciliation Panel (PY-07) */}
            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs p-5" data-testid="reconciliation-panel">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-slate-100">
                <div>
                  <h2 className="text-base font-bold text-neutral-slate-900">Daily Provider Settlement Reconciliation (PY-07)</h2>
                  <p className="text-xs text-neutral-slate-600 mt-0.5">
                    Automated audit cross-referencing Paystack NGN gateway settlement statements against internal ledger transactions.
                  </p>
                </div>

                <Button
                  size="sm"
                  onClick={handleRunReconciliation}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                  data-testid="run-reconcile-btn"
                >
                  <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                  Run Daily Settlement Audit
                </Button>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Gateway</th>
                      <th className="py-2.5 px-3">Provider Settled</th>
                      <th className="py-2.5 px-3">Internal Matched</th>
                      <th className="py-2.5 px-3">Discrepancy</th>
                      <th className="py-2.5 px-3">Audit Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-slate-100">
                    {reconciliations.map((rec) => (
                      <tr key={rec.id} className="hover:bg-neutral-slate-50/70">
                        <td className="py-3 px-3 font-mono font-medium">{new Date(rec.reportDate).toLocaleDateString()}</td>
                        <td className="py-3 px-3 font-semibold">{rec.provider}</td>
                        <td className="py-3 px-3 font-mono">₦{((rec.totalSettledMinorUnits || 0) / 100).toLocaleString()}</td>
                        <td className="py-3 px-3 font-mono">₦{((rec.internalTotalMinorUnits || 0) / 100).toLocaleString()} ({rec.matchedCount} orders)</td>
                        <td className="py-3 px-3 font-mono font-bold text-emerald-700">
                          ₦{((rec.discrepancyMinorUnits || 0) / 100).toLocaleString()}
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              rec.status === "BALANCED"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : "bg-red-100 text-red-800 border border-red-300"
                            }`}
                          >
                            {rec.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tutor Payout Ledger Table (PY-08) */}
            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs p-5">
              <div className="pb-4 border-b border-neutral-slate-100">
                <h2 className="text-base font-bold text-neutral-slate-900">Tutor Earnings Ledger & Manual Payouts (PY-08)</h2>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Derived from immutable append-only ledger events: 85% net tutor earnings minus processed payouts and refund debits.
                </p>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs" data-testid="payouts-table">
                  <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Educator</th>
                      <th className="py-2.5 px-3">Settlement Bank</th>
                      <th className="py-2.5 px-3">Gross Booking (100%)</th>
                      <th className="py-2.5 px-3">Platform Fee (15%)</th>
                      <th className="py-2.5 px-3">Disbursed Payouts</th>
                      <th className="py-2.5 px-3">Available Balance (85%)</th>
                      <th className="py-2.5 px-3 text-right">Disburse Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-slate-100">
                    {payoutBalances.map((item) => (
                      <tr key={item.tutorSlug} className="hover:bg-neutral-slate-50/70">
                        <td className="py-3 px-3 font-bold text-neutral-slate-900">{item.tutorName}</td>
                        <td className="py-3 px-3">
                          <div className="font-semibold">{item.bankName}</div>
                          <div className="text-[11px] text-neutral-slate-500 font-mono">{item.accountNumber}</div>
                        </td>
                        <td className="py-3 px-3 font-mono">₦{(item.grossEarningsMinorUnits / 100).toLocaleString()}</td>
                        <td className="py-3 px-3 font-mono text-neutral-slate-500">₦{(item.commissionDebitedMinorUnits / 100).toLocaleString()}</td>
                        <td className="py-3 px-3 font-mono text-neutral-slate-500">₦{(item.payoutsProcessedMinorUnits / 100).toLocaleString()}</td>
                        <td className="py-3 px-3 font-mono font-black text-emerald-700">
                          ₦{(item.availableBalanceMinorUnits / 100).toLocaleString()}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <Button
                            size="sm"
                            disabled={item.availableBalanceMinorUnits <= 0}
                            onClick={() => {
                              setPayoutModalTutor(item);
                              setPayoutAmount(item.availableBalanceMinorUnits);
                            }}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                            data-testid={`process-payout-btn-${item.tutorSlug}`}
                          >
                            Disburse Payout
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Booking Monitoring & Disputes (AD-03, PY-09) */}
            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs p-5">
              <div className="pb-4 border-b border-neutral-slate-100">
                <h2 className="text-base font-bold text-neutral-slate-900">Booking Monitoring & Dispute Resolutions (AD-03, PY-09)</h2>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Live state table tracking all 1-on-1 tutoring sessions, payments, cancellations, and disputes.
                </p>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs" data-testid="disputes-table">
                  <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Booking ID</th>
                      <th className="py-2.5 px-3">Educator</th>
                      <th className="py-2.5 px-3">Schedule (WAT)</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Booking Status</th>
                      <th className="py-2.5 px-3">Payment Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-slate-100">
                    {bookings.map((b) => (
                      <tr key={b.id} className="hover:bg-neutral-slate-50/70">
                        <td className="py-3 px-3 font-mono font-medium">{b.id}</td>
                        <td className="py-3 px-3 font-semibold">{b.tutorName}</td>
                        <td className="py-3 px-3 font-medium">{b.slotDate} · {b.slotTime}</td>
                        <td className="py-3 px-3 font-mono font-bold">₦{(b.amountMinorUnits / 100).toLocaleString()}</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-slate-100 text-neutral-slate-800">
                            {b.bookingStatus}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              b.paymentStatus === "VERIFIED"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-neutral-slate-100 text-neutral-slate-800"
                            }`}
                          >
                            {b.paymentStatus}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payout Disbursement Modal */}
            {payoutModalTutor && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-slate-100">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-bold text-sm text-neutral-slate-900">Disburse Payout: {payoutModalTutor.tutorName}</h3>
                    </div>
                    <button aria-label="Close payout modal" onClick={() => setPayoutModalTutor(null)} className="text-neutral-slate-500 hover:text-neutral-900">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-3 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 text-xs space-y-1">
                    <p className="font-bold text-neutral-slate-900">Beneficiary Bank Account</p>
                    <p className="text-neutral-slate-700">{payoutModalTutor.bankName} · {payoutModalTutor.accountNumber}</p>
                    <p className="text-neutral-slate-500">Account Name: {payoutModalTutor.accountName}</p>
                    <p className="text-emerald-700 font-mono font-bold mt-1">
                      Max Available: ₦{(payoutModalTutor.availableBalanceMinorUnits / 100).toLocaleString()}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block font-bold text-neutral-slate-700 mb-1">Disbursement Amount (Kobo minor units)</label>
                      <input
                        type="number"
                        value={payoutAmount}
                        max={payoutModalTutor.availableBalanceMinorUnits}
                        min={100}
                        onChange={(e) => setPayoutAmount(Number(e.target.value))}
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-mono"
                        data-testid="payout-amount-input"
                      />
                      <p className="text-[10px] text-neutral-slate-500 mt-1">
                        Amount in Naira: ₦{(payoutAmount / 100).toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <label className="block font-bold text-neutral-slate-700 mb-1">Settlement Memo / Reference Notes</label>
                      <input
                        type="text"
                        value={payoutNotes}
                        onChange={(e) => setPayoutNotes(e.target.value)}
                        placeholder="NIP Settlement reference..."
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-slate-100">
                    <Button variant="outline" size="sm" onClick={() => setPayoutModalTutor(null)}>
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                      onClick={handleProcessPayout}
                      data-testid="confirm-payout-btn"
                    >
                      Authorize & Disburse Payout
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 5: AI USAGE & GOVERNANCE ANALYTICS (AD-05) */}
        {/* ==================================================================== */}
        {activeTab === "ai" && (
          <div className="space-y-6" data-testid="ai-usage-panel">
            <div className="bg-white p-5 rounded-2xl border border-neutral-slate-200 shadow-xs">
              <h2 className="text-base font-bold text-neutral-slate-900">Trainbow HUB AI Usage & Cost Analytics (AD-05)</h2>
              <p className="text-xs text-neutral-slate-600 mt-0.5">
                Monitoring Socratic mathematical reasoning turns, token consumption, and statutory NDPA 2023 anonymization safeguards.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                <div className="p-4 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200">
                  <p className="text-xs font-semibold text-neutral-slate-500">Total Mathematical Queries</p>
                  <p className="text-2xl font-black text-neutral-slate-900 mt-1">{aiAnalytics?.totalQueries || 0}</p>
                </div>
                <div className="p-4 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200">
                  <p className="text-xs font-semibold text-neutral-slate-500">Prompt Tokens (Syllabus Input)</p>
                  <p className="text-2xl font-black text-neutral-slate-900 mt-1">{(aiAnalytics?.totalPromptTokens || 0).toLocaleString()}</p>
                </div>
                <div className="p-4 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200">
                  <p className="text-xs font-semibold text-neutral-slate-500">Completion Tokens (Step Reasoning)</p>
                  <p className="text-2xl font-black text-neutral-slate-900 mt-1">{(aiAnalytics?.totalCompletionTokens || 0).toLocaleString()}</p>
                </div>
                <div className="p-4 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200">
                  <p className="text-xs font-semibold text-neutral-slate-500">Estimated Cost (USD / NGN)</p>
                  <p className="text-2xl font-black text-purple-700 mt-1">
                    ${aiAnalytics?.estimatedCostUsd || "0.00"}
                  </p>
                  <p className="text-[10px] text-neutral-slate-500 mt-0.5">
                    ≈ ₦{(((aiAnalytics?.estimatedCostNgn || 0) / 100)).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Curriculum Breakdown */}
              <div className="mt-6 pt-5 border-t border-neutral-slate-100">
                <h3 className="text-xs font-bold text-neutral-slate-800 uppercase tracking-wider mb-3">
                  Syllabus Distribution Across Threads
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {aiAnalytics?.topCurriculums?.map((item: any) => (
                    <div key={item.curriculum} className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-xs">
                      <span className="font-bold text-purple-900">{item.curriculum}</span>
                      <p className="text-neutral-slate-600 mt-1">{item.count} Active Threads</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 6: MULTI-SUBJECT REGISTRY & AI GATES (SB-01 to SB-09) */}
        {/* ==================================================================== */}
        {activeTab === "subjects" && (
          <div className="space-y-6">
            {/* Header with Register Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
              <div>
                <h2 className="text-base font-bold text-neutral-slate-900">Multi-Subject Academic Registry (SB-01, SB-05, SB-09)</h2>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Dynamic curriculum administration, commission overrides, and pre-release AI safety evaluation gates.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  data-testid="add-subject-btn"
                  onClick={() => setNewSubjectModalOpen(true)}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs"
                >
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  Register New Subject
                </Button>
              </div>
            </div>

            {/* Subjects Table */}
            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-neutral-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-sm text-neutral-slate-900">Configured Academic Subjects</h3>
                <span className="text-xs text-neutral-slate-500 font-mono">{subjectsList.length} subjects registered</span>
              </div>
              <table className="w-full text-left text-xs" data-testid="subjects-table">
                <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                  <tr>
                    <th className="py-3 px-4">Subject &amp; Category</th>
                    <th className="py-3 px-4">Curriculum Tracks</th>
                    <th className="py-3 px-4">Pricing &amp; Commission</th>
                    <th className="py-3 px-4">AI Socratic Status (SB-05)</th>
                    <th className="py-3 px-4">Safety Evaluation Gate (SB-06)</th>
                    <th className="py-3 px-4">Lifecycle Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-slate-100">
                  {subjectsList.map((s) => (
                    <tr key={s.slug} className="hover:bg-neutral-slate-50/70" data-testid={`subject-row-${s.slug}`}>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-neutral-slate-900">{s.name}</div>
                        <div className="text-[11px] text-neutral-slate-600 font-mono">{s.slug} · {s.category}</div>
                      </td>
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {s.levels?.slice(0, 2).map((l: string) => (
                            <span key={l} className="bg-neutral-slate-100 text-neutral-slate-700 px-1.5 py-0.5 rounded text-[10px]">
                              {l}
                            </span>
                          ))}
                          {s.levels?.length > 2 && (
                            <span className="text-[10px] text-neutral-slate-500">+{s.levels.length - 2}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-slate-900">
                          ₦{(s.pricingTierMinorUnits / 100).toLocaleString()}/hr
                        </div>
                        <div className="text-[11px] text-purple-700 font-mono font-bold">
                          {s.commissionRatePercent}% Comm. Override
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              s.aiEnabled
                                ? "bg-purple-100 text-purple-900 border border-purple-300"
                                : "bg-neutral-slate-100 text-neutral-slate-600 border border-neutral-slate-200"
                            }`}
                          >
                            {s.aiEnabled ? "ACTIVE" : "DISABLED"}
                          </span>
                          <button
                            data-testid={`toggle-ai-btn-${s.slug}`}
                            onClick={() => handleToggleSubjectAI(s.slug, s.aiEnabled)}
                            className={`px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                              s.aiEnabled
                                ? "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                                : "bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200"
                            }`}
                          >
                            {s.aiEnabled ? "Deactivate" : "Activate"}
                          </button>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                s.aiEvaluationStatus === "PASSED"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : s.aiEvaluationStatus === "IN_EVALUATION"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-neutral-slate-100 text-neutral-slate-600"
                              }`}
                            >
                              {s.aiEvaluationStatus} ({s.aiEvaluationScore ? `${s.aiEvaluationScore}%` : "No score"})
                            </span>
                          </div>
                          <button
                            data-testid={`eval-subject-btn-${s.slug}`}
                            onClick={() => {
                              setEvalModalSubject(s);
                              setEvalForm({
                                rubricScore: s.aiEvaluationScore ? String(s.aiEvaluationScore) : "85",
                                unsafeContentBlockedCount: "10",
                                groundingCoveragePercent: "90",
                                notes: `Pedagogical evaluation for ${s.name}`,
                                signOffSignature: "Admin Evaluator Board",
                              });
                            }}
                            className="text-[10px] text-brand-purple-700 hover:underline font-bold block"
                          >
                            Audit Rubric / Evaluate Gate →
                          </button>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          aria-label={`Change lifecycle status for ${s.name}`}
                          value={s.status}
                          onChange={(e) => handleUpdateSubjectStatus(s.slug, e.target.value)}
                          className={`text-xs font-bold rounded-lg px-2 py-1 border ${
                            s.status === "ACTIVE"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                              : s.status === "DRAFT"
                              ? "bg-amber-50 text-amber-800 border-amber-300"
                              : "bg-neutral-slate-100 text-neutral-slate-600 border-neutral-slate-300"
                          }`}
                        >
                          <option value="DRAFT">DRAFT (Hidden)</option>
                          <option value="ACTIVE">ACTIVE (Public)</option>
                          <option value="RETIRED">RETIRED</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Multi-Subject Tutor Qualifications (SB-03) */}
            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-neutral-slate-100">
                <h3 className="font-bold text-sm text-neutral-slate-900">
                  Multi-Subject Tutor Qualifications Queue (SB-03)
                </h3>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Tutors must be verified and approved per subject before offering lessons in that curriculum.
                </p>
              </div>

              <table className="w-full text-left text-xs" data-testid="tutor-subject-qualifications-table">
                <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                  <tr>
                    <th className="py-3 px-4">Tutor Identifier</th>
                    <th className="py-3 px-4">Subject Curriculum</th>
                    <th className="py-3 px-4">Approved Levels</th>
                    <th className="py-3 px-4">Credential Evidence</th>
                    <th className="py-3 px-4">Status &amp; Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-slate-100">
                  {tutorQualificationsList.map((q) => (
                    <tr key={q.id} className="hover:bg-neutral-slate-50/70" data-testid={`qual-row-${q.id}`}>
                      <td className="py-3 px-4 font-bold text-neutral-slate-900">{q.tutorSlug}</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-purple-800 uppercase">{q.subjectSlug}</span>
                      </td>
                      <td className="py-3 px-4 font-mono text-neutral-slate-600">
                        {q.levels?.join(", ")}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[11px] text-neutral-slate-700 font-medium">{q.credentialType}</span>
                        <div className="text-[10px] text-neutral-slate-500 font-mono truncate max-w-xs">{q.credentialEvidenceUrl}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              q.status === "APPROVED"
                                ? "bg-emerald-100 text-emerald-800"
                                : q.status === "PENDING"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {q.status}
                          </span>
                          {q.status !== "APPROVED" && (
                            <Button
                              size="sm"
                              data-testid={`approve-qual-btn-${q.id}`}
                              onClick={() => handleVerifyTutorQualification(q.id, "APPROVED")}
                              className="text-[10px] bg-emerald-700 hover:bg-emerald-800 text-white h-7 px-2"
                            >
                              Approve
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal: Register New Subject */}
            {newSubjectModalOpen && (
              <div
                className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
                data-testid="add-subject-modal"
              >
                <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-slate-100">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-700" />
                      <h3 className="font-bold text-sm text-neutral-slate-900">Register New Academic Subject (SB-01)</h3>
                    </div>
                    <button
                      aria-label="Close modal"
                      onClick={() => setNewSubjectModalOpen(false)}
                      className="text-neutral-slate-500 hover:text-neutral-900"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleCreateSubject} className="space-y-3 text-xs">
                    <div>
                      <label htmlFor="new-sub-name" className="block font-bold text-neutral-slate-700 mb-1">Subject Name</label>
                      <input
                        id="new-sub-name"
                        type="text"
                        required
                        value={newSubjectForm.name}
                        onChange={(e) => setNewSubjectForm({ ...newSubjectForm, name: e.target.value })}
                        placeholder="e.g. Further Mathematics"
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="new-sub-slug" className="block font-bold text-neutral-slate-700 mb-1">Slug</label>
                        <input
                          id="new-sub-slug"
                          type="text"
                          required
                          value={newSubjectForm.slug}
                          onChange={(e) => setNewSubjectForm({ ...newSubjectForm, slug: e.target.value })}
                          placeholder="e.g. further-mathematics"
                          className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                        />
                      </div>
                      <div>
                        <label htmlFor="new-sub-category" className="block font-bold text-neutral-slate-700 mb-1">Category</label>
                        <select
                          id="new-sub-category"
                          aria-label="Subject Category"
                          value={newSubjectForm.category}
                          onChange={(e) => setNewSubjectForm({ ...newSubjectForm, category: e.target.value })}
                          className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                        >
                          <option value="STEM">STEM</option>
                          <option value="Languages">Languages</option>
                          <option value="Sciences">Sciences</option>
                          <option value="Arts">Arts</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="new-sub-desc" className="block font-bold text-neutral-slate-700 mb-1">Description</label>
                      <textarea
                        id="new-sub-desc"
                        rows={2}
                        required
                        value={newSubjectForm.description}
                        onChange={(e) => setNewSubjectForm({ ...newSubjectForm, description: e.target.value })}
                        placeholder="Curriculum overview and examination mapping..."
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="new-sub-pricing" className="block font-bold text-neutral-slate-700 mb-1">Base Lesson Rate (Kobo)</label>
                        <input
                          id="new-sub-pricing"
                          type="number"
                          value={newSubjectForm.pricingTierMinorUnits}
                          onChange={(e) => setNewSubjectForm({ ...newSubjectForm, pricingTierMinorUnits: Number(e.target.value) })}
                          className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                        />
                      </div>
                      <div>
                        <label htmlFor="new-sub-commission" className="block font-bold text-neutral-slate-700 mb-1">Commission % (SB-09)</label>
                        <input
                          id="new-sub-commission"
                          type="number"
                          step="0.5"
                          value={newSubjectForm.commissionRatePercent}
                          onChange={(e) => setNewSubjectForm({ ...newSubjectForm, commissionRatePercent: Number(e.target.value) })}
                          className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <Button type="button" variant="outline" size="sm" onClick={() => setNewSubjectModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" size="sm" className="bg-purple-700 hover:bg-purple-800 text-white font-bold">
                        Create Subject
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Modal: AI Rubric Evaluation & Rollout Gate */}
            {evalModalSubject && (
              <div
                className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
                data-testid="ai-eval-modal"
              >
                <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-slate-100">
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-purple-700" />
                      <h3 className="font-bold text-sm text-neutral-slate-900">
                        AI Safety &amp; Rubric Gate: {evalModalSubject.name} (SB-06)
                      </h3>
                    </div>
                    <button
                      aria-label="Close modal"
                      onClick={() => setEvalModalSubject(null)}
                      className="text-neutral-slate-500 hover:text-neutral-900"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-xs space-y-1">
                    <p className="font-bold text-purple-950">Statutory Release Gate Invariant</p>
                    <p className="text-purple-900">
                      AI Socratic tutoring can ONLY be enabled when the evaluated rubric score is ≥80.0% and
                      grounding coverage is ≥70.0%. Submissions below this mark will leave the live toggle locked.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitEvaluation} className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="eval-score" className="block font-bold text-neutral-slate-700 mb-1">Rubric Score (0-100%)</label>
                        <input
                          id="eval-score"
                          type="number"
                          step="0.5"
                          min="0"
                          max="100"
                          required
                          value={evalForm.rubricScore}
                          onChange={(e) => setEvalForm({ ...evalForm, rubricScore: e.target.value })}
                          className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                          data-testid="eval-rubric-score-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="eval-grounding" className="block font-bold text-neutral-slate-700 mb-1">Grounding Coverage (%)</label>
                        <input
                          id="eval-grounding"
                          type="number"
                          step="0.5"
                          min="0"
                          max="100"
                          required
                          value={evalForm.groundingCoveragePercent}
                          onChange={(e) => setEvalForm({ ...evalForm, groundingCoveragePercent: e.target.value })}
                          className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="eval-blocked" className="block font-bold text-neutral-slate-700 mb-1">Unsafe Content Test Cases Blocked</label>
                      <input
                        id="eval-blocked"
                        type="number"
                        min="0"
                        required
                        value={evalForm.unsafeContentBlockedCount}
                        onChange={(e) => setEvalForm({ ...evalForm, unsafeContentBlockedCount: e.target.value })}
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="eval-notes" className="block font-bold text-neutral-slate-700 mb-1">Evaluator Audit Findings</label>
                      <textarea
                        id="eval-notes"
                        rows={2}
                        value={evalForm.notes}
                        onChange={(e) => setEvalForm({ ...evalForm, notes: e.target.value })}
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="eval-sig" className="block font-bold text-neutral-slate-700 mb-1">Sign-Off Signature</label>
                      <input
                        id="eval-sig"
                        type="text"
                        required
                        value={evalForm.signOffSignature}
                        onChange={(e) => setEvalForm({ ...evalForm, signOffSignature: e.target.value })}
                        placeholder="Formal signatory identifier..."
                        className="w-full rounded-lg border border-neutral-slate-300 p-2 font-medium font-mono"
                        data-testid="eval-signature-input"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <Button type="button" variant="outline" size="sm" onClick={() => setEvalModalSubject(null)}>
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size="sm"
                        data-testid="submit-eval-btn"
                        className="bg-purple-700 hover:bg-purple-800 text-white font-bold"
                      >
                        Submit Formal Evaluation
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 7: USER MANAGEMENT & ACCESS CONTROL (AD-01) */}
        {/* ==================================================================== */}
        {activeTab === "users" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
              <div>
                <h2 className="text-base font-bold text-neutral-slate-900">User Access Management (AD-01)</h2>
                <p className="text-xs text-neutral-slate-600 mt-0.5">
                  Role-based authorization directory supporting account suspension and role assignments.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-neutral-slate-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    placeholder="Search name or email..."
                    className="text-xs pl-8 pr-3 py-1.5 rounded-lg border border-neutral-slate-300 w-48"
                  />
                </div>
                <select
                  aria-label="Filter users by system role"
                  value={userRoleFilter}
                  onChange={(e) => setUserRoleFilter(e.target.value)}
                  className="text-xs rounded-lg border border-neutral-slate-300 bg-white py-1.5 px-2 font-medium"
                >
                  <option value="ALL">All Roles</option>
                  <option value="STUDENT">Students</option>
                  <option value="TUTOR">Tutors</option>
                  <option value="PARENT">Parents</option>
                  <option value="ADMIN">Admins</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs" data-testid="user-management-table">
                <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                  <tr>
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">NDPA Verification</th>
                    <th className="py-3 px-4">Activity</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-slate-100">
                  {usersList.map((u) => (
                    <tr key={u.id} className="hover:bg-neutral-slate-50/70">
                      <td className="py-3 px-4">
                        <div className="font-bold text-neutral-slate-900">{u.fullName}</div>
                        <div className="text-neutral-slate-500 text-[11px]">{u.email}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-neutral-slate-800">{u.role}</span>
                      </td>
                      <td className="py-3 px-4">
                        {u.isMinor ? (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${u.isVerified ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                            {u.isVerified ? "Minor (Guardian Consent)" : "Minor (Pending Consent)"}
                          </span>
                        ) : (
                          <span className="text-neutral-slate-500 font-medium">Adult Account</span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono text-neutral-slate-600">
                        {u.bookingCount} Bookings
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            u.isSuspended
                              ? "bg-red-100 text-red-800 border border-red-300"
                              : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          }`}
                        >
                          {u.isSuspended ? "Suspended" : "Active"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {u.role !== "ADMIN" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleToggleUserSuspension(u.id, Boolean(u.isSuspended))}
                            className={`text-xs ${u.isSuspended ? "text-emerald-700 border-emerald-300" : "text-red-700 border-red-200"}`}
                            data-testid={`suspend-user-btn-${u.id}`}
                          >
                            {u.isSuspended ? <Unlock className="w-3 h-3 mr-1" /> : <Lock className="w-3 h-3 mr-1" />}
                            {u.isSuspended ? "Reactivate" : "Suspend"}
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 7: IMMUTABLE ADMIN AUDIT TRAIL (AD-07) */}
        {/* ==================================================================== */}
        {activeTab === "audit" && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
              <h2 className="text-base font-bold text-neutral-slate-900">Immutable Administrative Action Audit Trail (AD-07)</h2>
              <p className="text-xs text-neutral-slate-600 mt-0.5">
                Tamper-evident append-only ledger recording privileged operations, tutor vetting approvals, safeguarding resolutions, and financial disbursements.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-slate-200 shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs" data-testid="admin-audit-log">
                <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-bold border-b border-neutral-slate-200">
                  <tr>
                    <th className="py-3 px-4">Timestamp (WAT)</th>
                    <th className="py-3 px-4">Administrator</th>
                    <th className="py-3 px-4">Action</th>
                    <th className="py-3 px-4">Target Entity</th>
                    <th className="py-3 px-4">Change Summary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-slate-100">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-neutral-slate-50/70">
                      <td className="py-3 px-4 font-mono text-neutral-slate-500 whitespace-nowrap">
                        {new Date(log.createdAt).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 font-bold text-neutral-slate-900">{log.adminName}</td>
                      <td className="py-3 px-4 font-mono font-bold text-purple-800">{log.action}</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-neutral-slate-700">{log.targetType}: </span>
                        <span className="font-mono text-neutral-slate-500">{log.targetId}</span>
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-neutral-slate-600 max-w-xs truncate">
                        {log.afterState ? JSON.stringify(log.afterState) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
