"use client";

import * as React from "react";
import { BookOpen, Sparkles, GraduationCap, Music, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HubOrbitProps {
  /**
   * Total duration for one full 360-degree orbit revolution in seconds.
   * Enforced minimum is 30 seconds for motion safety and comfort. Default: 48s.
   */
  duration?: number;
  /**
   * Orbit radius from the center in pixels. Default: 130px.
   */
  radius?: number;
  /**
   * Additional container CSS classes.
   */
  className?: string;
}

interface ServiceCardConfig {
  id: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeBg: string;
  cardBorder: string;
  // Diagonal position in clockwise order at t=0:
  // Top-Left (Academy) -> Top-Right (AI) -> Bottom-Right (Music) -> Bottom-Left (Tutors)
  pos: "top-left" | "top-right" | "bottom-right" | "bottom-left";
  gradId: string;
  xSign: -1 | 1;
  ySign: -1 | 1;
}

const ORBIT_SERVICES: ServiceCardConfig[] = [
  {
    id: "academy",
    name: "Academy",
    desc: "Lessons and quizzes",
    icon: BookOpen,
    color: "#3B82F6",
    badgeBg: "bg-blue-500/20 text-sky-300 border-blue-400/30",
    cardBorder: "border-blue-400/25",
    pos: "top-left",
    gradId: "conn-blue",
    xSign: -1,
    ySign: -1,
  },
  {
    id: "ai",
    name: "AI",
    desc: "Instant study help",
    icon: Sparkles,
    color: "#8B5CF6",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    cardBorder: "border-purple-400/25",
    pos: "top-right",
    gradId: "conn-purple",
    xSign: 1,
    ySign: -1,
  },
  {
    id: "music",
    name: "Music",
    desc: "Theory and instruments",
    icon: Music,
    color: "#F59E0B",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    cardBorder: "border-amber-400/25",
    pos: "bottom-right",
    gradId: "conn-amber",
    xSign: 1,
    ySign: 1,
  },
  {
    id: "tutors",
    name: "Tutors",
    desc: "Matched to you",
    icon: GraduationCap,
    color: "#14B8A6",
    badgeBg: "bg-teal-500/20 text-teal-300 border-teal-400/30",
    cardBorder: "border-teal-400/25",
    pos: "bottom-left",
    gradId: "conn-teal",
    xSign: -1,
    ySign: 1,
  },
];

const LOCAL_STORAGE_PAUSE_KEY = "trainbow-hero-orbit-paused";

export function HubOrbit({ duration = 48, radius = 130, className }: HubOrbitProps) {
  // Enforce duration safeguard: minimum 30 seconds
  const safeDuration = Math.max(30, duration);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [userPaused, setUserPaused] = React.useState<boolean>(false);
  const [isIntersecting, setIsIntersecting] = React.useState<boolean>(true);
  const [isTabVisible, setIsTabVisible] = React.useState<boolean>(true);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState<boolean>(false);

  // Read stored preference safely on mount
  React.useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_PAUSE_KEY);
      if (stored === "true") {
        setUserPaused(true);
      }
    } catch {
      // localStorage may fail in private mode or security sandbox
    }
  }, []);

  // IntersectionObserver: Pause when off-screen to save battery
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Page Visibility API: Pause when browser tab is hidden
  React.useEffect(() => {
    if (typeof document === "undefined") return;

    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Toggle user play/pause
  const togglePlayPause = React.useCallback(() => {
    setUserPaused((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(LOCAL_STORAGE_PAUSE_KEY, String(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  // Compute effective animation state
  const isAnimationPaused = userPaused || !isIntersecting || !isTabVisible || isHovered || isFocused;

  // Geometry dimensions:
  // Container size: 2 * (radius + cardW/2) + 16px padding = 2 * (130 + 72) + 16 = 420px
  const desktopBoxSize = 420;
  const cx = desktopBoxSize / 2;
  const cy = desktopBoxSize / 2;

  // Diagonal offset factor: 1 / sqrt(2) ≈ 0.7071
  const diagOffset = Math.round(radius * 0.7071);

  return (
    <div
      ref={containerRef}
      data-testid="hub-orbit-container"
      className={cn(
        "relative w-full max-w-[420px] lg:max-w-[430px] mx-auto select-none group/orbit animate-hub-entrance",
        className
      )}
      style={
        {
          "--orbit-duration": `${safeDuration}s`,
          "--orbit-radius": `${radius}px`,
          "--card-w": "144px",
          "--card-h": "46px",
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* 1. VISIBLE ACCESSIBLE PAUSE / PLAY BUTTON (Outside aria-hidden) */}
      <div className="absolute top-0 right-0 z-30">
        <button
          type="button"
          data-testid="hub-orbit-toggle"
          onClick={togglePlayPause}
          aria-label={userPaused ? "Play animation" : "Pause animation"}
          aria-pressed={userPaused}
          className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.18] text-slate-300 hover:text-white border border-white/15 backdrop-blur-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1226] shadow-sm active:scale-95 cursor-pointer"
          title={userPaused ? "Play animation" : "Pause animation"}
        >
          {userPaused ? (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          ) : (
            <Pause className="w-4 h-4 fill-current" />
          )}
        </button>
      </div>

      {/* 2. AMBIENT RADIAL GLOW (Decorative) */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 sm:-inset-6 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.4) 0%, rgba(124,58,237,0.25) 45%, rgba(15,118,110,0.15) 70%, transparent 80%)",
        }}
      />

      {/* 3. DESKTOP & TABLET ORBIT SYSTEM (>= 640px) */}
      <div
        aria-hidden="true"
        className="hidden sm:block relative w-[420px] h-[420px] mx-auto pointer-events-none"
      >
        {/* ROTATING ORBIT WRAPPER (Clockwise rotation) */}
        <div
          data-testid="hub-orbit-track"
          className="orbit-track absolute inset-0 w-full h-full animate-hub-orbit"
          style={{
            transformOrigin: "center center",
            willChange: "transform",
            animationPlayState: isAnimationPaused ? "paused" : "running",
          }}
        >
          {/* Rotating Dashed Spoke Lines (Beneath cards) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${desktopBoxSize} ${desktopBoxSize}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="conn-blue" x1={cx} y1={cy} x2={cx - diagOffset} y2={cy - diagOffset} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="conn-purple" x1={cx} y1={cy} x2={cx + diagOffset} y2={cy - diagOffset} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="conn-amber" x1={cx} y1={cy} x2={cx + diagOffset} y2={cy + diagOffset} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="conn-teal" x1={cx} y1={cy} x2={cx - diagOffset} y2={cy + diagOffset} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* 4 Connector Spoke Lines linking center to each card center */}
            {ORBIT_SERVICES.map((s) => {
              const targetX = cx + s.xSign * diagOffset;
              const targetY = cy + s.ySign * diagOffset;
              return (
                <line
                  key={s.id}
                  x1={cx}
                  y1={cy}
                  x2={targetX}
                  y2={targetY}
                  stroke={`url(#${s.gradId})`}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-hub-spoke-flow"
                  style={{
                    animationPlayState: isAnimationPaused ? "paused" : "running",
                  }}
                />
              );
            })}
          </svg>

          {/* 4 CARD ANCHORS (Counter-rotating to stay 100% upright) */}
          {ORBIT_SERVICES.map((s) => {
            const anchorLeft = cx + s.xSign * diagOffset;
            const anchorTop = cy + s.ySign * diagOffset;
            const Icon = s.icon;

            return (
              <div
                key={s.id}
                data-testid={`card-anchor-${s.id}`}
                className="absolute"
                style={{
                  left: `${anchorLeft}px`,
                  top: `${anchorTop}px`,
                }}
              >
                {/* Counter-Rotating Card Inner (Center translated to anchor, stays upright at all angles) */}
                <div
                  data-testid={`orbit-card-${s.id}`}
                  className={cn(
                    "orbit-card w-[144px] h-[46px] rounded-xl bg-white/[0.08] border px-2.5 py-1.5 backdrop-blur-md shadow-lg shadow-black/25 flex items-center gap-2 pointer-events-auto transition-shadow hover:shadow-sky-500/20 animate-hub-counter",
                    s.cardBorder
                  )}
                  style={{
                    transformOrigin: "center center",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    animationPlayState: isAnimationPaused ? "paused" : "running",
                  }}
                >
                  <div
                    className={cn(
                      "w-6 h-6 rounded-md flex items-center justify-center shrink-0 border",
                      s.badgeBg
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[14px] font-bold text-white font-heading leading-none truncate">
                      {s.name}
                    </span>
                    <span className="text-[12.5px] text-slate-200 leading-tight truncate">
                      {s.desc}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* STATIC CENTRAL CIRCULAR NODE ("One account" with breathing glow) */}
        <div
          data-testid="hub-center-node"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="w-[72px] h-[72px] rounded-full bg-[#0E1B38] border-2 border-white/20 flex flex-col items-center justify-center p-1.5 backdrop-blur-md shadow-xl animate-hub-center-pulse">
            <svg
              className="w-6 h-6 shrink-0 text-white"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="16" fill="#1E293B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              <path d="M 9 20 A 9 9 0 0 1 27 20" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 12 21 A 6 6 0 0 1 24 21" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="18" cy="22" r="2.5" fill="#34D399" />
            </svg>
            <span className="mt-0.5 text-[10.5px] font-bold text-white tracking-tight font-heading whitespace-nowrap">
              One account
            </span>
          </div>
        </div>
      </div>

      {/* 4. MOBILE FALLBACK (< 640px / 375px): Compact Static 2x2 Grid */}
      <div
        aria-hidden="true"
        className="block sm:hidden w-full space-y-3 pt-2"
      >
        {/* Center node badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md shadow-sm">
            <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-sky-300">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping opacity-75" />
            </div>
            <span className="text-xs font-bold text-white font-heading tracking-tight">
              One account
            </span>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {ORBIT_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={cn(
                  "rounded-xl bg-white/[0.06] border p-2.5 backdrop-blur-sm",
                  s.cardBorder
                )}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-md flex items-center justify-center shrink-0",
                      s.badgeBg
                    )}
                  >
                    <Icon className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-white font-heading truncate">
                    {s.name}
                  </span>
                </div>
                <p className="text-[11px] text-slate-200 leading-tight">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. STATIC MUTED SUB-CAPTION */}
      <p className="text-center text-[11px] text-slate-400 mt-2 font-medium tracking-wide">
        Four ways to learn
      </p>
    </div>
  );
}
