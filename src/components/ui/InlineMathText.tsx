"use client";

import * as React from "react";
import katex from "katex";
import "katex/dist/contrib/mhchem.js";
import { cn } from "@/lib/utils";

interface InlineMathTextProps {
  text: string;
  className?: string;
  /**
   * If true, also attempts to wrap unescaped math expressions (e.g. sqrt(...), k^2, cm^2)
   * into standard LaTeX delimiters before rendering.
   */
  autoFormatUnescaped?: boolean;
}

/**
 * Normalizes plain-text / ASCII pseudo-math into standard LaTeX delimiters
 * if they are not already enclosed in `$ ... $`.
 */
function normalizeUnescapedMath(input: string): string {
  if (!input || typeof input !== "string") return "";

  // If already delimited with $, trust the author's LaTeX delimiters
  if (input.includes("$")) {
    return input;
  }

  let text = input;

  // 1. Units like cm^2, cm^3, m^2, m^3
  text = text.replace(/\b(cm|m|mm|km)\^([23])\b/g, "$\\text{$1}^$2$");

  // 2. Magnitude: |v| = sqrt(...)
  text = text.replace(/\|\s*([a-zA-Z])\s*\|\s*=\s*sqrt\(([^)]+)\)/g, "$|\\mathbf{$1}| = \\sqrt{$2}$");

  // 3. Power rule: d/dx(x^n) = n*x^(n-1)
  text = text.replace(/d\/dx\(([^)]+)\)\s*=\s*([^,\n]+)/g, "$\\frac{d}{dx}($1) = $2$");

  // 4. Square roots: sqrt(x)
  text = text.replace(/\bsqrt\(([^)]+)\)/g, "$\\sqrt{$1}$");

  // 5. Scale factors: k^2, r^3, x^2
  text = text.replace(/\b([a-zA-Z])\^([0-9n\-]+)\b/g, "$$1^$2$");

  return text;
}

/**
 * InlineMathText Component
 * Renders text containing LaTeX math notation (`$...$` or `$$...$$`)
 * using high-performance, accessible KaTeX typography.
 */
export function InlineMathText({ text, className, autoFormatUnescaped = true }: InlineMathTextProps) {
  if (!text) return null;

  const processedText = autoFormatUnescaped ? normalizeUnescapedMath(text) : text;

  // If text does not contain any math delimiter ($), render directly for zero-overhead
  if (!processedText.includes("$")) {
    return <span className={className}>{text}</span>;
  }

  // Tokenize by block math ($$...$$) and inline math ($...$)
  const tokens = processedText.split(/(\$\$[^\$]+\$\$|\$[^\$]+\$)/g);

  return (
    <span className={cn("inline-math-container", className)}>
      {tokens.map((token, idx) => {
        if (!token) return null;

        const isDisplay = token.startsWith("$$") && token.endsWith("$$");
        const isInline = !isDisplay && token.startsWith("$") && token.endsWith("$");

        if (isDisplay || isInline) {
          const formula = isDisplay ? token.slice(2, -2) : token.slice(1, -1);
          try {
            // Clean common math quirks before passing to KaTeX
            let cleanFormula = formula
              .replace(/\\Delta\s*=\s*Δ/g, "\\Delta")
              .replace(/Δ/g, "\\Delta ")
              .trim();

            const html = katex.renderToString(cleanFormula, {
              displayMode: isDisplay,
              throwOnError: false,
              strict: false,
            });

            return (
              <span
                key={idx}
                className={cn(
                  "inline-math-item inline-block",
                  isDisplay ? "my-1 block text-center" : "mx-0.5 align-baseline"
                )}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return (
              <span key={idx} className="font-mono text-[0.95em]">
                {formula}
              </span>
            );
          }
        }

        return <React.Fragment key={idx}>{token}</React.Fragment>;
      })}
    </span>
  );
}

export default InlineMathText;

