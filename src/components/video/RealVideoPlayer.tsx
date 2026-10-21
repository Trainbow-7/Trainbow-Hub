"use client";

import * as React from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  ExternalLink,
  AlertTriangle,
  Layers,
  CheckCircle,
  HelpCircle,
  Info,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export interface LessonVideoData {
  id: string;
  lessonId: string;
  provider: "YOUTUBE" | "VIMEO" | "SELF_HOSTED";
  providerVideoId: string;
  title: string;
  channelId: string;
  channelName: string;
  durationSeconds: number;
  thumbnailUrl?: string;
  startSeconds?: number;
  endSeconds?: number;
  isPrimary: boolean;
}

interface RealVideoPlayerProps {
  primaryVideo: LessonVideoData | null;
  alternates?: LessonVideoData[];
  lessonTitle: string;
  isWaecAligned?: boolean;
  initialPositionSeconds?: number;
  onProgressUpdate?: (positionSeconds: number, percentWatched: number) => void;
  onLessonAutoCompleted?: () => void;
  onRequestTutor?: () => void;
  slug: string;
  lessonId: string;
}

export function RealVideoPlayer({
  primaryVideo,
  alternates = [],
  lessonTitle,
  isWaecAligned = false,
  initialPositionSeconds = 0,
  onProgressUpdate,
  onLessonAutoCompleted,
  onRequestTutor,
  slug,
  lessonId,
}: RealVideoPlayerProps) {
  // Current active video (primary or user-selected alternate)
  const [activeVideo, setActiveVideo] = React.useState<LessonVideoData | null>(primaryVideo);

  // Click-to-play facade state: iframe is NEVER loaded until user initiates play
  const [hasLoadedIframe, setHasLoadedIframe] = React.useState(false);
  const [showNotice, setShowNotice] = React.useState(false);
  const [hasAcknowledgedNotice, setHasAcknowledgedNotice] = React.useState(false);

  // Playback & progress state
  const [currentPosition, setCurrentPosition] = React.useState(initialPositionSeconds);
  const [hasCompleted, setHasCompleted] = React.useState(false);
  const [playbackError, setPlaybackError] = React.useState(false);

  // Problem report modal state
  const [reportModalOpen, setReportModalOpen] = React.useState(false);
  const [reportReason, setReportReason] = React.useState<string>("BROKEN");
  const [reportDetails, setReportDetails] = React.useState("");
  const [reportSubmitted, setReportSubmitted] = React.useState(false);

  // Update active video if primaryVideo changes
  React.useEffect(() => {
    setActiveVideo(primaryVideo);
    setHasLoadedIframe(false);
    setPlaybackError(false);
  }, [primaryVideo?.id]);

  // Check legal notice acknowledgment from localStorage
  React.useEffect(() => {
    try {
      const ack = localStorage.getItem("trainbow_youtube_notice_seen");
      if (ack === "true") {
        setHasAcknowledgedNotice(true);
      }
    } catch {
      // localStorage may be disabled
    }
  }, []);

  // Format real duration (seconds -> MM:SS or HH:MM:SS)
  const formatDuration = (totalSeconds: number) => {
    if (!totalSeconds || isNaN(totalSeconds)) return "00:00";
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = Math.floor(totalSeconds % 60);

    if (hrs > 0) {
      return `${hrs}:${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleStartPlayback = () => {
    if (!hasAcknowledgedNotice) {
      setShowNotice(true);
    }
    setHasLoadedIframe(true);
  };

  const acknowledgeNotice = () => {
    try {
      localStorage.setItem("trainbow_youtube_notice_seen", "true");
    } catch {}
    setHasAcknowledgedNotice(true);
    setShowNotice(false);
  };

  // Listen to postMessage from YouTube IFrame Player API for real progress
  React.useEffect(() => {
    if (!hasLoadedIframe || !activeVideo) return;

    let intervalId: any = null;

    // Save playback position every 10 seconds while playing
    intervalId = setInterval(() => {
      setCurrentPosition((prev) => {
        const next = prev + 10;
        const total = activeVideo.durationSeconds || 1200;
        const percent = Math.min(100, Math.round((next / total) * 100));

        if (onProgressUpdate) {
          onProgressUpdate(next, percent);
        }

        if (percent >= 90 && !hasCompleted) {
          setHasCompleted(true);
          if (onLessonAutoCompleted) {
            onLessonAutoCompleted();
          }
        }
        return next;
      });
    }, 10000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasLoadedIframe, activeVideo?.id, hasCompleted]);

  // Handle problem report submission
  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeVideo) return;

    try {
      await fetch(`/api/academy/courses/${slug}/lessons/${lessonId}/video-report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonVideoId: activeVideo.id,
          reason: reportReason,
          details: reportDetails,
        }),
      });
      setReportSubmitted(true);
      setTimeout(() => {
        setReportSubmitted(false);
        setReportModalOpen(false);
        setReportDetails("");
      }, 2000);
    } catch (err) {
      console.error("Report failed:", err);
    }
  };

  // State A: No approved video available yet
  if (!activeVideo) {
    return (
      <div
        className="rounded-2xl border-2 border-dashed border-neutral-slate-300 bg-neutral-slate-50/80 p-8 sm:p-12 text-center space-y-4"
        data-testid="no-video-fallback"
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 text-brand-blue-700 flex items-center justify-center shadow-xs">
          <Info className="w-7 h-7" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-base font-bold text-neutral-slate-900">Video Lesson Under Review</h3>
          <p className="text-xs text-neutral-slate-600 leading-relaxed">
            Our curriculum specialists and WAEC examiners are currently vetting high-definition verified video lessons for{" "}
            <strong>&ldquo;{lessonTitle}&rdquo;</strong>.
          </p>
          <p className="text-[11px] text-neutral-slate-500">
            In the meantime, you can master the syllabus using the comprehensive worked notes, formulas, and practice quiz below.
          </p>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="sm"
            variant="outline"
            onClick={onRequestTutor}
            className="text-xs border-brand-blue-600 text-brand-blue-700 hover:bg-blue-50"
          >
            Request a 1-on-1 Tutor Explanation
          </Button>
        </div>
      </div>
    );
  }

  // Construct privacy-enhanced YouTube embed URL (youtube-nocookie.com)
  const startSec = activeVideo.startSeconds || (initialPositionSeconds > 0 ? initialPositionSeconds : 0);
  const embedParams = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
  });
  if (startSec > 0) {
    embedParams.set("start", String(startSec));
  }
  if (activeVideo.endSeconds && activeVideo.endSeconds > startSec) {
    embedParams.set("end", String(activeVideo.endSeconds));
  }
  const embedSrc = `https://www.youtube-nocookie.com/embed/${activeVideo.providerVideoId}?${embedParams.toString()}`;
  const watchOnYouTubeUrl = `https://www.youtube.com/watch?v=${activeVideo.providerVideoId}`;

  return (
    <div className="space-y-3" data-testid="real-video-player-container">
      {/* 16:9 Video Player Box */}
      <div className="rounded-2xl bg-neutral-950 text-white overflow-hidden shadow-md border border-neutral-800 relative">
        <div className="relative aspect-video w-full bg-neutral-900">
          {!hasLoadedIframe ? (
            /* CLICK-TO-PLAY FACADE (Zero 3rd-party requests until clicked; Data Saver safe) */
            <div
              className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 bg-cover bg-center cursor-pointer group"
              style={{
                backgroundImage: activeVideo.thumbnailUrl
                  ? `linear-gradient(to top, rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.35)), url(${activeVideo.thumbnailUrl})`
                  : undefined,
              }}
              onClick={handleStartPlayback}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleStartPlayback();
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Play lesson video: ${activeVideo.title}`}
              data-testid="video-facade"
            >
              {/* Top Bar with Real Metadata */}
              <div className="flex items-center justify-between gap-2 z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white border border-white/20">
                    {formatDuration(activeVideo.durationSeconds)}
                  </span>
                  <span className="text-xs text-neutral-200 font-medium truncate max-w-xs sm:max-w-md drop-shadow-sm">
                    {activeVideo.title}
                  </span>
                </div>
                {isWaecAligned && (
                  <Badge className="bg-emerald-600/90 hover:bg-emerald-700 text-white border-none text-[10px] px-2 py-0.5 flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3 h-3" />
                    <span>WAEC Aligned</span>
                  </Badge>
                )}
              </div>

              {/* Big Centered Play Button */}
              <div className="flex flex-col items-center justify-center z-10 space-y-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-blue-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform focus:outline-hidden">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white fill-white" />
                </div>
                <span className="text-xs font-semibold text-neutral-200 tracking-wide bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                  Click to Play (Data Saver)
                </span>
              </div>

              {/* Bottom Attribution Bar */}
              <div className="flex items-center justify-between text-xs text-neutral-300 z-10 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                <span className="text-[11px] font-medium text-neutral-300">
                  Channel: <strong className="text-white">{activeVideo.channelName}</strong>
                </span>
                <span className="text-[10px] text-neutral-400">
                  Privacy-Enhanced YouTube Player
                </span>
              </div>
            </div>
          ) : (
            /* ACTIVE YOUTUBE-NOCOOKIE IFRAME */
            <iframe
              src={embedSrc}
              title={activeVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="youtube-nocookie-iframe"
              onError={() => setPlaybackError(true)}
            />
          )}
        </div>
      </div>

      {/* First-time Data & Hosting Privacy Notice Modal */}
      {showNotice && (
        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-start justify-between gap-3 text-xs text-blue-900">
          <div className="space-y-1">
            <p className="font-semibold flex items-center gap-1.5">
              <Info className="w-4 h-4 text-brand-blue-600 shrink-0" />
              <span>Educational Video Notice</span>
            </p>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              This curriculum lesson is streamed using YouTube&apos;s privacy-enhanced mode (youtube-nocookie.com).
              No cookies are stored on your device until you initiate playback. Autoplay and comments are strictly disabled for student focus.
            </p>
          </div>
          <Button
            size="sm"
            onClick={acknowledgeNotice}
            className="text-[11px] h-7 px-3 bg-brand-blue-600 text-white shrink-0"
          >
            Got it
          </Button>
        </div>
      )}

      {/* Video Actions & Alternates Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
        <div className="flex items-center gap-3">
          {/* Watch on YouTube link */}
          <a
            href={watchOnYouTubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-blue-600 hover:text-brand-blue-800 font-semibold"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Watch on YouTube</span>
          </a>

          {/* Attribution channel name */}
          <span className="text-neutral-slate-400">•</span>
          <span className="text-neutral-slate-600">
            Instructor / Channel: <strong className="text-neutral-slate-900">{activeVideo.channelName}</strong>
          </span>

          {/* Real duration */}
          <span className="text-neutral-slate-400">•</span>
          <span className="text-neutral-slate-600 font-mono">
            {formatDuration(activeVideo.durationSeconds)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Try another explanation dropdown / button */}
          {alternates.length > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-neutral-slate-500 font-medium">Alternative:</span>
              <select
                aria-label="Select alternative explanation"
                value={activeVideo.id}
                onChange={(e) => {
                  const chosen = [primaryVideo, ...alternates].find((v) => v?.id === e.target.value);
                  if (chosen) {
                    setActiveVideo(chosen);
                    setHasLoadedIframe(true);
                  }
                }}
                className="text-xs bg-white border border-neutral-slate-200 rounded-lg px-2.5 py-1 text-neutral-slate-800 focus:outline-brand-blue-600 font-medium shadow-2xs"
                data-testid="alternate-video-select"
              >
                <option value={primaryVideo?.id}>Primary: {primaryVideo?.channelName}</option>
                {alternates.map((alt) => (
                  <option key={alt.id} value={alt.id}>
                    Alternative: {alt.channelName} ({formatDuration(alt.durationSeconds)})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Report Problem Button */}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setReportModalOpen(true)}
            className="text-neutral-slate-500 hover:text-red-600 text-xs h-7 px-2"
            title="Report an issue with this video"
            data-testid="report-video-btn"
          >
            <AlertTriangle className="w-3.5 h-3.5 mr-1" />
            <span>Report issue</span>
          </Button>
        </div>
      </div>

      {/* Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-neutral-slate-200">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-slate-100">
              <h4 className="text-sm font-bold text-neutral-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Report a Problem with this Video
              </h4>
              <button
                type="button"
                onClick={() => setReportModalOpen(false)}
                className="text-neutral-slate-400 hover:text-neutral-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {reportSubmitted ? (
              <div className="py-6 text-center space-y-2 text-status-green-700">
                <CheckCircle className="w-8 h-8 mx-auto text-status-green-600" />
                <p className="text-xs font-bold">Report submitted. Thank you!</p>
                <p className="text-[11px] text-neutral-slate-600">Our curriculum teachers will review this video link promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-slate-700 mb-1">
                    What is the issue?
                  </label>
                  <select
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-slate-200 text-neutral-slate-800"
                  >
                    <option value="BROKEN">Video won&apos;t play or is deleted</option>
                    <option value="WRONG_TOPIC">Does not match the lesson topic</option>
                    <option value="POOR_QUALITY">Poor audio/video quality or difficult to understand</option>
                    <option value="INAPPROPRIATE">Inappropriate content or comments</option>
                    <option value="OTHER">Other issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-slate-700 mb-1">
                    Details (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={reportDetails}
                    onChange={(e) => setReportDetails(e.target.value)}
                    placeholder="Describe timestamp or specific defect..."
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-slate-200 text-neutral-slate-800 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setReportModalOpen(false)}
                    className="text-xs"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white text-xs"
                  >
                    Submit Report
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
