"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  Clock,
  ShieldCheck,
  AlertCircle,
  CreditCard,
  CheckCircle2,
  Lock,
  ArrowRight,
  RefreshCw,
  X,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

interface WeeklyAvailability {
  day: string;
  slots: string[];
}

interface TutorBookingFlowProps {
  tutorSlug: string;
  tutorName: string;
  hourlyRateMinorUnits: number;
  cancellationPolicy: string;
  weeklyAvailability: WeeklyAvailability[];
}

export function TutorBookingFlow({
  tutorSlug,
  tutorName,
  hourlyRateMinorUnits,
  cancellationPolicy,
  weeklyAvailability,
}: TutorBookingFlowProps) {
  const router = useRouter();
  const { user } = useAuth();

  const [isOpen, setIsOpen] = React.useState(false);

  const calculateUpcomingDate = React.useCallback((dayName: string) => {
    const dayMap: Record<string, number> = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const targetDayIndex = dayMap[dayName] ?? 1;
    const now = new Date();
    const currentDayIndex = now.getDay();
    let daysToAdd = targetDayIndex - currentDayIndex;
    if (daysToAdd <= 0) daysToAdd += 7;

    const targetDate = new Date();
    targetDate.setDate(now.getDate() + daysToAdd);
    return targetDate.toISOString().split("T")[0];
  }, []);

  const initialDay = weeklyAvailability[0]?.day || "Monday";
  const [selectedDay, setSelectedDay] = React.useState(initialDay);
  const [selectedSlot, setSelectedSlot] = React.useState(weeklyAvailability[0]?.slots[0] || "16:00 - 17:00");
  const [selectedDate, setSelectedDate] = React.useState<string>(() => {
    const dayMap: Record<string, number> = {
      Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6,
    };
    const targetDayIndex = dayMap[initialDay] ?? 1;
    const now = new Date();
    const currentDayIndex = now.getDay();
    let daysToAdd = targetDayIndex - currentDayIndex;
    if (daysToAdd <= 0) daysToAdd += 7;
    const targetDate = new Date();
    targetDate.setDate(now.getDate() + daysToAdd);
    return targetDate.toISOString().split("T")[0];
  });

  // Booking states
  const [isHolding, setIsHolding] = React.useState(false);
  const [activeHold, setActiveHold] = React.useState<{ id: string; expiresAt: string; remainingSeconds: number } | null>(null);
  const [timerSeconds, setTimerSeconds] = React.useState<number>(600);
  const [holdError, setHoldError] = React.useState<string | null>(null);
  const [guardianRequired, setGuardianRequired] = React.useState<boolean>(false);
  const [minorStudentId, setMinorStudentId] = React.useState<string | null>(null);

  // Payment states
  const [isInitializingPayment, setIsInitializingPayment] = React.useState(false);
  const [checkoutData, setCheckoutData] = React.useState<any>(null);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [confirmedBooking, setConfirmedBooking] = React.useState<any>(null);

  // Update selectedDate on day change
  React.useEffect(() => {
    setSelectedDate(calculateUpcomingDate(selectedDay));
  }, [selectedDay, calculateUpcomingDate]);

  // Hold expiration countdown timer (BK-01)
  React.useEffect(() => {
    if (!activeHold) return;

    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setActiveHold(null);
          setHoldError("Your 10-minute slot hold has expired. Please select a slot to re-reserve.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeHold]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOpenModal = () => {
    setIsOpen(true);
    setHoldError(null);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Step 1: Request 10-minute temporary slot hold (BK-01, BK-02)
  const handleRequestHold = async () => {
    setIsHolding(true);
    setHoldError(null);
    setGuardianRequired(false);

    try {
      const effectiveDate = selectedDate || calculateUpcomingDate(selectedDay);
      const res = await fetch("/api/bookings/hold", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorSlug,
          slotDate: effectiveDate,
          slotTime: selectedSlot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.guardianConsentRequired) {
          setGuardianRequired(true);
          setMinorStudentId(data.studentId);
          setHoldError(data.error);
        } else {
          setHoldError(data.error || "Slot is unavailable. Please select another slot.");
        }
        return;
      }

      setActiveHold(data.hold);
      setTimerSeconds(data.hold.remainingSeconds || 600);
    } catch {
      setHoldError("Network error reserving slot hold. Please try again.");
    } finally {
      setIsHolding(false);
    }
  };

  // Step 2: Initialize Paystack payment for held slot
  const handleProceedToPayment = async () => {
    setIsInitializingPayment(true);
    setHoldError(null);

    try {
      const effectiveDate = selectedDate || calculateUpcomingDate(selectedDay);
      const res = await fetch("/api/bookings/initialize-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorSlug,
          slotDate: effectiveDate,
          slotTime: selectedSlot,
          subject: "Mathematics",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setHoldError(data.error || "Failed to initialize checkout.");
        return;
      }

      setCheckoutData(data);
    } catch {
      setHoldError("Network error during checkout initialization. Please retry.");
    } finally {
      setIsInitializingPayment(false);
    }
  };

  // Step 3: Complete simulated sandbox payment and verify server-side (BK-03, BK-04, PY-02)
  const handleSimulatePaymentCompletion = async () => {
    if (!checkoutData?.paystack?.reference) return;

    setIsVerifying(true);
    setHoldError(null);

    try {
      const res = await fetch("/api/bookings/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: checkoutData.paystack.reference,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setHoldError(data.error || "Payment verification failed.");
        return;
      }

      setConfirmedBooking(data.booking);
      setActiveHold(null);
    } catch {
      setHoldError("Connection error while verifying transaction. Please retry.");
    } finally {
      setIsVerifying(false);
    }
  };

  const formattedGrossRate = `₦${(hourlyRateMinorUnits / 100).toLocaleString()}`;
  const commissionInclusiveRate = `₦${(Math.round(hourlyRateMinorUnits * 0.15) / 100).toLocaleString()}`;

  return (
    <div className="space-y-4">
      {/* Primary Trigger Button in Tutor Profile Sidebar */}
      <Button
        variant="tutor"
        size="lg"
        onClick={handleOpenModal}
        className="w-full justify-center font-bold text-base shadow-sm gap-2"
        data-testid="open-booking-modal-btn"
      >
        <Calendar className="w-5 h-5" />
        <span>Book a Lesson with {tutorName.split(" ")[0]}</span>
      </Button>

      {/* Booking Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-slate-200 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-slate-200">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                    1-on-1 Tutoring
                  </span>
                  <span className="text-xs text-neutral-slate-500 font-medium">WAT (Africa/Lagos)</span>
                </div>
                <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-neutral-slate-900">
                  Book Lesson with {tutorName}
                </h2>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-neutral-slate-400 hover:text-neutral-slate-700 hover:bg-neutral-slate-100 transition-colors"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error & Warning Alert Banner */}
            {holdError && (
              <div
                className={`mt-4 p-4 rounded-xl border text-xs flex items-start gap-3 ${
                  guardianRequired
                    ? "bg-amber-50 border-amber-300 text-amber-900"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
                data-testid="booking-error-banner"
              >
                {guardianRequired ? (
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-2 flex-1">
                  <p className="font-semibold leading-relaxed">{holdError}</p>
                  {guardianRequired && minorStudentId && (
                    <Link
                      href={`/guardian/consent?studentId=${minorStudentId}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition-colors shadow-xs"
                      data-testid="guardian-consent-redirect-btn"
                    >
                      <span>Complete Guardian Consent (OTP)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Confirmed Booking State (Success Screen) */}
            {confirmedBooking ? (
              <div className="mt-6 space-y-6 text-center" data-testid="booking-confirmation-screen">
                <div className="w-16 h-16 bg-status-green-600/10 text-status-green-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-status-green-600/5">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-neutral-slate-900">
                    Lesson Confirmed!
                  </h3>
                  <p className="text-sm text-neutral-slate-600 max-w-md mx-auto">
                    Your session with <strong className="text-neutral-slate-900">{confirmedBooking.tutorName}</strong> is scheduled and secured by Trainbow Escrow.
                  </p>
                </div>

                <div className="bg-neutral-slate-50 border border-neutral-slate-200 rounded-xl p-4 text-left space-y-3">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-slate-200">
                    <span className="text-neutral-slate-500 font-medium">Booking ID</span>
                    <span className="font-mono font-bold text-neutral-slate-900">{confirmedBooking.id}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-slate-200">
                    <span className="text-neutral-slate-500 font-medium">Session Date & Time</span>
                    <span className="font-bold text-neutral-slate-900">{confirmedBooking.slotDate} · {confirmedBooking.slotTime}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-slate-200">
                    <span className="text-neutral-slate-500 font-medium">Amount Paid</span>
                    <span className="font-bold text-status-green-800">₦{(confirmedBooking.amountMinorUnits / 100).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-slate-500 font-medium">Virtual Classroom Link</span>
                    <a
                      href={confirmedBooking.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-brand-blue-600 hover:underline"
                    >
                      <span>Join Room</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href="/bookings" className="flex-1">
                    <Button variant="primary" className="w-full justify-center text-sm font-bold shadow-sm">
                      View My Bookings Dashboard
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={handleCloseModal} className="flex-1 justify-center text-sm font-semibold">
                    Done
                  </Button>
                </div>
              </div>
            ) : checkoutData ? (
              /* Step 3: Paystack Checkout Interface */
              <div className="mt-6 space-y-6" data-testid="paystack-checkout-stage">
                <div className="p-4 rounded-xl bg-brand-blue-50/70 border border-brand-blue-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CreditCard className="w-5 h-5 text-brand-blue-600" />
                    <div>
                      <span className="font-bold text-xs text-neutral-slate-900 block">Paystack PCI-DSS Checkout</span>
                      <span className="text-[11px] text-neutral-slate-600">Ref: {checkoutData.paystack.reference}</span>
                    </div>
                  </div>
                  <Badge variant="brand">{formattedGrossRate}</Badge>
                </div>

                {/* Slot Hold Active Timer Reminder */}
                {activeHold && (
                  <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>Slot Hold Expiration:</span>
                    </div>
                    <span className="font-mono font-bold text-sm text-amber-700" data-testid="slot-hold-timer">
                      {formatTimer(timerSeconds)}
                    </span>
                  </div>
                )}

                <div className="bg-neutral-slate-50 p-4 rounded-xl border border-neutral-slate-200 space-y-2 text-xs text-neutral-slate-600">
                  <div className="flex justify-between">
                    <span>1 Hour One-on-One Tutoring</span>
                    <span className="font-semibold text-neutral-slate-900">{formattedGrossRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Commission (15% inclusive)</span>
                    <span className="text-neutral-slate-500 font-mono">{commissionInclusiveRate}</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-slate-200 flex justify-between text-sm font-bold text-neutral-slate-900">
                    <span>Total Amount Due</span>
                    <span className="text-brand-blue-600">{formattedGrossRate}</span>
                  </div>
                </div>

                {/* Simulated Payment Action for Instant Testing & Verification */}
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSimulatePaymentCompletion}
                    disabled={isVerifying}
                    className="w-full justify-center font-bold text-sm shadow-sm gap-2"
                    data-testid="simulate-paystack-success-btn"
                  >
                    {isVerifying ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Verifying with Paystack...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>Confirm & Complete Payment ({formattedGrossRate})</span>
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-neutral-slate-500 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-status-green-600" />
                    <span>256-bit SSL encrypted. Funds held in escrow until session completion.</span>
                  </p>
                </div>
              </div>
            ) : activeHold ? (
              /* Step 2: Slot Held & Order Review */
              <div className="mt-6 space-y-6" data-testid="slot-held-review-stage">
                {/* Hold Countdown Badge (BK-01) */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-amber-600 animate-pulse" />
                    <div>
                      <span className="font-bold text-xs text-neutral-slate-900 block">Slot Reserved (Temporary Hold)</span>
                      <span className="text-[11px] text-neutral-slate-600">Reserved for 10 minutes to prevent double-booking</span>
                    </div>
                  </div>
                  <span className="font-mono text-base font-bold text-amber-800 bg-white px-2.5 py-1 rounded-md border border-amber-300" data-testid="slot-hold-timer">
                    {formatTimer(timerSeconds)}
                  </span>
                </div>

                {/* Session Details */}
                <div className="bg-white border border-neutral-slate-200 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-slate-100">
                    <span className="text-neutral-slate-500 font-medium">Selected Date</span>
                    <span className="font-bold text-neutral-slate-900">{selectedDate} ({selectedDay})</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-slate-100">
                    <span className="text-neutral-slate-500 font-medium">Session Time Window</span>
                    <span className="font-bold text-neutral-slate-900">{selectedSlot} (WAT)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-slate-100">
                    <span className="text-neutral-slate-500 font-medium">Tutor Hourly Fee</span>
                    <span className="font-bold text-neutral-slate-900">{formattedGrossRate}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-slate-500 font-medium">Cancellation Terms</span>
                    <span className="text-[11px] text-neutral-slate-600 max-w-xs text-right">{cancellationPolicy}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setActiveHold(null)}
                    className="flex-1 justify-center text-xs font-semibold"
                  >
                    Change Slot
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleProceedToPayment}
                    disabled={isInitializingPayment}
                    className="flex-1 justify-center text-xs font-bold gap-1.5 shadow-sm"
                    data-testid="paystack-checkout-btn"
                  >
                    {isInitializingPayment ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>Proceed to Paystack</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              /* Step 1: Select Day & Available Slot */
              <div className="mt-6 space-y-6" data-testid="select-slot-stage">
                {/* Select Day */}
                <div>
                  <label className="block text-xs font-bold text-neutral-slate-700 uppercase tracking-wider mb-2">
                    1. Select Available Day
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {weeklyAvailability.map((avail) => (
                      <button
                        key={avail.day}
                        type="button"
                        onClick={() => {
                          setSelectedDay(avail.day);
                          setSelectedSlot(avail.slots[0] || "");
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all text-center ${
                          selectedDay === avail.day
                            ? "bg-brand-blue-600 text-white border-brand-blue-600 shadow-xs"
                            : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-neutral-slate-50"
                        }`}
                        data-testid={`day-option-${avail.day}`}
                      >
                        {avail.day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Time Slot */}
                <div>
                  <label className="block text-xs font-bold text-neutral-slate-700 uppercase tracking-wider mb-2">
                    2. Select Time Window (WAT Africa/Lagos)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {weeklyAvailability
                      .find((a) => a.day === selectedDay)
                      ?.slots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 rounded-xl border text-xs font-mono font-medium transition-all text-center flex items-center justify-center gap-2 ${
                            selectedSlot === slot
                              ? "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-300 ring-2 ring-brand-blue-600/20"
                              : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-neutral-slate-50"
                          }`}
                          data-testid={`slot-option-${slot.replace(/\s+/g, "_")}`}
                        >
                          <Clock className="w-3.5 h-3.5 opacity-60" />
                          <span>{slot}</span>
                        </button>
                      ))}
                  </div>
                </div>

                {/* Rate Notice */}
                <div className="p-3 bg-neutral-slate-50 rounded-xl border border-neutral-slate-200 flex items-center justify-between text-xs">
                  <span className="text-neutral-slate-600 font-medium">Session Tuition Fee</span>
                  <span className="text-base font-bold font-heading text-neutral-slate-900">{formattedGrossRate}</span>
                </div>

                {/* Submit Hold Reservation */}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleRequestHold}
                  disabled={isHolding || !selectedSlot}
                  className="w-full justify-center font-bold text-sm shadow-sm gap-2"
                  data-testid="reserve-slot-hold-btn"
                >
                  {isHolding ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Checking Slot Availability...</span>
                    </>
                  ) : (
                    <>
                      <span>Reserve Slot (10-Min Hold)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
