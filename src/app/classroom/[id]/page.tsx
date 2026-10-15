"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  ShieldAlert,
  Wifi,
  WifiOff,
  Share2,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Star,
  HelpCircle,
  Lock,
  Send,
  Eye,
  Award,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SessionData {
  id: string;
  bookingId: string;
  roomName: string;
  roomUrl: string;
  status: string;
  recordingEnabled: boolean;
  startsAt: string;
  expiresAt: string;
  endedAt?: string;
}

interface BookingData {
  id: string;
  tutorName: string;
  tutorSlug: string;
  subject: string;
  slotDate: string;
  slotTime: string;
  status: string;
}

interface AttendeeData {
  userId: string;
  fullName: string;
  role: "STUDENT" | "TUTOR" | "GUARDIAN";
  isOwner: boolean;
  token: string;
}

export default function ClassroomPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const bookingId = (params?.id as string) || "bkg-seed-001";

  // Role query param override for demo switching
  const requestedRole = (searchParams?.get("role") as "STUDENT" | "TUTOR" | "GUARDIAN") || "STUDENT";

  // Data state
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<SessionData | null>(null);
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [attendee, setAttendee] = useState<AttendeeData | null>(null);
  const [revokedError, setRevokedError] = useState<string | null>(null);
  const [attendanceId, setAttendanceId] = useState<string | null>(null);

  // AV controls state
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [lowBandwidthMode, setLowBandwidthMode] = useState(false);
  const [activeTab, setActiveTab] = useState<"whiteboard" | "notes" | "chat">("whiteboard");

  // Timer state
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [watTime, setWatTime] = useState("");

  // Safeguarding modal state
  const [showSafeguardModal, setShowSafeguardModal] = useState(false);
  const [safeguardSeverity, setSafeguardSeverity] = useState<"LOW" | "MEDIUM" | "HIGH" | "URGENT">("HIGH");
  const [safeguardCategory, setSafeguardCategory] = useState<
    "INAPPROPRIATE_BEHAVIOR" | "HARASSMENT" | "TECHNICAL_FAILURE" | "SAFETY_CONCERN" | "UNAUTHORIZED_RECORDING"
  >("SAFETY_CONCERN");
  const [safeguardDescription, setSafeguardDescription] = useState("");
  const [safeguardSubmitted, setSafeguardSubmitted] = useState(false);
  const [safeguardLoading, setSafeguardLoading] = useState(false);

  // Fallback modal state
  const [showFallbackModal, setShowFallbackModal] = useState(false);

  // Completion & Review state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [completingLesson, setCompletingLesson] = useState(false);
  const [, setExistingReview] = useState<any>(null);

  // Chat message state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; text: string; time: string; role: string }>>([
    {
      sender: "Trainbow System",
      text: "Welcome to your verified 1-on-1 classroom. Session recording is disabled by default to safeguard learner privacy under NDPA 2023.",
      time: "Now",
      role: "SYSTEM",
    },
    {
      sender: "Dr. Tayo Okafor",
      text: "Hello! Welcome to our Mathematics mastery session. Today we are tackling quadratic factorisation and discriminant analysis.",
      time: "Now",
      role: "TUTOR",
    },
  ]);
  const [newChatText, setNewChatText] = useState("");

  // Whiteboard notes state
  const [whiteboardText, setWhiteboardText] = useState(
    "Standard Quadratic Form:\nax² + bx + c = 0\n\nDiscriminant:\nΔ = b² - 4ac\n\nQuadratic Formula:\nx = (-b ± √Δ) / 2a\n\nExample Problem:\n2x² - 7x + 3 = 0\na = 2, b = -7, c = 3\nΔ = (-7)² - 4(2)(3) = 49 - 24 = 25\nx = (7 ± √25) / 4 = (7 ± 5) / 4\nx₁ = 3,  x₂ = 0.5"
  );

  // 1. Fetch Session Data
  useEffect(() => {
    async function fetchSession() {
      try {
        setLoading(true);
        setRevokedError(null);
        const res = await fetch(`/api/classroom/${bookingId}?role=${requestedRole}`);

        if (res.status === 410) {
          const errData = await res.json();
          setRevokedError(errData.error || "Session access revoked. This booking has been cancelled.");
          setLoading(false);
          return;
        }

        if (!res.ok) {
          const errData = await res.json();
          setRevokedError(errData.error || "Unable to join session.");
          setLoading(false);
          return;
        }

        const data = await res.json();
        setSession(data.session);
        setBooking(data.booking);
        setAttendee(data.attendee);
        if (data.review) {
          setExistingReview(data.review);
          setReviewSubmitted(true);
        }

        // CL-03: Record attendance join
        if (data.session && data.attendee) {
          try {
            const joinRes = await fetch(`/api/classroom/${bookingId}/join`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                sessionId: data.session.id,
                userId: data.attendee.userId,
                role: data.attendee.role,
              }),
            });
            if (joinRes.ok) {
              const joinData = await joinRes.json();
              setAttendanceId(joinData.attendanceId);
            }
          } catch (e) {
            console.error("Attendance join error:", e);
          }
        }
      } catch (err: any) {
        console.error("Error loading session:", err);
        setRevokedError("Network or server error while connecting to classroom.");
      } finally {
        setLoading(false);
      }
    }

    fetchSession();

    // Cleanup on unmount: record attendance leave (CL-03)
    return () => {
      if (attendanceId) {
        navigator.sendBeacon?.(
          `/api/classroom/${bookingId}/leave`,
          JSON.stringify({ attendanceId })
        );
      }
    };
  }, [bookingId, requestedRole]);

  // 2. Real-time clock & WAT timezone formatting (CL-01)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setWatTime(
        now.toLocaleTimeString("en-NG", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " WAT"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3. Elapsed lesson timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Submit Safeguarding Incident Report (CL-04)
  const handleSafeguardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!safeguardDescription.trim()) return;

    try {
      setSafeguardLoading(true);
      const res = await fetch(`/api/classroom/${bookingId}/safeguard`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session?.id,
          reporterId: attendee?.userId || "usr-std-001",
          severity: safeguardSeverity,
          category: safeguardCategory,
          description: safeguardDescription,
          sessionTimestampSeconds: elapsedSeconds,
        }),
      });

      if (res.ok) {
        setSafeguardSubmitted(true);
      }
    } catch (err) {
      console.error("Failed to submit safeguard report:", err);
    } finally {
      setSafeguardLoading(false);
    }
  };

  // Tutor: Mark Lesson Complete
  const handleCompleteLesson = async () => {
    if (!confirm("Are you sure you want to mark this lesson as COMPLETED? This will conclude the session, release escrow settlement, and invite the student for a review.")) {
      return;
    }

    try {
      setCompletingLesson(true);
      const res = await fetch(`/api/classroom/${bookingId}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorSlug: booking?.tutorSlug || "dr-tayo-okafor",
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setBooking(data.booking);
        setSession(data.session);
        setShowReviewModal(true);
      }
    } catch (err) {
      console.error("Error completing lesson:", err);
    } finally {
      setCompletingLesson(false);
    }
  };

  // Student: Submit Review & Rating
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/classroom/${bookingId}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: attendee?.userId || "usr-std-001",
          tutorSlug: booking?.tutorSlug || "dr-tayo-okafor",
          rating: selectedRating,
          reviewText: reviewComment || "Excellent session! Very clear step-by-step mathematical explanation.",
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setExistingReview(data.review);
        setReviewSubmitted(true);
      }
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  // Send Chat Message
  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatText.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      {
        sender: attendee?.fullName || (requestedRole === "TUTOR" ? "Dr. Tayo Okafor" : "Chioma Adeleke"),
        text: newChatText,
        time: "Just now",
        role: requestedRole,
      },
    ]);
    setNewChatText("");
  };

  // Loading State
  if (loading) {
    return (
      <main className="min-h-screen bg-brand-navy-950 flex flex-col items-center justify-center p-6 text-white">
        <div className="w-12 h-12 border-4 border-brand-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
        <h1 className="text-xl font-bold tracking-tight">Connecting to Trainbow Secure Classroom...</h1>
        <p className="text-neutral-slate-300 text-sm mt-2">Checking token credentials and verifying safeguarding permissions...</p>
      </main>
    );
  }

  // Revoked / Cancelled / Expired Access State (CL-02)
  if (revokedError) {
    return (
      <main className="min-h-screen bg-brand-navy-950 flex flex-col items-center justify-center p-6 text-white" data-testid="session-revoked-banner">
        <div className="max-w-md w-full bg-brand-navy-900 border border-red-500/30 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-red-950 text-red-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-800">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Session Access Revoked</h1>
          <p className="text-neutral-slate-200 text-sm leading-relaxed mb-6" data-testid="revoked-error-message">
            {revokedError}
          </p>
          <div className="bg-brand-navy-950 border border-neutral-slate-800 rounded-xl p-4 text-xs text-neutral-slate-300 mb-6 text-left">
            <div className="flex items-center gap-2 text-white font-semibold mb-1">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Safeguarding Invariant (CL-02)</span>
            </div>
            Under Trainbow Hub safeguarding policy, virtual classroom access links are immediately rendered inactive once a booking is cancelled, rescheduled, or expired.
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/bookings">
              <Button variant="primary" className="w-full">
                Return to Bookings Hub
              </Button>
            </Link>
            <Link href="/request-tutor">
              <Button variant="outline" className="w-full text-white border-neutral-slate-700">
                Request a Tutor Match
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-navy-950 text-white flex flex-col select-none">
      {/* 1. Header Toolbar */}
      <header className="bg-brand-navy-900 border-b border-neutral-slate-800 px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: Room & Subject Info */}
        <div className="flex items-center gap-3">
          <Link href="/bookings" className="text-neutral-slate-200 hover:text-white transition flex items-center gap-1 text-xs">
            <span>← Bookings</span>
          </Link>
          <div className="h-4 w-px bg-neutral-slate-700" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-semibold text-white tracking-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {booking?.subject || "Mathematics"} with {booking?.tutorName || "Dr. Tayo Okafor"}
              </h1>
              <span
                data-testid="session-status-badge"
                className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                  booking?.status === "COMPLETED" || session?.status === "COMPLETED"
                    ? "bg-blue-900/60 text-blue-200 border-blue-600"
                    : "bg-emerald-950 text-emerald-300 border-emerald-700"
                }`}
              >
                {booking?.status === "COMPLETED" || session?.status === "COMPLETED" ? "COMPLETED" : (booking?.status || session?.status || "LIVE")}
              </span>
            </div>
            <div className="text-[11px] text-neutral-slate-300 flex items-center gap-3 mt-0.5">
              <span>Slot: {booking?.slotDate} • {booking?.slotTime}</span>
              <span data-testid="wat-clock" className="flex items-center gap-1 text-white font-mono font-medium">
                <Clock className="w-3 h-3 text-neutral-slate-300" />
                {watTime}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Strict Safeguarding Indicators (CL-06 & Guardian mode) */}
        <div className="flex items-center gap-2">
          {/* CL-06: Strict NDPA Recording Disabled Badge */}
          <div
            data-testid="recording-disabled-badge"
            className="flex items-center gap-1.5 bg-brand-navy-950 border border-neutral-slate-700 px-2 py-1 sm:px-2.5 rounded-md text-[10px] sm:text-[11px] text-neutral-slate-200"
            title="Under NDPA 2023 Child Safeguards, sessions are never recorded without explicit verified parental consent."
          >
            <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <span className="font-semibold text-white">Recording: Disabled</span>
            <span className="text-[10px] text-neutral-slate-300 hidden sm:inline">(Child Privacy Protected)</span>
          </div>

          {/* Guardian Observer Banner if Guardian mode is active */}
          {requestedRole === "GUARDIAN" && (
            <div
              data-testid="guardian-observer-banner"
              className="flex items-center gap-1.5 bg-amber-950 border border-amber-600/40 text-amber-200 px-2.5 py-1 rounded-md text-[11px] font-semibold"
            >
              <Eye className="w-3.5 h-3.5 text-amber-300" />
              <span>Guardian Active Observer Mode</span>
            </div>
          )}

          {/* Low Bandwidth Active Pill */}
          {lowBandwidthMode && (
            <div
              data-testid="low-bandwidth-active-pill"
              className="flex items-center gap-1 bg-teal-950 border border-teal-600 text-teal-200 px-2 py-1 rounded-md text-[11px] font-medium"
            >
              <WifiOff className="w-3 h-3 text-teal-300" />
              <span>2G/3G Audio Mode</span>
            </div>
          )}
        </div>

        {/* Right: Role Switcher for Demo Testing + Emergency Report CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Demo Role Switcher Dropdown */}
          <div className="hidden md:flex items-center bg-brand-navy-950 border border-neutral-slate-700 rounded-lg p-0.5 text-[11px]">
            <span className="px-2 text-neutral-slate-300 text-[10px] uppercase font-bold">Role:</span>
            <button
              onClick={() => router.push(`/classroom/${bookingId}?role=STUDENT`)}
              className={`px-2 py-0.5 rounded transition ${
                requestedRole === "STUDENT" ? "bg-brand-blue-600 text-white font-semibold" : "text-neutral-slate-300 hover:text-white"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => router.push(`/classroom/${bookingId}?role=TUTOR`)}
              className={`px-2 py-0.5 rounded transition ${
                requestedRole === "TUTOR" ? "bg-teal-600 text-white font-semibold" : "text-neutral-slate-300 hover:text-white"
              }`}
            >
              Tutor
            </button>
            <button
              onClick={() => router.push(`/classroom/${bookingId}?role=GUARDIAN`)}
              className={`px-2 py-0.5 rounded transition ${
                requestedRole === "GUARDIAN" ? "bg-amber-600 text-white font-semibold" : "text-neutral-slate-300 hover:text-white"
              }`}
            >
              Guardian
            </button>
          </div>

          {/* CL-04: Emergency Report Button */}
          <button
            data-testid="report-conduct-btn"
            onClick={() => setShowSafeguardModal(true)}
            className="flex items-center gap-1.5 bg-red-950 hover:bg-red-900 border border-red-700 text-red-200 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition shrink-0"
            aria-label="Report conduct or safeguarding concern"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-red-300" />
            <span className="hidden sm:inline">Report Conduct</span>
          </button>
        </div>
      </header>

      {/* 2. Main Stage & Sidebar Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 min-h-0 overflow-hidden">
        {/* Left 3 Cols: Video Stage & Interactive Board */}
        <div className="lg:col-span-3 flex flex-col gap-3 min-h-0">
          {/* Main Visual Stage */}
          <div className="relative flex-1 bg-brand-navy-900 border border-neutral-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Top Stage Overlay Info */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span className="bg-brand-navy-950/90 backdrop-blur border border-neutral-slate-700 text-white text-xs px-2.5 py-1 rounded-md font-mono">
                ⏱ {formatTimer(elapsedSeconds)}
              </span>
              <span className="bg-brand-navy-950/90 backdrop-blur border border-neutral-slate-700 text-white text-xs px-2.5 py-1 rounded-md">
                Room: {session?.roomName || "trb-cls-live"}
              </span>
            </div>

            {/* Video Viewport: Simulated WebRTC Video Feed / Whiteboard Canvas */}
            <div className="flex-1 relative flex items-center justify-center p-6 bg-gradient-to-b from-brand-navy-900 to-brand-navy-950">
              {lowBandwidthMode ? (
                // CL-05: Low bandwidth audio-only replacement state
                <div className="text-center max-w-md p-6 bg-brand-navy-950 border border-teal-500/40 rounded-2xl" data-testid="low-bandwidth-panel">
                  <div className="w-16 h-16 bg-teal-950 text-teal-300 rounded-full flex items-center justify-center mx-auto mb-4 border border-teal-700">
                    <Wifi className="w-8 h-8 animate-pulse" />
                  </div>
                  <h2 className="text-lg font-bold text-teal-200 mb-1">Optimised Audio & Whiteboard Mode Active</h2>
                  <p className="text-xs text-neutral-slate-200 leading-relaxed mb-4">
                    Video streaming paused to conserve Nigerian mobile data and guarantee crystal-clear two-way audio over 2G/3G connections.
                  </p>
                  <div className="bg-brand-navy-900 border border-neutral-slate-700 rounded-xl p-3 text-left text-xs text-neutral-slate-200">
                    <p className="font-semibold text-white mb-1">Active Audio Stream:</p>
                    <p className="text-neutral-slate-300">Tutor: Dr. Tayo Okafor (Speaking) 🔊</p>
                    <p className="text-neutral-slate-300">Learner: Chioma Adeleke (Connected) 🎙</p>
                  </div>
                </div>
              ) : (
                // Full High-Definition Simulated Video Feed
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  {/* Tutor Main Feed Representation */}
                  <div className="relative w-full h-full max-h-[520px] bg-neutral-slate-900 border border-neutral-slate-800 rounded-xl overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-teal-900/70 border-2 border-teal-400 flex items-center justify-center text-teal-100 text-3xl font-bold shadow-xl mb-3">
                      TO
                    </div>
                    <p className="text-base font-semibold text-white">Dr. Tayo Okafor (Verified Tutor)</p>
                    <p className="text-xs text-teal-300 mt-1">PhD Mathematics • Lead Instructor</p>
                    <div className="absolute bottom-3 left-3 bg-brand-navy-950/90 px-2 py-1 rounded text-[11px] text-white flex items-center gap-1.5 border border-neutral-slate-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>HD 1080p WebRTC Stream</span>
                    </div>

                    {/* Student Picture-in-Picture Feed */}
                    <div
                      data-testid="student-pip-feed"
                      className="absolute bottom-4 right-4 w-40 sm:w-48 aspect-video bg-brand-navy-950 border-2 border-brand-blue-500 rounded-xl shadow-2xl p-2 flex flex-col justify-between overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-blue-200 font-semibold truncate">
                          {attendee?.fullName || "Chioma Adeleke"}
                        </span>
                        {micOn ? <Mic className="w-3 h-3 text-emerald-400" /> : <MicOff className="w-3 h-3 text-red-400" />}
                      </div>
                      <div className="flex items-center justify-center flex-1">
                        {camOn ? (
                          <div className="w-9 h-9 rounded-full bg-blue-900 text-blue-200 flex items-center justify-center text-xs font-bold border border-blue-400">
                            CA
                          </div>
                        ) : (
                          <VideoOff className="w-6 h-6 text-neutral-slate-400" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-neutral-slate-300">
                        <span>Learner</span>
                        <span className="text-emerald-400 font-medium">Connected</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Controls Bar (Microphone, Camera, Screen, Fallback, End) */}
            <div
              data-testid="classroom-controls"
              className="bg-brand-navy-950 border-t border-neutral-slate-800 px-4 py-3 flex items-center justify-between gap-3"
            >
              {/* Left: Device Toggles */}
              <div className="flex items-center gap-2">
                <button
                  data-testid="mic-toggle-btn"
                  onClick={() => setMicOn(!micOn)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                    micOn
                      ? "bg-brand-navy-900 text-white border-neutral-slate-700 hover:bg-neutral-slate-800"
                      : "bg-red-950 text-red-200 border-red-800 hover:bg-red-900"
                  }`}
                  aria-label={micOn ? "Mute Microphone" : "Unmute Microphone"}
                >
                  {micOn ? <Mic className="w-4 h-4 text-emerald-400" /> : <MicOff className="w-4 h-4 text-red-400" />}
                  <span className="hidden sm:inline">{micOn ? "Mute" : "Unmuted"}</span>
                </button>

                <button
                  data-testid="cam-toggle-btn"
                  onClick={() => setCamOn(!camOn)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                    camOn
                      ? "bg-brand-navy-900 text-white border-neutral-slate-700 hover:bg-neutral-slate-800"
                      : "bg-red-950 text-red-200 border-red-800 hover:bg-red-900"
                  }`}
                  aria-label={camOn ? "Turn Camera Off" : "Turn Camera On"}
                >
                  {camOn ? <Video className="w-4 h-4 text-emerald-400" /> : <VideoOff className="w-4 h-4 text-red-400" />}
                  <span className="hidden sm:inline">{camOn ? "Video On" : "Video Off"}</span>
                </button>

                <button
                  data-testid="share-screen-btn"
                  onClick={() => setScreenSharing(!screenSharing)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                    screenSharing
                      ? "bg-blue-900 text-blue-100 border-blue-500"
                      : "bg-brand-navy-900 text-white border-neutral-slate-700 hover:bg-neutral-slate-800"
                  }`}
                  aria-label="Share screen"
                >
                  <Share2 className="w-4 h-4 text-blue-400" />
                  <span className="hidden sm:inline">{screenSharing ? "Sharing" : "Share Screen"}</span>
                </button>
              </div>

              {/* Center: CL-05 Low Bandwidth Mode & Fallback Options */}
              <div className="flex items-center gap-2">
                <button
                  data-testid="low-bandwidth-toggle"
                  onClick={() => setLowBandwidthMode(!lowBandwidthMode)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                    lowBandwidthMode
                      ? "bg-teal-900 text-teal-100 border-teal-500"
                      : "bg-brand-navy-900 text-white border-neutral-slate-700 hover:bg-neutral-slate-800"
                  }`}
                  title="Toggle low bandwidth mode to save data over 2G/3G connections"
                  aria-label="Toggle low bandwidth mode"
                >
                  {lowBandwidthMode ? <WifiOff className="w-4 h-4 text-teal-300" /> : <Wifi className="w-4 h-4 text-teal-400" />}
                  <span className="hidden md:inline">{lowBandwidthMode ? "Audio Only (Active)" : "Low Data Mode"}</span>
                </button>

                <button
                  data-testid="fallback-help-btn"
                  onClick={() => setShowFallbackModal(true)}
                  className="p-2.5 rounded-xl border bg-brand-navy-900 text-white border-neutral-slate-700 hover:bg-neutral-slate-800 text-xs font-semibold flex items-center gap-1.5 transition"
                  title="Connection troubleshooting & emergency helpline"
                  aria-label="Helpline and troubleshooting"
                >
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span className="hidden md:inline">Help / Helpline</span>
                </button>
              </div>

              {/* Right: End Session or Complete Lesson (Tutor) */}
              <div className="flex items-center gap-2">
                {requestedRole === "TUTOR" && (
                  <button
                    data-testid="complete-lesson-btn"
                    onClick={handleCompleteLesson}
                    disabled={completingLesson}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-lg"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{completingLesson ? "Finalizing..." : "Complete Lesson"}</span>
                  </button>
                )}

                {booking?.status === "COMPLETED" && (
                  <button
                    data-testid="open-review-btn"
                    onClick={() => setShowReviewModal(true)}
                    className="bg-brand-blue-600 hover:bg-brand-blue-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-lg"
                  >
                    <Star className="w-4 h-4 text-amber-300" />
                    <span>Rate Tutor</span>
                  </button>
                )}

                <Link href="/bookings">
                  <button
                    data-testid="leave-session-btn"
                    className="bg-red-600 hover:bg-red-500 text-white p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    aria-label="Leave Classroom"
                  >
                    <PhoneOff className="w-4 h-4" />
                    <span className="hidden sm:inline">Leave</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Whiteboard, Notes & Interactive In-Session Sidebar */}
        <div className="flex flex-col bg-brand-navy-900 border border-neutral-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Tab Navigation */}
          <div className="flex border-b border-neutral-slate-800 bg-brand-navy-950 p-1">
            <button
              onClick={() => setActiveTab("whiteboard")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
                activeTab === "whiteboard" ? "bg-neutral-slate-800 text-white shadow" : "text-neutral-slate-300 hover:text-white"
              }`}
            >
              Whiteboard
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
                activeTab === "chat" ? "bg-neutral-slate-800 text-white shadow" : "text-neutral-slate-300 hover:text-white"
              }`}
            >
              Session Chat
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
                activeTab === "notes" ? "bg-neutral-slate-800 text-white shadow" : "text-neutral-slate-300 hover:text-white"
              }`}
            >
              WAEC Tips
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 p-3 overflow-y-auto min-h-0 flex flex-col">
            {activeTab === "whiteboard" && (
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">Live Mathematical Scratchpad</span>
                  <span className="text-[10px] text-teal-300 font-mono font-medium">Real-time sync</span>
                </div>
                <textarea
                  id="whiteboard-notes-area"
                  data-testid="whiteboard-notes-area"
                  aria-label="Live Mathematical Scratchpad notes"
                  value={whiteboardText}
                  onChange={(e) => setWhiteboardText(e.target.value)}
                  className="flex-1 w-full bg-brand-navy-950 border border-neutral-slate-700 rounded-xl p-3 font-mono text-xs text-white placeholder-neutral-slate-400 focus:outline-none focus:border-teal-400 resize-none leading-relaxed"
                  placeholder="Type mathematical notes, equations, and steps here..."
                />
              </div>
            )}

            {activeTab === "chat" && (
              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto space-y-3 pr-1 mb-3">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl text-xs ${
                        msg.role === "SYSTEM"
                          ? "bg-brand-navy-950 border border-neutral-slate-700 text-neutral-slate-200"
                          : msg.role === "TUTOR"
                          ? "bg-teal-950 border border-teal-700 text-teal-100"
                          : "bg-blue-950 border border-blue-700 text-blue-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[11px] text-white">{msg.sender}</span>
                        <span className="text-[10px] text-neutral-slate-300">{msg.time}</span>
                      </div>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendChat} className="flex gap-2">
                  <input
                    id="chat-input"
                    data-testid="chat-input"
                    aria-label="Send a question to tutor"
                    type="text"
                    value={newChatText}
                    onChange={(e) => setNewChatText(e.target.value)}
                    placeholder="Send a question to tutor..."
                    className="flex-1 bg-brand-navy-950 border border-neutral-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-slate-400 focus:outline-none focus:border-blue-400"
                  />
                  <button
                    data-testid="chat-send-btn"
                    aria-label="Send chat message"
                    type="submit"
                    className="bg-brand-blue-600 hover:bg-brand-blue-500 text-white px-3 py-2 rounded-xl text-xs font-semibold transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}

            {activeTab === "notes" && (
              <div className="space-y-3 text-xs leading-relaxed text-neutral-slate-200">
                <div className="bg-brand-navy-950 border border-blue-500/40 rounded-xl p-3">
                  <h3 className="font-semibold text-blue-200 mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-blue-300" />
                    WAEC Chief Examiner Invariant
                  </h3>
                  <p className="text-neutral-slate-200 text-[11px]">
                    Candidates must clearly state standard formula substitution before resolving square root terms. Omitting step marks leads to loss of method points.
                  </p>
                </div>
                <div className="bg-brand-navy-950 border border-amber-500/40 rounded-xl p-3">
                  <h3 className="font-semibold text-amber-200 mb-1">JAMB Rapid Shortcut</h3>
                  <p className="text-neutral-slate-200 text-[11px]">
                    Sum of roots = -b/a, Product of roots = c/a. Inspect option choices for quadratic factoring before lengthy formula computations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. In-Session Safeguarding Conduct Modal (CL-04) */}
      {showSafeguardModal && (
        <div
          data-testid="safeguard-modal"
          role="dialog"
          aria-labelledby="safeguard-dialog-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-brand-navy-900 border border-red-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-950 text-red-300 flex items-center justify-center border border-red-800">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h2 id="safeguard-dialog-title" className="text-lg font-bold text-white">Emergency Safeguarding & Conduct Report</h2>
                <p className="text-xs text-neutral-slate-300">Strict child safety oversight under NDPA 2023 & Child Rights Act</p>
              </div>
            </div>

            {safeguardSubmitted ? (
              <div className="py-6 text-center" data-testid="safeguard-success-banner">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-2">Report Successfully Dispatched</h3>
                <p className="text-xs text-neutral-slate-200 leading-relaxed max-w-sm mx-auto mb-6">
                  Our Designated Safeguarding Lead (Grace Danladi) has been alerted. Reports of high or urgent severity are triaged within 24 hours. Your safety is our absolute priority.
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowSafeguardModal(false);
                    setSafeguardSubmitted(false);
                  }}
                  className="w-full"
                >
                  Return to Classroom
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSafeguardSubmit} className="space-y-4 text-xs">
                <div>
                  <label htmlFor="safeguard-severity-select" className="block text-white font-semibold mb-1">
                    Severity Level
                  </label>
                  <select
                    id="safeguard-severity-select"
                    data-testid="safeguard-severity-select"
                    aria-label="Severity Level"
                    value={safeguardSeverity}
                    onChange={(e: any) => setSafeguardSeverity(e.target.value)}
                    className="w-full bg-brand-navy-950 border border-neutral-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="URGENT">URGENT (Immediate safety violation / crisis)</option>
                    <option value="HIGH">HIGH (Inappropriate behavior / harassment)</option>
                    <option value="MEDIUM">MEDIUM (Technical dispute / attendance issue)</option>
                    <option value="LOW">LOW (Feedback / minor clarification)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="safeguard-category-select" className="block text-white font-semibold mb-1">
                    Violation Category
                  </label>
                  <select
                    id="safeguard-category-select"
                    data-testid="safeguard-category-select"
                    aria-label="Violation Category"
                    value={safeguardCategory}
                    onChange={(e: any) => setSafeguardCategory(e.target.value)}
                    className="w-full bg-brand-navy-950 border border-neutral-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="SAFETY_CONCERN">Safety Concern</option>
                    <option value="INAPPROPRIATE_BEHAVIOR">Inappropriate Behavior</option>
                    <option value="HARASSMENT">Harassment or Bullying</option>
                    <option value="UNAUTHORIZED_RECORDING">Attempted Unauthorized Recording</option>
                    <option value="TECHNICAL_FAILURE">Severe Technical Video Failure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="safeguard-description-input" className="block text-white font-semibold mb-1">
                    Incident Description
                  </label>
                  <textarea
                    id="safeguard-description-input"
                    data-testid="safeguard-description-input"
                    aria-label="Incident Description"
                    value={safeguardDescription}
                    onChange={(e) => setSafeguardDescription(e.target.value)}
                    required
                    rows={4}
                    placeholder="Provide specific details of what happened, time of incident, and parties involved..."
                    className="w-full bg-brand-navy-950 border border-neutral-slate-700 rounded-xl p-3 text-white placeholder-neutral-slate-400 focus:outline-none focus:border-red-500 resize-none leading-relaxed"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowSafeguardModal(false)}
                    className="flex-1 text-white border border-neutral-slate-700 hover:bg-neutral-slate-800"
                  >
                    Cancel
                  </Button>
                  <Button
                    data-testid="safeguard-submit-btn"
                    type="submit"
                    variant="primary"
                    disabled={safeguardLoading}
                    className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold"
                  >
                    {safeguardLoading ? "Submitting..." : "Submit Confidential Report"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 4. Fallback Support & Helpline Modal (CL-05) */}
      {showFallbackModal && (
        <div
          data-testid="fallback-modal"
          role="dialog"
          aria-labelledby="fallback-dialog-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-brand-navy-900 border border-teal-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-950 text-teal-300 flex items-center justify-center border border-teal-700">
                <Wifi className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 id="fallback-dialog-title" className="text-lg font-bold text-white">Network Fallback & Support Pathway</h2>
                <p className="text-xs text-neutral-slate-300">High-reliability connectivity for Nigerian networks</p>
              </div>
              <button
                data-testid="close-fallback-x-btn"
                onClick={() => setShowFallbackModal(false)}
                className="text-neutral-slate-400 hover:text-white p-1 rounded-lg transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-neutral-slate-200 mb-6">
              <div className="bg-brand-navy-950 border border-neutral-slate-700 rounded-xl p-3.5">
                <h3 className="font-semibold text-teal-200 mb-1 flex items-center gap-1.5">
                  <WifiOff className="w-4 h-4 text-teal-300" />
                  1-Tap Low-Bandwidth Mode (2G/3G)
                </h3>
                <p className="text-neutral-slate-300 leading-relaxed mb-3">
                  If video is freezing due to MTN, Airtel, or Glo fluctuations, switch to low-bandwidth mode to maintain two-way voice without data lag.
                </p>
                <Button
                  data-testid="toggle-low-bandwidth-modal-btn"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setLowBandwidthMode(!lowBandwidthMode);
                    setShowFallbackModal(false);
                  }}
                  className="w-full text-white border-teal-600 hover:bg-teal-950"
                >
                  {lowBandwidthMode ? "Switch Back to Full HD Video" : "Activate Low-Bandwidth Voice Mode"}
                </Button>
              </div>

              <div className="bg-brand-navy-950 border border-neutral-slate-700 rounded-xl p-3.5">
                <h3 className="font-semibold text-amber-200 mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-300" />
                  Direct Technical Helpline
                </h3>
                <p className="text-neutral-slate-300 leading-relaxed">
                  If you are unable to connect to the tutor after 3 minutes, our support team can initiate an instant phone bridge:
                </p>
                <div className="mt-2 space-y-1 font-mono text-white">
                  <p>📞 Phone: +234 1 800 TRAINBOW</p>
                  <p>💬 WhatsApp: +234 802 111 2233</p>
                  <p>✉️ Email: support@trainbowhub.ng</p>
                </div>
              </div>
            </div>

            <Button
              data-testid="close-fallback-btn"
              variant="primary"
              onClick={() => setShowFallbackModal(false)}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* 5. Post-Lesson Tutor Review & Star Rating Modal */}
      {showReviewModal && (
        <div
          data-testid="review-modal"
          role="dialog"
          aria-labelledby="review-dialog-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-brand-navy-900 border border-blue-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-950 text-blue-300 flex items-center justify-center border border-blue-700">
                <Star className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h2 id="review-dialog-title" className="text-lg font-bold text-white">Rate Your Lesson with {booking?.tutorName || "Tutor"}</h2>
                <p className="text-xs text-neutral-slate-300">Help the Trainbow community maintain high educational standards</p>
              </div>
            </div>

            {reviewSubmitted ? (
              <div className="py-6 text-center" data-testid="review-success-banner">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-2">Review Recorded!</h3>
                <p className="text-xs text-neutral-slate-200 leading-relaxed max-w-sm mx-auto mb-6">
                  Thank you for rating Dr. Tayo Okafor. Your review has been added to their public tutor profile and unlocks the next stage of your learning journey.
                </p>
                <Link href="/bookings">
                  <Button variant="primary" className="w-full">
                    Return to Bookings Hub
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-white font-semibold mb-2">Overall Rating</label>
                  <div className="flex items-center justify-center gap-2 p-3 bg-brand-navy-950 rounded-xl border border-neutral-slate-700">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        data-testid={`rating-star-${star}`}
                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                        onClick={() => setSelectedRating(star)}
                        className="p-1 focus:outline-none transition transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= selectedRating
                              ? "text-amber-300 fill-amber-300"
                              : "text-neutral-slate-600"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="review-comment-input" className="block text-white font-semibold mb-1">
                    Your Feedback & Comments
                  </label>
                  <textarea
                    id="review-comment-input"
                    data-testid="review-comment-input"
                    aria-label="Your Feedback and Comments"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    rows={4}
                    placeholder="Describe how the tutor explained concepts, solved difficult questions, and engaged with you..."
                    className="w-full bg-brand-navy-950 border border-neutral-slate-700 rounded-xl p-3 text-white placeholder-neutral-slate-400 focus:outline-none focus:border-blue-400 resize-none leading-relaxed"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 text-white border border-neutral-slate-700 hover:bg-neutral-slate-800"
                  >
                    Later
                  </Button>
                  <Button
                    data-testid="submit-review-btn"
                    type="submit"
                    variant="primary"
                    className="flex-1 bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-bold"
                  >
                    Submit Review
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
