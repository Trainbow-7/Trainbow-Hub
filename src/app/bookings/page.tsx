"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  Calendar,
  Clock,
  Video,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ExternalLink,
  RotateCcw,
  XCircle,
  X,
  CreditCard,
  ShieldCheck,
  ChevronRight,
  User,
} from "lucide-react";

interface BookingItem {
  id: string;
  studentId: string;
  tutorSlug: string;
  tutorName: string;
  tutorTitle: string;
  tutorAvatarText: string;
  subject: string;
  slotDate: string;
  slotTime: string;
  amountMinorUnits: number;
  currency: string;
  bookingStatus: "HELD" | "PENDING_PAYMENT" | "CONFIRMED" | "COMPLETED" | "CANCELLED" | "EXPIRED" | "NO_SHOW" | "DISPUTED";
  paymentStatus: string;
  paymentReference: string;
  meetingLink?: string;
  cancellationReason?: string;
  cancellationPolicy?: string;
  rescheduledFromId?: string;
  weeklyAvailability?: Array<{ day: string; slots: string[] }>;
  createdAt: string;
}

export default function BookingsPage() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref");

  const [bookings, setBookings] = React.useState<BookingItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<"upcoming" | "completed" | "cancelled">("upcoming");
  const [verifyBanner, setVerifyBanner] = React.useState<string | null>(null);

  // Reschedule Modal State (BK-06)
  const [rescheduleBooking, setRescheduleBooking] = React.useState<BookingItem | null>(null);
  const [newDate, setNewDate] = React.useState("");
  const [newTime, setNewTime] = React.useState("");
  const [isRescheduling, setIsRescheduling] = React.useState(false);
  const [rescheduleError, setRescheduleError] = React.useState<string | null>(null);

  // Cancel Modal State (BK-07)
  const [cancelBookingTarget, setCancelBookingTarget] = React.useState<BookingItem | null>(null);
  const [cancelReason, setCancelReason] = React.useState("");
  const [isCancelling, setIsCancelling] = React.useState(false);
  const [cancelError, setCancelError] = React.useState<string | null>(null);

  // Fetch bookings
  const fetchBookings = React.useCallback(async () => {
    try {
      const res = await fetch("/api/bookings");
      const json = await res.json();
      if (json.success) {
        setBookings(json.bookings || []);
      }
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle return from Paystack redirect with reference parameter
  React.useEffect(() => {
    async function verifyIncomingReference() {
      if (refParam) {
        try {
          const res = await fetch("/api/bookings/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: refParam }),
          });
          const json = await res.json();
          if (json.success) {
            setVerifyBanner(`Payment verified for session with ${json.booking.tutorName}! Your slot is confirmed.`);
          }
        } catch (err) {
          console.error("Verification error:", err);
        }
      }
      fetchBookings();
    }
    verifyIncomingReference();
  }, [refParam, fetchBookings]);

  // Execute Reschedule (BK-06)
  const handleConfirmReschedule = async () => {
    if (!rescheduleBooking || !newDate || !newTime) return;
    setIsRescheduling(true);
    setRescheduleError(null);

    try {
      const res = await fetch(`/api/bookings/${rescheduleBooking.id}/reschedule`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newSlotDate: newDate,
          newSlotTime: newTime,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        setRescheduleError(json.error || "Failed to reschedule session.");
        return;
      }

      setRescheduleBooking(null);
      fetchBookings();
    } catch {
      setRescheduleError("Network error rescheduling session. Please try again.");
    } finally {
      setIsRescheduling(false);
    }
  };

  // Execute Cancellation (BK-07)
  const handleConfirmCancel = async () => {
    if (!cancelBookingTarget || !cancelReason) return;
    setIsCancelling(true);
    setCancelError(null);

    try {
      const res = await fetch(`/api/bookings/${cancelBookingTarget.id}/cancel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: cancelReason }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        setCancelError(json.error || "Failed to cancel session.");
        return;
      }

      setCancelBookingTarget(null);
      fetchBookings();
    } catch {
      setCancelError("Network error cancelling session. Please try again.");
    } finally {
      setIsCancelling(false);
    }
  };

  const upcomingBookings = bookings.filter((b) => b.bookingStatus === "CONFIRMED" || b.bookingStatus === "HELD");
  const completedBookings = bookings.filter((b) => b.bookingStatus === "COMPLETED");
  const cancelledBookings = bookings.filter((b) => b.bookingStatus === "CANCELLED");

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider">
                1-on-1 Tutoring Hub
              </span>
              <span className="text-neutral-slate-300">•</span>
              <span className="text-xs text-neutral-slate-500 font-medium">WAT Timezone (Africa/Lagos)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-slate-900">
              My Scheduled Lessons
            </h1>
            <p className="mt-1 text-sm text-neutral-slate-600">
              Manage your upcoming live tutoring sessions, virtual classroom links, and reschedule requests.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/tutors"
              className={buttonVariants({
                variant: "primary",
                size: "sm",
                className: "text-xs font-bold shadow-sm gap-1.5",
              })}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Another Tutor</span>
            </Link>
          </div>
        </div>

        {/* Payment Verification Banner */}
        {verifyBanner && (
          <div
            className="p-4 rounded-xl bg-status-green-600/10 border border-status-green-600/20 text-status-green-800 text-xs font-semibold flex items-center justify-between shadow-xs"
            data-testid="payment-success-banner"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-status-green-600 shrink-0" />
              <span>{verifyBanner}</span>
            </div>
            <button
              type="button"
              onClick={() => setVerifyBanner(null)}
              className="text-status-green-800 hover:opacity-75"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Quick KPI Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-neutral-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald-50 text-emerald-700">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-neutral-slate-500 font-medium block">Upcoming Confirmed</span>
              <span className="text-2xl font-bold font-heading text-neutral-slate-900" data-testid="upcoming-bookings-count">
                {upcomingBookings.length}
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-neutral-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-50 text-brand-blue-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-neutral-slate-500 font-medium block">Completed Lessons</span>
              <span className="text-2xl font-bold font-heading text-neutral-slate-900">
                {completedBookings.length}
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-neutral-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-neutral-slate-500 font-medium block">Escrow Protected</span>
              <span className="text-2xl font-bold font-heading text-neutral-slate-900">
                100%
              </span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex border-b border-neutral-slate-200 gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("upcoming")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "upcoming"
                ? "border-brand-blue-600 text-brand-blue-600"
                : "border-transparent text-neutral-slate-500 hover:text-neutral-slate-800"
            }`}
            data-testid="tab-upcoming-bookings"
          >
            <span>Upcoming Sessions</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-brand-blue-50 text-brand-blue-700 font-mono">
              {upcomingBookings.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("completed")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "completed"
                ? "border-brand-blue-600 text-brand-blue-600"
                : "border-transparent text-neutral-slate-500 hover:text-neutral-slate-800"
            }`}
            data-testid="tab-completed-bookings"
          >
            <span>Completed</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-neutral-slate-100 text-neutral-slate-600 font-mono">
              {completedBookings.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("cancelled")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "cancelled"
                ? "border-brand-blue-600 text-brand-blue-600"
                : "border-transparent text-neutral-slate-500 hover:text-neutral-slate-800"
            }`}
            data-testid="tab-cancelled-bookings"
          >
            <span>Cancelled & Refunds</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-neutral-slate-100 text-neutral-slate-600 font-mono">
              {cancelledBookings.length}
            </span>
          </button>
        </div>

        {/* Bookings List Section */}
        {loading ? (
          <div className="p-12 text-center text-sm text-neutral-slate-500 flex items-center justify-center gap-2">
            <RefreshCw className="w-5 h-5 animate-spin text-brand-blue-600" />
            <span>Loading your tutoring schedule...</span>
          </div>
        ) : activeTab === "upcoming" ? (
          upcomingBookings.length === 0 ? (
            <div className="bg-white rounded-2xl border border-neutral-slate-200 p-12 text-center space-y-4">
              <Calendar className="w-12 h-12 text-neutral-slate-300 mx-auto" />
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg text-neutral-slate-900">No Upcoming Sessions</h3>
                <p className="text-xs text-neutral-slate-500 max-w-sm mx-auto">
                  You do not have any active tutoring appointments booked. Find verified educators in our directory.
                </p>
              </div>
              <Link
                href="/tutors"
                className={buttonVariants({
                  variant: "primary",
                  size: "sm",
                  className: "text-xs font-bold mt-2",
                })}
              >
                Find a Vetted Tutor
              </Link>
            </div>
          ) : (
            <div className="space-y-4" data-testid="upcoming-bookings-list">
              {upcomingBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-2xl border border-neutral-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
                  data-testid={`booking-card-${booking.id}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar name={booking.tutorName} size="lg" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-heading font-bold text-lg text-neutral-slate-900">
                            {booking.tutorName}
                          </span>
                          <Badge variant="success">Confirmed ✓</Badge>
                        </div>
                        <p className="text-xs text-neutral-slate-600">{booking.tutorTitle}</p>
                        <span className="text-[11px] font-mono text-neutral-slate-500">
                          Ref: {booking.paymentReference || booking.id}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs text-neutral-slate-500 font-medium block">Tuition Paid</span>
                      <span className="text-xl font-bold font-heading text-neutral-slate-900">
                        ₦{(booking.amountMinorUnits / 100).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Session Date & Time Badge */}
                  <div className="p-3.5 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 font-bold text-neutral-slate-800">
                        <Calendar className="w-4 h-4 text-brand-blue-600" />
                        <span>{booking.slotDate}</span>
                      </div>
                      <span className="text-neutral-slate-300">|</span>
                      <div className="flex items-center gap-1.5 font-mono font-semibold text-neutral-slate-700">
                        <Clock className="w-4 h-4 text-neutral-slate-500" />
                        <span>{booking.slotTime} (WAT)</span>
                      </div>
                      {booking.rescheduledFromId && (
                        <Badge variant="neutral" className="text-[10px]">
                          Rescheduled from {booking.rescheduledFromId}
                        </Badge>
                      )}
                    </div>

                    {/* Join Classroom CTA Button (CL-01) */}
                    {booking.meetingLink && (
                      <a
                        href={booking.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                          variant: "primary",
                          size: "sm",
                          className: "gap-1.5 font-bold text-xs shadow-xs",
                        })}
                        data-testid={`join-classroom-btn-${booking.id}`}
                      >
                        <Video className="w-4 h-4" />
                        <span>Join Virtual Classroom</span>
                      </a>
                    )}
                  </div>

                  {/* Actions: Reschedule & Cancel (BK-06, BK-07) */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-slate-100 text-xs">
                    <span className="text-neutral-slate-500 text-[11px]">
                      Protected by 15-minute start buffer & full cancellation refund policy
                    </span>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setRescheduleBooking(booking);
                          setNewDate(booking.slotDate);
                          setNewTime(booking.slotTime);
                        }}
                        className="text-xs font-semibold gap-1 min-h-[34px]"
                        data-testid={`reschedule-btn-${booking.id}`}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reschedule</span>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setCancelBookingTarget(booking);
                          setCancelReason("");
                        }}
                        className="text-xs text-red-700 hover:text-red-800 hover:bg-red-50 font-semibold gap-1 min-h-[34px]"
                        data-testid={`cancel-btn-${booking.id}`}
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Cancel</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : activeTab === "completed" ? (
          completedBookings.length === 0 ? (
            <div className="bg-white rounded-2xl border border-neutral-slate-200 p-12 text-center text-xs text-neutral-slate-500">
              No completed sessions yet.
            </div>
          ) : (
            <div className="space-y-4">
              {completedBookings.map((b) => (
                <div key={b.id} className="bg-white rounded-xl border border-neutral-slate-200 p-5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-neutral-slate-900">{b.tutorName} · {b.subject}</span>
                    <Badge variant="neutral">Completed</Badge>
                  </div>
                  <p className="text-xs text-neutral-slate-600">{b.slotDate} · {b.slotTime}</p>
                </div>
              ))}
            </div>
          )
        ) : (
          cancelledBookings.length === 0 ? (
            <div className="bg-white rounded-2xl border border-neutral-slate-200 p-12 text-center text-xs text-neutral-slate-500">
              No cancelled sessions.
            </div>
          ) : (
            <div className="space-y-4">
              {cancelledBookings.map((b) => (
                <div key={b.id} className="bg-white rounded-xl border border-neutral-slate-200 p-5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-neutral-slate-900">{b.tutorName} · {b.subject}</span>
                    <Badge variant="danger">Cancelled (Refund Processed)</Badge>
                  </div>
                  <p className="text-xs text-neutral-slate-600">Reason: {b.cancellationReason || "User requested cancellation"}</p>
                </div>
              ))}
            </div>
          )
        )}

        {/* Reschedule Modal Dialog (BK-06) */}
        {rescheduleBooking && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reschedule-modal-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-5" data-testid="reschedule-modal">
              <div className="flex items-start justify-between pb-3 border-b border-neutral-slate-200">
                <div>
                  <h3 id="reschedule-modal-title" className="font-heading font-bold text-lg text-neutral-slate-900">
                    Reschedule Session
                  </h3>
                  <p className="text-xs text-neutral-slate-500">With {rescheduleBooking.tutorName}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setRescheduleBooking(null)}
                  className="p-1 text-neutral-slate-400 hover:text-neutral-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {rescheduleError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{rescheduleError}</span>
                </div>
              )}

              <div className="space-y-4 text-xs">
                <div>
                  <label htmlFor="new-slot-date" className="block font-bold text-neutral-slate-700 mb-1">
                    Select New Date
                  </label>
                  <input
                    id="new-slot-date"
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-slate-300 text-xs font-mono"
                    data-testid="reschedule-date-input"
                  />
                </div>

                <div>
                  <label htmlFor="new-slot-time" className="block font-bold text-neutral-slate-700 mb-1">
                    Select New Time Window (WAT)
                  </label>
                  <select
                    id="new-slot-time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-slate-300 text-xs font-mono"
                    data-testid="reschedule-time-select"
                  >
                    <option value="16:00 - 17:00">16:00 - 17:00</option>
                    <option value="17:30 - 18:30">17:30 - 18:30</option>
                    <option value="10:00 - 11:00">10:00 - 11:00</option>
                    <option value="14:00 - 15:00">14:00 - 15:00</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setRescheduleBooking(null)}
                  className="flex-1 justify-center text-xs font-semibold"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleConfirmReschedule}
                  disabled={isRescheduling || !newDate || !newTime}
                  className="flex-1 justify-center text-xs font-bold"
                  data-testid="confirm-reschedule-btn"
                >
                  {isRescheduling ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Confirm New Slot"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Cancel Confirmation Modal Dialog (BK-07) */}
        {cancelBookingTarget && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cancel-modal-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-slate-200 space-y-5" data-testid="cancel-booking-modal">
              <div className="flex items-start justify-between pb-3 border-b border-neutral-slate-200">
                <div>
                  <h3 id="cancel-modal-title" className="font-heading font-bold text-lg text-neutral-slate-900">
                    Cancel Tutoring Session
                  </h3>
                  <p className="text-xs text-neutral-slate-500">{cancelBookingTarget.slotDate} · {cancelBookingTarget.slotTime}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCancelBookingTarget(null)}
                  className="p-1 text-neutral-slate-400 hover:text-neutral-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cancelError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{cancelError}</span>
                </div>
              )}

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">Tutor Cancellation Policy:</span>
                <p className="text-[11px]">{cancelBookingTarget.cancellationPolicy || "Full refund if cancelled > 24 hours prior."}</p>
              </div>

              <div className="space-y-1 text-xs">
                <label htmlFor="cancel-reason" className="block font-bold text-neutral-slate-700">
                  Reason for Cancellation
                </label>
                <textarea
                  id="cancel-reason"
                  rows={3}
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="e.g., Unforeseen school test conflict..."
                  className="w-full p-2.5 rounded-lg border border-neutral-slate-300 text-xs"
                  data-testid="cancel-reason-input"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setCancelBookingTarget(null)}
                  className="flex-1 justify-center text-xs font-semibold"
                >
                  Keep Session
                </Button>
                <Button
                  variant="primary"
                  onClick={handleConfirmCancel}
                  disabled={isCancelling || !cancelReason}
                  className="flex-1 justify-center text-xs font-bold bg-red-600 hover:bg-red-700 border-red-600 text-white"
                  data-testid="confirm-cancel-btn"
                >
                  {isCancelling ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Confirm Cancellation"}
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
