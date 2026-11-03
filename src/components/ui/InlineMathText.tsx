"use client";

import * as React from "react";
import katex from "katex";
import "katex/dist/contrib/mhchem.js";
import { cn } from "@/lib/utils";

interface InlineMathTextProps {
  text: string;
  className?: string;
  /**
   * If true, also attempts to wrap unescaped math expressions (e.g. sqrt(...), k^2, cm^2, theta, alpha)
   * into standard LaTeX delimiters before rendering.
   */
  autoFormatUnescaped?: boolean;
}

/**
 * Applies a regex transformation function only to non-math segments
 * (avoiding touching text already enclosed in $...$ or $$...$$).
 */
function applyRuleToNonMath(text: string, ruleFn: (nonMath: string) => string): string {
  const parts = text.split(/(\$\$[^\$]+\$\$|\$[^\$]+\$)/g);
  return parts
    .map((part) => {
      if ((part.startsWith("$$") && part.endsWith("$$")) || (part.startsWith("$") && part.endsWith("$"))) {
        return part;
      }
      return ruleFn(part);
    })
    .join("");
}

/**
 * Normalizes plain-text / ASCII pseudo-math, trigonometric identities,
 * and Greek symbols (e.g. theta, tetha, alpha, beta, gamma) into standard LaTeX delimiters.
 */
function normalizeUnescapedMath(input: string): string {
  if (!input || typeof input !== "string") return "";

  let text = input;

  // 1. Trig quadrant identities: cos(180 - theta) = -cos(theta); sin(180 - theta) = sin(theta)
  text = applyRuleToNonMath(text, (s) =>
    s.replace(
      /\b(cos|sin|tan)\s*\(\s*(180|360|90)\s*([+-])\s*(theta|tetha|alpha|beta|[a-zA-Z])\s*\)\s*=\s*([+-]?\s*(?:cos|sin|tan)?\s*(?:\([^\)]+\)|theta|tetha|alpha|beta|[a-zA-Z]))/gi,
      (_match, fn, angle, sign, variable, rhs) => {
        const cleanVar = /tetha|theta/i.test(variable) ? "\\theta" : /alpha/i.test(variable) ? "\\alpha" : variable;
        let cleanRhs = rhs.replace(/\b(theta|tetha)\b/gi, "\\theta").replace(/\balpha\b/gi, "\\alpha");
        cleanRhs = cleanRhs.replace(/\b(cos|sin|tan)\s*\(\s*(\\theta|\\alpha)\s*\)/gi, "\\$1 $2");
        cleanRhs = cleanRhs.replace(/\b(cos|sin|tan)\s*\(([^)]+)\)/gi, "\\$1($2)");
        return `$\\${fn.toLowerCase()}(${angle}^\\circ ${sign} ${cleanVar}) = ${cleanRhs.trim()}$`;
      }
    )
  );

  // 2. Angle quadrant formulas: theta = 180 - alpha; theta = 180 + alpha; theta = 360 - alpha
  text = applyRuleToNonMath(text, (s) =>
    s.replace(
      /\b(theta|tetha|alpha)\s*=\s*(180|360|90)\s*([+-])\s*(theta|tetha|alpha|[a-zA-Z])\b/gi,
      (_match, lhs, angle, sign, rhs) => {
        const cleanLhs = /tetha|theta/i.test(lhs) ? "\\theta" : /alpha/i.test(lhs) ? "\\alpha" : lhs;
        const cleanRhs = /tetha|theta/i.test(rhs) ? "\\theta" : /alpha/i.test(rhs) ? "\\alpha" : rhs;
        return `$${cleanLhs} = ${angle}^\\circ ${sign} ${cleanRhs}$`;
      }
    )
  );

  // 3. Trig ratios: sin(theta) = O/H, cos(theta) = A/H, tan(theta) = O/A
  text = applyRuleToNonMath(text, (s) =>
    s.replace(
      /\b(sin|cos|tan)\s*\((theta|tetha|alpha|beta|[a-zA-Z])\)\s*=\s*([A-Za-z0-9]+)\s*\/\s*([A-Za-z0-9]+)\b/gi,
      (_match, fn, variable, num, den) => {
        const cleanVar = /tetha|theta/i.test(variable) ? "\\theta" : /alpha/i.test(variable) ? "\\alpha" : variable;
        return `$\\${fn.toLowerCase()}${cleanVar} = \\frac{\\text{${num}}}{\\text{${den}}}$`;
      }
    )
  );

  // 4. Magnitude: |v| = sqrt(...)
  text = applyRuleToNonMath(text, (s) =>
    s.replace(
      /\|\s*([a-zA-Z])\s*\|\s*=\s*sqrt\(([^)]+)\)/g,
      (_match, v, expr) => `$|\\mathbf{${v}}| = \\sqrt{${expr}}$`
    )
  );

  // 5. Power rule: d/dx(x^n) = n*x^(n-1)
  text = applyRuleToNonMath(text, (s) =>
    s.replace(
      /d\/dx\(([^)]+)\)\s*=\s*([^,\n;]+)/g,
      (_match, inner, rhs) => `$\\frac{d}{dx}(${inner}) = ${rhs.trim()}$`
    )
  );

  // 6. Square roots: sqrt(x)
  text = applyRuleToNonMath(text, (s) =>
    s.replace(/\bsqrt\(([^)]+)\)/g, (_match, inner) => `$\\sqrt{${inner}}$`)
  );

  // 7. Units like cm^2, cm^3, m^2, m^3, mm^2, km^2
  text = applyRuleToNonMath(text, (s) =>
    s.replace(/\b(cm|m|mm|km)\^([23])\b/g, (_match, u, p) => `$\\text{${u}}^${p}$`)
  );

  // 8. Standalone Greek words: theta, tetha -> \theta; alpha -> \alpha; beta -> \beta; gamma -> \gamma; etc.
  text = applyRuleToNonMath(text, (s) => s.replace(/\b(theta|tetha)\b/gi, () => "$\\theta$"));
  text = applyRuleToNonMath(text, (s) => s.replace(/\balpha\b/gi, () => "$\\alpha$"));
  text = applyRuleToNonMath(text, (s) => s.replace(/\bbeta\b/gi, () => "$\\beta$"));
  text = applyRuleToNonMath(text, (s) => s.replace(/\bgamma\b/gi, () => "$\\gamma$"));
  text = applyRuleToNonMath(text, (s) => s.replace(/\blambda\b/gi, () => "$\\lambda$"));
  text = applyRuleToNonMath(text, (s) => s.replace(/\bphi\b/gi, () => "$\\phi$"));
  text = applyRuleToNonMath(text, (s) => s.replace(/\bomega\b/gi, () => "$\\omega$"));

  // 9. Scale factors & powers: k^2, r^3, x^2
  text = applyRuleToNonMath(text, (s) =>
    s.replace(/\b([a-zA-Z])\^([0-9n\-]+)\b/g, (_match, v, p) => `$${v}^${p}$`)
  );

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
