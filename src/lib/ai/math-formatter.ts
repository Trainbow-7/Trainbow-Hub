/**
 * Mathematical Formatting Utility for Trainbow HUB
 * Formats OCR / AI vision extractions and user inputs into publication-grade mathematical notation.
 * Ensures LaTeX formulas, fractions, equations, and algebraic expressions are properly delimited
 * for KaTeX rendering.
 */

// Common LaTeX math indicators that signify math mode is required
const LATEX_MATH_COMMAND_REGEX =
  /\\(?:frac|sqrt|pm|times|div|leq|geq|neq|approx|equiv|cdot|sum|int|infty|alpha|beta|gamma|theta|lambda|pi|mu|sigma|omega|Delta|partial|sin|cos|tan|log|ln|lim|left|right|begin|end|text|binom|mathbf|mathit)\b/;

/**
 * Normalizes mathematical text by ensuring LaTeX formulas and equations
 * without dollar delimiters are cleanly wrapped with `$...$` or `$$...$$`.
 */
export function normalizeMathInText(input: string): string {
  if (!input || typeof input !== "string") return "";

  const lines = input.split("\n");
  const processedLines = lines.map((line) => normalizeMathLine(line));
  return processedLines.join("\n");
}

function normalizeMathLine(line: string): string {
  const trimmed = line.trim();
  if (!trimmed) return line;

  // Already a display math block $$...$$
  if (trimmed.startsWith("$$") && trimmed.endsWith("$$")) {
    return line;
  }

  // If the line already contains $ delimiters, check if all LaTeX commands are covered
  // If so, return line as is.
  if (trimmed.includes("$")) {
    return line;
  }

  // Check if the line contains LaTeX commands (e.g. \frac{1}{3a - 1} = ...)
  if (LATEX_MATH_COMMAND_REGEX.test(line)) {
    // If the entire line is a formula (or has optional trailing punctuation)
    // E.g.: "\frac{1}{3a - 1} = \frac{2}{a + 1} - \frac{3}{8}" or "\frac{...}."
    const pureFormulaMatch = line.match(/^(\s*)(\\[a-zA-Z]+.+?)([\.\?\!]?)(\s*)$/);
    // But check if it starts with English words like "Solve the equation", "Example 13", etc.
    const leadingTextMatch = line.match(/^([A-Za-z0-9\s,:\(\)\-]+?:\s*|[Ss]olve\s+(?:the\s+)?(?:equation|system|for\s+[a-z])\s*:?\s*|[Ee]valuate\s*:?\s*|[Ff]ind\s*:?\s*|[Cc]alculate\s*:?\s*|[Gg]iven\s+that\s*:?\s*|[Ss]implify\s*:?\s*)(.+)$/);

    if (leadingTextMatch) {
      const prefix = leadingTextMatch[1];
      const rest = leadingTextMatch[2];

      // Extract trailing punctuation if any
      const trailingPunctMatch = rest.match(/^(.*?)([\.\?\!]?)(\s*)$/);
      if (trailingPunctMatch) {
        const mathPart = trailingPunctMatch[1].trim();
        const punct = trailingPunctMatch[2];
        const trailingSpace = trailingPunctMatch[3];
        return `${prefix}$${mathPart}$${punct}${trailingSpace}`;
      }
      return `${prefix}$${rest.trim()}$`;
    }

    // If pure formula on line without leading words:
    const trailingPunctMatch = line.match(/^(\s*)(.+?)([\.\?\!]?)(\s*)$/);
    if (trailingPunctMatch) {
      const leadingSpace = trailingPunctMatch[1];
      const mathPart = trailingPunctMatch[2].trim();
      const punct = trailingPunctMatch[3];
      const trailingSpace = trailingPunctMatch[4];
      return `${leadingSpace}$$${mathPart}$$${punct}${trailingSpace}`;
    }
  }

  // Check for common algebraic equation patterns without LaTeX backslash, e.g. "The LCM of the denominators is 8(3a - 1)(a + 1)."
  // We can wrap specific algebraic terms like "8(3a - 1)(a + 1)" if preceded by "is "
  const lcmMatch = line.match(
    /^(.*?\b(?:LCM|lcm|HCF|hcf|denominator[s]?|numerator[s]?)\s+(?:of\s+[^=:]+\s+)?(?:is|=|are)\s+)(.+?)([\.\?\!]?)(\s*)$/
  );
  if (lcmMatch) {
    const prefix = lcmMatch[1];
    const expression = lcmMatch[2].trim();
    const punct = lcmMatch[3];
    const suffix = lcmMatch[4];
    // Only wrap if it looks like math (has parenthesis, numbers, variables, or operators)
    if (
      (expression.includes("(") && expression.includes(")")) ||
      expression.includes("+") ||
      expression.includes("-") ||
      expression.includes("^") ||
      expression.includes("=")
    ) {
      return `${prefix}$${expression}$${punct}${suffix}`;
    }
  }

  return line;
}
