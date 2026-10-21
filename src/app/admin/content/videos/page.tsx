"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Video,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  Plus,
  RefreshCw,
  Clock,
  Layers,
  Sliders,
  Filter,
} from "lucide-react";

interface AdminLessonItem {
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  courseSlug: string;
  courseTitle: string;
  primaryVideo: any | null;
  videoCount: number;
  status: "NO_VIDEO" | "CANDIDATE" | "APPROVED" | "BROKEN" | "REJECTED";
}

export default function AdminVideoLibraryPage() {
  const [lessons, setLessons] = React.useState<AdminLessonItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [filterCourse, setFilterCourse] = React.useState<string>("all");
  const [filterStatus, setFilterStatus] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Modal states
  const [manualModalLesson, setManualModalLesson] = React.useState<AdminLessonItem | null>(null);
  const [manualUrl, setManualUrl] = React.useState("");
  const [manualNotes, setManualNotes] = React.useState("");
  const [submittingManual, setSubmittingManual] = React.useState(false);
  const [manualMessage, setManualMessage] = React.useState<{ text: string; isError: boolean } | null>(null);

  // Discovery preview modal
  const [discoveryModalLesson, setDiscoveryModalLesson] = React.useState<AdminLessonItem | null>(null);
  const [discovering, setDiscovering] = React.useState(false);
  const [discoveryCandidates, setDiscoveryCandidates] = React.useState<any[]>([]);

  // Bulk / broken stats
  const [openReportsCount, setOpenReportsCount] = React.useState(0);
  const [reports, setReports] = React.useState<any[]>([]);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/videos");
      const json = await res.json();
      if (json.success) {
        setLessons(json.lessons || []);
        setOpenReportsCount(json.openReportsCount || 0);
        setReports(json.reports || []);
      }
    } catch (err) {
      console.error("Failed to load admin videos:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Run Discovery for a lesson
  const handleRunDiscovery = async (lesson: AdminLessonItem) => {
    setDiscoveryModalLesson(lesson);
    setDiscovering(true);
    setDiscoveryCandidates([]);
    try {
      const res = await fetch("/api/admin/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "discover",
          lessonId: lesson.lessonId,
          courseSlug: lesson.courseSlug,
          lessonTitle: lesson.lessonTitle,
          moduleTitle: lesson.moduleTitle,
        }),
      });
      const json = await res.json();
      if (json.success && json.discovery) {
        setDiscoveryCandidates(json.discovery.candidates || []);
      }
    } catch (err) {
      console.error("Discovery failed:", err);
    } finally {
      setDiscovering(false);
    }
  };

  // Submit manual verified YouTube URL
  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualModalLesson || !manualUrl) return;

    setSubmittingManual(true);
    setManualMessage(null);
    try {
      const res = await fetch("/api/admin/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_manual_url",
          url: manualUrl,
          lessonId: manualModalLesson.lessonId,
          courseSlug: manualModalLesson.courseSlug,
          notes: manualNotes,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setManualMessage({ text: "Video successfully verified and approved!", isError: false });
        setTimeout(() => {
          setManualModalLesson(null);
          setManualUrl("");
          setManualNotes("");
          setManualMessage(null);
          fetchData();
        }, 1500);
      } else {
        setManualMessage({ text: json.error || "Failed to verify video URL", isError: true });
      }
    } catch {
      setManualMessage({ text: "Network error submitting manual video", isError: true });
    } finally {
      setSubmittingManual(false);
    }
  };

  // Filter lessons
  const filteredLessons = lessons.filter((l) => {
    if (filterCourse !== "all" && l.courseSlug !== filterCourse) return false;
    if (filterStatus !== "all" && l.status !== filterStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        l.lessonTitle.toLowerCase().includes(q) ||
        l.moduleTitle.toLowerCase().includes(q) ||
        l.courseTitle.toLowerCase().includes(q) ||
        (l.primaryVideo?.channelName && l.primaryVideo.channelName.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const approvedCount = lessons.filter((l) => l.status === "APPROVED").length;
  const candidateCount = lessons.filter((l) => l.status === "CANDIDATE").length;
  const noVideoCount = lessons.filter((l) => l.status === "NO_VIDEO").length;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue-600 text-white shadow-2xs">
                <Video className="w-4 h-4" />
              </span>
              <h1 className="text-xl sm:text-2xl font-bold font-heading text-neutral-slate-900">
                Curriculum Video Library &amp; Provenance
              </h1>
            </div>
            <p className="text-xs text-neutral-slate-600 mt-1">
              Audit, discover, verify, and approve authentic educational video lessons. Zero fake links or unverified IDs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={fetchData}
              className="text-xs border-neutral-slate-300 text-neutral-slate-700"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1" />
              Refresh Status
            </Button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-neutral-slate-200 bg-white p-4 space-y-1 shadow-2xs">
            <span className="text-[11px] font-bold text-neutral-slate-500 uppercase tracking-wider">
              Total Lessons
            </span>
            <div className="text-2xl font-bold text-neutral-slate-900">{lessons.length}</div>
            <p className="text-[10px] text-neutral-slate-500">Across 6 accredited courses</p>
          </div>

          <div className="rounded-xl border border-status-green-600/30 bg-emerald-50/50 p-4 space-y-1 shadow-2xs">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              Approved Real Videos
            </span>
            <div className="text-2xl font-bold text-status-green-700">{approvedCount}</div>
            <p className="text-[10px] text-emerald-700">Verified &amp; embeddable</p>
          </div>

          <div className="rounded-xl border border-status-amber-500/30 bg-amber-50/50 p-4 space-y-1 shadow-2xs">
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
              Candidates in Review
            </span>
            <div className="text-2xl font-bold text-amber-700">{candidateCount}</div>
            <p className="text-[10px] text-amber-700">Awaiting human sign-off</p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-4 space-y-1 shadow-2xs">
            <span className="text-[11px] font-bold text-neutral-slate-500 uppercase tracking-wider">
              No Video Yet
            </span>
            <div className="text-2xl font-bold text-neutral-slate-700">{noVideoCount}</div>
            <p className="text-[10px] text-neutral-slate-500">Notes &amp; quizzes active</p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 rounded-xl bg-white border border-neutral-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-neutral-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topic, module, or channel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-neutral-slate-200 text-neutral-slate-900 focus:outline-brand-blue-600"
              />
            </div>

            <select
              aria-label="Filter by course"
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="text-xs py-2 px-3 rounded-lg border border-neutral-slate-200 bg-white text-neutral-slate-800"
            >
              <option value="all">All Courses</option>
              <option value="waec-ssce-mathematics-mastery">WAEC &amp; SSCE Comprehensive Mathematics</option>
              <option value="jamb-utme-speed-mathematics">JAMB UTME Speed Mathematics</option>
              <option value="jss3-basic-mathematics-bece-prep">JSS 3 Basic Mathematics</option>
              <option value="ss2-algebra-and-trigonometry-deep-dive">SS 2 Algebra &amp; Trigonometry</option>
              <option value="primary6-quantitative-reasoning-common-entrance">Primary 6 Common Entrance</option>
              <option value="cambridge-igcse-extended-mathematics">Cambridge IGCSE Mathematics</option>
            </select>

            <select
              aria-label="Filter by status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="text-xs py-2 px-3 rounded-lg border border-neutral-slate-200 bg-white text-neutral-slate-800"
            >
              <option value="all">All Statuses</option>
              <option value="APPROVED">Approved Only</option>
              <option value="CANDIDATE">Candidates Only</option>
              <option value="NO_VIDEO">No Video</option>
            </select>
          </div>

          <div className="text-xs text-neutral-slate-500 font-medium">
            Showing <strong>{filteredLessons.length}</strong> of {lessons.length} lessons
          </div>
        </div>

        {/* Lessons & Video Table */}
        <div className="rounded-xl border border-neutral-slate-200 bg-white shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-slate-50 border-b border-neutral-slate-200 text-[11px] font-bold text-neutral-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Lesson &amp; Module</th>
                  <th className="py-3 px-4">Course</th>
                  <th className="py-3 px-4">Primary Video / Provenance</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-slate-100">
                {filteredLessons.map((l) => (
                  <tr key={l.lessonId} className="hover:bg-neutral-slate-50/60 transition-colors">
                    {/* Lesson & Module */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-neutral-slate-900">{l.lessonTitle}</div>
                      <div className="text-[11px] text-neutral-slate-500">{l.moduleTitle}</div>
                    </td>

                    {/* Course */}
                    <td className="py-3.5 px-4 max-w-xs truncate text-neutral-slate-700">
                      {l.courseTitle}
                    </td>

                    {/* Primary Video / Channel */}
                    <td className="py-3.5 px-4">
                      {l.primaryVideo ? (
                        <div className="space-y-0.5">
                          <div className="font-semibold text-neutral-slate-900 flex items-center gap-1.5">
                            <span className="truncate max-w-xs">{l.primaryVideo.title}</span>
                            <a
                              href={`https://www.youtube.com/watch?v=${l.primaryVideo.providerVideoId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-blue-600 hover:text-brand-blue-800"
                              title="Open on YouTube"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          <div className="text-[11px] text-neutral-slate-500 flex items-center gap-2">
                            <span>Channel: <strong>{l.primaryVideo.channelName}</strong></span>
                            <span>•</span>
                            <span>{Math.round(l.primaryVideo.durationSeconds / 60)}m</span>
                            {l.videoCount > 1 && (
                              <span className="px-1.5 py-0.2 rounded-full bg-blue-100 text-brand-blue-700 font-semibold text-[10px]">
                                +{l.videoCount - 1} alternate
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <span className="text-neutral-slate-400 italic">No video linked</span>
                      )}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-4">
                      {l.status === "APPROVED" && (
                        <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-[10px]">
                          Approved
                        </Badge>
                      )}
                      {l.status === "CANDIDATE" && (
                        <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-[10px]">
                          Candidate
                        </Badge>
                      )}
                      {l.status === "NO_VIDEO" && (
                        <Badge className="bg-neutral-slate-100 text-neutral-slate-600 border-neutral-slate-200 text-[10px]">
                          No Video
                        </Badge>
                      )}
                    </td>

                    {/* Action buttons */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/learn/${l.courseSlug}/${l.lessonId}`}
                          target="_blank"
                          className="px-2 py-1 rounded bg-neutral-slate-100 hover:bg-neutral-slate-200 text-[11px] font-semibold text-neutral-slate-700 transition-colors"
                        >
                          Preview
                        </Link>

                        <button
                          type="button"
                          onClick={() => setManualModalLesson(l)}
                          className="px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-[11px] font-semibold text-brand-blue-700 transition-colors"
                        >
                          Manual Link
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRunDiscovery(l)}
                          className="px-2 py-1 rounded bg-purple-50 hover:bg-purple-100 text-[11px] font-semibold text-purple-700 transition-colors"
                        >
                          Run Discovery
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: Manual Video Input with Strict Verification */}
        {manualModalLesson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xs p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-neutral-slate-200">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-slate-100">
                <h3 className="text-sm font-bold text-neutral-slate-900 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-brand-blue-600" />
                  Add Human-Verified Video URL
                </h3>
                <button
                  type="button"
                  onClick={() => setManualModalLesson(null)}
                  className="text-neutral-slate-400 hover:text-neutral-slate-700 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100 text-xs text-blue-900 space-y-1">
                <p className="font-bold">Target Lesson:</p>
                <p className="text-neutral-slate-800">{manualModalLesson.lessonTitle}</p>
                <p className="text-[11px] text-neutral-slate-600">{manualModalLesson.courseTitle}</p>
              </div>

              {manualMessage && (
                <div
                  className={`p-3 rounded-lg text-xs font-semibold ${
                    manualMessage.isError
                      ? "bg-red-50 text-red-800 border border-red-200"
                      : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  }`}
                >
                  {manualMessage.text}
                </div>
              )}

              <form onSubmit={handleManualSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-slate-700 mb-1">
                    YouTube URL or 11-char Video ID:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://www.youtube.com/watch?v=... or youtu.be/..."
                    value={manualUrl}
                    onChange={(e) => setManualUrl(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-slate-200 text-neutral-slate-900 focus:outline-brand-blue-600 font-mono"
                  />
                  <p className="text-[10px] text-neutral-slate-500 mt-1">
                    Accepts watch?v=, youtu.be, embed, shorts, and ?t= timestamp offsets.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-slate-700 mb-1">
                    Educator Notes &amp; Rationale:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., verified by Dr. Okafor; covers WAEC 2024 theory past questions precisely."
                    value={manualNotes}
                    onChange={(e) => setManualNotes(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-slate-200 text-neutral-slate-900 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setManualModalLesson(null)}
                    className="text-xs"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    disabled={submittingManual}
                    className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs"
                  >
                    {submittingManual ? "Verifying with YouTube API..." : "Verify & Approve Video"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Discovery Candidates Preview */}
        {discoveryModalLesson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xs p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl border border-neutral-slate-200 max-h-[85vh] flex flex-col">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-slate-100 shrink-0">
                <h3 className="text-sm font-bold text-neutral-slate-900 flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-600" />
                  Discovery Results: {discoveryModalLesson.lessonTitle}
                </h3>
                <button
                  type="button"
                  onClick={() => setDiscoveryModalLesson(null)}
                  className="text-neutral-slate-400 hover:text-neutral-slate-700 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {discovering ? (
                  <div className="py-12 text-center space-y-2">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-purple-600" />
                    <p className="text-xs font-semibold text-neutral-slate-700">
                      Querying YouTube Data API &amp; executing relevance rubric...
                    </p>
                  </div>
                ) : discoveryCandidates.length === 0 ? (
                  <div className="py-8 text-center space-y-2">
                    <AlertTriangle className="w-8 h-8 mx-auto text-amber-500" />
                    <p className="text-xs font-bold text-neutral-slate-800">No candidates returned</p>
                    <p className="text-[11px] text-neutral-slate-500">
                      Ensure your YOUTUBE_API_KEY is configured in .env.local, or enter a verified URL manually.
                    </p>
                  </div>
                ) : (
                  discoveryCandidates.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50/60 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <a
                            href={`https://www.youtube.com/watch?v=${c.video.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-xs text-brand-blue-700 hover:underline flex items-center gap-1"
                          >
                            <span>{c.video.title}</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                          <p className="text-[11px] text-neutral-slate-600">
                            Channel: <strong>{c.video.channelName}</strong> • Duration: {Math.round(c.video.durationSeconds / 60)}m
                          </p>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold text-[10px] shrink-0">
                          Score: {Math.round(c.relevanceScore * 100)}%
                        </span>
                      </div>

                      <div className="text-[11px] text-neutral-slate-600 space-y-0.5 bg-white p-2 rounded-lg border border-neutral-slate-200/80">
                        <strong className="block text-neutral-slate-700">Evaluation Reasons:</strong>
                        {c.relevanceReasons.map((r: string, rIdx: number) => (
                          <div key={rIdx} className="flex items-start gap-1.5">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] text-neutral-slate-500">
                          {c.isChannelTrusted ? "✓ Channel on allowlist" : "ℹ New external channel"}
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            className="text-[10px] h-6 px-2.5 bg-brand-blue-600 text-white"
                            onClick={async () => {
                              await fetch("/api/admin/videos", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  action: "update_status",
                                  videoId: c.video.videoId,
                                  status: "APPROVED",
                                  isPrimary: true,
                                }),
                              });
                              setDiscoveryModalLesson(null);
                              fetchData();
                            }}
                          >
                            Approve as Primary
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
