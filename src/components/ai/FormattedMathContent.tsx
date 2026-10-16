"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface FormattedMathContentProps {
  content: string;
  className?: string;
  verification?: {
    equation?: string;
    discriminant?: number;
    roots?: number[];
  };
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

    // 2. Circle geometry, angles or circumference
    if (trimmed.includes("circle") || trimmed.includes("radius") || trimmed.includes("chord") || trimmed.includes("diameter")) {
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
            <line x1="20" y1="40" x2="300" y2="40" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
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

    // Default: Parabola / Quadratic Curve Plot or General Coordinate Diagram
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
 * - Replaces LaTeX-style $$formula$$ with styled block formulas
 * - Replaces $inline$ with styled inline math chips
 * - Replaces **bold** text
 * - Replaces *italic* text
 */
function formatMathLine(line: string, keyPrefix: string): React.ReactNode {
  // Check if line is a display equation $$...$$
  const blockMathMatch = line.trim().match(/^\$\$(.+)\$\$$/);
  if (blockMathMatch) {
    const math = blockMathMatch[1];
    return (
      <div
        key={keyPrefix}
        className="my-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-purple-950 text-white font-mono text-center text-sm md:text-base tracking-wide border border-brand-navy-900/60 shadow-sm overflow-x-auto"
      >
        <span className="select-all">{math}</span>
      </div>
    );
  }

  // Tokenize line by inline math ($...$) and bold (**...**)
  // Regex to split while preserving tokens:
  const parts = line.split(/(\$\$[^\$]+\$\$|\$[^\$]+\$|\*\*[^\*]+\*\*|\*[^\*]+\*)/g);

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
              className="inline-block mx-1.5 px-3 py-1 rounded-lg bg-brand-navy-900 text-white font-mono text-xs md:text-sm font-semibold shadow-xs"
            >
              {formula}
            </span>
          );
        }

        // Inline math: $...$
        if (part.startsWith("$") && part.endsWith("$")) {
          const formula = part.slice(1, -1);
          return (
            <span
              key={subKey}
              className="inline-block mx-0.5 px-2 py-0.5 rounded-md bg-purple-50 text-purple-900 font-mono text-xs font-semibold border border-purple-200/80 shadow-2xs"
            >
              {formula}
            </span>
          );
        }

        // Bold text: **...**
        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={subKey} className="font-bold text-neutral-slate-900">
              {boldText}
            </strong>
          );
        }

        // Italic text: *...*
        if (part.startsWith("*") && part.endsWith("*")) {
          const italicText = part.slice(1, -1);
          return (
            <em key={subKey} className="italic text-neutral-slate-800">
              {italicText}
            </em>
          );
        }

        return <span key={subKey}>{part}</span>;
      })}
    </span>
  );
}

export function FormattedMathContent({ content, className, verification }: FormattedMathContentProps) {
  // Check if diagram block exists in content or should be automatically inferred from math context
  const lines = content.split("\n");
  const renderedElements: React.ReactNode[] = [];

  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLang = "";

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

    // Skip empty lines with spaced break
    if (!trimmed) {
      renderedElements.push(<div key={`sp-${i}`} className="h-2" />);
      continue;
    }

    // Check for Header Level 3 or 4: ### or ####
    if (trimmed.startsWith("### ")) {
      renderedElements.push(
        <h3 key={`h3-${i}`} className="text-base font-bold font-heading text-neutral-slate-900 pt-3 pb-1 flex items-center gap-2 border-b border-neutral-slate-100">
          {formatMathLine(trimmed.slice(4), `h3-content-${i}`)}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith("#### ")) {
      renderedElements.push(
        <h4 key={`h4-${i}`} className="text-sm font-bold font-heading text-neutral-slate-900 pt-2 pb-0.5">
          {formatMathLine(trimmed.slice(5), `h4-content-${i}`)}
        </h4>
      );
      continue;
    }

    // Check for Horizontal Rule: ---
    if (trimmed === "---") {
      renderedElements.push(<hr key={`hr-${i}`} className="my-4 border-neutral-slate-200" />);
      continue;
    }

    // Check for List Item (Numbered: 1. or Bullet: -)
    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (numberedMatch) {
      const num = numberedMatch[1];
      const listContent = numberedMatch[2];
      renderedElements.push(
        <div key={`li-${i}`} className="flex items-start gap-2.5 pl-1 my-1.5 text-neutral-slate-800 text-sm">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-900 font-bold text-xs shrink-0 mt-0.5">
            {num}
          </span>
          <div className="flex-1">
            {formatMathLine(listContent, `li-num-${i}`)}
          </div>
        </div>
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      renderedElements.push(
        <div key={`bullet-${i}`} className="flex items-start gap-2 pl-3 my-1 text-neutral-slate-800 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-service-ai-600 shrink-0 mt-2" />
          <div className="flex-1">
            {formatMathLine(trimmed.slice(2), `bullet-c-${i}`)}
          </div>
        </div>
      );
      continue;
    }

    // Regular line / Paragraph
    renderedElements.push(
      <p key={`p-${i}`} className="text-sm text-neutral-slate-800 leading-relaxed my-1">
        {formatMathLine(trimmed, `p-c-${i}`)}
      </p>
    );
  }

  // Auto-append visual diagram when mathematical problem contains quadratic parabola or geometry
  const hasDiagramExplicit = content.includes("```diagram") || content.includes("```mermaid");
  const isParabolaApplicable = !hasDiagramExplicit && (
    content.toLowerCase().includes("quadratic") ||
    content.toLowerCase().includes("discriminant") ||
    content.toLowerCase().includes("difference of two squares") ||
    content.includes("x²") ||
    content.includes("x^2")
  );

  return (
    <div className={cn("space-y-1 font-sans", className)}>
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
