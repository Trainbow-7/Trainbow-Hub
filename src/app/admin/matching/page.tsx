"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import {
  ShieldCheck,
  Clock,
  UserCheck,
  AlertCircle,
  CheckCircle2,
  Filter,
  Search,
  Sparkles,
  ArrowRight,
  Send,
  Calendar,
  Layers,
  RefreshCw,
  X,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

interface TutorRequest {
  id: string;
  referenceCode: string;
  studentId: string;
  subject: string;
  level: string;
  urgency: string;
  topicsNeedingHelp: string;
  preferredDays: string[];
  preferredTimes: string[];
  lessonFormat: string;
  budgetRangeMin: number;
  budgetRangeMax: number;
  status: string;
  createdAt: string;
}

interface RosterTutor {
  profile: {
    id: string;
    slug: string;
    title: string;
    rosterStatus: string;
    hourlyRateMinorUnits: number;
    trcnCertified: boolean;
    ninVerified: boolean;
  };
  user: {
    id: string;
    fullName: string;
    email: string;
  };
  activeLearners: number;
}

export default function MatchingDeskPage() {
  const { user } = useAuth();
  const [requests, setRequests] = React.useState<TutorRequest[]>([]);
  const [roster, setRoster] = React.useState<RosterTutor[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [selectedRequest, setSelectedRequest] = React.useState<TutorRequest | null>(null);

  // Proposal modal form state
  const [selectedTutorId, setSelectedTutorId] = React.useState<string>("");
  const [proposedDate, setProposedDate] = React.useState<string>("2026-10-25");
  const [proposedTime, setProposedTime] = React.useState<string>("16:00 - 18:00 (WAT)");
  const [quoteAmount, setQuoteAmount] = React.useState<number>(7500);
  const [rationale, setRationale] = React.useState<string>(
    "Mr Oyedeji S.T has personally reviewed your learning requirements and selected this verified tutor who is available right now."
  );
  const [sendingProposal, setSendingProposal] = React.useState<boolean>(false);
  const [notice, setNotice] = React.useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchDeskData = async () => {
    setLoading(true);
    try {
      const [reqRes, rosRes] = await Promise.all([
        fetch("/api/admin/matching"),
        fetch("/api/admin/roster"),
      ]);

      const reqData = await reqRes.json();
      const rosData = await rosRes.json();

      if (reqData.success) setRequests(reqData.requests || []);
      if (rosData.success) setRoster(rosData.tutors || []);
    } catch (err) {
      console.error("Failed to load matching desk data", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchDeskData();
  }, []);

  const handleOpenProposal = (req: TutorRequest) => {
    setSelectedRequest(req);
    // Auto-select first available tutor if none selected
    if (roster.length > 0 && !selectedTutorId) {
      setSelectedTutorId(roster[0].profile.id);
    }
    setQuoteAmount(Math.round(req.budgetRangeMin / 100) || 7500);
  };

  const handleSendProposal = async () => {
    if (!selectedRequest || !selectedTutorId) return;
    setSendingProposal(true);
    setNotice(null);

    try {
      const res = await fetch("/api/admin/matching", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: selectedRequest.id,
          tutorProfileId: selectedTutorId,
          proposedSlotDate: proposedDate,
          proposedSlotTime: proposedTime,
          quoteAmountMinorUnits: quoteAmount * 100,
          messageToFamily: rationale,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setNotice({ message: data.error || "Failed to create match proposal", type: "error" });
      } else {
        setNotice({
          message: `Match proposal sent for ${selectedRequest.referenceCode}! Request moved to TUTOR_PROPOSED.`,
          type: "success",
        });
        setSelectedRequest(null);
        await fetchDeskData();
      }
    } catch (err: any) {
      setNotice({ message: err.message || "Network error", type: "error" });
    } finally {
      setSendingProposal(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-900 text-white">
      {/* Admin Top Header */}
      <header className="border-b border-neutral-slate-800 bg-neutral-slate-950 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-purple-600/30 text-purple-400 border border-purple-500/40 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white">Director Matching Desk</h1>
                <Badge variant="ai" className="bg-purple-900/60 text-purple-200 border-purple-700 text-[10px]">
                  Lead: Mr Oyedeji S.T
                </Badge>
              </div>
              <p className="text-xs text-neutral-slate-400">
                Concierge triage, urgency-based queue, and private tutor matchmaking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link href="/admin/roster">
              <Button variant="outline" size="sm" className="text-xs text-neutral-slate-300 border-neutral-slate-700 hover:bg-neutral-slate-800">
                <Layers className="w-3.5 h-3.5 mr-1.5" />
                <span>Private Roster ({roster.length})</span>
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline" size="sm" className="text-xs text-neutral-slate-300 border-neutral-slate-700 hover:bg-neutral-slate-800">
                <span>Platform Admin</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchDeskData}
              disabled={loading}
              className="text-xs text-white border-neutral-slate-700 hover:bg-neutral-slate-800"
            >
              <RefreshCw className={`w-3.5 h-3.5 mr-1 ${loading ? "animate-spin" : ""}`} />
              <span>Sync Queue</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Desk View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Notice Alert */}
        {notice && (
          <div
            className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-semibold ${
              notice.type === "success"
                ? "bg-emerald-950/80 text-emerald-200 border-emerald-700"
                : "bg-red-950/80 text-red-200 border-red-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{notice.message}</span>
            </div>
            <button onClick={() => setNotice(null)} className="text-neutral-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Queue Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-neutral-slate-950 border border-neutral-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-slate-500 block">
              Active Queue
            </span>
            <span className="text-2xl font-black text-white">{requests.length}</span>
          </div>

          <div className="p-4 rounded-xl bg-neutral-slate-950 border border-neutral-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 block">
              Urgent (&lt;48h SLA)
            </span>
            <span className="text-2xl font-black text-amber-400">
              {requests.filter((r) => r.urgency === "WITHIN_48_HOURS").length}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-neutral-slate-950 border border-neutral-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block">
              Private Roster Tutors
            </span>
            <span className="text-2xl font-black text-purple-300">{roster.length}</span>
          </div>

          <div className="p-4 rounded-xl bg-neutral-slate-950 border border-neutral-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
              Available Now
            </span>
            <span className="text-2xl font-black text-emerald-400">
              {roster.filter((t) => t.profile.rosterStatus === "AVAILABLE_NOW").length}
            </span>
          </div>
        </div>

        {/* Incoming Requests Queue Table */}
        <div className="rounded-xl border border-neutral-slate-800 bg-neutral-slate-950 overflow-hidden shadow-lg">
          <div className="p-4 border-b border-neutral-slate-800 flex items-center justify-between">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Prioritized Request Queue (SLA Ordered)</span>
            </h2>
            <span className="text-xs text-neutral-slate-400">
              Urgent requests sorted by turnaround target
            </span>
          </div>

          {loading ? (
            <div className="py-16 text-center text-xs text-neutral-slate-400 animate-pulse">
              Syncing incoming requests...
            </div>
          ) : requests.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <p className="text-xs font-bold text-neutral-slate-300">Queue is Clear</p>
              <p className="text-[11px] text-neutral-slate-500">All matching requests have active proposals or are confirmed.</p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-slate-800/80">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-neutral-slate-900/60 transition-colors"
                >
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono font-bold text-xs text-purple-400">{req.referenceCode}</span>
                      <span className="text-neutral-slate-600">·</span>
                      <span className="font-bold text-sm text-white">{req.subject}</span>
                      <Badge variant="neutral" className="bg-neutral-slate-800 text-neutral-slate-300 border-neutral-slate-700 text-[10px]">
                        {req.level}
                      </Badge>
                      <Badge
                        variant={req.urgency === "WITHIN_48_HOURS" ? "tutor" : "brand"}
                        className="text-[10px]"
                      >
                        {req.urgency.replace(/_/g, " ")}
                      </Badge>
                    </div>

                    <p className="text-xs text-neutral-slate-400 leading-relaxed">
                      <strong className="text-neutral-slate-300">Focus:</strong> {req.topicsNeedingHelp}
                    </p>

                    <div className="flex items-center gap-4 text-[11px] text-neutral-slate-400 flex-wrap">
                      <span><strong>Format:</strong> {req.lessonFormat}</span>
                      <span><strong>Days:</strong> {req.preferredDays.join(", ") || "Any"}</span>
                      <span><strong>Times:</strong> {req.preferredTimes.join(", ") || "Flexible"}</span>
                      <span><strong>Budget:</strong> ₦{(req.budgetRangeMin / 100).toLocaleString("en-NG")} - ₦{(req.budgetRangeMax / 100).toLocaleString("en-NG")}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleOpenProposal(req)}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md"
                    >
                      <Sparkles className="w-3.5 h-3.5 mr-1" />
                      <span>Create Match Proposal</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Match Proposal Creation Dialog Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-slate-900 border border-neutral-slate-800 rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">Create Match Proposal</h3>
                <p className="text-xs text-neutral-slate-400">
                  Target Request: {selectedRequest.referenceCode} ({selectedRequest.subject})
                </p>
              </div>
              <button onClick={() => setSelectedRequest(null)} className="text-neutral-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Tutor Selection from Private Roster */}
              <div className="space-y-1.5">
                <label className="font-bold text-neutral-slate-300">Select Tutor from Private Roster</label>
                <select
                  value={selectedTutorId}
                  onChange={(e) => setSelectedTutorId(e.target.value)}
                  className="w-full rounded-control border border-neutral-slate-700 bg-neutral-slate-950 p-2.5 text-xs text-white focus:ring-2 focus:ring-purple-500"
                >
                  {roster.map((t) => (
                    <option key={t.profile.id} value={t.profile.id}>
                      {t.user.fullName} ({t.profile.title}) — {t.profile.rosterStatus} · ₦{(t.profile.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}/hr
                    </option>
                  ))}
                </select>
              </div>

              {/* Proposed Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="font-bold text-neutral-slate-300">Proposed Start Date</label>
                  <Input
                    type="date"
                    value={proposedDate}
                    onChange={(e) => setProposedDate(e.target.value)}
                    className="bg-neutral-slate-950 border-neutral-slate-700 text-white text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-neutral-slate-300">Proposed Slot Time</label>
                  <Input
                    value={proposedTime}
                    onChange={(e) => setProposedTime(e.target.value)}
                    placeholder="e.g. 4:00 PM – 6:00 PM (WAT)"
                    className="bg-neutral-slate-950 border-neutral-slate-700 text-white text-xs"
                  />
                </div>
              </div>

              {/* Quote Amount */}
              <div className="space-y-1.5">
                <label className="font-bold text-neutral-slate-300">Quote per 60-min Lesson (₦)</label>
                <Input
                  type="number"
                  value={quoteAmount}
                  onChange={(e) => setQuoteAmount(Number(e.target.value))}
                  className="bg-neutral-slate-950 border-neutral-slate-700 text-white text-xs font-mono font-bold"
                />
              </div>

              {/* Match Rationale from Director */}
              <div className="space-y-1.5">
                <label className="font-bold text-neutral-slate-300">Match Rationale & Recommendation Note</label>
                <textarea
                  value={rationale}
                  onChange={(e) => setRationale(e.target.value)}
                  rows={3}
                  className="w-full rounded-control border border-neutral-slate-700 bg-neutral-slate-950 p-2.5 text-xs text-white focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-slate-800">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedRequest(null)}
                className="text-neutral-slate-300 border-neutral-slate-700"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                disabled={sendingProposal}
                onClick={handleSendProposal}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
              >
                {sendingProposal ? "Transmitting Proposal..." : "Send Proposal to Family"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
