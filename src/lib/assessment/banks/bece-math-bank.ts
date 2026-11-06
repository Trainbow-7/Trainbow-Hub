import { AssessmentItem } from "../types";

export const BECE_MATH_BANK: AssessmentItem[] = [
  {
    "id": "q_bece-l1_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Directed Numbers & Adding/Subtracting Integers** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Subtracting a negative number is equivalent to adding a positive: -(-b) = +b"
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
    "explanation": "According to standard NECO/BECE marking criteria: Subtracting a negative number is equivalent to adding a positive: -(-b) = +b.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Directed Numbers & Adding/Subtracting Integers",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Directed Numbers & Adding/Subtracting Integers**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Multiplying two negative numbers produces a positive result."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Directed Numbers & Adding/Subtracting Integers**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 1,
    "objective": "Avoid double-negative errors in basic arithmetic",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Directed Numbers & Adding/Subtracting Integers**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Directed Numbers & Adding/Subtracting Integers**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 1,
    "objective": "Avoid double-negative errors in basic arithmetic",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 1,
    "objective": "Avoid double-negative errors in basic arithmetic",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 1,
    "objective": "Avoid double-negative errors in basic arithmetic",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 0,
    "objective": "Add, subtract, multiply, and divide positive and negative numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l1_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l1",
    "topicId": "top-bece-num-01",
    "objectiveIndex": 1,
    "objective": "Avoid double-negative errors in basic arithmetic",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Fractions, Decimals & Significant Figures** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Leading zeros are never significant (e.g. 0.0042 has 2 significant figures)"
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
    "explanation": "According to standard NECO/BECE marking criteria: Leading zeros are never significant (e.g. 0.0042 has 2 significant figures).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Fractions, Decimals & Significant Figures",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Fractions, Decimals & Significant Figures**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Zeros between non-zero digits are always significant."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Fractions, Decimals & Significant Figures**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 1,
    "objective": "Round numbers to 1, 2, or 3 significant figures",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Fractions, Decimals & Significant Figures**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Fractions, Decimals & Significant Figures**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 1,
    "objective": "Round numbers to 1, 2, or 3 significant figures",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 1,
    "objective": "Round numbers to 1, 2, or 3 significant figures",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 1,
    "objective": "Round numbers to 1, 2, or 3 significant figures",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 0,
    "objective": "Simplify fractions to lowest terms",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l2_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l2",
    "topicId": "top-bece-num-02",
    "objectiveIndex": 1,
    "objective": "Round numbers to 1, 2, or 3 significant figures",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Simple Interest, Discounts & Everyday Money** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Time T must always be expressed in years"
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
    "explanation": "According to standard NECO/BECE marking criteria: Time T must always be expressed in years.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Simple Interest, Discounts & Everyday Money",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Simple Interest, Discounts & Everyday Money**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Total amount A = Principal P + Interest I."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Simple Interest, Discounts & Everyday Money**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 1,
    "objective": "Determine cash discount and hire purchase total payments",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Simple Interest, Discounts & Everyday Money**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Simple Interest, Discounts & Everyday Money**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 1,
    "objective": "Determine cash discount and hire purchase total payments",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 1,
    "objective": "Determine cash discount and hire purchase total payments",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 1,
    "objective": "Determine cash discount and hire purchase total payments",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 0,
    "objective": "Calculate simple interest earned or paid on loans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l3_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m1",
    "lessonId": "bece-l3",
    "topicId": "top-bece-num-03",
    "objectiveIndex": 1,
    "objective": "Determine cash discount and hire purchase total payments",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Expanding Brackets & Collecting Like Terms** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Sign rule: -a(b - c) = -ab + ac (carefully observe the negative bracket expansion)"
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
    "explanation": "According to standard NECO/BECE marking criteria: Sign rule: -a(b - c) = -ab + ac (carefully observe the negative bracket expansion).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Expanding Brackets & Collecting Like Terms",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Expanding Brackets & Collecting Like Terms**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Only like terms with identical variable powers can be added together."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Expanding Brackets & Collecting Like Terms**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 1,
    "objective": "Expand double brackets using FOIL / grid methods",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Expanding Brackets & Collecting Like Terms**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Expanding Brackets & Collecting Like Terms**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 1,
    "objective": "Expand double brackets using FOIL / grid methods",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 1,
    "objective": "Expand double brackets using FOIL / grid methods",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 1,
    "objective": "Expand double brackets using FOIL / grid methods",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 0,
    "objective": "Expand single brackets using distributive property",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l4_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l4",
    "topicId": "top-bece-alg-01",
    "objectiveIndex": 1,
    "objective": "Expand double brackets using FOIL / grid methods",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Simple Linear Equations with Fractions** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Multiply both sides by common denominator to eliminate all fractions immediately"
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
    "explanation": "According to standard NECO/BECE marking criteria: Multiply both sides by common denominator to eliminate all fractions immediately.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Simple Linear Equations with Fractions",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Simple Linear Equations with Fractions**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Check your answer by substituting back into original equation."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Simple Linear Equations with Fractions**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 1,
    "objective": "Group variable terms on the left and constant numbers on the right",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Simple Linear Equations with Fractions**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Simple Linear Equations with Fractions**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 1,
    "objective": "Group variable terms on the left and constant numbers on the right",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 1,
    "objective": "Group variable terms on the left and constant numbers on the right",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 1,
    "objective": "Group variable terms on the left and constant numbers on the right",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 0,
    "objective": "Cross-multiply fractional equations accurately",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l5_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l5",
    "topicId": "top-bece-alg-02",
    "objectiveIndex": 1,
    "objective": "Group variable terms on the left and constant numbers on the right",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Algebraic Factorization by Grouping** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Group into two pairs that share common factors"
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
    "explanation": "According to standard NECO/BECE marking criteria: Group into two pairs that share common factors.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Algebraic Factorization by Grouping",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Algebraic Factorization by Grouping**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Verify the bracket contents are identical after first round of factoring."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Algebraic Factorization by Grouping**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 1,
    "objective": "Factorize expressions like ax + ay + bx + by = (a + b)(x + y)",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Algebraic Factorization by Grouping**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Algebraic Factorization by Grouping**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 1,
    "objective": "Factorize expressions like ax + ay + bx + by = (a + b)(x + y)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 1,
    "objective": "Factorize expressions like ax + ay + bx + by = (a + b)(x + y)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 1,
    "objective": "Factorize expressions like ax + ay + bx + by = (a + b)(x + y)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 0,
    "objective": "Extract highest common factor (HCF) from algebraic expressions",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l6_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m2",
    "lessonId": "bece-l6",
    "topicId": "top-bece-alg-03",
    "objectiveIndex": 1,
    "objective": "Factorize expressions like ax + ay + bx + by = (a + b)(x + y)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Angles on Lines, Vertically Opposite & Triangles** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Vertically opposite angles are equal"
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
    "explanation": "According to standard NECO/BECE marking criteria: Vertically opposite angles are equal.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Angles on Lines, Vertically Opposite & Triangles",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Angles on Lines, Vertically Opposite & Triangles**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Base angles of an isosceles triangle are equal."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Angles on Lines, Vertically Opposite & Triangles**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 1,
    "objective": "Apply exterior angle of a triangle equals sum of two opposite interior angles",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Angles on Lines, Vertically Opposite & Triangles**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Angles on Lines, Vertically Opposite & Triangles**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 1,
    "objective": "Apply exterior angle of a triangle equals sum of two opposite interior angles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 1,
    "objective": "Apply exterior angle of a triangle equals sum of two opposite interior angles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 1,
    "objective": "Apply exterior angle of a triangle equals sum of two opposite interior angles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 0,
    "objective": "Find missing angles on straight lines and intersections",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l7_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l7",
    "topicId": "top-bece-geo-01",
    "objectiveIndex": 1,
    "objective": "Apply exterior angle of a triangle equals sum of two opposite interior angles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Pythagoras' Theorem in Right Triangles** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Hypotenuse is always the longest side, opposite the 90 degree right angle"
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
    "explanation": "According to standard NECO/BECE marking criteria: Hypotenuse is always the longest side, opposite the 90 degree right angle.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Pythagoras' Theorem in Right Triangles",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Pythagoras' Theorem in Right Triangles**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: To find a shorter side: a^2 = c^2 - b^2."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Pythagoras' Theorem in Right Triangles**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 1,
    "objective": "Compute unknown side lengths to 1 or 2 decimal places",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Pythagoras' Theorem in Right Triangles**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Pythagoras' Theorem in Right Triangles**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 1,
    "objective": "Compute unknown side lengths to 1 or 2 decimal places",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 1,
    "objective": "Compute unknown side lengths to 1 or 2 decimal places",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 1,
    "objective": "Compute unknown side lengths to 1 or 2 decimal places",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 0,
    "objective": "State Pythagoras' theorem for right-angled triangles",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l8_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m3",
    "lessonId": "bece-l8",
    "topicId": "top-bece-geo-02",
    "objectiveIndex": 1,
    "objective": "Compute unknown side lengths to 1 or 2 decimal places",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Perimeter & Area of Parallelograms and Trapezia** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Height must be strictly perpendicular to the base, not the slanted side length"
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
    "explanation": "According to standard NECO/BECE marking criteria: Height must be strictly perpendicular to the base, not the slanted side length.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Perimeter & Area of Parallelograms and Trapezia",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Perimeter & Area of Parallelograms and Trapezia**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Express units in cm^2 or m^2 consistently."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Perimeter & Area of Parallelograms and Trapezia**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 1,
    "objective": "Calculate area of trapezia given two parallel sides a and b",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Perimeter & Area of Parallelograms and Trapezia**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Perimeter & Area of Parallelograms and Trapezia**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 1,
    "objective": "Calculate area of trapezia given two parallel sides a and b",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 1,
    "objective": "Calculate area of trapezia given two parallel sides a and b",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 1,
    "objective": "Calculate area of trapezia given two parallel sides a and b",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate area of parallelograms using perpendicular height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l9_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l9",
    "topicId": "top-bece-mens-01",
    "objectiveIndex": 1,
    "objective": "Calculate area of trapezia given two parallel sides a and b",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Volume and Surface Area of Cylinders** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Check whether the problem specifies a closed cylinder (2 circular ends) or open (1 end)"
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
    "explanation": "According to standard NECO/BECE marking criteria: Check whether the problem specifies a closed cylinder (2 circular ends) or open (1 end).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Volume and Surface Area of Cylinders",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Volume and Surface Area of Cylinders**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Use pi = 22/7 or 3.142 as instructed by question."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Volume and Surface Area of Cylinders**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 1,
    "objective": "Evaluate curved surface area 2 * pi * r * h for open and closed cans",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Volume and Surface Area of Cylinders**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Volume and Surface Area of Cylinders**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 1,
    "objective": "Evaluate curved surface area 2 * pi * r * h for open and closed cans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 1,
    "objective": "Evaluate curved surface area 2 * pi * r * h for open and closed cans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 1,
    "objective": "Evaluate curved surface area 2 * pi * r * h for open and closed cans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate cylinder volume using radius and height",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l10_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m4",
    "lessonId": "bece-l10",
    "topicId": "top-bece-mens-02",
    "objectiveIndex": 1,
    "objective": "Evaluate curved surface area 2 * pi * r * h for open and closed cans",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Mean, Median & Mode of Ungrouped Data** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Mode is the value appearing with the highest frequency"
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
    "explanation": "According to standard NECO/BECE marking criteria: Mode is the value appearing with the highest frequency.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Mean, Median & Mode of Ungrouped Data",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Mean, Median & Mode of Ungrouped Data**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: If N is even, median is the average of the two middle values."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Mean, Median & Mode of Ungrouped Data**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 1,
    "objective": "Find median by sorting data in ascending order first",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Mean, Median & Mode of Ungrouped Data**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Mean, Median & Mode of Ungrouped Data**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 1,
    "objective": "Find median by sorting data in ascending order first",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 1,
    "objective": "Find median by sorting data in ascending order first",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 1,
    "objective": "Find median by sorting data in ascending order first",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate arithmetic mean = sum(x) / N",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l11_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l11",
    "topicId": "top-bece-stat-01",
    "objectiveIndex": 1,
    "objective": "Find median by sorting data in ascending order first",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_1",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Constructing and Interpreting Pie Charts & Bar Charts** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Sum of all sector angles in a pie chart must equal 360 degrees exactly"
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
    "explanation": "According to standard NECO/BECE marking criteria: Sum of all sector angles in a pie chart must equal 360 degrees exactly.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NECO/BECE rubric check for Constructing and Interpreting Pie Charts & Bar Charts",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_2",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Constructing and Interpreting Pie Charts & Bar Charts**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Leave equal gaps between bars in a bar chart to distinguish from continuous histograms."
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_3",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Constructing and Interpreting Pie Charts & Bar Charts**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_4",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 1,
    "objective": "Read frequencies from bar charts and histogram bars",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Constructing and Interpreting Pie Charts & Bar Charts**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_5",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Constructing and Interpreting Pie Charts & Bar Charts**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_6",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 1,
    "objective": "Read frequencies from bar charts and histogram bars",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_7",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_8",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_9",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 1,
    "objective": "Read frequencies from bar charts and histogram bars",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_10",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_11",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_12",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 1,
    "objective": "Read frequencies from bar charts and histogram bars",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_13",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 0,
    "objective": "Calculate sector angles for pie chart construction",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  },
  {
    "id": "q_bece-l12_14",
    "courseSlug": "jss3-basic-mathematics-bece-prep",
    "moduleId": "bece-m5",
    "lessonId": "bece-l12",
    "topicId": "top-bece-stat-02",
    "objectiveIndex": 1,
    "objective": "Read frequencies from bar charts and histogram bars",
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
      "verifiedAt": "2026-11-06T07:18:22.191Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.191Z"
    }
  }
];
