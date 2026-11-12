/**
 * Trainbow HUB: Mathematics Weak Area Deficiency Registry
 * Mapped to WAEC Chief Examiners' Reports, JAMB UTME IBASS Specifications,
 * NERDC Senior/Basic Curriculum, and Cambridge IGCSE Syllabus.
 */

import { WeakAreaRecord } from "./english-deficiency-map";

export type MathSkillArea =
  | "NUMERATION_ARITHMETIC"
  | "ALGEBRAIC_PROCESSES"
  | "GEOMETRY_TRIGONOMETRY"
  | "CALCULUS_FUNCTIONS"
  | "STATISTICS_PROBABILITY"
  | "QUANTITATIVE_REASONING"
  | "EXAM_TECHNIQUE_SPEED";

export const MATHEMATICS_WEAK_AREAS: WeakAreaRecord[] = [
  // 1. CBT EXAM TECHNIQUE & SPEED
  {
    code: "WA-MTH-CBT-01",
    title: "CBT Time Management & Pacing in UTME",
    skillArea: "EXAM_TECHNIQUE_SPEED" as any,
    levels: ["JAMB UTME Prep"],
    description:
      "Candidates spend over 2 minutes on complex questions on first pass rather than securing rapid deduction marks across algebra and arithmetic first.",
    evidenceSource: "JAMB UTME Examination Statistics & Chief Examiner Review",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-CBT-02",
    title: "Option Elimination via Parity & Back-Substitution",
    skillArea: "EXAM_TECHNIQUE_SPEED" as any,
    levels: ["JAMB UTME Prep", "WAEC Prep"],
    description:
      "Failing to test extreme values (x = 0, 1) or sign parity of the constant term to quickly discard 2 out of 4 multiple-choice options before full calculation.",
    evidenceSource: "JAMB IBASS Speed Tactics Manual",
    evidenceDate: "2023-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 2. NUMERATION & ARITHMETIC
  {
    code: "WA-MTH-NUM-01",
    title: "Fraction Operations & Common Denominators",
    skillArea: "NUMERATION_ARITHMETIC" as any,
    levels: ["Primary 4-6", "JSS 1-3", "WAEC Prep"],
    description:
      "Adding or subtracting fractions by adding denominators directly (e.g. 1/3 + 1/4 = 2/7) instead of converting to the lowest common multiple (LCM).",
    evidenceSource: "WAEC Chief Examiners' Report (General Mathematics Paper 1)",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-NUM-02",
    title: "Surd Rationalization & Conjugate Denominators",
    skillArea: "NUMERATION_ARITHMETIC" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Errors in multiplying binomial surd denominators by the proper conjugate (a - sqrt(b)) and failing to expand the difference of squares in the denominator.",
    evidenceSource: "WAEC Paper 1 & 2 Examination Findings",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-NUM-03",
    title: "Logarithmic Laws & Change of Base Transformations",
    skillArea: "NUMERATION_ARITHMETIC" as any,
    levels: ["SS 1-3", "JAMB UTME Prep", "Cambridge IGCSE"],
    description:
      "Confusing log(A + B) with log(A) + log(B) or misapplying the quotient and power laws when simplifying logarithmic expressions.",
    evidenceSource: "JAMB UTME Syllabus (IBASS) Performance Analytics",
    evidenceDate: "2023-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-NUM-04",
    title: "Directed Numbers & Negative Integer Signs",
    skillArea: "NUMERATION_ARITHMETIC" as any,
    levels: ["Primary 6", "JSS 1-3", "BECE Prep"],
    description:
      "Confusion when subtracting negative numbers (-(-b) = +b) or combining multiple signs in algebraic brackets.",
    evidenceSource: "BECE Chief Examiners' Report (Basic Mathematics)",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 3. ALGEBRAIC PROCESSES
  {
    code: "WA-MTH-ALG-01",
    title: "Quadratic Factorization & Difference of Two Squares",
    skillArea: "ALGEBRAIC_PROCESSES" as any,
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Treating (a + b)^2 as a^2 + b^2 and omitting the middle term 2ab, or failing to identify differences of squares like 4x^2 - 9 = (2x - 3)(2x + 3).",
    evidenceSource: "WAEC Chief Examiners' Report (Algebraic Processes)",
    evidenceDate: "2021-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-ALG-02",
    title: "The Quadratic Formula & Discriminant Analysis",
    skillArea: "ALGEBRAIC_PROCESSES" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Sign errors in substituting -b when b is negative, or misinterpreting b^2 - 4ac < 0 as having real roots.",
    evidenceSource: "WAEC Chief Examiners' Report",
    evidenceDate: "2023-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-ALG-03",
    title: "Simultaneous Equations & Systems of Linear/Non-linear",
    skillArea: "ALGEBRAIC_PROCESSES" as any,
    levels: ["JSS 3", "SS 1-3", "WAEC Prep"],
    description:
      "Incorrect elimination of variables when signs differ, or arithmetic slips when substituting into the quadratic equation in non-linear systems.",
    evidenceSource: "WAEC Paper 2 Theory Solutions",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-MTH-ALG-04",
    title: "Sequences & Series: AP & GP nth Term and Sums",
    skillArea: "ALGEBRAIC_PROCESSES" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing common difference d = T2 - T1 with ratio r = T2 / T1, and misapplying the sum to infinity S_inf = a / (1 - r) when |r| >= 1.",
    evidenceSource: "WAEC Further & General Mathematics Reports",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 4. GEOMETRY & TRIGONOMETRY
  {
    code: "WA-MTH-GEO-01",
    title: "Circle Theorems: Angle at Centre vs Circumference",
    skillArea: "GEOMETRY_TRIGONOMETRY" as any,
    levels: ["SS 1-3", "WAEC Prep", "Cambridge IGCSE"],
    description:
      "Confusing angle at the centre (2x) with angle at the circumference (x), or missing opposite angles in cyclic quadrilaterals summing to 180 degrees.",
    evidenceSource: "WAEC Chief Examiners' Report (Geometry Section)",
    evidenceDate: "2021-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-GEO-02",
    title: "Right-Angled Trigonometry (SOHCAHTOA) & CAST Rule",
    skillArea: "GEOMETRY_TRIGONOMETRY" as any,
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Misidentifying the Opposite and Adjacent sides relative to the reference angle, or failing to assign negative signs to cosine in the 2nd quadrant.",
    evidenceSource: "WAEC Paper 1 & 2 Trigonometry Diagnostic",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-GEO-03",
    title: "Sine & Cosine Rules for Non-Right Triangles",
    skillArea: "GEOMETRY_TRIGONOMETRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep", "Cambridge IGCSE"],
    description:
      "Applying the Sine Rule when the Cosine Rule is required (SAS or SSS conditions), or forgetting the minus sign in a^2 = b^2 + c^2 - 2bc*cos(A).",
    evidenceSource: "WAEC Chief Examiners' Report",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-GEO-04",
    title: "Three-Figure Bearings & Angles of Elevation",
    skillArea: "GEOMETRY_TRIGONOMETRY" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Measuring bearings from the horizontal or East instead of clockwise from North (000° to 360°), and misinterpreting back-bearings.",
    evidenceSource: "WAEC Paper 2 Mensuration and Bearings Key",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-GEO-05",
    title: "Pythagoras' Theorem & Right-Angled Triangles",
    skillArea: "GEOMETRY_TRIGONOMETRY" as any,
    levels: ["JSS 2-3", "BECE Prep", "Primary 6"],
    description:
      "Applying a^2 + b^2 = c^2 where c is not the hypotenuse opposite the 90° angle, or failing to take square roots of the resulting sum.",
    evidenceSource: "BECE Mathematics Chief Examiners' Report",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 5. CALCULUS & MATRICES (JAMB & ADVANCED)
  {
    code: "WA-MTH-CAL-01",
    title: "Differential Calculus: Power & Chain Rule",
    skillArea: "CALCULUS_FUNCTIONS" as any,
    levels: ["SS 3", "JAMB UTME Prep"],
    description:
      "Failing to multiply by the derivative of the inside function in composite functions, or miscalculating the derivative of negative and fractional powers.",
    evidenceSource: "JAMB UTME Calculus Topic Diagnostics",
    evidenceDate: "2023-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-CAL-02",
    title: "Definite Integrals & Areas Under Curves",
    skillArea: "CALCULUS_FUNCTIONS" as any,
    levels: ["SS 3", "JAMB UTME Prep"],
    description:
      "Errors in applying upper and lower limits [F(b) - F(a)] or omitting the division by (n + 1) during polynomial integration.",
    evidenceSource: "JAMB UTME Calculus Section Report",
    evidenceDate: "2023-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-MAT-01",
    title: "2x2 Matrices: Determinants & Inverse Systems",
    skillArea: "CALCULUS_FUNCTIONS" as any,
    levels: ["SS 2-3", "JAMB UTME Prep"],
    description:
      "Miscalculating det(A) = ad - bc with sign reversals, or misplacing the negative signs on off-diagonal elements in the adjugate matrix.",
    evidenceSource: "JAMB UTME Mathematics Examiner Analysis",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 6. STATISTICS & PROBABILITY
  {
    code: "WA-MTH-STT-01",
    title: "Cumulative Frequency Curves (Ogives) & Quartiles",
    skillArea: "STATISTICS_PROBABILITY" as any,
    levels: ["SS 2-3", "WAEC Prep", "Cambridge IGCSE"],
    description:
      "Plotting cumulative frequency against class midpoints instead of upper class boundaries, or misreading median and interquartile range from axes.",
    evidenceSource: "WAEC Paper 2 Statistics Questions",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-STT-02",
    title: "Probability Rules: Independent & Dependent Events",
    skillArea: "STATISTICS_PROBABILITY" as any,
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing mutually exclusive events (addition rule) with independent events (multiplication rule), or failing to reduce total items when sampling without replacement.",
    evidenceSource: "WAEC Chief Examiners' Report (Statistics & Probability)",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 7. PRIMARY & QUANTITATIVE REASONING
  {
    code: "WA-MTH-PRI-01",
    title: "Quantitative Number Pattern & Logic Puzzles",
    skillArea: "QUANTITATIVE_REASONING" as any,
    levels: ["Primary 5-6", "Common Entrance Prep"],
    description:
      "Difficulty identifying the hidden rule in circle, box, and triangle number puzzles (e.g. top * bottom + left = right).",
    evidenceSource: "National Common Entrance Examination (NCEE) Mathematics Analysis",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-PRI-02",
    title: "Place Value up to Millions & Roman Numerals",
    skillArea: "NUMERATION_ARITHMETIC" as any,
    levels: ["Primary 4-6", "Common Entrance Prep"],
    description:
      "Confusing Roman numeral subtraction rules (IV = 4, IX = 9, XL = 40, XC = 90) or misreading zeros in large place values.",
    evidenceSource: "NCEE Quantitative Aptitude Diagnostic",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 8. CAMBRIDGE IGCSE EXTENDED
  {
    code: "WA-MTH-IGC-01",
    title: "Function Notation, Composite & Inverse Functions",
    skillArea: "ALGEBRAIC_PROCESSES" as any,
    levels: ["Cambridge IGCSE", "SS 2-3"],
    description:
      "Evaluating fg(x) from left to right instead of right to left (evaluating g first, then f), or confusing f^-1(x) with 1 / f(x).",
    evidenceSource: "Cambridge IGCSE Mathematics (0580) Examiner Report",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-IGC-02",
    title: "Upper & Lower Bounds in Compound Calculations",
    skillArea: "NUMERATION_ARITHMETIC" as any,
    levels: ["Cambridge IGCSE"],
    description:
      "Using the upper bound of both numerator and denominator when finding the maximum value of a quotient, instead of Max = Upper / Lower.",
    evidenceSource: "Cambridge IGCSE Paper 4 Extended Mathematics Report",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-MTH-IGC-03",
    title: "Column Vectors & Geometric Proofs of Collinearity",
    skillArea: "GEOMETRY_TRIGONOMETRY" as any,
    levels: ["Cambridge IGCSE", "SS 3"],
    description:
      "Failing to express vectors in terms of common scalar multiples (k * v) and a shared point to prove that points lie on a straight line.",
    evidenceSource: "Cambridge IGCSE Vector Geometry Paper 4 Report",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
];

export function getMathWeakAreaByCode(code: string): WeakAreaRecord | undefined {
  return MATHEMATICS_WEAK_AREAS.find((wa) => wa.code === code);
}
