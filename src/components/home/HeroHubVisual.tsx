import * as React from "react";
import { BookOpen, Sparkles, GraduationCap, Music } from "lucide-react";

const SERVICES = [
  {
    name: "Academy",
    desc: "Lessons and quizzes",
    color: "blue",
    icon: BookOpen,
    badgeBg: "bg-blue-500/20 text-sky-300 border-blue-400/30",
    cardBorder: "border-blue-400/25",
    posClass: "lg:top-4 lg:left-0",
  },
  {
    name: "AI",
    desc: "Instant study help",
    color: "purple",
    icon: Sparkles,
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    cardBorder: "border-purple-400/25",
    posClass: "lg:top-4 lg:right-0",
  },
  {
    name: "Tutors",
    desc: "Matched to you",
    color: "teal",
    icon: GraduationCap,
    badgeBg: "bg-teal-500/20 text-teal-300 border-teal-400/30",
    cardBorder: "border-teal-400/25",
    posClass: "lg:bottom-4 lg:left-0",
  },
  {
    name: "Music",
    desc: "Theory and instruments",
    color: "amber",
    icon: Music,
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    cardBorder: "border-amber-400/25",
    posClass: "lg:bottom-4 lg:right-0",
  },
];

export function HeroHubVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[480px] lg:max-w-[500px] mx-auto select-none pointer-events-none"
    >
      {/* Ambient Radial Hub Glow */}
      <div
        className="absolute -inset-4 sm:-inset-8 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.4) 0%, rgba(124,58,237,0.25) 45%, rgba(15,118,110,0.15) 70%, transparent 80%)",
        }}
      />

      {/* SVG Connector Lines (Desktop) */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-[370px] pointer-events-none z-0"
        viewBox="0 0 480 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="conn-blue" x1="240" y1="185" x2="110" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="conn-purple" x1="240" y1="185" x2="370" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="conn-teal" x1="240" y1="185" x2="110" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="conn-amber" x1="240" y1="185" x2="370" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <path
          d="M 240 185 C 190 150 160 110 110 70"
          stroke="url(#conn-blue)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-hub-flow-blue"
        />
        <path
          d="M 240 185 C 290 150 320 110 370 70"
          stroke="url(#conn-purple)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-hub-flow-purple"
        />
        <path
          d="M 240 185 C 190 220 160 260 110 300"
          stroke="url(#conn-teal)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-hub-flow-teal"
        />
        <path
          d="M 240 185 C 290 220 320 260 370 300"
          stroke="url(#conn-amber)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-hub-flow-amber"
        />
      </svg>

      {/* Main Hub Container */}
      <div className="relative w-full lg:h-[370px]">
        {/* Central Circular Node: "One account" */}
        <div className="mb-4 lg:mb-0 flex justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-20">
          <div className="w-auto px-4 py-2 lg:w-24 lg:h-24 lg:p-2.5 rounded-full bg-[#0E1B38] border-2 border-white/20 shadow-xl shadow-blue-950/60 flex items-center lg:flex-col lg:justify-center gap-2 backdrop-blur-md">
            <svg
              className="w-5 h-5 lg:w-8 lg:h-8 shrink-0 text-white"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="16" fill="#1E293B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              <path d="M 9 20 A 9 9 0 0 1 27 20" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 12 21 A 6 6 0 0 1 24 21" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="18" cy="22" r="2.5" fill="#34D399" />
            </svg>
            <span className="text-xs lg:text-[11px] font-bold text-white tracking-tight font-heading">
              One account
            </span>
          </div>
        </div>

        {/* 4 Unified Service Cards */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:block">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className={`rounded-xl bg-white/[0.06] border ${s.cardBorder} p-3 backdrop-blur-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-transform duration-150 lg:absolute lg:w-[190px] lg:z-10 ${s.posClass}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-6 h-6 rounded-lg ${s.badgeBg} flex items-center justify-center shrink-0 border`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-white font-heading">
                    {s.name}
                  </span>
                </div>
                <p className="text-[11px] text-slate-200 leading-snug">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Muted Sub-label */}
      <p className="text-center text-[11px] text-slate-400 mt-3 font-medium tracking-wide">
        Four ways to learn
      </p>
    </div>
  );
}
