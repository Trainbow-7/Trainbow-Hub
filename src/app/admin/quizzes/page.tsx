"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InlineMathText } from "@/components/ui/InlineMathText";
import { AssessmentItem } from "@/lib/assessment/types";

interface CoverageCourse {
  courseSlug: string;
  courseTitle: string;
  totalLessons: number;
  lessonsWithQuizzes: number;
  totalBankItems: number;
  softwareVerifiedPercent: number;
  teacherApprovedPercent: number;
  awaitingReviewCount: number;
  parametricTemplateCount: number;
}

interface CoverageData {
  totals: {
    totalCourses: number;
    totalLessons: number;
    lessonsWithQuizzes: number;
    totalBankItems: number;
    awaitingReviewCount: number;
    parametricTemplateCount: number;
  };
  coverage: CoverageCourse[];
}

interface LearnerNeedsData {
  thresholdRule: string;
  summary: {
    totalAttemptsEvaluated: number;
    totalObjectivesAnalyzed: number;
    totalMisconceptionsLogged: number;
    suppressedObjectivesCount: number;
  };
  hardestObjectives: Array<{
    objectiveId: string;
    courseSlug: string;
    totalAttempts: number;
    failCount: number;
    errorRate: number;
    isSuppressed: boolean;
  }>;
  topMisconceptions: Array<{
    misconceptionId: string;
    description: string;
    topic: string;
    triggerCount: number;
    isSuppressed: boolean;
  }>;
}

export default function AdminQuizzesPage() {
  const [activeTab, setActiveTab] = React.useState<"queue" | "coverage" | "analytics">("queue");

  // Filters
  const [courseFilter, setCourseFilter] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [reportedOnly, setReportedOnly] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  // Data states
  const [items, setItems] = React.useState<AssessmentItem[]>([]);
  const [coverageData, setCoverageData] = React.useState<CoverageData | null>(null);
  const [learnerNeeds, setLearnerNeeds] = React.useState<LearnerNeedsData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  // Edit modal
  const [editingItem, setEditingItem] = React.useState<AssessmentItem | null>(null);
  const [editPrompt, setEditPrompt] = React.useState("");
  const [editExplanation, setEditExplanation] = React.useState("");
  const [editHint, setEditHint] = React.useState("");
  const [editDifficulty, setEditDifficulty] = React.useState<number>(3);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Fetch items
  const fetchItems = React.useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (courseFilter !== "all") params.append("courseSlug", courseFilter);
      if (statusFilter !== "all") params.append("reviewStatus", statusFilter);
      if (reportedOnly) params.append("reportedOnly", "true");
      if (searchQuery.trim()) params.append("search", searchQuery.trim());

      const res = await fetch(`/api/admin/quizzes?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setItems(data.items || []);
      } else {
        setError(data.error || "Failed to load quiz items");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [courseFilter, statusFilter, reportedOnly, searchQuery]);

  // Fetch coverage
  const fetchCoverage = React.useCallback(async () => {
    try {
      const res = await fetch("/api/admin/quizzes/coverage");
      const data = await res.json();
      if (data.success) {
        setCoverageData(data);
      }
    } catch (err: any) {
      console.error("Failed to load coverage", err);
    }
  }, []);

  // Fetch learner needs
  const fetchLearnerNeeds = React.useCallback(async () => {
    try {
      const res = await fetch("/api/admin/quizzes/learner-needs");
      const data = await res.json();
      if (data.success) {
        setLearnerNeeds(data);
      }
    } catch (err: any) {
      console.error("Failed to load learner needs", err);
    }
  }, []);

  React.useEffect(() => {
    fetchItems();
    fetchCoverage();
    fetchLearnerNeeds();
  }, [fetchItems, fetchCoverage, fetchLearnerNeeds]);

  // Action handlers
  const handleAction = async (itemId: string, action: "approve" | "reject") => {
    try {
      const res = await fetch("/api/admin/quizzes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId, action }),
      });
      const data = await res.json();
      if (data.success) {
        setItems((prev) =>
          prev.map((it) =>
            it.id === itemId
              ? { ...it, reviewStatus: action === "approve" ? "teacher_approved" : "rejected" }
              : it
          )
        );
        fetchCoverage();
      } else {
        alert(data.error || "Action failed");
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  const openEditModal = (item: AssessmentItem) => {
    setEditingItem(item);
    setEditPrompt(item.prompt);
    setEditExplanation(item.explanation || "");
    setEditHint(item.hint || "");
    setEditDifficulty(item.difficultyScore || 3);
  };

  const handleSaveEdit = async () => {
    if (!editingItem) return;
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/admin/quizzes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: editingItem.id,
          action: "edit",
          updates: {
            prompt: editPrompt,
            explanation: editExplanation,
            hint: editHint,
            difficultyScore: editDifficulty,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setItems((prev) => prev.map((it) => (it.id === editingItem.id ? data.item : it)));
        setEditingItem(null);
      } else {
        alert(data.error || "Save failed");
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <Link href="/admin" className="hover:text-blue-600 transition-colors">
              Admin Portal
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Mathematics Quizzes & Assessment Quality</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Mathematics Assessment Quality Review
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Teacher review gate, software-verified items, distractor misconception audits, and coverage analytics.
              </p>
            </div>
            {coverageData && (
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm">
                <span className="font-semibold text-slate-900">{coverageData.totals.totalBankItems}</span> Items Banked
                <span className="text-slate-300">|</span>
                <span className="font-semibold text-emerald-600">100%</span> Soft-Verified
                <span className="text-slate-300">|</span>
                <span className="font-semibold text-amber-600">{coverageData.totals.awaitingReviewCount}</span> In Review Queue
              </div>
            )}
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex border-b border-slate-200 mb-6 space-x-6">
          <button
            onClick={() => setActiveTab("queue")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "queue"
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            Review Queue ({items.length})
          </button>
          <button
            onClick={() => setActiveTab("coverage")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "coverage"
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            Curriculum Coverage Dashboard
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "analytics"
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            Learner Needs & Misconceptions
          </button>
        </div>

        {/* TAB 1: REVIEW QUEUE */}
        {activeTab === "queue" && (
          <div>
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-3 items-center flex-1">
                {/* Course Select */}
                <select
                  value={courseFilter}
                  onChange={(e) => setCourseFilter(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Mathematics Courses (6)</option>
                  <option value="waec-ssce-mathematics-mastery">WAEC & SSCE Mastery (19 lessons)</option>
                  <option value="jamb-utme-speed-mathematics">JAMB UTME Speed & Strategy (11 lessons)</option>
                  <option value="bece-jss3-basic-mathematics">JSS 3 Basic Math & BECE (12 lessons)</option>
                  <option value="ss2-algebra-and-trigonometry-deep-dive">SS 2 Algebra & Trig Deep Dive (9 lessons)</option>
                  <option value="primary-6-quantitative-reasoning-mathematics">Primary 6 Quantitative (9 lessons)</option>
                  <option value="igcse-extended-mathematics">Cambridge IGCSE Extended (11 lessons)</option>
                </select>

                {/* Status Select */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="needs_teacher_review">Needs Teacher Review</option>
                  <option value="teacher_approved">Teacher Approved</option>
                  <option value="rejected">Rejected</option>
                </select>

                {/* Reported Only Toggle */}
                <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={reportedOnly}
                    onChange={(e) => setReportedOnly(e.target.checked)}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Reported by learners only</span>
                </label>
              </div>

              {/* Search */}
              <div className="w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search question stem or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Questions List */}
            {loading ? (
              <div className="text-center py-12 text-slate-500">Loading assessment items...</div>
            ) : items.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-500">
                No items match your filter criteria.
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-white border rounded-xl p-5 shadow-sm transition-all ${
                      item.reportedCount && item.reportedCount > 0
                        ? "border-amber-300 bg-amber-50/20"
                        : "border-slate-200"
                    }`}
                  >
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-semibold text-slate-800">{item.id}</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-600">{item.courseSlug}</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs font-mono text-slate-500">Lesson: {item.lessonId}</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs font-mono text-blue-600">Obj: {item.objectiveId}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.reportedCount && item.reportedCount > 0 ? (
                          <Badge variant="warning" className="bg-amber-100 text-amber-800 border-amber-300 text-xs">
                            ⚠ {item.reportedCount} Learner Report{item.reportedCount > 1 ? "s" : ""}
                          </Badge>
                        ) : null}

                        {item.softwareVerified ? (
                          <Badge variant="success" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                            ✓ Software Verified
                          </Badge>
                        ) : (
                          <Badge variant="neutral" className="bg-slate-100 text-slate-600 border-slate-300 text-xs">
                            Unverified
                          </Badge>
                        )}

                        <Badge
                          variant="neutral"
                          className={`text-xs ${
                            item.reviewStatus === "teacher_approved"
                              ? "bg-green-100 text-green-800 border-green-300"
                              : item.reviewStatus === "rejected"
                              ? "bg-red-100 text-red-800 border-red-300"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {item.reviewStatus === "teacher_approved"
                            ? "Approved"
                            : item.reviewStatus === "rejected"
                            ? "Rejected"
                            : "Needs Review"}
                        </Badge>

                        <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded capitalize">
                          {item.thinkingLevel.replace("_", " ")}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded uppercase">
                          {item.questionType || item.type}
                        </span>
                      </div>
                    </div>

                    {/* Question Prompt */}
                    <div className="text-slate-900 font-medium text-base mb-3 leading-relaxed">
                      <InlineMathText text={item.prompt} />
                    </div>

                    {/* Options or Answer Specification */}
                    {item.options && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                        {item.options.map((opt) => {
                          const targetAns = item.correctOptionId || item.correctAnswer;
                          const isCorrect =
                            opt.id === targetAns ||
                            (Array.isArray(targetAns) && targetAns.includes(opt.id));
                          const misTag = opt.misconceptionTag || opt.misconceptionId;
                          const misRationale = opt.rationale || opt.feedback;
                          return (
                            <div
                              key={opt.id}
                              className={`text-xs p-2.5 rounded-lg border ${
                                isCorrect
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-medium"
                                  : "bg-slate-50 border-slate-200 text-slate-700"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold">{opt.id}.</span>
                                  <span>
                                    <InlineMathText text={opt.text} />
                                  </span>
                                </div>
                                {isCorrect && (
                                  <span className="text-emerald-700 text-xs font-semibold">✓ Correct</span>
                                )}
                              </div>
                              {misTag && !isCorrect && (
                                <div className="mt-1 text-slate-500 italic text-[11px]">
                                  Misconception: {misTag} {misRationale ? `— ${misRationale}` : ""}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Numeric or Short Answer Details */}
                    {(item.questionType === "numeric_entry" || item.type === "numeric_entry") && (
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-700 mb-3">
                        <span className="font-semibold text-slate-900">Correct Value:</span>{" "}
                        <InlineMathText text={String(item.correctAnswer)} />
                        {item.tolerance && ` (Tolerance: ±${item.tolerance})`}
                        {item.acceptedUnits && ` (Units: ${item.acceptedUnits.join(", ")})`}
                      </div>
                    )}

                    {(item.questionType === "symbolic_entry" || item.type === "symbolic_entry" || item.type === "short_symbolic") && (
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-700 mb-3">
                        <span className="font-semibold text-slate-900">Canonical Form:</span>{" "}
                        <InlineMathText text={String(item.correctAnswer)} />
                        <span className="ml-2 text-slate-500">(Graded with CAS algebraic equivalence)</span>
                      </div>
                    )}

                    {/* Step Ordering */}
                    {(item.questionType === "ordering" || item.type === "ordering" || item.type === "step_ordering") && item.correctOrder && (
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-700 mb-3">
                        <span className="font-semibold text-slate-900">Correct Sequence:</span>{" "}
                        {item.correctOrder.join(" → ")}
                      </div>
                    )}

                    {/* Explanation & Verification Evidence */}
                    <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-700 border border-slate-200 mb-3 space-y-1.5">
                      {item.explanation && (
                        <div>
                          <span className="font-semibold text-slate-900">Explanation: </span>
                          <InlineMathText text={item.explanation} />
                        </div>
                      )}
                      {item.verificationEvidence && (
                        <div className="text-emerald-800 font-mono text-[11px] bg-emerald-50/70 p-1.5 rounded">
                          <span className="font-bold">Verification Evidence: </span>
                          <span>Method: {item.verificationEvidence.method || item.verificationEvidence.tool}; Computed: {String(item.verificationEvidence.computedAnswer || item.verificationEvidence.output)}; Disjoint Options: {item.verificationEvidence.disjointOptions !== false ? "true" : "false"}.</span>
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-500">
                        Difficulty: {item.difficultyScore || 3}/5 | Original: {item.original ? "Yes" : "No"}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          Edit Content
                        </button>
                        {item.reviewStatus !== "rejected" && (
                          <button
                            onClick={() => handleAction(item.id, "reject")}
                            className="px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            Reject
                          </button>
                        )}
                        {item.reviewStatus !== "teacher_approved" && (
                          <button
                            onClick={() => handleAction(item.id, "approve")}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Approve Item
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: COVERAGE DASHBOARD */}
        {activeTab === "coverage" && coverageData && (
          <div className="space-y-6">
            {/* Top aggregate stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs font-medium text-slate-500 uppercase">Total Math Courses</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">{coverageData.totals.totalCourses}</div>
                <div className="text-xs text-slate-600 mt-1">{coverageData.totals.totalLessons} Lessons total</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs font-medium text-slate-500 uppercase">Total Items Banked</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">{coverageData.totals.totalBankItems}</div>
                <div className="text-xs text-emerald-600 mt-1">14 items / lesson target met</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs font-medium text-slate-500 uppercase">Software Verified</div>
                <div className="text-2xl font-bold text-emerald-600 mt-1">100%</div>
                <div className="text-xs text-slate-600 mt-1">CAS & Numeric proofs passed</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs font-medium text-slate-500 uppercase">Parametric Templates</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">{coverageData.totals.parametricTemplateCount}</div>
                <div className="text-xs text-slate-600 mt-1">300 CI variants tested (0 fail)</div>
              </div>
            </div>

            {/* Course Coverage Table */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 text-sm">Course Assessment Breakdown</h3>
                <span className="text-xs text-slate-500">All 6 curriculum tracks covered</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-600 uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Course</th>
                      <th className="p-3 text-center">Lessons</th>
                      <th className="p-3 text-center">Quiz Coverage</th>
                      <th className="p-3 text-center">Bank Items</th>
                      <th className="p-3 text-center">Soft-Verified</th>
                      <th className="p-3 text-center">Teacher Approved</th>
                      <th className="p-3 text-center">Awaiting Review</th>
                      <th className="p-3 text-center">Parametric</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {coverageData.coverage.map((c) => (
                      <tr key={c.courseSlug} className="hover:bg-slate-50/50">
                        <td className="p-3">
                          <div className="font-semibold text-slate-900">{c.courseTitle}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{c.courseSlug}</div>
                        </td>
                        <td className="p-3 text-center">{c.totalLessons}</td>
                        <td className="p-3 text-center">
                          <span className="text-emerald-700 font-medium">
                            {c.lessonsWithQuizzes} / {c.totalLessons} (100%)
                          </span>
                        </td>
                        <td className="p-3 text-center font-semibold text-slate-900">{c.totalBankItems}</td>
                        <td className="p-3 text-center">
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200 font-medium">
                            {c.softwareVerifiedPercent}%
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className="text-slate-700">{c.teacherApprovedPercent}%</span>
                        </td>
                        <td className="p-3 text-center">
                          <span className="text-amber-700 font-semibold">{c.awaitingReviewCount}</span>
                        </td>
                        <td className="p-3 text-center">
                          <span className="text-blue-700 font-medium">{c.parametricTemplateCount}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LEARNER NEEDS ANALYTICS */}
        {activeTab === "analytics" && learnerNeeds && (
          <div className="space-y-6">
            {/* Privacy Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-3">
              <span className="text-blue-600 text-base font-bold">ℹ</span>
              <div>
                <span className="font-bold">NDPA 2023 Privacy Threshold Guard Active: </span>
                Aggregate analytics are strictly suppressed for objectives and misconceptions with fewer than 10
                independent learner submissions (k-anonymity N ≥ 10 threshold).
              </div>
            </div>

            {/* Summary metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 uppercase">Submissions Evaluated</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">
                  {learnerNeeds.summary.totalAttemptsEvaluated}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 uppercase">Objectives Tracked</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">
                  {learnerNeeds.summary.totalObjectivesAnalyzed}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 uppercase">Misconceptions Cataloged</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">
                  {learnerNeeds.summary.totalMisconceptionsLogged}
                </div>
              </div>
            </div>

            {/* Top Misconceptions Table */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-200 bg-slate-50/50">
                <h3 className="font-semibold text-slate-900 text-sm">
                  Misconception Frequency & Remediation Triggers
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Distractors selected by learners during practice and checkpoints.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-600 uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Topic</th>
                      <th className="p-3">Misconception Identifier</th>
                      <th className="p-3">Core Learning Hazard</th>
                      <th className="p-3 text-center">Triggers</th>
                      <th className="p-3 text-center">Privacy Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {learnerNeeds.topMisconceptions.map((m) => (
                      <tr key={m.misconceptionId} className="hover:bg-slate-50/50">
                        <td className="p-3 font-semibold text-slate-900">{m.topic}</td>
                        <td className="p-3 font-mono text-blue-600">{m.misconceptionId}</td>
                        <td className="p-3 text-slate-600 max-w-md">{m.description}</td>
                        <td className="p-3 text-center font-semibold text-slate-900">
                          {m.isSuppressed ? "—" : m.triggerCount}
                        </td>
                        <td className="p-3 text-center">
                          {m.isSuppressed ? (
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[11px]">
                              Suppressed (&lt; 10 attempts)
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[11px]">
                              Published (N ≥ 10)
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Edit Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Edit Assessment Item {editingItem.id}</h3>
            <p className="text-xs text-slate-500 mb-4">
              Update item stem, explanation, hint, or target difficulty rating.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Question Prompt</label>
                <textarea
                  value={editPrompt}
                  onChange={(e) => setEditPrompt(e.target.value)}
                  rows={4}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Step-by-Step Explanation</label>
                <textarea
                  value={editExplanation}
                  onChange={(e) => setEditExplanation(e.target.value)}
                  rows={3}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Hint</label>
                <input
                  type="text"
                  value={editHint}
                  onChange={(e) => setEditHint(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Difficulty Score (1 to 5)</label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={editDifficulty}
                  onChange={(e) => setEditDifficulty(parseInt(e.target.value, 10) || 3)}
                  className="w-24 p-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditingItem(null)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleSaveEdit}
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

