export interface QuizQuestion {
  id: string;
  prompt: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  topic: string;
}

export interface LessonQuiz {
  id: string;
  title: string;
  passPercentage: number;
  questions: QuizQuestion[];
}

export interface LessonWorksheet {
  title: string;
  filename: string;
  size: string;
  type: string;
}

export interface DetailedLesson {
  id: string;
  courseSlug: string;
  title: string;
  moduleTitle: string;
  durationMinutes: number;
  isFreePreview: boolean;
  videoTitle: string;
  videoThumbnail: string;
  keyObjectives: string[];
  markdownNotes: string;
  worksheets: LessonWorksheet[];
  quiz: LessonQuiz;
}

export const DETAILED_LESSONS: Record<string, DetailedLesson> = {
  // Course: WAEC & SSCE Comprehensive Mathematics Mastery
  "l1": {
    id: "l1",
    courseSlug: "waec-ssce-mathematics-mastery",
    title: "Conversion of Number Bases (Fractions & Decimals)",
    moduleTitle: "Module 1: Number Bases, Modular Arithmetic & Logarithms",
    durationMinutes: 45,
    isFreePreview: true,
    videoTitle: "WASSCE Masterclass: Converting Fractional Number Bases and Working with Unknown Base Subscripts",
    videoThumbnail: "/images/lessons/waec-math-l1.jpg",
    keyObjectives: [
      "Understand place value positional notation in non-decimal integer and fractional bases",
      "Convert fractional binary, octal, and base-n representations to base 10",
      "Apply the successive multiplication algorithm for decimal fractions to base n",
      "Formulate and solve algebraic linear equations for unknown base subscripts (e.g. 23_x = 19_10)",
    ],
    markdownNotes: `
# Number Bases: Fractions, Decimals, and Subscript Equations

In the West African Senior School Certificate Examination (WASSCE), **Number Bases** is a guaranteed question in Paper 1 (Objective questions 1–3) and frequently appears as a 6-mark sub-question in Paper 2 (Theory Section A).

---

## 1. Place Value Positional Notation for Fractions

Just as digits to the left of the radix point represent positive powers of the base ($b^0, b^1, b^2, \\dots$), digits to the right represent negative powers of the base ($b^{-1}, b^{-2}, b^{-3}, \\dots$).

$$\\text{Value} = \\sum_{i=1}^{m} d_i \\cdot b^{-i} = d_1 \\cdot b^{-1} + d_2 \\cdot b^{-2} + d_3 \\cdot b^{-3} + \\dots$$

### Worked Example 1: Binary Fraction to Base 10
**Problem (WAEC 2022 Q2b):** Convert $110.101_2$ to a decimal number (base 10).

**Solution Step-by-Step:**
1. **Separate integer and fractional components:**
   - Integer part: $110_2$
   - Fractional part: $0.101_2$
2. **Expand the integer part:**
   $$1 \\cdot 2^2 + 1 \\cdot 2^1 + 0 \\cdot 2^0 = 4 + 2 + 0 = 6$$
3. **Expand the fractional part:**
   $$1 \\cdot 2^{-1} + 0 \\cdot 2^{-2} + 1 \\cdot 2^{-3} = \\frac{1}{2} + 0 + \\frac{1}{8} = 0.5 + 0.125 = 0.625$$
4. **Sum the components:**
   $$6 + 0.625 = 6.625_{10}$$

> **WAEC Examiner Tip:** Always write the subscript base in your final answer (e.g., $(6.625)_{10}$). Omitting the subscript loses the 1 accuracy mark ($A_1$).

---

## 2. Converting Decimal Fractions to Other Bases: Successive Multiplication

To convert a fractional decimal (such as $0.6875_{10}$) into base $n$, multiply successively by $n$ and record the integer carry:

| Multiplication Step | Product | Carry (Integer) | Remaining Fraction |
| :--- | :--- | :--- | :--- |
| $0.6875 \\times 2$ | $1.375$ | **1** | $0.375$ |
| $0.375 \\times 2$ | $0.75$ | **0** | $0.75$ |
| $0.75 \\times 2$ | $1.50$ | **1** | $0.50$ |
| $0.50 \\times 2$ | $1.00$ | **1** | $0.00$ (Terminates) |

Reading the integer carries from top to bottom:
$$0.6875_{10} = 0.1011_2$$

---

## 3. Solving for Unknown Bases ($x$)

A classic WAEC question asks students to solve for an unknown base:
$$\\text{If } 23_x = 19_{10}, \\text{ find } x.$$

**Expansion:**
$$2x^1 + 3x^0 = 19$$
$$2x + 3(1) = 19$$
$$2x = 19 - 3 = 16 \\implies x = 8$$

*(Notice that the base $x$ must always be strictly greater than the highest digit in the numeral. Since 3 is present, $x \\ge 4$, which validates $x = 8$.)*
    `,
    worksheets: [
      {
        title: "WAEC Number Bases Past Paper Drills (2018–2024)",
        filename: "WAEC_Number_Bases_Past_Questions_2024.pdf",
        size: "1.4 MB",
        type: "PDF Document",
      },
      {
        title: "Formula Summary & Radix Conversion Cheat Sheet",
        filename: "Trainbow_Number_Bases_Formula_Sheet.pdf",
        size: "420 KB",
        type: "PDF Document",
      },
    ],
    quiz: {
      id: "quiz-l1",
      title: "Lesson 1 Checkpoint: Number Bases & Fractional Radix",
      passPercentage: 65,
      questions: [
        {
          id: "q1",
          prompt: "Convert the fractional binary number 101.11₂ into decimal (base 10).",
          options: [
            { id: "A", text: "5.75₁₀" },
            { id: "B", text: "5.50₁₀" },
            { id: "C", text: "6.25₁₀" },
            { id: "D", text: "5.25₁₀" },
          ],
          correctOptionId: "A",
          explanation: "Integer part: 1·2² + 0·2¹ + 1·2⁰ = 4 + 0 + 1 = 5. Fractional part: 1·2⁻¹ + 1·2⁻² = 0.5 + 0.25 = 0.75. Sum: 5.75₁₀.",
          topic: "Binary Base Expansions",
        },
        {
          id: "q2",
          prompt: "Convert the decimal fraction 0.375₁₀ to base 2 (binary).",
          options: [
            { id: "A", text: "0.011₂" },
            { id: "B", text: "0.101₂" },
            { id: "C", text: "0.110₂" },
            { id: "D", text: "0.001₂" },
          ],
          correctOptionId: "A",
          explanation: "0.375 × 2 = 0.75 (carry 0); 0.75 × 2 = 1.50 (carry 1); 0.50 × 2 = 1.00 (carry 1). Reading downwards gives 0.011₂.",
          topic: "Fractional Base Conversions",
        },
        {
          id: "q3",
          prompt: "If 23ₓ = 19₁₀, find the value of the unknown base x.",
          options: [
            { id: "A", text: "x = 7" },
            { id: "B", text: "x = 8" },
            { id: "C", text: "x = 9" },
            { id: "D", text: "x = 6" },
          ],
          correctOptionId: "B",
          explanation: "Expanding 23ₓ: 2x¹ + 3x⁰ = 19 ⇒ 2x + 3 = 19 ⇒ 2x = 16 ⇒ x = 8.",
          topic: "Unknown Number Bases & Linear Formulation",
        },
      ],
    },
  },

  "l2": {
    id: "l2",
    courseSlug: "waec-ssce-mathematics-mastery",
    title: "Modular Arithmetic & Cyclic Algebra",
    moduleTitle: "Module 1: Number Bases, Modular Arithmetic & Logarithms",
    durationMinutes: 40,
    isFreePreview: false,
    videoTitle: "Clock Arithmetic and Solving Congruence Equations in WAEC Mathematics",
    videoThumbnail: "/images/lessons/waec-math-l2.jpg",
    keyObjectives: [
      "Understand congruence relations modulo n",
      "Construct and interpret modular addition and multiplication Cayley tables",
      "Find multiplicative inverses in prime modulus fields",
      "Solve linear congruence equations such as 3x ≡ 2 (mod 5)",
    ],
    markdownNotes: `
# Modular Arithmetic & Cyclic Systems

Modular arithmetic (often called clock arithmetic) deals with integers where numbers "wrap around" after reaching a certain modulus $n$.

---

## 1. Congruence Relation Definition

We write:
$$a \\equiv b \\pmod{n}$$
if $n$ divides $(a - b)$ without remainder, meaning $a$ and $b$ leave the exact same remainder when divided by $n$.

### Example:
$17 \\equiv 2 \\pmod 5$ because $17 = 3(5) + 2$.

---

## 2. Solving Linear Congruence Equations

To solve $3x \\equiv 2 \\pmod 5$:
1. We test integers $x \\in \\{0, 1, 2, 3, 4\\}$:
   - $x = 0 \\implies 3(0) = 0 \\not\\equiv 2$
   - $x = 1 \\implies 3(1) = 3 \\not\\equiv 2$
   - $x = 2 \\implies 3(2) = 6 \\equiv 1 \\not\\equiv 2$
   - $x = 3 \\implies 3(3) = 9 \\not\\equiv 2$
   - $x = 4 \\implies 3(4) = 12 = 2(5) + 2 \\equiv 2 \\pmod 5$
2. Therefore, the solution is **$x = 4$**.
    `,
    worksheets: [
      {
        title: "Modular Arithmetic Tables & Practice Problems",
        filename: "WAEC_Modular_Arithmetic_Drill.pdf",
        size: "820 KB",
        type: "PDF Document",
      },
    ],
    quiz: {
      id: "quiz-l2",
      title: "Lesson 2 Checkpoint: Modular Congruence",
      passPercentage: 65,
      questions: [
        {
          id: "q2_1",
          prompt: "What is 29 (mod 7)?",
          options: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "3" },
            { id: "D", text: "4" },
          ],
          correctOptionId: "A",
          explanation: "29 ÷ 7 = 4 with remainder 1. Hence 29 ≡ 1 (mod 7).",
          topic: "Modular Reduction",
        },
        {
          id: "q2_2",
          prompt: "Find the solution to 3x ≡ 2 (mod 5) where x ∈ {0, 1, 2, 3, 4}.",
          options: [
            { id: "A", text: "x = 1" },
            { id: "B", text: "x = 4" },
            { id: "C", text: "x = 3" },
            { id: "D", text: "x = 2" },
          ],
          correctOptionId: "B",
          explanation: "Testing x = 4: 3(4) = 12 = 2(5) + 2 ≡ 2 (mod 5).",
          topic: "Linear Congruence Equations",
        },
      ],
    },
  },

  "l3": {
    id: "l3",
    courseSlug: "waec-ssce-mathematics-mastery",
    title: "Indices & Logarithmic Laws with WAEC Past Problems",
    moduleTitle: "Module 1: Number Bases, Modular Arithmetic & Logarithms",
    durationMinutes: 50,
    isFreePreview: true,
    videoTitle: "Deriving Laws of Indices and Tackling High-Frequency WAEC Logarithm Theory",
    videoThumbnail: "/images/lessons/waec-math-l3.jpg",
    keyObjectives: [
      "Master the 7 fundamental laws of indices including negative and fractional powers",
      "Apply the product, quotient, and power rules of logarithms",
      "Perform change-of-base operations to simplify complex algebraic fractions",
      "Solve exponential equations involving quadratic substitutions (e.g. 2^(2x) - 5(2^x) + 4 = 0)",
    ],
    markdownNotes: `
# Indices and Logarithms: Core Rules and WAEC Problem Types

Indices and logarithms form the bedrock of secondary algebraic manipulation.

---

## 1. Summary of Indicial Laws

1. **Product Rule:** $a^m \\cdot a^n = a^{m+n}$
2. **Quotient Rule:** $\\frac{a^m}{a^n} = a^{m-n}$
3. **Power of Power:** $(a^m)^n = a^{mn}$
4. **Zero Index:** $a^0 = 1 \\quad (a \\neq 0)$
5. **Negative Index:** $a^{-n} = \\frac{1}{a^n}$
6. **Fractional Index:** $a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$

---

## 2. Exponential Equation via Quadratic Substitution

**Problem:** Solve $2^{2x} - 5 \\cdot 2^x + 4 = 0$.

1. Let $y = 2^x$. Then $2^{2x} = (2^x)^2 = y^2$.
2. Substitute: $y^2 - 5y + 4 = 0$.
3. Factorize: $(y - 4)(y - 1) = 0 \\implies y = 4 \\text{ or } y = 1$.
4. Re-substitute $y = 2^x$:
   - $2^x = 4 = 2^2 \\implies x = 2$
   - $2^x = 1 = 2^0 \\implies x = 0$
5. Final Solution: **$x \\in \\{0, 2\\}$**.
    `,
    worksheets: [
      {
        title: "Indices & Logarithms Comprehensive Practice Pack",
        filename: "WAEC_Indices_Logarithms_Mastery.pdf",
        size: "1.1 MB",
        type: "PDF Document",
      },
    ],
    quiz: {
      id: "quiz-l3",
      title: "Lesson 3 Checkpoint: Exponential Equations & Logs",
      passPercentage: 65,
      questions: [
        {
          id: "q3_1",
          prompt: "Solve for x if 2^(2x) - 5(2^x) + 4 = 0.",
          options: [
            { id: "A", text: "x = 0 or x = 2" },
            { id: "B", text: "x = 1 or x = 4" },
            { id: "C", text: "x = -1 or x = 2" },
            { id: "D", text: "x = 2 only" },
          ],
          correctOptionId: "A",
          explanation: "Let y = 2^x. Then y² - 5y + 4 = 0 gives y = 1 or y = 4. Since 2^x = 1 ⇒ x = 0; and 2^x = 4 ⇒ x = 2.",
          topic: "Exponential Equations & Quadratic Substitution",
        },
        {
          id: "q3_2",
          prompt: "Simplify: log₁₀(25) + log₁₀(4).",
          options: [
            { id: "A", text: "2" },
            { id: "B", text: "1" },
            { id: "C", text: "10" },
            { id: "D", text: "100" },
          ],
          correctOptionId: "A",
          explanation: "By the product rule, log₁₀(25) + log₁₀(4) = log₁₀(25 × 4) = log₁₀(100) = log₁₀(10²) = 2.",
          topic: "Logarithmic Product & Power Rules",
        },
      ],
    },
  },
};

export function getLessonById(lessonId: string): DetailedLesson | null {
  return DETAILED_LESSONS[lessonId] ?? null;
}
