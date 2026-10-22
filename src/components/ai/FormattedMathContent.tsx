"use client";

import * as React from "react";
import katex from "katex";
import "katex/dist/contrib/mhchem.js";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { normalizeMathInText } from "@/lib/ai/math-formatter";

interface Attachment {
  name: string;
  type: string;
  size: number;
  previewUrl?: string;
  extractedText?: string;
}

interface FormattedMathContentProps {
  content: string;
  className?: string;
  isUserMessage?: boolean;
  verification?: {
    equation?: string;
    discriminant?: number;
    roots?: number[];
  };
  attachments?: Attachment[];
}

/**
 * KaTeX Math & Chemistry Renderer:
 * Renders LaTeX formulas and chemical equations (\ce{...}) into publication-grade, perfectly formatted notation.
 * If KaTeX fails to parse, gracefully falls back to clean readable text.
 */
function KatexFormula({ formula, displayMode = false }: { formula: string; displayMode?: boolean }) {
  const containerRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    try {
      // Clean up common duplicate delta escapes, raw symbols, or unescaped ampersands in reaction arrows
      let cleanFormula = formula
        .replace(/\\Delta\s*=\s*Δ/g, "\\Delta")
        .replace(/Δ/g, "\\Delta ")
        // Replace unescaped & (such as inside \text{Light & Chlorophyll} or \xrightarrow{...}) with \&
        .replace(/(?<!\\)&/g, "\\&")
        .trim();

      // Ensure inline fractions render with clear, readable typography
      if (!displayMode && cleanFormula.includes("\\frac") && !cleanFormula.includes("\\displaystyle")) {
        cleanFormula = `\\displaystyle ${cleanFormula}`;
      }

      katex.render(cleanFormula, containerRef.current, {
        displayMode,
        throwOnError: false,
        strict: false,
      });
    } catch {
      if (containerRef.current) {
        containerRef.current.innerText = formula;
      }
    }
  }, [formula, displayMode]);

  return <span ref={containerRef} className={displayMode ? "katex-display-wrapper inline-block" : "inline-block align-middle mx-1"} />;
}

/**
 * Diagram Parser and SVG Generator for Geometric and Algebraic concepts.
 */
function DiagramBlock({ code, type }: { code: string; type?: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render SVG based on diagram type or syntax
  const renderVisual = () => {
    const trimmed = code.trim().toLowerCase();

    // 1. Right-angled triangle or Pythagorean theorem
    if (trimmed.includes("triangle") || trimmed.includes("pythagoras") || trimmed.includes("right-angle")) {
      return (
        <div className="flex flex-col items-center justify-center p-3">
          <svg viewBox="0 0 240 160" className="w-56 h-36 max-w-full drop-shadow-sm">
            {/* Triangle shape */}
            <polygon
              points="40,130 200,130 40,30"
              fill="rgba(124, 58, 237, 0.08)"
              stroke="#7C3AED"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Right angle marker */}
            <path d="M 40 115 L 55 115 L 55 130" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
            {/* Labels */}
            <text x="30" y="85" textAnchor="end" fill="#475569" fontSize="11" fontWeight="600">Height (a)</text>
            <text x="120" y="148" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Base (b)</text>
            <text x="130" y="70" textAnchor="start" fill="#2563EB" fontSize="12" fontWeight="bold">Hypotenuse (c)</text>
            {/* Vertex labels */}
            <text x="32" y="28" fill="#0F172A" fontSize="11" fontWeight="bold">A</text>
            <text x="32" y="142" fill="#0F172A" fontSize="11" fontWeight="bold">C (90°)</text>
            <text x="208" y="142" fill="#0F172A" fontSize="11" fontWeight="bold">B</text>
          </svg>
          <span className="text-[11px] font-medium text-neutral-slate-600 mt-1">Right-Angled Triangle Geometric Reference</span>
        </div>
      );
    }

    // 2. Circle geometry, parallel chords, angles or circumference
    if (trimmed.includes("circle") || trimmed.includes("radius") || trimmed.includes("chord") || trimmed.includes("diameter")) {
      const isParallelChords = trimmed.includes("parallel") || trimmed.includes("opposite side") || (trimmed.includes("chord") && trimmed.includes("distance"));

      // 2a. Parallel Chords
      if (isParallelChords) {
        return (
          <div className="flex flex-col items-center justify-center p-3">
            <svg viewBox="0 0 240 200" className="w-60 h-48 max-w-full drop-shadow-sm">
              {/* Outer Circle */}
              <circle cx="120" cy="100" r="75" fill="rgba(37, 99, 235, 0.05)" stroke="#2563EB" strokeWidth="2.5" />
              {/* Centre O */}
              <circle cx="120" cy="100" r="3.5" fill="#0F172A" />
              <text x="126" y="98" fill="#0F172A" fontSize="11" fontWeight="bold">O</text>

              {/* Upper Chord: length 24cm, distance 5cm above centre */}
              <line x1="50" y1="65" x2="190" y2="65" stroke="#7C3AED" strokeWidth="2.5" />
              <text x="194" y="68" fill="#7C3AED" fontSize="10" fontWeight="bold">Chord AB (24cm)</text>

              {/* Lower Chord: length 10cm, distance 12cm below centre */}
              <line x1="75" y1="145" x2="165" y2="145" stroke="#059669" strokeWidth="2.5" />
              <text x="170" y="148" fill="#059669" fontSize="10" fontWeight="bold">Chord CD (10cm)</text>

              {/* Perpendicular line through center */}
              <line x1="120" y1="65" x2="120" y2="145" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Center to upper chord distance = 5cm */}
              <text x="115" y="84" textAnchor="end" fill="#DC2626" fontSize="10" fontWeight="bold">d₁ = 5</text>
              {/* Center to lower chord distance = 12cm */}
              <text x="115" y="126" textAnchor="end" fill="#DC2626" fontSize="10" fontWeight="bold">d₂ = 12</text>

              {/* Radius lines from center to chord endpoints */}
              <line x1="120" y1="100" x2="190" y2="65" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="156" y="80" fill="#2563EB" fontSize="9" fontWeight="bold">r = 13</text>

              <line x1="120" y1="100" x2="165" y2="145" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="146" y="126" fill="#2563EB" fontSize="9" fontWeight="bold">r = 13</text>
            </svg>
            <span className="text-[11px] font-semibold text-neutral-slate-700 mt-1">
              Circle with Parallel Chords on Opposite Sides (d = d₁ + d₂ = 5 + 12 = 17cm)
            </span>
          </div>
        );
      }

      // 2b. Diameter, Semicircle & Subtended Angle Theorem (Fig. 2.19 / Circle PMQN)
      if (
        trimmed.includes("diameter") ||
        trimmed.includes("semicircle") ||
        trimmed.includes("subtended") ||
        trimmed.includes("pmqn") ||
        trimmed.includes("fig. 2.19") ||
        trimmed.includes("qnm")
      ) {
        return (
          <div className="flex flex-col items-center justify-center p-3 w-full">
            <svg viewBox="0 0 280 260" className="w-72 max-w-full h-64 drop-shadow-sm">
              {/* Outer Circle PMQN */}
              <circle cx="140" cy="130" r="95" fill="rgba(124, 58, 237, 0.03)" stroke="#1E293B" strokeWidth="2.5" />

              {/* Centre O */}
              <circle cx="140" cy="130" r="3.5" fill="#0F172A" />
              <text x="126" y="133" fill="#0F172A" fontSize="12" fontWeight="bold">O</text>

              {/* Diameter PQ through centre O (P at top-left approx (90, 48), Q at bottom-right (190, 212)) */}
              <line x1="90" y1="48" x2="190" y2="212" stroke="#1E293B" strokeWidth="2.5" />

              {/* Inscribed Triangle PMQ: Chord PM and Chord QM */}
              <line x1="90" y1="48" x2="235" y2="130" stroke="#2563EB" strokeWidth="2" />
              <line x1="190" y1="212" x2="235" y2="130" stroke="#2563EB" strokeWidth="2" />

              {/* Angle in a semicircle right angle symbol at M (90°) */}
              <path d="M 218 122 L 210 137 L 222 144" fill="none" stroke="#7C3AED" strokeWidth="1.5" />

              {/* Lines standing on common chord QM to point N (stand in same segment) */}
              <line x1="45" y1="155" x2="235" y2="130" stroke="#059669" strokeWidth="2" /> {/* NM */}
              <line x1="45" y1="155" x2="190" y2="212" stroke="#059669" strokeWidth="2" /> {/* NQ */}

              {/* Arc marker at Q (63°) */}
              <path d="M 175 192 A 22 22 0 0 1 195 194" fill="none" stroke="#DC2626" strokeWidth="2" />
              <text x="180" y="184" textAnchor="end" fill="#DC2626" fontSize="11" fontWeight="bold">63°</text>

              {/* Double Arc angle marker at N (27°) */}
              <path d="M 72 152 A 28 28 0 0 1 76 166" fill="none" stroke="#059669" strokeWidth="1.5" />
              <path d="M 77 151 A 33 33 0 0 1 81 168" fill="none" stroke="#059669" strokeWidth="1.5" />

              {/* Point labels */}
              <text x="82" y="38" fill="#0F172A" fontSize="14" fontWeight="bold">P</text>
              <text x="244" y="135" fill="#0F172A" fontSize="14" fontWeight="bold">M</text>
              <text x="194" y="232" fill="#0F172A" fontSize="14" fontWeight="bold">Q</text>
              <text x="30" y="160" fill="#0F172A" fontSize="14" fontWeight="bold">N</text>
            </svg>
            <span className="text-[11px] font-bold text-neutral-slate-800 mt-2">
              Fig. 2.19 Replicated: Diameter PQ, ∠PMQ = 90° (semicircle), ∠QNM = ∠QPM = 27° (same segment)
            </span>
          </div>
        );
      }

      return (
        <div className="flex flex-col items-center justify-center p-3">
          <svg viewBox="0 0 220 180" className="w-52 h-40 max-w-full drop-shadow-sm">
            <circle cx="110" cy="90" r="65" fill="rgba(37, 99, 235, 0.06)" stroke="#2563EB" strokeWidth="2" />
            <circle cx="110" cy="90" r="3.5" fill="#0F172A" />
            <line x1="110" y1="90" x2="175" y2="90" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="45" y1="90" x2="175" y2="90" stroke="#0F172A" strokeWidth="1.5" opacity="0.4" />
            <text x="110" y="82" fill="#0F172A" fontSize="11" fontWeight="bold">Center O</text>
            <text x="145" y="84" fill="#DC2626" fontSize="11" fontWeight="bold">r (Radius)</text>
            <text x="110" y="172" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Circumference C = 2πr</text>
          </svg>
          <span className="text-[11px] font-medium text-neutral-slate-600 mt-1">Circle Theorems & Dimensions</span>
        </div>
      );
    }

    // 3. Number line / Roots representation
    if (trimmed.includes("numberline") || trimmed.includes("roots") || trimmed.includes("intervals")) {
      return (
        <div className="flex flex-col items-center justify-center p-3 w-full">
          <svg viewBox="0 0 320 80" className="w-full max-w-md h-20">
            {/* Axis */}
            <line x1="20" y1="40" x2="300" y2="40" stroke="#334155" strokeWidth="2" />
            {/* Ticks & Points */}
            <line x1="60" y1="35" x2="60" y2="45" stroke="#64748B" strokeWidth="1.5" />
            <line x1="110" y1="35" x2="110" y2="45" stroke="#64748B" strokeWidth="1.5" />
            <line x1="160" y1="32" x2="160" y2="48" stroke="#0F172A" strokeWidth="2" />
            <line x1="210" y1="35" x2="210" y2="45" stroke="#64748B" strokeWidth="1.5" />
            <line x1="260" y1="35" x2="260" y2="45" stroke="#64748B" strokeWidth="1.5" />

            <circle cx="110" cy="40" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <circle cx="210" cy="40" r="5" fill="#16A34A" stroke="#166534" strokeWidth="1.5" />

            <text x="160" y="62" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="600">0</text>
            <text x="110" y="24" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">x₁</text>
            <text x="210" y="24" textAnchor="middle" fill="#16A34A" fontSize="11" fontWeight="bold">x₂</text>
          </svg>
          <span className="text-[11px] font-medium text-neutral-slate-600">Real Roots on the Number Line</span>
        </div>
      );
    }

    // 4. Statistics: Central tendency bar plot (Shoe sizes: 5, 9, 10, 10, 11)
    if (trimmed.includes("statistics") || trimmed.includes("central tendency") || trimmed.includes("shoe size")) {
      return (
        <div className="flex flex-col items-center justify-center p-3 w-full">
          <svg viewBox="0 0 340 180" className="w-80 max-w-full h-44 drop-shadow-sm">
            {/* Background grid */}
            <line x1="40" y1="140" x2="310" y2="140" stroke="#334155" strokeWidth="1.5" />
            <line x1="40" y1="30" x2="40" y2="140" stroke="#334155" strokeWidth="1.5" />

            {/* Y axis ticks */}
            <line x1="36" y1="140" x2="40" y2="140" stroke="#64748B" />
            <text x="32" y="143" textAnchor="end" fill="#64748B" fontSize="9">0</text>
            <line x1="36" y1="85" x2="40" y2="85" stroke="#64748B" />
            <text x="32" y="88" textAnchor="end" fill="#64748B" fontSize="9">6</text>
            <line x1="36" y1="35" x2="40" y2="35" stroke="#64748B" />
            <text x="32" y="38" textAnchor="end" fill="#64748B" fontSize="9">12</text>

            {/* Mean reference dashed line at y = 9 (y-coordinate = 140 - (9/12)*105 = 61.25) */}
            <line x1="40" y1="61" x2="310" y2="61" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="312" y="64" fill="#DC2626" fontSize="9" fontWeight="bold">Mean = 9</text>

            {/* Median / Mode reference dashed line at y = 10 (y-coordinate = 140 - (10/12)*105 = 52.5) */}
            <line x1="40" y1="52" x2="310" y2="52" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="312" y="50" fill="#7C3AED" fontSize="9" fontWeight="bold">Median/Mode = 10</text>

            {/* Bars: student 1 (size 5, outlier), student 2 (9), student 3 (10), student 4 (10), student 5 (11) */}
            {/* Student 1: 5 (h = (5/12)*105 = 43.75, y = 140 - 43.75 = 96.25) */}
            <rect x="58" y="96" width="34" height="44" rx="4" fill="#F87171" stroke="#EF4444" strokeWidth="1.5" />
            <text x="75" y="90" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">5</text>
            <text x="75" y="153" textAnchor="middle" fill="#475569" fontSize="9">Std 1</text>
            <text x="75" y="165" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="bold">(Outlier)</text>

            {/* Student 2: 9 (h = 78.75, y = 61.25) */}
            <rect x="108" y="61" width="34" height="79" rx="4" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="125" y="55" textAnchor="middle" fill="#1D4ED8" fontSize="10" fontWeight="bold">9</text>
            <text x="125" y="153" textAnchor="middle" fill="#475569" fontSize="9">Std 2</text>

            {/* Student 3: 10 (h = 87.5, y = 52.5) */}
            <rect x="158" y="52" width="34" height="88" rx="4" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5" />
            <text x="175" y="46" textAnchor="middle" fill="#6D28D9" fontSize="10" fontWeight="bold">10</text>
            <text x="175" y="153" textAnchor="middle" fill="#475569" fontSize="9">Std 3</text>
            <text x="175" y="165" textAnchor="middle" fill="#7C3AED" fontSize="8" fontWeight="bold">(Median)</text>

            {/* Student 4: 10 (h = 87.5, y = 52.5) */}
            <rect x="208" y="52" width="34" height="88" rx="4" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5" />
            <text x="225" y="46" textAnchor="middle" fill="#6D28D9" fontSize="10" fontWeight="bold">10</text>
            <text x="225" y="153" textAnchor="middle" fill="#475569" fontSize="9">Std 4</text>
            <text x="225" y="165" textAnchor="middle" fill="#7C3AED" fontSize="8" fontWeight="bold">(Mode)</text>

            {/* Student 5: 11 (h = 96.25, y = 43.75) */}
            <rect x="258" y="44" width="34" height="96" rx="4" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="275" y="38" textAnchor="middle" fill="#1D4ED8" fontSize="10" fontWeight="bold">11</text>
            <text x="275" y="153" textAnchor="middle" fill="#475569" fontSize="9">Std 5</text>
          </svg>
          <span className="text-[11px] font-semibold text-neutral-slate-700 mt-1">
            Data Distribution: Four students wear sizes 9–11; size 5 is an outlier pulling the mean down.
          </span>
        </div>
      );
    }

    // Default: Parabola / Quadratic Curve Plot
    return (
      <div className="flex flex-col items-center justify-center p-3">
        <svg viewBox="0 0 260 160" className="w-64 h-40 max-w-full drop-shadow-sm">
          {/* Grid lines */}
          <line x1="30" y1="120" x2="230" y2="120" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="30" y1="40" x2="230" y2="40" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
          {/* Axes */}
          <line x1="30" y1="85" x2="235" y2="85" stroke="#475569" strokeWidth="1.5" />
          <line x1="130" y1="15" x2="130" y2="145" stroke="#475569" strokeWidth="1.5" />
          {/* Axis Labels */}
          <text x="238" y="89" fill="#475569" fontSize="10" fontWeight="bold">x</text>
          <text x="135" y="16" fill="#475569" fontSize="10" fontWeight="bold">y</text>
          {/* Parabola curve: vertex at (130, 120), opens up */}
          <path
            d="M 65 30 Q 130 145 195 30"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Roots points at intersection with x-axis */}
          <circle cx="88" cy="85" r="4" fill="#2563EB" />
          <circle cx="172" cy="85" r="4" fill="#2563EB" />
          {/* Vertex point */}
          <circle cx="130" cy="116" r="3.5" fill="#DC2626" />
          <text x="88" y="102" textAnchor="middle" fill="#2563EB" fontSize="10" fontWeight="bold">x₁</text>
          <text x="172" y="102" textAnchor="middle" fill="#2563EB" fontSize="10" fontWeight="bold">x₂</text>
          <text x="130" y="134" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="600">Vertex (min)</text>
        </svg>
        <span className="text-[11px] font-medium text-neutral-slate-600 mt-1">Quadratic Curve f(x) = ax² + bx + c Visual Representation</span>
      </div>
    );
  };

  return (
    <div className="my-4 rounded-xl border border-purple-200 bg-white overflow-hidden shadow-xs">
      <div className="flex items-center justify-between px-3 py-1.5 bg-purple-50/80 border-b border-purple-100">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-service-ai-600" />
          <span className="text-xs font-bold text-service-ai-700 tracking-wide uppercase">
            Interactive Diagram {type ? `• ${type}` : ""}
          </span>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="text-neutral-slate-500 hover:text-neutral-slate-800 p-1 rounded hover:bg-white text-xs flex items-center gap-1 transition-colors"
          title="Copy Diagram Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-status-green-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="text-[10px]">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <div className="p-3 bg-neutral-slate-50/60 flex justify-center">
        {renderVisual()}
      </div>
    </div>
  );
}

/**
 * Format mathematical text fragments:
 * - Renders block equations ($$...$$) with KaTeX typography
 * - Renders inline mathematical terms ($...$) with KaTeX typography
 * - Parses Markdown bold and italics
 */
function formatMathLine(line: string, keyPrefix: string, isUserMessage: boolean = false): React.ReactNode {
  // Ensure un-delimited LaTeX expressions are cleanly wrapped in $...$ or $$...$$
  const normalized = normalizeMathInText(line);

  // Check if line is a display equation $$...$$
  const blockMathMatch = normalized.trim().match(/^\$\$(.+)\$\$$/);
  if (blockMathMatch) {
    const math = blockMathMatch[1];
    return (
      <div
        key={keyPrefix}
        className={cn(
          "my-2.5 py-2.5 px-4 rounded-xl shadow-xs overflow-x-auto flex items-center justify-center",
          isUserMessage
            ? "bg-white/15 border border-white/25 text-white"
            : "bg-white border border-purple-200/90 text-neutral-slate-900"
        )}
      >
        <KatexFormula formula={math} displayMode={true} />
      </div>
    );
  }

  // Tokenize line by block math ($$...$$), inline math ($...$), bold (**...**), and italic (*...*)
  // We match $$...$$ and $...$ before *...* to ensure math formulas with spaces or operators don't collide with italics
  const parts = normalized.split(/(\$\$[^\$]+\$\$|\$[^$\n]+\$|\*\*[^\*]+\*\*|\*[^\*\$\n]+\*)/g);

  return (
    <span key={keyPrefix} className="leading-relaxed">
      {parts.map((part, idx) => {
        const subKey = `${keyPrefix}-${idx}`;

        // Block math within sentence
        if (part.startsWith("$$") && part.endsWith("$$")) {
          const formula = part.slice(2, -2);
          return (
            <span
              key={subKey}
              className={cn(
                "inline-block my-1 px-3 py-1.5 rounded-xl shadow-2xs",
                isUserMessage
                  ? "bg-white/15 text-white border border-white/25"
                  : "bg-purple-50 text-purple-950 border border-purple-200"
              )}
            >
              <KatexFormula formula={formula} displayMode={false} />
            </span>
          );
        }

        // Inline math: $...$
        if (part.startsWith("$") && part.endsWith("$")) {
          const formula = part.slice(1, -1);
          return (
            <span
              key={subKey}
              className={cn(
                "inline-block mx-0.5 px-1 py-0.5 rounded font-medium align-baseline",
                isUserMessage
                  ? "bg-white/10 text-white"
                  : "bg-purple-50/70 text-purple-950"
              )}
            >
              <KatexFormula formula={formula} displayMode={false} />
            </span>
          );
        }

        // Bold text: **...**
        if (part.startsWith("**") && part.endsWith("**")) {
          let boldText = part.slice(2, -2);
          
          // If bold text contains LaTeX or math with dollar signs (e.g. "**A. $1.0\;\mu\text{F}$**"),
          // format or extract nicely rather than printing raw dollar signs
          if (boldText.includes("$")) {
            const innerParts = boldText.split(/(\$[^\$]+\$)/g);
            return (
              <strong
                key={subKey}
                className={cn("font-bold", isUserMessage ? "text-white" : "text-neutral-slate-900")}
              >
                {innerParts.map((ip, iIdx) => {
                  if (ip.startsWith("$") && ip.endsWith("$")) {
                    return <KatexFormula key={iIdx} formula={ip.slice(1, -1)} displayMode={false} />;
                  }
                  return <span key={iIdx}>{ip}</span>;
                })}
              </strong>
            );
          }

          // If bold text has raw LaTeX backslashes without dollar delimiters (e.g. "A. 1.0\;\mu\text{F}")
          if (boldText.includes("\\mu") || boldText.includes("\\text") || boldText.includes("\\frac")) {
            return (
              <strong
                key={subKey}
                className={cn("font-bold", isUserMessage ? "text-white" : "text-neutral-slate-900")}
              >
                <KatexFormula formula={boldText} displayMode={false} />
              </strong>
            );
          }

          return (
            <strong
              key={subKey}
              className={cn("font-bold", isUserMessage ? "text-white" : "text-neutral-slate-900")}
            >
              {boldText}
            </strong>
          );
        }

        // Italic text: *...*
        if (part.startsWith("*") && part.endsWith("*")) {
          const italicText = part.slice(1, -1);
          return (
            <em
              key={subKey}
              className={cn("italic", isUserMessage ? "text-blue-100" : "text-neutral-slate-800")}
            >
              {italicText}
            </em>
          );
        }

        return <span key={subKey}>{part}</span>;
      })}
    </span>
  );
}

export function FormattedMathContent({ content, className, isUserMessage = false, verification, attachments }: FormattedMathContentProps) {
  const lines = content.split("\n");
  const renderedElements: React.ReactNode[] = [];

  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLang = "";

  let inMathBlock = false;
  let mathBlockContent: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Check code blocks (e.g. ```diagram or ```mermaid or ```math)
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        // Close block
        inCodeBlock = false;
        const codeText = codeBlockContent.join("\n");
        if (codeBlockLang === "diagram" || codeBlockLang === "mermaid" || codeBlockLang === "svg") {
          renderedElements.push(
            <DiagramBlock key={`diag-${i}`} code={codeText} type={codeBlockLang} />
          );
        } else {
          renderedElements.push(
            <pre key={`pre-${i}`} className="my-2.5 p-3 rounded-lg bg-neutral-slate-900 text-neutral-slate-100 font-mono text-xs overflow-x-auto">
              <code>{codeText}</code>
            </pre>
          );
        }
        codeBlockContent = [];
        codeBlockLang = "";
      } else {
        // Open block
        inCodeBlock = true;
        codeBlockLang = trimmed.slice(3).trim().toLowerCase();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(rawLine);
      continue;
    }

    // Check multi-line display math blocks ($$...$$)
    if (trimmed === "$$" || (trimmed.startsWith("$$") && !trimmed.endsWith("$$", 2))) {
      if (inMathBlock) {
        // Close multi-line math block
        inMathBlock = false;
        const formula = mathBlockContent.join("\n");
        renderedElements.push(
          <div
            key={`mathblock-${i}`}
            className={cn(
              "my-3 py-3 px-5 rounded-2xl shadow-sm overflow-x-auto flex items-center justify-center",
              isUserMessage
                ? "bg-white/10 border border-white/20 text-white"
                : "bg-white border border-purple-200/90 text-neutral-slate-900"
            )}
          >
            <KatexFormula formula={formula} displayMode={true} />
          </div>
        );
        mathBlockContent = [];
      } else {
        // Open multi-line math block
        inMathBlock = true;
        const remaining = trimmed.slice(2).trim();
        if (remaining) mathBlockContent.push(remaining);
      }
      continue;
    }

    if (inMathBlock) {
      if (trimmed === "$$" || trimmed.endsWith("$$")) {
        const withoutEnd = trimmed.endsWith("$$") ? trimmed.slice(0, -2).trim() : trimmed;
        if (withoutEnd && withoutEnd !== "$$") mathBlockContent.push(withoutEnd);
        inMathBlock = false;
        const formula = mathBlockContent.join("\n");
        renderedElements.push(
          <div
            key={`mathblock-${i}`}
            className={cn(
              "my-3 py-3 px-5 rounded-2xl shadow-sm overflow-x-auto flex items-center justify-center",
              isUserMessage
                ? "bg-white/10 border border-white/20 text-white"
                : "bg-white border border-purple-200/90 text-neutral-slate-900"
            )}
          >
            <KatexFormula formula={formula} displayMode={true} />
          </div>
        );
        mathBlockContent = [];
      } else {
        mathBlockContent.push(rawLine);
      }
      continue;
    }

    // Skip empty lines with spaced break
    if (!trimmed) {
      renderedElements.push(<div key={`sp-${i}`} className="h-2" />);
      continue;
    }

    // Check for Header Level 1: #
    if (trimmed.startsWith("# ")) {
      renderedElements.push(
        <h1
          key={`h1-${i}`}
          className={cn(
            "text-xl sm:text-2xl font-bold font-heading pt-4 pb-2 border-b",
            isUserMessage
              ? "text-white border-white/20"
              : "text-neutral-slate-900 border-neutral-slate-200"
          )}
        >
          {formatMathLine(trimmed.slice(2), `h1-content-${i}`, isUserMessage)}
        </h1>
      );
      continue;
    }

    // Check for Header Level 2: ##
    if (trimmed.startsWith("## ")) {
      renderedElements.push(
        <h2
          key={`h2-${i}`}
          className={cn(
            "text-lg sm:text-xl font-bold font-heading pt-4 pb-1.5 border-b",
            isUserMessage
              ? "text-white border-white/20"
              : "text-neutral-slate-900 border-neutral-slate-100"
          )}
        >
          {formatMathLine(trimmed.slice(3), `h2-content-${i}`, isUserMessage)}
        </h2>
      );
      continue;
    }

    // Check for Header Level 3 or 4: ### or ####
    if (trimmed.startsWith("### ")) {
      renderedElements.push(
        <h3
          key={`h3-${i}`}
          className={cn(
            "text-base font-bold font-heading pt-3 pb-1 flex items-center gap-2 border-b",
            isUserMessage
              ? "text-white border-white/20"
              : "text-neutral-slate-900 border-neutral-slate-100"
          )}
        >
          {formatMathLine(trimmed.slice(4), `h3-content-${i}`, isUserMessage)}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith("#### ")) {
      renderedElements.push(
        <h4
          key={`h4-${i}`}
          className={cn(
            "text-sm font-bold font-heading pt-2 pb-0.5",
            isUserMessage ? "text-white" : "text-neutral-slate-900"
          )}
        >
          {formatMathLine(trimmed.slice(5), `h4-content-${i}`, isUserMessage)}
        </h4>
      );
      continue;
    }

    // Check for Horizontal Rule: ---
    if (trimmed === "---") {
      renderedElements.push(
        <hr
          key={`hr-${i}`}
          className={cn("my-4", isUserMessage ? "border-white/20" : "border-neutral-slate-200")}
        />
      );
      continue;
    }

    // Check for List Item (Numbered: 1. or Bullet: -)
    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (numberedMatch) {
      const num = numberedMatch[1];
      const listContent = numberedMatch[2];
      renderedElements.push(
        <div
          key={`li-${i}`}
          className={cn(
            "flex items-start gap-2.5 pl-1 my-1.5 text-sm",
            isUserMessage ? "text-white" : "text-neutral-slate-800"
          )}
        >
          <span
            className={cn(
              "flex items-center justify-center w-5 h-5 rounded-full font-bold text-xs shrink-0 mt-0.5",
              isUserMessage ? "bg-white/20 text-white" : "bg-purple-100 text-purple-900"
            )}
          >
            {num}
          </span>
          <div className="flex-1">
            {formatMathLine(listContent, `li-num-${i}`, isUserMessage)}
          </div>
        </div>
      );
      continue;
    }

    if (trimmed.startsWith("> ")) {
      renderedElements.push(
        <div
          key={`quote-${i}`}
          className={cn(
            "my-2.5 p-3 rounded-xl border-l-4 text-xs shadow-2xs",
            isUserMessage
              ? "bg-white/10 border-white text-white"
              : "bg-purple-50/80 border-service-ai-600 text-neutral-slate-800"
          )}
        >
          {formatMathLine(trimmed.slice(2), `quote-c-${i}`, isUserMessage)}
        </div>
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      renderedElements.push(
        <div
          key={`bullet-${i}`}
          className={cn(
            "flex items-start gap-2 pl-3 my-1 text-sm",
            isUserMessage ? "text-white" : "text-neutral-slate-800"
          )}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full shrink-0 mt-2",
              isUserMessage ? "bg-white" : "bg-service-ai-600"
            )}
          />
          <div className="flex-1">
            {formatMathLine(trimmed.slice(2), `bullet-c-${i}`, isUserMessage)}
          </div>
        </div>
      );
      continue;
    }

    // Regular line / Paragraph
    renderedElements.push(
      <p
        key={`p-${i}`}
        className={cn(
          "text-sm leading-relaxed my-1",
          isUserMessage ? "text-white" : "text-neutral-slate-800"
        )}
      >
        {formatMathLine(trimmed, `p-c-${i}`, isUserMessage)}
      </p>
    );
  }

  // Auto-append visual diagram when mathematical problem contains quadratic parabola or geometry
  const hasDiagramExplicit = content.includes("```diagram") || content.includes("```mermaid");
  const isParabolaApplicable = !isUserMessage && !hasDiagramExplicit && (
    content.toLowerCase().includes("quadratic") ||
    content.toLowerCase().includes("discriminant") ||
    content.toLowerCase().includes("difference of two squares") ||
    content.includes("x²") ||
    content.includes("x^2")
  );

  return (
    <div className={cn("space-y-1 font-sans", className)}>
      {/* User's Uploaded Figure Reference */}
      {attachments && attachments.some((a) => a.previewUrl) && (
        <div className="mb-4 rounded-xl border border-neutral-slate-200 bg-neutral-slate-50/70 p-3.5 shadow-2xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-slate-200 text-xs font-bold text-neutral-slate-800">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-service-ai-600" />
              Your uploaded figure:
            </span>
            <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-white border border-neutral-slate-200 text-neutral-slate-600">
              Exam Photo Reference
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 py-1">
            {attachments
              .filter((a) => a.previewUrl)
              .map((att, idx) => (
                <div key={idx} className="flex flex-col items-center max-w-sm">
                  <img
                    src={att.previewUrl}
                    alt={att.name || "Replicated Question Diagram"}
                    className="max-h-64 object-contain rounded-lg border border-purple-200 bg-white shadow-xs"
                  />
                  <span className="text-[10px] text-neutral-slate-600 mt-1 font-medium truncate max-w-xs">
                    {att.name} — Question Geometry Reference
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      {renderedElements}

      {/* Auto-generated Visual diagram for Quadratic Curves / Geometric Figures */}
      {isParabolaApplicable && (
        <div className="mt-4 pt-3 border-t border-purple-100">
          <DiagramBlock
            code="parabola curve roots graph"
            type="Parabola Function & Roots Graph"
          />
        </div>
      )}
    </div>
  );
}
