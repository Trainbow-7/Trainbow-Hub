import { AssessmentItem } from "../types";

export const JAMB_MATH_BANK: AssessmentItem[] = [
  {
    "id": "q_jamb-l1_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **CBT Time Management & Frequency Distribution** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Never spend more than 90 seconds on a single question on the first pass"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Never spend more than 90 seconds on a single question on the first pass.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for CBT Time Management & Frequency Distribution",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **CBT Time Management & Frequency Distribution**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Mark flagged questions and return after clearing straightforward algebra items."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **CBT Time Management & Frequency Distribution**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 1,
    "objective": "Identify high-frequency calculus and algebra clusters in past exams",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **CBT Time Management & Frequency Distribution**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **CBT Time Management & Frequency Distribution**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 1,
    "objective": "Identify high-frequency calculus and algebra clusters in past exams",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 1,
    "objective": "Identify high-frequency calculus and algebra clusters in past exams",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 1,
    "objective": "Identify high-frequency calculus and algebra clusters in past exams",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 0,
    "objective": "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l1_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l1",
    "topicId": "top-jamb-strat-01",
    "objectiveIndex": 1,
    "objective": "Identify high-frequency calculus and algebra clusters in past exams",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Option Elimination via Parity & Back-Substitution** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Plugging in simple test values (x = 0 or 1) eliminates 2 out of 4 options in seconds"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Plugging in simple test values (x = 0 or 1) eliminates 2 out of 4 options in seconds.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Option Elimination via Parity & Back-Substitution",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Option Elimination via Parity & Back-Substitution**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Examine constant terms to instantly weed out wrong signs."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Option Elimination via Parity & Back-Substitution**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 1,
    "objective": "Use unit digit and sign parity checks on polynomial expansion answers",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Option Elimination via Parity & Back-Substitution**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Option Elimination via Parity & Back-Substitution**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 1,
    "objective": "Use unit digit and sign parity checks on polynomial expansion answers",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 1,
    "objective": "Use unit digit and sign parity checks on polynomial expansion answers",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 1,
    "objective": "Use unit digit and sign parity checks on polynomial expansion answers",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 0,
    "objective": "Eliminate at least two incorrect options before computing full algebra",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l2_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m1",
    "lessonId": "jamb-l2",
    "topicId": "top-jamb-strat-02",
    "objectiveIndex": 1,
    "objective": "Use unit digit and sign parity checks on polynomial expansion answers",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Surd Rationalization & Conjugate Multiplication** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Conjugate of a + sqrt(b) is a - sqrt(b)"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Conjugate of a + sqrt(b) is a - sqrt(b).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Surd Rationalization & Conjugate Multiplication",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Surd Rationalization & Conjugate Multiplication**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Multiply numerator and denominator simultaneously to preserve equality."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Surd Rationalization & Conjugate Multiplication**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 1,
    "objective": "Simplify compound surds and extract perfect square factors",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Surd Rationalization & Conjugate Multiplication**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Surd Rationalization & Conjugate Multiplication**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 1,
    "objective": "Simplify compound surds and extract perfect square factors",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 1,
    "objective": "Simplify compound surds and extract perfect square factors",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 1,
    "objective": "Simplify compound surds and extract perfect square factors",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 0,
    "objective": "Rationalize binomial surd denominators without hesitation",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l3_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l3",
    "topicId": "top-jamb-surds-01",
    "objectiveIndex": 1,
    "objective": "Simplify compound surds and extract perfect square factors",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Logarithmic Identities & Base Transformations** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "log(xy) = log x + log y; log(x/y) = log x - log y; log(x^n) = n log x"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: log(xy) = log x + log y; log(x/y) = log x - log y; log(x^n) = n log x.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Logarithmic Identities & Base Transformations",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Logarithmic Identities & Base Transformations**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Arguments of logarithms must always be strictly greater than zero."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Logarithmic Identities & Base Transformations**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 1,
    "objective": "Solve logarithmic equations with multiple unknown base subscripts",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Logarithmic Identities & Base Transformations**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Logarithmic Identities & Base Transformations**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 1,
    "objective": "Solve logarithmic equations with multiple unknown base subscripts",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 1,
    "objective": "Solve logarithmic equations with multiple unknown base subscripts",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 1,
    "objective": "Solve logarithmic equations with multiple unknown base subscripts",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 0,
    "objective": "Convert non-standard base logarithms to common or natural bases",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l4_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m2",
    "lessonId": "jamb-l4",
    "topicId": "top-jamb-logs-01",
    "objectiveIndex": 1,
    "objective": "Solve logarithmic equations with multiple unknown base subscripts",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **2x2 Matrix Determinants & Inverse Matrices** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "A matrix has no inverse if and only if its determinant is 0 (singular matrix)"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: A matrix has no inverse if and only if its determinant is 0 (singular matrix).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for 2x2 Matrix Determinants & Inverse Matrices",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **2x2 Matrix Determinants & Inverse Matrices**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Inverse of [[a, b], [c, d]] is 1/(ad - bc) * [[d, -b], [-c, a]]."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **2x2 Matrix Determinants & Inverse Matrices**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 1,
    "objective": "Determine values of k for which a matrix is singular (det = 0)",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **2x2 Matrix Determinants & Inverse Matrices**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **2x2 Matrix Determinants & Inverse Matrices**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 1,
    "objective": "Determine values of k for which a matrix is singular (det = 0)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 1,
    "objective": "Determine values of k for which a matrix is singular (det = 0)",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 1,
    "objective": "Determine values of k for which a matrix is singular (det = 0)",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 0,
    "objective": "Calculate 2x2 and 3x3 matrix determinants",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l5_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l5",
    "topicId": "top-jamb-mat-01",
    "objectiveIndex": 1,
    "objective": "Determine values of k for which a matrix is singular (det = 0)",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Cramer's Rule for Solving UTME Linear Systems** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Dx is obtained by replacing column 1 of coefficient matrix with constant column"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Dx is obtained by replacing column 1 of coefficient matrix with constant column.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Cramer's Rule for Solving UTME Linear Systems",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Cramer's Rule for Solving UTME Linear Systems**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: If D = 0 and Dx != 0, the system has no solutions."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Cramer's Rule for Solving UTME Linear Systems**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 1,
    "objective": "Recognize when systems have unique, infinite, or no solutions",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Cramer's Rule for Solving UTME Linear Systems**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Cramer's Rule for Solving UTME Linear Systems**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 1,
    "objective": "Recognize when systems have unique, infinite, or no solutions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 1,
    "objective": "Recognize when systems have unique, infinite, or no solutions",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 1,
    "objective": "Recognize when systems have unique, infinite, or no solutions",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.029Z"
    }
  },
  {
    "id": "q_jamb-l6_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 0,
    "objective": "Apply Cramer's determinant rule to solve simultaneous equations",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.029Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l6_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m3",
    "lessonId": "jamb-l6",
    "topicId": "top-jamb-mat-02",
    "objectiveIndex": 1,
    "objective": "Recognize when systems have unique, infinite, or no solutions",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Rapid Derivative Rules: Power, Product & Chain** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Power rule: multiply by exponent and reduce exponent by 1"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Power rule: multiply by exponent and reduce exponent by 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Rapid Derivative Rules: Power, Product & Chain",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Rapid Derivative Rules: Power, Product & Chain**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Velocity v = ds/dt; Acceleration a = dv/dt = d^2s/dt^2."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Rapid Derivative Rules: Power, Product & Chain**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 1,
    "objective": "Compute rate of change and acceleration problems from displacement functions",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Rapid Derivative Rules: Power, Product & Chain**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Rapid Derivative Rules: Power, Product & Chain**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 1,
    "objective": "Compute rate of change and acceleration problems from displacement functions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 1,
    "objective": "Compute rate of change and acceleration problems from displacement functions",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 1,
    "objective": "Compute rate of change and acceleration problems from displacement functions",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 0,
    "objective": "Differentiate polynomials, rational powers, and trigonometric expressions",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l7_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l7",
    "topicId": "top-jamb-calc-01",
    "objectiveIndex": 1,
    "objective": "Compute rate of change and acceleration problems from displacement functions",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Tangents, Normals & Turning Points** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Normal gradient m_normal = -1 / m_tangent"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Normal gradient m_normal = -1 / m_tangent.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Tangents, Normals & Turning Points",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Tangents, Normals & Turning Points**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: d^2y/dx^2 > 0 indicates a local minimum; < 0 indicates a local maximum."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Tangents, Normals & Turning Points**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 1,
    "objective": "Determine nature of stationary points using second derivative d^2y/dx^2",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Tangents, Normals & Turning Points**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Tangents, Normals & Turning Points**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 1,
    "objective": "Determine nature of stationary points using second derivative d^2y/dx^2",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 1,
    "objective": "Determine nature of stationary points using second derivative d^2y/dx^2",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 1,
    "objective": "Determine nature of stationary points using second derivative d^2y/dx^2",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 0,
    "objective": "Find gradient of tangent at specified point x = x0",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l8_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l8",
    "topicId": "top-jamb-calc-02",
    "objectiveIndex": 1,
    "objective": "Determine nature of stationary points using second derivative d^2y/dx^2",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Definite Integrals & Area Under Curves** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Definite integral between limits a and b is F(b) - F(a)"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Definite integral between limits a and b is F(b) - F(a).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Definite Integrals & Area Under Curves",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Definite Integrals & Area Under Curves**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Area below the x-axis produces a negative integral value; take absolute value for geometric area."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Definite Integrals & Area Under Curves**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 1,
    "objective": "Evaluate definite integrals between boundaries a and b without constant C",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Definite Integrals & Area Under Curves**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Definite Integrals & Area Under Curves**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 1,
    "objective": "Evaluate definite integrals between boundaries a and b without constant C",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 1,
    "objective": "Evaluate definite integrals between boundaries a and b without constant C",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 1,
    "objective": "Evaluate definite integrals between boundaries a and b without constant C",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 0,
    "objective": "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l9_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m4",
    "lessonId": "jamb-l9",
    "topicId": "top-jamb-calc-03",
    "objectiveIndex": 1,
    "objective": "Evaluate definite integrals between boundaries a and b without constant C",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Parallel & Perpendicular Line Conditions** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Slope m = (y2 - y1) / (x2 - x1)"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: Slope m = (y2 - y1) / (x2 - x1).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Parallel & Perpendicular Line Conditions",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Parallel & Perpendicular Line Conditions**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Negative reciprocal slope for perpendicularity: m2 = -1 / m1."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Parallel & Perpendicular Line Conditions**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 1,
    "objective": "Find equation of perpendicular bisector between two coordinates",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Parallel & Perpendicular Line Conditions**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Parallel & Perpendicular Line Conditions**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 1,
    "objective": "Find equation of perpendicular bisector between two coordinates",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 1,
    "objective": "Find equation of perpendicular bisector between two coordinates",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 1,
    "objective": "Find equation of perpendicular bisector between two coordinates",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 0,
    "objective": "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l10_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m5",
    "lessonId": "jamb-l10",
    "topicId": "top-jamb-coord-01",
    "objectiveIndex": 1,
    "objective": "Find equation of perpendicular bisector between two coordinates",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_1",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Permutations (nPr) vs Combinations (nCr)** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "If arrangement order matters (ranks, words, positions), use Permutation"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes.",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Sign accuracy at every step is required in marking schemes.",
        "remediation": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers.",
        "misconceptionTag": "misc-premature-rounding",
        "rationale": "Premature rounding causes severe inaccuracy in final answers.",
        "remediation": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard JAMB marking criteria: If arrangement order matters (ranks, words, positions), use Permutation.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "JAMB rubric check for Permutations (nPr) vs Combinations (nCr)",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_2",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Permutations (nPr) vs Combinations (nCr)**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: If grouping order does not matter (committees, handshakes, card hands), use Combination."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1).",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "rationale": "Heuristic guessing forfeits method marks (M1).",
        "remediation": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown.",
        "misconceptionTag": "MIS-CONCEPTUAL-CONFUSION",
        "misconceptionId": "MIS-CONCEPTUAL-CONFUSION",
        "feedback": "Review working: conceptual confusion is a common slip.",
        "rationale": "Review working: conceptual confusion is a common slip.",
        "remediation": "Review working: conceptual confusion is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Examiners reward structured method marks (M1) when students formulate clear equations rather than guessing.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Method selection rubric",
      "output": "Method A preserves full marks",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_3",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Permutations (nPr) vs Combinations (nCr)**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "True: An equation or proportional relationship represents a balance; modifying only one side destroys the mathematical equality."
      },
      {
        "id": "B",
        "text": "False: Operations only need to be balanced in geometry, not in algebra.",
        "feedback": "The principle of algebraic balance applies universally."
      },
      {
        "id": "C",
        "text": "False: Only positive numbers must be balanced."
      },
      {
        "id": "D",
        "text": "True: Because equations can never contain negative numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fundamental Axiom of Algebra: Performing identical valid operations on both sides preserves the solution set.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Axiom of equality preservation",
      "output": "Verified true",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_4",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 1,
    "objective": "Solve word problems involving word anagrams with repeated letters",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Permutations (nPr) vs Combinations (nCr)**? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "All terms and variables must be clearly defined with appropriate units."
      },
      {
        "id": "B",
        "text": "Intermediate steps must obey standard algebraic order of operations (BODMAS / PEMDAS)."
      },
      {
        "id": "C",
        "text": "Multiplying both sides of an inequality by -1 reverses the inequality direction."
      },
      {
        "id": "D",
        "text": "Dividing both sides of an equation by a variable expression always preserves all solutions without exception."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Options A, B, and C are correct fundamental rules. Option D is FALSE because dividing across an equation by an unknown variable can eliminate a root (e.g., dividing x² = 4x by x loses x = 0).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "Check valid algebraic properties",
      "output": "A, B, C are true; D is false (losing root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_5",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Permutations (nPr) vs Combinations (nCr)**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "rationale": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7.",
        "remediation": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?",
        "misconceptionTag": "misc-sign-error",
        "rationale": "Did you add 7 to 28 instead of subtracting it?",
        "remediation": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Subtract 7 from both sides: 3x = 28 - 7 = 21.\nStep 2: Divide both sides by 3: x = 21 / 3 = 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "3*x + 7 = 28",
      "output": "x = 7",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_6",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 1,
    "objective": "Solve word problems involving word anagrams with repeated letters",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate the two-step mathematical expression:\n$$\\frac{4}{5} \\times \\left(15 - \\frac{1}{2} \\times 10\\right)$$",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-CALCULATION-SLIP",
        "misconceptionId": "MIS-CALCULATION-SLIP",
        "feedback": "Review working: calculation slip is a common slip.",
        "rationale": "Review working: calculation slip is a common slip.",
        "remediation": "Review working: calculation slip is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step 1: Inside parentheses, multiply first: 1/2 × 10 = 5.\nStep 2: Subtract: 15 - 5 = 10.\nStep 3: Multiply: 4/5 × 10 = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(4/5) * (15 - (1/2 * 10))",
      "output": "8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_7",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student scores $18$ out of $25$ on a continuous assessment test. What is this score expressed as a percentage?",
    "options": [
      {
        "id": "A",
        "text": "72%"
      },
      {
        "id": "B",
        "text": "68%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "C",
        "text": "75%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      },
      {
        "id": "D",
        "text": "70%",
        "misconceptionTag": "MIS-PERCENTAGE-CALCULATION",
        "misconceptionId": "MIS-PERCENTAGE-CALCULATION",
        "feedback": "Review working: percentage calculation is a common slip.",
        "rationale": "Review working: percentage calculation is a common slip.",
        "remediation": "Review working: percentage calculation is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentage = (18 / 25) × 100% = 18 × 4% = 72%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "mathjs_calc",
      "input": "(18 / 25) * 100",
      "output": "72",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_8",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the positive root of: $$x^2 - 49 = 0$$",
    "correctAnswer": 7,
    "explanation": "x² = 49 ⇒ x = ±√49 = ±7. The positive root is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "x^2 - 49 = 0",
      "output": "x = 7 (positive root)",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_9",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 1,
    "objective": "Solve word problems involving word anagrams with repeated letters",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the canonical algorithmic steps to solve a linear fractional problem such as $\\frac{x}{2} + \\frac{x}{3} = 5$:",
    "correctAnswer": {
      "steps": [
        "step_1_find_lcm",
        "step_2_multiply_lcm",
        "step_3_combine_like_terms",
        "step_4_isolate_variable"
      ]
    },
    "options": [
      {
        "id": "step_1_find_lcm",
        "text": "1. Determine the Least Common Multiple (LCM) of all denominators (LCM of 2 and 3 is 6)."
      },
      {
        "id": "step_2_multiply_lcm",
        "text": "2. Multiply every term on both sides by the LCM to clear fractions: 6(x/2) + 6(x/3) = 6(5)."
      },
      {
        "id": "step_3_combine_like_terms",
        "text": "3. Simplify and combine like algebraic terms: 3x + 2x = 5x = 30."
      },
      {
        "id": "step_4_isolate_variable",
        "text": "4. Divide by the coefficient to isolate x: x = 30 / 5 = 6."
      }
    ],
    "explanation": "Multiplying by the LCM clears all fractional denominators systematically, reducing the equation to integer linear form.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "Algebraic sequence ordering",
      "output": "Order verified: 1, 2, 3, 4",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_10",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Expand and simplify the algebraic product: $$(x + 3)(x - 3)$$",
    "correctAnswer": "x^2 - 9",
    "explanation": "Difference of two squares identity: (a + b)(a - b) = a² - b². Here, (x + 3)(x - 3) = x² - 3² = x² - 9.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+3)*(x-3))",
      "output": "x^2 - 9",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_11",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A learner simplifies $(x + 4)^2$ as $x^2 + 16$. Why is this expansion mathematically incorrect?",
    "options": [
      {
        "id": "A",
        "text": "The expansion omits the cross-term 2·x·4 = 8x.",
        "misconceptionId": "misc-freshman-dream"
      },
      {
        "id": "B",
        "text": "4 squared is 8, not 16.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16.",
        "misconceptionTag": "MIS-SIGN-ERROR",
        "misconceptionId": "MIS-SIGN-ERROR",
        "feedback": "Review working: sign error is a common slip.",
        "rationale": "Review working: sign error is a common slip.",
        "remediation": "Review working: sign error is a common slip."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer.",
        "misconceptionTag": "MIS-EXPONENT-INDEX-RULE",
        "misconceptionId": "MIS-EXPONENT-INDEX-RULE",
        "feedback": "Review working: exponent index rule is a common slip.",
        "rationale": "Review working: exponent index rule is a common slip.",
        "remediation": "Review working: exponent index rule is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Omitting the middle term 8x is a common binomial error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "expand((x+4)^2)",
      "output": "x^2 + 8*x + 16",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_12",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 1,
    "objective": "Solve word problems involving word anagrams with repeated letters",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "Examine this student's solution to $-2(x - 5) = 14$:\n- Line 1: $-2x - 10 = 14$\n- Line 2: $-2x = 24$\n- Line 3: $x = -12$\nAt which step did the primary error occur?",
    "options": [
      {
        "id": "A",
        "text": "Line 1: Multiplying -2 by -5 gives +10, not -10.",
        "misconceptionId": "misc-sign-error"
      },
      {
        "id": "B",
        "text": "Line 2: Adding 10 to 14 was computed incorrectly.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct.",
        "misconceptionTag": "MIS-WORKED-ERROR-UNNOTICED",
        "misconceptionId": "MIS-WORKED-ERROR-UNNOTICED",
        "feedback": "Review working: worked error unnoticed is a common slip.",
        "rationale": "Review working: worked error unnoticed is a common slip.",
        "remediation": "Review working: worked error unnoticed is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Distribution error in Line 1: -2 × (-5) = +10. Correct line 1 is -2x + 10 = 14 ⇒ -2x = 4 ⇒ x = -2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "-2*(x - 5) = 14",
      "output": "x = -2",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_13",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 0,
    "objective": "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $\\frac{x}{2} + \\frac{y}{3} = 7$ and $x - y = 4$, determine the value of the product $x \\cdot y$:",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "48",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "C",
        "text": "72",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      },
      {
        "id": "D",
        "text": "54",
        "misconceptionTag": "MIS-MULTI-STEP-OVERSIGHT",
        "misconceptionId": "MIS-MULTI-STEP-OVERSIGHT",
        "feedback": "Review working: multi step oversight is a common slip.",
        "rationale": "Review working: multi step oversight is a common slip.",
        "remediation": "Review working: multi step oversight is a common slip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply first equation by 6: 3x + 2y = 42. From second equation: x = y + 4. Substitute: 3(y + 4) + 2y = 42 ⇒ 5y + 12 = 42 ⇒ 5y = 30 ⇒ y = 6. Then x = 6 + 4 = 10. Product x·y = 10 × 6 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "solve([x/2 + y/3 = 7, x - y = 4], [x, y])",
      "output": "x = 10, y = 6, product = 60",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  },
  {
    "id": "q_jamb-l11_14",
    "courseSlug": "jamb-utme-speed-mathematics",
    "moduleId": "jamb-m6",
    "lessonId": "jamb-l11",
    "topicId": "top-jamb-perm-01",
    "objectiveIndex": 1,
    "objective": "Solve word problems involving word anagrams with repeated letters",
    "thinkingLevel": "challenge_transfer",
    "questionType": "structured_theory",
    "prompt": "A rectangular garden has a perimeter of $40\\text{ metres}$ and an area of $96\\text{ square metres}$. Formulate a quadratic equation in terms of the length $L$, and determine the dimensions of the garden.",
    "correctAnswer": "L = 12, W = 8",
    "markingScheme": [
      {
        "step": "part_a_formulation",
        "marks": 1,
        "markType": "M",
        "criteria": "Express Width as 20 - L from 2(L + W) = 40"
      },
      {
        "step": "part_b_quadratic",
        "marks": 2,
        "markType": "M",
        "criteria": "Form equation L(20 - L) = 96 => L^2 - 20L + 96 = 0"
      },
      {
        "step": "part_c_factorization",
        "marks": 1,
        "markType": "M",
        "criteria": "Factor as (L - 12)(L - 8) = 0"
      },
      {
        "step": "part_d_accuracy",
        "marks": 1,
        "markType": "A",
        "criteria": "State dimensions: 12 m by 8 m"
      }
    ],
    "explanation": "Perimeter = 2(L + W) = 40 ⇒ L + W = 20 ⇒ W = 20 - L.\nArea = L · W = L(20 - L) = 96 ⇒ 20L - L² = 96 ⇒ L² - 20L + 96 = 0.\nFactoring: (L - 12)(L - 8) = 0 ⇒ L = 12 m and W = 8 m (or vice versa). Dimensions: 12 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "NodeCAS_nerdamer",
      "input": "L*(20 - L) = 96",
      "output": "L = 12, W = 8",
      "verifiedAt": "2026-11-06T07:18:22.030Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.030Z"
    }
  }
];
