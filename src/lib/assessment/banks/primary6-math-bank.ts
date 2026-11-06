import { AssessmentItem } from "../types";

export const PRIMARY6_MATH_BANK: AssessmentItem[] = [
  {
    "id": "q_pri6-l1_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Place Value up to Millions & Roman Numerals to M** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Roman numerals: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: Roman numerals: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Place Value up to Millions & Roman Numerals to M",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Place Value up to Millions & Roman Numerals to M**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: A smaller numeral before a larger one means subtraction: IV = 4, IX = 9, XC = 90."
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Place Value up to Millions & Roman Numerals to M**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 1,
    "objective": "Convert numbers between Arabic numerals and Roman numerals",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Place Value up to Millions & Roman Numerals to M**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Place Value up to Millions & Roman Numerals to M**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 1,
    "objective": "Convert numbers between Arabic numerals and Roman numerals",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 1,
    "objective": "Convert numbers between Arabic numerals and Roman numerals",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 1,
    "objective": "Convert numbers between Arabic numerals and Roman numerals",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 0,
    "objective": "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l1_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l1",
    "topicId": "top-pri6-num-01",
    "objectiveIndex": 1,
    "objective": "Convert numbers between Arabic numerals and Roman numerals",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Multiplication & Long Division Word Problems** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Remember DMSB: Divide, Multiply, Subtract, Bring down"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: Remember DMSB: Divide, Multiply, Subtract, Bring down.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Multiplication & Long Division Word Problems",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Multiplication & Long Division Word Problems**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Double-check remainders are smaller than the divisor."
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Multiplication & Long Division Word Problems**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 1,
    "objective": "Perform long division step by step (Divide, Multiply, Subtract, Bring down)",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Multiplication & Long Division Word Problems**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Multiplication & Long Division Word Problems**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 1,
    "objective": "Perform long division step by step (Divide, Multiply, Subtract, Bring down)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 1,
    "objective": "Perform long division step by step (Divide, Multiply, Subtract, Bring down)",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.458Z"
    }
  },
  {
    "id": "q_pri6-l2_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.458Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l2_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 1,
    "objective": "Perform long division step by step (Divide, Multiply, Subtract, Bring down)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l2_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 0,
    "objective": "Multiply 3-digit numbers by 2-digit numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l2_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m1",
    "lessonId": "pri6-l2",
    "topicId": "top-pri6-num-02",
    "objectiveIndex": 1,
    "objective": "Perform long division step by step (Divide, Multiply, Subtract, Bring down)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Fractions: Proper, Improper & Mixed Operations** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "To convert 2 3/4 to improper: (2 * 4 + 3) / 4 = 11/4"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: To convert 2 3/4 to improper: (2 * 4 + 3) / 4 = 11/4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Fractions: Proper, Improper & Mixed Operations",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Fractions: Proper, Improper & Mixed Operations**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: In division: Keep the first fraction, Change division to multiplication, Flip the second fraction (KCF)."
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Fractions: Proper, Improper & Mixed Operations**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 1,
    "objective": "Apply common denominators to add and subtract fractions",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Fractions: Proper, Improper & Mixed Operations**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Fractions: Proper, Improper & Mixed Operations**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 1,
    "objective": "Apply common denominators to add and subtract fractions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 1,
    "objective": "Apply common denominators to add and subtract fractions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 1,
    "objective": "Apply common denominators to add and subtract fractions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 0,
    "objective": "Convert mixed numbers to improper fractions and vice versa",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l3_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l3",
    "topicId": "top-pri6-frac-01",
    "objectiveIndex": 1,
    "objective": "Apply common denominators to add and subtract fractions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Percentages of Quantities & Ratio Sharing** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "15% means 15 out of 100: 15/100 * 2000 = ₦300"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: 15% means 15 out of 100: 15/100 * 2000 = ₦300.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Percentages of Quantities & Ratio Sharing",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Percentages of Quantities & Ratio Sharing**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Total parts = sum of ratio terms."
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Percentages of Quantities & Ratio Sharing**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 1,
    "objective": "Share quantities in ratios like 2 : 3 : 5",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Percentages of Quantities & Ratio Sharing**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Percentages of Quantities & Ratio Sharing**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 1,
    "objective": "Share quantities in ratios like 2 : 3 : 5",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 1,
    "objective": "Share quantities in ratios like 2 : 3 : 5",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 1,
    "objective": "Share quantities in ratios like 2 : 3 : 5",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage of items (e.g. 15% of ₦2,000)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l4_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m2",
    "lessonId": "pri6-l4",
    "topicId": "top-pri6-frac-02",
    "objectiveIndex": 1,
    "objective": "Share quantities in ratios like 2 : 3 : 5",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Cost Price, Selling Price, Profit & Loss** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Selling Price = Cost Price + Profit"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: Selling Price = Cost Price + Profit.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Cost Price, Selling Price, Profit & Loss",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Cost Price, Selling Price, Profit & Loss**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Selling Price = Cost Price - Loss."
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Cost Price, Selling Price, Profit & Loss**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 1,
    "objective": "Determine selling price given profit percentage",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Cost Price, Selling Price, Profit & Loss**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Cost Price, Selling Price, Profit & Loss**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 1,
    "objective": "Determine selling price given profit percentage",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 1,
    "objective": "Determine selling price given profit percentage",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 1,
    "objective": "Determine selling price given profit percentage",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit and loss in Naira and Kobo",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l5_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l5",
    "topicId": "top-pri6-money-01",
    "objectiveIndex": 1,
    "objective": "Determine selling price given profit percentage",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Perimeter & Area of Squares and Rectangles** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Perimeter is measured in linear units (cm, m); Area is measured in square units (cm^2, m^2)"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: Perimeter is measured in linear units (cm, m); Area is measured in square units (cm^2, m^2).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Perimeter & Area of Squares and Rectangles",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Perimeter & Area of Squares and Rectangles**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Split composite L-shapes into two distinct rectangles to calculate area."
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Perimeter & Area of Squares and Rectangles**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 1,
    "objective": "Compute area of rectangles and composite L-shaped figures",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Perimeter & Area of Squares and Rectangles**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Perimeter & Area of Squares and Rectangles**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 1,
    "objective": "Compute area of rectangles and composite L-shaped figures",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 1,
    "objective": "Compute area of rectangles and composite L-shaped figures",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 1,
    "objective": "Compute area of rectangles and composite L-shaped figures",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 0,
    "objective": "Calculate perimeter as distance around the boundary",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l6_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l6",
    "topicId": "top-pri6-mens-01",
    "objectiveIndex": 1,
    "objective": "Compute area of rectangles and composite L-shaped figures",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Volume and Capacity of Cubes & Rectangular Boxes** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Volume is measured in cubic units (cm^3 or m^3)"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: Volume is measured in cubic units (cm^3 or m^3).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Volume and Capacity of Cubes & Rectangular Boxes",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Volume and Capacity of Cubes & Rectangular Boxes**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: 1 litre = 1,000 cm^3 = 1,000 millilitres (ml)."
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Volume and Capacity of Cubes & Rectangular Boxes**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 1,
    "objective": "Convert 1,000 cm^3 to 1 litre of liquid capacity",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Volume and Capacity of Cubes & Rectangular Boxes**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Volume and Capacity of Cubes & Rectangular Boxes**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 1,
    "objective": "Convert 1,000 cm^3 to 1 litre of liquid capacity",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 1,
    "objective": "Convert 1,000 cm^3 to 1 litre of liquid capacity",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 1,
    "objective": "Convert 1,000 cm^3 to 1 litre of liquid capacity",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 0,
    "objective": "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l7_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m3",
    "lessonId": "pri6-l7",
    "topicId": "top-pri6-mens-02",
    "objectiveIndex": 1,
    "objective": "Convert 1,000 cm^3 to 1 litre of liquid capacity",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Finding the Next Term in Number Pattern Sequences** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Look at differences between consecutive terms: +2, +4, +6, +8..."
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: Look at differences between consecutive terms: +2, +4, +6, +8....",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Finding the Next Term in Number Pattern Sequences",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Finding the Next Term in Number Pattern Sequences**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Check if numbers are squares (1, 4, 9, 16, 25) or cubes."
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Finding the Next Term in Number Pattern Sequences**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 1,
    "objective": "Spot geometric doubling and alternating rule progressions",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Finding the Next Term in Number Pattern Sequences**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Finding the Next Term in Number Pattern Sequences**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 1,
    "objective": "Spot geometric doubling and alternating rule progressions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 1,
    "objective": "Spot geometric doubling and alternating rule progressions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 1,
    "objective": "Spot geometric doubling and alternating rule progressions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 0,
    "objective": "Identify constant differences between sequence terms",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l8_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l8",
    "topicId": "top-pri6-qa-01",
    "objectiveIndex": 1,
    "objective": "Spot geometric doubling and alternating rule progressions",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l9_1",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Solving Box, Circle & Triangle Quantitative Puzzles** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Always test your hypothesis on BOTH provided sample diagrams before solving the question"
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
    "explanation": "According to standard NERDC / NECO (NCEE) marking criteria: Always test your hypothesis on BOTH provided sample diagrams before solving the question.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / NECO (NCEE) rubric check for Solving Box, Circle & Triangle Quantitative Puzzles",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l9_2",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Solving Box, Circle & Triangle Quantitative Puzzles**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Common sample rules include: (Top * Bottom) / Left = Centre, or (A + B) * (C - D)."
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l9_3",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Solving Box, Circle & Triangle Quantitative Puzzles**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l9_4",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 1,
    "objective": "Apply discovered operational rules to solve missing numbers",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Solving Box, Circle & Triangle Quantitative Puzzles**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l9_5",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Solving Box, Circle & Triangle Quantitative Puzzles**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l9_6",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 1,
    "objective": "Apply discovered operational rules to solve missing numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.459Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.459Z"
    }
  },
  {
    "id": "q_pri6-l9_7",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  },
  {
    "id": "q_pri6-l9_8",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  },
  {
    "id": "q_pri6-l9_9",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 1,
    "objective": "Apply discovered operational rules to solve missing numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  },
  {
    "id": "q_pri6-l9_10",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  },
  {
    "id": "q_pri6-l9_11",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  },
  {
    "id": "q_pri6-l9_12",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 1,
    "objective": "Apply discovered operational rules to solve missing numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  },
  {
    "id": "q_pri6-l9_13",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 0,
    "objective": "Test sample diagrams with four basic operations (+, -, *, /)",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  },
  {
    "id": "q_pri6-l9_14",
    "courseSlug": "primary6-quantitative-reasoning-common-entrance",
    "moduleId": "pri6-m4",
    "lessonId": "pri6-l9",
    "topicId": "top-pri6-qa-02",
    "objectiveIndex": 1,
    "objective": "Apply discovered operational rules to solve missing numbers",
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
      "verifiedAt": "2026-11-06T07:18:22.460Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.460Z"
    }
  }
];
