"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import {
  ShieldCheck,
  UserCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  RefreshCw,
  Layers,
  ArrowLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

interface RosterTutor {
  profile: {
    id: string;
    slug: string;
    title: string;
    rosterStatus: string;
    hourlyRateMinorUnits: number;
    trcnCertified: boolean;
    ninVerified: boolean;
    publicListing: boolean;
    lastAvailabilityConfirmedAt?: string;
  };
  user: {
    id: string;
    fullName: string;
    email: string;
    phoneNumber?: string;
  };
  activeLearners: number;
}

const ROSTER_STATUSES = ["AVAILABLE_NOW", "LIMITED", "BUSY", "PAUSED"] as const;

export default function PrivateRosterPage() {
  const { user } = useAuth();
  const [tutors, setTutors] = React.useState<RosterTutor[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [statusFilter, setStatusFilter] = React.useState<string>("ALL");
  const [updatingSlug, setUpdatingSlug] = React.useState<string | null>(null);
  const [notice, setNotice] = React.useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchRoster = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/roster");
      const data = await res.json();
      if (data.success) {
        setTutors(data.tutors || []);
      }
    } catch (err) {
      console.error("Failed to load private roster", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRoster();
  }, []);

  const handleUpdateStatus = async (slug: string, newStatus: string) => {
    setUpdatingSlug(slug);
    setNotice(null);
    try {
      const res = await fetch("/api/admin/roster", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tutorSlug: slug, rosterStatus: newStatus }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setNotice({
          message: `Updated availability status to ${newStatus} for ${slug}.`,
          type: "success",
        });
        await fetchRoster();
      } else {
        setNotice({ message: data.error || "Failed to update status", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message || "Network error", type: "error" });
    } finally {
      setUpdatingSlug(null);
    }
  };

  const filtered = tutors.filter((t) => {
    const matchesSearch =
      t.user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.profile.slug.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || t.profile.rosterStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-900 text-white">
      {/* Top Header */}
      <header className="border-b border-neutral-slate-800 bg-neutral-slate-950 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/matching"
              className="h-10 w-10 rounded-xl bg-neutral-slate-850 hover:bg-neutral-slate-800 text-neutral-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white">Private Tutor Roster</h1>
                <Badge variant="neutral" className="bg-neutral-slate-800 text-neutral-slate-300 border-neutral-slate-700 text-[10px]">
                  Internal Only · publicListing: false
                </Badge>
              </div>
              <p className="text-xs text-neutral-slate-400">
                Verified instructor faculty controlled exclusively by Director Mr Oyedeji S.T
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link href="/admin/matching">
              <Button variant="primary" size="sm" className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs">
                <span>Matching Desk Queue</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchRoster}
              disabled={loading}
              className="text-xs text-white border-neutral-slate-700 hover:bg-neutral-slate-800"
            >
              <RefreshCw className={`w-3.5 h-3.5 mr-1 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
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

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-neutral-slate-950 border border-neutral-slate-800">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-slate-500" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tutor name or subject..."
              className="pl-9 bg-neutral-slate-900 border-neutral-slate-700 text-white text-xs h-10"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {["ALL", ...ROSTER_STATUSES].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border whitespace-nowrap transition-colors ${
                  statusFilter === st
                    ? "bg-purple-600 border-purple-500 text-white shadow-xs"
                    : "bg-neutral-slate-900 border-neutral-slate-700 text-neutral-slate-400 hover:text-white"
                }`}
              >
                {st.replace(/_/g, " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading ? (
            <div className="col-span-full py-16 text-center text-xs text-neutral-slate-500 animate-pulse">
              Loading private roster faculty...
            </div>
          ) : filtered.length === 0 ? (
            <div className="col-span-full py-16 text-center text-xs text-neutral-slate-500">
              No private tutors found matching current criteria.
            </div>
          ) : (
            filtered.map((t) => (
              <div
                key={t.profile.id}
                className="rounded-xl border border-neutral-slate-800 bg-neutral-slate-950 p-5 space-y-4 shadow-sm hover:border-neutral-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-sm text-white">{t.user.fullName}</h3>
                      <p className="text-xs text-neutral-slate-400">{t.profile.title}</p>
                    </div>
                    <Badge
                      variant={(t.profile.rosterStatus || "AVAILABLE_NOW") === "AVAILABLE_NOW" ? "success" : "neutral"}
                      className="text-[10px]"
                    >
                      {(t.profile.rosterStatus || "AVAILABLE_NOW").replace(/_/g, " ")}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-slate-400 pt-1">
                    <div>
                      <span className="text-neutral-slate-500 block">Rate</span>
                      <strong className="text-white">₦{(t.profile.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}/hr</strong>
                    </div>
                    <div>
                      <span className="text-neutral-slate-500 block">Active Learners</span>
                      <strong className="text-white">{t.activeLearners} active</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-[10px] text-neutral-slate-400">
                    {t.profile.trcnCertified && (
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> TRCN Certified
                      </span>
                    )}
                    {t.profile.ninVerified && (
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> NIN Vetted
                      </span>
                    )}
                  </div>
                </div>

                {/* Director Quick Availability Toggle */}
                <div className="pt-3 border-t border-neutral-slate-800/80 space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500 block">
                    Change Availability State
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {ROSTER_STATUSES.map((st) => (
                      <button
                        key={st}
                        disabled={updatingSlug === t.profile.slug || t.profile.rosterStatus === st}
                        onClick={() => handleUpdateStatus(t.profile.slug, st)}
                        className={`py-1.5 px-2 rounded text-[11px] font-semibold border transition-all ${
                          t.profile.rosterStatus === st
                            ? "bg-purple-600/30 border-purple-500 text-purple-200"
                            : "bg-neutral-slate-900 border-neutral-slate-800 text-neutral-slate-400 hover:text-white hover:bg-neutral-slate-800"
                        }`}
                      >
                        {st.replace(/_/g, " ")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
