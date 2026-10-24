import * as React from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Send } from "lucide-react";

/**
 * HeroPreview Component
 * A self-contained, purely decorative product preview showing:
 * 1. An "AI Maths Helper" glassy dark chat mockup with Socratic dialogue.
 * 2. An overlapping floating verified tutor card.
 * 3. A floating "Escrow protected" chip.
 *
 * Fully aria-hidden to eliminate redundant screen-reader chatter and keyboard tab stops.
 */
export function HeroPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[420px] lg:max-w-none mx-auto select-none pointer-events-none"
    >
      {/* Soft radial blue/indigo glow behind the cards so they feel lit */}
      <div
        className="absolute -inset-4 sm:-inset-8 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.4) 0%, rgba(129,140,248,0.2) 45%, transparent 70%)",
        }}
      />

      {/* Main Glassy Card: AI Maths Helper Chat Mockup */}
      <div className="relative rounded-[20px] bg-white/[0.04] border border-white/10 backdrop-blur-md p-5 sm:p-6 shadow-2xl shadow-black/40">
        {/* Header Row */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight font-heading">
                AI Maths Helper
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-emerald-300">
                  Online 24/7
                </span>
              </div>
            </div>
          </div>

          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300">
            Socratic AI
          </span>
        </div>

        {/* Chat Messages Body */}
        <div className="py-4 space-y-3.5">
          {/* Student Bubble (Right-aligned, Blue) */}
          <div className="flex flex-col items-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#2563EB] px-3.5 py-2.5 text-white shadow-md">
              <p className="text-xs sm:text-[13px] font-medium leading-snug">
                How do I solve <span className="font-semibold">x² − 5x + 6 = 0</span>?
              </p>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 mr-1">Just now</span>
          </div>

          {/* AI Bubble (Left-aligned, Indigo/Purple tint) */}
          <div className="flex flex-col items-start">
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-gradient-to-br from-indigo-950/80 to-[#1e1b4b]/80 border border-indigo-400/20 px-3.5 py-2.5 text-slate-100 shadow-md">
              <div className="flex items-center gap-1.5 mb-1 text-sky-300">
                <Sparkles className="h-3 w-3" />
                <span className="text-[11px] font-bold tracking-wide">Trainbow Socratic Guidance</span>
              </div>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-200">
                Good question! Let&apos;s work it out together. What two numbers multiply to <span className="text-white font-semibold">6</span> and add up to <span className="text-white font-semibold">−5</span>?
              </p>
            </div>
            {/* Small tag under AI bubble */}
            <div className="mt-1.5 ml-1 inline-flex items-center gap-1 text-[11px] font-medium text-sky-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Guided step-by-step, not just the answer.</span>
            </div>
          </div>
        </div>

        {/* Decorative Fake Input Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between rounded-xl bg-white/[0.05] border border-white/10 px-3.5 py-2.5 text-slate-400">
            <span className="text-xs text-slate-400">
              Type your step or question...
            </span>
            <div className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
              <Send className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Overlapping Tutor Card (Bottom-Left) */}
      {/* Motion: gentle float wrapped in prefers-reduced-motion */}
      <div className="absolute -bottom-6 -left-3 sm:-bottom-7 sm:-left-6 w-[240px] sm:w-[260px] rounded-2xl bg-[#0F172A]/95 border border-white/15 p-3.5 shadow-2xl backdrop-blur-md z-20 motion-safe:animate-hero-float-tutor">
        {/*
          SAMPLE DATA: Placeholders for verified 1-on-1 educators.
          To be connected with live tutor directory data in subsequent iterations.
          Do NOT show star ratings or student counts without live data bindings.
        */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
            AO
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="text-xs sm:text-[13px] font-bold text-white truncate">
                Mr. A. Okafor
              </p>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            </div>
            <p className="text-[11px] text-slate-300 truncate">
              WAEC & JAMB Maths
            </p>
            <div className="mt-1 flex items-center justify-between">
              <span className="inline-flex items-center text-[10px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 px-1.5 py-0.5 rounded">
                Verified
              </span>
              <span className="text-[11px] font-bold text-sky-400">
                Book a session →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Escrow Chip (Top-Right) */}
      <div className="absolute -top-3.5 -right-2 sm:-top-4 sm:-right-4 inline-flex items-center gap-1.5 rounded-full bg-[#111A2E]/95 border border-white/15 px-3 py-1.5 shadow-xl backdrop-blur-md z-20 motion-safe:animate-hero-float-chip">
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        <span className="text-xs font-semibold text-slate-200">
          Escrow protected
        </span>
      </div>
    </div>
  );
}
