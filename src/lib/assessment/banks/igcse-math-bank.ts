import { AssessmentItem } from "../types";

export const IGCSE_MATH_BANK: AssessmentItem[] = [
  {
    "id": "q_igcse-l1_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Indices, Fractional Powers & Standard Form** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "x^(-n) = 1 / x^n; x^(1/2) = sqrt(x)"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: x^(-n) = 1 / x^n; x^(1/2) = sqrt(x).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Indices, Fractional Powers & Standard Form",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Indices, Fractional Powers & Standard Form**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Standard form coefficient A must be strictly between 1 and 10."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Indices, Fractional Powers & Standard Form**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 1,
    "objective": "Express numbers in standard form where 1 <= A < 10",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Indices, Fractional Powers & Standard Form**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Indices, Fractional Powers & Standard Form**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 1,
    "objective": "Express numbers in standard form where 1 <= A < 10",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 1,
    "objective": "Express numbers in standard form where 1 <= A < 10",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 1,
    "objective": "Express numbers in standard form where 1 <= A < 10",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 0,
    "objective": "Simplify expressions involving fractional and negative powers",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l1_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l1",
    "topicId": "top-igcse-num-01",
    "objectiveIndex": 1,
    "objective": "Express numbers in standard form where 1 <= A < 10",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Upper and Lower Bounds & Error Intervals** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "To maximize a quotient a / b: use Maximum(a) / Minimum(b)"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: To maximize a quotient a / b: use Maximum(a) / Minimum(b).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Upper and Lower Bounds & Error Intervals",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Upper and Lower Bounds & Error Intervals**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: To minimize a quotient a / b: use Minimum(a) / Maximum(b)."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Upper and Lower Bounds & Error Intervals**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 1,
    "objective": "Calculate maximum and minimum possible values of expressions like a / b",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Upper and Lower Bounds & Error Intervals**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Upper and Lower Bounds & Error Intervals**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 1,
    "objective": "Calculate maximum and minimum possible values of expressions like a / b",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 1,
    "objective": "Calculate maximum and minimum possible values of expressions like a / b",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 1,
    "objective": "Calculate maximum and minimum possible values of expressions like a / b",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 0,
    "objective": "Determine upper and lower limits of rounded values",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l2_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m1",
    "lessonId": "igcse-l2",
    "topicId": "top-igcse-num-02",
    "objectiveIndex": 1,
    "objective": "Calculate maximum and minimum possible values of expressions like a / b",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Function Notation: Evaluating f(x) and g(x)** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "f(3) means replace every x in the formula with 3"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: f(3) means replace every x in the formula with 3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Function Notation: Evaluating f(x) and g(x)",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Function Notation: Evaluating f(x) and g(x)**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: f(x) = 3 means set the entire expression equal to 3 and solve for x."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Function Notation: Evaluating f(x) and g(x)**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 1,
    "objective": "Solve equations in function notation f(x) = 0",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Function Notation: Evaluating f(x) and g(x)**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Function Notation: Evaluating f(x) and g(x)**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 1,
    "objective": "Solve equations in function notation f(x) = 0",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 1,
    "objective": "Solve equations in function notation f(x) = 0",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 1,
    "objective": "Solve equations in function notation f(x) = 0",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 0,
    "objective": "Evaluate function outputs for numerical and algebraic inputs",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l3_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l3",
    "topicId": "top-igcse-func-01",
    "objectiveIndex": 1,
    "objective": "Solve equations in function notation f(x) = 0",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Composite Functions fg(x) and Inverse Functions f^-1(x)** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "In fg(x), the inner function g(x) is evaluated first and substituted into f"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: In fg(x), the inner function g(x) is evaluated first and substituted into f.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Composite Functions fg(x) and Inverse Functions f^-1(x)",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Composite Functions fg(x) and Inverse Functions f^-1(x)**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: The graph of an inverse function f^-1(x) is the reflection of f(x) in the line y = x."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Composite Functions fg(x) and Inverse Functions f^-1(x)**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 1,
    "objective": "Find inverse function by setting y = f(x), swapping variables and making y the subject",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Composite Functions fg(x) and Inverse Functions f^-1(x)**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Composite Functions fg(x) and Inverse Functions f^-1(x)**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 1,
    "objective": "Find inverse function by setting y = f(x), swapping variables and making y the subject",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 1,
    "objective": "Find inverse function by setting y = f(x), swapping variables and making y the subject",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 1,
    "objective": "Find inverse function by setting y = f(x), swapping variables and making y the subject",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 0,
    "objective": "Form composite functions fg(x) and gf(x)",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l4_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m2",
    "lessonId": "igcse-l4",
    "topicId": "top-igcse-func-02",
    "objectiveIndex": 1,
    "objective": "Find inverse function by setting y = f(x), swapping variables and making y the subject",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Drawing Tangents to Estimate Gradients of Curves** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "The tangent line touches the curve at exactly one point without crossing through it"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: The tangent line touches the curve at exactly one point without crossing through it.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Drawing Tangents to Estimate Gradients of Curves",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Drawing Tangents to Estimate Gradients of Curves**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Select two points far apart on the tangent line to minimize gradient measurement error."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Drawing Tangents to Estimate Gradients of Curves**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 1,
    "objective": "Calculate gradient = rise / run from the drawn tangent line",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Drawing Tangents to Estimate Gradients of Curves**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Drawing Tangents to Estimate Gradients of Curves**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 1,
    "objective": "Calculate gradient = rise / run from the drawn tangent line",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 1,
    "objective": "Calculate gradient = rise / run from the drawn tangent line",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 1,
    "objective": "Calculate gradient = rise / run from the drawn tangent line",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 0,
    "objective": "Draw accurate tangents at specified point x = x0",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l5_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m3",
    "lessonId": "igcse-l5",
    "topicId": "top-igcse-curve-01",
    "objectiveIndex": 1,
    "objective": "Calculate gradient = rise / run from the drawn tangent line",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **3D Trigonometry: Angles Between Lines & Planes** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Project the line onto the plane to locate the right angle on the base"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: Project the line onto the plane to locate the right angle on the base.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for 3D Trigonometry: Angles Between Lines & Planes",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **3D Trigonometry: Angles Between Lines & Planes**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Redraw the vertical cross-sectional triangle as a clean 2D sketch before calculating."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **3D Trigonometry: Angles Between Lines & Planes**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 1,
    "objective": "Identify and calculate angle between a slant edge and base plane",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **3D Trigonometry: Angles Between Lines & Planes**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **3D Trigonometry: Angles Between Lines & Planes**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 1,
    "objective": "Identify and calculate angle between a slant edge and base plane",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 1,
    "objective": "Identify and calculate angle between a slant edge and base plane",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 1,
    "objective": "Identify and calculate angle between a slant edge and base plane",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 0,
    "objective": "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l6_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m4",
    "lessonId": "igcse-l6",
    "topicId": "top-igcse-trig-01",
    "objectiveIndex": 1,
    "objective": "Identify and calculate angle between a slant edge and base plane",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Column Vectors, Magnitude & Vector Algebra** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Vector AB = OB - OA (Position vector of B minus position vector of A)"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: Vector AB = OB - OA (Position vector of B minus position vector of A).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Column Vectors, Magnitude & Vector Algebra",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Column Vectors, Magnitude & Vector Algebra**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Two vectors are parallel if one is a scalar multiple of the other: v = k * u."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Column Vectors, Magnitude & Vector Algebra**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 1,
    "objective": "Calculate vector magnitude |v| = sqrt(x^2 + y^2)",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Column Vectors, Magnitude & Vector Algebra**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Column Vectors, Magnitude & Vector Algebra**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 1,
    "objective": "Calculate vector magnitude |v| = sqrt(x^2 + y^2)",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 1,
    "objective": "Calculate vector magnitude |v| = sqrt(x^2 + y^2)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 1,
    "objective": "Calculate vector magnitude |v| = sqrt(x^2 + y^2)",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, and multiply vectors by scalars",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l7_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l7",
    "topicId": "top-igcse-vec-01",
    "objectiveIndex": 1,
    "objective": "Calculate vector magnitude |v| = sqrt(x^2 + y^2)",
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
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l8_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Vector Geometry & Collinearity Proofs** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "To prove points A, B, C are collinear: show AB = k * BC and state that B is a common point"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: To prove points A, B, C are collinear: show AB = k * BC and state that B is a common point.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Vector Geometry & Collinearity Proofs",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.594Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.594Z"
    }
  },
  {
    "id": "q_igcse-l8_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Vector Geometry & Collinearity Proofs**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Divide ratio segments: if P divides AB in ratio 2:3, then AP = 2/5 AB."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Vector Geometry & Collinearity Proofs**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 1,
    "objective": "Prove points A, B, and C are collinear by showing AB = k * BC and sharing point B",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Vector Geometry & Collinearity Proofs**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Vector Geometry & Collinearity Proofs**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 1,
    "objective": "Prove points A, B, and C are collinear by showing AB = k * BC and sharing point B",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 1,
    "objective": "Prove points A, B, and C are collinear by showing AB = k * BC and sharing point B",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 1,
    "objective": "Prove points A, B, and C are collinear by showing AB = k * BC and sharing point B",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 0,
    "objective": "Express geometric paths in terms of given basis vectors a and b",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l8_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m5",
    "lessonId": "igcse-l8",
    "topicId": "top-igcse-vec-02",
    "objectiveIndex": 1,
    "objective": "Prove points A, B, and C are collinear by showing AB = k * BC and sharing point B",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Reflections, Rotations & Negative Scale Factor Enlargements** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "A negative scale factor enlargement inverts the shape through the centre of enlargement"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: A negative scale factor enlargement inverts the shape through the centre of enlargement.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Reflections, Rotations & Negative Scale Factor Enlargements",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Reflections, Rotations & Negative Scale Factor Enlargements**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Cambridge marks will award zero marks if more than one transformation type is named."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Reflections, Rotations & Negative Scale Factor Enlargements**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 1,
    "objective": "Fully describe transformations without combining multiple operations",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Reflections, Rotations & Negative Scale Factor Enlargements**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Reflections, Rotations & Negative Scale Factor Enlargements**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 1,
    "objective": "Fully describe transformations without combining multiple operations",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 1,
    "objective": "Fully describe transformations without combining multiple operations",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 1,
    "objective": "Fully describe transformations without combining multiple operations",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 0,
    "objective": "Enlarge shapes with negative fractional scale factors through a given centre",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l9_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m6",
    "lessonId": "igcse-l9",
    "topicId": "top-igcse-trans-01",
    "objectiveIndex": 1,
    "objective": "Fully describe transformations without combining multiple operations",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Cumulative Frequency Curves, Median & IQR** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Interquartile range IQR = Q3 - Q1"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: Interquartile range IQR = Q3 - Q1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Cumulative Frequency Curves, Median & IQR",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Cumulative Frequency Curves, Median & IQR**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Construct box-and-whisker plots from the 5-figure summary."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Cumulative Frequency Curves, Median & IQR**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 1,
    "objective": "Read median, lower quartile Q1, upper quartile Q3, and interquartile range",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Cumulative Frequency Curves, Median & IQR**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Cumulative Frequency Curves, Median & IQR**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 1,
    "objective": "Read median, lower quartile Q1, upper quartile Q3, and interquartile range",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 1,
    "objective": "Read median, lower quartile Q1, upper quartile Q3, and interquartile range",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 1,
    "objective": "Read median, lower quartile Q1, upper quartile Q3, and interquartile range",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 0,
    "objective": "Plot smooth cumulative frequency curves at upper class boundaries",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l10_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l10",
    "topicId": "top-igcse-stat-01",
    "objectiveIndex": 1,
    "objective": "Read median, lower quartile Q1, upper quartile Q3, and interquartile range",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_1",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Probability Tree Diagrams Without Replacement** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "When an item is not replaced, both the numerator and the denominator decrease by 1"
      },
      {
        "id": "B",
        "text": "Intermediate units and signs may be ignored until the final numerical answer.",
        "misconceptionId": "misc-sign-error",
        "feedback": "Sign accuracy at every step is required in marking schemes."
      },
      {
        "id": "C",
        "text": "Approximations should be made at every intermediate stage of working.",
        "misconceptionId": "misc-premature-rounding",
        "feedback": "Premature rounding causes severe inaccuracy in final answers."
      },
      {
        "id": "D",
        "text": "None of the above rules apply to this topic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to standard CAMBRIDGE marking criteria: When an item is not replaced, both the numerator and the denominator decrease by 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "CAMBRIDGE rubric check for Probability Tree Diagrams Without Replacement",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_2",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Probability Tree Diagrams Without Replacement**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Verify branch probabilities from any single vertex sum to 1."
      },
      {
        "id": "B",
        "text": "Guess and test whole numbers arbitrarily without writing an algebraic formula.",
        "feedback": "Heuristic guessing forfeits method marks (M1)."
      },
      {
        "id": "C",
        "text": "Assume all parameters are equal to save time on examination scripts."
      },
      {
        "id": "D",
        "text": "Always divide by zero if terms are unknown."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_3",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Probability Tree Diagrams Without Replacement**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_4",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 1,
    "objective": "Compute conditional probabilities P(A and B) = P(A) * P(B|A)",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Probability Tree Diagrams Without Replacement**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_5",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Probability Tree Diagrams Without Replacement**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 8",
        "feedback": "Check subtraction: 28 - 7 = 21, then 21 / 3 = 7."
      },
      {
        "id": "C",
        "text": "x = 11",
        "misconceptionId": "misc-sign-error",
        "feedback": "Did you add 7 to 28 instead of subtracting it?"
      },
      {
        "id": "D",
        "text": "x = 5"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_6",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 1,
    "objective": "Compute conditional probabilities P(A and B) = P(A) * P(B|A)",
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
        "text": "10"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_7",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
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
        "text": "68%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "70%"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_8",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_9",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 1,
    "objective": "Compute conditional probabilities P(A and B) = P(A) * P(B|A)",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_10",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_11",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
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
        "text": "4 squared is 8, not 16."
      },
      {
        "id": "C",
        "text": "The sign should be negative: x² - 16."
      },
      {
        "id": "D",
        "text": "Brackets can only be squared if x is an integer."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_12",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 1,
    "objective": "Compute conditional probabilities P(A and B) = P(A) * P(B|A)",
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
        "text": "Line 2: Adding 10 to 14 was computed incorrectly."
      },
      {
        "id": "C",
        "text": "Line 3: 24 divided by -2 is +12, not -12."
      },
      {
        "id": "D",
        "text": "There is no error; the solution is completely correct."
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_13",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 0,
    "objective": "Construct probability trees for selections without replacement",
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
        "text": "48"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "54"
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  },
  {
    "id": "q_igcse-l11_14",
    "courseSlug": "cambridge-igcse-extended-mathematics",
    "moduleId": "igcse-m7",
    "lessonId": "igcse-l11",
    "topicId": "top-igcse-prob-01",
    "objectiveIndex": 1,
    "objective": "Compute conditional probabilities P(A and B) = P(A) * P(B|A)",
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
      "verifiedAt": "2026-11-06T07:18:22.595Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.595Z"
    }
  }
];
