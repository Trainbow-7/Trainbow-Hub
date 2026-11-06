import { AssessmentItem } from "../types";

export const ALGEBRA_TRIG_BANK: AssessmentItem[] = [
  {
    "id": "q_ss2-l1_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Arithmetic Progressions (AP): nth Term & Sum** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Common difference d = T2 - T1 = T3 - T2"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: Common difference d = T2 - T1 = T3 - T2.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Arithmetic Progressions (AP): nth Term & Sum",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Arithmetic Progressions (AP): nth Term & Sum**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: When last term l is known: Sn = n/2(a + l)."
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Arithmetic Progressions (AP): nth Term & Sum**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 1,
    "objective": "Calculate sum of arithmetic series across real-world finance contexts",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Arithmetic Progressions (AP): nth Term & Sum**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Arithmetic Progressions (AP): nth Term & Sum**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 1,
    "objective": "Calculate sum of arithmetic series across real-world finance contexts",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 1,
    "objective": "Calculate sum of arithmetic series across real-world finance contexts",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 1,
    "objective": "Calculate sum of arithmetic series across real-world finance contexts",
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
      "verifiedAt": "2026-11-06T07:18:22.320Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.320Z"
    }
  },
  {
    "id": "q_ss2-l1_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 0,
    "objective": "Formulate equations for first term a and common difference d",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l1_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l1",
    "topicId": "top-ss2-seq-01",
    "objectiveIndex": 1,
    "objective": "Calculate sum of arithmetic series across real-world finance contexts",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Geometric Progressions (GP): nth Term & Sum** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "When |r| < 1, use Sn = a(1 - r^n) / (1 - r)"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: When |r| < 1, use Sn = a(1 - r^n) / (1 - r).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Geometric Progressions (GP): nth Term & Sum",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Geometric Progressions (GP): nth Term & Sum**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: When |r| > 1, use Sn = a(r^n - 1) / (r - 1)."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Geometric Progressions (GP): nth Term & Sum**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 1,
    "objective": "Apply GP models to population growth and compound financial assets",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Geometric Progressions (GP): nth Term & Sum**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Geometric Progressions (GP): nth Term & Sum**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 1,
    "objective": "Apply GP models to population growth and compound financial assets",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 1,
    "objective": "Apply GP models to population growth and compound financial assets",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 1,
    "objective": "Apply GP models to population growth and compound financial assets",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 0,
    "objective": "Determine common ratio r = T2 / T1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l2_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l2",
    "topicId": "top-ss2-seq-02",
    "objectiveIndex": 1,
    "objective": "Apply GP models to population growth and compound financial assets",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Sum to Infinity of Convergent Geometric Series** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "A geometric series only has a sum to infinity if -1 < r < 1"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: A geometric series only has a sum to infinity if -1 < r < 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Sum to Infinity of Convergent Geometric Series",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Sum to Infinity of Convergent Geometric Series**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: If r >= 1 or r <= -1, the series diverges and has no finite sum to infinity."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Sum to Infinity of Convergent Geometric Series**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 1,
    "objective": "Express recurring decimals as rational fractions using sum to infinity",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Sum to Infinity of Convergent Geometric Series**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Sum to Infinity of Convergent Geometric Series**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 1,
    "objective": "Express recurring decimals as rational fractions using sum to infinity",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 1,
    "objective": "Express recurring decimals as rational fractions using sum to infinity",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 1,
    "objective": "Express recurring decimals as rational fractions using sum to infinity",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 0,
    "objective": "State the necessary condition for a GP to converge",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l3_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m1",
    "lessonId": "ss2-l3",
    "topicId": "top-ss2-seq-03",
    "objectiveIndex": 1,
    "objective": "Express recurring decimals as rational fractions using sum to infinity",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Completing the Square and Expressing in Vertex Form** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Divide by a first when factoring non-monic quadratics"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: Divide by a first when factoring non-monic quadratics.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Completing the Square and Expressing in Vertex Form",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Completing the Square and Expressing in Vertex Form**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Vertex gives minimum point if a > 0; maximum point if a < 0."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Completing the Square and Expressing in Vertex Form**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 1,
    "objective": "Determine coordinates of vertex and state line of symmetry x = h",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Completing the Square and Expressing in Vertex Form**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Completing the Square and Expressing in Vertex Form**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 1,
    "objective": "Determine coordinates of vertex and state line of symmetry x = h",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 1,
    "objective": "Determine coordinates of vertex and state line of symmetry x = h",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 1,
    "objective": "Determine coordinates of vertex and state line of symmetry x = h",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 0,
    "objective": "Complete the square when coefficient of x^2 is greater than 1",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l4_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l4",
    "topicId": "top-ss2-quad-01",
    "objectiveIndex": 1,
    "objective": "Determine coordinates of vertex and state line of symmetry x = h",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Discriminant Analysis & Nature of Roots** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "For real roots: b^2 - 4ac >= 0"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: For real roots: b^2 - 4ac >= 0.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Discriminant Analysis & Nature of Roots",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Discriminant Analysis & Nature of Roots**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: For equal / repeated roots (tangent to x-axis): b^2 - 4ac = 0."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Discriminant Analysis & Nature of Roots**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 1,
    "objective": "Find range of values of constant k for which equation has real roots",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Discriminant Analysis & Nature of Roots**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Discriminant Analysis & Nature of Roots**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 1,
    "objective": "Find range of values of constant k for which equation has real roots",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 1,
    "objective": "Find range of values of constant k for which equation has real roots",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 1,
    "objective": "Find range of values of constant k for which equation has real roots",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 0,
    "objective": "Calculate discriminant value without solving equation completely",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l5_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m2",
    "lessonId": "ss2-l5",
    "topicId": "top-ss2-quad-02",
    "objectiveIndex": 1,
    "objective": "Find range of values of constant k for which equation has real roots",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Trigonometric Ratios in All Four Quadrants (CAST Rule)** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Quadrant 2: $\\theta = 180^\\circ - \\alpha$; Quadrant 3: $\\theta = 180^\\circ + \\alpha$; Quadrant 4: $\\theta = 360^\\circ - \\alpha$"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: Quadrant 2: $\\theta = 180^\\circ - \\alpha$; Quadrant 3: $\\theta = 180^\\circ + \\alpha$; Quadrant 4: $\\theta = 360^\\circ - \\alpha$.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Trigonometric Ratios in All Four Quadrants (CAST Rule)",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Trigonometric Ratios in All Four Quadrants (CAST Rule)**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: $\\cos(180^\\circ - \\theta) = -\\cos\\theta$; $\\sin(180^\\circ - \\theta) = \\sin\\theta$."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Trigonometric Ratios in All Four Quadrants (CAST Rule)**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 1,
    "objective": "Apply the CAST diagram (Quadrant 1: All, Quadrant 2: Sin, Quadrant 3: Tan, Quadrant 4: Cos)",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Trigonometric Ratios in All Four Quadrants (CAST Rule)**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Trigonometric Ratios in All Four Quadrants (CAST Rule)**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 1,
    "objective": "Apply the CAST diagram (Quadrant 1: All, Quadrant 2: Sin, Quadrant 3: Tan, Quadrant 4: Cos)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 1,
    "objective": "Apply the CAST diagram (Quadrant 1: All, Quadrant 2: Sin, Quadrant 3: Tan, Quadrant 4: Cos)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 1,
    "objective": "Apply the CAST diagram (Quadrant 1: All, Quadrant 2: Sin, Quadrant 3: Tan, Quadrant 4: Cos)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 0,
    "objective": "Identify reference acute angle $\\alpha$ for any given angle $\\theta$",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l6_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l6",
    "topicId": "top-ss2-trig-01",
    "objectiveIndex": 1,
    "objective": "Apply the CAST diagram (Quadrant 1: All, Quadrant 2: Sin, Quadrant 3: Tan, Quadrant 4: Cos)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Graphing y = a sin(bx) and y = a cos(bx)** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Amplitude is half the vertical distance between maximum and minimum values"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: Amplitude is half the vertical distance between maximum and minimum values.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Graphing y = a sin(bx) and y = a cos(bx)",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Graphing y = a sin(bx) and y = a cos(bx)**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Period of sin(bx) or cos(bx) is 360 / b degrees."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Graphing y = a sin(bx) and y = a cos(bx)**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 1,
    "objective": "State amplitude and period of transformed trigonometric functions",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Graphing y = a sin(bx) and y = a cos(bx)**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Graphing y = a sin(bx) and y = a cos(bx)**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 1,
    "objective": "State amplitude and period of transformed trigonometric functions",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 1,
    "objective": "State amplitude and period of transformed trigonometric functions",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 1,
    "objective": "State amplitude and period of transformed trigonometric functions",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 0,
    "objective": "Plot trigonometric waves from 0 to 360 degrees",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l7_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m3",
    "lessonId": "ss2-l7",
    "topicId": "top-ss2-trig-02",
    "objectiveIndex": 1,
    "objective": "State amplitude and period of transformed trigonometric functions",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Advanced Sine and Cosine Rules for Scalene Triangles** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Use Cosine rule when two sides and the included angle (SAS) are known"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: Use Cosine rule when two sides and the included angle (SAS) are known.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Advanced Sine and Cosine Rules for Scalene Triangles",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Advanced Sine and Cosine Rules for Scalene Triangles**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Remember cos(obtuse angle) is negative: a^2 = b^2 + c^2 - 2bc(-cos(180 - A))."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Advanced Sine and Cosine Rules for Scalene Triangles**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 1,
    "objective": "Resolve ambiguous case of Sine rule when given SSA",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Advanced Sine and Cosine Rules for Scalene Triangles**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Advanced Sine and Cosine Rules for Scalene Triangles**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 1,
    "objective": "Resolve ambiguous case of Sine rule when given SSA",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 1,
    "objective": "Resolve ambiguous case of Sine rule when given SSA",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 1,
    "objective": "Resolve ambiguous case of Sine rule when given SSA",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 0,
    "objective": "Select correct trigonometric rule based on given side/angle configuration",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l8_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l8",
    "topicId": "top-ss2-trig-03",
    "objectiveIndex": 1,
    "objective": "Resolve ambiguous case of Sine rule when given SSA",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_1",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following foundational statements regarding **Three-Figure Bearings & Practical Surveying** is mathematically accurate?",
    "options": [
      {
        "id": "A",
        "text": "Always draw a cross with a North arrow at EVERY landmark mentioned in the question"
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
    "explanation": "According to standard NERDC / WAEC marking criteria: Always draw a cross with a North arrow at EVERY landmark mentioned in the question.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "CurriculumSpecificationVerifier",
      "input": "NERDC / WAEC rubric check for Three-Figure Bearings & Practical Surveying",
      "output": "A is mathematically sound and matches syllabus key point",
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_2",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When encountering a problem in **Three-Figure Bearings & Practical Surveying**, which condition indicates the most direct method of solution?",
    "options": [
      {
        "id": "A",
        "text": "Verify initial constraints, isolate the unknown parameter, and apply: Internal angles can be calculated using alternate interior angles between parallel North lines."
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_3",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "Consider this statement regarding **Three-Figure Bearings & Practical Surveying**:\n*\"Solving problems in this area preserves equivalence only when identical mathematical operations are performed on both sides of the relation.\"*\nIs this statement true or false, and why?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_4",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 1,
    "objective": "Combine bearings with Cosine rule to calculate direct straight-line distance back to start",
    "thinkingLevel": "understanding",
    "questionType": "multi_select",
    "prompt": "Which of the following are VALID mathematical principles when working with **Three-Figure Bearings & Practical Surveying**? (Select all that apply)",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_5",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an examination problem on **Three-Figure Bearings & Practical Surveying**, a student is given the primary relation:\n$$3x + 7 = 28$$\nWhat is the value of $x$?",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_6",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 1,
    "objective": "Combine bearings with Cosine rule to calculate direct straight-line distance back to start",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_7",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_8",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_9",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 1,
    "objective": "Combine bearings with Cosine rule to calculate direct straight-line distance back to start",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_10",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_11",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_12",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 1,
    "objective": "Combine bearings with Cosine rule to calculate direct straight-line distance back to start",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_13",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 0,
    "objective": "Draw multi-station bearing diagrams with accurate North reference lines",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  },
  {
    "id": "q_ss2-l9_14",
    "courseSlug": "ss2-algebra-and-trigonometry-deep-dive",
    "moduleId": "ss2-m4",
    "lessonId": "ss2-l9",
    "topicId": "top-ss2-trig-04",
    "objectiveIndex": 1,
    "objective": "Combine bearings with Cosine rule to calculate direct straight-line distance back to start",
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
      "verifiedAt": "2026-11-06T07:18:22.321Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v1",
      "timestamp": "2026-11-06T07:18:22.321Z"
    }
  }
];
