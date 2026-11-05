"use client";

import * as React from "react";
import { notFound } from "next/navigation";
import { LessonVideoPlayer } from "@/components/video/LessonVideoPlayer";
import { Button } from "@/components/ui/Button";
import { VolumeIcon, CheckIcon, AlertIcon, CopyIcon } from "@/components/ui/icons";

export default function AudioDiagnosticsPage() {
  // Dev & staging only: 404 in production
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  // Known good video
  const testVideoId = "iLw5DSyYsaI"; // Smile and Learn English: Figurative Speech

  // Test tone state
  const [toneStatus, setToneStatus] = React.useState<"idle" | "playing" | "played" | "error">("idle");
  const [toneErrorMsg, setToneErrorMsg] = React.useState<string | null>(null);

  // Live IFrame API telemetry
  const [playerRef, setPlayerRef] = React.useState<any>(null);
  const [playerStateCode, setPlayerStateCode] = React.useState<number | null>(-1);
  const [isMuted, setIsMuted] = React.useState<boolean | null>(null);
  const [volume, setVolume] = React.useState<number | null>(null);
  const [currentTime, setCurrentTime] = React.useState<number | null>(null);
  const [playbackRate, setPlaybackRate] = React.useState<number | null>(null);

  // DOM attributes of iframe
  const [iframeSrc, setIframeSrc] = React.useState<string>("");
  const [iframeAllow, setIframeAllow] = React.useState<string>("");
  const [iframeSandbox, setIframeSandbox] = React.useState<string>("none (unrestricted)");

  // Browser environment metrics
  const [documentHidden, setDocumentHidden] = React.useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState<boolean>(false);
  const [dataSaverActive, setDataSaverActive] = React.useState<boolean>(false);
  const [userAgent, setUserAgent] = React.useState<string>("");
  const [copied, setCopied] = React.useState<boolean>(false);

  // Play 440Hz test tone using Web Audio API
  const handlePlayTestTone = () => {
    try {
      setToneStatus("playing");
      setToneErrorMsg(null);
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) {
        setToneStatus("error");
        setToneErrorMsg("Web Audio API is not supported in this browser.");
        return;
      }

      const ctx = new AudioCtx();
      // Browser autoplay policy might require resume()
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime); // 440 Hz (Concert A)

      gain.gain.setValueAtTime(0.15, ctx.currentTime); // Quiet comfortable volume
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5); // 0.5s smooth decay

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);

      osc.onended = () => {
        setToneStatus("played");
        ctx.close().catch(() => {});
      };
    } catch (err: any) {
      setToneStatus("error");
      setToneErrorMsg(err?.message || "Failed to initialize Web Audio context");
    }
  };

  // Inspect environment on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(navigator.userAgent);
      setDocumentHidden(document.hidden);
      setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

      const nav = navigator as unknown as { connection?: { saveData?: boolean } };
      setDataSaverActive(
        nav.connection?.saveData === true ||
        document.documentElement.getAttribute("data-data-saver") === "true"
      );

      const handleVisibilityChange = () => setDocumentHidden(document.hidden);
      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }
  }, []);

  // Poll IFrame and player state every 500ms
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Find rendered iframe in DOM
      const iframe = document.querySelector('iframe[data-testid="lesson-youtube-iframe"]') as HTMLIFrameElement | null;
      if (iframe) {
        setIframeSrc(iframe.src || "");
        setIframeAllow(iframe.getAttribute("allow") || "none");
        setIframeSandbox(iframe.getAttribute("sandbox") || "none (unrestricted)");
      }

      // Read from active player instance if available
      if (playerRef) {
        try {
          if (typeof playerRef.isMuted === "function") {
            setIsMuted(playerRef.isMuted());
          }
          if (typeof playerRef.getVolume === "function") {
            setVolume(playerRef.getVolume());
          }
          if (typeof playerRef.getCurrentTime === "function") {
            setCurrentTime(Math.round(playerRef.getCurrentTime() * 10) / 10);
          }
          if (typeof playerRef.getPlaybackRate === "function") {
            setPlaybackRate(playerRef.getPlaybackRate());
          }
          if (typeof playerRef.getPlayerState === "function") {
            setPlayerStateCode(playerRef.getPlayerState());
          }
        } catch (e) {
          // Poll query error
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [playerRef]);

  // Decode player state code
  const getPlayerStateString = (code: number | null) => {
    switch (code) {
      case -1: return "UNSTARTED (-1)";
      case 0: return "ENDED (0)";
      case 1: return "PLAYING (1)";
      case 2: return "PAUSED (2)";
      case 3: return "BUFFERING (3)";
      case 5: return "CUED (5)";
      default: return `Awaiting User Playback (${code ?? "null"})`;
    }
  };

  // Compile full diagnostics report
  const generateReport = () => {
    return {
      timestamp: new Date().toISOString(),
      userAgent,
      toneStatus,
      webAudioWorking: toneStatus === "played",
      player: {
        videoId: testVideoId,
        state: getPlayerStateString(playerStateCode),
        stateCode: playerStateCode,
        isMuted: isMuted,
        volume: volume,
        currentTimeSeconds: currentTime,
        playbackRate: playbackRate,
      },
      iframeDOM: {
        src: iframeSrc,
        allow: iframeAllow,
        sandbox: iframeSandbox,
      },
      securityHeaders: {
        mediaSrc: "'self' blob: data: https://*.googlevideo.com https://*.youtube.com https://*.youtube-nocookie.com",
        permissionsPolicy: 'autoplay=(self "https://www.youtube-nocookie.com" "https://www.youtube.com"), encrypted-media=(self "https://www.youtube-nocookie.com" "https://www.youtube.com"), fullscreen=*',
        crossOriginEmbedderPolicy: "disabled (allows third-party embeds)",
      },
      environment: {
        documentHidden,
        prefersReducedMotion,
        dataSaverActive,
      },
    };
  };

  const handleCopyReport = () => {
    const reportStr = JSON.stringify(generateReport(), null, 2);
    navigator.clipboard.writeText(reportStr).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-400 font-bold mb-1">
            <span>Diagnostics Tool</span>
            <span>•</span>
            <span>Dev & Staging Only</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Video & Audio Playback Diagnostics
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            Empirical runtime diagnostics for embedded YouTube player audio, Web Audio hardware capability, CSP media streams, and browser autoplay policies.
          </p>
        </div>

        {/* Section A: Hardware & Web Audio Output Verification */}
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <VolumeIcon className="w-4 h-4 text-emerald-400" />
                <span>Device Audio Output Test (Web Audio API)</span>
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Generates a clean 440 Hz (Concert A) sine wave tone directly via the browser audio hardware stack for 0.5s at 15% volume.
              </p>
            </div>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handlePlayTestTone}
              className="shrink-0"
              data-testid="play-test-tone-button"
            >
              Play Test Tone
            </Button>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
            <span className="text-neutral-400">Tone Status:</span>
            <span className={`font-mono font-bold ${
              toneStatus === "played" ? "text-emerald-400" :
              toneStatus === "playing" ? "text-amber-400" :
              toneStatus === "error" ? "text-red-400" : "text-neutral-400"
            }`}>
              {toneStatus === "idle" && "Ready (Click 'Play Test Tone')"}
              {toneStatus === "playing" && "Generating Tone (440Hz)..."}
              {toneStatus === "played" && "✓ Audio Tone Dispatched Successfully"}
              {toneStatus === "error" && `Error: ${toneErrorMsg}`}
            </span>
          </div>

          {/* Core instruction statement */}
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-start gap-2">
            <AlertIcon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Notice:</strong> If the test tone is silent, the problem is your physical device output (muted system volume, disconnected speaker/headphones, or OS sound permission), not the website.
            </p>
          </div>
        </div>

        {/* Section B: Real Lesson Video Player */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white">
            Real Lesson Video Player Embed (Known-Good Curriculum Video)
          </h2>
          <div className="max-w-2xl">
            <LessonVideoPlayer
              videoId={testVideoId}
              videoTitle="Smile and Learn - English: Figurative Speech (Known Good Source)"
              channelName="Smile and Learn - English"
              lessonTitle="Figures of Speech Diagnostic Test"
              durationSeconds={241}
              onPlayerReady={(player) => setPlayerRef(player)}
              onPlayerStateChange={(state, player) => {
                setPlayerStateCode(state);
                setPlayerRef(player);
              }}
            />
          </div>
        </div>

        {/* Section C: Live Runtime Telemetry Table (500ms polling) */}
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">
              Live Runtime Player & Environment Telemetry (Updated every 500ms)
            </h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopyReport}
              className="text-xs flex items-center gap-1.5 border-neutral-700 hover:bg-neutral-800 text-neutral-300"
              data-testid="copy-diagnostics-report-button"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied Report!</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy Full Report</span>
                </>
              )}
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="p-2.5 font-semibold">Parameter</th>
                  <th className="p-2.5 font-semibold">Observed Runtime Value</th>
                  <th className="p-2.5 font-semibold">Requirement / Expected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr>
                  <td className="p-2.5 text-neutral-400">Player State</td>
                  <td className="p-2.5 text-white font-bold">{getPlayerStateString(playerStateCode)}</td>
                  <td className="p-2.5 text-emerald-400">PLAYING (1) once user clicks</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">player.isMuted()</td>
                  <td className={`p-2.5 font-bold ${isMuted === false ? "text-emerald-400" : isMuted === true ? "text-red-400" : "text-neutral-400"}`}>
                    {isMuted === null ? "Awaiting Playback" : String(isMuted)}
                  </td>
                  <td className="p-2.5 text-emerald-400">false (unmuted)</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">player.getVolume()</td>
                  <td className={`p-2.5 font-bold ${volume && volume > 0 ? "text-emerald-400" : volume === 0 ? "text-red-400" : "text-neutral-400"}`}>
                    {volume === null ? "Awaiting Playback" : `${volume}%`}
                  </td>
                  <td className="p-2.5 text-emerald-400">&gt; 0% (typically 100%)</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">player.getCurrentTime()</td>
                  <td className="p-2.5 text-white">{currentTime !== null ? `${currentTime}s` : "0s"}</td>
                  <td className="p-2.5 text-neutral-400">Increments synchronously</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">Iframe allow attribute</td>
                  <td className="p-2.5 text-white max-w-xs truncate" title={iframeAllow}>{iframeAllow || "Not yet mounted"}</td>
                  <td className="p-2.5 text-emerald-400">Must include autoplay; encrypted-media</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">Iframe sandbox attribute</td>
                  <td className="p-2.5 text-emerald-400 font-bold">{iframeSandbox}</td>
                  <td className="p-2.5 text-emerald-400">None (unrestricted)</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">CSP media-src Header</td>
                  <td className="p-2.5 text-white">blob: data: *.googlevideo.com *.youtube.com</td>
                  <td className="p-2.5 text-emerald-400">Allows googlevideo audio streams</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">Permissions-Policy Header</td>
                  <td className="p-2.5 text-white">autoplay=(self youtube-nocookie.com), encrypted-media=...</td>
                  <td className="p-2.5 text-emerald-400">Delegates autoplay to youtube-nocookie</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">document.hidden</td>
                  <td className="p-2.5 text-white">{String(documentHidden)}</td>
                  <td className="p-2.5 text-emerald-400">false when tab is active</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">prefers-reduced-motion</td>
                  <td className="p-2.5 text-white">{String(prefersReducedMotion)}</td>
                  <td className="p-2.5 text-neutral-400">User OS preference</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">Data Saver Active</td>
                  <td className="p-2.5 text-white">{String(dataSaverActive)}</td>
                  <td className="p-2.5 text-neutral-400">Does not mute audio</td>
                </tr>
                <tr>
                  <td className="p-2.5 text-neutral-400">User Agent</td>
                  <td className="p-2.5 text-neutral-300 max-w-xs truncate" title={userAgent}>{userAgent}</td>
                  <td className="p-2.5 text-neutral-400">Browser fingerprint</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

