export interface MisconceptionRecord {
  id: string;
  code: string;
  title: string;
  topic: string;
  description: string;
  remediation: string;
}

export const MISCONCEPTION_LIBRARY: Record<string, MisconceptionRecord> = {
  // 1. Algebra & Numbers
  "misc-sign-error": {
    id: "misc-sign-error",
    code: "MISC-ALG-01",
    title: "Sign Flip & Parentheses Error",
    topic: "Algebraic Processes",
    description: "Failing to distribute a negative sign to all terms inside brackets or flipping a sign incorrectly when transposing terms across the equals sign.",
    remediation: "Remember that a negative sign before parentheses acts as multiplying every term inside by -1: -(ax - b) = -ax + b.",
  },
  "misc-freshman-dream": {
    id: "misc-freshman-dream",
    code: "MISC-ALG-02",
    title: "Freshman's Dream: (a+b)² = a² + b²",
    topic: "Quadratic Expressions",
    description: "Expanding a binomial power by simply squaring individual terms, omitting the crucial cross-term 2ab.",
    remediation: "Always write out (a + b)² as (a + b)(a + b) = a² + 2ab + b². The middle cross-term is essential.",
  },
  "misc-fraction-add-denom": {
    id: "misc-fraction-add-denom",
    code: "MISC-NUM-01",
    title: "Adding Fractions by Adding Denominators",
    topic: "Fractions & Decimals",
    description: "Computing a/b + c/d as (a+c)/(b+d) instead of finding a common denominator (LCM).",
    remediation: "You can only add fractions with common denominators: a/b + c/d = (ad + bc)/(bd).",
  },
  "misc-divide-by-variable": {
    id: "misc-divide-by-variable",
    code: "MISC-ALG-03",
    title: "Dividing by Variable Losing Root",
    topic: "Quadratic Equations",
    description: "Dividing both sides of an equation like x² = 4x by x, which eliminates the valid root x = 0.",
    remediation: "Never divide across an equation by an unknown variable. Instead, transpose to one side and factor: x² - 4x = 0 ⇒ x(x - 4) = 0, so x = 0 or x = 4.",
  },
  "misc-inequality-sign": {
    id: "misc-inequality-sign",
    code: "MISC-ALG-04",
    title: "Inequality Sign Not Reversed",
    topic: "Linear Inequalities",
    description: "Multiplying or dividing an inequality by a negative number without reversing the direction of the inequality sign.",
    remediation: "Whenever you multiply or divide both sides of an inequality by a negative number, always flip the inequality symbol (< becomes >, ≤ becomes ≥).",
  },
  "misc-quad-formula-signs": {
    id: "misc-quad-formula-signs",
    code: "MISC-ALG-05",
    title: "Quadratic Formula Sign Slip",
    topic: "Quadratic Equations",
    description: "Errors in substituting negative b into -b (writing -3 instead of -(-3)=3) or errors computing (-b)² vs -b² under the radical.",
    remediation: "If b is negative, -b is positive. Under the square root, (-b)² is always positive: (-5)² = +25.",
  },
  "misc-indices-laws": {
    id: "misc-indices-laws",
    code: "MISC-NUM-02",
    title: "Indices Multiplication vs Power Law",
    topic: "Indices & Logarithms",
    description: "Confusing x^a · x^b = x^(a+b) with (x^a)^b = x^(ab) by multiplying powers during base multiplication.",
    remediation: "When multiplying identical bases, add the exponents: x^a · x^b = x^(a+b). Only multiply exponents when raising a power to a power: (x^a)^b = x^(ab).",
  },
  "misc-log-product-rule": {
    id: "misc-log-product-rule",
    code: "MISC-NUM-03",
    title: "Logarithm Distributive Fallacy",
    topic: "Logarithms",
    description: "Believing log(a + b) = log a + log b or log(ab) = log a · log b.",
    remediation: "Logarithms convert multiplication into addition: log(ab) = log a + log b. There is no formula for log(a + b).",
  },
  "misc-base-expansion-exponent": {
    id: "misc-base-expansion-exponent",
    code: "MISC-NUM-04",
    title: "Base Positional Value Power Offset",
    topic: "Number Bases",
    description: "Assigning the units column digit an exponent of 1 rather than 0 in polynomial base expansion (e.g. 23_x = 2x² + 3x¹).",
    remediation: "The units place always has power 0 (b⁰ = 1). For 23_b, expansion is 2·b¹ + 3·b⁰ = 2b + 3.",
  },

  // 2. Geometry & Trigonometry
  "misc-circle-subtended-angle": {
    id: "misc-circle-subtended-angle",
    code: "MISC-GEO-01",
    title: "Angle at Centre vs Circumference Inversion",
    topic: "Circle Theorems",
    description: "Inverting the theorem: claiming the angle at the circumference is twice the angle at the centre, or dividing when one should multiply.",
    remediation: "The angle subtended by an arc at the centre is TWICE the angle subtended at the circumference: Angle at centre = 2 × Angle at circumference.",
  },
  "misc-bearing-reference": {
    id: "misc-bearing-reference",
    code: "MISC-GEO-02",
    title: "Bearing Measured from East/West",
    topic: "Bearings",
    description: "Measuring a bearing angle from the East or horizontal line instead of clockwise from true North.",
    remediation: "Bearings MUST always be measured clockwise starting from true North (000°) as a 3-figure angle (000° to 360°).",
  },
  "misc-sohcahtoa-ratio": {
    id: "misc-sohcahtoa-ratio",
    code: "MISC-TRIG-01",
    title: "Trigonometric Ratio Misidentification",
    topic: "Trigonometry",
    description: "Using sine instead of cosine or confusing adjacent with opposite relative to the non-right angle of reference.",
    remediation: "First label Hypotenuse (longest side opposite 90°), Opposite (side directly across from target angle θ), and Adjacent (side next to θ). SOH: sin = O/H, CAH: cos = A/H, TOA: tan = O/A.",
  },
  "misc-sine-cosine-rule-choice": {
    id: "misc-sine-cosine-rule-choice",
    code: "MISC-TRIG-02",
    title: "Sine Rule vs Cosine Rule Selection",
    topic: "Trigonometry",
    description: "Attempting to apply the Sine Rule when only two sides and the included angle (SAS) are known without an opposite matching pair.",
    remediation: "Use Sine Rule when you have a known side-angle opposite pair (a/sin A = b/sin B). Use Cosine Rule when given SAS (two sides and included angle) or SSS (three sides).",
  },

  // 3. Commercial & Quantitative
  "misc-profit-margin-markup": {
    id: "misc-profit-margin-markup",
    code: "MISC-COM-01",
    title: "Margin vs Markup Confusion",
    topic: "Commercial Arithmetic",
    description: "Calculating profit percentage over selling price instead of cost price (confusing profit margin with percentage markup).",
    remediation: "Standard profit percentage (markup) is always calculated on Cost Price: (Profit / Cost Price) × 100%. Profit Margin is (Profit / Selling Price) × 100%.",
  },
  "misc-interest-formula": {
    id: "misc-interest-formula",
    code: "MISC-COM-02",
    title: "Simple vs Compound Interest Growth",
    topic: "Commercial Arithmetic",
    description: "Treating compound interest as linear simple interest without adding accumulated interest to the principal for subsequent periods.",
    remediation: "Simple interest I = PRT/100 is constant each year. Compound interest A = P(1 + r/100)^t compounds interest onto principal at the end of each period.",
  },
  "misc-unit-conversion-area-vol": {
    id: "misc-unit-conversion-area-vol",
    code: "MISC-MEAS-01",
    title: "Area and Volume Unit Scaling Slip",
    topic: "Measurement & Units",
    description: "Converting 1 m² to 100 cm² (using linear scale factor 100) instead of 10,000 cm² (100²).",
    remediation: "For area, square the linear conversion factor: 1 m = 100 cm ⇒ 1 m² = (100 cm)² = 10,000 cm². For volume, cube it: 1 m³ = 1,000,000 cm³.",
  },
  "misc-perimeter-area-confuse": {
    id: "misc-perimeter-area-confuse",
    code: "MISC-MEAS-02",
    title: "Perimeter vs Area Confusion",
    topic: "Perimeter & Area",
    description: "Computing perimeter using area formula or failing to add all outer boundaries of composite shapes.",
    remediation: "Perimeter is the total linear distance around the outer boundary (sum of all outer sides). Area is the 2D surface enclosed inside the boundary.",
  },
  "misc-variation-inversion": {
    id: "misc-variation-inversion",
    code: "MISC-ALG-06",
    title: "Direct vs Inverse Variation Inversion",
    topic: "Variation",
    description: "Writing y = kx for inverse variation instead of y = k/x, or writing y = k/x for direct variation.",
    remediation: "Direct variation means when x increases, y increases: y = kx. Inverse variation means when x increases, y decreases: y = k/x.",
  },
  "misc-premature-rounding": {
    id: "misc-premature-rounding",
    code: "MISC-NUM-05",
    title: "Premature Rounding Error",
    topic: "Calculations & Bounds",
    description: "Rounding intermediate working values to 1 or 2 significant figures, causing large discrepancies in the final examination answer.",
    remediation: "Keep at least 4 significant figures or exact fraction values during intermediate calculation steps, and only round at the final step.",
  },
  "misc-sequence-pattern-slip": {
    id: "misc-sequence-pattern-slip",
    code: "MISC-NUM-06",
    title: "Sequence Pattern Misidentification",
    topic: "Number Sequences",
    description: "Assuming an arithmetic common difference when a sequence is geometric (multiplying by ratio r), or vice versa.",
    remediation: "Check both the differences between terms (d = T₂ - T₁) and ratios (r = T₂ / T₁) across at least three terms before concluding the pattern.",
  },
};

export function getMisconception(id: string): MisconceptionRecord | undefined {
  return MISCONCEPTION_LIBRARY[id];
}

