"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  BookOpen,
  PlusCircle,
  Edit,
  Eye,
  CheckCircle2,
  Clock,
  Layers,
  Save,
  Send,
  UploadCloud,
  FileCheck,
  Sparkles,
  AlertCircle,
  X,
  Play,
  HelpCircle,
  Calendar,
  DollarSign,
  Video,
  CreditCard,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

interface AuthoringCourse {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  subjectSlug: string;
  level: string;
  status: "DRAFT" | "IN_REVIEW" | "PUBLISHED";
  version: number;
  changelog?: string;
  priceMinorUnits: number;
  shortDescription: string;
  fullDescription: string;
  syllabus: Array<{
    id: string;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      durationMinutes: number;
      isFreePreview: boolean;
    }>;
  }>;
  updatedAt: string;
}

export default function TutorDashboardAuthoringPage() {
  const { user } = useAuth();
  const [courses, setCourses] = React.useState<AuthoringCourse[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [tutorBookings, setTutorBookings] = React.useState<any[]>([]);
  const [tutorLedger, setTutorLedger] = React.useState<any[]>([]);
  const [bookingsLoading, setBookingsLoading] = React.useState(true);

  // Editor modal state
  const [editingCourse, setEditingCourse] = React.useState<AuthoringCourse | null>(null);
  const [previewModalOpen, setPreviewModalOpen] = React.useState(false);
  const [previewLesson, setPreviewLesson] = React.useState<any>(null);
  const [actionSuccessMsg, setActionSuccessMsg] = React.useState<string | null>(null);

  const fetchCourses = React.useCallback(async () => {
    try {
      const res = await fetch("/api/tutor/courses");
      const json = await res.json();
      if (json.success) {
        setCourses(json.courses);
      }
    } catch (err) {
      console.error("Failed to load tutor courses:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBookings = React.useCallback(async () => {
    try {
      const tutorSlug = user?.tutorProfileSlug || "dr-tayo-okafor";
      const res = await fetch(`/api/bookings?tutorSlug=${tutorSlug}`);
      const json = await res.json();
      if (json.success) {
        setTutorBookings(json.bookings || []);
        setTutorLedger(json.ledgerEntries || []);
      }
    } catch (err) {
      console.error("Failed to load tutor bookings & ledger:", err);
    } finally {
      setBookingsLoading(false);
    }
  }, [user]);

  React.useEffect(() => {
    fetchCourses();
    fetchBookings();
  }, [fetchCourses, fetchBookings]);

  const handleCreateNewDraft = () => {
    const newDraft: AuthoringCourse = {
      id: `draft-${Date.now()}`,
      authorId: user?.id || "usr-tut-004",
      title: "New Senior Secondary Mathematics Course",
      slug: `math-new-${Date.now().toString().slice(-4)}`,
      subjectSlug: "mathematics",
      level: "SS 1-3 Prep",
      status: "DRAFT",
      version: 1,
      changelog: "Initial curriculum draft.",
      priceMinorUnits: 2000000,
      shortDescription: "Essential curriculum coverage with step-by-step problem breakdowns.",
      fullDescription: "Detailed course modules covering theory, formulas, and past exam questions.",
      syllabus: [
        {
          id: "mod-1",
          title: "Module 1: Core Formulations & Worked Examples",
          lessons: [
            {
              id: "les-1",
              title: "Lesson 1: Fundamental Principles & Identities",
              durationMinutes: 45,
              isFreePreview: true,
            },
          ],
        },
      ],
      updatedAt: new Date().toISOString(),
    };
    setEditingCourse(newDraft);
  };

  const handleSaveCourse = async (statusOverride?: "DRAFT" | "IN_REVIEW" | "PUBLISHED") => {
    if (!editingCourse) return;

    const payload = {
      ...editingCourse,
      status: statusOverride || editingCourse.status,
    };

    try {
      const res = await fetch("/api/tutor/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        setActionSuccessMsg(
          statusOverride === "PUBLISHED"
            ? `Course successfully published (v${json.course.version})!`
            : statusOverride === "IN_REVIEW"
            ? "Course submitted for curriculum review!"
            : "Draft saved successfully!"
        );
        setEditingCourse(null);
        await fetchCourses();
        setTimeout(() => setActionSuccessMsg(null), 4000);
      }
    } catch (err) {
      console.error("Failed to save course:", err);
    }
  };

  const handleOpenStudentPreview = (course: AuthoringCourse) => {
    const firstLesson = course.syllabus[0]?.lessons[0] || {
      title: "Sample Lesson",
      durationMinutes: 45,
    };
    setPreviewLesson({
      courseTitle: course.title,
      lessonTitle: firstLesson.title,
      moduleTitle: course.syllabus[0]?.title || "Module 1",
      duration: firstLesson.durationMinutes,
      notes: course.fullDescription,
    });
    setPreviewModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Banner */}
        <div className="bg-white rounded-2xl border border-neutral-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="brand">Tutor & Educator Portal</Badge>
                <Badge variant="success">TRCN Certified Educator</Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
                Course Authoring & Curriculum Management
              </h1>
              <p className="text-sm text-neutral-slate-600 max-w-2xl">
                Design curriculum modules, author step-by-step lessons, configure checkpoint quizzes, and track draft lifecycle states under LN-06.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleCreateNewDraft}
              className="shrink-0 font-bold text-sm gap-2 shadow-sm"
              data-testid="create-course-draft-btn"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create New Course Draft</span>
            </Button>
          </div>
        </div>

        {/* Action Success Toast Banner */}
        {actionSuccessMsg && (
          <div
            className="p-4 rounded-xl bg-status-green-600/10 border border-status-green-600 text-status-green-900 text-xs font-bold flex items-center gap-2.5 animate-fadeIn"
            data-testid="authoring-success-banner"
          >
            <CheckCircle2 className="w-5 h-5 text-status-green-700 shrink-0" />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* Courses Inventory Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading font-bold text-lg text-neutral-slate-900">My Authored Courses</h2>
              <p className="text-xs text-neutral-slate-500">Draft, in review, and live published courses</p>
            </div>
            <span className="text-xs font-semibold text-neutral-slate-600">
              {courses.length} Total Curricula
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => {
              const statusBadge =
                course.status === "PUBLISHED"
                  ? { variant: "success" as const, label: "Live Published" }
                  : course.status === "IN_REVIEW"
                  ? { variant: "warning" as const, label: "In Curriculum Review" }
                  : { variant: "neutral" as const, label: "Draft in Progress" };

              const totalLessons = course.syllabus.reduce(
                (sum, mod) => sum + mod.lessons.length,
                0
              );

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-xl border border-neutral-slate-200 p-6 shadow-sm hover:border-brand-blue-300 transition-colors space-y-4 flex flex-col justify-between"
                  data-testid={`course-card-${course.slug}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Badge variant={statusBadge.variant}>{statusBadge.label}</Badge>
                        <span className="text-[11px] font-bold text-neutral-slate-500">
                          v{course.version}.0
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-neutral-slate-900">
                        ₦{(course.priceMinorUnits / 100).toLocaleString("en-NG")}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-neutral-slate-900 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-neutral-slate-600 leading-relaxed line-clamp-2">
                      {course.shortDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-slate-500 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-brand-blue-600" />
                        <span>{course.syllabus.length} Modules</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-brand-blue-600" />
                        <span>{totalLessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-blue-600" />
                        <span>Level: {course.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleOpenStudentPreview(course)}
                      className="text-xs font-semibold gap-1 text-brand-blue-600 hover:text-brand-blue-700 pl-0"
                      data-testid={`preview-course-btn-${course.slug}`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Student Live Preview</span>
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingCourse(course)}
                        className="text-xs font-semibold gap-1"
                        data-testid={`edit-course-btn-${course.slug}`}
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>Edit Course</span>
                      </Button>

                      {course.status !== "PUBLISHED" && (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => {
                            setEditingCourse(course);
                            handleSaveCourse("PUBLISHED");
                          }}
                          className="text-xs font-bold gap-1"
                          data-testid={`publish-course-btn-${course.slug}`}
                        >
                          <UploadCloud className="w-3.5 h-3.5" />
                          <span>Publish</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 1-on-1 Student Bookings & Escrow Ledger (Phase E) */}
        <div className="space-y-6 pt-8 border-t border-neutral-slate-200" data-testid="tutor-bookings-ledger-section">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="brand">Phase E Integration</Badge>
                <Badge variant="success">Paystack Escrow Connected</Badge>
              </div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-slate-900">
                1-on-1 Student Bookings & Financial Ledger
              </h2>
              <p className="text-xs sm:text-sm text-neutral-slate-600">
                Real-time learner appointments, interactive virtual classrooms, and immutable escrow ledger entries under PY-04 / BK-05.
              </p>
            </div>
            <Link
              href="/bookings"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 bg-brand-blue-50 px-3.5 py-2 rounded-xl border border-brand-blue-200 transition-colors"
              data-testid="view-student-bookings-hub-btn"
            >
              <span>Switch to Student View</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Financial Metrics Cards */}
          {(() => {
            const confirmedBookings = tutorBookings.filter(
              (b) => b.bookingStatus === "CONFIRMED" || b.bookingStatus === "COMPLETED"
            );
            const totalGross = confirmedBookings.reduce(
              (sum, b) => sum + (b.amountMinorUnits || 0),
              0
            );
            const totalCommission = confirmedBookings.reduce(
              (sum, b) => sum + (b.commissionMinorUnits || 0),
              0
            );
            const totalNet = totalGross - totalCommission;

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border border-neutral-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between text-neutral-slate-500 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Gross Booking Volume</span>
                    <DollarSign className="w-4 h-4 text-brand-blue-600" />
                  </div>
                  <div className="text-2xl font-extrabold font-heading text-neutral-slate-900" data-testid="tutor-gross-volume">
                    ₦{(totalGross / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                  </div>
                  <span className="text-[11px] text-neutral-slate-500 mt-1 block">
                    {confirmedBookings.length} confirmed lesson{confirmedBookings.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="bg-white rounded-xl border border-neutral-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between text-neutral-slate-500 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Platform Fee (15%)</span>
                    <CreditCard className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-2xl font-extrabold font-heading text-neutral-slate-900" data-testid="tutor-platform-fee">
                    ₦{(totalCommission / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                  </div>
                  <span className="text-[11px] text-neutral-slate-500 mt-1 block">
                    Automated split under PY-05
                  </span>
                </div>

                <div className="bg-white rounded-xl border border-neutral-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between text-neutral-slate-500 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Net Tutor Earnings (85%)</span>
                    <ShieldCheck className="w-4 h-4 text-status-green-600" />
                  </div>
                  <div className="text-2xl font-extrabold font-heading text-status-green-700" data-testid="tutor-net-earnings">
                    ₦{(totalNet / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                  </div>
                  <span className="text-[11px] text-status-green-700 font-medium mt-1 block">
                    Escrow secured • Next payout Mon
                  </span>
                </div>

                <div className="bg-white rounded-xl border border-neutral-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between text-neutral-slate-500 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Settlement Account</span>
                    <Badge variant="neutral">Verified</Badge>
                  </div>
                  <div className="text-sm font-bold text-neutral-slate-900">
                    Access Bank Plc
                  </div>
                  <span className="text-[11px] font-mono text-neutral-slate-500 mt-1 block">
                    •••• •••• 4092 (Tayo Okafor)
                  </span>
                </div>
              </div>
            );
          })()}

          {/* Bookings & Ledger Lists Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Student Bookings List */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-blue-600" />
                  <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                    Active Student Bookings
                  </h3>
                </div>
                <span className="text-xs font-semibold text-neutral-slate-500">
                  {tutorBookings.length} Total Registered
                </span>
              </div>

              {bookingsLoading ? (
                <div className="py-8 text-center text-xs text-neutral-slate-500">
                  Loading confirmed student appointments...
                </div>
              ) : tutorBookings.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <p className="text-xs text-neutral-slate-500">No student sessions scheduled yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {tutorBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-4 rounded-xl border border-neutral-slate-200 hover:border-brand-blue-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-slate-50/50"
                      data-testid={`tutor-booking-row-${b.id}`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-heading font-bold text-sm text-neutral-slate-900">
                            {b.subject}
                          </span>
                          <Badge
                            variant={
                              b.bookingStatus === "CONFIRMED"
                                ? "success"
                                : b.bookingStatus === "COMPLETED"
                                ? "brand"
                                : "warning"
                            }
                          >
                            {b.bookingStatus}
                          </Badge>
                        </div>
                        <div className="text-xs text-neutral-slate-600 flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-neutral-slate-400" />
                          <span>
                            {b.slotDate} • {b.slotTime} WAT
                          </span>
                          <span className="text-neutral-slate-400">|</span>
                          <span className="font-mono text-[11px] text-neutral-slate-500">
                            Student: {b.studentId}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={b.meetingLink || "https://meet.google.com/trb-live-classroom"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
                          data-testid={`tutor-launch-classroom-${b.id}`}
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>Launch Classroom</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Immutable Escrow Ledger (PY-04) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-status-green-600" />
                  <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                    Escrow Financial Ledger
                  </h3>
                </div>
                <Badge variant="brand">PY-04 Ledger</Badge>
              </div>

              {bookingsLoading ? (
                <div className="py-8 text-center text-xs text-neutral-slate-500">
                  Loading ledger audit records...
                </div>
              ) : tutorLedger.length === 0 ? (
                <div className="py-8 text-center text-xs text-neutral-slate-500">
                  No financial ledger entries recorded yet.
                </div>
              ) : (
                <div
                  className="space-y-3 max-h-[380px] overflow-y-auto pr-1"
                  data-testid="tutor-financial-ledger-table"
                >
                  {tutorLedger.map((entry) => {
                    const isCredit = entry.type === "BOOKING_CREDIT";
                    return (
                      <div
                        key={entry.id}
                        className="p-3 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50/50 space-y-1.5"
                        data-testid={`ledger-entry-${entry.id}`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-neutral-slate-800">
                            {entry.description}
                          </span>
                          <span
                            className={`font-mono font-bold ${
                              isCredit ? "text-status-green-700" : "text-amber-700"
                            }`}
                          >
                            {isCredit ? "+" : "-"}₦{(entry.amountMinorUnits / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-neutral-slate-500">
                          <span className="font-mono text-[10px]" data-testid={`ledger-ref-${entry.id}`}>
                            Ref: {entry.transactionReference}
                          </span>
                          <span>{entry.type}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Authoring Editor Modal */}
        {editingCourse && (
          <div className="fixed inset-0 z-50 bg-brand-navy-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-neutral-slate-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-slate-200 pb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-neutral-slate-900">
                    Curriculum Editor: {editingCourse.title}
                  </h3>
                  <span className="text-xs text-neutral-slate-500">
                    Status: <strong className="text-brand-blue-600">{editingCourse.status}</strong> • Version {editingCourse.version}.0
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="p-1 rounded-lg hover:bg-neutral-slate-100 text-neutral-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-neutral-slate-700 block mb-1">Course Title</label>
                  <Input
                    value={editingCourse.title}
                    onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                    className="w-full text-xs font-medium"
                    data-testid="input-course-title"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-neutral-slate-700 block mb-1">Target Academic Level</label>
                    <Input
                      value={editingCourse.level}
                      onChange={(e) => setEditingCourse({ ...editingCourse, level: e.target.value })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-neutral-slate-700 block mb-1">Tuition Fee (₦ NGN)</label>
                    <Input
                      type="number"
                      value={editingCourse.priceMinorUnits / 100}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          priceMinorUnits: Number(e.target.value) * 100,
                        })
                      }
                      className="w-full text-xs font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-neutral-slate-700 block mb-1">Short Summary (Catalogue Preview)</label>
                  <Input
                    value={editingCourse.shortDescription}
                    onChange={(e) =>
                      setEditingCourse({ ...editingCourse, shortDescription: e.target.value })
                    }
                    className="w-full text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-slate-700 block mb-1">Comprehensive Syllabus Notes</label>
                  <textarea
                    rows={4}
                    value={editingCourse.fullDescription}
                    onChange={(e) =>
                      setEditingCourse({ ...editingCourse, fullDescription: e.target.value })
                    }
                    className="w-full p-3 rounded-lg border border-neutral-slate-200 text-xs font-sans text-neutral-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-blue-600"
                  />
                </div>

                {/* Modules & Lessons Inspector */}
                <div className="p-4 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-slate-900 block">Syllabus Structure</span>
                    <span className="text-[11px] text-neutral-slate-500">
                      {editingCourse.syllabus.length} Modules Configured
                    </span>
                  </div>

                  <div className="space-y-2">
                    {editingCourse.syllabus.map((mod, mIdx) => (
                      <div key={mod.id} className="p-3 rounded-lg bg-white border border-neutral-slate-200 space-y-1.5">
                        <span className="font-bold text-neutral-slate-800 block text-xs">
                          {mod.title}
                        </span>
                        <div className="space-y-1">
                          {mod.lessons.map((l) => (
                            <div key={l.id} className="flex items-center justify-between text-[11px] text-neutral-slate-600 pl-2">
                              <span>• {l.title}</span>
                              <span>{l.durationMinutes}m</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Lifecycle State Workflow (LN-06) */}
              <div className="pt-4 border-t border-neutral-slate-200 flex flex-wrap items-center justify-between gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOpenStudentPreview(editingCourse)}
                  className="text-xs font-semibold gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Student Preview</span>
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSaveCourse("DRAFT")}
                    className="text-xs font-semibold gap-1.5"
                    data-testid="save-draft-btn"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Draft</span>
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleSaveCourse("IN_REVIEW")}
                    className="text-xs font-semibold gap-1.5"
                    data-testid="submit-review-btn"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit for Review</span>
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleSaveCourse("PUBLISHED")}
                    className="text-xs font-bold gap-1.5 shadow-sm"
                    data-testid="confirm-publish-btn"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Publish Course (v{editingCourse.version + 1}.0)</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Student Preview Modal */}
        {previewModalOpen && previewLesson && (
          <div className="fixed inset-0 z-50 bg-brand-navy-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-neutral-slate-200 max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="brand">Interactive Student Preview</Badge>
                  <span className="text-xs text-neutral-slate-500 font-semibold">{previewLesson.courseTitle}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-neutral-slate-100 text-neutral-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Lesson Video Player */}
              <div className="aspect-video rounded-xl bg-brand-navy-900 text-white flex flex-col justify-center items-center p-6 text-center space-y-3">
                <Play className="w-12 h-12 text-brand-blue-500" />
                <h4 className="font-heading font-bold text-sm text-white">{previewLesson.lessonTitle}</h4>
                <span className="text-xs text-blue-200 font-mono">Simulated HD Lesson Video ({previewLesson.duration}m)</span>
              </div>

              {/* Notes Preview */}
              <div className="space-y-2 text-xs text-neutral-slate-700">
                <h5 className="font-bold text-neutral-slate-900">Curriculum Content:</h5>
                <p className="leading-relaxed bg-neutral-slate-50 p-4 rounded-xl border border-neutral-slate-200">
                  {previewLesson.notes}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <Button variant="outline" size="sm" onClick={() => setPreviewModalOpen(false)}>
                  Close Preview
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
