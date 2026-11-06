"use client";

import * as React from "react";
import Image from "next/image";
import { PlayIcon, PauseIcon, LoaderIcon, AlertIcon, CheckIcon, ExternalLinkIcon, VolumeIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Official YouTube IFrame API global type
declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement | string,
        config: {
          videoId?: string;
          events?: {
            onReady?: (event: { target: any }) => void;
            onStateChange?: (event: { target: any; data: number }) => void;
            onError?: (event: { target: any; data: number }) => void;
          };
          playerVars?: Record<string, any>;
        }
      ) => any;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

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

export interface LessonVideoPlayerProps {
  primaryVideo?: LessonVideoData | null;
  alternates?: LessonVideoData[];
  lessonTitle: string;
  courseSlug?: string;
  lessonSlug?: string;
  isWaecAligned?: boolean;
  initialPositionSeconds?: number;
  onProgressUpdate?: (positionSeconds: number, percentWatched: number) => void;
  onLessonAutoCompleted?: () => void;
  onRequestTutor?: () => void;
  slug?: string;
  lessonId?: string;
  // Direct fallback props for syllabus/previews
  videoId?: string;
  videoTitle?: string;
  channelName?: string;
  durationSeconds?: number;
  thumbnailUrl?: string;
  autoPlayOnClick?: boolean;
  onPlayerReady?: (player: any) => void;
  onPlayerStateChange?: (state: number, player: any) => void;
}

export function LessonVideoPlayer({
  primaryVideo,
  alternates = [],
  lessonTitle,
  courseSlug = "academy",
  lessonSlug = "lesson",
  isWaecAligned = false,
  initialPositionSeconds = 0,
  onProgressUpdate,
  onLessonAutoCompleted,
  onRequestTutor,
  slug,
  lessonId,
  videoId: directVideoId,
  videoTitle: directVideoTitle,
  channelName: directChannelName,
  durationSeconds: directDurationSeconds,
  thumbnailUrl: directThumbnailUrl,
  autoPlayOnClick = true,
  onPlayerReady,
  onPlayerStateChange,
}: LessonVideoPlayerProps) {
  // Normalize active video metadata from primaryVideo or direct props
  const defaultVideo: LessonVideoData | null = primaryVideo || (directVideoId ? {
    id: directVideoId,
    lessonId: lessonId || "standalone",
    provider: "YOUTUBE",
    providerVideoId: directVideoId,
    title: directVideoTitle || lessonTitle,
    channelId: "verified",
    channelName: directChannelName || "Verified Educational Partner",
    durationSeconds: directDurationSeconds || 0,
    thumbnailUrl: directThumbnailUrl || `https://i.ytimg.com/vi/${directVideoId}/hqdefault.jpg`,
    isPrimary: true,
  } : null);

  const [activeVideo, setActiveVideo] = React.useState<LessonVideoData | null>(defaultVideo);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [soundSafeguardTriggered, setSoundSafeguardTriggered] = React.useState(false);
  const [playbackError, setPlaybackError] = React.useState(false);
  const [soundFeedback, setSoundFeedback] = React.useState<string | null>(null);

  // Problem reporting modal state
  const [reportModalOpen, setReportModalOpen] = React.useState(false);
  const [reportReason, setReportReason] = React.useState<string>("AUDIO_MISSING");
  const [reportDetails, setReportDetails] = React.useState("");
  const [reportSubmitted, setReportSubmitted] = React.useState(false);

  // References
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const playerInstanceRef = React.useRef<any>(null);
  const safeguardTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Unique DOM ID for this iframe instance so YouTube API can bind to it
  const iframeDomId = React.useMemo(() => {
    const vid = activeVideo?.providerVideoId || directVideoId || "player";
    return `yt-iframe-${vid.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  }, [activeVideo?.providerVideoId, directVideoId]);

  // Update active video if primaryVideo or directVideoId changes
  React.useEffect(() => {
    if (primaryVideo) {
      setActiveVideo(primaryVideo);
    } else if (directVideoId) {
      setActiveVideo({
        id: directVideoId,
        lessonId: lessonId || "standalone",
        provider: "YOUTUBE",
        providerVideoId: directVideoId,
        title: directVideoTitle || lessonTitle,
        channelId: "verified",
        channelName: directChannelName || "Verified Educational Partner",
        durationSeconds: directDurationSeconds || 0,
        thumbnailUrl: directThumbnailUrl || `https://i.ytimg.com/vi/${directVideoId}/hqdefault.jpg`,
        isPrimary: true,
      });
    }
  }, [primaryVideo, directVideoId, directVideoTitle, directChannelName, directDurationSeconds, directThumbnailUrl, lessonId, lessonTitle]);

  // Load YouTube IFrame API script once if not already present
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.YT) {
      const existingScript = document.getElementById("youtube-iframe-api-script");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }
  }, []);

  // Format seconds to MM:SS
  const formatDuration = (sec: number) => {
    if (!sec || sec <= 0) return "";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Synchronous play trigger initiated strictly by user click gesture
  const handleStartPlayback = () => {
    // Unlock browser AudioContext under active user click
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        if (ctx.state === "suspended") {
          ctx.resume().catch(() => {});
        }
      }
    } catch {}

    setIsPlaying(true);
    setPlaybackError(false);
  };

  // Native message listener listening to postMessage events from YouTube
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleWindowMessage = (event: MessageEvent) => {
      if (!event.origin.includes("youtube.com") && !event.origin.includes("youtube-nocookie.com")) {
        return;
      }
      try {
        let payload: any = event.data;
        if (typeof payload === "string") {
          payload = JSON.parse(payload);
        }

        // When YouTube player announces ready or state delivery, attempt unMute handshake
        if (payload?.event === "onReady" || payload?.event === "initialDelivery") {
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "unMute", args: [] }),
              "*"
            );
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
              "*"
            );
          }
        }

        // Monitor volume and mute telemetry from YouTube
        if ((payload?.event === "infoDelivery" || payload?.event === "initialDelivery") && payload?.info) {
          if (payload.info.muted === true || payload.info.volume === 0) {
            setSoundSafeguardTriggered(true);
          } else if (payload.info.muted === false && payload.info.volume > 0) {
            setSoundSafeguardTriggered(false);
          }
        }

        if (payload?.info?.playerState === 1 || payload?.data === 1) {
          // Playing: trigger immediate unMute command
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "unMute", args: [] }),
              "*"
            );
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
              "*"
            );
          }
        }
      } catch {}
    };

    window.addEventListener("message", handleWindowMessage);
    return () => window.removeEventListener("message", handleWindowMessage);
  }, []);

  // Cleanup timers on unmount
  React.useEffect(() => {
    return () => {
      if (safeguardTimeoutRef.current) clearTimeout(safeguardTimeoutRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      try {
        if (playerInstanceRef.current?.destroy) {
          playerInstanceRef.current.destroy();
        }
      } catch (err) {}
    };
  }, []);

  // Bind YouTube Player when iframe mounts and isPlaying is true
  const handleIframeMount = React.useCallback((iframeElement: HTMLIFrameElement | null) => {
    if (!iframeElement || !activeVideo) return;
    iframeRef.current = iframeElement;

    const setupPlayer = () => {
      if (!window.YT?.Player) {
        setTimeout(setupPlayer, 100);
        return;
      }

      try {
        const player = new window.YT.Player(iframeElement, {
          events: {
            onReady: (event) => {
              playerInstanceRef.current = event.target;
              onPlayerReady?.(event.target);

              // Proactively unMute on ready
              try {
                event.target.unMute();
                event.target.setVolume(100);
              } catch (e) {}
            },
            onStateChange: (event) => {
              const state = event.data;
              onPlayerStateChange?.(state, event.target);

              // 1 = PLAYING
              if (state === 1) {
                // Try immediate unMute on playback start
                try {
                  event.target.unMute();
                  event.target.setVolume(100);
                } catch (e) {}

                // SOUND SAFEGUARD: 1 second after playback starts, verify sound is active
                if (safeguardTimeoutRef.current) clearTimeout(safeguardTimeoutRef.current);
                safeguardTimeoutRef.current = setTimeout(() => {
                  try {
                    const isMuted = event.target.isMuted?.() ?? false;
                    const volume = event.target.getVolume?.() ?? 100;

                    if (isMuted || volume === 0) {
                      setSoundSafeguardTriggered(true);
                      fetch("/api/analytics/video-sound-state", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          videoId: activeVideo.providerVideoId,
                          courseSlug,
                          lessonSlug,
                          muted: isMuted,
                          volume,
                          origin: typeof window !== "undefined" ? window.location.origin : "",
                        }),
                      }).catch(() => {});
                    } else {
                      setSoundSafeguardTriggered(false);
                    }
                  } catch (e) {}
                }, 1000);

                // Progress tracking polling (1 second interval while playing)
                if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
                progressIntervalRef.current = setInterval(() => {
                  try {
                    const curr = event.target.getCurrentTime?.() || 0;
                    const dur = event.target.getDuration?.() || activeVideo.durationSeconds || 1;
                    const pct = Math.min(100, Math.round((curr / dur) * 100));

                    if (onProgressUpdate) {
                      onProgressUpdate(Math.round(curr), pct);
                    }
                    if (pct >= 90 && onLessonAutoCompleted) {
                      onLessonAutoCompleted();
                    }
                  } catch (e) {}
                }, 1000);
              } else {
                if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
                if (state === 0 && onLessonAutoCompleted) {
                  onLessonAutoCompleted();
                }
              }
            },
            onError: (err) => {
              console.error("[LessonVideoPlayer] YouTube error:", err);
              setPlaybackError(true);
            },
          },
        });
      } catch (err) {
        console.warn("[LessonVideoPlayer] Error instantiating YT.Player:", err);
      }
    };

    setupPlayer();
  }, [activeVideo, courseSlug, lessonSlug, onLessonAutoCompleted, onPlayerReady, onPlayerStateChange, onProgressUpdate]);

  // Turn on sound action triggered by user click on safeguard banner or quick button
  const handleTurnOnSound = () => {
    try {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.unMute();
        playerInstanceRef.current.setVolume(100);
      }
    } catch (e) {}

    // Fallback: direct postMessage to iframe window (both array and string parameter forms)
    try {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "unMute", args: [] }),
        "*"
      );
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "unMute", args: "" }),
        "*"
      );
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
        "*"
      );
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: 100 }),
        "*"
      );
    } catch (e) {}

    setSoundSafeguardTriggered(false);
    setSoundFeedback("Audio active at 100% volume");
    setTimeout(() => setSoundFeedback(null), 4000);

    // Send anonymous telemetry indicating user unmuted sound via safeguard
    if (activeVideo) {
      fetch("/api/analytics/video-sound-state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoId: activeVideo.providerVideoId,
          courseSlug,
          lessonSlug,
          unmutedBySafeguard: true,
          origin: typeof window !== "undefined" ? window.location.origin : "",
        }),
      }).catch(() => {});
    }
  };

  // Switch to alternate video
  const handleSelectAlternate = (alt: LessonVideoData) => {
    if (safeguardTimeoutRef.current) clearTimeout(safeguardTimeoutRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    try {
      if (playerInstanceRef.current?.destroy) {
        playerInstanceRef.current.destroy();
      }
    } catch (e) {}
    setActiveVideo(alt);
    setSoundSafeguardTriggered(false);
    setPlaybackError(false);
    setIsPlaying(true);
  };

  // Submit issue report
  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/analytics/video-sound-state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoId: activeVideo?.providerVideoId,
          courseSlug,
          lessonSlug,
          reportReason,
          reportDetails,
          userReport: true,
        }),
      }).catch(() => {});
      setReportSubmitted(true);
      setTimeout(() => {
        setReportSubmitted(false);
        setReportModalOpen(false);
      }, 2000);
    } catch (err) {
      setReportSubmitted(true);
    }
  };

  if (!activeVideo) {
    return (
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 text-center space-y-3">
        <AlertIcon className="w-8 h-8 text-amber-500 mx-auto" />
        <h4 className="font-semibold text-neutral-900 dark:text-white">Lesson Video Under Review</h4>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          The verified video lesson for &ldquo;{lessonTitle}&rdquo; is being reviewed by our subject lead to ensure it meets WAEC/BECE syllabus standards.
        </p>
        {onRequestTutor && (
          <Button variant="outline" size="sm" onClick={onRequestTutor}>
            Request a Tutor for this Topic
          </Button>
        )}
      </div>
    );
  }

  // Construct official YouTube privacy-enhanced embed URL
  // STRICT REQUIREMENT: No muting parameter or zero-volume override
  const startSec = activeVideo.startSeconds || (initialPositionSeconds > 0 ? initialPositionSeconds : 0);
  const currentOrigin = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000";

  const embedParams = new URLSearchParams({
    autoplay: "1",
    playsinline: "1",
    enablejsapi: "1",
    origin: currentOrigin,
    rel: "0",
    controls: "1",
    fs: "1",
    cc_load_policy: "1",
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
    <div className="space-y-3" data-testid="lesson-video-player-container" ref={containerRef}>
      {/* 16:9 Video Player Box */}
      <div className="rounded-2xl bg-neutral-950 text-white overflow-hidden shadow-md border border-neutral-800 relative">
        <div className="relative aspect-video w-full bg-neutral-900">
          {!isPlaying ? (
            /* CLICK-TO-PLAY FACADE (Zero 3rd-party requests until clicked; preserves unmuted user gesture) */
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
              <div className="flex items-center justify-between gap-2 z-10 pointer-events-none">
                <div className="flex items-center gap-2">
                  {activeVideo.durationSeconds > 0 && (
                    <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white border border-white/20">
                      {formatDuration(activeVideo.durationSeconds)}
                    </span>
                  )}
                  <span className="text-xs text-neutral-200 font-medium truncate max-w-xs sm:max-w-md drop-shadow-sm">
                    {activeVideo.title}
                  </span>
                </div>
                {isWaecAligned && (
                  <Badge className="bg-emerald-600/90 text-white border-none text-[10px] px-2 py-0.5 shadow-xs">
                    <span>WAEC Aligned</span>
                  </Badge>
                )}
              </div>

              {/* Centered Play Button */}
              <div className="flex flex-col items-center justify-center z-10 space-y-2 pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-blue-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <PlayIcon className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white fill-white" />
                </div>
                <span className="text-xs font-semibold text-neutral-200 tracking-wide bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                  Click to Play Video Lesson
                </span>
              </div>

              {/* Bottom Attribution Bar */}
              <div className="flex items-center justify-between text-xs text-neutral-300 z-10 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg pointer-events-none">
                <span className="text-[11px] font-medium text-neutral-300">
                  Channel: <strong className="text-white">{activeVideo.channelName}</strong>
                </span>
                <span className="text-[10px] text-neutral-400">
                  Privacy-Enhanced Embed
                </span>
              </div>
            </div>
          ) : (
            /* ACTIVE YOUTUBE-NOCOOKIE IFRAME */
            /* ZERO OVERLAYS: Absolutely nothing sits on top of this iframe so all pointer events reach YouTube controls */
            <iframe
              id={iframeDomId}
              ref={handleIframeMount}
              src={embedSrc}
              title={activeVideo.title}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen; accelerometer; gyroscope"
              allowFullScreen
              data-testid="lesson-youtube-iframe"
              onError={() => setPlaybackError(true)}
            />
          )}
        </div>
      </div>

      {/* SOUND SAFEGUARD BANNER (Directly below player; never overlapping iframe) */}
      {soundSafeguardTriggered && (
        <div
          className="flex items-center justify-between p-3.5 rounded-xl bg-amber-500/15 border-2 border-amber-500/40 text-amber-950 dark:text-amber-100 text-xs transition-all animate-fadeIn"
          data-testid="sound-safeguard-banner"
          role="alert"
        >
          <div className="flex items-center gap-2.5">
            <VolumeIcon className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-sm block">Sound is off.</span>
              <span className="text-[11px] text-amber-800 dark:text-amber-300">Browser started playback muted. Click &ldquo;Turn on sound&rdquo; to hear the lesson audio.</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleTurnOnSound}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-xs shrink-0 transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5"
            data-testid="turn-on-sound-button"
          >
            <VolumeIcon className="w-4 h-4 text-neutral-950" />
            <span>Turn on sound</span>
          </button>
        </div>
      )}

      {/* PLAYBACK ERROR BANNER */}
      {playbackError && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-900 dark:text-red-300 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertIcon className="w-4 h-4 text-red-500 shrink-0" />
            <span>Playback issue detected. You can watch this lesson directly on YouTube or choose an alternate explanation below.</span>
          </div>
          <a
            href={watchOnYouTubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs shrink-0 inline-flex items-center gap-1"
          >
            <span>Open in YouTube</span>
            <ExternalLinkIcon size="sm" />
          </a>
        </div>
      )}

      {/* PERMANENT AUDIO HINT & QUICK ACTIONS ROW */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5">
            <VolumeIcon className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span>
              No sound? Check the volume in the video bar and on your device.
            </span>
          </div>

          {/* Dedicated quick Unmute action button */}
          <button
            type="button"
            onClick={handleTurnOnSound}
            className="px-2.5 py-1 rounded-md bg-brand-blue-50 dark:bg-brand-blue-950/40 text-brand-blue-700 dark:text-brand-blue-300 hover:bg-brand-blue-100 font-semibold text-xs border border-brand-blue-200 dark:border-brand-blue-800 transition-colors inline-flex items-center gap-1 shadow-2xs"
            data-testid="unmute-quick-btn"
            title="Force audio unMute and restore 100% volume"
          >
            <VolumeIcon className="w-3 h-3 text-brand-blue-600 dark:text-brand-blue-400" />
            <span>Unmute / Audio 100%</span>
          </button>

          {soundFeedback && (
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center gap-1">
              <CheckIcon className="w-3.5 h-3.5" />
              <span>{soundFeedback}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={watchOnYouTubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue-600 dark:text-brand-blue-400 hover:underline font-medium inline-flex items-center gap-1"
            data-testid="watch-on-youtube-link"
          >
            <span>Watch on YouTube</span>
            <ExternalLinkIcon size="sm" />
          </a>

          <span className="text-neutral-300 dark:text-neutral-700">•</span>

          <button
            type="button"
            onClick={() => setReportModalOpen(true)}
            className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            Report issue
          </button>
        </div>
      </div>

      {/* ALTERNATE EXPLANATIONS */}
      {alternates && alternates.length > 0 && (
        <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
          <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            Alternate Explanations for this Topic ({alternates.length})
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {alternates.map((alt) => {
              const isSelected = activeVideo.providerVideoId === alt.providerVideoId;
              return (
                <button
                  key={alt.id}
                  type="button"
                  onClick={() => handleSelectAlternate(alt)}
                  className={`flex items-start gap-2.5 p-2 rounded-xl text-left border transition-all ${
                    isSelected
                      ? "border-brand-blue-500 bg-brand-blue-50/50 dark:bg-brand-blue-950/20 shadow-xs"
                      : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900"
                  }`}
                >
                  <div className="relative w-16 h-10 rounded-md overflow-hidden bg-neutral-800 shrink-0 flex items-center justify-center">
                    {alt.thumbnailUrl ? (
                      <Image
                        src={alt.thumbnailUrl}
                        alt={alt.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                        loading="lazy"
                        unoptimized
                      />
                    ) : (
                      <PlayIcon className="w-4 h-4 text-neutral-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-neutral-900 dark:text-white truncate">
                      {alt.title}
                    </p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                      {alt.channelName} • {formatDuration(alt.durationSeconds)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* REPORT MODAL */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                Report Issue with Lesson Video
              </h3>
              <button
                type="button"
                onClick={() => setReportModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                ✕
              </button>
            </div>

            {reportSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you. Your feedback has been recorded for review.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitReport} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Issue Category
                  </label>
                  <select
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="w-full text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-2 text-neutral-900 dark:text-white"
                  >
                    <option value="AUDIO_MISSING">Audio is completely missing or silent</option>
                    <option value="BROKEN_EMBED">Video will not play or displays an error</option>
                    <option value="INCORRECT_TOPIC">Video content does not match lesson topic</option>
                    <option value="POOR_QUALITY">Video or audio quality is too low</option>
                    <option value="OTHER">Other issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Details (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={reportDetails}
                    onChange={(e) => setReportDetails(e.target.value)}
                    placeholder="Describe what happened or what device you are using..."
                    className="w-full text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-2 text-neutral-900 dark:text-white"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setReportModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
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
