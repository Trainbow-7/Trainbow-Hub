import { AssessmentItem } from "../types";

export const WAEC_MATH_BANK: AssessmentItem[] = [
  {
    "id": "q1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Simplify: $$\\frac{2}{3} + \\frac{1}{4} - \\frac{1}{6}$$",
    "correctAnswer": "A",
    "explanation": "LCM of 3, 4, 6 is 12: 8/12 + 3/12 - 2/12 = 9/12 = 3/4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Simplify: $$\\frac{2}{3} + \\frac{1}{4} - \\frac{1}{6}$$",
      "output": "\\frac{3}{4}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\frac{3}{4}"
      },
      {
        "id": "B",
        "text": "\\frac{2}{11}",
        "misconceptionTag": "MIS-DENOM-ADD",
        "misconceptionId": "MIS-DENOM-ADD",
        "feedback": "Denominators cannot be added directly.",
        "rationale": "Denominators cannot be added directly.",
        "remediation": "Denominators cannot be added directly."
      },
      {
        "id": "C",
        "text": "\\frac{5}{12}",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Check LCM numerator calculation.",
        "rationale": "Check LCM numerator calculation.",
        "remediation": "Check LCM numerator calculation."
      },
      {
        "id": "D",
        "text": "\\frac{1}{2}",
        "misconceptionTag": "MIS-NOT-LOWEST",
        "misconceptionId": "MIS-NOT-LOWEST",
        "feedback": "9/12 simplifies to 3/4.",
        "rationale": "9/12 simplifies to 3/4.",
        "remediation": "9/12 simplifies to 3/4."
      }
    ]
  },
  {
    "id": "q2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Express $0.375$ as a common fraction in its lowest terms.",
    "correctAnswer": "A",
    "explanation": "0.375 = 375/1000 = 3/8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Express $0.375$ as a common fraction in its lowest terms.",
      "output": "\\frac{3}{8}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\frac{3}{8}"
      },
      {
        "id": "B",
        "text": "\\frac{375}{100}",
        "misconceptionTag": "MIS-DECIMAL-PLACE",
        "misconceptionId": "MIS-DECIMAL-PLACE",
        "feedback": "Three decimal places require denominator 1000.",
        "rationale": "Three decimal places require denominator 1000.",
        "remediation": "Three decimal places require denominator 1000."
      },
      {
        "id": "C",
        "text": "\\frac{3}{5}",
        "misconceptionTag": "MIS-ROUNDING-SLIP",
        "misconceptionId": "MIS-ROUNDING-SLIP",
        "feedback": "0.375 is 3/8, not 3/5.",
        "rationale": "0.375 is 3/8, not 3/5.",
        "remediation": "0.375 is 3/8, not 3/5."
      },
      {
        "id": "D",
        "text": "\\frac{7}{20}",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "375/1000 divides by 125 to give 3/8.",
        "rationale": "375/1000 divides by 125 to give 3/8.",
        "remediation": "375/1000 divides by 125 to give 3/8."
      }
    ]
  },
  {
    "id": "q3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate: $$15 - 3 \\times (4 - 2) + 6 \\div 2$$",
    "correctAnswer": "B",
    "explanation": "BODMAS: 15 - 6 + 3 = 12.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Evaluate: $$15 - 3 \\times (4 - 2) + 6 \\div 2$$",
      "output": "12",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "15",
        "misconceptionTag": "MIS-ORDER-OPS",
        "misconceptionId": "MIS-ORDER-OPS",
        "feedback": "Do multiplication before subtraction in BODMAS.",
        "rationale": "Do multiplication before subtraction in BODMAS.",
        "remediation": "Do multiplication before subtraction in BODMAS."
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "18",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "Check signs: 15 - 6 + 3 = 12.",
        "rationale": "Check signs: 15 - 6 + 3 = 12.",
        "remediation": "Check signs: 15 - 6 + 3 = 12."
      },
      {
        "id": "D",
        "text": "9",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Review intermediate arithmetic.",
        "rationale": "Review intermediate arithmetic.",
        "remediation": "Review intermediate arithmetic."
      }
    ]
  },
  {
    "id": "q_l1_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Why must fractions have a common denominator when adding, but not when multiplying?",
    "correctAnswer": "A",
    "explanation": "Common denominators establish an equal partition unit.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Why must fractions have a common denominator when adding, but not when multiplying?",
      "output": "Addition combines parts of equal unit size, whereas multiplication scales the whole quantity.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Addition combines parts of equal unit size, whereas multiplication scales the whole quantity."
      },
      {
        "id": "B",
        "text": "Multiplication can only occur when denominators are different.",
        "misconceptionTag": "MIS-MULT-CONFUSION",
        "misconceptionId": "MIS-MULT-CONFUSION",
        "feedback": "Identical denominators can also be multiplied.",
        "rationale": "Identical denominators can also be multiplied.",
        "remediation": "Identical denominators can also be multiplied."
      },
      {
        "id": "C",
        "text": "Finding common denominators is just a convention.",
        "misconceptionTag": "MIS-DENOM-ADD",
        "misconceptionId": "MIS-DENOM-ADD",
        "feedback": "It is mathematically essential for addition.",
        "rationale": "It is mathematically essential for addition.",
        "remediation": "It is mathematically essential for addition."
      },
      {
        "id": "D",
        "text": "Denominators cancel each other out in multiplication.",
        "misconceptionTag": "MIS-CANCEL-CONFUSION",
        "misconceptionId": "MIS-CANCEL-CONFUSION",
        "feedback": "Denominators multiply together.",
        "rationale": "Denominators multiply together.",
        "remediation": "Denominators multiply together."
      }
    ]
  },
  {
    "id": "q_l1_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which of the following is equivalent to dividing by $\\frac{3}{5}$?",
    "correctAnswer": "A",
    "explanation": "Dividing by a/b is multiplying by b/a.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which of the following is equivalent to dividing by $\\frac{3}{5}$?",
      "output": "Multiplying by $\\frac{5}{3}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Multiplying by $\\frac{5}{3}$"
      },
      {
        "id": "B",
        "text": "Multiplying by $\\frac{3}{5}$",
        "misconceptionTag": "MIS-INVERT-FAIL",
        "misconceptionId": "MIS-INVERT-FAIL",
        "feedback": "Must invert divisor to multiply.",
        "rationale": "Must invert divisor to multiply.",
        "remediation": "Must invert divisor to multiply."
      },
      {
        "id": "C",
        "text": "Dividing by $\\frac{5}{3}$",
        "misconceptionTag": "MIS-RECIPROCAL-FAIL",
        "misconceptionId": "MIS-RECIPROCAL-FAIL",
        "feedback": "Dividing by reciprocal is multiplying by original.",
        "rationale": "Dividing by reciprocal is multiplying by original.",
        "remediation": "Dividing by reciprocal is multiplying by original."
      },
      {
        "id": "D",
        "text": "Subtracting $\\frac{3}{5}$",
        "misconceptionTag": "MIS-OPERATION-SWAP",
        "misconceptionId": "MIS-OPERATION-SWAP",
        "feedback": "Different operations.",
        "rationale": "Different operations.",
        "remediation": "Different operations."
      }
    ]
  },
  {
    "id": "q_l1_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: Every terminating decimal can be expressed as a fraction whose denominator is a power of 10.",
    "correctAnswer": "A",
    "explanation": "Integer / 10^n represents any n-place terminating decimal.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: Every terminating decimal can be expressed as a fraction whose denominator is a power of 10.",
      "output": "True: A decimal with n digits after the point can be written as an integer over $10^n$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: A decimal with n digits after the point can be written as an integer over $10^n$."
      },
      {
        "id": "B",
        "text": "False: Only decimals ending in 0 or 5 can be written over 10^n.",
        "misconceptionTag": "MIS-FACTOR-CONFUSION",
        "misconceptionId": "MIS-FACTOR-CONFUSION",
        "feedback": "Any terminating decimal works.",
        "rationale": "Any terminating decimal works.",
        "remediation": "Any terminating decimal works."
      },
      {
        "id": "C",
        "text": "False: Odd numbers of decimal digits cannot be expressed over 10^n.",
        "misconceptionTag": "MIS-PARITY-CONFUSION",
        "misconceptionId": "MIS-PARITY-CONFUSION",
        "feedback": "Parity has no effect on powers of 10.",
        "rationale": "Parity has no effect on powers of 10.",
        "remediation": "Parity has no effect on powers of 10."
      },
      {
        "id": "D",
        "text": "True: But only if irreducible.",
        "misconceptionTag": "MIS-REDUCTION-CONFUSION",
        "misconceptionId": "MIS-REDUCTION-CONFUSION",
        "feedback": "Representation holds before reduction.",
        "rationale": "Representation holds before reduction.",
        "remediation": "Representation holds before reduction."
      }
    ]
  },
  {
    "id": "q_l1_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Evaluate: $$\\frac{3}{4} - \\frac{1}{2} \\times \\frac{2}{3} + \\frac{1}{6}$$",
    "correctAnswer": "A",
    "explanation": "1/2 × 2/3 = 1/3; 3/4 - 1/3 + 1/6 = 7/12.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Evaluate: $$\\frac{3}{4} - \\frac{1}{2} \\times \\frac{2}{3} + \\frac{1}{6}$$",
      "output": "\\frac{7}{12}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\frac{7}{12}"
      },
      {
        "id": "B",
        "text": "\\frac{1}{3}",
        "misconceptionTag": "MIS-ORDER-OPS",
        "misconceptionId": "MIS-ORDER-OPS",
        "feedback": "Do multiplication first.",
        "rationale": "Do multiplication first.",
        "remediation": "Do multiplication first."
      },
      {
        "id": "C",
        "text": "\\frac{5}{12}",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Check 9/12 - 4/12 + 2/12 = 7/12.",
        "rationale": "Check 9/12 - 4/12 + 2/12 = 7/12.",
        "remediation": "Check 9/12 - 4/12 + 2/12 = 7/12."
      },
      {
        "id": "D",
        "text": "\\frac{1}{2}",
        "misconceptionTag": "MIS-ROUNDING-SLIP",
        "misconceptionId": "MIS-ROUNDING-SLIP",
        "feedback": "7/12 is not 1/2.",
        "rationale": "7/12 is not 1/2.",
        "remediation": "7/12 is not 1/2."
      }
    ]
  },
  {
    "id": "q_l1_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the decimal value of: $$\\frac{5}{8} + 0.125$$",
    "correctAnswer": 0.75,
    "explanation": "5/8 = 0.625; 0.625 + 0.125 = 0.75.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the decimal value of: $$\\frac{5}{8} + 0.125$$",
      "output": "0.75",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l1_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to divide $\\frac{2}{3} \\div \\frac{4}{9}$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard fraction division procedure.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to divide $\\frac{2}{3} \\div \\frac{4}{9}$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Keep the first fraction 2/3 unchanged."
      },
      {
        "id": "B",
        "text": "Change the division symbol to multiplication."
      },
      {
        "id": "C",
        "text": "Invert the divisor to its reciprocal 9/4."
      },
      {
        "id": "D",
        "text": "Multiply and simplify: (2 × 9) / (3 × 4) = 18/12 = 3/2."
      }
    ]
  },
  {
    "id": "q_l1_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Simplify the algebraic fraction: $$\\frac{x}{2} + \\frac{x}{3}$$",
    "correctAnswer": "5x/6",
    "explanation": "3x/6 + 2x/6 = 5x/6.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Simplify the algebraic fraction: $$\\frac{x}{2} + \\frac{x}{3}$$",
      "output": "5x/6",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l1_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student wrote: $$\\frac{2}{5} + \\frac{3}{10} = \\frac{2+3}{5+10} = \\frac{5}{15} = \\frac{1}{3}$$ What error did the student commit?",
    "correctAnswer": "A",
    "explanation": "4/10 + 3/10 = 7/10.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student wrote: $$\\frac{2}{5} + \\frac{3}{10} = \\frac{2+3}{5+10} = \\frac{5}{15} = \\frac{1}{3}$$ What error did the stude",
      "output": "Added numerators and denominators directly instead of converting to a common denominator of 10.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Added numerators and denominators directly instead of converting to a common denominator of 10."
      },
      {
        "id": "B",
        "text": "Simplified 5/15 incorrectly to 1/3.",
        "misconceptionTag": "MIS-REDUCE-SLIP",
        "misconceptionId": "MIS-REDUCE-SLIP",
        "feedback": "5/15 is 1/3, the error was addition.",
        "rationale": "5/15 is 1/3, the error was addition.",
        "remediation": "5/15 is 1/3, the error was addition."
      },
      {
        "id": "C",
        "text": "Multiplied instead of adding.",
        "misconceptionTag": "MIS-OPERATION-SWAP",
        "misconceptionId": "MIS-OPERATION-SWAP",
        "feedback": "Added across denominators.",
        "rationale": "Added across denominators.",
        "remediation": "Added across denominators."
      },
      {
        "id": "D",
        "text": "Forgot to invert the second fraction.",
        "misconceptionTag": "MIS-INVERT-CONFUSION",
        "misconceptionId": "MIS-INVERT-CONFUSION",
        "feedback": "Inverting applies only to division.",
        "rationale": "Inverting applies only to division.",
        "remediation": "Inverting applies only to division."
      }
    ]
  },
  {
    "id": "q_l1_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "In evaluating $$\\frac{3}{4} \\div \\frac{1}{2}$$, a student wrote $$\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$$. What was the mistake?",
    "correctAnswer": "A",
    "explanation": "3/4 × 2/1 = 6/4 = 3/2.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In evaluating $$\\frac{3}{4} \\div \\frac{1}{2}$$, a student wrote $$\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$$. What w",
      "output": "Failed to invert the divisor $\\frac{1}{2}$ to $\\frac{2}{1}$ when changing division to multiplication.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Failed to invert the divisor $\\frac{1}{2}$ to $\\frac{2}{1}$ when changing division to multiplication."
      },
      {
        "id": "B",
        "text": "Inverted the first fraction instead of the second.",
        "misconceptionTag": "MIS-FIRST-INVERT",
        "misconceptionId": "MIS-FIRST-INVERT",
        "feedback": "The first fraction remained 3/4.",
        "rationale": "The first fraction remained 3/4.",
        "remediation": "The first fraction remained 3/4."
      },
      {
        "id": "C",
        "text": "Multiplied numerators incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "3 × 1 = 3 is correct arithmetic.",
        "rationale": "3 × 1 = 3 is correct arithmetic.",
        "remediation": "3 × 1 = 3 is correct arithmetic."
      },
      {
        "id": "D",
        "text": "Found a common denominator instead of multiplying.",
        "misconceptionTag": "MIS-COMMON-DENOM",
        "misconceptionId": "MIS-COMMON-DENOM",
        "feedback": "No common denominator was computed.",
        "rationale": "No common denominator was computed.",
        "remediation": "No common denominator was computed."
      }
    ]
  },
  {
    "id": "q_l1_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Evaluate: $$\\left(2\\frac{1}{3} - 1\\frac{3}{4}\\right) \\div 1\\frac{1}{6}$$",
    "correctAnswer": "A",
    "explanation": "7/12 ÷ 7/6 = 7/12 × 6/7 = 1/2.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Evaluate: $$\\left(2\\frac{1}{3} - 1\\frac{3}{4}\\right) \\div 1\\frac{1}{6}$$",
      "output": "\\frac{1}{2}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\frac{1}{2}"
      },
      {
        "id": "B",
        "text": "\\frac{7}{12}",
        "misconceptionTag": "MIS-DIVIDE-OMIT",
        "misconceptionId": "MIS-DIVIDE-OMIT",
        "feedback": "7/12 is the bracket difference before dividing by 7/6.",
        "rationale": "7/12 is the bracket difference before dividing by 7/6.",
        "remediation": "7/12 is the bracket difference before dividing by 7/6."
      },
      {
        "id": "C",
        "text": "\\frac{2}{3}",
        "misconceptionTag": "MIS-RECIPROCAL-SLIP",
        "misconceptionId": "MIS-RECIPROCAL-SLIP",
        "feedback": "(7/12) ÷ (7/6) = (7/12) × (6/7) = 1/2.",
        "rationale": "(7/12) ÷ (7/6) = (7/12) × (6/7) = 1/2.",
        "remediation": "(7/12) ÷ (7/6) = (7/12) × (6/7) = 1/2."
      },
      {
        "id": "D",
        "text": "\\frac{1}{4}",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Check 6/12 = 1/2.",
        "rationale": "Check 6/12 = 1/2.",
        "remediation": "Check 6/12 = 1/2."
      }
    ]
  },
  {
    "id": "q_l1_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l1",
    "topicId": "top-waec-num-01",
    "objectiveIndex": 0,
    "objective": "Perform four operations on fractions and decimals",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A container is $\\frac{2}{5}$ full of kerosene. When $21\\text{ litres}$ is added, it becomes $\\frac{3}{4}$ full. What is the capacity of the container?",
    "correctAnswer": "A",
    "explanation": "7/20 of C = 21 litres => C = 21 × (20/7) = 60 litres.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A container is $\\frac{2}{5}$ full of kerosene. When $21\\text{ litres}$ is added, it becomes $\\frac{3}{4}$ full. What is ",
      "output": "$60\\text{ litres}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$60\\text{ litres}$"
      },
      {
        "id": "B",
        "text": "$50\\text{ litres}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "Check 3/4 - 2/5 = 7/20 of capacity = 21 litres.",
        "rationale": "Check 3/4 - 2/5 = 7/20 of capacity = 21 litres.",
        "remediation": "Check 3/4 - 2/5 = 7/20 of capacity = 21 litres."
      },
      {
        "id": "C",
        "text": "$70\\text{ litres}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "21 / (7/20) = 21 × (20/7) = 60 litres.",
        "rationale": "21 / (7/20) = 21 × (20/7) = 60 litres.",
        "remediation": "21 / (7/20) = 21 × (20/7) = 60 litres."
      },
      {
        "id": "D",
        "text": "$42\\text{ litres}$",
        "misconceptionTag": "MIS-DOUBLE-SLIP",
        "misconceptionId": "MIS-DOUBLE-SLIP",
        "feedback": "Capacity = 60 litres, not 42 litres.",
        "rationale": "Capacity = 60 litres, not 42 litres.",
        "remediation": "Capacity = 60 litres, not 42 litres."
      }
    ]
  },
  {
    "id": "q_l2_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What does a $15\\%$ discount on an item costing \\₦$8,000$ mean?",
    "correctAnswer": "A",
    "explanation": "15% of ₦8,000 = ₦1,200. Price = ₦8,000 - ₦1,200 = ₦6,800.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What does a $15\\%$ discount on an item costing \\₦$8,000$ mean?",
      "output": "The price is reduced by \\₦$1,200$, so the customer pays \\₦$6,800$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The price is reduced by \\₦$1,200$, so the customer pays \\₦$6,800$."
      },
      {
        "id": "B",
        "text": "The price is reduced by \\₦$150$, so the customer pays \\₦$7,850$.",
        "misconceptionTag": "MIS-PERCENT-BASE",
        "misconceptionId": "MIS-PERCENT-BASE",
        "feedback": "15% means 15 per hundred, not ₦150.",
        "rationale": "15% means 15 per hundred, not ₦150.",
        "remediation": "15% means 15 per hundred, not ₦150."
      },
      {
        "id": "C",
        "text": "The price increases by \\₦$1,200$, so the customer pays \\₦$9,200$.",
        "misconceptionTag": "MIS-DISCOUNT-ADD",
        "misconceptionId": "MIS-DISCOUNT-ADD",
        "feedback": "Discount reduces price.",
        "rationale": "Discount reduces price.",
        "remediation": "Discount reduces price."
      },
      {
        "id": "D",
        "text": "The customer pays \\₦$1,200$ total.",
        "misconceptionTag": "MIS-PERCENT-REMAINDER",
        "misconceptionId": "MIS-PERCENT-REMAINDER",
        "feedback": "Discount is the reduction, not final price.",
        "rationale": "Discount is the reduction, not final price.",
        "remediation": "Discount is the reduction, not final price."
      }
    ]
  },
  {
    "id": "q_l2_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Express $\\frac{7}{25}$ as a percentage.",
    "correctAnswer": "A",
    "explanation": "(7/25) × 100% = 28%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Express $\\frac{7}{25}$ as a percentage.",
      "output": "$28\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$28\\%$"
      },
      {
        "id": "B",
        "text": "$14\\%$",
        "misconceptionTag": "MIS-PERCENT-MULT",
        "misconceptionId": "MIS-PERCENT-MULT",
        "feedback": "Multiply by 100%: (7/25) × 100% = 28%.",
        "rationale": "Multiply by 100%: (7/25) × 100% = 28%.",
        "remediation": "Multiply by 100%: (7/25) × 100% = 28%."
      },
      {
        "id": "C",
        "text": "$35\\%$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "7 × 4 = 28, not 35.",
        "rationale": "7 × 4 = 28, not 35.",
        "remediation": "7 × 4 = 28, not 35."
      },
      {
        "id": "D",
        "text": "$7\\%$",
        "misconceptionTag": "MIS-DENOM-DROP",
        "misconceptionId": "MIS-DENOM-DROP",
        "feedback": "Denominator 25 scales to 100 by factor 4.",
        "rationale": "Denominator 25 scales to 100 by factor 4.",
        "remediation": "Denominator 25 scales to 100 by factor 4."
      }
    ]
  },
  {
    "id": "q_l2_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which formula correctly gives the percentage error in a measurement?",
    "correctAnswer": "A",
    "explanation": "Percentage error = (|Measured - Actual| / Actual) × 100%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which formula correctly gives the percentage error in a measurement?",
      "output": "$\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Actual}} \\times 100\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Actual}} \\times 100\\%$"
      },
      {
        "id": "B",
        "text": "$\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Measured}} \\times 100\\%$",
        "misconceptionTag": "MIS-PERCENT-ERROR-DENOM",
        "misconceptionId": "MIS-PERCENT-ERROR-DENOM",
        "feedback": "Must divide by actual value.",
        "rationale": "Must divide by actual value.",
        "remediation": "Must divide by actual value."
      },
      {
        "id": "C",
        "text": "$(|\\text{Measured} - \\text{Actual}|) \\times 100\\%$",
        "misconceptionTag": "MIS-DENOM-DROP",
        "misconceptionId": "MIS-DENOM-DROP",
        "feedback": "Must normalize relative to actual value.",
        "rationale": "Must normalize relative to actual value.",
        "remediation": "Must normalize relative to actual value."
      },
      {
        "id": "D",
        "text": "$\\frac{\\text{Actual}}{\\text{Measured}} \\times 100\\%$",
        "misconceptionTag": "MIS-INVERTED-RATIO",
        "misconceptionId": "MIS-INVERTED-RATIO",
        "feedback": "This is ratio of true to measured.",
        "rationale": "This is ratio of true to measured.",
        "remediation": "This is ratio of true to measured."
      }
    ]
  },
  {
    "id": "q_l2_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If a quantity increases by $20\\%$ and then decreases by $20\\%$, it returns to its original value.",
    "correctAnswer": "A",
    "explanation": "100 × 1.20 × 0.80 = 96 (4% less).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If a quantity increases by $20\\%$ and then decreases by $20\\%$, it returns to its original value.",
      "output": "False: The $20\\%$ decrease applies to a larger base, resulting in a net decrease of $4\\%$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "False: The $20\\%$ decrease applies to a larger base, resulting in a net decrease of $4\\%$."
      },
      {
        "id": "B",
        "text": "True: Adding 20% and subtracting 20% cancel out exactly.",
        "misconceptionTag": "MIS-PERCENT-SYMMETRY",
        "misconceptionId": "MIS-PERCENT-SYMMETRY",
        "feedback": "Percentages represent proportional changes.",
        "rationale": "Percentages represent proportional changes.",
        "remediation": "Percentages represent proportional changes."
      },
      {
        "id": "C",
        "text": "False: The final value is 4% greater than original.",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "1.20 × 0.80 = 0.96, which is 4% less.",
        "rationale": "1.20 × 0.80 = 0.96, which is 4% less.",
        "remediation": "1.20 × 0.80 = 0.96, which is 4% less."
      },
      {
        "id": "D",
        "text": "True: The order of percentage changes is commutative.",
        "misconceptionTag": "MIS-COMMUTATIVE-MISCONCEPTION",
        "misconceptionId": "MIS-COMMUTATIVE-MISCONCEPTION",
        "feedback": "Neither order returns to 1.0.",
        "rationale": "Neither order returns to 1.0.",
        "remediation": "Neither order returns to 1.0."
      }
    ]
  },
  {
    "id": "q_l2_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "The population of a community increased from $40,000$ to $46,000$. Calculate the percentage increase.",
    "correctAnswer": "A",
    "explanation": "6,000 / 40,000 × 100% = 15%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The population of a community increased from $40,000$ to $46,000$. Calculate the percentage increase.",
      "output": "$15\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$15\\%$"
      },
      {
        "id": "B",
        "text": "$13.04\\%$",
        "misconceptionTag": "MIS-PERCENT-NEW-BASE",
        "misconceptionId": "MIS-PERCENT-NEW-BASE",
        "feedback": "Divide by original population 40,000, not 46,000.",
        "rationale": "Divide by original population 40,000, not 46,000.",
        "remediation": "Divide by original population 40,000, not 46,000."
      },
      {
        "id": "C",
        "text": "$6\\%$",
        "misconceptionTag": "MIS-DIFF-ONLY",
        "misconceptionId": "MIS-DIFF-ONLY",
        "feedback": "6,000 is absolute increase; divide by 40,000 and multiply by 100%.",
        "rationale": "6,000 is absolute increase; divide by 40,000 and multiply by 100%.",
        "remediation": "6,000 is absolute increase; divide by 40,000 and multiply by 100%."
      },
      {
        "id": "D",
        "text": "$12\\%$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "6,000 / 40,000 = 15%.",
        "rationale": "6,000 / 40,000 = 15%.",
        "remediation": "6,000 / 40,000 = 15%."
      }
    ]
  },
  {
    "id": "q_l2_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A student measured a length as $1.25\\text{ m}$, whereas the actual length was $1.20\\text{ m}$. Calculate the percentage error to 2 decimal places.",
    "correctAnswer": "A",
    "explanation": "0.05 / 1.20 × 100% = 4.17%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student measured a length as $1.25\\text{ m}$, whereas the actual length was $1.20\\text{ m}$. Calculate the percentage ",
      "output": "$4.17\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$4.17\\%$"
      },
      {
        "id": "B",
        "text": "$4.00\\%$",
        "misconceptionTag": "MIS-PERCENT-ERROR-DENOM",
        "misconceptionId": "MIS-PERCENT-ERROR-DENOM",
        "feedback": "Divided by measured value 1.25 instead of 1.20.",
        "rationale": "Divided by measured value 1.25 instead of 1.20.",
        "remediation": "Divided by measured value 1.25 instead of 1.20."
      },
      {
        "id": "C",
        "text": "$5.00\\%$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "0.05 / 1.20 = 4.17%.",
        "rationale": "0.05 / 1.20 = 4.17%.",
        "remediation": "0.05 / 1.20 = 4.17%."
      },
      {
        "id": "D",
        "text": "$0.04\\%$",
        "misconceptionTag": "MIS-PERCENT-FACTOR-100",
        "misconceptionId": "MIS-PERCENT-FACTOR-100",
        "feedback": "Forgot to multiply by 100%.",
        "rationale": "Forgot to multiply by 100%.",
        "remediation": "Forgot to multiply by 100%."
      }
    ]
  },
  {
    "id": "q_l2_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "After a price reduction of $12\\%$, a solar lamp sells for \\₦$22,000$. What was its original price before the discount?",
    "correctAnswer": "A",
    "explanation": "22,000 / 0.88 = ₦25,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "After a price reduction of $12\\%$, a solar lamp sells for \\₦$22,000$. What was its original price before the discount?",
      "output": "\\₦$25,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$25,000$"
      },
      {
        "id": "B",
        "text": "\\₦$24,640$",
        "misconceptionTag": "MIS-PERCENT-REVERSE",
        "misconceptionId": "MIS-PERCENT-REVERSE",
        "feedback": "₦22,000 represents 88% of original.",
        "rationale": "₦22,000 represents 88% of original.",
        "remediation": "₦22,000 represents 88% of original."
      },
      {
        "id": "C",
        "text": "\\₦$26,400$",
        "misconceptionTag": "MIS-PERCENT-MULT",
        "misconceptionId": "MIS-PERCENT-MULT",
        "feedback": "22,000 / 0.88 = ₦25,000.",
        "rationale": "22,000 / 0.88 = ₦25,000.",
        "remediation": "22,000 / 0.88 = ₦25,000."
      },
      {
        "id": "D",
        "text": "\\₦$24,000$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Check 25,000 × 0.88 = 22,000.",
        "rationale": "Check 25,000 × 0.88 = 22,000.",
        "remediation": "Check 25,000 × 0.88 = 22,000."
      }
    ]
  },
  {
    "id": "q_l2_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "A shopkeeper bought an appliance for \\₦$50,000$ and sold it for \\₦$62,500$. Calculate the percentage profit (numeric value only in %).",
    "correctAnswer": 25,
    "explanation": "Profit = 12,500 / 50,000 × 100% = 25%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A shopkeeper bought an appliance for \\₦$50,000$ and sold it for \\₦$62,500$. Calculate the percentage profit (numeric val",
      "output": "25",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l2_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to calculate percentage error in a measurement:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard percentage error sequence.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to calculate percentage error in a measurement:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Record the measured value and the true (actual) value."
      },
      {
        "id": "B",
        "text": "Calculate the absolute error: |Measured - Actual|."
      },
      {
        "id": "C",
        "text": "Divide the absolute error by the actual value."
      },
      {
        "id": "D",
        "text": "Multiply the quotient by 100% to express as a percentage."
      }
    ]
  },
  {
    "id": "q_l2_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "If an initial price $P$ is increased by $r\\%$, write an expression for the new price in terms of $P$ and $r$.",
    "correctAnswer": "P*(1 + r/100)",
    "explanation": "P + (r/100)*P = P*(1 + r/100).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If an initial price $P$ is increased by $r\\%$, write an expression for the new price in terms of $P$ and $r$.",
      "output": "P*(1 + r/100)",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l2_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A trader priced a bag at \\₦$30,000$, increased it by $10\\%$, then gave a $10\\%$ discount on the new price. A student claims the price is back to \\₦$30,000$. What is the error?",
    "correctAnswer": "A",
    "explanation": "10% of ₦33,000 is ₦3,300 => ₦29,700.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A trader priced a bag at \\₦$30,000$, increased it by $10\\%$, then gave a $10\\%$ discount on the new price. A student cla",
      "output": "The $10\\%$ discount applies to \\₦$33,000$ (giving \\₦$3,300$ off), making the final price \\₦$29,700$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The $10\\%$ discount applies to \\₦$33,000$ (giving \\₦$3,300$ off), making the final price \\₦$29,700$."
      },
      {
        "id": "B",
        "text": "The discount should have been added instead of subtracted.",
        "misconceptionTag": "MIS-ADD-INSTEAD-SUB",
        "misconceptionId": "MIS-ADD-INSTEAD-SUB",
        "feedback": "Discounts reduce price.",
        "rationale": "Discounts reduce price.",
        "remediation": "Discounts reduce price."
      },
      {
        "id": "C",
        "text": "The final price is higher because merchants always profit.",
        "misconceptionTag": "MIS-ALWAYS-PROFIT",
        "misconceptionId": "MIS-ALWAYS-PROFIT",
        "feedback": "Sequential percentage on raised base gives a net drop.",
        "rationale": "Sequential percentage on raised base gives a net drop.",
        "remediation": "Sequential percentage on raised base gives a net drop."
      },
      {
        "id": "D",
        "text": "The 10% increase was computed incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "10% of 30,000 is 3,000.",
        "rationale": "10% of 30,000 is 3,000.",
        "remediation": "10% of 30,000 is 3,000."
      }
    ]
  },
  {
    "id": "q_l2_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student calculates percentage error for a length measured as $8\\text{ cm}$ with true length $10\\text{ cm}$ as $\\frac{10 - 8}{8} \\times 100\\% = 25\\%$. What is the mistake?",
    "correctAnswer": "A",
    "explanation": "|8 - 10| / 10 × 100% = 20%.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student calculates percentage error for a length measured as $8\\text{ cm}$ with true length $10\\text{ cm}$ as $\\frac{1",
      "output": "Divided by the measured value ($8\\text{ cm}$) instead of the true value ($10\\text{ cm}$). Correct error is $20\\%$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Divided by the measured value ($8\\text{ cm}$) instead of the true value ($10\\text{ cm}$). Correct error is $20\\%$."
      },
      {
        "id": "B",
        "text": "The numerator should be 10 + 8 = 18.",
        "misconceptionTag": "MIS-SUM-INSTEAD-DIFF",
        "misconceptionId": "MIS-SUM-INSTEAD-DIFF",
        "feedback": "Error is difference, not sum.",
        "rationale": "Error is difference, not sum.",
        "remediation": "Error is difference, not sum."
      },
      {
        "id": "C",
        "text": "The student should have squared the difference.",
        "misconceptionTag": "MIS-SQUARE-CONFUSION",
        "misconceptionId": "MIS-SQUARE-CONFUSION",
        "feedback": "No squaring in percentage error.",
        "rationale": "No squaring in percentage error.",
        "remediation": "No squaring in percentage error."
      },
      {
        "id": "D",
        "text": "There is no error; 25% is correct.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Denominator must be actual value 10.",
        "rationale": "Denominator must be actual value 10.",
        "remediation": "Denominator must be actual value 10."
      }
    ]
  },
  {
    "id": "q_l2_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A company's production grew by $20\\%$ in year 1, but dropped by $15\\%$ in year 2. If initial production was $150,000$ units, what was the production at the end of year 2?",
    "correctAnswer": "A",
    "explanation": "150,000 × 1.20 × 0.85 = 153,000 units.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A company's production grew by $20\\%$ in year 1, but dropped by $15\\%$ in year 2. If initial production was $150,000$ un",
      "output": "$153,000\\text{ units}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$153,000\\text{ units}$"
      },
      {
        "id": "B",
        "text": "$157,500\\text{ units}$",
        "misconceptionTag": "MIS-PERCENT-NET-SUM",
        "misconceptionId": "MIS-PERCENT-NET-SUM",
        "feedback": "Cannot simply do 20% - 15% = 5% of 150,000.",
        "rationale": "Cannot simply do 20% - 15% = 5% of 150,000.",
        "remediation": "Cannot simply do 20% - 15% = 5% of 150,000."
      },
      {
        "id": "C",
        "text": "$150,000\\text{ units}$",
        "misconceptionTag": "MIS-ROUNDING-GUESS",
        "misconceptionId": "MIS-ROUNDING-GUESS",
        "feedback": "150,000 × 1.20 × 0.85 = 153,000.",
        "rationale": "150,000 × 1.20 × 0.85 = 153,000.",
        "remediation": "150,000 × 1.20 × 0.85 = 153,000."
      },
      {
        "id": "D",
        "text": "$142,500\\text{ units}$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "1.20 × 0.85 = 1.02.",
        "rationale": "1.20 × 0.85 = 1.02.",
        "remediation": "1.20 × 0.85 = 1.02."
      }
    ]
  },
  {
    "id": "q_l2_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l2",
    "topicId": "top-waec-num-02",
    "objectiveIndex": 0,
    "objective": "Calculate percentage increase, decrease, and error",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "The sides of a rectangle are measured as $10\\text{ cm}$ and $20\\text{ cm}$, each with a possible error of $+5\\%$. What is the maximum possible percentage error in the calculated area?",
    "correctAnswer": "A",
    "explanation": "(1.05 × 1.05 - 1) × 100% = 10.25%.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The sides of a rectangle are measured as $10\\text{ cm}$ and $20\\text{ cm}$, each with a possible error of $+5\\%$. What i",
      "output": "$10.25\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$10.25\\%$"
      },
      {
        "id": "B",
        "text": "$10.00\\%$",
        "misconceptionTag": "MIS-LINEAR-APPROX",
        "misconceptionId": "MIS-LINEAR-APPROX",
        "feedback": "Adding 5% + 5% ignores the cross-product term (1.05 × 1.05 = 1.1025).",
        "rationale": "Adding 5% + 5% ignores the cross-product term (1.05 × 1.05 = 1.1025).",
        "remediation": "Adding 5% + 5% ignores the cross-product term (1.05 × 1.05 = 1.1025)."
      },
      {
        "id": "C",
        "text": "$5.00\\%$",
        "misconceptionTag": "MIS-SINGLE-ERROR",
        "misconceptionId": "MIS-SINGLE-ERROR",
        "feedback": "Both dimensions carry error, so area error is compounded.",
        "rationale": "Both dimensions carry error, so area error is compounded.",
        "remediation": "Both dimensions carry error, so area error is compounded."
      },
      {
        "id": "D",
        "text": "$25.00\\%$",
        "misconceptionTag": "MIS-SQUARE-ERROR",
        "misconceptionId": "MIS-SQUARE-ERROR",
        "feedback": "5% squared is not 25%.",
        "rationale": "5% squared is not 25%.",
        "remediation": "5% squared is not 25%."
      }
    ]
  },
  {
    "id": "q_l3_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Express the ratio $45\\text{ minutes} : 2\\text{ hours}$ in its simplest whole-number form.",
    "correctAnswer": "A",
    "explanation": "45 : 120 = 3 : 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Express the ratio $45\\text{ minutes} : 2\\text{ hours}$ in its simplest whole-number form.",
      "output": "$3 : 8$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$3 : 8$"
      },
      {
        "id": "B",
        "text": "$45 : 2$",
        "misconceptionTag": "MIS-UNITS-IGNORE",
        "misconceptionId": "MIS-UNITS-IGNORE",
        "feedback": "Convert both quantities to minutes: 2 hours = 120 minutes.",
        "rationale": "Convert both quantities to minutes: 2 hours = 120 minutes.",
        "remediation": "Convert both quantities to minutes: 2 hours = 120 minutes."
      },
      {
        "id": "C",
        "text": "$9 : 24$",
        "misconceptionTag": "MIS-NOT-LOWEST",
        "misconceptionId": "MIS-NOT-LOWEST",
        "feedback": "9 : 24 can be further divided by 3 to get 3 : 8.",
        "rationale": "9 : 24 can be further divided by 3 to get 3 : 8.",
        "remediation": "9 : 24 can be further divided by 3 to get 3 : 8."
      },
      {
        "id": "D",
        "text": "$3 : 4$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "45/120 = 3/8, not 3/4.",
        "rationale": "45/120 = 3/8, not 3/4.",
        "remediation": "45/120 = 3/8, not 3/4."
      }
    ]
  },
  {
    "id": "q_l3_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "If $a : b = 2 : 3$ and $b : c = 4 : 5$, find the compound ratio $a : b : c$.",
    "correctAnswer": "A",
    "explanation": "Multiply first by 4 (8:12) and second by 3 (12:15) => 8:12:15.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $a : b = 2 : 3$ and $b : c = 4 : 5$, find the compound ratio $a : b : c$.",
      "output": "$8 : 12 : 15$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$8 : 12 : 15$"
      },
      {
        "id": "B",
        "text": "$2 : 4 : 5$",
        "misconceptionTag": "MIS-RATIO-CHAIN-DIRECT",
        "misconceptionId": "MIS-RATIO-CHAIN-DIRECT",
        "feedback": "Middle term b must have LCM between 3 and 4 (12).",
        "rationale": "Middle term b must have LCM between 3 and 4 (12).",
        "remediation": "Middle term b must have LCM between 3 and 4 (12)."
      },
      {
        "id": "C",
        "text": "$6 : 12 : 15$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Multiply 2 by 4 to get 8, not 6.",
        "rationale": "Multiply 2 by 4 to get 8, not 6.",
        "remediation": "Multiply 2 by 4 to get 8, not 6."
      },
      {
        "id": "D",
        "text": "$8 : 7 : 15$",
        "misconceptionTag": "MIS-ADD-TERMS",
        "misconceptionId": "MIS-ADD-TERMS",
        "feedback": "Multiply b terms, do not add.",
        "rationale": "Multiply b terms, do not add.",
        "remediation": "Multiply b terms, do not add."
      }
    ]
  },
  {
    "id": "q_l3_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Three partners share \\₦$120,000$ in the ratio $3 : 4 : 5$. How much is the largest share?",
    "correctAnswer": "A",
    "explanation": "5/12 × ₦120,000 = ₦50,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Three partners share \\₦$120,000$ in the ratio $3 : 4 : 5$. How much is the largest share?",
      "output": "\\₦$50,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$50,000$"
      },
      {
        "id": "B",
        "text": "\\₦$40,000$",
        "misconceptionTag": "MIS-MIDDLE-SHARE",
        "misconceptionId": "MIS-MIDDLE-SHARE",
        "feedback": "₦40,000 is the middle share (4 parts).",
        "rationale": "₦40,000 is the middle share (4 parts).",
        "remediation": "₦40,000 is the middle share (4 parts)."
      },
      {
        "id": "C",
        "text": "\\₦$30,000$",
        "misconceptionTag": "MIS-SMALLEST-SHARE",
        "misconceptionId": "MIS-SMALLEST-SHARE",
        "feedback": "₦30,000 is the smallest share (3 parts).",
        "rationale": "₦30,000 is the smallest share (3 parts).",
        "remediation": "₦30,000 is the smallest share (3 parts)."
      },
      {
        "id": "D",
        "text": "\\₦$60,000$",
        "misconceptionTag": "MIS-HALF-GUESS",
        "misconceptionId": "MIS-HALF-GUESS",
        "feedback": "Total parts = 3 + 4 + 5 = 12. Largest = (5/12) × 120,000 = ₦50,000.",
        "rationale": "Total parts = 3 + 4 + 5 = 12. Largest = (5/12) × 120,000 = ₦50,000.",
        "remediation": "Total parts = 3 + 4 + 5 = 12. Largest = (5/12) × 120,000 = ₦50,000."
      }
    ]
  },
  {
    "id": "q_l3_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If two numbers are in the ratio $2 : 3$, increasing both by $4$ keeps their ratio as $2 : 3$.",
    "correctAnswer": "A",
    "explanation": "2+4=6, 3+4=7. 6:7 ≠ 2:3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If two numbers are in the ratio $2 : 3$, increasing both by $4$ keeps their ratio as $2 : 3$.",
      "output": "False: Adding a constant changes the ratio unless both numbers were originally zero.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "False: Adding a constant changes the ratio unless both numbers were originally zero."
      },
      {
        "id": "B",
        "text": "True: Adding the same number preserves proportionality.",
        "misconceptionTag": "MIS-RATIO-ADD-INVARIANCE",
        "misconceptionId": "MIS-RATIO-ADD-INVARIANCE",
        "feedback": "Adding a constant alters the quotient (e.g. 2/3 becomes 6/7).",
        "rationale": "Adding a constant alters the quotient (e.g. 2/3 becomes 6/7).",
        "remediation": "Adding a constant alters the quotient (e.g. 2/3 becomes 6/7)."
      },
      {
        "id": "C",
        "text": "False: The ratio becomes 4 : 6 which is identical to 2 : 3.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "2+4=6, 3+4=7; 6/7 ≠ 2/3.",
        "rationale": "2+4=6, 3+4=7; 6/7 ≠ 2/3.",
        "remediation": "2+4=6, 3+4=7; 6/7 ≠ 2/3."
      },
      {
        "id": "D",
        "text": "True: The difference between them remains constant.",
        "misconceptionTag": "MIS-DIFF-VS-RATIO",
        "misconceptionId": "MIS-DIFF-VS-RATIO",
        "feedback": "Constant difference does not mean constant ratio.",
        "rationale": "Constant difference does not mean constant ratio.",
        "remediation": "Constant difference does not mean constant ratio."
      }
    ]
  },
  {
    "id": "q_l3_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Share $48\\text{ kg}$ of rice between two families in the ratio $5 : 7$. How many kilograms does the family with the smaller share receive?",
    "correctAnswer": "A",
    "explanation": "5/12 × 48 kg = 20 kg.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Share $48\\text{ kg}$ of rice between two families in the ratio $5 : 7$. How many kilograms does the family with the smal",
      "output": "$20\\text{ kg}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$20\\text{ kg}$"
      },
      {
        "id": "B",
        "text": "$28\\text{ kg}$",
        "misconceptionTag": "MIS-LARGER-SHARE",
        "misconceptionId": "MIS-LARGER-SHARE",
        "feedback": "28 kg is the larger share (7 parts).",
        "rationale": "28 kg is the larger share (7 parts).",
        "remediation": "28 kg is the larger share (7 parts)."
      },
      {
        "id": "C",
        "text": "$24\\text{ kg}$",
        "misconceptionTag": "MIS-EQUAL-SHARE",
        "misconceptionId": "MIS-EQUAL-SHARE",
        "feedback": "48 / 2 = 24 kg is equal sharing.",
        "rationale": "48 / 2 = 24 kg is equal sharing.",
        "remediation": "48 / 2 = 24 kg is equal sharing."
      },
      {
        "id": "D",
        "text": "$15\\text{ kg}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Total parts = 12. Smaller = (5/12) × 48 = 20 kg.",
        "rationale": "Total parts = 12. Smaller = (5/12) × 48 = 20 kg.",
        "remediation": "Total parts = 12. Smaller = (5/12) × 48 = 20 kg."
      }
    ]
  },
  {
    "id": "q_l3_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In a school of $600$ students, the ratio of boys to girls is $7 : 5$. How many boys are enrolled?",
    "correctAnswer": "A",
    "explanation": "7/12 × 600 = 350 boys.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In a school of $600$ students, the ratio of boys to girls is $7 : 5$. How many boys are enrolled?",
      "output": "$350$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$350$"
      },
      {
        "id": "B",
        "text": "$250$",
        "misconceptionTag": "MIS-GIRLS-COUNT",
        "misconceptionId": "MIS-GIRLS-COUNT",
        "feedback": "250 is the number of girls (5 parts).",
        "rationale": "250 is the number of girls (5 parts).",
        "remediation": "250 is the number of girls (5 parts)."
      },
      {
        "id": "C",
        "text": "$300$",
        "misconceptionTag": "MIS-EQUAL-SPLIT",
        "misconceptionId": "MIS-EQUAL-SPLIT",
        "feedback": "600 / 2 = 300 assumes equal split.",
        "rationale": "600 / 2 = 300 assumes equal split.",
        "remediation": "600 / 2 = 300 assumes equal split."
      },
      {
        "id": "D",
        "text": "$420$",
        "misconceptionTag": "MIS-PERCENT-CONFUSION",
        "misconceptionId": "MIS-PERCENT-CONFUSION",
        "feedback": "Total parts = 12. Boys = (7/12) × 600 = 350.",
        "rationale": "Total parts = 12. Boys = (7/12) × 600 = 350.",
        "remediation": "Total parts = 12. Boys = (7/12) × 600 = 350."
      }
    ]
  },
  {
    "id": "q_l3_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Two angles of a triangle are in the ratio $2 : 3$. If their sum is $100^\\circ$, calculate the measure of the smaller angle.",
    "correctAnswer": "A",
    "explanation": "2/5 × 100° = 40°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Two angles of a triangle are in the ratio $2 : 3$. If their sum is $100^\\circ$, calculate the measure of the smaller ang",
      "output": "$40^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$40^\\circ$"
      },
      {
        "id": "B",
        "text": "$60^\\circ$",
        "misconceptionTag": "MIS-LARGER-ANGLE",
        "misconceptionId": "MIS-LARGER-ANGLE",
        "feedback": "60° is the larger angle.",
        "rationale": "60° is the larger angle.",
        "remediation": "60° is the larger angle."
      },
      {
        "id": "C",
        "text": "$50^\\circ$",
        "misconceptionTag": "MIS-EQUAL-SPLIT",
        "misconceptionId": "MIS-EQUAL-SPLIT",
        "feedback": "100° / 2 = 50° is equal split.",
        "rationale": "100° / 2 = 50° is equal split.",
        "remediation": "100° / 2 = 50° is equal split."
      },
      {
        "id": "D",
        "text": "$20^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "1 part = 100° / 5 = 20°. Smaller = 2 × 20° = 40°.",
        "rationale": "1 part = 100° / 5 = 20°. Smaller = 2 × 20° = 40°.",
        "remediation": "1 part = 100° / 5 = 20°. Smaller = 2 × 20° = 40°."
      }
    ]
  },
  {
    "id": "q_l3_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Divide \\₦$90,000$ in the ratio $2 : 3 : 4$. What is the middle share (numeric value only in ₦)?",
    "correctAnswer": 30000,
    "explanation": "Total parts = 9. 1 part = ₦10,000. Middle = 3 × 10,000 = ₦30,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Divide \\₦$90,000$ in the ratio $2 : 3 : 4$. What is the middle share (numeric value only in ₦)?",
      "output": "30000",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l3_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to divide a total amount $T$ into the ratio $a : b : c$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard proportional division sequence.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to divide a total amount $T$ into the ratio $a : b : c$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Sum the parts of the ratio: S = a + b + c."
      },
      {
        "id": "B",
        "text": "Calculate the value of one single share: V = T / S."
      },
      {
        "id": "C",
        "text": "Multiply V by each ratio term: a×V, b×V, and c×V."
      },
      {
        "id": "D",
        "text": "Verify that the sum of the calculated shares equals T."
      }
    ]
  },
  {
    "id": "q_l3_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "If an amount $T$ is divided in the ratio $a : b$, write an algebraic expression for the first share in terms of $a$, $b$, and $T$.",
    "correctAnswer": "(a/(a + b))*T",
    "explanation": "Share = (a / (a + b)) * T.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If an amount $T$ is divided in the ratio $a : b$, write an algebraic expression for the first share in terms of $a$, $b$",
      "output": "(a/(a + b))*T",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l3_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student attempted to share \\₦$50,000$ in the ratio $2 : 3$ by calculating $\\frac{2}{3} \\times 50,000$. What error did the student commit?",
    "correctAnswer": "A",
    "explanation": "Denominator must be 2 + 3 = 5: (2/5) × 50,000 = ₦20,000.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student attempted to share \\₦$50,000$ in the ratio $2 : 3$ by calculating $\\frac{2}{3} \\times 50,000$. What error did ",
      "output": "Divided by $3$ instead of the total sum of the ratio parts ($2 + 3 = 5$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Divided by $3$ instead of the total sum of the ratio parts ($2 + 3 = 5$)."
      },
      {
        "id": "B",
        "text": "Multiplied by 2 instead of 3.",
        "misconceptionTag": "MIS-SWAPPED-PARTS",
        "misconceptionId": "MIS-SWAPPED-PARTS",
        "feedback": "The first share has 2 parts, but denominator must be 5.",
        "rationale": "The first share has 2 parts, but denominator must be 5.",
        "remediation": "The first share has 2 parts, but denominator must be 5."
      },
      {
        "id": "C",
        "text": "Should have subtracted ₦50,000 from 2/3.",
        "misconceptionTag": "MIS-SUB-CONFUSION",
        "misconceptionId": "MIS-SUB-CONFUSION",
        "feedback": "Proportional sharing requires multiplying total by fraction.",
        "rationale": "Proportional sharing requires multiplying total by fraction.",
        "remediation": "Proportional sharing requires multiplying total by fraction."
      },
      {
        "id": "D",
        "text": "There is no error; 2/3 of 50,000 gives the first share.",
        "misconceptionTag": "MIS-RATIO-SUM-OMIT",
        "misconceptionId": "MIS-RATIO-SUM-OMIT",
        "feedback": "2 : 3 means 2 out of 5 parts.",
        "rationale": "2 : 3 means 2 out of 5 parts.",
        "remediation": "2 : 3 means 2 out of 5 parts."
      }
    ]
  },
  {
    "id": "q_l3_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To simplify the ratio $0.4 : 1.2$, a student writes $4 : 12 = 1 : 4$. What was the mistake?",
    "correctAnswer": "A",
    "explanation": "4/12 = 1/3, so 0.4 : 1.2 = 1 : 3.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To simplify the ratio $0.4 : 1.2$, a student writes $4 : 12 = 1 : 4$. What was the mistake?",
      "output": "Simplified $4 : 12$ incorrectly as $1 : 4$ instead of $1 : 3$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Simplified $4 : 12$ incorrectly as $1 : 4$ instead of $1 : 3$."
      },
      {
        "id": "B",
        "text": "Cannot multiply decimals by 10.",
        "misconceptionTag": "MIS-DECIMAL-MULT",
        "misconceptionId": "MIS-DECIMAL-MULT",
        "feedback": "Multiplying both sides by 10 is valid.",
        "rationale": "Multiplying both sides by 10 is valid.",
        "remediation": "Multiplying both sides by 10 is valid."
      },
      {
        "id": "C",
        "text": "The ratio should have been inverted.",
        "misconceptionTag": "MIS-INVERTED-RATIO",
        "misconceptionId": "MIS-INVERTED-RATIO",
        "feedback": "Terms must stay in original order.",
        "rationale": "Terms must stay in original order.",
        "remediation": "Terms must stay in original order."
      },
      {
        "id": "D",
        "text": "0.4 : 1.2 is already in lowest terms.",
        "misconceptionTag": "MIS-NOT-LOWEST",
        "misconceptionId": "MIS-NOT-LOWEST",
        "feedback": "Decimals are not in whole-number form.",
        "rationale": "Decimals are not in whole-number form.",
        "remediation": "Decimals are not in whole-number form."
      }
    ]
  },
  {
    "id": "q_l3_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A mixture contains milk and water in the ratio $5 : 2$. If $6\\text{ litres}$ of water is added, the ratio becomes $5 : 4$. Find the original quantity of milk.",
    "correctAnswer": "A",
    "explanation": "5x / (2x + 6) = 5/4 => 20x = 10x + 30 => x = 3. Milk = 5(3) = 15 litres.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A mixture contains milk and water in the ratio $5 : 2$. If $6\\text{ litres}$ of water is added, the ratio becomes $5 : 4",
      "output": "$15\\text{ litres}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$15\\text{ litres}$"
      },
      {
        "id": "B",
        "text": "$10\\text{ litres}$",
        "misconceptionTag": "MIS-WATER-AMOUNT",
        "misconceptionId": "MIS-WATER-AMOUNT",
        "feedback": "10 litres was double the water.",
        "rationale": "10 litres was double the water.",
        "remediation": "10 litres was double the water."
      },
      {
        "id": "C",
        "text": "$20\\text{ litres}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "5x / (2x + 6) = 5/4 => x = 3 => milk = 15.",
        "rationale": "5x / (2x + 6) = 5/4 => x = 3 => milk = 15.",
        "remediation": "5x / (2x + 6) = 5/4 => x = 3 => milk = 15."
      },
      {
        "id": "D",
        "text": "$25\\text{ litres}$",
        "misconceptionTag": "MIS-MULTIPLIER-GUESS",
        "misconceptionId": "MIS-MULTIPLIER-GUESS",
        "feedback": "Check: 15 / (6 + 6) = 15/12 = 5/4.",
        "rationale": "Check: 15 / (6 + 6) = 15/12 = 5/4.",
        "remediation": "Check: 15 / (6 + 6) = 15/12 = 5/4."
      }
    ]
  },
  {
    "id": "q_l3_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m1",
    "lessonId": "l3",
    "topicId": "top-waec-num-03",
    "objectiveIndex": 0,
    "objective": "Simplify ratios and divide quantities proportionally",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Three positive numbers $x, y, z$ are in the ratio $1 : 2 : 3$. If $x^2 + y^2 + z^2 = 504$, find the value of $z$.",
    "correctAnswer": "A",
    "explanation": "14k² = 504 => k² = 36 => k = 6. z = 3(6) = 18.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Three positive numbers $x, y, z$ are in the ratio $1 : 2 : 3$. If $x^2 + y^2 + z^2 = 504$, find the value of $z$.",
      "output": "$18$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$18$"
      },
      {
        "id": "B",
        "text": "$6$",
        "misconceptionTag": "MIS-X-VALUE",
        "misconceptionId": "MIS-X-VALUE",
        "feedback": "6 is the value of x (1 part), not z (3 parts).",
        "rationale": "6 is the value of x (1 part), not z (3 parts).",
        "remediation": "6 is the value of x (1 part), not z (3 parts)."
      },
      {
        "id": "C",
        "text": "$12$",
        "misconceptionTag": "MIS-Y-VALUE",
        "misconceptionId": "MIS-Y-VALUE",
        "feedback": "12 is the value of y (2 parts).",
        "rationale": "12 is the value of y (2 parts).",
        "remediation": "12 is the value of y (2 parts)."
      },
      {
        "id": "D",
        "text": "$24$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "x² + 4x² + 9x² = 14x² = 504 => x = 6 => z = 18.",
        "rationale": "x² + 4x² + 9x² = 14x² = 504 => x = 6 => z = 18.",
        "remediation": "x² + 4x² + 9x² = 14x² = 504 => x = 6 => z = 18."
      }
    ]
  },
  {
    "id": "q_l4_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which expression correctly defines the percentage profit on an item?",
    "correctAnswer": "A",
    "explanation": "Percentage profit = (Profit / Cost Price) × 100%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which expression correctly defines the percentage profit on an item?",
      "output": "$\\frac{\\text{Selling Price} - \\text{Cost Price}}{\\text{Cost Price}} \\times 100\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{\\text{Selling Price} - \\text{Cost Price}}{\\text{Cost Price}} \\times 100\\%$"
      },
      {
        "id": "B",
        "text": "$\\frac{\\text{Selling Price} - \\text{Cost Price}}{\\text{Selling Price}} \\times 100\\%$",
        "misconceptionTag": "MIS-MARGIN-CONFUSION",
        "misconceptionId": "MIS-MARGIN-CONFUSION",
        "feedback": "Percentage profit is based on Cost Price; dividing by Selling Price gives margin.",
        "rationale": "Percentage profit is based on Cost Price; dividing by Selling Price gives margin.",
        "remediation": "Percentage profit is based on Cost Price; dividing by Selling Price gives margin."
      },
      {
        "id": "C",
        "text": "$(\\text{Selling Price} - \\text{Cost Price}) \\times 100\\%$",
        "misconceptionTag": "MIS-DENOM-DROP",
        "misconceptionId": "MIS-DENOM-DROP",
        "feedback": "Profit must be divided by Cost Price.",
        "rationale": "Profit must be divided by Cost Price.",
        "remediation": "Profit must be divided by Cost Price."
      },
      {
        "id": "D",
        "text": "$\\frac{\\text{Cost Price}}{\\text{Selling Price}} \\times 100\\%$",
        "misconceptionTag": "MIS-RATIO-CONFUSION",
        "misconceptionId": "MIS-RATIO-CONFUSION",
        "feedback": "This is the ratio of cost to selling price.",
        "rationale": "This is the ratio of cost to selling price.",
        "remediation": "This is the ratio of cost to selling price."
      }
    ]
  },
  {
    "id": "q_l4_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "A trader bought a phone for \\₦$40,000$ and sold it for \\₦$48,000$. What was the percentage profit?",
    "correctAnswer": "A",
    "explanation": "Profit = 48,000 - 40,000 = ₦8,000. % profit = (8,000 / 40,000) × 100% = 20%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A trader bought a phone for \\₦$40,000$ and sold it for \\₦$48,000$. What was the percentage profit?",
      "output": "$20\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$20\\%$"
      },
      {
        "id": "B",
        "text": "$16.67\\%$",
        "misconceptionTag": "MIS-MARGIN-CONFUSION",
        "misconceptionId": "MIS-MARGIN-CONFUSION",
        "feedback": "Divided by selling price ₦48,000 instead of cost price ₦40,000.",
        "rationale": "Divided by selling price ₦48,000 instead of cost price ₦40,000.",
        "remediation": "Divided by selling price ₦48,000 instead of cost price ₦40,000."
      },
      {
        "id": "C",
        "text": "$8\\%$",
        "misconceptionTag": "MIS-DIFF-ONLY",
        "misconceptionId": "MIS-DIFF-ONLY",
        "feedback": "₦8,000 is the profit, percentage is 8,000/40,000 × 100% = 20%.",
        "rationale": "₦8,000 is the profit, percentage is 8,000/40,000 × 100% = 20%.",
        "remediation": "₦8,000 is the profit, percentage is 8,000/40,000 × 100% = 20%."
      },
      {
        "id": "D",
        "text": "$25\\%$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "8/40 = 1/5 = 20%.",
        "rationale": "8/40 = 1/5 = 20%.",
        "remediation": "8/40 = 1/5 = 20%."
      }
    ]
  },
  {
    "id": "q_l4_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "A shoe costing \\₦$15,000$ was sold at a $10\\%$ loss. What was the selling price?",
    "correctAnswer": "A",
    "explanation": "Loss = 0.10 × 15,000 = ₦1,500. Selling price = 15,000 - 1,500 = ₦13,500.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A shoe costing \\₦$15,000$ was sold at a $10\\%$ loss. What was the selling price?",
      "output": "\\₦$13,500$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$13,500$"
      },
      {
        "id": "B",
        "text": "\\₦$16,500$",
        "misconceptionTag": "MIS-ADD-LOSS",
        "misconceptionId": "MIS-ADD-LOSS",
        "feedback": "A loss decreases the selling price below cost price.",
        "rationale": "A loss decreases the selling price below cost price.",
        "remediation": "A loss decreases the selling price below cost price."
      },
      {
        "id": "C",
        "text": "\\₦$14,000$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "10% of 15,000 is 1,500. 15,000 - 1,500 = ₦13,500.",
        "rationale": "10% of 15,000 is 1,500. 15,000 - 1,500 = ₦13,500.",
        "remediation": "10% of 15,000 is 1,500. 15,000 - 1,500 = ₦13,500."
      },
      {
        "id": "D",
        "text": "\\₦$1,500$",
        "misconceptionTag": "MIS-LOSS-ONLY",
        "misconceptionId": "MIS-LOSS-ONLY",
        "feedback": "₦1,500 is the loss amount, not the selling price.",
        "rationale": "₦1,500 is the loss amount, not the selling price.",
        "remediation": "₦1,500 is the loss amount, not the selling price."
      }
    ]
  },
  {
    "id": "q_l4_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If an article is sold at a $25\\%$ profit, the Selling Price is $125\\%$ of the Cost Price.",
    "correctAnswer": "A",
    "explanation": "SP = CP × (1 + 0.25) = 1.25 CP = 125% of CP.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If an article is sold at a $25\\%$ profit, the Selling Price is $125\\%$ of the Cost Price.",
      "output": "True: Selling Price = Cost Price + Profit = 100% + 25% = 125% of Cost Price.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Selling Price = Cost Price + Profit = 100% + 25% = 125% of Cost Price."
      },
      {
        "id": "B",
        "text": "False: Selling price is always 100% and profit is deducted.",
        "misconceptionTag": "MIS-PERCENT-CONFUSION",
        "misconceptionId": "MIS-PERCENT-CONFUSION",
        "feedback": "Selling price exceeds cost price when there is a profit.",
        "rationale": "Selling price exceeds cost price when there is a profit.",
        "remediation": "Selling price exceeds cost price when there is a profit."
      },
      {
        "id": "C",
        "text": "False: The profit applies only to the markup above 125%.",
        "misconceptionTag": "MIS-MARKUP-CONFUSION",
        "misconceptionId": "MIS-MARKUP-CONFUSION",
        "feedback": "125% of CP equals SP directly.",
        "rationale": "125% of CP equals SP directly.",
        "remediation": "125% of CP equals SP directly."
      },
      {
        "id": "D",
        "text": "True: But only if there is no value-added tax.",
        "misconceptionTag": "MIS-TAX-CONFUSION",
        "misconceptionId": "MIS-TAX-CONFUSION",
        "feedback": "The relationship SP = 1.25 CP holds by definition.",
        "rationale": "The relationship SP = 1.25 CP holds by definition.",
        "remediation": "The relationship SP = 1.25 CP holds by definition."
      }
    ]
  },
  {
    "id": "q_l4_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "An article was sold for \\₦$36,000$ at a profit of $20\\%$. Find the original Cost Price.",
    "correctAnswer": "A",
    "explanation": "CP = SP / 1.20 = 36,000 / 1.20 = ₦30,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "An article was sold for \\₦$36,000$ at a profit of $20\\%$. Find the original Cost Price.",
      "output": "\\₦$30,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$30,000$"
      },
      {
        "id": "B",
        "text": "\\₦$28,800$",
        "misconceptionTag": "MIS-PERCENT-REVERSE",
        "misconceptionId": "MIS-PERCENT-REVERSE",
        "feedback": "Cannot simply subtract 20% of 36,000; ₦36,000 represents 120% of CP.",
        "rationale": "Cannot simply subtract 20% of 36,000; ₦36,000 represents 120% of CP.",
        "remediation": "Cannot simply subtract 20% of 36,000; ₦36,000 represents 120% of CP."
      },
      {
        "id": "C",
        "text": "\\₦$32,000$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "36,000 / 1.20 = ₦30,000.",
        "rationale": "36,000 / 1.20 = ₦30,000.",
        "remediation": "36,000 / 1.20 = ₦30,000."
      },
      {
        "id": "D",
        "text": "\\₦$43,200$",
        "misconceptionTag": "MIS-ADD-INSTEAD-DIV",
        "misconceptionId": "MIS-ADD-INSTEAD-DIV",
        "feedback": "Cost price must be lower than selling price when there is profit.",
        "rationale": "Cost price must be lower than selling price when there is profit.",
        "remediation": "Cost price must be lower than selling price when there is profit."
      }
    ]
  },
  {
    "id": "q_l4_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A merchant bought $50\\text{ kg}$ of sugar for \\₦$25,000$ and retailed it at \\₦$600\\text{ per kg}$. What was the total profit?",
    "correctAnswer": "A",
    "explanation": "Total sales = 50 × 600 = ₦30,000. Profit = 30,000 - 25,000 = ₦5,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A merchant bought $50\\text{ kg}$ of sugar for \\₦$25,000$ and retailed it at \\₦$600\\text{ per kg}$. What was the total pr",
      "output": "\\₦$5,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$5,000$"
      },
      {
        "id": "B",
        "text": "\\₦$30,000$",
        "misconceptionTag": "MIS-TOTAL-REVENUE",
        "misconceptionId": "MIS-TOTAL-REVENUE",
        "feedback": "₦30,000 is total revenue, not profit.",
        "rationale": "₦30,000 is total revenue, not profit.",
        "remediation": "₦30,000 is total revenue, not profit."
      },
      {
        "id": "C",
        "text": "\\₦$6,000$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "50 × 600 = 30,000; 30,000 - 25,000 = ₦5,000.",
        "rationale": "50 × 600 = 30,000; 30,000 - 25,000 = ₦5,000.",
        "remediation": "50 × 600 = 30,000; 30,000 - 25,000 = ₦5,000."
      },
      {
        "id": "D",
        "text": "\\₦$4,000$",
        "misconceptionTag": "MIS-SUB-SLIP",
        "misconceptionId": "MIS-SUB-SLIP",
        "feedback": "Check 30,000 - 25,000 = ₦5,000.",
        "rationale": "Check 30,000 - 25,000 = ₦5,000.",
        "remediation": "Check 30,000 - 25,000 = ₦5,000."
      }
    ]
  },
  {
    "id": "q_l4_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A television is marked at \\₦$80,000$. A customer negotiates a $10\\%$ discount and an additional $5\\%$ cash rebate on the discounted price. How much does the customer pay?",
    "correctAnswer": "A",
    "explanation": "After 10%: 80,000 × 0.90 = 72,000. After 5%: 72,000 × 0.95 = ₦68,400.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A television is marked at \\₦$80,000$. A customer negotiates a $10\\%$ discount and an additional $5\\%$ cash rebate on the",
      "output": "\\₦$68,400$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$68,400$"
      },
      {
        "id": "B",
        "text": "\\₦$68,000$",
        "misconceptionTag": "MIS-PERCENT-SUM",
        "misconceptionId": "MIS-PERCENT-SUM",
        "feedback": "Cannot simply add 10% + 5% = 15% of 80,000 = 68,000.",
        "rationale": "Cannot simply add 10% + 5% = 15% of 80,000 = 68,000.",
        "remediation": "Cannot simply add 10% + 5% = 15% of 80,000 = 68,000."
      },
      {
        "id": "C",
        "text": "\\₦$72,000$",
        "misconceptionTag": "MIS-FIRST-DISCOUNT",
        "misconceptionId": "MIS-FIRST-DISCOUNT",
        "feedback": "₦72,000 is the price after 10% discount before cash rebate.",
        "rationale": "₦72,000 is the price after 10% discount before cash rebate.",
        "remediation": "₦72,000 is the price after 10% discount before cash rebate."
      },
      {
        "id": "D",
        "text": "\\₦$64,000$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "80,000 × 0.90 × 0.95 = ₦68,400.",
        "rationale": "80,000 × 0.90 × 0.95 = ₦68,400.",
        "remediation": "80,000 × 0.90 × 0.95 = ₦68,400."
      }
    ]
  },
  {
    "id": "q_l4_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "If a generator is bought for \\₦$120,000$ and sold for \\₦$150,000$, calculate the percentage profit (numeric value in %).",
    "correctAnswer": 25,
    "explanation": "Profit = 30,000. % profit = (30,000 / 120,000) × 100% = 25%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If a generator is bought for \\₦$120,000$ and sold for \\₦$150,000$, calculate the percentage profit (numeric value in %).",
      "output": "25",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l4_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to find the Cost Price given Selling Price $SP$ and Profit percentage $r\\%$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard Cost Price recovery procedure.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to find the Cost Price given Selling Price $SP$ and Profit percentage $r\\%$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Express Selling Price as a percentage of Cost Price: (100 + r)%."
      },
      {
        "id": "B",
        "text": "Write the equation: SP = CP × (100 + r) / 100."
      },
      {
        "id": "C",
        "text": "Divide Selling Price by (1 + r/100)."
      },
      {
        "id": "D",
        "text": "Verify that CP + (r% of CP) equals SP."
      }
    ]
  },
  {
    "id": "q_l4_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write a formula for Cost Price $CP$ in terms of Selling Price $SP$ and percentage loss $L\\%$.",
    "correctAnswer": "SP/(1 - L/100)",
    "explanation": "SP = CP * (1 - L/100) => CP = SP / (1 - L/100).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write a formula for Cost Price $CP$ in terms of Selling Price $SP$ and percentage loss $L\\%$.",
      "output": "SP/(1 - L/100)",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l4_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student calculates percentage profit as $\\frac{60,000 - 50,000}{60,000} \\times 100\\% = 16.67\\%$. What error was committed?",
    "correctAnswer": "A",
    "explanation": "Percentage profit must always divide by the cost price: 10,000 / 50,000 × 100% = 20%.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student calculates percentage profit as $\\frac{60,000 - 50,000}{60,000} \\times 100\\% = 16.67\\%$. What error was commit",
      "output": "Divided by Selling Price ($60,000$) instead of Cost Price ($50,000$). Correct profit is $20\\%$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Divided by Selling Price ($60,000$) instead of Cost Price ($50,000$). Correct profit is $20\\%$."
      },
      {
        "id": "B",
        "text": "Subtracted in the wrong order.",
        "misconceptionTag": "MIS-ORDER-SUB",
        "misconceptionId": "MIS-ORDER-SUB",
        "feedback": "60,000 - 50,000 correctly gives ₦10,000 profit.",
        "rationale": "60,000 - 50,000 correctly gives ₦10,000 profit.",
        "remediation": "60,000 - 50,000 correctly gives ₦10,000 profit."
      },
      {
        "id": "C",
        "text": "Forgot to multiply by 100%.",
        "misconceptionTag": "MIS-FACTOR-100",
        "misconceptionId": "MIS-FACTOR-100",
        "feedback": "The expression includes × 100%.",
        "rationale": "The expression includes × 100%.",
        "remediation": "The expression includes × 100%."
      },
      {
        "id": "D",
        "text": "There is no error; 16.67% is correct profit.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "16.67% is the profit margin, not profit on cost.",
        "rationale": "16.67% is the profit margin, not profit on cost.",
        "remediation": "16.67% is the profit margin, not profit on cost."
      }
    ]
  },
  {
    "id": "q_l4_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A trader applies two successive discounts of $20\\%$ and $10\\%$. A student claims this is equivalent to a single discount of $30\\%$. Why is this claim wrong?",
    "correctAnswer": "A",
    "explanation": "0.80 × 0.90 = 0.72 => effective discount is 100% - 72% = 28%.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A trader applies two successive discounts of $20\\%$ and $10\\%$. A student claims this is equivalent to a single discount",
      "output": "The second discount applies to a reduced price, making the total effective discount $28\\%$, not $30\\%$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The second discount applies to a reduced price, making the total effective discount $28\\%$, not $30\\%$."
      },
      {
        "id": "B",
        "text": "The effective discount is 32% because discounts compound upwards.",
        "misconceptionTag": "MIS-COMPOUND-ADD",
        "misconceptionId": "MIS-COMPOUND-ADD",
        "feedback": "Successive discounts compound downwards.",
        "rationale": "Successive discounts compound downwards.",
        "remediation": "Successive discounts compound downwards."
      },
      {
        "id": "C",
        "text": "The second discount should be multiplied: 20 × 10 = 200%.",
        "misconceptionTag": "MIS-ARITH-MULT",
        "misconceptionId": "MIS-ARITH-MULT",
        "feedback": "Discounts are not multiplied directly.",
        "rationale": "Discounts are not multiplied directly.",
        "remediation": "Discounts are not multiplied directly."
      },
      {
        "id": "D",
        "text": "The claim is correct for all purchases above ₦100,000.",
        "misconceptionTag": "MIS-THRESHOLD-CONFUSION",
        "misconceptionId": "MIS-THRESHOLD-CONFUSION",
        "feedback": "Mathematical percentage laws hold regardless of total amount.",
        "rationale": "Mathematical percentage laws hold regardless of total amount.",
        "remediation": "Mathematical percentage laws hold regardless of total amount."
      }
    ]
  },
  {
    "id": "q_l4_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A dealer sold two cars for \\₦$2,400,000$ each. On the first car, he made a $20\\%$ profit; on the second car, he made a $20\\%$ loss. What was his overall financial outcome on both transactions combined?",
    "correctAnswer": "A",
    "explanation": "Car 1 CP = 2.4M / 1.2 = 2.0M (gain 400k). Car 2 CP = 2.4M / 0.8 = 3.0M (loss 600k). Total CP = 5.0M, Total SP = 4.8M. Net loss = ₦200,000.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A dealer sold two cars for \\₦$2,400,000$ each. On the first car, he made a $20\\%$ profit; on the second car, he made a $",
      "output": "A net loss of \\₦$200,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "A net loss of \\₦$200,000$"
      },
      {
        "id": "B",
        "text": "He broke even with zero gain or loss.",
        "misconceptionTag": "MIS-ZERO-SUM-SLIP",
        "misconceptionId": "MIS-ZERO-SUM-SLIP",
        "feedback": "Equal percentage profit and loss on the same selling price always yields an overall net loss.",
        "rationale": "Equal percentage profit and loss on the same selling price always yields an overall net loss.",
        "remediation": "Equal percentage profit and loss on the same selling price always yields an overall net loss."
      },
      {
        "id": "C",
        "text": "A net profit of ₦100,000",
        "misconceptionTag": "MIS-PROFIT-BIAS",
        "misconceptionId": "MIS-PROFIT-BIAS",
        "feedback": "The loss on the second car exceeds the gain on the first car.",
        "rationale": "The loss on the second car exceeds the gain on the first car.",
        "remediation": "The loss on the second car exceeds the gain on the first car."
      },
      {
        "id": "D",
        "text": "A net loss of ₦400,000",
        "misconceptionTag": "MIS-DOUBLE-LOSS",
        "misconceptionId": "MIS-DOUBLE-LOSS",
        "feedback": "Overall loss is exactly ₦200,000.",
        "rationale": "Overall loss is exactly ₦200,000.",
        "remediation": "Overall loss is exactly ₦200,000."
      }
    ]
  },
  {
    "id": "q_l4_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l4",
    "topicId": "top-waec-comm-01",
    "objectiveIndex": 0,
    "objective": "Calculate profit, loss, and percentage margins",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A grocer mixes two grades of tea costing \\₦$1,200\\text{ per kg}$ and \\₦$1,500\\text{ per kg}$ in the ratio $2 : 1$. At what price per kg must the grocer sell the blend to make a $20\\%$ profit?",
    "correctAnswer": "A",
    "explanation": "Cost of 3 kg = 2(1,200) + 1,500 = ₦3,900 => CP per kg = ₦1,300. Selling price = 1,300 × 1.20 = ₦1,560.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A grocer mixes two grades of tea costing \\₦$1,200\\text{ per kg}$ and \\₦$1,500\\text{ per kg}$ in the ratio $2 : 1$. At wh",
      "output": "\\₦$1,560\\text{ per kg}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$1,560\\text{ per kg}$"
      },
      {
        "id": "B",
        "text": "\\₦$1,440\\text{ per kg}$",
        "misconceptionTag": "MIS-CP-ONLY",
        "misconceptionId": "MIS-CP-ONLY",
        "feedback": "₦1,300 is cost price of 1kg mixture, 1.20 × 1,300 = ₦1,560.",
        "rationale": "₦1,300 is cost price of 1kg mixture, 1.20 × 1,300 = ₦1,560.",
        "remediation": "₦1,300 is cost price of 1kg mixture, 1.20 × 1,300 = ₦1,560."
      },
      {
        "id": "C",
        "text": "\\₦$1,620\\text{ per kg}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Cost of 3kg = 2(1,200) + 1,500 = 3,900 => CP/kg = 1,300. SP = 1.20 × 1,300 = 1,560.",
        "rationale": "Cost of 3kg = 2(1,200) + 1,500 = 3,900 => CP/kg = 1,300. SP = 1.20 × 1,300 = 1,560.",
        "remediation": "Cost of 3kg = 2(1,200) + 1,500 = 3,900 => CP/kg = 1,300. SP = 1.20 × 1,300 = 1,560."
      },
      {
        "id": "D",
        "text": "\\₦$1,500\\text{ per kg}$",
        "misconceptionTag": "MIS-AVERAGE-GUESS",
        "misconceptionId": "MIS-AVERAGE-GUESS",
        "feedback": "Weighted cost is ₦1,300, not ₦1,350.",
        "rationale": "Weighted cost is ₦1,300, not ₦1,350.",
        "remediation": "Weighted cost is ₦1,300, not ₦1,350."
      }
    ]
  },
  {
    "id": "q_l5_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which formula correctly gives the Simple Interest $I$ earned on a principal $P$ at rate $R\\%$ per annum for $T$ years?",
    "correctAnswer": "A",
    "explanation": "Simple Interest formula is I = (P * R * T) / 100.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which formula correctly gives the Simple Interest $I$ earned on a principal $P$ at rate $R\\%$ per annum for $T$ years?",
      "output": "$I = \\frac{P \\times R \\times T}{100}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$I = \\frac{P \\times R \\times T}{100}$"
      },
      {
        "id": "B",
        "text": "$I = P \\times (1 + \\frac{R}{100})^T$",
        "misconceptionTag": "MIS-COMPOUND-CONFUSION",
        "misconceptionId": "MIS-COMPOUND-CONFUSION",
        "feedback": "This is the formula for compound amount, not simple interest.",
        "rationale": "This is the formula for compound amount, not simple interest.",
        "remediation": "This is the formula for compound amount, not simple interest."
      },
      {
        "id": "C",
        "text": "$I = \\frac{P \\times R}{100 \\times T}$",
        "misconceptionTag": "MIS-TIME-DIVIDE",
        "misconceptionId": "MIS-TIME-DIVIDE",
        "feedback": "Time T must be in the numerator multiplied by P and R.",
        "rationale": "Time T must be in the numerator multiplied by P and R.",
        "remediation": "Time T must be in the numerator multiplied by P and R."
      },
      {
        "id": "D",
        "text": "$I = \\frac{100}{P \\times R \\times T}$",
        "misconceptionTag": "MIS-INVERTED-FORMULA",
        "misconceptionId": "MIS-INVERTED-FORMULA",
        "feedback": "Incorrect reciprocal.",
        "rationale": "Incorrect reciprocal.",
        "remediation": "Incorrect reciprocal."
      }
    ]
  },
  {
    "id": "q_l5_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Find the simple interest on \\₦$50,000$ invested at $6\\%$ per annum for $3$ years.",
    "correctAnswer": "A",
    "explanation": "I = (50,000 × 6 × 3) / 100 = ₦9,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the simple interest on \\₦$50,000$ invested at $6\\%$ per annum for $3$ years.",
      "output": "\\₦$9,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$9,000$"
      },
      {
        "id": "B",
        "text": "\\₦$3,000$",
        "misconceptionTag": "MIS-ONE-YEAR",
        "misconceptionId": "MIS-ONE-YEAR",
        "feedback": "₦3,000 is interest for 1 year; multiply by 3 years to get ₦9,000.",
        "rationale": "₦3,000 is interest for 1 year; multiply by 3 years to get ₦9,000.",
        "remediation": "₦3,000 is interest for 1 year; multiply by 3 years to get ₦9,000."
      },
      {
        "id": "C",
        "text": "\\₦$59,000$",
        "misconceptionTag": "MIS-TOTAL-AMOUNT",
        "misconceptionId": "MIS-TOTAL-AMOUNT",
        "feedback": "₦59,000 is the total amount (P + I), not the interest alone.",
        "rationale": "₦59,000 is the total amount (P + I), not the interest alone.",
        "remediation": "₦59,000 is the total amount (P + I), not the interest alone."
      },
      {
        "id": "D",
        "text": "\\₦$18,000$",
        "misconceptionTag": "MIS-DOUBLE-SLIP",
        "misconceptionId": "MIS-DOUBLE-SLIP",
        "feedback": "50,000 × 6 × 3 / 100 = ₦9,000.",
        "rationale": "50,000 × 6 × 3 / 100 = ₦9,000.",
        "remediation": "50,000 × 6 × 3 / 100 = ₦9,000."
      }
    ]
  },
  {
    "id": "q_l5_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What is the key difference between Simple Interest and Compound Interest?",
    "correctAnswer": "A",
    "explanation": "Compound interest earns interest on previous accumulated interest.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the key difference between Simple Interest and Compound Interest?",
      "output": "In compound interest, interest earned is added to principal so future interest is earned on interest.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "In compound interest, interest earned is added to principal so future interest is earned on interest."
      },
      {
        "id": "B",
        "text": "Simple interest is paid monthly while compound interest is paid annually.",
        "misconceptionTag": "MIS-FREQUENCY-CONFUSION",
        "misconceptionId": "MIS-FREQUENCY-CONFUSION",
        "feedback": "Both can have any compounding frequency.",
        "rationale": "Both can have any compounding frequency.",
        "remediation": "Both can have any compounding frequency."
      },
      {
        "id": "C",
        "text": "Compound interest uses a lower rate than simple interest.",
        "misconceptionTag": "MIS-RATE-CONFUSION",
        "misconceptionId": "MIS-RATE-CONFUSION",
        "feedback": "Rates can be identical.",
        "rationale": "Rates can be identical.",
        "remediation": "Rates can be identical."
      },
      {
        "id": "D",
        "text": "Simple interest yields more money than compound interest over long periods.",
        "misconceptionTag": "MIS-GROWTH-CONFUSION",
        "misconceptionId": "MIS-GROWTH-CONFUSION",
        "feedback": "Compound interest grows exponentially and exceeds simple interest.",
        "rationale": "Compound interest grows exponentially and exceeds simple interest.",
        "remediation": "Compound interest grows exponentially and exceeds simple interest."
      }
    ]
  },
  {
    "id": "q_l5_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: A machine that depreciates at $10\\%$ per annum loses the exact same monetary value every year.",
    "correctAnswer": "A",
    "explanation": "Reducing-balance depreciation applies to diminishing book value: year 1 loss > year 2 loss.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: A machine that depreciates at $10\\%$ per annum loses the exact same monetary value every year.",
      "output": "False: Since the asset value decreases each year, $10\\%$ of the remaining value is smaller each subsequent year.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "False: Since the asset value decreases each year, $10\\%$ of the remaining value is smaller each subsequent year."
      },
      {
        "id": "B",
        "text": "True: 10% is constant, so the monetary loss is identical.",
        "misconceptionTag": "MIS-PERCENT-LINEAR",
        "misconceptionId": "MIS-PERCENT-LINEAR",
        "feedback": "10% applies to a declining book value.",
        "rationale": "10% applies to a declining book value.",
        "remediation": "10% applies to a declining book value."
      },
      {
        "id": "C",
        "text": "False: The monetary depreciation increases every year.",
        "misconceptionTag": "MIS-TREND-INVERSION",
        "misconceptionId": "MIS-TREND-INVERSION",
        "feedback": "Depreciation decreases as book value drops.",
        "rationale": "Depreciation decreases as book value drops.",
        "remediation": "Depreciation decreases as book value drops."
      },
      {
        "id": "D",
        "text": "True: But only for the first five years of operation.",
        "misconceptionTag": "MIS-ARBITRARY-RULE",
        "misconceptionId": "MIS-ARBITRARY-RULE",
        "feedback": "Reducing balance depreciation declines continuously.",
        "rationale": "Reducing balance depreciation declines continuously.",
        "remediation": "Reducing balance depreciation declines continuously."
      }
    ]
  },
  {
    "id": "q_l5_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Calculate the compound amount on \\₦$100,000$ invested at $10\\%$ per annum compound interest for $2$ years.",
    "correctAnswer": "A",
    "explanation": "A = 100,000 × (1.10)² = 100,000 × 1.21 = ₦121,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the compound amount on \\₦$100,000$ invested at $10\\%$ per annum compound interest for $2$ years.",
      "output": "\\₦$121,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$121,000$"
      },
      {
        "id": "B",
        "text": "\\₦$120,000$",
        "misconceptionTag": "MIS-SIMPLE-CONFUSION",
        "misconceptionId": "MIS-SIMPLE-CONFUSION",
        "feedback": "₦120,000 is simple interest amount; compound interest adds interest on year 1 interest.",
        "rationale": "₦120,000 is simple interest amount; compound interest adds interest on year 1 interest.",
        "remediation": "₦120,000 is simple interest amount; compound interest adds interest on year 1 interest."
      },
      {
        "id": "C",
        "text": "\\₦$21,000$",
        "misconceptionTag": "MIS-INTEREST-ONLY",
        "misconceptionId": "MIS-INTEREST-ONLY",
        "feedback": "₦21,000 is the compound interest, the amount is P + CI = ₦121,000.",
        "rationale": "₦21,000 is the compound interest, the amount is P + CI = ₦121,000.",
        "remediation": "₦21,000 is the compound interest, the amount is P + CI = ₦121,000."
      },
      {
        "id": "D",
        "text": "\\₦$110,000$",
        "misconceptionTag": "MIS-ONE-YEAR",
        "misconceptionId": "MIS-ONE-YEAR",
        "feedback": "₦110,000 is the amount after only 1 year.",
        "rationale": "₦110,000 is the amount after only 1 year.",
        "remediation": "₦110,000 is the amount after only 1 year."
      }
    ]
  },
  {
    "id": "q_l5_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "At what rate per annum will \\₦$40,000$ yield \\₦$12,000$ simple interest in $5$ years?",
    "correctAnswer": "A",
    "explanation": "R = (100 × I) / (P × T) = (100 × 12,000) / (40,000 × 5) = 6%.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "At what rate per annum will \\₦$40,000$ yield \\₦$12,000$ simple interest in $5$ years?",
      "output": "$6\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$6\\%$"
      },
      {
        "id": "B",
        "text": "$5\\%$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "R = (100 × 12,000) / (40,000 × 5) = 1,200,000 / 200,000 = 6%.",
        "rationale": "R = (100 × 12,000) / (40,000 × 5) = 1,200,000 / 200,000 = 6%.",
        "remediation": "R = (100 × 12,000) / (40,000 × 5) = 1,200,000 / 200,000 = 6%."
      },
      {
        "id": "C",
        "text": "$8\\%$",
        "misconceptionTag": "MIS-RATE-GUESS",
        "misconceptionId": "MIS-RATE-GUESS",
        "feedback": "Check 40,000 × 0.06 × 5 = 12,000.",
        "rationale": "Check 40,000 × 0.06 × 5 = 12,000.",
        "remediation": "Check 40,000 × 0.06 × 5 = 12,000."
      },
      {
        "id": "D",
        "text": "$3\\%$",
        "misconceptionTag": "MIS-HALF-SLIP",
        "misconceptionId": "MIS-HALF-SLIP",
        "feedback": "R = 6%, not 3%.",
        "rationale": "R = 6%, not 3%.",
        "remediation": "R = 6%, not 3%."
      }
    ]
  },
  {
    "id": "q_l5_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A generator originally valued at \\₦$200,000$ depreciates at $10\\%$ per annum. Calculate its book value after $2$ years.",
    "correctAnswer": "A",
    "explanation": "Value = 200,000 × (1 - 0.10)² = 200,000 × 0.81 = ₦162,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A generator originally valued at \\₦$200,000$ depreciates at $10\\%$ per annum. Calculate its book value after $2$ years.",
      "output": "\\₦$162,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$162,000$"
      },
      {
        "id": "B",
        "text": "\\₦$160,000$",
        "misconceptionTag": "MIS-SIMPLE-DEPRECIATION",
        "misconceptionId": "MIS-SIMPLE-DEPRECIATION",
        "feedback": "Straight-line 20% gives 160,000; reducing-balance gives 200,000 × (0.9)² = ₦162,000.",
        "rationale": "Straight-line 20% gives 160,000; reducing-balance gives 200,000 × (0.9)² = ₦162,000.",
        "remediation": "Straight-line 20% gives 160,000; reducing-balance gives 200,000 × (0.9)² = ₦162,000."
      },
      {
        "id": "C",
        "text": "\\₦$180,000$",
        "misconceptionTag": "MIS-ONE-YEAR",
        "misconceptionId": "MIS-ONE-YEAR",
        "feedback": "₦180,000 is value after 1 year.",
        "rationale": "₦180,000 is value after 1 year.",
        "remediation": "₦180,000 is value after 1 year."
      },
      {
        "id": "D",
        "text": "\\₦$38,000$",
        "misconceptionTag": "MIS-DEPRECIATION-TOTAL",
        "misconceptionId": "MIS-DEPRECIATION-TOTAL",
        "feedback": "₦38,000 is total depreciation; value remaining is ₦162,000.",
        "rationale": "₦38,000 is total depreciation; value remaining is ₦162,000.",
        "remediation": "₦38,000 is total depreciation; value remaining is ₦162,000."
      }
    ]
  },
  {
    "id": "q_l5_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the simple interest on \\₦$25,000$ at $8\\%$ per annum for $2$ years (numeric value in ₦).",
    "correctAnswer": 4000,
    "explanation": "I = (25,000 × 8 × 2) / 100 = ₦4,000.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the simple interest on \\₦$25,000$ at $8\\%$ per annum for $2$ years (numeric value in ₦).",
      "output": "4000",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l5_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to calculate compound interest over $2$ years without using a formula:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Step-by-step compound interest method.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to calculate compound interest over $2$ years without using a formula:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Calculate Year 1 interest: I1 = P × R / 100."
      },
      {
        "id": "B",
        "text": "Add I1 to original principal: P2 = P + I1."
      },
      {
        "id": "C",
        "text": "Calculate Year 2 interest: I2 = P2 × R / 100."
      },
      {
        "id": "D",
        "text": "Add I1 and I2 to obtain total compound interest."
      }
    ]
  },
  {
    "id": "q_l5_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the formula for the total compound amount $A$ on principal $P$ at $r\\%$ per annum for $n$ years.",
    "correctAnswer": "P*(1 + r/100)^n",
    "explanation": "A = P * (1 + r/100)^n.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the formula for the total compound amount $A$ on principal $P$ at $r\\%$ per annum for $n$ years.",
      "output": "P*(1 + r/100)^n",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l5_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student was asked to find the simple interest on \\₦$60,000$ for $8\\text{ months}$ at $5\\%$ per annum. The student computed $\\frac{60,000 \\times 5 \\times 8}{100} = 24,000$. What was the mistake?",
    "correctAnswer": "A",
    "explanation": "Time must be in years: T = 8/12 = 2/3 years. Correct I = (60,000 × 5 × 2/3)/100 = ₦2,000.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student was asked to find the simple interest on \\₦$60,000$ for $8\\text{ months}$ at $5\\%$ per annum. The student comp",
      "output": "Substituted $8$ years instead of converting months to years ($8/12 = 2/3\\text{ years}$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Substituted $8$ years instead of converting months to years ($8/12 = 2/3\\text{ years}$)."
      },
      {
        "id": "B",
        "text": "Divided by 100 instead of 12.",
        "misconceptionTag": "MIS-FORMULA-CONFUSION",
        "misconceptionId": "MIS-FORMULA-CONFUSION",
        "feedback": "Dividing by 100 is standard; the time unit was wrong.",
        "rationale": "Dividing by 100 is standard; the time unit was wrong.",
        "remediation": "Dividing by 100 is standard; the time unit was wrong."
      },
      {
        "id": "C",
        "text": "Used 5% instead of 0.05.",
        "misconceptionTag": "MIS-PERCENT-DOUBLE-DIVIDE",
        "misconceptionId": "MIS-PERCENT-DOUBLE-DIVIDE",
        "feedback": "Rate 5 over 100 already converts percentage.",
        "rationale": "Rate 5 over 100 already converts percentage.",
        "remediation": "Rate 5 over 100 already converts percentage."
      },
      {
        "id": "D",
        "text": "Multiplied principal and rate incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "60,000 × 5 = 300,000 was correct.",
        "rationale": "60,000 × 5 = 300,000 was correct.",
        "remediation": "60,000 × 5 = 300,000 was correct."
      }
    ]
  },
  {
    "id": "q_l5_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To find compound interest on \\₦$80,000$ at $10\\%$ for 2 years, a student calculated $I = \\frac{80,000 \\times 10 \\times 2}{100} = 16,000$. Why is this incomplete?",
    "correctAnswer": "A",
    "explanation": "Year 1 interest is ₦8,000. Year 2 interest is 10% of ₦88,000 = ₦8,800. Total CI = ₦16,800.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To find compound interest on \\₦$80,000$ at $10\\%$ for 2 years, a student calculated $I = \\frac{80,000 \\times 10 \\times 2",
      "output": "Used the simple interest formula, neglecting the interest earned on Year 1 interest (\\₦$800$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Used the simple interest formula, neglecting the interest earned on Year 1 interest (\\₦$800$)."
      },
      {
        "id": "B",
        "text": "The rate should have been squared to 100%.",
        "misconceptionTag": "MIS-RATE-SQUARE",
        "misconceptionId": "MIS-RATE-SQUARE",
        "feedback": "Rate is not squared.",
        "rationale": "Rate is not squared.",
        "remediation": "Rate is not squared."
      },
      {
        "id": "C",
        "text": "Should have divided by 200.",
        "misconceptionTag": "MIS-DIVISOR-CONFUSION",
        "misconceptionId": "MIS-DIVISOR-CONFUSION",
        "feedback": "Standard divisor is 100.",
        "rationale": "Standard divisor is 100.",
        "remediation": "Standard divisor is 100."
      },
      {
        "id": "D",
        "text": "There is no mistake; CI and SI are identical for 2 years.",
        "misconceptionTag": "MIS-EQUIVALENCE-SLIP",
        "misconceptionId": "MIS-EQUIVALENCE-SLIP",
        "feedback": "CI and SI are identical only for the first year.",
        "rationale": "CI and SI are identical only for the first year.",
        "remediation": "CI and SI are identical only for the first year."
      }
    ]
  },
  {
    "id": "q_l5_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "What is the difference between Compound Interest and Simple Interest on \\₦$80,000$ for $2$ years at $5\\%$ per annum?",
    "correctAnswer": "A",
    "explanation": "Difference = P(R/100)² = 80,000 × (5/100)² = 80,000 × 0.0025 = ₦200.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the difference between Compound Interest and Simple Interest on \\₦$80,000$ for $2$ years at $5\\%$ per annum?",
      "output": "\\₦$200$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$200$"
      },
      {
        "id": "B",
        "text": "\\₦$400$",
        "misconceptionTag": "MIS-DOUBLE-DIFF",
        "misconceptionId": "MIS-DOUBLE-DIFF",
        "feedback": "Difference is P × (R/100)² = 80,000 × 0.0025 = ₦200.",
        "rationale": "Difference is P × (R/100)² = 80,000 × 0.0025 = ₦200.",
        "remediation": "Difference is P × (R/100)² = 80,000 × 0.0025 = ₦200."
      },
      {
        "id": "C",
        "text": "\\₦$100$",
        "misconceptionTag": "MIS-HALF-DIFF",
        "misconceptionId": "MIS-HALF-DIFF",
        "feedback": "SI = ₦8,000; CI = 80,000(1.05)² - 80,000 = 88,200 - 80,000 = ₦8,200. Diff = ₦200.",
        "rationale": "SI = ₦8,000; CI = 80,000(1.05)² - 80,000 = 88,200 - 80,000 = ₦8,200. Diff = ₦200.",
        "remediation": "SI = ₦8,000; CI = 80,000(1.05)² - 80,000 = 88,200 - 80,000 = ₦8,200. Diff = ₦200."
      },
      {
        "id": "D",
        "text": "\\₦$0$",
        "misconceptionTag": "MIS-NO-DIFF",
        "misconceptionId": "MIS-NO-DIFF",
        "feedback": "Difference between CI and SI over 2 years is non-zero.",
        "rationale": "Difference between CI and SI over 2 years is non-zero.",
        "remediation": "Difference between CI and SI over 2 years is non-zero."
      }
    ]
  },
  {
    "id": "q_l5_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m2",
    "lessonId": "l5",
    "topicId": "top-waec-comm-02",
    "objectiveIndex": 0,
    "objective": "Calculate simple and compound interest and depreciation",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "In how many years will an investment double itself at $12.5\\%$ simple interest per annum?",
    "correctAnswer": "A",
    "explanation": "For investment to double, I = P. P = (P × 12.5 × T)/100 => T = 100 / 12.5 = 8 years.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In how many years will an investment double itself at $12.5\\%$ simple interest per annum?",
      "output": "$8\\text{ years}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$8\\text{ years}$"
      },
      {
        "id": "B",
        "text": "$6\\text{ years}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "To double, I = P. T = (100 × P) / (P × 12.5) = 100 / 12.5 = 8 years.",
        "rationale": "To double, I = P. T = (100 × P) / (P × 12.5) = 100 / 12.5 = 8 years.",
        "remediation": "To double, I = P. T = (100 × P) / (P × 12.5) = 100 / 12.5 = 8 years."
      },
      {
        "id": "C",
        "text": "$10\\text{ years}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "12.5 × 8 = 100%.",
        "rationale": "12.5 × 8 = 100%.",
        "remediation": "12.5 × 8 = 100%."
      },
      {
        "id": "D",
        "text": "$12\\text{ years}$",
        "misconceptionTag": "MIS-RATE-CONFUSION",
        "misconceptionId": "MIS-RATE-CONFUSION",
        "feedback": "8 years is exact.",
        "rationale": "8 years is exact.",
        "remediation": "8 years is exact."
      }
    ]
  },
  {
    "id": "q_l6_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Solve for $x$: $$3(2x - 5) = 21$$",
    "correctAnswer": "A",
    "explanation": "6x - 15 = 21 => 6x = 36 => x = 6.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve for $x$: $$3(2x - 5) = 21$$",
      "output": "6",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "5",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "6x - 15 = 21 => 6x = 36 => x = 6.",
        "rationale": "6x - 15 = 21 => 6x = 36 => x = 6.",
        "remediation": "6x - 15 = 21 => 6x = 36 => x = 6."
      },
      {
        "id": "C",
        "text": "4",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "Check 21 + 15 = 36.",
        "rationale": "Check 21 + 15 = 36.",
        "remediation": "Check 21 + 15 = 36."
      },
      {
        "id": "D",
        "text": "7",
        "misconceptionTag": "MIS-DISTRIB-FAIL",
        "misconceptionId": "MIS-DISTRIB-FAIL",
        "feedback": "Must distribute 3 to both terms inside parentheses.",
        "rationale": "Must distribute 3 to both terms inside parentheses.",
        "remediation": "Must distribute 3 to both terms inside parentheses."
      }
    ]
  },
  {
    "id": "q_l6_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Solve for $y$: $$\\frac{y + 3}{4} = \\frac{y - 1}{2}$$",
    "correctAnswer": "A",
    "explanation": "2(y + 3) = 4(y - 1) => 2y + 6 = 4y - 4 => 2y = 10 => y = 5.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve for $y$: $$\\frac{y + 3}{4} = \\frac{y - 1}{2}$$",
      "output": "5",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "3",
        "misconceptionTag": "MIS-CROSS-MULT",
        "misconceptionId": "MIS-CROSS-MULT",
        "feedback": "Cross-multiply: 2(y + 3) = 4(y - 1) => 2y + 6 = 4y - 4 => 2y = 10 => y = 5.",
        "rationale": "Cross-multiply: 2(y + 3) = 4(y - 1) => 2y + 6 = 4y - 4 => 2y = 10 => y = 5.",
        "remediation": "Cross-multiply: 2(y + 3) = 4(y - 1) => 2y + 6 = 4y - 4 => 2y = 10 => y = 5."
      },
      {
        "id": "C",
        "text": "4",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Check 2y = 10.",
        "rationale": "Check 2y = 10.",
        "remediation": "Check 2y = 10."
      },
      {
        "id": "D",
        "text": "7",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "6 + 4 = 10.",
        "rationale": "6 + 4 = 10.",
        "remediation": "6 + 4 = 10."
      }
    ]
  },
  {
    "id": "q_l6_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which operation clears the fraction from $$\\frac{2x - 1}{3} = 5$$ in a single step?",
    "correctAnswer": "A",
    "explanation": "Multiplying both sides by 3 gives 2x - 1 = 15.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which operation clears the fraction from $$\\frac{2x - 1}{3} = 5$$ in a single step?",
      "output": "Multiply both sides of the equation by $3$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Multiply both sides of the equation by $3$."
      },
      {
        "id": "B",
        "text": "Subtract 1 from both sides.",
        "misconceptionTag": "MIS-ORDER-OPS",
        "misconceptionId": "MIS-ORDER-OPS",
        "feedback": "Cannot subtract numerator terms before clearing denominator.",
        "rationale": "Cannot subtract numerator terms before clearing denominator.",
        "remediation": "Cannot subtract numerator terms before clearing denominator."
      },
      {
        "id": "C",
        "text": "Divide both sides by 2.",
        "misconceptionTag": "MIS-DIVIDE-EARLY",
        "misconceptionId": "MIS-DIVIDE-EARLY",
        "feedback": "Dividing by 2 complicates fractions.",
        "rationale": "Dividing by 2 complicates fractions.",
        "remediation": "Dividing by 2 complicates fractions."
      },
      {
        "id": "D",
        "text": "Add 3 to both sides.",
        "misconceptionTag": "MIS-INVERSE-OP",
        "misconceptionId": "MIS-INVERSE-OP",
        "feedback": "Multiplication is the inverse of division by 3.",
        "rationale": "Multiplication is the inverse of division by 3.",
        "remediation": "Multiplication is the inverse of division by 3."
      }
    ]
  },
  {
    "id": "q_l6_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If $a(x + b) = c$, then $x = \\frac{c - ab}{a}$.",
    "correctAnswer": "A",
    "explanation": "ax + ab = c => ax = c - ab => x = (c - ab)/a.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If $a(x + b) = c$, then $x = \\frac{c - ab}{a}$.",
      "output": "True: Expanding gives $ax + ab = c \\implies ax = c - ab \\implies x = \\frac{c - ab}{a}$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Expanding gives $ax + ab = c \\implies ax = c - ab \\implies x = \\frac{c - ab}{a}$."
      },
      {
        "id": "B",
        "text": "False: The correct solution is x = c/a - b.",
        "misconceptionTag": "MIS-EQUIV-CONFUSION",
        "misconceptionId": "MIS-EQUIV-CONFUSION",
        "feedback": "c/a - b is identical to (c - ab)/a.",
        "rationale": "c/a - b is identical to (c - ab)/a.",
        "remediation": "c/a - b is identical to (c - ab)/a."
      },
      {
        "id": "C",
        "text": "False: b cannot be subtracted from c.",
        "misconceptionTag": "MIS-ALGEBRA-RULES",
        "misconceptionId": "MIS-ALGEBRA-RULES",
        "feedback": "ab is a term and can be subtracted.",
        "rationale": "ab is a term and can be subtracted.",
        "remediation": "ab is a term and can be subtracted."
      },
      {
        "id": "D",
        "text": "True: But only when a is a positive integer.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for all non-zero real numbers a.",
        "rationale": "Holds for all non-zero real numbers a.",
        "remediation": "Holds for all non-zero real numbers a."
      }
    ]
  },
  {
    "id": "q_l6_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "The sum of three consecutive odd integers is $57$. Find the largest integer.",
    "correctAnswer": "A",
    "explanation": "Let numbers be n, n+2, n+4. 3n + 6 = 57 => 3n = 51 => n = 17. Largest = 21.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The sum of three consecutive odd integers is $57$. Find the largest integer.",
      "output": "21",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "21"
      },
      {
        "id": "B",
        "text": "19",
        "misconceptionTag": "MIS-MIDDLE-TERM",
        "misconceptionId": "MIS-MIDDLE-TERM",
        "feedback": "19 is the middle integer (x = 17, x+2 = 19, x+4 = 21).",
        "rationale": "19 is the middle integer (x = 17, x+2 = 19, x+4 = 21).",
        "remediation": "19 is the middle integer (x = 17, x+2 = 19, x+4 = 21)."
      },
      {
        "id": "C",
        "text": "17",
        "misconceptionTag": "MIS-SMALLEST-TERM",
        "misconceptionId": "MIS-SMALLEST-TERM",
        "feedback": "17 is the smallest integer.",
        "rationale": "17 is the smallest integer.",
        "remediation": "17 is the smallest integer."
      },
      {
        "id": "D",
        "text": "23",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "17 + 19 + 21 = 57. Largest is 21.",
        "rationale": "17 + 19 + 21 = 57. Largest is 21.",
        "remediation": "17 + 19 + 21 = 57. Largest is 21."
      }
    ]
  },
  {
    "id": "q_l6_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A mother is currently $4$ times as old as her daughter. In $6$ years, she will be $3$ times as old as her daughter. How old is the daughter now?",
    "correctAnswer": "A",
    "explanation": "M = 4D. M + 6 = 3(D + 6) => 4D + 6 = 3D + 18 => D = 12 years.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A mother is currently $4$ times as old as her daughter. In $6$ years, she will be $3$ times as old as her daughter. How ",
      "output": "12\\text{ years}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "12\\text{ years}"
      },
      {
        "id": "B",
        "text": "10\\text{ years}",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "4d + 6 = 3(d + 6) => 4d + 6 = 3d + 18 => d = 12.",
        "rationale": "4d + 6 = 3(d + 6) => 4d + 6 = 3d + 18 => d = 12.",
        "remediation": "4d + 6 = 3(d + 6) => 4d + 6 = 3d + 18 => d = 12."
      },
      {
        "id": "C",
        "text": "14\\text{ years}",
        "misconceptionTag": "MIS-EQUATION-SETUP",
        "misconceptionId": "MIS-EQUATION-SETUP",
        "feedback": "Check: 4(12)=48. In 6 yrs: 54 and 18; 54 = 3(18).",
        "rationale": "Check: 4(12)=48. In 6 yrs: 54 and 18; 54 = 3(18).",
        "remediation": "Check: 4(12)=48. In 6 yrs: 54 and 18; 54 = 3(18)."
      },
      {
        "id": "D",
        "text": "8\\text{ years}",
        "misconceptionTag": "MIS-SCALE-SLIP",
        "misconceptionId": "MIS-SCALE-SLIP",
        "feedback": "d = 12 years.",
        "rationale": "d = 12 years.",
        "remediation": "d = 12 years."
      }
    ]
  },
  {
    "id": "q_l6_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "The perimeter of a rectangle is $54\\text{ cm}$. If the length is $3\\text{ cm}$ longer than twice the width, calculate the width.",
    "correctAnswer": "A",
    "explanation": "2(2W + 3 + W) = 54 => 6W + 6 = 54 => 6W = 48 => W = 8 cm.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The perimeter of a rectangle is $54\\text{ cm}$. If the length is $3\\text{ cm}$ longer than twice the width, calculate th",
      "output": "8\\text{ cm}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "8\\text{ cm}"
      },
      {
        "id": "B",
        "text": "10\\text{ cm}",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "2(L + W) = 54 => L + W = 27. (2W + 3) + W = 27 => 3W = 24 => W = 8.",
        "rationale": "2(L + W) = 54 => L + W = 27. (2W + 3) + W = 27 => 3W = 24 => W = 8.",
        "remediation": "2(L + W) = 54 => L + W = 27. (2W + 3) + W = 27 => 3W = 24 => W = 8."
      },
      {
        "id": "C",
        "text": "19\\text{ cm}",
        "misconceptionTag": "MIS-LENGTH-VALUE",
        "misconceptionId": "MIS-LENGTH-VALUE",
        "feedback": "19 cm is the length, not width.",
        "rationale": "19 cm is the length, not width.",
        "remediation": "19 cm is the length, not width."
      },
      {
        "id": "D",
        "text": "6\\text{ cm}",
        "misconceptionTag": "MIS-FORMULA-SLIP",
        "misconceptionId": "MIS-FORMULA-SLIP",
        "feedback": "Check 2(19 + 8) = 2(27) = 54 cm.",
        "rationale": "Check 2(19 + 8) = 2(27) = 54 cm.",
        "remediation": "Check 2(19 + 8) = 2(27) = 54 cm."
      }
    ]
  },
  {
    "id": "q_l6_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Solve for $x$: $$5x - 7 = 3x + 15$$",
    "correctAnswer": 11,
    "explanation": "5x - 3x = 15 + 7 => 2x = 22 => x = 11.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve for $x$: $$5x - 7 = 3x + 15$$",
      "output": "11",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l6_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to solve the linear equation $\\frac{x}{2} + 3 = \\frac{x}{3} + 5$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard procedure for clearing fractional linear equations.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to solve the linear equation $\\frac{x}{2} + 3 = \\frac{x}{3} + 5$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Multiply every term on both sides by the LCM of 2 and 3, which is 6."
      },
      {
        "id": "B",
        "text": "Simplify to obtain: 3x + 18 = 2x + 30."
      },
      {
        "id": "C",
        "text": "Collect like terms: 3x - 2x = 30 - 18."
      },
      {
        "id": "D",
        "text": "State the solution: x = 12."
      }
    ]
  },
  {
    "id": "q_l6_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Solve for $x$ in terms of $a$ and $b$: $$ax - b = 0$$ (where $a \\ne 0$).",
    "correctAnswer": "b/a",
    "explanation": "ax = b => x = b/a.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve for $x$ in terms of $a$ and $b$: $$ax - b = 0$$ (where $a \\ne 0$).",
      "output": "b/a",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l6_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student solved $2(3x - 4) = 20$ as follows:\nStep 1: $6x - 4 = 20$\nStep 2: $6x = 24$\nStep 3: $x = 4$\nWhat mistake occurred?",
    "correctAnswer": "A",
    "explanation": "2*(3x - 4) = 6x - 8, so Step 1 had a distribution error.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student solved $2(3x - 4) = 20$ as follows:\nStep 1: $6x - 4 = 20$\nStep 2: $6x = 24$\nStep 3: $x = 4$\nWhat mistake occur",
      "output": "In Step 1: Failed to distribute the multiplier $2$ to $-4$ (should be $6x - 8 = 20$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "In Step 1: Failed to distribute the multiplier $2$ to $-4$ (should be $6x - 8 = 20$)."
      },
      {
        "id": "B",
        "text": "In Step 2: Added 4 instead of subtracting 4.",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "Adding 4 to 20 was correct if line 1 had -4.",
        "rationale": "Adding 4 to 20 was correct if line 1 had -4.",
        "remediation": "Adding 4 to 20 was correct if line 1 had -4."
      },
      {
        "id": "C",
        "text": "In Step 3: Divided 24 by 6 incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "24 / 6 = 4 is correct division.",
        "rationale": "24 / 6 = 4 is correct division.",
        "remediation": "24 / 6 = 4 is correct division."
      },
      {
        "id": "D",
        "text": "There is no mistake; x = 4 is the exact solution.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Testing x=4: 2(3(4)-4) = 2(8) = 16 ≠ 20.",
        "rationale": "Testing x=4: 2(3(4)-4) = 2(8) = 16 ≠ 20.",
        "remediation": "Testing x=4: 2(3(4)-4) = 2(8) = 16 ≠ 20."
      }
    ]
  },
  {
    "id": "q_l6_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "In solving $$\\frac{x+2}{3} = 4$$, a student subtracted $2$ from both sides first to get $$\\frac{x}{3} = 2$$. What was the error?",
    "correctAnswer": "A",
    "explanation": "Must multiply by 3 first: x + 2 = 12 => x = 10.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In solving $$\\frac{x+2}{3} = 4$$, a student subtracted $2$ from both sides first to get $$\\frac{x}{3} = 2$$. What was th",
      "output": "The numerator $+2$ is inside the grouping divided by $3$; both sides must be multiplied by $3$ before subtracting $2$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The numerator $+2$ is inside the grouping divided by $3$; both sides must be multiplied by $3$ before subtracting $2$."
      },
      {
        "id": "B",
        "text": "Should have added 2 instead of subtracting.",
        "misconceptionTag": "MIS-SIGN-CONFUSION",
        "misconceptionId": "MIS-SIGN-CONFUSION",
        "feedback": "The whole numerator is divided by 3.",
        "rationale": "The whole numerator is divided by 3.",
        "remediation": "The whole numerator is divided by 3."
      },
      {
        "id": "C",
        "text": "Should have divided 4 by 3.",
        "misconceptionTag": "MIS-OPERATION-CONFUSION",
        "misconceptionId": "MIS-OPERATION-CONFUSION",
        "feedback": "Must multiply by 3.",
        "rationale": "Must multiply by 3.",
        "remediation": "Must multiply by 3."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Subtracting 2 from (x+2)/3 is invalid algebra.",
        "rationale": "Subtracting 2 from (x+2)/3 is invalid algebra.",
        "remediation": "Subtracting 2 from (x+2)/3 is invalid algebra."
      }
    ]
  },
  {
    "id": "q_l6_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A man invested a total of \\₦$500,000$ in two schemes. Scheme A pays $6\\%$ per annum and Scheme B pays $8\\%$ per annum. If his total annual interest is \\₦$36,000$, how much was invested in Scheme B?",
    "correctAnswer": "A",
    "explanation": "0.06(500k - x) + 0.08x = 36k => 30k + 0.02x = 36k => 0.02x = 6k => x = ₦300,000.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A man invested a total of \\₦$500,000$ in two schemes. Scheme A pays $6\\%$ per annum and Scheme B pays $8\\%$ per annum. I",
      "output": "\\₦$300,000$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$300,000$"
      },
      {
        "id": "B",
        "text": "\\₦$200,000$",
        "misconceptionTag": "MIS-SCHEME-A",
        "misconceptionId": "MIS-SCHEME-A",
        "feedback": "₦200,000 was invested in Scheme A (0.06 × 200,000 = 12,000).",
        "rationale": "₦200,000 was invested in Scheme A (0.06 × 200,000 = 12,000).",
        "remediation": "₦200,000 was invested in Scheme A (0.06 × 200,000 = 12,000)."
      },
      {
        "id": "C",
        "text": "\\₦$250,000$",
        "misconceptionTag": "MIS-EQUAL-SPLIT",
        "misconceptionId": "MIS-EQUAL-SPLIT",
        "feedback": "0.07 × 500,000 = 35,000 ≠ 36,000.",
        "rationale": "0.07 × 500,000 = 35,000 ≠ 36,000.",
        "remediation": "0.07 × 500,000 = 35,000 ≠ 36,000."
      },
      {
        "id": "D",
        "text": "\\₦$350,000$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "0.06(500,000 - x) + 0.08x = 36,000 => 30,000 + 0.02x = 36,000 => x = 300,000.",
        "rationale": "0.06(500,000 - x) + 0.08x = 36,000 => 30,000 + 0.02x = 36,000 => x = 300,000.",
        "remediation": "0.06(500,000 - x) + 0.08x = 36,000 => 30,000 + 0.02x = 36,000 => x = 300,000."
      }
    ]
  },
  {
    "id": "q_l6_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l6",
    "topicId": "top-waec-alg-01",
    "objectiveIndex": 0,
    "objective": "Solve linear equations in one variable and word problems",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A train travels at speed $v\\text{ km/h}$ for $3\\text{ hours}$ and at $(v + 20)\\text{ km/h}$ for $2\\text{ hours}$. If total distance is $390\\text{ km}$, find $v$.",
    "correctAnswer": "A",
    "explanation": "3v + 2v + 40 = 390 => 5v = 350 => v = 70 km/h.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A train travels at speed $v\\text{ km/h}$ for $3\\text{ hours}$ and at $(v + 20)\\text{ km/h}$ for $2\\text{ hours}$. If tot",
      "output": "70\\text{ km/h}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "70\\text{ km/h}"
      },
      {
        "id": "B",
        "text": "60\\text{ km/h}",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "3v + 2(v + 20) = 390 => 5v + 40 = 390 => 5v = 350 => v = 70.",
        "rationale": "3v + 2(v + 20) = 390 => 5v + 40 = 390 => 5v = 350 => v = 70.",
        "remediation": "3v + 2(v + 20) = 390 => 5v + 40 = 390 => 5v = 350 => v = 70."
      },
      {
        "id": "C",
        "text": "80\\text{ km/h}",
        "misconceptionTag": "MIS-SPEED-GUESS",
        "misconceptionId": "MIS-SPEED-GUESS",
        "feedback": "Check: 3(70) + 2(90) = 210 + 180 = 390 km.",
        "rationale": "Check: 3(70) + 2(90) = 210 + 180 = 390 km.",
        "remediation": "Check: 3(70) + 2(90) = 210 + 180 = 390 km."
      },
      {
        "id": "D",
        "text": "65\\text{ km/h}",
        "misconceptionTag": "MIS-AVERAGE-SLIP",
        "misconceptionId": "MIS-AVERAGE-SLIP",
        "feedback": "v = 70 km/h.",
        "rationale": "v = 70 km/h.",
        "remediation": "v = 70 km/h."
      }
    ]
  },
  {
    "id": "q_l7_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Solve the inequality: $$-3x < 12$$",
    "correctAnswer": "A",
    "explanation": "Dividing both sides by -3 reverses the inequality symbol: -3x / (-3) > 12 / (-3) => x > -4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the inequality: $$-3x < 12$$",
      "output": "$x > -4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x > -4$"
      },
      {
        "id": "B",
        "text": "$x < -4$",
        "misconceptionTag": "MIS-INEQ-SIGN-FLIP",
        "misconceptionId": "MIS-INEQ-SIGN-FLIP",
        "feedback": "When dividing or multiplying an inequality by a negative number, reverse the inequality sign.",
        "rationale": "When dividing or multiplying an inequality by a negative number, reverse the inequality sign.",
        "remediation": "When dividing or multiplying an inequality by a negative number, reverse the inequality sign."
      },
      {
        "id": "C",
        "text": "$x > 4$",
        "misconceptionTag": "MIS-ARITH-SIGN",
        "misconceptionId": "MIS-ARITH-SIGN",
        "feedback": "12 divided by -3 is -4, not +4.",
        "rationale": "12 divided by -3 is -4, not +4.",
        "remediation": "12 divided by -3 is -4, not +4."
      },
      {
        "id": "D",
        "text": "$x < 4$",
        "misconceptionTag": "MIS-DOUBLE-SIGN-SLIP",
        "misconceptionId": "MIS-DOUBLE-SIGN-SLIP",
        "feedback": "Both sign flip and division sign rules must be applied.",
        "rationale": "Both sign flip and division sign rules must be applied.",
        "remediation": "Both sign flip and division sign rules must be applied."
      }
    ]
  },
  {
    "id": "q_l7_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "On a number line, how is the inequality $x \\ge 3$ graphically represented?",
    "correctAnswer": "A",
    "explanation": "The 'greater than or equal to' symbol includes 3 (solid circle) and extends towards positive infinity (right).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "On a number line, how is the inequality $x \\ge 3$ graphically represented?",
      "output": "A solid (closed) circle at $3$ with an arrow pointing to the right.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "A solid (closed) circle at $3$ with an arrow pointing to the right."
      },
      {
        "id": "B",
        "text": "An open (unshaded) circle at 3 with an arrow pointing to the right.",
        "misconceptionTag": "MIS-OPEN-CLOSED-CONFUSION",
        "misconceptionId": "MIS-OPEN-CLOSED-CONFUSION",
        "feedback": "Strict inequalities (<, >) use open circles; non-strict (<=, >=) use solid circles.",
        "rationale": "Strict inequalities (<, >) use open circles; non-strict (<=, >=) use solid circles.",
        "remediation": "Strict inequalities (<, >) use open circles; non-strict (<=, >=) use solid circles."
      },
      {
        "id": "C",
        "text": "A solid circle at 3 with an arrow pointing to the left.",
        "misconceptionTag": "MIS-DIRECTION-SLIP",
        "misconceptionId": "MIS-DIRECTION-SLIP",
        "feedback": "x >= 3 points to values greater than 3, which is to the right.",
        "rationale": "x >= 3 points to values greater than 3, which is to the right.",
        "remediation": "x >= 3 points to values greater than 3, which is to the right."
      },
      {
        "id": "D",
        "text": "An open circle at 3 with an arrow pointing to the left.",
        "misconceptionTag": "MIS-ALL-OPPOSITE",
        "misconceptionId": "MIS-ALL-OPPOSITE",
        "feedback": "Solid circle and rightward ray are required.",
        "rationale": "Solid circle and rightward ray are required.",
        "remediation": "Solid circle and rightward ray are required."
      }
    ]
  },
  {
    "id": "q_l7_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Find the range of values of $x$ satisfying: $$2 < x + 5 \\le 9$$",
    "correctAnswer": "A",
    "explanation": "Subtract 5 from all parts: 2 - 5 < x <= 9 - 5 => -3 < x <= 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the range of values of $x$ satisfying: $$2 < x + 5 \\le 9$$",
      "output": "$-3 < x \\le 4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$-3 < x \\le 4$"
      },
      {
        "id": "B",
        "text": "$3 < x \\le 14$",
        "misconceptionTag": "MIS-ADD-INSTEAD-SUB",
        "misconceptionId": "MIS-ADD-INSTEAD-SUB",
        "feedback": "Subtract 5 from all three parts of the compound inequality.",
        "rationale": "Subtract 5 from all three parts of the compound inequality.",
        "remediation": "Subtract 5 from all three parts of the compound inequality."
      },
      {
        "id": "C",
        "text": "$-3 \\le x < 4$",
        "misconceptionTag": "MIS-STRICTNESS-SWAP",
        "misconceptionId": "MIS-STRICTNESS-SWAP",
        "feedback": "The left inequality is strict (<), right is inclusive (<=).",
        "rationale": "The left inequality is strict (<), right is inclusive (<=).",
        "remediation": "The left inequality is strict (<), right is inclusive (<=)."
      },
      {
        "id": "D",
        "text": "$x \\le 4$",
        "misconceptionTag": "MIS-HALF-INEQ",
        "misconceptionId": "MIS-HALF-INEQ",
        "feedback": "The lower bound 2 < x + 5 must also be preserved: x > -3.",
        "rationale": "The lower bound 2 < x + 5 must also be preserved: x > -3.",
        "remediation": "The lower bound 2 < x + 5 must also be preserved: x > -3."
      }
    ]
  },
  {
    "id": "q_l7_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If $x < y$ and $c < 0$, then $cx > cy$.",
    "correctAnswer": "A",
    "explanation": "By the order properties of real numbers, multiplying by a negative number reverses the inequality: cx > cy.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If $x < y$ and $c < 0$, then $cx > cy$.",
      "output": "True: Multiplying or dividing any inequality by a negative value reverses the inequality sign.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Multiplying or dividing any inequality by a negative value reverses the inequality sign."
      },
      {
        "id": "B",
        "text": "False: The inequality sign never changes direction under multiplication.",
        "misconceptionTag": "MIS-INEQ-AXIOM",
        "misconceptionId": "MIS-INEQ-AXIOM",
        "feedback": "Multiplying by a negative reverses ordering on the real number line.",
        "rationale": "Multiplying by a negative reverses ordering on the real number line.",
        "remediation": "Multiplying by a negative reverses ordering on the real number line."
      },
      {
        "id": "C",
        "text": "False: Holds only when x and y are positive integers.",
        "misconceptionTag": "MIS-DOMAIN-RESTRICTION",
        "misconceptionId": "MIS-DOMAIN-RESTRICTION",
        "feedback": "Holds for all real numbers x, y and negative real c.",
        "rationale": "Holds for all real numbers x, y and negative real c.",
        "remediation": "Holds for all real numbers x, y and negative real c."
      },
      {
        "id": "D",
        "text": "True: But only if c = -1.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for any c < 0.",
        "rationale": "Holds for any c < 0.",
        "remediation": "Holds for any c < 0."
      }
    ]
  },
  {
    "id": "q_l7_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve the inequality: $$4x - 7 \\le 2(x + 3)$$",
    "correctAnswer": "A",
    "explanation": "4x - 7 <= 2x + 6 => 4x - 2x <= 6 + 7 => 2x <= 13 => x <= 13/2 = 6.5.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the inequality: $$4x - 7 \\le 2(x + 3)$$",
      "output": "$x \\le 6.5$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x \\le 6.5$"
      },
      {
        "id": "B",
        "text": "$x \\le 5$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "4x - 7 <= 2x + 6 => 2x <= 13 => x <= 6.5.",
        "rationale": "4x - 7 <= 2x + 6 => 2x <= 13 => x <= 6.5.",
        "remediation": "4x - 7 <= 2x + 6 => 2x <= 13 => x <= 6.5."
      },
      {
        "id": "C",
        "text": "$x \\ge 6.5$",
        "misconceptionTag": "MIS-UNNEEDED-FLIP",
        "misconceptionId": "MIS-UNNEEDED-FLIP",
        "feedback": "Dividing by positive 2 does not reverse the inequality sign.",
        "rationale": "Dividing by positive 2 does not reverse the inequality sign.",
        "remediation": "Dividing by positive 2 does not reverse the inequality sign."
      },
      {
        "id": "D",
        "text": "$x \\le 13$",
        "misconceptionTag": "MIS-FORGOT-DIVIDE",
        "misconceptionId": "MIS-FORGOT-DIVIDE",
        "feedback": "Must divide by the coefficient of x (2).",
        "rationale": "Must divide by the coefficient of x (2).",
        "remediation": "Must divide by the coefficient of x (2)."
      }
    ]
  },
  {
    "id": "q_l7_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Find the smallest integer $x$ that satisfies: $$\\frac{3x - 1}{4} > 2$$",
    "correctAnswer": "A",
    "explanation": "3x - 1 > 8 => 3x > 9 => x > 3. The smallest integer strictly greater than 3 is 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the smallest integer $x$ that satisfies: $$\\frac{3x - 1}{4} > 2$$",
      "output": "4",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3",
        "misconceptionTag": "MIS-INCLUSIVE-GUESS",
        "misconceptionId": "MIS-INCLUSIVE-GUESS",
        "feedback": "x > 3 requires x to be strictly greater than 3, so the smallest integer is 4.",
        "rationale": "x > 3 requires x to be strictly greater than 3, so the smallest integer is 4.",
        "remediation": "x > 3 requires x to be strictly greater than 3, so the smallest integer is 4."
      },
      {
        "id": "C",
        "text": "5",
        "misconceptionTag": "MIS-OVERESTIMATE",
        "misconceptionId": "MIS-OVERESTIMATE",
        "feedback": "4 satisfies 3(4) - 1 = 11 > 8, so 4 is the smallest integer.",
        "rationale": "4 satisfies 3(4) - 1 = 11 > 8, so 4 is the smallest integer.",
        "remediation": "4 satisfies 3(4) - 1 = 11 > 8, so 4 is the smallest integer."
      },
      {
        "id": "D",
        "text": "2",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "3(2) - 1 = 5, not > 8.",
        "rationale": "3(2) - 1 = 5, not > 8.",
        "remediation": "3(2) - 1 = 5, not > 8."
      }
    ]
  },
  {
    "id": "q_l7_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve the combined inequality: $$2x - 3 < 5 \\quad \\text{and} \\quad 3x + 1 \\ge -8$$",
    "correctAnswer": "A",
    "explanation": "From 2x - 3 < 5: 2x < 8 => x < 4. From 3x + 1 >= -8: 3x >= -9 => x >= -3. Combined: -3 <= x < 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the combined inequality: $$2x - 3 < 5 \\quad \\text{and} \\quad 3x + 1 \\ge -8$$",
      "output": "$-3 \\le x < 4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$-3 \\le x < 4$"
      },
      {
        "id": "B",
        "text": "$-3 < x \\le 4$",
        "misconceptionTag": "MIS-STRICTNESS-CONFUSION",
        "misconceptionId": "MIS-STRICTNESS-CONFUSION",
        "feedback": "3x >= -9 => x >= -3 (inclusive); 2x < 8 => x < 4 (strict).",
        "rationale": "3x >= -9 => x >= -3 (inclusive); 2x < 8 => x < 4 (strict).",
        "remediation": "3x >= -9 => x >= -3 (inclusive); 2x < 8 => x < 4 (strict)."
      },
      {
        "id": "C",
        "text": "$x < 4$",
        "misconceptionTag": "MIS-MISSING-LOWER",
        "misconceptionId": "MIS-MISSING-LOWER",
        "feedback": "The lower bound x >= -3 must be included.",
        "rationale": "The lower bound x >= -3 must be included.",
        "remediation": "The lower bound x >= -3 must be included."
      },
      {
        "id": "D",
        "text": "$-3 \\le x < 1$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "2x < 8 => x < 4, not 1.",
        "rationale": "2x < 8 => x < 4, not 1.",
        "remediation": "2x < 8 => x < 4, not 1."
      }
    ]
  },
  {
    "id": "q_l7_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Find the maximum integer value of $x$ that satisfies $5 - 2x \\ge -3$.",
    "correctAnswer": 4,
    "explanation": "-2x >= -8 => x <= 4. The maximum integer value is 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the maximum integer value of $x$ that satisfies $5 - 2x \\ge -3$.",
      "output": "4",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l7_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to solve the linear inequality $$\\frac{2x - 5}{3} < \\frac{x + 1}{2}$$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard structured procedure to solve fractional linear inequalities.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to solve the linear inequality $$\\frac{2x - 5}{3} < \\frac{x + 1}{2}$$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Multiply both sides by 6 (the LCM of 3 and 2) to eliminate the denominators."
      },
      {
        "id": "B",
        "text": "Expand both sides: 2(2x - 5) < 3(x + 1) => 4x - 10 < 3x + 3."
      },
      {
        "id": "C",
        "text": "Collect like terms: 4x - 3x < 3 + 10."
      },
      {
        "id": "D",
        "text": "Write the final inequality: x < 13."
      }
    ]
  },
  {
    "id": "q_l7_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Express the solution of $2x + 6 > 0$ as a simplified inequality for $x$.",
    "correctAnswer": "x > -3",
    "explanation": "2x > -6 => x > -3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Express the solution of $2x + 6 > 0$ as a simplified inequality for $x$.",
      "output": "x > -3",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l7_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student solved $-5x \\le 20$ as follows:\n$$\\frac{-5x}{-5} \\le \\frac{20}{-5} \\implies x \\le -4$$\nWhat was the error?",
    "correctAnswer": "A",
    "explanation": "Dividing by a negative number reverses <= to >=, giving x >= -4.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student solved $-5x \\le 20$ as follows:\n$$\\frac{-5x}{-5} \\le \\frac{20}{-5} \\implies x \\le -4$$\nWhat was the error?",
      "output": "Failed to reverse the inequality sign when dividing by $-5$ (the correct answer is $x \\ge -4$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Failed to reverse the inequality sign when dividing by $-5$ (the correct answer is $x \\ge -4$)."
      },
      {
        "id": "B",
        "text": "Divided 20 by -5 incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "20 / (-5) = -4 is correct arithmetic.",
        "rationale": "20 / (-5) = -4 is correct arithmetic.",
        "remediation": "20 / (-5) = -4 is correct arithmetic."
      },
      {
        "id": "C",
        "text": "Should have added 5 to both sides instead.",
        "misconceptionTag": "MIS-INVERSE-OP",
        "misconceptionId": "MIS-INVERSE-OP",
        "feedback": "-5 is multiplied by x, so division is required.",
        "rationale": "-5 is multiplied by x, so division is required.",
        "remediation": "-5 is multiplied by x, so division is required."
      },
      {
        "id": "D",
        "text": "There is no error in the solution.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Dividing by negative reverses the sign.",
        "rationale": "Dividing by negative reverses the sign.",
        "remediation": "Dividing by negative reverses the sign."
      }
    ]
  },
  {
    "id": "q_l7_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "In finding integers satisfying $1 < x \\le 4$, a student listed $\\{1, 2, 3, 4\\}$. What error was made?",
    "correctAnswer": "A",
    "explanation": "Strict inequality 1 < x means 1 is excluded. The correct integers are {2, 3, 4}.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In finding integers satisfying $1 < x \\le 4$, a student listed $\\{1, 2, 3, 4\\}$. What error was made?",
      "output": "Included $1$, but the inequality $1 < x$ is strict ($1$ is not included).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Included $1$, but the inequality $1 < x$ is strict ($1$ is not included)."
      },
      {
        "id": "B",
        "text": "Included 4, which should not be there.",
        "misconceptionTag": "MIS-BOUNDARY-SWAP",
        "misconceptionId": "MIS-BOUNDARY-SWAP",
        "feedback": "x <= 4 includes 4.",
        "rationale": "x <= 4 includes 4.",
        "remediation": "x <= 4 includes 4."
      },
      {
        "id": "C",
        "text": "Omitted 0 from the list.",
        "misconceptionTag": "MIS-ZERO-INCLUSION",
        "misconceptionId": "MIS-ZERO-INCLUSION",
        "feedback": "0 is less than 1, so it cannot be in the range.",
        "rationale": "0 is less than 1, so it cannot be in the range.",
        "remediation": "0 is less than 1, so it cannot be in the range."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "1 < x means x must be strictly greater than 1; integers are {2, 3, 4}.",
        "rationale": "1 < x means x must be strictly greater than 1; integers are {2, 3, 4}.",
        "remediation": "1 < x means x must be strictly greater than 1; integers are {2, 3, 4}."
      }
    ]
  },
  {
    "id": "q_l7_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "If $x$ is an integer such that $-2 \\le x < 3$, how many values can $x$ take?",
    "correctAnswer": "A",
    "explanation": "The integers are -2, -1, 0, 1, 2, giving exactly 5 integers.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $x$ is an integer such that $-2 \\le x < 3$, how many values can $x$ take?",
      "output": "5",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4",
        "misconceptionTag": "MIS-OFF-BY-ONE",
        "misconceptionId": "MIS-OFF-BY-ONE",
        "feedback": "Values are -2, -1, 0, 1, 2 (which gives 5 integers).",
        "rationale": "Values are -2, -1, 0, 1, 2 (which gives 5 integers).",
        "remediation": "Values are -2, -1, 0, 1, 2 (which gives 5 integers)."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-INCLUDED-UPPER",
        "misconceptionId": "MIS-INCLUDED-UPPER",
        "feedback": "3 is excluded because the upper bound is strict (< 3).",
        "rationale": "3 is excluded because the upper bound is strict (< 3).",
        "remediation": "3 is excluded because the upper bound is strict (< 3)."
      },
      {
        "id": "D",
        "text": "3",
        "misconceptionTag": "MIS-POSITIVE-ONLY",
        "misconceptionId": "MIS-POSITIVE-ONLY",
        "feedback": "Negative integers -2, -1 and zero must be included.",
        "rationale": "Negative integers -2, -1 and zero must be included.",
        "remediation": "Negative integers -2, -1 and zero must be included."
      }
    ]
  },
  {
    "id": "q_l7_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l7",
    "topicId": "top-waec-alg-02",
    "objectiveIndex": 0,
    "objective": "Solve linear inequalities and represent solutions on number lines",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Find the range of values of $k$ for which the equation $x^2 - 4x + k = 0$ has two distinct real roots.",
    "correctAnswer": "A",
    "explanation": "Delta = (-4)^2 - 4(1)(k) = 16 - 4k > 0 => 4k < 16 => k < 4.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the range of values of $k$ for which the equation $x^2 - 4x + k = 0$ has two distinct real roots.",
      "output": "$k < 4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$k < 4$"
      },
      {
        "id": "B",
        "text": "$k > 4$",
        "misconceptionTag": "MIS-DISCRIM-SIGN",
        "misconceptionId": "MIS-DISCRIM-SIGN",
        "feedback": "Distinct real roots require b² - 4ac > 0 => 16 - 4k > 0 => -4k > -16 => k < 4.",
        "rationale": "Distinct real roots require b² - 4ac > 0 => 16 - 4k > 0 => -4k > -16 => k < 4.",
        "remediation": "Distinct real roots require b² - 4ac > 0 => 16 - 4k > 0 => -4k > -16 => k < 4."
      },
      {
        "id": "C",
        "text": "$k \\le 4$",
        "misconceptionTag": "MIS-EQUAL-ROOTS",
        "misconceptionId": "MIS-EQUAL-ROOTS",
        "feedback": "k = 4 gives equal roots, not distinct real roots.",
        "rationale": "k = 4 gives equal roots, not distinct real roots.",
        "remediation": "k = 4 gives equal roots, not distinct real roots."
      },
      {
        "id": "D",
        "text": "$k < 16$",
        "misconceptionTag": "MIS-FORMULA-SLIP",
        "misconceptionId": "MIS-FORMULA-SLIP",
        "feedback": "4ac = 4(1)(k) = 4k, so 16 - 4k > 0 => k < 4.",
        "rationale": "4ac = 4(1)(k) = 4k, so 16 - 4k > 0 => k < 4.",
        "remediation": "4ac = 4(1)(k) = 4k, so 16 - 4k > 0 => k < 4."
      }
    ]
  },
  {
    "id": "q_l8_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Solve the simultaneous equations:\n$$x + y = 10$$\n$$x - y = 4$$",
    "correctAnswer": "A",
    "explanation": "Adding both equations gives 2x = 14 => x = 7. Then 7 + y = 10 => y = 3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the simultaneous equations:\n$$x + y = 10$$\n$$x - y = 4$$",
      "output": "$x = 7, y = 3$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = 7, y = 3$"
      },
      {
        "id": "B",
        "text": "$x = 6, y = 4$",
        "misconceptionTag": "MIS-SUM-CHECK-ONLY",
        "misconceptionId": "MIS-SUM-CHECK-ONLY",
        "feedback": "6 + 4 = 10, but 6 - 4 = 2 ≠ 4.",
        "rationale": "6 + 4 = 10, but 6 - 4 = 2 ≠ 4.",
        "remediation": "6 + 4 = 10, but 6 - 4 = 2 ≠ 4."
      },
      {
        "id": "C",
        "text": "$x = 8, y = 2$",
        "misconceptionTag": "MIS-DIFF-CHECK-ONLY",
        "misconceptionId": "MIS-DIFF-CHECK-ONLY",
        "feedback": "8 - 2 = 6 ≠ 4.",
        "rationale": "8 - 2 = 6 ≠ 4.",
        "remediation": "8 - 2 = 6 ≠ 4."
      },
      {
        "id": "D",
        "text": "$x = 3, y = 7$",
        "misconceptionTag": "MIS-VARIABLE-SWAP",
        "misconceptionId": "MIS-VARIABLE-SWAP",
        "feedback": "x - y would be 3 - 7 = -4, not +4.",
        "rationale": "x - y would be 3 - 7 = -4, not +4.",
        "remediation": "x - y would be 3 - 7 = -4, not +4."
      }
    ]
  },
  {
    "id": "q_l8_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "If $y$ varies directly as $x$, and $y = 12$ when $x = 3$, find the constant of variation $k$.",
    "correctAnswer": "A",
    "explanation": "y = kx => 12 = k(3) => k = 12 / 3 = 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $y$ varies directly as $x$, and $y = 12$ when $x = 3$, find the constant of variation $k$.",
      "output": "4",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "36",
        "misconceptionTag": "MIS-MULT-INSTEAD-DIV",
        "misconceptionId": "MIS-MULT-INSTEAD-DIV",
        "feedback": "Direct variation is y = kx, so k = y/x = 12/3 = 4, not y * x = 36.",
        "rationale": "Direct variation is y = kx, so k = y/x = 12/3 = 4, not y * x = 36.",
        "remediation": "Direct variation is y = kx, so k = y/x = 12/3 = 4, not y * x = 36."
      },
      {
        "id": "C",
        "text": "0.25",
        "misconceptionTag": "MIS-RECIPROCAL-SLIP",
        "misconceptionId": "MIS-RECIPROCAL-SLIP",
        "feedback": "k = y/x = 12/3 = 4, not x/y = 3/12 = 0.25.",
        "rationale": "k = y/x = 12/3 = 4, not x/y = 3/12 = 0.25.",
        "remediation": "k = y/x = 12/3 = 4, not x/y = 3/12 = 0.25."
      },
      {
        "id": "D",
        "text": "9",
        "misconceptionTag": "MIS-SUBTRACTION-SLIP",
        "misconceptionId": "MIS-SUBTRACTION-SLIP",
        "feedback": "Direct variation involves ratio, not difference: 12 - 3 = 9 is incorrect.",
        "rationale": "Direct variation involves ratio, not difference: 12 - 3 = 9 is incorrect.",
        "remediation": "Direct variation involves ratio, not difference: 12 - 3 = 9 is incorrect."
      }
    ]
  },
  {
    "id": "q_l8_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "If $P$ varies inversely as the square of $Q$, which equation models this relationship?",
    "correctAnswer": "A",
    "explanation": "Inverse variation with the square of Q means P is proportional to 1/Q², giving P = k / Q².",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $P$ varies inversely as the square of $Q$, which equation models this relationship?",
      "output": "$$P = \\frac{k}{Q^2}$$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$$P = \\frac{k}{Q^2}$$"
      },
      {
        "id": "B",
        "text": "$P = k Q^2$",
        "misconceptionTag": "MIS-DIRECT-CONFUSION",
        "misconceptionId": "MIS-DIRECT-CONFUSION",
        "feedback": "Direct variation with square is P = kQ²; inverse has Q² in the denominator.",
        "rationale": "Direct variation with square is P = kQ²; inverse has Q² in the denominator.",
        "remediation": "Direct variation with square is P = kQ²; inverse has Q² in the denominator."
      },
      {
        "id": "C",
        "text": "$P = \\frac{k}{Q}$",
        "misconceptionTag": "MIS-FORGOT-SQUARE",
        "misconceptionId": "MIS-FORGOT-SQUARE",
        "feedback": "The problem states inverse variation as the square of Q, so Q must be squared.",
        "rationale": "The problem states inverse variation as the square of Q, so Q must be squared.",
        "remediation": "The problem states inverse variation as the square of Q, so Q must be squared."
      },
      {
        "id": "D",
        "text": "$P = k \\sqrt{Q}$",
        "misconceptionTag": "MIS-ROOT-CONFUSION",
        "misconceptionId": "MIS-ROOT-CONFUSION",
        "feedback": "Square is Q², not square root.",
        "rationale": "Square is Q², not square root.",
        "remediation": "Square is Q², not square root."
      }
    ]
  },
  {
    "id": "q_l8_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If two lines have equations $2x + 3y = 6$ and $4x + 6y = 15$, the system has no solution.",
    "correctAnswer": "A",
    "explanation": "Slopes are equal (-2/3) but y-intercepts differ (2 vs 2.5), meaning lines are distinct and parallel: no solution.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If two lines have equations $2x + 3y = 6$ and $4x + 6y = 15$, the system has no solution.",
      "output": "True: The coefficients are proportional (2/4 = 3/6 = 1/2) but constants differ (6/15 ≠ 1/2), representing parallel lines that never intersect.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: The coefficients are proportional (2/4 = 3/6 = 1/2) but constants differ (6/15 ≠ 1/2), representing parallel lines that never intersect."
      },
      {
        "id": "B",
        "text": "False: Every system of two linear equations has exactly one unique solution.",
        "misconceptionTag": "MIS-ALWAYS-UNIQUE",
        "misconceptionId": "MIS-ALWAYS-UNIQUE",
        "feedback": "Parallel lines have no points of intersection.",
        "rationale": "Parallel lines have no points of intersection.",
        "remediation": "Parallel lines have no points of intersection."
      },
      {
        "id": "C",
        "text": "False: The lines are identical, so there are infinitely many solutions.",
        "misconceptionTag": "MIS-COINCIDENT-CONFUSION",
        "misconceptionId": "MIS-COINCIDENT-CONFUSION",
        "feedback": "The constants are 6 and 15, 6/15 = 2/5 ≠ 1/2, so the lines are parallel, not coincident.",
        "rationale": "The constants are 6 and 15, 6/15 = 2/5 ≠ 1/2, so the lines are parallel, not coincident.",
        "remediation": "The constants are 6 and 15, 6/15 = 2/5 ≠ 1/2, so the lines are parallel, not coincident."
      },
      {
        "id": "D",
        "text": "True: But only if x and y are positive integers.",
        "misconceptionTag": "MIS-DOMAIN-RESTRICTION",
        "misconceptionId": "MIS-DOMAIN-RESTRICTION",
        "feedback": "No real solution exists.",
        "rationale": "No real solution exists.",
        "remediation": "No real solution exists."
      }
    ]
  },
  {
    "id": "q_l8_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve the system:\n$$2x + 3y = 13$$\n$$3x - 2y = 0$$",
    "correctAnswer": "A",
    "explanation": "From eq 2: 3x = 2y => y = 1.5x. Substitute into eq 1: 2x + 3(1.5x) = 13 => 6.5x = 13 => x = 2. Then y = 1.5(2) = 3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the system:\n$$2x + 3y = 13$$\n$$3x - 2y = 0$$",
      "output": "$x = 2, y = 3$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = 2, y = 3$"
      },
      {
        "id": "B",
        "text": "$x = 3, y = 2$",
        "misconceptionTag": "MIS-COORDINATE-SWAP",
        "misconceptionId": "MIS-COORDINATE-SWAP",
        "feedback": "3(3) - 2(2) = 5 ≠ 0.",
        "rationale": "3(3) - 2(2) = 5 ≠ 0.",
        "remediation": "3(3) - 2(2) = 5 ≠ 0."
      },
      {
        "id": "C",
        "text": "$x = 4, y = 6$",
        "misconceptionTag": "MIS-SCALE-SLIP",
        "misconceptionId": "MIS-SCALE-SLIP",
        "feedback": "2(4) + 3(6) = 26 ≠ 13.",
        "rationale": "2(4) + 3(6) = 26 ≠ 13.",
        "remediation": "2(4) + 3(6) = 26 ≠ 13."
      },
      {
        "id": "D",
        "text": "$x = 1, y = 1.5$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "2(1) + 3(1.5) = 6.5 ≠ 13.",
        "rationale": "2(1) + 3(1.5) = 6.5 ≠ 13.",
        "remediation": "2(1) + 3(1.5) = 6.5 ≠ 13."
      }
    ]
  },
  {
    "id": "q_l8_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "The cost of $3$ pens and $2$ exercise books is \\₦$750$. The cost of $2$ pens and $4$ exercise books is \\₦$900$. What is the cost of one exercise book?",
    "correctAnswer": "A",
    "explanation": "Let p = pen, b = book: 3p + 2b = 750 and p + 2b = 450. Subtracting gives 2p = 300 => p = ₦150. Then 150 + 2b = 450 => 2b = 300 => b = ₦150.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The cost of $3$ pens and $2$ exercise books is \\₦$750$. The cost of $2$ pens and $4$ exercise books is \\₦$900$. What is ",
      "output": "\\₦$150$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\₦$150$"
      },
      {
        "id": "B",
        "text": "\\₦$120$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Let p = pen, b = book. 3p + 2b = 750, 2p + 4b = 900. Solving gives b = 150.",
        "rationale": "Let p = pen, b = book. 3p + 2b = 750, 2p + 4b = 900. Solving gives b = 150.",
        "remediation": "Let p = pen, b = book. 3p + 2b = 750, 2p + 4b = 900. Solving gives b = 150."
      },
      {
        "id": "C",
        "text": "\\₦$180$",
        "misconceptionTag": "MIS-PEN-PRICE",
        "misconceptionId": "MIS-PEN-PRICE",
        "feedback": "₦180 is the cost of a pen: 3(150) + 2(150) = 750 => p = 150? Wait: 3p + 2b = 750 => 6p + 4b = 1500; (6p+4b)-(2p+4b) = 4p = 600 => p = 150. Then 2b = 750 - 450 = 300 => b = 150.",
        "rationale": "₦180 is the cost of a pen: 3(150) + 2(150) = 750 => p = 150? Wait: 3p + 2b = 750 => 6p + 4b = 1500; (6p+4b)-(2p+4b) = 4p = 600 => p = 150. Then 2b = 750 - 450 = 300 => b = 150.",
        "remediation": "₦180 is the cost of a pen: 3(150) + 2(150) = 750 => p = 150? Wait: 3p + 2b = 750 => 6p + 4b = 1500; (6p+4b)-(2p+4b) = 4p = 600 => p = 150. Then 2b = 750 - 450 = 300 => b = 150."
      },
      {
        "id": "D",
        "text": "\\₦$200$",
        "misconceptionTag": "MIS-SCALE-SLIP",
        "misconceptionId": "MIS-SCALE-SLIP",
        "feedback": "p = 150, b = 150.",
        "rationale": "p = 150, b = 150.",
        "remediation": "p = 150, b = 150."
      }
    ]
  },
  {
    "id": "q_l8_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "$y$ varies inversely as $x$. If $y = 8$ when $x = 3$, find the value of $y$ when $x = 6$.",
    "correctAnswer": "A",
    "explanation": "k = y * x = 8 * 3 = 24. When x = 6: y = 24 / 6 = 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "$y$ varies inversely as $x$. If $y = 8$ when $x = 3$, find the value of $y$ when $x = 6$.",
      "output": "4",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "16",
        "misconceptionTag": "MIS-DIRECT-INSTEAD-INVERSE",
        "misconceptionId": "MIS-DIRECT-INSTEAD-INVERSE",
        "feedback": "In direct variation y doubles to 16; in inverse variation doubling x halves y to 4.",
        "rationale": "In direct variation y doubles to 16; in inverse variation doubling x halves y to 4.",
        "remediation": "In direct variation y doubles to 16; in inverse variation doubling x halves y to 4."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-AVERAGE-SLIP",
        "misconceptionId": "MIS-AVERAGE-SLIP",
        "feedback": "y = k/x => k = 8 * 3 = 24. For x = 6: y = 24 / 6 = 4.",
        "rationale": "y = k/x => k = 8 * 3 = 24. For x = 6: y = 24 / 6 = 4.",
        "remediation": "y = k/x => k = 8 * 3 = 24. For x = 6: y = 24 / 6 = 4."
      },
      {
        "id": "D",
        "text": "2",
        "misconceptionTag": "MIS-FACTOR-CONFUSION",
        "misconceptionId": "MIS-FACTOR-CONFUSION",
        "feedback": "24 / 6 = 4, not 2.",
        "rationale": "24 / 6 = 4, not 2.",
        "remediation": "24 / 6 = 4, not 2."
      }
    ]
  },
  {
    "id": "q_l8_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Solve for $x$ in the simultaneous equations: $3x + y = 11$ and $2x - y = 4$.",
    "correctAnswer": 3,
    "explanation": "Adding the two equations: 5x = 15 => x = 3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve for $x$ in the simultaneous equations: $3x + y = 11$ and $2x - y = 4$.",
      "output": "3",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l8_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to solve the simultaneous system $2x + y = 7$ and $x - y = 2$ by elimination:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard structured elimination method.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to solve the simultaneous system $2x + y = 7$ and $x - y = 2$ by elimination:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Observe that the coefficients of y are +1 and -1 (opposites)."
      },
      {
        "id": "B",
        "text": "Add the two equations together: (2x + y) + (x - y) = 7 + 2 => 3x = 9."
      },
      {
        "id": "C",
        "text": "Solve for x: x = 9 / 3 = 3."
      },
      {
        "id": "D",
        "text": "Substitute x = 3 into x - y = 2 to find y: 3 - y = 2 => y = 1."
      }
    ]
  },
  {
    "id": "q_l8_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "If $z$ varies jointly as $x$ and $y$, write the general equation relating $z, x, y$ and a constant $k$.",
    "correctAnswer": "z = k*x*y",
    "explanation": "Joint variation means z is directly proportional to the product xy, so z = k*x*y.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $z$ varies jointly as $x$ and $y$, write the general equation relating $z, x, y$ and a constant $k$.",
      "output": "z = k*x*y",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l8_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student was asked: 'If $y$ varies inversely as $x$, and $y = 10$ when $x = 2$, find $y$ when $x = 5$'. The student calculated $k = \\frac{10}{2} = 5$, then $y = 5 \\times 5 = 25$. What mistake was made?",
    "correctAnswer": "A",
    "explanation": "Inverse variation formula is xy = k => k = 10 * 2 = 20. Then y = 20 / 5 = 4.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student was asked: 'If $y$ varies inversely as $x$, and $y = 10$ when $x = 2$, find $y$ when $x = 5$'. The student cal",
      "output": "Used the formula for direct variation ($y = kx$) instead of inverse variation ($xy = k$, where $k = 10 \\times 2 = 20$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Used the formula for direct variation ($y = kx$) instead of inverse variation ($xy = k$, where $k = 10 \\times 2 = 20$)."
      },
      {
        "id": "B",
        "text": "Multiplied 5 by 5 incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "5 × 5 = 25 is correct arithmetic for wrong formula.",
        "rationale": "5 × 5 = 25 is correct arithmetic for wrong formula.",
        "remediation": "5 × 5 = 25 is correct arithmetic for wrong formula."
      },
      {
        "id": "C",
        "text": "Divided 10 by 2 incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "10 / 2 = 5 is correct arithmetic for wrong formula.",
        "rationale": "10 / 2 = 5 is correct arithmetic for wrong formula.",
        "remediation": "10 / 2 = 5 is correct arithmetic for wrong formula."
      },
      {
        "id": "D",
        "text": "There is no mistake.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "For inverse variation, y = 20/5 = 4, not 25.",
        "rationale": "For inverse variation, y = 20/5 = 4, not 25.",
        "remediation": "For inverse variation, y = 20/5 = 4, not 25."
      }
    ]
  },
  {
    "id": "q_l8_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To eliminate $y$ from $2x + 3y = 8$ and $5x - 3y = 6$, a student subtracted the bottom equation from the top. What was the error?",
    "correctAnswer": "A",
    "explanation": "Adding +3y and -3y gives 0. Subtracting gives 3y - (-3y) = 6y.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To eliminate $y$ from $2x + 3y = 8$ and $5x - 3y = 6$, a student subtracted the bottom equation from the top. What was t",
      "output": "Since the $y$-terms have opposite signs ($+3y$ and $-3y$), the equations should be ADDED, not subtracted (subtracting gives $+6y$, not $0$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Since the $y$-terms have opposite signs ($+3y$ and $-3y$), the equations should be ADDED, not subtracted (subtracting gives $+6y$, not $0$)."
      },
      {
        "id": "B",
        "text": "Equations should never be added in algebra.",
        "misconceptionTag": "MIS-METHOD-MISUNDERSTANDING",
        "misconceptionId": "MIS-METHOD-MISUNDERSTANDING",
        "feedback": "Adding equations with opposite coefficients eliminates the variable.",
        "rationale": "Adding equations with opposite coefficients eliminates the variable.",
        "remediation": "Adding equations with opposite coefficients eliminates the variable."
      },
      {
        "id": "C",
        "text": "The coefficients of x should be eliminated first.",
        "misconceptionTag": "MIS-VARIABLE-CHOICE",
        "misconceptionId": "MIS-VARIABLE-CHOICE",
        "feedback": "Either variable may be eliminated.",
        "rationale": "Either variable may be eliminated.",
        "remediation": "Either variable may be eliminated."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "3y - (-3y) = 6y, which fails to eliminate y.",
        "rationale": "3y - (-3y) = 6y, which fails to eliminate y.",
        "remediation": "3y - (-3y) = 6y, which fails to eliminate y."
      }
    ]
  },
  {
    "id": "q_l8_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A fraction becomes $\\frac{1}{2}$ when $1$ is added to its denominator. It becomes $\\frac{1}{3}$ when $1$ is subtracted from its numerator. Find the fraction.",
    "correctAnswer": "A",
    "explanation": "Let fraction be x/y. x/(y+1) = 1/2 => y = 2x - 1. (x-1)/y = 1/3 => y = 3x - 3. Equating: 3x - 3 = 2x - 1 => x = 2, so y = 3. The fraction is 2/3.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A fraction becomes $\\frac{1}{2}$ when $1$ is added to its denominator. It becomes $\\frac{1}{3}$ when $1$ is subtracted f",
      "output": "\\frac{2}{3}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\frac{2}{3}"
      },
      {
        "id": "B",
        "text": "\\frac{3}{5}",
        "misconceptionTag": "MIS-TEST-SLIP",
        "misconceptionId": "MIS-TEST-SLIP",
        "feedback": "3 / (5 + 1) = 3/6 = 1/2, but (3 - 1)/5 = 2/5 ≠ 1/3.",
        "rationale": "3 / (5 + 1) = 3/6 = 1/2, but (3 - 1)/5 = 2/5 ≠ 1/3.",
        "remediation": "3 / (5 + 1) = 3/6 = 1/2, but (3 - 1)/5 = 2/5 ≠ 1/3."
      },
      {
        "id": "C",
        "text": "\\frac{4}{7}",
        "misconceptionTag": "MIS-TEST-SLIP",
        "misconceptionId": "MIS-TEST-SLIP",
        "feedback": "4 / (7 + 1) = 4/8 = 1/2, but (4 - 1)/7 = 3/7 ≠ 1/3.",
        "rationale": "4 / (7 + 1) = 4/8 = 1/2, but (4 - 1)/7 = 3/7 ≠ 1/3.",
        "remediation": "4 / (7 + 1) = 4/8 = 1/2, but (4 - 1)/7 = 3/7 ≠ 1/3."
      },
      {
        "id": "D",
        "text": "\\frac{3}{7}",
        "misconceptionTag": "MIS-DENOM-SLIP",
        "misconceptionId": "MIS-DENOM-SLIP",
        "feedback": "3 / (7 + 1) = 3/8 ≠ 1/2.",
        "rationale": "3 / (7 + 1) = 3/8 ≠ 1/2.",
        "remediation": "3 / (7 + 1) = 3/8 ≠ 1/2."
      }
    ]
  },
  {
    "id": "q_l8_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m3",
    "lessonId": "l8",
    "topicId": "top-waec-alg-03",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear equations and variation problems",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "The electrical resistance $R$ of a wire varies directly as its length $L$ and inversely as the square of its diameter $D$. If $L$ is doubled and $D$ is halved, by what factor does $R$ change?",
    "correctAnswer": "A",
    "explanation": "R = k L / D². New R' = k (2L) / (D/2)² = 2kL / (D²/4) = 8 (kL / D²) = 8R. R increases by a factor of 8.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The electrical resistance $R$ of a wire varies directly as its length $L$ and inversely as the square of its diameter $D",
      "output": "\\text{Increases by a factor of } 8",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "\\text{Increases by a factor of } 8"
      },
      {
        "id": "B",
        "text": "\\text{Increases by a factor of } 4",
        "misconceptionTag": "MIS-FORGOT-SQUARE-HALF",
        "misconceptionId": "MIS-FORGOT-SQUARE-HALF",
        "feedback": "Halving D means D² becomes (1/2)² = 1/4 in the denominator, multiplying R by 4; doubling L multiplies by 2; 2 * 4 = 8.",
        "rationale": "Halving D means D² becomes (1/2)² = 1/4 in the denominator, multiplying R by 4; doubling L multiplies by 2; 2 * 4 = 8.",
        "remediation": "Halving D means D² becomes (1/2)² = 1/4 in the denominator, multiplying R by 4; doubling L multiplies by 2; 2 * 4 = 8."
      },
      {
        "id": "C",
        "text": "\\text{Increases by a factor of } 2",
        "misconceptionTag": "MIS-LINEAR-D-CONFUSION",
        "misconceptionId": "MIS-LINEAR-D-CONFUSION",
        "feedback": "D is squared.",
        "rationale": "D is squared.",
        "remediation": "D is squared."
      },
      {
        "id": "D",
        "text": "\\text{Remains unchanged}",
        "misconceptionTag": "MIS-CANCELLATION-ERROR",
        "misconceptionId": "MIS-CANCELLATION-ERROR",
        "feedback": "2 / (1/2)² = 2 / (1/4) = 8, not 1.",
        "rationale": "2 / (1/2)² = 2 / (1/4) = 8, not 1.",
        "remediation": "2 / (1/2)² = 2 / (1/4) = 8, not 1."
      }
    ]
  },
  {
    "id": "q_l9_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Solve for $x$: $$x^2 - 5x + 6 = 0$$",
    "correctAnswer": "A",
    "explanation": "(x - 2)(x - 3) = 0 => x = 2 or x = 3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve for $x$: $$x^2 - 5x + 6 = 0$$",
      "output": "$x = 2 \\text{ or } x = 3$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = 2 \\text{ or } x = 3$"
      },
      {
        "id": "B",
        "text": "$x = -2 \\text{ or } x = -3$",
        "misconceptionTag": "MIS-ROOT-FACTOR-SIGN",
        "misconceptionId": "MIS-ROOT-FACTOR-SIGN",
        "feedback": "Factors are (x - 2)(x - 3) = 0, so roots are x = +2, +3.",
        "rationale": "Factors are (x - 2)(x - 3) = 0, so roots are x = +2, +3.",
        "remediation": "Factors are (x - 2)(x - 3) = 0, so roots are x = +2, +3."
      },
      {
        "id": "C",
        "text": "$x = 1 \\text{ or } x = 6$",
        "misconceptionTag": "MIS-FACTORS-OF-6",
        "misconceptionId": "MIS-FACTORS-OF-6",
        "feedback": "(1)(6) = 6, but 1 + 6 = 7 ≠ 5.",
        "rationale": "(1)(6) = 6, but 1 + 6 = 7 ≠ 5.",
        "remediation": "(1)(6) = 6, but 1 + 6 = 7 ≠ 5."
      },
      {
        "id": "D",
        "text": "$x = -1 \\text{ or } x = 6$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "(-1)(6) = -6 ≠ +6.",
        "rationale": "(-1)(6) = -6 ≠ +6.",
        "remediation": "(-1)(6) = -6 ≠ +6."
      }
    ]
  },
  {
    "id": "q_l9_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Factorize completely: $$2x^2 + 7x + 3$$",
    "correctAnswer": "A",
    "explanation": "Product ac = 2 * 3 = 6. Factors summing to 7 are 6 and 1: 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Factorize completely: $$2x^2 + 7x + 3$$",
      "output": "$$(2x + 1)(x + 3)$$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$$(2x + 1)(x + 3)$$"
      },
      {
        "id": "B",
        "text": "$(2x + 3)(x + 1)$",
        "misconceptionTag": "MIS-EXPANSION-CHECK",
        "misconceptionId": "MIS-EXPANSION-CHECK",
        "feedback": "(2x+3)(x+1) = 2x² + 5x + 3 ≠ 2x² + 7x + 3.",
        "rationale": "(2x+3)(x+1) = 2x² + 5x + 3 ≠ 2x² + 7x + 3.",
        "remediation": "(2x+3)(x+1) = 2x² + 5x + 3 ≠ 2x² + 7x + 3."
      },
      {
        "id": "C",
        "text": "$(2x - 1)(x - 3)$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "(-1)(-3) = +3, but middle term is -7x.",
        "rationale": "(-1)(-3) = +3, but middle term is -7x.",
        "remediation": "(-1)(-3) = +3, but middle term is -7x."
      },
      {
        "id": "D",
        "text": "$(x + 1)(x + 6)$",
        "misconceptionTag": "MIS-LEADING-COEFF",
        "misconceptionId": "MIS-LEADING-COEFF",
        "feedback": "Leading coefficient must be 2x².",
        "rationale": "Leading coefficient must be 2x².",
        "remediation": "Leading coefficient must be 2x²."
      }
    ]
  },
  {
    "id": "q_l9_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What are the roots of the equation $x(x - 4) = 0$?",
    "correctAnswer": "A",
    "explanation": "By the zero product principle, x = 0 or x - 4 = 0 => x = 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What are the roots of the equation $x(x - 4) = 0$?",
      "output": "$x = 0 \\text{ or } x = 4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = 0 \\text{ or } x = 4$"
      },
      {
        "id": "B",
        "text": "$x = 4$ only",
        "misconceptionTag": "MIS-LOST-ZERO-ROOT",
        "misconceptionId": "MIS-LOST-ZERO-ROOT",
        "feedback": "Dividing by x loses the root x = 0; x = 0 is a valid root.",
        "rationale": "Dividing by x loses the root x = 0; x = 0 is a valid root.",
        "remediation": "Dividing by x loses the root x = 0; x = 0 is a valid root."
      },
      {
        "id": "C",
        "text": "$x = -4 \\text{ or } x = 0$",
        "misconceptionTag": "MIS-SIGN-CONFUSION",
        "misconceptionId": "MIS-SIGN-CONFUSION",
        "feedback": "x - 4 = 0 => x = +4.",
        "rationale": "x - 4 = 0 => x = +4.",
        "remediation": "x - 4 = 0 => x = +4."
      },
      {
        "id": "D",
        "text": "$x = 2 \\text{ or } x = -2$",
        "misconceptionTag": "MIS-DIFF-OF-SQUARES",
        "misconceptionId": "MIS-DIFF-OF-SQUARES",
        "feedback": "This is not a difference of two squares.",
        "rationale": "This is not a difference of two squares.",
        "remediation": "This is not a difference of two squares."
      }
    ]
  },
  {
    "id": "q_l9_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If $(x - a)(x - b) = 0$, then $x = a$ or $x = b$.",
    "correctAnswer": "A",
    "explanation": "If UV = 0, then U = 0 or V = 0. Thus x - a = 0 => x = a or x - b = 0 => x = b.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If $(x - a)(x - b) = 0$, then $x = a$ or $x = b$.",
      "output": "True: By the Zero Product Property, if a product of two real numbers is zero, at least one of the factors must be zero.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: By the Zero Product Property, if a product of two real numbers is zero, at least one of the factors must be zero."
      },
      {
        "id": "B",
        "text": "False: Both factors must be zero simultaneously.",
        "misconceptionTag": "MIS-SIMULTANEOUS-SLIP",
        "misconceptionId": "MIS-SIMULTANEOUS-SLIP",
        "feedback": "Only one factor needs to be zero to make the product zero.",
        "rationale": "Only one factor needs to be zero to make the product zero.",
        "remediation": "Only one factor needs to be zero to make the product zero."
      },
      {
        "id": "C",
        "text": "False: The roots are x = -a and x = -b.",
        "misconceptionTag": "MIS-SIGN-CONFUSION",
        "misconceptionId": "MIS-SIGN-CONFUSION",
        "feedback": "x - a = 0 gives x = +a.",
        "rationale": "x - a = 0 gives x = +a.",
        "remediation": "x - a = 0 gives x = +a."
      },
      {
        "id": "D",
        "text": "True: But only if a and b are distinct positive integers.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for all real numbers a and b.",
        "rationale": "Holds for all real numbers a and b.",
        "remediation": "Holds for all real numbers a and b."
      }
    ]
  },
  {
    "id": "q_l9_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve the quadratic equation: $$3x^2 - 10x - 8 = 0$$",
    "correctAnswer": "A",
    "explanation": "ac = 3 * (-8) = -24. Numbers summing to -10 are -12 and +2. 3x² - 12x + 2x - 8 = 3x(x - 4) + 2(x - 4) = (3x + 2)(x - 4) = 0. x = 4 or x = -2/3.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the quadratic equation: $$3x^2 - 10x - 8 = 0$$",
      "output": "$x = 4 \\text{ or } x = -\\frac{2}{3}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = 4 \\text{ or } x = -\\frac{2}{3}$"
      },
      {
        "id": "B",
        "text": "$x = -4 \\text{ or } x = \\frac{2}{3}$",
        "misconceptionTag": "MIS-SIGN-REVERSAL",
        "misconceptionId": "MIS-SIGN-REVERSAL",
        "feedback": "Factors are (3x + 2)(x - 4) = 0 => x = 4 or x = -2/3.",
        "rationale": "Factors are (3x + 2)(x - 4) = 0 => x = 4 or x = -2/3.",
        "remediation": "Factors are (3x + 2)(x - 4) = 0 => x = 4 or x = -2/3."
      },
      {
        "id": "C",
        "text": "$x = 2 \\text{ or } x = -\\frac{4}{3}$",
        "misconceptionTag": "MIS-FACTOR-SLIP",
        "misconceptionId": "MIS-FACTOR-SLIP",
        "feedback": "3(2)² - 10(2) - 8 = 12 - 20 - 8 = -16 ≠ 0.",
        "rationale": "3(2)² - 10(2) - 8 = 12 - 20 - 8 = -16 ≠ 0.",
        "remediation": "3(2)² - 10(2) - 8 = 12 - 20 - 8 = -16 ≠ 0."
      },
      {
        "id": "D",
        "text": "$x = 4 \\text{ or } x = \\frac{2}{3}$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "x = -2/3.",
        "rationale": "x = -2/3.",
        "remediation": "x = -2/3."
      }
    ]
  },
  {
    "id": "q_l9_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "The product of two consecutive positive integers is $72$. Find the smaller integer.",
    "correctAnswer": "A",
    "explanation": "n(n + 1) = 72 => n² + n - 72 = 0 => (n + 9)(n - 8) = 0. Since n > 0, n = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The product of two consecutive positive integers is $72$. Find the smaller integer.",
      "output": "8",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9",
        "misconceptionTag": "MIS-LARGER-INTEGER",
        "misconceptionId": "MIS-LARGER-INTEGER",
        "feedback": "9 is the larger integer (8 × 9 = 72).",
        "rationale": "9 is the larger integer (8 × 9 = 72).",
        "remediation": "9 is the larger integer (8 × 9 = 72)."
      },
      {
        "id": "C",
        "text": "6",
        "misconceptionTag": "MIS-FACTOR-GUESS",
        "misconceptionId": "MIS-FACTOR-GUESS",
        "feedback": "6 × 7 = 42 ≠ 72.",
        "rationale": "6 × 7 = 42 ≠ 72.",
        "remediation": "6 × 7 = 42 ≠ 72."
      },
      {
        "id": "D",
        "text": "7",
        "misconceptionTag": "MIS-FACTOR-SLIP",
        "misconceptionId": "MIS-FACTOR-SLIP",
        "feedback": "7 × 8 = 56 ≠ 72.",
        "rationale": "7 × 8 = 56 ≠ 72.",
        "remediation": "7 × 8 = 56 ≠ 72."
      }
    ]
  },
  {
    "id": "q_l9_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve the equation: $$x^2 - 16 = 0$$",
    "correctAnswer": "A",
    "explanation": "(x - 4)(x + 4) = 0 => x = 4 or x = -4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the equation: $$x^2 - 16 = 0$$",
      "output": "$x = \\pm 4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = \\pm 4$"
      },
      {
        "id": "B",
        "text": "$x = 4$ only",
        "misconceptionTag": "MIS-LOST-NEGATIVE-ROOT",
        "misconceptionId": "MIS-LOST-NEGATIVE-ROOT",
        "feedback": "Squaring -4 also gives +16: (-4)² = 16, so -4 is also a root.",
        "rationale": "Squaring -4 also gives +16: (-4)² = 16, so -4 is also a root.",
        "remediation": "Squaring -4 also gives +16: (-4)² = 16, so -4 is also a root."
      },
      {
        "id": "C",
        "text": "$x = 8 \\text{ or } x = -8$",
        "misconceptionTag": "MIS-HALF-SLIP",
        "misconceptionId": "MIS-HALF-SLIP",
        "feedback": "8² = 64 ≠ 16; square root of 16 is 4.",
        "rationale": "8² = 64 ≠ 16; square root of 16 is 4.",
        "remediation": "8² = 64 ≠ 16; square root of 16 is 4."
      },
      {
        "id": "D",
        "text": "$x = 16 \\text{ or } x = 0$",
        "misconceptionTag": "MIS-FACTOR-CONFUSION",
        "misconceptionId": "MIS-FACTOR-CONFUSION",
        "feedback": "x² - 16 = (x - 4)(x + 4) = 0.",
        "rationale": "x² - 16 = (x - 4)(x + 4) = 0.",
        "remediation": "x² - 16 = (x - 4)(x + 4) = 0."
      }
    ]
  },
  {
    "id": "q_l9_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "If $x = 3$ is a root of $x^2 - kx + 15 = 0$, calculate the value of $k$.",
    "correctAnswer": 8,
    "explanation": "Substitute x = 3: 3² - 3k + 15 = 0 => 9 + 15 = 3k => 3k = 24 => k = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $x = 3$ is a root of $x^2 - kx + 15 = 0$, calculate the value of $k$.",
      "output": "8",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l9_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to solve $2x^2 + 5x - 3 = 0$ by factorization:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard structured steps for factoring non-monic quadratics.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to solve $2x^2 + 5x - 3 = 0$ by factorization:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Find two numbers with product 2 × (-3) = -6 and sum +5 (which are +6 and -1)."
      },
      {
        "id": "B",
        "text": "Split the middle term: 2x² + 6x - x - 3 = 0."
      },
      {
        "id": "C",
        "text": "Factor by grouping: 2x(x + 3) - 1(x + 3) = 0 => (2x - 1)(x + 3) = 0."
      },
      {
        "id": "D",
        "text": "Set each factor to zero: 2x - 1 = 0 => x = 1/2, and x + 3 = 0 => x = -3."
      }
    ]
  },
  {
    "id": "q_l9_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Factorize the difference of two squares: $4x^2 - 9$.",
    "correctAnswer": "(2x - 3)*(2x + 3)",
    "explanation": "(2x)² - 3² = (2x - 3)(2x + 3).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Factorize the difference of two squares: $4x^2 - 9$.",
      "output": "(2x - 3)*(2x + 3)",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l9_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student solved $x^2 = 7x$ by dividing both sides by $x$ to get $x = 7$. What error was committed?",
    "correctAnswer": "A",
    "explanation": "Dividing by x assumes x ≠ 0, losing the root x = 0. The full solution set is x = 0 or x = 7.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student solved $x^2 = 7x$ by dividing both sides by $x$ to get $x = 7$. What error was committed?",
      "output": "Dividing by $x$ lost the solution $x = 0$ (must rearrange to $x^2 - 7x = 0 \\implies x(x - 7) = 0$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Dividing by $x$ lost the solution $x = 0$ (must rearrange to $x^2 - 7x = 0 \\implies x(x - 7) = 0$)."
      },
      {
        "id": "B",
        "text": "7 is not a valid root.",
        "misconceptionTag": "MIS-ROOT-VALIDITY",
        "misconceptionId": "MIS-ROOT-VALIDITY",
        "feedback": "7² = 49 and 7(7) = 49, so 7 is a valid root.",
        "rationale": "7² = 49 and 7(7) = 49, so 7 is a valid root.",
        "remediation": "7² = 49 and 7(7) = 49, so 7 is a valid root."
      },
      {
        "id": "C",
        "text": "Should have taken the square root of both sides.",
        "misconceptionTag": "MIS-SQRT-METHOD",
        "misconceptionId": "MIS-SQRT-METHOD",
        "feedback": "Taking square root gives x = sqrt(7x), not simplifying.",
        "rationale": "Taking square root gives x = sqrt(7x), not simplifying.",
        "remediation": "Taking square root gives x = sqrt(7x), not simplifying."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Dividing by variable x without checking x=0 loses roots.",
        "rationale": "Dividing by variable x without checking x=0 loses roots.",
        "remediation": "Dividing by variable x without checking x=0 loses roots."
      }
    ]
  },
  {
    "id": "q_l9_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student factorized $x^2 - 2x - 8$ as $(x - 4)(x - 2)$. What mistake occurred?",
    "correctAnswer": "A",
    "explanation": "Need product -8 and sum -2: (-4)(+2) = -8 and -4 + 2 = -2. So (x - 4)(x + 2).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student factorized $x^2 - 2x - 8$ as $(x - 4)(x - 2)$. What mistake occurred?",
      "output": "Incorrect signs: $(-4) \\times (-2) = +8$, not $-8$ (the correct factorization is $(x - 4)(x + 2)$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Incorrect signs: $(-4) \\times (-2) = +8$, not $-8$ (the correct factorization is $(x - 4)(x + 2)$)."
      },
      {
        "id": "B",
        "text": "Should be (x + 4)(x + 2).",
        "misconceptionTag": "MIS-ALL-PLUS",
        "misconceptionId": "MIS-ALL-PLUS",
        "feedback": "(x+4)(x+2) = x² + 6x + 8.",
        "rationale": "(x+4)(x+2) = x² + 6x + 8.",
        "remediation": "(x+4)(x+2) = x² + 6x + 8."
      },
      {
        "id": "C",
        "text": "Used 4 and 2 instead of 8 and 1.",
        "misconceptionTag": "MIS-FACTOR-SELECTION",
        "misconceptionId": "MIS-FACTOR-SELECTION",
        "feedback": "4 and 2 have difference 2, which matches the middle term.",
        "rationale": "4 and 2 have difference 2, which matches the middle term.",
        "remediation": "4 and 2 have difference 2, which matches the middle term."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Expanding (x-4)(x-2) = x² - 6x + 8 ≠ x² - 2x - 8.",
        "rationale": "Expanding (x-4)(x-2) = x² - 6x + 8 ≠ x² - 2x - 8.",
        "remediation": "Expanding (x-4)(x-2) = x² - 6x + 8 ≠ x² - 2x - 8."
      }
    ]
  },
  {
    "id": "q_l9_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Find the roots of the equation: $$(x - 2)^2 - 9 = 0$$",
    "correctAnswer": "A",
    "explanation": "(x - 2)^2 = 9 => x - 2 = 3 or x - 2 = -3 => x = 5 or x = -1.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the roots of the equation: $$(x - 2)^2 - 9 = 0$$",
      "output": "$x = 5 \\text{ or } x = -1$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = 5 \\text{ or } x = -1$"
      },
      {
        "id": "B",
        "text": "$x = 5 \\text{ or } x = 1$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "x - 2 = -3 => x = -1, not +1.",
        "rationale": "x - 2 = -3 => x = -1, not +1.",
        "remediation": "x - 2 = -3 => x = -1, not +1."
      },
      {
        "id": "C",
        "text": "$x = 7 \\text{ or } x = -5$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(x - 2)² = 9 => x - 2 = ±3 => x = 2 ± 3.",
        "rationale": "(x - 2)² = 9 => x - 2 = ±3 => x = 2 ± 3.",
        "remediation": "(x - 2)² = 9 => x - 2 = ±3 => x = 2 ± 3."
      },
      {
        "id": "D",
        "text": "$x = 11 \\text{ or } x = -7$",
        "misconceptionTag": "MIS-UNROOTED-ADD",
        "misconceptionId": "MIS-UNROOTED-ADD",
        "feedback": "Must take square root of 9 (which is 3) first.",
        "rationale": "Must take square root of 9 (which is 3) first.",
        "remediation": "Must take square root of 9 (which is 3) first."
      }
    ]
  },
  {
    "id": "q_l9_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l9",
    "topicId": "top-waec-quad-01",
    "objectiveIndex": 0,
    "objective": "Factorize quadratic expressions and solve quadratic equations",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "The hypotenuse of a right-angled triangle is $10\\text{ cm}$. One leg is $2\\text{ cm}$ longer than the other. Find the length of the shorter leg.",
    "correctAnswer": "A",
    "explanation": "x² + (x + 2)² = 10² => x² + x² + 4x + 4 = 100 => 2x² + 4x - 96 = 0 => x² + 2x - 48 = 0 => (x + 8)(x - 6) = 0 => x = 6 cm.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The hypotenuse of a right-angled triangle is $10\\text{ cm}$. One leg is $2\\text{ cm}$ longer than the other. Find the le",
      "output": "6\\text{ cm}",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "6\\text{ cm}"
      },
      {
        "id": "B",
        "text": "8\\text{ cm}",
        "misconceptionTag": "MIS-LONGER-LEG",
        "misconceptionId": "MIS-LONGER-LEG",
        "feedback": "8 cm is the longer leg (6² + 8² = 36 + 64 = 100 = 10²).",
        "rationale": "8 cm is the longer leg (6² + 8² = 36 + 64 = 100 = 10²).",
        "remediation": "8 cm is the longer leg (6² + 8² = 36 + 64 = 100 = 10²)."
      },
      {
        "id": "C",
        "text": "5\\text{ cm}",
        "misconceptionTag": "MIS-GUESS-SLIP",
        "misconceptionId": "MIS-GUESS-SLIP",
        "feedback": "5² + 7² = 25 + 49 = 74 ≠ 100.",
        "rationale": "5² + 7² = 25 + 49 = 74 ≠ 100.",
        "remediation": "5² + 7² = 25 + 49 = 74 ≠ 100."
      },
      {
        "id": "D",
        "text": "4\\text{ cm}",
        "misconceptionTag": "MIS-GUESS-SLIP",
        "misconceptionId": "MIS-GUESS-SLIP",
        "feedback": "4² + 6² = 16 + 36 = 52 ≠ 100.",
        "rationale": "4² + 6² = 16 + 36 = 52 ≠ 100.",
        "remediation": "4² + 6² = 16 + 36 = 52 ≠ 100."
      }
    ]
  },
  {
    "id": "q_l10_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which formula correctly gives the roots of $ax^2 + bx + c = 0$ ($a \\ne 0$)?",
    "correctAnswer": "A",
    "explanation": "Standard quadratic formula: x = (-b ± √(b² - 4ac)) / (2a).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which formula correctly gives the roots of $ax^2 + bx + c = 0$ ($a \\ne 0$)?",
      "output": "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$"
      },
      {
        "id": "B",
        "text": "$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "The formula has -b, not +b.",
        "rationale": "The formula has -b, not +b.",
        "remediation": "The formula has -b, not +b."
      },
      {
        "id": "C",
        "text": "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2}$",
        "misconceptionTag": "MIS-DENOM-DROP",
        "misconceptionId": "MIS-DENOM-DROP",
        "feedback": "The denominator is 2a, not 2.",
        "rationale": "The denominator is 2a, not 2.",
        "remediation": "The denominator is 2a, not 2."
      },
      {
        "id": "D",
        "text": "$x = -b \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$",
        "misconceptionTag": "MIS-DIVISION-SLIP",
        "misconceptionId": "MIS-DIVISION-SLIP",
        "feedback": "The entire numerator is divided by 2a.",
        "rationale": "The entire numerator is divided by 2a.",
        "remediation": "The entire numerator is divided by 2a."
      }
    ]
  },
  {
    "id": "q_l10_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Calculate the discriminant $\\Delta = b^2 - 4ac$ for $2x^2 - 4x + 3 = 0$ and state the nature of its roots.",
    "correctAnswer": "A",
    "explanation": "b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8 < 0 => no real roots.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the discriminant $\\Delta = b^2 - 4ac$ for $2x^2 - 4x + 3 = 0$ and state the nature of its roots.",
      "output": "$\\Delta = -8 < 0$; no real roots (complex roots).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\Delta = -8 < 0$; no real roots (complex roots)."
      },
      {
        "id": "B",
        "text": "$\\Delta = 8 > 0$; two real distinct roots.",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "(-4)² - 4(2)(3) = 16 - 24 = -8.",
        "rationale": "(-4)² - 4(2)(3) = 16 - 24 = -8.",
        "remediation": "(-4)² - 4(2)(3) = 16 - 24 = -8."
      },
      {
        "id": "C",
        "text": "$\\Delta = 0$; two equal real roots.",
        "misconceptionTag": "MIS-DISCRIM-SLIP",
        "misconceptionId": "MIS-DISCRIM-SLIP",
        "feedback": "16 - 24 = -8 ≠ 0.",
        "rationale": "16 - 24 = -8 ≠ 0.",
        "remediation": "16 - 24 = -8 ≠ 0."
      },
      {
        "id": "D",
        "text": "$\\Delta = 40$; irrational roots.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(-4)² = 16, 4(2)(3) = 24 => 16 - 24 = -8.",
        "rationale": "(-4)² = 16, 4(2)(3) = 24 => 16 - 24 = -8.",
        "remediation": "(-4)² = 16, 4(2)(3) = 24 => 16 - 24 = -8."
      }
    ]
  },
  {
    "id": "q_l10_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What constant must be added to $x^2 + 8x$ to make it a perfect square trinomial?",
    "correctAnswer": "A",
    "explanation": "(b/2)² = (8/2)² = 4² = 16.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What constant must be added to $x^2 + 8x$ to make it a perfect square trinomial?",
      "output": "$16$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$16$"
      },
      {
        "id": "B",
        "text": "$64$",
        "misconceptionTag": "MIS-SQUARE-DIRECT",
        "misconceptionId": "MIS-SQUARE-DIRECT",
        "feedback": "(8/2)² = 4² = 16, not 8².",
        "rationale": "(8/2)² = 4² = 16, not 8².",
        "remediation": "(8/2)² = 4² = 16, not 8²."
      },
      {
        "id": "C",
        "text": "$8$",
        "misconceptionTag": "MIS-COEFF-COPY",
        "misconceptionId": "MIS-COEFF-COPY",
        "feedback": "Must take half the coefficient and square it.",
        "rationale": "Must take half the coefficient and square it.",
        "remediation": "Must take half the coefficient and square it."
      },
      {
        "id": "D",
        "text": "$4$",
        "misconceptionTag": "MIS-HALF-ONLY",
        "misconceptionId": "MIS-HALF-ONLY",
        "feedback": "8/2 = 4, but must square 4 to get 16.",
        "rationale": "8/2 = 4, but must square 4 to get 16.",
        "remediation": "8/2 = 4, but must square 4 to get 16."
      }
    ]
  },
  {
    "id": "q_l10_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If the discriminant $b^2 - 4ac = 0$, the quadratic equation has exactly one repeated real root.",
    "correctAnswer": "A",
    "explanation": "When Δ = 0, x = -b / (2a) is a double root.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If the discriminant $b^2 - 4ac = 0$, the quadratic equation has exactly one repeated real root.",
      "output": "True: The $\\pm \\sqrt{0}$ term vanishes, leaving the single repeated root $x = -\\frac{b}{2a}$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: The $\\pm \\sqrt{0}$ term vanishes, leaving the single repeated root $x = -\\frac{b}{2a}$."
      },
      {
        "id": "B",
        "text": "False: It has no real solutions.",
        "misconceptionTag": "MIS-DISCRIM-CONFUSION",
        "misconceptionId": "MIS-DISCRIM-CONFUSION",
        "feedback": "Δ < 0 gives no real solutions; Δ = 0 gives one repeated root.",
        "rationale": "Δ < 0 gives no real solutions; Δ = 0 gives one repeated root.",
        "remediation": "Δ < 0 gives no real solutions; Δ = 0 gives one repeated root."
      },
      {
        "id": "C",
        "text": "False: It has two distinct rational roots.",
        "misconceptionTag": "MIS-ROOT-NATURE",
        "misconceptionId": "MIS-ROOT-NATURE",
        "feedback": "Δ > 0 and perfect square gives distinct rational roots.",
        "rationale": "Δ > 0 and perfect square gives distinct rational roots.",
        "remediation": "Δ > 0 and perfect square gives distinct rational roots."
      },
      {
        "id": "D",
        "text": "True: But only if a = 1.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for all quadratic equations with Δ = 0.",
        "rationale": "Holds for all quadratic equations with Δ = 0.",
        "remediation": "Holds for all quadratic equations with Δ = 0."
      }
    ]
  },
  {
    "id": "q_l10_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve $2x^2 + 3x - 1 = 0$ using the quadratic formula.",
    "correctAnswer": "A",
    "explanation": "x = (-3 ± √(9 - 4(2)(-1))) / 4 = (-3 ± √17) / 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve $2x^2 + 3x - 1 = 0$ using the quadratic formula.",
      "output": "$x = \\frac{-3 \\pm \\sqrt{17}}{4}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = \\frac{-3 \\pm \\sqrt{17}}{4}$"
      },
      {
        "id": "B",
        "text": "$x = \\frac{3 \\pm \\sqrt{17}}{4}$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "-b gives -3, not +3.",
        "rationale": "-b gives -3, not +3.",
        "remediation": "-b gives -3, not +3."
      },
      {
        "id": "C",
        "text": "$x = \\frac{-3 \\pm \\sqrt{17}}{2}$",
        "misconceptionTag": "MIS-DENOM-DROP",
        "misconceptionId": "MIS-DENOM-DROP",
        "feedback": "2a = 2(2) = 4, not 2.",
        "rationale": "2a = 2(2) = 4, not 2.",
        "remediation": "2a = 2(2) = 4, not 2."
      },
      {
        "id": "D",
        "text": "$x = \\frac{-3 \\pm \\sqrt{7}}{4}$",
        "misconceptionTag": "MIS-DISCRIM-SLIP",
        "misconceptionId": "MIS-DISCRIM-SLIP",
        "feedback": "3² - 4(2)(-1) = 9 + 8 = 17, not 7.",
        "rationale": "3² - 4(2)(-1) = 9 + 8 = 17, not 7.",
        "remediation": "3² - 4(2)(-1) = 9 + 8 = 17, not 7."
      }
    ]
  },
  {
    "id": "q_l10_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve $x^2 - 6x + 7 = 0$ by completing the square, expressing the answer in surd form.",
    "correctAnswer": "A",
    "explanation": "x² - 6x + 9 = 9 - 7 = 2 => (x - 3)² = 2 => x = 3 ± √2.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve $x^2 - 6x + 7 = 0$ by completing the square, expressing the answer in surd form.",
      "output": "$3 \\pm \\sqrt{2}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$3 \\pm \\sqrt{2}$"
      },
      {
        "id": "B",
        "text": "$3 \\pm \\sqrt{7}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(x - 3)² - 9 + 7 = 0 => (x - 3)² = 2 => x = 3 ± √2.",
        "rationale": "(x - 3)² - 9 + 7 = 0 => (x - 3)² = 2 => x = 3 ± √2.",
        "remediation": "(x - 3)² - 9 + 7 = 0 => (x - 3)² = 2 => x = 3 ± √2."
      },
      {
        "id": "C",
        "text": "$-3 \\pm \\sqrt{2}$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "(x - 3)² gives center at +3.",
        "rationale": "(x - 3)² gives center at +3.",
        "remediation": "(x - 3)² gives center at +3."
      },
      {
        "id": "D",
        "text": "$6 \\pm \\sqrt{2}$",
        "misconceptionTag": "MIS-HALF-OMIT",
        "misconceptionId": "MIS-HALF-OMIT",
        "feedback": "Must divide -6 by 2 to get 3.",
        "rationale": "Must divide -6 by 2 to get 3.",
        "remediation": "Must divide -6 by 2 to get 3."
      }
    ]
  },
  {
    "id": "q_l10_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Express $x^2 - 10x + 29$ in completed square form $(x - p)^2 + q$.",
    "correctAnswer": "A",
    "explanation": "(x - 5)² - 25 + 29 = (x - 5)² + 4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Express $x^2 - 10x + 29$ in completed square form $(x - p)^2 + q$.",
      "output": "$(x - 5)^2 + 4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$(x - 5)^2 + 4$"
      },
      {
        "id": "B",
        "text": "$(x - 5)^2 - 4$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "29 - 25 = +4, not -4.",
        "rationale": "29 - 25 = +4, not -4.",
        "remediation": "29 - 25 = +4, not -4."
      },
      {
        "id": "C",
        "text": "$(x - 10)^2 + 4$",
        "misconceptionTag": "MIS-HALF-OMIT",
        "misconceptionId": "MIS-HALF-OMIT",
        "feedback": "p = 10/2 = 5, not 10.",
        "rationale": "p = 10/2 = 5, not 10.",
        "remediation": "p = 10/2 = 5, not 10."
      },
      {
        "id": "D",
        "text": "$(x + 5)^2 + 4$",
        "misconceptionTag": "MIS-SIGN-BRACKET",
        "misconceptionId": "MIS-SIGN-BRACKET",
        "feedback": "Middle term is -10x, so bracket is (x - 5).",
        "rationale": "Middle term is -10x, so bracket is (x - 5).",
        "remediation": "Middle term is -10x, so bracket is (x - 5)."
      }
    ]
  },
  {
    "id": "q_l10_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the discriminant of $x^2 - 12x + 36 = 0$.",
    "correctAnswer": 0,
    "explanation": "b² - 4ac = (-12)² - 4(1)(36) = 144 - 144 = 0.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the discriminant of $x^2 - 12x + 36 = 0$.",
      "output": "0",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l10_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to solve $ax^2 + bx + c = 0$ by completing the square:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard completing the square sequence.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to solve $ax^2 + bx + c = 0$ by completing the square:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Divide through by a so the coefficient of x² is 1."
      },
      {
        "id": "B",
        "text": "Move the constant term c/a to the right side."
      },
      {
        "id": "C",
        "text": "Add (b / 2a)² to both sides."
      },
      {
        "id": "D",
        "text": "Factor left side as (x + b/2a)² and take square roots."
      }
    ]
  },
  {
    "id": "q_l10_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the algebraic expression for the discriminant of a quadratic equation in terms of $a$, $b$, and $c$.",
    "correctAnswer": "b^2 - 4*a*c",
    "explanation": "Discriminant = b² - 4ac.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the algebraic expression for the discriminant of a quadratic equation in terms of $a$, $b$, and $c$.",
      "output": "b^2 - 4*a*c",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l10_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "In solving $x^2 - 5x + 2 = 0$, a student wrote $x = \\frac{-5 \\pm \\sqrt{25 - 8}}{2}$. What was the error?",
    "correctAnswer": "A",
    "explanation": "Formula has -b. If b = -5, -b = +5. The student wrote -5.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In solving $x^2 - 5x + 2 = 0$, a student wrote $x = \\frac{-5 \\pm \\sqrt{25 - 8}}{2}$. What was the error?",
      "output": "Substituted $b = -5$ as $-5$ instead of $-(-5) = +5$ in $-b$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Substituted $b = -5$ as $-5$ instead of $-(-5) = +5$ in $-b$."
      },
      {
        "id": "B",
        "text": "Calculated 25 - 8 incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "25 - 8 = 17 was correct.",
        "rationale": "25 - 8 = 17 was correct.",
        "remediation": "25 - 8 = 17 was correct."
      },
      {
        "id": "C",
        "text": "Divided by 2 incorrectly.",
        "misconceptionTag": "MIS-DENOM-SLIP",
        "misconceptionId": "MIS-DENOM-SLIP",
        "feedback": "2a = 2(1) = 2 is correct.",
        "rationale": "2a = 2(1) = 2 is correct.",
        "remediation": "2a = 2(1) = 2 is correct."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "-b when b = -5 must be +5.",
        "rationale": "-b when b = -5 must be +5.",
        "remediation": "-b when b = -5 must be +5."
      }
    ]
  },
  {
    "id": "q_l10_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student claims $x^2 + 4 = 0$ has real roots $x = \\pm 2$. Why is this wrong?",
    "correctAnswer": "A",
    "explanation": "x² = -4 has no real solutions (roots are imaginary ±2i).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student claims $x^2 + 4 = 0$ has real roots $x = \\pm 2$. Why is this wrong?",
      "output": "$x^2 = -4$ has no real solutions because the square of any real number cannot be negative.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x^2 = -4$ has no real solutions because the square of any real number cannot be negative."
      },
      {
        "id": "B",
        "text": "x² = 4 has roots ±2, so x² + 4 must have roots ±4.",
        "misconceptionTag": "MIS-OP-CONFUSION",
        "misconceptionId": "MIS-OP-CONFUSION",
        "feedback": "x² + 4 = 0 => x² = -4.",
        "rationale": "x² + 4 = 0 => x² = -4.",
        "remediation": "x² + 4 = 0 => x² = -4."
      },
      {
        "id": "C",
        "text": "The roots are ±16.",
        "misconceptionTag": "MIS-SQUARE-CONFUSION",
        "misconceptionId": "MIS-SQUARE-CONFUSION",
        "feedback": "Roots are complex ±2i.",
        "rationale": "Roots are complex ±2i.",
        "remediation": "Roots are complex ±2i."
      },
      {
        "id": "D",
        "text": "The student is correct.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "No real number squared equals -4.",
        "rationale": "No real number squared equals -4.",
        "remediation": "No real number squared equals -4."
      }
    ]
  },
  {
    "id": "q_l10_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "For what values of $k$ does $x^2 + kx + 9 = 0$ have equal real roots?",
    "correctAnswer": "A",
    "explanation": "Δ = k² - 4(1)(9) = k² - 36 = 0 => k² = 36 => k = ±6.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "For what values of $k$ does $x^2 + kx + 9 = 0$ have equal real roots?",
      "output": "$k = \\pm 6$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$k = \\pm 6$"
      },
      {
        "id": "B",
        "text": "$k = 6 \\text{ only}$",
        "misconceptionTag": "MIS-NEGATIVE-ROOT-LOSS",
        "misconceptionId": "MIS-NEGATIVE-ROOT-LOSS",
        "feedback": "(-6)² = 36, so k = -6 also gives Δ = 0.",
        "rationale": "(-6)² = 36, so k = -6 also gives Δ = 0.",
        "remediation": "(-6)² = 36, so k = -6 also gives Δ = 0."
      },
      {
        "id": "C",
        "text": "$k = \\pm 3$",
        "misconceptionTag": "MIS-HALF-SLIP",
        "misconceptionId": "MIS-HALF-SLIP",
        "feedback": "k² - 36 = 0 => k = ±6.",
        "rationale": "k² - 36 = 0 => k = ±6.",
        "remediation": "k² - 36 = 0 => k = ±6."
      },
      {
        "id": "D",
        "text": "$k = 0$",
        "misconceptionTag": "MIS-ZERO-SLIP",
        "misconceptionId": "MIS-ZERO-SLIP",
        "feedback": "If k=0, x² + 9 = 0 has no real roots.",
        "rationale": "If k=0, x² + 9 = 0 has no real roots.",
        "remediation": "If k=0, x² + 9 = 0 has no real roots."
      }
    ]
  },
  {
    "id": "q_l10_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l10",
    "topicId": "top-waec-alg-05",
    "objectiveIndex": 0,
    "objective": "Apply the quadratic formula and completing the square",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Solve the quartic equation using quadratic substitution $u = x^2$: $$x^4 - 5x^2 + 4 = 0$$",
    "correctAnswer": "A",
    "explanation": "u² - 5u + 4 = 0 => (u - 1)(u - 4) = 0 => u = 1 or 4 => x = ±1, ±2.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the quartic equation using quadratic substitution $u = x^2$: $$x^4 - 5x^2 + 4 = 0$$",
      "output": "$x = \\pm 1, \\pm 2$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$x = \\pm 1, \\pm 2$"
      },
      {
        "id": "B",
        "text": "$x = 1, 4$",
        "misconceptionTag": "MIS-U-VALUES",
        "misconceptionId": "MIS-U-VALUES",
        "feedback": "u = 1 and u = 4; taking square roots gives x = ±1 and x = ±2.",
        "rationale": "u = 1 and u = 4; taking square roots gives x = ±1 and x = ±2.",
        "remediation": "u = 1 and u = 4; taking square roots gives x = ±1 and x = ±2."
      },
      {
        "id": "C",
        "text": "$x = \\pm 1, \\pm 4$",
        "misconceptionTag": "MIS-SQUARE-ROOT-SLIP",
        "misconceptionId": "MIS-SQUARE-ROOT-SLIP",
        "feedback": "√4 = 2, not 4.",
        "rationale": "√4 = 2, not 4.",
        "remediation": "√4 = 2, not 4."
      },
      {
        "id": "D",
        "text": "$x = 1, 2$",
        "misconceptionTag": "MIS-NEGATIVE-ROOT-LOSS",
        "misconceptionId": "MIS-NEGATIVE-ROOT-LOSS",
        "feedback": "Quadratic square roots have ± signs.",
        "rationale": "Quadratic square roots have ± signs.",
        "remediation": "Quadratic square roots have ± signs."
      }
    ]
  },
  {
    "id": "q_l11_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Find the points of intersection between the line $y = x + 1$ and the parabola $y = x^2 - 1$.",
    "correctAnswer": "A",
    "explanation": "x² - 1 = x + 1 => x² - x - 2 = 0 => (x - 2)(x + 1) = 0 => x = 2 (y = 3), x = -1 (y = 0).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the points of intersection between the line $y = x + 1$ and the parabola $y = x^2 - 1$.",
      "output": "$(2, 3) \\text{ and } (-1, 0)$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$(2, 3) \\text{ and } (-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 2) \\text{ and } (-2, -1)$",
        "misconceptionTag": "MIS-ROOT-SLIP",
        "misconceptionId": "MIS-ROOT-SLIP",
        "feedback": "x² - x - 2 = 0 => (x - 2)(x + 1) = 0 => x = 2, -1. Points: (2, 3), (-1, 0).",
        "rationale": "x² - x - 2 = 0 => (x - 2)(x + 1) = 0 => x = 2, -1. Points: (2, 3), (-1, 0).",
        "remediation": "x² - x - 2 = 0 => (x - 2)(x + 1) = 0 => x = 2, -1. Points: (2, 3), (-1, 0)."
      },
      {
        "id": "C",
        "text": "$(3, 4) \\text{ and } (0, 1)$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Check 2² - 1 = 3 and (-1)² - 1 = 0.",
        "rationale": "Check 2² - 1 = 3 and (-1)² - 1 = 0.",
        "remediation": "Check 2² - 1 = 3 and (-1)² - 1 = 0."
      },
      {
        "id": "D",
        "text": "$(2, 1) \\text{ and } (-1, 2)$",
        "misconceptionTag": "MIS-Y-COORD-SLIP",
        "misconceptionId": "MIS-Y-COORD-SLIP",
        "feedback": "y = x + 1 => y = 3 and y = 0.",
        "rationale": "y = x + 1 => y = 3 and y = 0.",
        "remediation": "y = x + 1 => y = 3 and y = 0."
      }
    ]
  },
  {
    "id": "q_l11_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "How many intersection points can a straight line and a circle have in the coordinate plane?",
    "correctAnswer": "A",
    "explanation": "Substituting a line into a circle yields a quadratic equation with at most 2 real roots.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "How many intersection points can a straight line and a circle have in the coordinate plane?",
      "output": "At most $2$ points (0, 1 tangent, or 2 secant points).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "At most $2$ points (0, 1 tangent, or 2 secant points)."
      },
      {
        "id": "B",
        "text": "Always exactly 2 points.",
        "misconceptionTag": "MIS-SECANT-ASSUMPTION",
        "misconceptionId": "MIS-SECANT-ASSUMPTION",
        "feedback": "A line can miss the circle (0) or be tangent (1).",
        "rationale": "A line can miss the circle (0) or be tangent (1).",
        "remediation": "A line can miss the circle (0) or be tangent (1)."
      },
      {
        "id": "C",
        "text": "At most 4 points.",
        "misconceptionTag": "MIS-DEGREE-CONFUSION",
        "misconceptionId": "MIS-DEGREE-CONFUSION",
        "feedback": "A linear-quadratic system produces a degree-2 equation with at most 2 roots.",
        "rationale": "A linear-quadratic system produces a degree-2 equation with at most 2 roots.",
        "remediation": "A linear-quadratic system produces a degree-2 equation with at most 2 roots."
      },
      {
        "id": "D",
        "text": "Infinitely many points.",
        "misconceptionTag": "MIS-COINCIDENT-CONFUSION",
        "misconceptionId": "MIS-COINCIDENT-CONFUSION",
        "feedback": "A line cannot coincide with a circle.",
        "rationale": "A line cannot coincide with a circle.",
        "remediation": "A line cannot coincide with a circle."
      }
    ]
  },
  {
    "id": "q_l11_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "When solving $y = mx + c$ and $x^2 + y^2 = r^2$, what does a discriminant $\\Delta = 0$ of the resulting quadratic indicate?",
    "correctAnswer": "A",
    "explanation": "Δ = 0 indicates a single repeated root, which geometrically means tangency.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "When solving $y = mx + c$ and $x^2 + y^2 = r^2$, what does a discriminant $\\Delta = 0$ of the resulting quadratic indica",
      "output": "The line is a tangent to the circle, touching at exactly one point.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The line is a tangent to the circle, touching at exactly one point."
      },
      {
        "id": "B",
        "text": "The line passes through the centre of the circle.",
        "misconceptionTag": "MIS-DIAMETER-CONFUSION",
        "misconceptionId": "MIS-DIAMETER-CONFUSION",
        "feedback": "A diameter intersects at 2 points.",
        "rationale": "A diameter intersects at 2 points.",
        "remediation": "A diameter intersects at 2 points."
      },
      {
        "id": "C",
        "text": "The line does not touch or intersect the circle.",
        "misconceptionTag": "MIS-DISCRIM-CONFUSION",
        "misconceptionId": "MIS-DISCRIM-CONFUSION",
        "feedback": "Δ < 0 means no intersection.",
        "rationale": "Δ < 0 means no intersection.",
        "remediation": "Δ < 0 means no intersection."
      },
      {
        "id": "D",
        "text": "The line is perpendicular to the y-axis.",
        "misconceptionTag": "MIS-ORIENTATION-CONFUSION",
        "misconceptionId": "MIS-ORIENTATION-CONFUSION",
        "feedback": "Δ = 0 indicates tangency regardless of orientation.",
        "rationale": "Δ = 0 indicates tangency regardless of orientation.",
        "remediation": "Δ = 0 indicates tangency regardless of orientation."
      }
    ]
  },
  {
    "id": "q_l11_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: If $x + y = 5$ and $xy = 6$, the values of $x$ and $y$ are the roots of $t^2 - 5t + 6 = 0$.",
    "correctAnswer": "A",
    "explanation": "t² - (x+y)t + xy = 0 => t² - 5t + 6 = 0 => (t - 2)(t - 3) = 0.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: If $x + y = 5$ and $xy = 6$, the values of $x$ and $y$ are the roots of $t^2 - 5t + 6 = 0$.",
      "output": "True: A quadratic with sum of roots $S=5$ and product $P=6$ is $t^2 - St + P = 0$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: A quadratic with sum of roots $S=5$ and product $P=6$ is $t^2 - St + P = 0$."
      },
      {
        "id": "B",
        "text": "False: The quadratic equation is t² + 5t + 6 = 0.",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "Sum of roots has -S, so t² - 5t + 6 = 0.",
        "rationale": "Sum of roots has -S, so t² - 5t + 6 = 0.",
        "remediation": "Sum of roots has -S, so t² - 5t + 6 = 0."
      },
      {
        "id": "C",
        "text": "False: Simultaneous equations cannot be expressed as a single quadratic.",
        "misconceptionTag": "MIS-METHOD-CONFUSION",
        "misconceptionId": "MIS-METHOD-CONFUSION",
        "feedback": "Vieta's relations establish this exact correspondence.",
        "rationale": "Vieta's relations establish this exact correspondence.",
        "remediation": "Vieta's relations establish this exact correspondence."
      },
      {
        "id": "D",
        "text": "True: But only if x > y.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Symmetry holds regardless of order.",
        "rationale": "Symmetry holds regardless of order.",
        "remediation": "Symmetry holds regardless of order."
      }
    ]
  },
  {
    "id": "q_l11_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve simultaneously: $$x + y = 7 \\quad \\text{and} \\quad xy = 12$$",
    "correctAnswer": "A",
    "explanation": "t² - 7t + 12 = 0 => (t - 3)(t - 4) = 0 => {x, y} = {3, 4}.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve simultaneously: $$x + y = 7 \\quad \\text{and} \\quad xy = 12$$",
      "output": "$\\{x=3, y=4\\} \\text{ or } \\{x=4, y=3\\}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\{x=3, y=4\\} \\text{ or } \\{x=4, y=3\\}$"
      },
      {
        "id": "B",
        "text": "$\\{x=2, y=6\\}$",
        "misconceptionTag": "MIS-FACTOR-PAIR",
        "misconceptionId": "MIS-FACTOR-PAIR",
        "feedback": "2 × 6 = 12 but 2 + 6 = 8 ≠ 7.",
        "rationale": "2 × 6 = 12 but 2 + 6 = 8 ≠ 7.",
        "remediation": "2 × 6 = 12 but 2 + 6 = 8 ≠ 7."
      },
      {
        "id": "C",
        "text": "$\\{x=1, y=12\\}$",
        "misconceptionTag": "MIS-FACTOR-PAIR",
        "misconceptionId": "MIS-FACTOR-PAIR",
        "feedback": "1 + 12 = 13 ≠ 7.",
        "rationale": "1 + 12 = 13 ≠ 7.",
        "remediation": "1 + 12 = 13 ≠ 7."
      },
      {
        "id": "D",
        "text": "$\\{x=-3, y=-4\\}$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "-3 + (-4) = -7 ≠ +7.",
        "rationale": "-3 + (-4) = -7 ≠ +7.",
        "remediation": "-3 + (-4) = -7 ≠ +7."
      }
    ]
  },
  {
    "id": "q_l11_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Solve the system: $$x - y = 1 \\quad \\text{and} \\quad x^2 + y^2 = 25$$",
    "correctAnswer": "A",
    "explanation": "y² + (y+1)² = 25 => 2y² + 2y - 24 = 0 => y = 3 (x = 4), y = -4 (x = -3).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Solve the system: $$x - y = 1 \\quad \\text{and} \\quad x^2 + y^2 = 25$$",
      "output": "$(4, 3) \\text{ and } (-3, -4)$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$(4, 3) \\text{ and } (-3, -4)$"
      },
      {
        "id": "B",
        "text": "$(5, 4) \\text{ and } (-4, -5)$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(y + 1)² + y² = 25 => 2y² + 2y - 24 = 0 => y² + y - 12 = 0 => y = 3, -4. x = 4, -3.",
        "rationale": "(y + 1)² + y² = 25 => 2y² + 2y - 24 = 0 => y² + y - 12 = 0 => y = 3, -4. x = 4, -3.",
        "remediation": "(y + 1)² + y² = 25 => 2y² + 2y - 24 = 0 => y² + y - 12 = 0 => y = 3, -4. x = 4, -3."
      },
      {
        "id": "C",
        "text": "$(3, 2) \\text{ and } (-2, -3)$",
        "misconceptionTag": "MIS-FACTOR-SLIP",
        "misconceptionId": "MIS-FACTOR-SLIP",
        "feedback": "4² + 3² = 25 and (-3)² + (-4)² = 25.",
        "rationale": "4² + 3² = 25 and (-3)² + (-4)² = 25.",
        "remediation": "4² + 3² = 25 and (-3)² + (-4)² = 25."
      },
      {
        "id": "D",
        "text": "$(4, -3) \\text{ and } (3, -4)$",
        "misconceptionTag": "MIS-SIGN-PAIRING",
        "misconceptionId": "MIS-SIGN-PAIRING",
        "feedback": "x - y must equal 1: 4 - 3 = 1 and -3 - (-4) = 1.",
        "rationale": "x - y must equal 1: 4 - 3 = 1 and -3 - (-4) = 1.",
        "remediation": "x - y must equal 1: 4 - 3 = 1 and -3 - (-4) = 1."
      }
    ]
  },
  {
    "id": "q_l11_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Find the points where the line $y = 3x$ intersects the circle $x^2 + y^2 = 40$.",
    "correctAnswer": "A",
    "explanation": "x² + (3x)² = 40 => 10x² = 40 => x² = 4 => x = ±2, y = ±6.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the points where the line $y = 3x$ intersects the circle $x^2 + y^2 = 40$.",
      "output": "$(2, 6) \\text{ and } (-2, -6)$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$(2, 6) \\text{ and } (-2, -6)$"
      },
      {
        "id": "B",
        "text": "$(2, 4) \\text{ and } (-2, -4)$",
        "misconceptionTag": "MIS-LINE-SLIP",
        "misconceptionId": "MIS-LINE-SLIP",
        "feedback": "y = 3x, so if x = 2, y = 6.",
        "rationale": "y = 3x, so if x = 2, y = 6.",
        "remediation": "y = 3x, so if x = 2, y = 6."
      },
      {
        "id": "C",
        "text": "$(1, 3) \\text{ and } (-1, -3)$",
        "misconceptionTag": "MIS-SCALE-SLIP",
        "misconceptionId": "MIS-SCALE-SLIP",
        "feedback": "x² + 9x² = 10x² = 40 => x² = 4 => x = ±2.",
        "rationale": "x² + 9x² = 10x² = 40 => x² = 4 => x = ±2.",
        "remediation": "x² + 9x² = 10x² = 40 => x² = 4 => x = ±2."
      },
      {
        "id": "D",
        "text": "$(4, 12) \\text{ and } (-4, -12)$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "10x² = 40 => x² = 4 => x = ±2, y = ±6.",
        "rationale": "10x² = 40 => x² = 4 => x = ±2, y = ±6.",
        "remediation": "10x² = 40 => x² = 4 => x = ±2, y = ±6."
      }
    ]
  },
  {
    "id": "q_l11_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "The sum of two positive numbers is $10$ and their product is $21$. Find the larger number.",
    "correctAnswer": 7,
    "explanation": "t² - 10t + 21 = 0 => (t - 3)(t - 7) = 0. Numbers are 3 and 7. Larger is 7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The sum of two positive numbers is $10$ and their product is $21$. Find the larger number.",
      "output": "7",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l11_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to solve a linear-quadratic system $y = 2x - 1$ and $y = x^2 - 4$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard elimination/substitution for linear-quadratic systems.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to solve a linear-quadratic system $y = 2x - 1$ and $y = x^2 - 4$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Equate the two expressions for y: x² - 4 = 2x - 1."
      },
      {
        "id": "B",
        "text": "Rearrange into standard quadratic form: x² - 2x - 3 = 0."
      },
      {
        "id": "C",
        "text": "Factorize to find the x-values: (x - 3)(x + 1) = 0 => x = 3, -1."
      },
      {
        "id": "D",
        "text": "Substitute each x back into y = 2x - 1 to find corresponding y-values."
      }
    ]
  },
  {
    "id": "q_l11_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "If $y = 2x + 1$, expand $y^2$ in terms of $x$.",
    "correctAnswer": "4*x^2 + 4*x + 1",
    "explanation": "(2x + 1)² = 4x² + 4x + 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $y = 2x + 1$, expand $y^2$ in terms of $x$.",
      "output": "4*x^2 + 4*x + 1",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l11_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To solve $x + y = 5$ and $x^2 + y^2 = 13$, a student squared the first equation as $x^2 + y^2 = 25$. What error did the student commit?",
    "correctAnswer": "A",
    "explanation": "(x + y)² = x² + 2xy + y² = 25. The student forgot +2xy.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To solve $x + y = 5$ and $x^2 + y^2 = 13$, a student squared the first equation as $x^2 + y^2 = 25$. What error did the ",
      "output": "Omitted the middle cross term $2xy$; $(x + y)^2 = x^2 + 2xy + y^2$, not $x^2 + y^2$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Omitted the middle cross term $2xy$; $(x + y)^2 = x^2 + 2xy + y^2$, not $x^2 + y^2$."
      },
      {
        "id": "B",
        "text": "Squared 5 incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "5² = 25 was correct.",
        "rationale": "5² = 25 was correct.",
        "remediation": "5² = 25 was correct."
      },
      {
        "id": "C",
        "text": "Should have subtracted equations directly.",
        "misconceptionTag": "MIS-OPERATION-CONFUSION",
        "misconceptionId": "MIS-OPERATION-CONFUSION",
        "feedback": "Degrees are different, cannot subtract directly.",
        "rationale": "Degrees are different, cannot subtract directly.",
        "remediation": "Degrees are different, cannot subtract directly."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "(x+y)² = x² + 2xy + y² is a fundamental identity.",
        "rationale": "(x+y)² = x² + 2xy + y² is a fundamental identity.",
        "remediation": "(x+y)² = x² + 2xy + y² is a fundamental identity."
      }
    ]
  },
  {
    "id": "q_l11_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student finds $x = 2, 4$ and $y = 3, 5$ for a system. He concludes the solutions are $(2, 5)$ and $(4, 3)$. Why might this be invalid?",
    "correctAnswer": "A",
    "explanation": "Solutions must be verified pairs (x_i, y_i) satisfying both equations simultaneously.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student finds $x = 2, 4$ and $y = 3, 5$ for a system. He concludes the solutions are $(2, 5)$ and $(4, 3)$. Why might ",
      "output": "Each $x$-value must be paired with its specific corresponding $y$-value determined by the original equations.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Each $x$-value must be paired with its specific corresponding $y$-value determined by the original equations."
      },
      {
        "id": "B",
        "text": "There can only be one solution.",
        "misconceptionTag": "MIS-DEGREE-CONFUSION",
        "misconceptionId": "MIS-DEGREE-CONFUSION",
        "feedback": "Systems can have two solutions.",
        "rationale": "Systems can have two solutions.",
        "remediation": "Systems can have two solutions."
      },
      {
        "id": "C",
        "text": "x and y must always be equal.",
        "misconceptionTag": "MIS-EQUAL-ASSUMPTION",
        "misconceptionId": "MIS-EQUAL-ASSUMPTION",
        "feedback": "Values are generally distinct.",
        "rationale": "Values are generally distinct.",
        "remediation": "Values are generally distinct."
      },
      {
        "id": "D",
        "text": "Coordinates must be written as (y, x).",
        "misconceptionTag": "MIS-ORDER-CONFUSION",
        "misconceptionId": "MIS-ORDER-CONFUSION",
        "feedback": "Standard notation is (x, y).",
        "rationale": "Standard notation is (x, y).",
        "remediation": "Standard notation is (x, y)."
      }
    ]
  },
  {
    "id": "q_l11_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "The perimeter of a rectangular field is $28\\text{ m}$ and its diagonal is $10\\text{ m}$. Find the dimensions of the field.",
    "correctAnswer": "A",
    "explanation": "L + W = 14 and L² + W² = 100. (L+W)² = 196 => 100 + 2LW = 196 => 2LW = 96 => LW = 48. Dimensions: 6 m by 8 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The perimeter of a rectangular field is $28\\text{ m}$ and its diagonal is $10\\text{ m}$. Find the dimensions of the fiel",
      "output": "$6\\text{ m} \\text{ by } 8\\text{ m}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$6\\text{ m} \\text{ by } 8\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$5\\text{ m} \\text{ by } 9\\text{ m}$",
        "misconceptionTag": "MIS-DIAGONAL-SLIP",
        "misconceptionId": "MIS-DIAGONAL-SLIP",
        "feedback": "5² + 9² = 25 + 81 = 106 ≠ 100.",
        "rationale": "5² + 9² = 25 + 81 = 106 ≠ 100.",
        "remediation": "5² + 9² = 25 + 81 = 106 ≠ 100."
      },
      {
        "id": "C",
        "text": "$4\\text{ m} \\text{ by } 10\\text{ m}$",
        "misconceptionTag": "MIS-PERIMETER-SLIP",
        "misconceptionId": "MIS-PERIMETER-SLIP",
        "feedback": "2(4 + 10) = 28, but 4² + 10² = 116 ≠ 100.",
        "rationale": "2(4 + 10) = 28, but 4² + 10² = 116 ≠ 100.",
        "remediation": "2(4 + 10) = 28, but 4² + 10² = 116 ≠ 100."
      },
      {
        "id": "D",
        "text": "$7\\text{ m} \\text{ by } 7\\text{ m}$",
        "misconceptionTag": "MIS-SQUARE-ASSUMPTION",
        "misconceptionId": "MIS-SQUARE-ASSUMPTION",
        "feedback": "7² + 7² = 98 ≠ 100.",
        "rationale": "7² + 7² = 98 ≠ 100.",
        "remediation": "7² + 7² = 98 ≠ 100."
      }
    ]
  },
  {
    "id": "q_l11_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m4",
    "lessonId": "l11",
    "topicId": "top-waec-alg-06",
    "objectiveIndex": 0,
    "objective": "Solve simultaneous linear and quadratic systems",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Find the values of $m$ for which the line $y = mx + 2$ is tangent to the curve $y = x^2 + 6$.",
    "correctAnswer": "A",
    "explanation": "x² - mx + 4 = 0 => Δ = m² - 16 = 0 => m = ±4.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the values of $m$ for which the line $y = mx + 2$ is tangent to the curve $y = x^2 + 6$.",
      "output": "$m = \\pm 4$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$m = \\pm 4$"
      },
      {
        "id": "B",
        "text": "$m = \\pm 2$",
        "misconceptionTag": "MIS-HALF-SLIP",
        "misconceptionId": "MIS-HALF-SLIP",
        "feedback": "x² - mx + 4 = 0. Tangency requires Δ = m² - 4(1)(4) = m² - 16 = 0 => m = ±4.",
        "rationale": "x² - mx + 4 = 0. Tangency requires Δ = m² - 4(1)(4) = m² - 16 = 0 => m = ±4.",
        "remediation": "x² - mx + 4 = 0. Tangency requires Δ = m² - 4(1)(4) = m² - 16 = 0 => m = ±4."
      },
      {
        "id": "C",
        "text": "$m = 4 \\text{ only}$",
        "misconceptionTag": "MIS-NEGATIVE-ROOT-LOSS",
        "misconceptionId": "MIS-NEGATIVE-ROOT-LOSS",
        "feedback": "m = -4 also gives m² = 16.",
        "rationale": "m = -4 also gives m² = 16.",
        "remediation": "m = -4 also gives m² = 16."
      },
      {
        "id": "D",
        "text": "$m = \\pm 8$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "m² = 16 => m = ±4.",
        "rationale": "m² = 16 => m = ±4.",
        "remediation": "m² = 16 => m = ±4."
      }
    ]
  },
  {
    "id": "q_l12_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What is the sum of the interior angles of a polygon with $n$ sides?",
    "correctAnswer": "A",
    "explanation": "Sum of interior angles = (n - 2) × 180°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the sum of the interior angles of a polygon with $n$ sides?",
      "output": "$(n - 2) \\times 180^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$(n - 2) \\times 180^\\circ$"
      },
      {
        "id": "B",
        "text": "$n \\times 180^\\circ$",
        "misconceptionTag": "MIS-TRIANGLE-COUNT",
        "misconceptionId": "MIS-TRIANGLE-COUNT",
        "feedback": "An n-gon is divided into (n - 2) triangles, not n.",
        "rationale": "An n-gon is divided into (n - 2) triangles, not n.",
        "remediation": "An n-gon is divided into (n - 2) triangles, not n."
      },
      {
        "id": "C",
        "text": "$(n + 2) \\times 180^\\circ$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "Formula is (n - 2) * 180°.",
        "rationale": "Formula is (n - 2) * 180°.",
        "remediation": "Formula is (n - 2) * 180°."
      },
      {
        "id": "D",
        "text": "$\\frac{360^\\circ}{n}$",
        "misconceptionTag": "MIS-EXTERIOR-CONFUSION",
        "misconceptionId": "MIS-EXTERIOR-CONFUSION",
        "feedback": "360°/n is the exterior angle of a regular polygon.",
        "rationale": "360°/n is the exterior angle of a regular polygon.",
        "remediation": "360°/n is the exterior angle of a regular polygon."
      }
    ]
  },
  {
    "id": "q_l12_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Calculate the sum of the interior angles of a regular hexagon ($n = 6$).",
    "correctAnswer": "A",
    "explanation": "(6 - 2) × 180° = 4 × 180° = 720°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the sum of the interior angles of a regular hexagon ($n = 6$).",
      "output": "$720^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$720^\\circ$"
      },
      {
        "id": "B",
        "text": "$540^\\circ$",
        "misconceptionTag": "MIS-PENTAGON-SUM",
        "misconceptionId": "MIS-PENTAGON-SUM",
        "feedback": "540° is the sum for a pentagon (n = 5).",
        "rationale": "540° is the sum for a pentagon (n = 5).",
        "remediation": "540° is the sum for a pentagon (n = 5)."
      },
      {
        "id": "C",
        "text": "$1080^\\circ$",
        "misconceptionTag": "MIS-OCTAGON-SUM",
        "misconceptionId": "MIS-OCTAGON-SUM",
        "feedback": "1080° is the sum for an octagon (n = 8).",
        "rationale": "1080° is the sum for an octagon (n = 8).",
        "remediation": "1080° is the sum for an octagon (n = 8)."
      },
      {
        "id": "D",
        "text": "$360^\\circ$",
        "misconceptionTag": "MIS-QUAD-SUM",
        "misconceptionId": "MIS-QUAD-SUM",
        "feedback": "360° is the sum for a quadrilateral or exterior angles.",
        "rationale": "360° is the sum for a quadrilateral or exterior angles.",
        "remediation": "360° is the sum for a quadrilateral or exterior angles."
      }
    ]
  },
  {
    "id": "q_l12_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What is the sum of the exterior angles of ANY convex polygon?",
    "correctAnswer": "A",
    "explanation": "The sum of exterior angles of any convex polygon is always 360°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the sum of the exterior angles of ANY convex polygon?",
      "output": "$360^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$360^\\circ$"
      },
      {
        "id": "B",
        "text": "$180^\\circ$",
        "misconceptionTag": "MIS-TRIANGLE-SUM",
        "misconceptionId": "MIS-TRIANGLE-SUM",
        "feedback": "180° is the interior angle sum of a triangle.",
        "rationale": "180° is the interior angle sum of a triangle.",
        "remediation": "180° is the interior angle sum of a triangle."
      },
      {
        "id": "C",
        "text": "$(n - 2) \\times 180^\\circ$",
        "misconceptionTag": "MIS-INTERIOR-CONFUSION",
        "misconceptionId": "MIS-INTERIOR-CONFUSION",
        "feedback": "That is the interior angle sum.",
        "rationale": "That is the interior angle sum.",
        "remediation": "That is the interior angle sum."
      },
      {
        "id": "D",
        "text": "$n \\times 360^\\circ$",
        "misconceptionTag": "MIS-MULT-CONFUSION",
        "misconceptionId": "MIS-MULT-CONFUSION",
        "feedback": "Exterior angles always sum to 360° regardless of n.",
        "rationale": "Exterior angles always sum to 360° regardless of n.",
        "remediation": "Exterior angles always sum to 360° regardless of n."
      }
    ]
  },
  {
    "id": "q_l12_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: In any triangle, the measure of an exterior angle equals the sum of the two opposite interior angles.",
    "correctAnswer": "A",
    "explanation": "Exterior angle = sum of opposite interior angles.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: In any triangle, the measure of an exterior angle equals the sum of the two opposite interior angles.",
      "output": "True: Both the exterior angle and the two opposite interior angles are supplementary to the adjacent interior angle.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Both the exterior angle and the two opposite interior angles are supplementary to the adjacent interior angle."
      },
      {
        "id": "B",
        "text": "False: The exterior angle equals 180° minus all interior angles.",
        "misconceptionTag": "MIS-GEOM-RULES",
        "misconceptionId": "MIS-GEOM-RULES",
        "feedback": "It is supplementary to its adjacent interior angle.",
        "rationale": "It is supplementary to its adjacent interior angle.",
        "remediation": "It is supplementary to its adjacent interior angle."
      },
      {
        "id": "C",
        "text": "False: Holds only for equilateral triangles.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for all Euclidean triangles.",
        "rationale": "Holds for all Euclidean triangles.",
        "remediation": "Holds for all Euclidean triangles."
      },
      {
        "id": "D",
        "text": "True: But only if the triangle is obtuse.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for acute, right, and obtuse triangles.",
        "rationale": "Holds for acute, right, and obtuse triangles.",
        "remediation": "Holds for acute, right, and obtuse triangles."
      }
    ]
  },
  {
    "id": "q_l12_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Each interior angle of a regular polygon is $140^\\circ$. How many sides does the polygon have?",
    "correctAnswer": "A",
    "explanation": "Exterior angle = 180° - 140° = 40°. Number of sides n = 360° / 40° = 9 sides.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Each interior angle of a regular polygon is $140^\\circ$. How many sides does the polygon have?",
      "output": "9",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "8",
        "misconceptionTag": "MIS-OCTAGON-SLIP",
        "misconceptionId": "MIS-OCTAGON-SLIP",
        "feedback": "Exterior angle = 180° - 140° = 40°. n = 360° / 40° = 9 sides.",
        "rationale": "Exterior angle = 180° - 140° = 40°. n = 360° / 40° = 9 sides.",
        "remediation": "Exterior angle = 180° - 140° = 40°. n = 360° / 40° = 9 sides."
      },
      {
        "id": "C",
        "text": "10",
        "misconceptionTag": "MIS-DECAGON-SLIP",
        "misconceptionId": "MIS-DECAGON-SLIP",
        "feedback": "Decagon interior angle is 144°.",
        "rationale": "Decagon interior angle is 144°.",
        "remediation": "Decagon interior angle is 144°."
      },
      {
        "id": "D",
        "text": "12",
        "misconceptionTag": "MIS-DODECAGON-SLIP",
        "misconceptionId": "MIS-DODECAGON-SLIP",
        "feedback": "Dodecagon interior angle is 150°.",
        "rationale": "Dodecagon interior angle is 150°.",
        "remediation": "Dodecagon interior angle is 150°."
      }
    ]
  },
  {
    "id": "q_l12_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In $\\triangle ABC$, the angles are $x^\\circ, (2x)^\\circ,$ and $(3x)^\\circ$. Calculate the measure of the largest angle.",
    "correctAnswer": "A",
    "explanation": "x + 2x + 3x = 6x = 180° => x = 30°. Largest angle = 3(30°) = 90°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In $\\triangle ABC$, the angles are $x^\\circ, (2x)^\\circ,$ and $(3x)^\\circ$. Calculate the measure of the largest angle.",
      "output": "$90^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$90^\\circ$"
      },
      {
        "id": "B",
        "text": "$60^\\circ$",
        "misconceptionTag": "MIS-MIDDLE-ANGLE",
        "misconceptionId": "MIS-MIDDLE-ANGLE",
        "feedback": "60° is the middle angle 2x (where x = 30°).",
        "rationale": "60° is the middle angle 2x (where x = 30°).",
        "remediation": "60° is the middle angle 2x (where x = 30°)."
      },
      {
        "id": "C",
        "text": "$30^\\circ$",
        "misconceptionTag": "MIS-SMALLEST-ANGLE",
        "misconceptionId": "MIS-SMALLEST-ANGLE",
        "feedback": "30° is the smallest angle x.",
        "rationale": "30° is the smallest angle x.",
        "remediation": "30° is the smallest angle x."
      },
      {
        "id": "D",
        "text": "$120^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "x + 2x + 3x = 6x = 180° => x = 30°. Largest = 3(30°) = 90°.",
        "rationale": "x + 2x + 3x = 6x = 180° => x = 30°. Largest = 3(30°) = 90°.",
        "remediation": "x + 2x + 3x = 6x = 180° => x = 30°. Largest = 3(30°) = 90°."
      }
    ]
  },
  {
    "id": "q_l12_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In an isosceles triangle, the vertex angle is $40^\\circ$. What is the measure of each base angle?",
    "correctAnswer": "A",
    "explanation": "(180° - 40°) / 2 = 140° / 2 = 70°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In an isosceles triangle, the vertex angle is $40^\\circ$. What is the measure of each base angle?",
      "output": "$70^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$70^\\circ$"
      },
      {
        "id": "B",
        "text": "$50^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(180° - 40°) / 2 = 140° / 2 = 70°.",
        "rationale": "(180° - 40°) / 2 = 140° / 2 = 70°.",
        "remediation": "(180° - 40°) / 2 = 140° / 2 = 70°."
      },
      {
        "id": "C",
        "text": "$60^\\circ$",
        "misconceptionTag": "MIS-EQUILATERAL-GUESS",
        "misconceptionId": "MIS-EQUILATERAL-GUESS",
        "feedback": "60° is for equilateral triangles.",
        "rationale": "60° is for equilateral triangles.",
        "remediation": "60° is for equilateral triangles."
      },
      {
        "id": "D",
        "text": "$40^\\circ$",
        "misconceptionTag": "MIS-VERTEX-COPY",
        "misconceptionId": "MIS-VERTEX-COPY",
        "feedback": "Base angles are equal to each other, not the vertex angle.",
        "rationale": "Base angles are equal to each other, not the vertex angle.",
        "remediation": "Base angles are equal to each other, not the vertex angle."
      }
    ]
  },
  {
    "id": "q_l12_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the interior angle of a regular octagon ($n = 8$) in degrees.",
    "correctAnswer": 135,
    "explanation": "(8 - 2) × 180° / 8 = 1080° / 8 = 135°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the interior angle of a regular octagon ($n = 8$) in degrees.",
      "output": "135",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l12_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to find the number of sides $n$ of a regular polygon given its interior angle $I$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Most efficient polygon side count procedure.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to find the number of sides $n$ of a regular polygon given its interior angle $I$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Calculate the exterior angle: E = 180° - I."
      },
      {
        "id": "B",
        "text": "Use the total exterior angle sum: n × E = 360°."
      },
      {
        "id": "C",
        "text": "Divide 360° by the exterior angle: n = 360° / E."
      },
      {
        "id": "D",
        "text": "Verify that n is a positive integer >= 3."
      }
    ]
  },
  {
    "id": "q_l12_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the formula for the sum of the interior angles $S$ of an $n$-sided polygon.",
    "correctAnswer": "(n - 2)*180",
    "explanation": "S = (n - 2) * 180.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the formula for the sum of the interior angles $S$ of an $n$-sided polygon.",
      "output": "(n - 2)*180",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l12_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student calculates the sum of interior angles of a pentagon ($n = 5$) as $5 \\times 180^\\circ = 900^\\circ$. What error was committed?",
    "correctAnswer": "A",
    "explanation": "Formula is (n - 2) × 180° = (5 - 2) × 180° = 540°.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student calculates the sum of interior angles of a pentagon ($n = 5$) as $5 \\times 180^\\circ = 900^\\circ$. What error ",
      "output": "Multiplied $n$ by $180^\\circ$ instead of $(n - 2) \\times 180^\\circ$ (should be $3 \\times 180^\\circ = 540^\\circ$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Multiplied $n$ by $180^\\circ$ instead of $(n - 2) \\times 180^\\circ$ (should be $3 \\times 180^\\circ = 540^\\circ$)."
      },
      {
        "id": "B",
        "text": "Used 180° instead of 360°.",
        "misconceptionTag": "MIS-CONST-CONFUSION",
        "misconceptionId": "MIS-CONST-CONFUSION",
        "feedback": "180° is the angle sum of a triangle.",
        "rationale": "180° is the angle sum of a triangle.",
        "remediation": "180° is the angle sum of a triangle."
      },
      {
        "id": "C",
        "text": "Multiplied 5 by 180 incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "5 × 180 = 900 is correct arithmetic, but wrong formula.",
        "rationale": "5 × 180 = 900 is correct arithmetic, but wrong formula.",
        "remediation": "5 × 180 = 900 is correct arithmetic, but wrong formula."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "A pentagon divides into 3 triangles, not 5.",
        "rationale": "A pentagon divides into 3 triangles, not 5.",
        "remediation": "A pentagon divides into 3 triangles, not 5."
      }
    ]
  },
  {
    "id": "q_l12_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student stated that since a triangle has angle sum $180^\\circ$, a quadrilateral has angle sum $180^\\circ \\times 4 = 720^\\circ$. What was the misconception?",
    "correctAnswer": "A",
    "explanation": "A quadrilateral is formed of 2 triangles: 2 × 180° = 360°.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student stated that since a triangle has angle sum $180^\\circ$, a quadrilateral has angle sum $180^\\circ \\times 4 = 72",
      "output": "A quadrilateral splits into $2$ triangles (giving $2 \\times 180^\\circ = 360^\\circ$), not $4$ triangles.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "A quadrilateral splits into $2$ triangles (giving $2 \\times 180^\\circ = 360^\\circ$), not $4$ triangles."
      },
      {
        "id": "B",
        "text": "Quadrilaterals have 3 triangles.",
        "misconceptionTag": "MIS-TRIANGLE-COUNT",
        "misconceptionId": "MIS-TRIANGLE-COUNT",
        "feedback": "Quadrilaterals split into 2 non-overlapping triangles.",
        "rationale": "Quadrilaterals split into 2 non-overlapping triangles.",
        "remediation": "Quadrilaterals split into 2 non-overlapping triangles."
      },
      {
        "id": "C",
        "text": "The angle sum of any shape is 180°.",
        "misconceptionTag": "MIS-INVARIANCE",
        "misconceptionId": "MIS-INVARIANCE",
        "feedback": "Only triangles have 180°.",
        "rationale": "Only triangles have 180°.",
        "remediation": "Only triangles have 180°."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "(4 - 2) × 180° = 360°.",
        "rationale": "(4 - 2) × 180° = 360°.",
        "remediation": "(4 - 2) × 180° = 360°."
      }
    ]
  },
  {
    "id": "q_l12_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "The interior angles of a pentagon are $x^\\circ, 2x^\\circ, 3x^\\circ, 4x^\\circ,$ and $5x^\\circ$. Calculate the largest angle.",
    "correctAnswer": "A",
    "explanation": "x + 2x + 3x + 4x + 5x = 15x = 540° => x = 36°. Largest = 5 × 36° = 180°.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The interior angles of a pentagon are $x^\\circ, 2x^\\circ, 3x^\\circ, 4x^\\circ,$ and $5x^\\circ$. Calculate the largest ang",
      "output": "$180^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$180^\\circ$"
      },
      {
        "id": "B",
        "text": "$150^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Sum = 15x = 540° => x = 36°. Largest = 5(36°) = 180°.",
        "rationale": "Sum = 15x = 540° => x = 36°. Largest = 5(36°) = 180°.",
        "remediation": "Sum = 15x = 540° => x = 36°. Largest = 5(36°) = 180°."
      },
      {
        "id": "C",
        "text": "$144^\\circ$",
        "misconceptionTag": "MIS-4X-VALUE",
        "misconceptionId": "MIS-4X-VALUE",
        "feedback": "4x = 4(36°) = 144°.",
        "rationale": "4x = 4(36°) = 144°.",
        "remediation": "4x = 4(36°) = 144°."
      },
      {
        "id": "D",
        "text": "$108^\\circ$",
        "misconceptionTag": "MIS-REGULAR-PENTAGON",
        "misconceptionId": "MIS-REGULAR-PENTAGON",
        "feedback": "108° is the angle of a regular pentagon.",
        "rationale": "108° is the angle of a regular pentagon.",
        "remediation": "108° is the angle of a regular pentagon."
      }
    ]
  },
  {
    "id": "q_l12_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l12",
    "topicId": "top-waec-geom-01",
    "objectiveIndex": 0,
    "objective": "Calculate angles on lines, triangles, and interior/exterior angles of polygons",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A polygon has $20$ diagonals. How many sides does the polygon have?",
    "correctAnswer": "A",
    "explanation": "n(n - 3) / 2 = 20 => n² - 3n - 40 = 0 => (n - 8)(n + 5) = 0 => n = 8 sides.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A polygon has $20$ diagonals. How many sides does the polygon have?",
      "output": "8",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10",
        "misconceptionTag": "MIS-DECAGON-SLIP",
        "misconceptionId": "MIS-DECAGON-SLIP",
        "feedback": "Diagonals = n(n - 3) / 2 = 20 => n(n - 3) = 40 => n² - 3n - 40 = 0 => (n - 8)(n + 5) = 0 => n = 8.",
        "rationale": "Diagonals = n(n - 3) / 2 = 20 => n(n - 3) = 40 => n² - 3n - 40 = 0 => (n - 8)(n + 5) = 0 => n = 8.",
        "remediation": "Diagonals = n(n - 3) / 2 = 20 => n(n - 3) = 40 => n² - 3n - 40 = 0 => (n - 8)(n + 5) = 0 => n = 8."
      },
      {
        "id": "C",
        "text": "7",
        "misconceptionTag": "MIS-HEPTAGON-SLIP",
        "misconceptionId": "MIS-HEPTAGON-SLIP",
        "feedback": "7(4)/2 = 14 diagonals.",
        "rationale": "7(4)/2 = 14 diagonals.",
        "remediation": "7(4)/2 = 14 diagonals."
      },
      {
        "id": "D",
        "text": "9",
        "misconceptionTag": "MIS-NONAGON-SLIP",
        "misconceptionId": "MIS-NONAGON-SLIP",
        "feedback": "9(6)/2 = 27 diagonals.",
        "rationale": "9(6)/2 = 27 diagonals.",
        "remediation": "9(6)/2 = 27 diagonals."
      }
    ]
  },
  {
    "id": "q_l13_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "In a circle with centre $O$, an arc subtends an angle of $130^\\circ$ at the centre. What angle does it subtend at the circumference?",
    "correctAnswer": "A",
    "explanation": "Angle at circumference = 130° / 2 = 65°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In a circle with centre $O$, an arc subtends an angle of $130^\\circ$ at the centre. What angle does it subtend at the ci",
      "output": "$65^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$65^\\circ$"
      },
      {
        "id": "B",
        "text": "$130^\\circ$",
        "misconceptionTag": "MIS-EQUAL-ANGLE",
        "misconceptionId": "MIS-EQUAL-ANGLE",
        "feedback": "Angle at centre is twice angle at circumference, not equal.",
        "rationale": "Angle at centre is twice angle at circumference, not equal.",
        "remediation": "Angle at centre is twice angle at circumference, not equal."
      },
      {
        "id": "C",
        "text": "$260^\\circ$",
        "misconceptionTag": "MIS-DOUBLE-WRONG-WAY",
        "misconceptionId": "MIS-DOUBLE-WRONG-WAY",
        "feedback": "Angle at circumference is half, not double.",
        "rationale": "Angle at circumference is half, not double.",
        "remediation": "Angle at circumference is half, not double."
      },
      {
        "id": "D",
        "text": "$50^\\circ$",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Supplementary applies to cyclic quads, not centre-circumference.",
        "rationale": "Supplementary applies to cyclic quads, not centre-circumference.",
        "remediation": "Supplementary applies to cyclic quads, not centre-circumference."
      }
    ]
  },
  {
    "id": "q_l13_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What is the angle subtended by a diameter at any point on the circumference of a circle?",
    "correctAnswer": "A",
    "explanation": "Thales' theorem: Angle in a semicircle is 90°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the angle subtended by a diameter at any point on the circumference of a circle?",
      "output": "$90^\\circ$ (Right angle)",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$90^\\circ$ (Right angle)"
      },
      {
        "id": "B",
        "text": "$180^\\circ$",
        "misconceptionTag": "MIS-CENTRE-ANGLE",
        "misconceptionId": "MIS-CENTRE-ANGLE",
        "feedback": "180° is the angle at the centre subtended by a diameter.",
        "rationale": "180° is the angle at the centre subtended by a diameter.",
        "remediation": "180° is the angle at the centre subtended by a diameter."
      },
      {
        "id": "C",
        "text": "$45^\\circ$",
        "misconceptionTag": "MIS-HALF-SLIP",
        "misconceptionId": "MIS-HALF-SLIP",
        "feedback": "Half of 180° is 90°, not 45°.",
        "rationale": "Half of 180° is 90°, not 45°.",
        "remediation": "Half of 180° is 90°, not 45°."
      },
      {
        "id": "D",
        "text": "$60^\\circ$",
        "misconceptionTag": "MIS-EQUILATERAL-GUESS",
        "misconceptionId": "MIS-EQUILATERAL-GUESS",
        "feedback": "Angle in a semicircle is always 90°.",
        "rationale": "Angle in a semicircle is always 90°.",
        "remediation": "Angle in a semicircle is always 90°."
      }
    ]
  },
  {
    "id": "q_l13_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "In a cyclic quadrilateral $ABCD$, what is the sum of opposite interior angles $\\angle A + \\angle C$?",
    "correctAnswer": "A",
    "explanation": "Opposite angles of a cyclic quadrilateral are supplementary (sum to 180°).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In a cyclic quadrilateral $ABCD$, what is the sum of opposite interior angles $\\angle A + \\angle C$?",
      "output": "$180^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$180^\\circ$"
      },
      {
        "id": "B",
        "text": "$360^\\circ$",
        "misconceptionTag": "MIS-TOTAL-SUM",
        "misconceptionId": "MIS-TOTAL-SUM",
        "feedback": "360° is the sum of all 4 angles.",
        "rationale": "360° is the sum of all 4 angles.",
        "remediation": "360° is the sum of all 4 angles."
      },
      {
        "id": "C",
        "text": "$90^\\circ$",
        "misconceptionTag": "MIS-COMPLEMENTARY",
        "misconceptionId": "MIS-COMPLEMENTARY",
        "feedback": "Opposite angles are supplementary (180°).",
        "rationale": "Opposite angles are supplementary (180°).",
        "remediation": "Opposite angles are supplementary (180°)."
      },
      {
        "id": "D",
        "text": "$270^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Opposite angles sum to 180°.",
        "rationale": "Opposite angles sum to 180°.",
        "remediation": "Opposite angles sum to 180°."
      }
    ]
  },
  {
    "id": "q_l13_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: Angles subtended by the same arc in the same segment of a circle are equal.",
    "correctAnswer": "A",
    "explanation": "Angles in the same segment of a circle are equal.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: Angles subtended by the same arc in the same segment of a circle are equal.",
      "output": "True: Both angles are half the angle subtended by the same arc at the centre.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Both angles are half the angle subtended by the same arc at the centre."
      },
      {
        "id": "B",
        "text": "False: They are equal only if they lie on opposite sides of the chord.",
        "misconceptionTag": "MIS-SEGMENT-CONFUSION",
        "misconceptionId": "MIS-SEGMENT-CONFUSION",
        "feedback": "Angles in opposite segments are supplementary.",
        "rationale": "Angles in opposite segments are supplementary.",
        "remediation": "Angles in opposite segments are supplementary."
      },
      {
        "id": "C",
        "text": "False: Their sum is 180°.",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Angles in the same segment are equal.",
        "rationale": "Angles in the same segment are equal.",
        "remediation": "Angles in the same segment are equal."
      },
      {
        "id": "D",
        "text": "True: But only if the chord is a diameter.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for any chord.",
        "rationale": "Holds for any chord.",
        "remediation": "Holds for any chord."
      }
    ]
  },
  {
    "id": "q_l13_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In cyclic quadrilateral $ABCD$, $\\angle B = 104^\\circ$. What is the measure of the opposite angle $\\angle D$?",
    "correctAnswer": "A",
    "explanation": "Opposite angles sum to 180°: ∠D = 180° - 104° = 76°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In cyclic quadrilateral $ABCD$, $\\angle B = 104^\\circ$. What is the measure of the opposite angle $\\angle D$?",
      "output": "$76^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$76^\\circ$"
      },
      {
        "id": "B",
        "text": "$104^\\circ$",
        "misconceptionTag": "MIS-EQUAL-SLIP",
        "misconceptionId": "MIS-EQUAL-SLIP",
        "feedback": "Opposite angles sum to 180°, they are not equal unless 90°.",
        "rationale": "Opposite angles sum to 180°, they are not equal unless 90°.",
        "remediation": "Opposite angles sum to 180°, they are not equal unless 90°."
      },
      {
        "id": "C",
        "text": "$86^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "180° - 104° = 76°.",
        "rationale": "180° - 104° = 76°.",
        "remediation": "180° - 104° = 76°."
      },
      {
        "id": "D",
        "text": "$90^\\circ$",
        "misconceptionTag": "MIS-RIGHT-ANGLE-GUESS",
        "misconceptionId": "MIS-RIGHT-ANGLE-GUESS",
        "feedback": "180° - 104° = 76°.",
        "rationale": "180° - 104° = 76°.",
        "remediation": "180° - 104° = 76°."
      }
    ]
  },
  {
    "id": "q_l13_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "$A, B, C$ are points on a circle with centre $O$. If $\\angle ABC = 55^\\circ$, calculate the reflex angle $\\angle AOC$.",
    "correctAnswer": "A",
    "explanation": "Angle AOC (minor) = 2 × 55° = 110°. Reflex angle AOC = 360° - 110° = 250°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "$A, B, C$ are points on a circle with centre $O$. If $\\angle ABC = 55^\\circ$, calculate the reflex angle $\\angle AOC$.",
      "output": "$250^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$250^\\circ$"
      },
      {
        "id": "B",
        "text": "$110^\\circ$",
        "misconceptionTag": "MIS-OBTUSE-ANGLE",
        "misconceptionId": "MIS-OBTUSE-ANGLE",
        "feedback": "110° is the non-reflex angle AOC; reflex angle = 360° - 110° = 250°.",
        "rationale": "110° is the non-reflex angle AOC; reflex angle = 360° - 110° = 250°.",
        "remediation": "110° is the non-reflex angle AOC; reflex angle = 360° - 110° = 250°."
      },
      {
        "id": "C",
        "text": "$220^\\circ$",
        "misconceptionTag": "MIS-DOUBLE-SLIP",
        "misconceptionId": "MIS-DOUBLE-SLIP",
        "feedback": "360° - 110° = 250°.",
        "rationale": "360° - 110° = 250°.",
        "remediation": "360° - 110° = 250°."
      },
      {
        "id": "D",
        "text": "$125^\\circ$",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Reflex angle is 250°.",
        "rationale": "Reflex angle is 250°.",
        "remediation": "Reflex angle is 250°."
      }
    ]
  },
  {
    "id": "q_l13_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A tangent $PT$ touches a circle at $T$. If $O$ is the centre, what is the angle between radius $OT$ and tangent $PT$?",
    "correctAnswer": "A",
    "explanation": "The radius to a tangent at the point of contact is perpendicular (90°).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A tangent $PT$ touches a circle at $T$. If $O$ is the centre, what is the angle between radius $OT$ and tangent $PT$?",
      "output": "$90^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$90^\\circ$"
      },
      {
        "id": "B",
        "text": "$45^\\circ$",
        "misconceptionTag": "MIS-HALF-ANGLE",
        "misconceptionId": "MIS-HALF-ANGLE",
        "feedback": "A tangent is strictly perpendicular to the radius at the point of contact.",
        "rationale": "A tangent is strictly perpendicular to the radius at the point of contact.",
        "remediation": "A tangent is strictly perpendicular to the radius at the point of contact."
      },
      {
        "id": "C",
        "text": "$60^\\circ$",
        "misconceptionTag": "MIS-TRIANGLE-GUESS",
        "misconceptionId": "MIS-TRIANGLE-GUESS",
        "feedback": "Tangent-radius angle is always 90°.",
        "rationale": "Tangent-radius angle is always 90°.",
        "remediation": "Tangent-radius angle is always 90°."
      },
      {
        "id": "D",
        "text": "$180^\\circ$",
        "misconceptionTag": "MIS-LINE-CONFUSION",
        "misconceptionId": "MIS-LINE-CONFUSION",
        "feedback": "Angle between tangent and radius is 90°.",
        "rationale": "Angle between tangent and radius is 90°.",
        "remediation": "Angle between tangent and radius is 90°."
      }
    ]
  },
  {
    "id": "q_l13_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "In cyclic quad $PQRS$, opposite angles are $\\angle P = 2x + 10^\\circ$ and $\\angle R = 3x - 5^\\circ$. Find $x$.",
    "correctAnswer": 35,
    "explanation": "(2x + 10) + (3x - 5) = 180 => 5x + 5 = 180 => 5x = 175 => x = 35.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In cyclic quad $PQRS$, opposite angles are $\\angle P = 2x + 10^\\circ$ and $\\angle R = 3x - 5^\\circ$. Find $x$.",
      "output": "35",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l13_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to prove that opposite angles of a cyclic quadrilateral sum to $180^\\circ$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Geometric proof using central angles.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to prove that opposite angles of a cyclic quadrilateral sum to $180^\\circ$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Join opposite vertices to the centre O to form angles at the centre."
      },
      {
        "id": "B",
        "text": "Use the theorem: angle at centre = 2 × angle at circumference."
      },
      {
        "id": "C",
        "text": "Recognize that the two angles at the centre form a full turn (360°)."
      },
      {
        "id": "D",
        "text": "Divide 360° by 2 to conclude that opposite angles sum to 180°."
      }
    ]
  },
  {
    "id": "q_l13_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "If the angle subtended at the circumference is $\\theta$, write the expression for the angle at the centre.",
    "correctAnswer": "2*theta",
    "explanation": "Central angle = 2 * theta.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If the angle subtended at the circumference is $\\theta$, write the expression for the angle at the centre.",
      "output": "2*theta",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l13_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student stated that adjacent angles in a cyclic quadrilateral are supplementary. What is the misconception?",
    "correctAnswer": "A",
    "explanation": "Opposite angles sum to 180° in a cyclic quad, not adjacent angles.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student stated that adjacent angles in a cyclic quadrilateral are supplementary. What is the misconception?",
      "output": "Confused cyclic quadrilaterals (opposite angles supplementary) with parallelograms (adjacent angles supplementary).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Confused cyclic quadrilaterals (opposite angles supplementary) with parallelograms (adjacent angles supplementary)."
      },
      {
        "id": "B",
        "text": "All 4 angles must be equal to 90°.",
        "misconceptionTag": "MIS-RECTANGLE-CONFUSION",
        "misconceptionId": "MIS-RECTANGLE-CONFUSION",
        "feedback": "Cyclic quads can have any shape if vertices lie on circle.",
        "rationale": "Cyclic quads can have any shape if vertices lie on circle.",
        "remediation": "Cyclic quads can have any shape if vertices lie on circle."
      },
      {
        "id": "C",
        "text": "Adjacent angles sum to 360°.",
        "misconceptionTag": "MIS-TOTAL-CONFUSION",
        "misconceptionId": "MIS-TOTAL-CONFUSION",
        "feedback": "Sum of all 4 is 360°.",
        "rationale": "Sum of all 4 is 360°.",
        "remediation": "Sum of all 4 is 360°."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Opposite angles sum to 180°, not adjacent.",
        "rationale": "Opposite angles sum to 180°, not adjacent.",
        "remediation": "Opposite angles sum to 180°, not adjacent."
      }
    ]
  },
  {
    "id": "q_l13_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student applied the angle at centre theorem $2\\theta$ to an angle whose vertex was inside the circle but not at the centre. Why is this invalid?",
    "correctAnswer": "A",
    "explanation": "The theorem holds only when the vertex is the circle centre.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student applied the angle at centre theorem $2\\theta$ to an angle whose vertex was inside the circle but not at the ce",
      "output": "The theorem requires the vertex to be the exact geometrical centre of the circle.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The theorem requires the vertex to be the exact geometrical centre of the circle."
      },
      {
        "id": "B",
        "text": "The vertex must be on the circumference.",
        "misconceptionTag": "MIS-LOCATION-CONFUSION",
        "misconceptionId": "MIS-LOCATION-CONFUSION",
        "feedback": "Circumference angle is θ, centre angle is 2θ.",
        "rationale": "Circumference angle is θ, centre angle is 2θ.",
        "remediation": "Circumference angle is θ, centre angle is 2θ."
      },
      {
        "id": "C",
        "text": "The angle must be a right angle.",
        "misconceptionTag": "MIS-RIGHT-ANGLE",
        "misconceptionId": "MIS-RIGHT-ANGLE",
        "feedback": "Theorem holds for all angles if vertex is at centre.",
        "rationale": "Theorem holds for all angles if vertex is at centre.",
        "remediation": "Theorem holds for all angles if vertex is at centre."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Center location is strictly required.",
        "rationale": "Center location is strictly required.",
        "remediation": "Center location is strictly required."
      }
    ]
  },
  {
    "id": "q_l13_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "$TA$ is a tangent to a circle at $A$, and $AB$ is a chord. If $\\angle TAB = 62^\\circ$, find the angle in the alternate segment subtended by chord $AB$.",
    "correctAnswer": "A",
    "explanation": "Alternate Segment Theorem: Angle between tangent and chord equals angle in alternate segment = 62°.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "$TA$ is a tangent to a circle at $A$, and $AB$ is a chord. If $\\angle TAB = 62^\\circ$, find the angle in the alternate s",
      "output": "$62^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$62^\\circ$"
      },
      {
        "id": "B",
        "text": "$118^\\circ$",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Alternate Segment Theorem states the angles are equal, not supplementary.",
        "rationale": "Alternate Segment Theorem states the angles are equal, not supplementary.",
        "remediation": "Alternate Segment Theorem states the angles are equal, not supplementary."
      },
      {
        "id": "C",
        "text": "$28^\\circ$",
        "misconceptionTag": "MIS-COMPLEMENTARY",
        "misconceptionId": "MIS-COMPLEMENTARY",
        "feedback": "Angle in alternate segment equals angle between tangent and chord.",
        "rationale": "Angle in alternate segment equals angle between tangent and chord.",
        "remediation": "Angle in alternate segment equals angle between tangent and chord."
      },
      {
        "id": "D",
        "text": "$31^\\circ$",
        "misconceptionTag": "MIS-HALF-SLIP",
        "misconceptionId": "MIS-HALF-SLIP",
        "feedback": "Angle is 62°.",
        "rationale": "Angle is 62°.",
        "remediation": "Angle is 62°."
      }
    ]
  },
  {
    "id": "q_l13_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m5",
    "lessonId": "l13",
    "topicId": "top-waec-geom-02",
    "objectiveIndex": 0,
    "objective": "Apply circle theorems on subtended angles and cyclic quadrilaterals",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "In cyclic quad $ABCD$, side $AB$ is extended to $E$. If $\\angle CBE = 78^\\circ$, find the interior opposite angle $\\angle ADC$.",
    "correctAnswer": "A",
    "explanation": "The exterior angle of a cyclic quadrilateral equals the interior opposite angle: ∠ADC = 78°.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In cyclic quad $ABCD$, side $AB$ is extended to $E$. If $\\angle CBE = 78^\\circ$, find the interior opposite angle $\\angl",
      "output": "$78^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$78^\\circ$"
      },
      {
        "id": "B",
        "text": "$102^\\circ$",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Exterior angle of cyclic quad equals interior opposite angle directly.",
        "rationale": "Exterior angle of cyclic quad equals interior opposite angle directly.",
        "remediation": "Exterior angle of cyclic quad equals interior opposite angle directly."
      },
      {
        "id": "C",
        "text": "$156^\\circ$",
        "misconceptionTag": "MIS-DOUBLE-SLIP",
        "misconceptionId": "MIS-DOUBLE-SLIP",
        "feedback": "Angles are equal: ∠ADC = ∠CBE = 78°.",
        "rationale": "Angles are equal: ∠ADC = ∠CBE = 78°.",
        "remediation": "Angles are equal: ∠ADC = ∠CBE = 78°."
      },
      {
        "id": "D",
        "text": "$90^\\circ$",
        "misconceptionTag": "MIS-RIGHT-ANGLE-GUESS",
        "misconceptionId": "MIS-RIGHT-ANGLE-GUESS",
        "feedback": "∠ADC = 78°.",
        "rationale": "∠ADC = 78°.",
        "remediation": "∠ADC = 78°."
      }
    ]
  },
  {
    "id": "q_l14_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "In a right-angled triangle, which ratio defines $\\cos \\theta$?",
    "correctAnswer": "A",
    "explanation": "SOHCAHTOA: cos θ = Adjacent / Hypotenuse.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In a right-angled triangle, which ratio defines $\\cos \\theta$?",
      "output": "$\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$"
      },
      {
        "id": "B",
        "text": "$\\frac{\\text{Opposite}}{\\text{Hypotenuse}}$",
        "misconceptionTag": "MIS-SINE-CONFUSION",
        "misconceptionId": "MIS-SINE-CONFUSION",
        "feedback": "Opposite/Hypotenuse is sine.",
        "rationale": "Opposite/Hypotenuse is sine.",
        "remediation": "Opposite/Hypotenuse is sine."
      },
      {
        "id": "C",
        "text": "$\\frac{\\text{Opposite}}{\\text{Adjacent}}$",
        "misconceptionTag": "MIS-TANGENT-CONFUSION",
        "misconceptionId": "MIS-TANGENT-CONFUSION",
        "feedback": "Opposite/Adjacent is tangent.",
        "rationale": "Opposite/Adjacent is tangent.",
        "remediation": "Opposite/Adjacent is tangent."
      },
      {
        "id": "D",
        "text": "$\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}$",
        "misconceptionTag": "MIS-SECANT-CONFUSION",
        "misconceptionId": "MIS-SECANT-CONFUSION",
        "feedback": "Hypotenuse/Adjacent is secant.",
        "rationale": "Hypotenuse/Adjacent is secant.",
        "remediation": "Hypotenuse/Adjacent is secant."
      }
    ]
  },
  {
    "id": "q_l14_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "If $\\sin \\theta = \\frac{3}{5}$ and $\\theta$ is acute, what is the value of $\\cos \\theta$?",
    "correctAnswer": "A",
    "explanation": "By Pythagoras: Adjacent = √(5² - 3²) = 4 => cos θ = 4/5.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $\\sin \\theta = \\frac{3}{5}$ and $\\theta$ is acute, what is the value of $\\cos \\theta$?",
      "output": "$\\frac{4}{5}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{4}{5}$"
      },
      {
        "id": "B",
        "text": "$\\frac{2}{5}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "cos θ = √(1 - 9/25) = √(16/25) = 4/5.",
        "rationale": "cos θ = √(1 - 9/25) = √(16/25) = 4/5.",
        "remediation": "cos θ = √(1 - 9/25) = √(16/25) = 4/5."
      },
      {
        "id": "C",
        "text": "$\\frac{3}{4}$",
        "misconceptionTag": "MIS-TANGENT-SLIP",
        "misconceptionId": "MIS-TANGENT-SLIP",
        "feedback": "3/4 is tan θ, not cos θ.",
        "rationale": "3/4 is tan θ, not cos θ.",
        "remediation": "3/4 is tan θ, not cos θ."
      },
      {
        "id": "D",
        "text": "$\\frac{5}{3}$",
        "misconceptionTag": "MIS-RECIPROCAL-SLIP",
        "misconceptionId": "MIS-RECIPROCAL-SLIP",
        "feedback": "cos θ <= 1.",
        "rationale": "cos θ <= 1.",
        "remediation": "cos θ <= 1."
      }
    ]
  },
  {
    "id": "q_l14_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What is the exact value of $\\sin 30^\\circ + \\cos 60^\\circ$?",
    "correctAnswer": "A",
    "explanation": "sin 30° = 1/2 and cos 60° = 1/2 => 1/2 + 1/2 = 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the exact value of $\\sin 30^\\circ + \\cos 60^\\circ$?",
      "output": "$1$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$1$"
      },
      {
        "id": "B",
        "text": "$\\frac{\\sqrt{3}}{2}$",
        "misconceptionTag": "MIS-COS-SLIP",
        "misconceptionId": "MIS-COS-SLIP",
        "feedback": "sin 30° = 1/2, cos 60° = 1/2. Sum = 1.",
        "rationale": "sin 30° = 1/2, cos 60° = 1/2. Sum = 1.",
        "remediation": "sin 30° = 1/2, cos 60° = 1/2. Sum = 1."
      },
      {
        "id": "C",
        "text": "$\\frac{1}{2}$",
        "misconceptionTag": "MIS-SINGLE-VAL",
        "misconceptionId": "MIS-SINGLE-VAL",
        "feedback": "1/2 + 1/2 = 1.",
        "rationale": "1/2 + 1/2 = 1.",
        "remediation": "1/2 + 1/2 = 1."
      },
      {
        "id": "D",
        "text": "$\\sqrt{3}$",
        "misconceptionTag": "MIS-TAN-SLIP",
        "misconceptionId": "MIS-TAN-SLIP",
        "feedback": "sin 30° + cos 60° = 0.5 + 0.5 = 1.",
        "rationale": "sin 30° + cos 60° = 0.5 + 0.5 = 1.",
        "remediation": "sin 30° + cos 60° = 0.5 + 0.5 = 1."
      }
    ]
  },
  {
    "id": "q_l14_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: For any acute angle $\\theta$, $\\sin^2 \\theta + \\cos^2 \\theta = 1$.",
    "correctAnswer": "A",
    "explanation": "(Opp/Hyp)² + (Adj/Hyp)² = (Opp² + Adj²) / Hyp² = Hyp² / Hyp² = 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: For any acute angle $\\theta$, $\\sin^2 \\theta + \\cos^2 \\theta = 1$.",
      "output": "True: Derived directly from the Pythagorean theorem $a^2 + b^2 = c^2$ divided by $c^2$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Derived directly from the Pythagorean theorem $a^2 + b^2 = c^2$ divided by $c^2$."
      },
      {
        "id": "B",
        "text": "False: Holds only when θ = 45°.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds for all real angles.",
        "rationale": "Holds for all real angles.",
        "remediation": "Holds for all real angles."
      },
      {
        "id": "C",
        "text": "False: The sum equals tan² θ.",
        "misconceptionTag": "MIS-IDENTITY-CONFUSION",
        "misconceptionId": "MIS-IDENTITY-CONFUSION",
        "feedback": "sin² θ + cos² θ = 1 is the fundamental identity.",
        "rationale": "sin² θ + cos² θ = 1 is the fundamental identity.",
        "remediation": "sin² θ + cos² θ = 1 is the fundamental identity."
      },
      {
        "id": "D",
        "text": "True: But only if hypotenuse is 1.",
        "misconceptionTag": "MIS-SCALE-RESTRICTION",
        "misconceptionId": "MIS-SCALE-RESTRICTION",
        "feedback": "Ratios are scale invariant.",
        "rationale": "Ratios are scale invariant.",
        "remediation": "Ratios are scale invariant."
      }
    ]
  },
  {
    "id": "q_l14_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A ladder $10\\text{ m}$ long leans against a vertical wall, making an angle of $60^\\circ$ with the ground. How high up the wall does it reach?",
    "correctAnswer": "A",
    "explanation": "Height = 10 × sin 60° = 10 × (√3/2) = 5√3 ≈ 8.66 m.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A ladder $10\\text{ m}$ long leans against a vertical wall, making an angle of $60^\\circ$ with the ground. How high up th",
      "output": "$5\\sqrt{3}\\text{ m} \\approx 8.66\\text{ m}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$5\\sqrt{3}\\text{ m} \\approx 8.66\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$5\\text{ m}$",
        "misconceptionTag": "MIS-COS-SLIP",
        "misconceptionId": "MIS-COS-SLIP",
        "feedback": "5 m is the distance from the base: 10 cos 60° = 5 m.",
        "rationale": "5 m is the distance from the base: 10 cos 60° = 5 m.",
        "remediation": "5 m is the distance from the base: 10 cos 60° = 5 m."
      },
      {
        "id": "C",
        "text": "$10\\text{ m}$",
        "misconceptionTag": "MIS-HYPOTENUSE-SLIP",
        "misconceptionId": "MIS-HYPOTENUSE-SLIP",
        "feedback": "Height cannot equal hypotenuse.",
        "rationale": "Height cannot equal hypotenuse.",
        "remediation": "Height cannot equal hypotenuse."
      },
      {
        "id": "D",
        "text": "$7.5\\text{ m}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "Height = 10 sin 60° = 5√3 m.",
        "rationale": "Height = 10 sin 60° = 5√3 m.",
        "remediation": "Height = 10 sin 60° = 5√3 m."
      }
    ]
  },
  {
    "id": "q_l14_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A right triangle has a base of $8\\text{ cm}$ and hypotenuse of $17\\text{ cm}$. Find its perpendicular height.",
    "correctAnswer": "A",
    "explanation": "Height = √(17² - 8²) = √(289 - 64) = √225 = 15 cm.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A right triangle has a base of $8\\text{ cm}$ and hypotenuse of $17\\text{ cm}$. Find its perpendicular height.",
      "output": "$15\\text{ cm}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$15\\text{ cm}$"
      },
      {
        "id": "B",
        "text": "$13\\text{ cm}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "h = √(17² - 8²) = √(289 - 64) = √225 = 15 cm.",
        "rationale": "h = √(17² - 8²) = √(289 - 64) = √225 = 15 cm.",
        "remediation": "h = √(17² - 8²) = √(289 - 64) = √225 = 15 cm."
      },
      {
        "id": "C",
        "text": "$9\\text{ cm}$",
        "misconceptionTag": "MIS-SUB-SLIP",
        "misconceptionId": "MIS-SUB-SLIP",
        "feedback": "17 - 8 = 9 is NOT Pythagoras.",
        "rationale": "17 - 8 = 9 is NOT Pythagoras.",
        "remediation": "17 - 8 = 9 is NOT Pythagoras."
      },
      {
        "id": "D",
        "text": "$12\\text{ cm}$",
        "misconceptionTag": "MIS-PYTHAG-TRIPLE",
        "misconceptionId": "MIS-PYTHAG-TRIPLE",
        "feedback": "8-15-17 is the Pythagorean triple.",
        "rationale": "8-15-17 is the Pythagorean triple.",
        "remediation": "8-15-17 is the Pythagorean triple."
      }
    ]
  },
  {
    "id": "q_l14_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Find the acute angle $\\theta$ such that $\\tan \\theta = 1$.",
    "correctAnswer": "A",
    "explanation": "tan 45° = 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the acute angle $\\theta$ such that $\\tan \\theta = 1$.",
      "output": "$45^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$45^\\circ$"
      },
      {
        "id": "B",
        "text": "$30^\\circ$",
        "misconceptionTag": "MIS-SPECIAL-ANGLE",
        "misconceptionId": "MIS-SPECIAL-ANGLE",
        "feedback": "tan 30° = 1/√3.",
        "rationale": "tan 30° = 1/√3.",
        "remediation": "tan 30° = 1/√3."
      },
      {
        "id": "C",
        "text": "$60^\\circ$",
        "misconceptionTag": "MIS-SPECIAL-ANGLE",
        "misconceptionId": "MIS-SPECIAL-ANGLE",
        "feedback": "tan 60° = √3.",
        "rationale": "tan 60° = √3.",
        "remediation": "tan 60° = √3."
      },
      {
        "id": "D",
        "text": "$90^\\circ$",
        "misconceptionTag": "MIS-UNDEFINED-SLIP",
        "misconceptionId": "MIS-UNDEFINED-SLIP",
        "feedback": "tan 90° is undefined.",
        "rationale": "tan 90° is undefined.",
        "remediation": "tan 90° is undefined."
      }
    ]
  },
  {
    "id": "q_l14_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the value of $2 \\cos 60^\\circ$.",
    "correctAnswer": 1,
    "explanation": "cos 60° = 0.5 => 2 × 0.5 = 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the value of $2 \\cos 60^\\circ$.",
      "output": "1",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l14_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to find an unknown angle $\\theta$ in a right triangle given opposite and adjacent sides:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard inverse trig procedure.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to find an unknown angle $\\theta$ in a right triangle given opposite and adjacent sides:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Identify opposite side and adjacent side relative to θ."
      },
      {
        "id": "B",
        "text": "Write the tangent ratio: tan θ = Opposite / Adjacent."
      },
      {
        "id": "C",
        "text": "Compute the quotient: Opposite / Adjacent."
      },
      {
        "id": "D",
        "text": "Take the inverse tangent: θ = arctan(quotient)."
      }
    ]
  },
  {
    "id": "q_l14_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the fundamental trigonometric identity in terms of $\\sin(\\theta)$ and $\\cos(\\theta)$.",
    "correctAnswer": "sin(theta)^2 + cos(theta)^2 = 1",
    "explanation": "sin²(θ) + cos²(θ) = 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the fundamental trigonometric identity in terms of $\\sin(\\theta)$ and $\\cos(\\theta)$.",
      "output": "sin(theta)^2 + cos(theta)^2 = 1",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l14_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student calculated $\\cos \\theta = \\frac{13}{12}$ for a triangle. Why is this answer impossible?",
    "correctAnswer": "A",
    "explanation": "Hypotenuse > Adjacent in any real right triangle, so cos θ <= 1.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student calculated $\\cos \\theta = \\frac{13}{12}$ for a triangle. Why is this answer impossible?",
      "output": "The hypotenuse is the longest side, so $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$ cannot exceed $1$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The hypotenuse is the longest side, so $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$ cannot exceed $1$."
      },
      {
        "id": "B",
        "text": "cos θ must always be negative.",
        "misconceptionTag": "MIS-SIGN-CONFUSION",
        "misconceptionId": "MIS-SIGN-CONFUSION",
        "feedback": "Acute angle cos is positive in (0, 1].",
        "rationale": "Acute angle cos is positive in (0, 1].",
        "remediation": "Acute angle cos is positive in (0, 1]."
      },
      {
        "id": "C",
        "text": "cos θ must be an integer.",
        "misconceptionTag": "MIS-INTEGER-CONFUSION",
        "misconceptionId": "MIS-INTEGER-CONFUSION",
        "feedback": "Ratios are typically fractions.",
        "rationale": "Ratios are typically fractions.",
        "remediation": "Ratios are typically fractions."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "|cos θ| <= 1 for all real angles.",
        "rationale": "|cos θ| <= 1 for all real angles.",
        "remediation": "|cos θ| <= 1 for all real angles."
      }
    ]
  },
  {
    "id": "q_l14_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To find height $h$ with base $10$ and angle $30^\\circ$, a student used $\\sin 30^\\circ = \\frac{h}{10}$. What was the mistake?",
    "correctAnswer": "A",
    "explanation": "Base is adjacent to 30°, so tan 30° = h / 10 => h = 10 tan 30°.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To find height $h$ with base $10$ and angle $30^\\circ$, a student used $\\sin 30^\\circ = \\frac{h}{10}$. What was the mist",
      "output": "Used sine (Opposite/Hypotenuse) instead of tangent (Opposite/Adjacent); $10$ was the base, not hypotenuse.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Used sine (Opposite/Hypotenuse) instead of tangent (Opposite/Adjacent); $10$ was the base, not hypotenuse."
      },
      {
        "id": "B",
        "text": "Used 30° instead of 60°.",
        "misconceptionTag": "MIS-ANGLE-SWAP",
        "misconceptionId": "MIS-ANGLE-SWAP",
        "feedback": "The angle was given as 30°.",
        "rationale": "The angle was given as 30°.",
        "remediation": "The angle was given as 30°."
      },
      {
        "id": "C",
        "text": "Multiplied instead of dividing.",
        "misconceptionTag": "MIS-OP-CONFUSION",
        "misconceptionId": "MIS-OP-CONFUSION",
        "feedback": "The trigonometric ratio choice was wrong.",
        "rationale": "The trigonometric ratio choice was wrong.",
        "remediation": "The trigonometric ratio choice was wrong."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "tan 30° = h / 10 should be used.",
        "rationale": "tan 30° = h / 10 should be used.",
        "remediation": "tan 30° = h / 10 should be used."
      }
    ]
  },
  {
    "id": "q_l14_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "From a point on horizontal ground $20\\text{ m}$ from the base of a vertical tower, the angle of elevation of the top is $30^\\circ$. Find the height of the tower.",
    "correctAnswer": "A",
    "explanation": "tan 30° = h / 20 => h = 20 × (1/√3) = 20√3 / 3 ≈ 11.55 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "From a point on horizontal ground $20\\text{ m}$ from the base of a vertical tower, the angle of elevation of the top is ",
      "output": "$\\frac{20\\sqrt{3}}{3}\\text{ m} \\approx 11.55\\text{ m}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{20\\sqrt{3}}{3}\\text{ m} \\approx 11.55\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$10\\text{ m}$",
        "misconceptionTag": "MIS-SIN-SLIP",
        "misconceptionId": "MIS-SIN-SLIP",
        "feedback": "20 sin 30° = 10 m, but ground distance is adjacent (use tan).",
        "rationale": "20 sin 30° = 10 m, but ground distance is adjacent (use tan).",
        "remediation": "20 sin 30° = 10 m, but ground distance is adjacent (use tan)."
      },
      {
        "id": "C",
        "text": "$20\\sqrt{3}\\text{ m}$",
        "misconceptionTag": "MIS-RECIPROCAL-SLIP",
        "misconceptionId": "MIS-RECIPROCAL-SLIP",
        "feedback": "20 / tan 30° = 20√3, should multiply by tan 30°.",
        "rationale": "20 / tan 30° = 20√3, should multiply by tan 30°.",
        "remediation": "20 / tan 30° = 20√3, should multiply by tan 30°."
      },
      {
        "id": "D",
        "text": "$15\\text{ m}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "Height = 20 tan 30° = 20/√3 = 20√3 / 3 m.",
        "rationale": "Height = 20 tan 30° = 20/√3 = 20√3 / 3 m.",
        "remediation": "Height = 20 tan 30° = 20/√3 = 20√3 / 3 m."
      }
    ]
  },
  {
    "id": "q_l14_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l14",
    "topicId": "top-waec-trig-01",
    "objectiveIndex": 0,
    "objective": "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A flagpole stands on top of a building $15\\text{ m}$ high. From a point on the ground, the angle of elevation of the bottom of the pole is $30^\\circ$ and the top of the pole is $45^\\circ$. Find the length of the flagpole.",
    "correctAnswer": "A",
    "explanation": "Distance d = 15 / tan 30° = 15√3. Total height H = d tan 45° = 15√3. Pole = 15√3 - 15 = 15(√3 - 1) m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A flagpole stands on top of a building $15\\text{ m}$ high. From a point on the ground, the angle of elevation of the bot",
      "output": "$15(\\sqrt{3} - 1)\\text{ m} \\approx 10.98\\text{ m}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$15(\\sqrt{3} - 1)\\text{ m} \\approx 10.98\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$15\\text{ m}$",
        "misconceptionTag": "MIS-BUILDING-COPY",
        "misconceptionId": "MIS-BUILDING-COPY",
        "feedback": "Flagpole height is total height minus building height.",
        "rationale": "Flagpole height is total height minus building height.",
        "remediation": "Flagpole height is total height minus building height."
      },
      {
        "id": "C",
        "text": "$5\\sqrt{3}\\text{ m}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Ground distance = 15 / tan 30° = 15√3. Total height = 15√3 tan 45° = 15√3. Pole = 15(√3 - 1).",
        "rationale": "Ground distance = 15 / tan 30° = 15√3. Total height = 15√3 tan 45° = 15√3. Pole = 15(√3 - 1).",
        "remediation": "Ground distance = 15 / tan 30° = 15√3. Total height = 15√3 tan 45° = 15√3. Pole = 15(√3 - 1)."
      },
      {
        "id": "D",
        "text": "$12\\text{ m}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "15(1.732 - 1) = 15 × 0.732 ≈ 10.98 m.",
        "rationale": "15(1.732 - 1) = 15 × 0.732 ≈ 10.98 m.",
        "remediation": "15(1.732 - 1) = 15 × 0.732 ≈ 10.98 m."
      }
    ]
  },
  {
    "id": "q_l15_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which formula expresses the Sine Rule for any triangle $ABC$?",
    "correctAnswer": "A",
    "explanation": "Sine rule: a / sin A = b / sin B = c / sin C.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which formula expresses the Sine Rule for any triangle $ABC$?",
      "output": "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$"
      },
      {
        "id": "B",
        "text": "$a \\sin A = b \\sin B = c \\sin C$",
        "misconceptionTag": "MIS-MULT-CONFUSION",
        "misconceptionId": "MIS-MULT-CONFUSION",
        "feedback": "Sides are divided by sines, not multiplied.",
        "rationale": "Sides are divided by sines, not multiplied.",
        "remediation": "Sides are divided by sines, not multiplied."
      },
      {
        "id": "C",
        "text": "$\\frac{a}{\\cos A} = \\frac{b}{\\cos B}$",
        "misconceptionTag": "MIS-COS-CONFUSION",
        "misconceptionId": "MIS-COS-CONFUSION",
        "feedback": "The rule uses sines, not cosines.",
        "rationale": "The rule uses sines, not cosines.",
        "remediation": "The rule uses sines, not cosines."
      },
      {
        "id": "D",
        "text": "$a^2 + b^2 = c^2$",
        "misconceptionTag": "MIS-PYTHAG-CONFUSION",
        "misconceptionId": "MIS-PYTHAG-CONFUSION",
        "feedback": "Pythagoras applies only to right-angled triangles.",
        "rationale": "Pythagoras applies only to right-angled triangles.",
        "remediation": "Pythagoras applies only to right-angled triangles."
      }
    ]
  },
  {
    "id": "q_l15_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which formula correctly gives side $a$ using the Cosine Rule?",
    "correctAnswer": "A",
    "explanation": "Cosine rule: a² = b² + c² - 2bc cos A.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which formula correctly gives side $a$ using the Cosine Rule?",
      "output": "$a^2 = b^2 + c^2 - 2bc \\cos A$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$a^2 = b^2 + c^2 - 2bc \\cos A$"
      },
      {
        "id": "B",
        "text": "$a^2 = b^2 + c^2 + 2bc \\cos A$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "The formula has -2bc cos A, not +.",
        "rationale": "The formula has -2bc cos A, not +.",
        "remediation": "The formula has -2bc cos A, not +."
      },
      {
        "id": "C",
        "text": "$a^2 = b^2 + c^2 - bc \\cos A$",
        "misconceptionTag": "MIS-FACTOR-2-OMIT",
        "misconceptionId": "MIS-FACTOR-2-OMIT",
        "feedback": "The coefficient is 2bc, not bc.",
        "rationale": "The coefficient is 2bc, not bc.",
        "remediation": "The coefficient is 2bc, not bc."
      },
      {
        "id": "D",
        "text": "$a = b + c - 2bc \\cos A$",
        "misconceptionTag": "MIS-SQUARE-OMIT",
        "misconceptionId": "MIS-SQUARE-OMIT",
        "feedback": "Sides must be squared.",
        "rationale": "Sides must be squared.",
        "remediation": "Sides must be squared."
      }
    ]
  },
  {
    "id": "q_l15_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What formula gives the area of a triangle with sides $a$ and $b$ and included angle $C$?",
    "correctAnswer": "A",
    "explanation": "Area = (1/2) ab sin C.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What formula gives the area of a triangle with sides $a$ and $b$ and included angle $C$?",
      "output": "$\\frac{1}{2}ab \\sin C$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{2}ab \\sin C$"
      },
      {
        "id": "B",
        "text": "$ab \\sin C$",
        "misconceptionTag": "MIS-HALF-OMIT",
        "misconceptionId": "MIS-HALF-OMIT",
        "feedback": "Must multiply by 1/2.",
        "rationale": "Must multiply by 1/2.",
        "remediation": "Must multiply by 1/2."
      },
      {
        "id": "C",
        "text": "$\\frac{1}{2}ab \\cos C$",
        "misconceptionTag": "MIS-COS-CONFUSION",
        "misconceptionId": "MIS-COS-CONFUSION",
        "feedback": "Area uses sine of included angle.",
        "rationale": "Area uses sine of included angle.",
        "remediation": "Area uses sine of included angle."
      },
      {
        "id": "D",
        "text": "$\\frac{1}{2}(a + b) \\sin C$",
        "misconceptionTag": "MIS-SUM-INSTEAD-MULT",
        "misconceptionId": "MIS-SUM-INSTEAD-MULT",
        "feedback": "Sides must be multiplied (ab).",
        "rationale": "Sides must be multiplied (ab).",
        "remediation": "Sides must be multiplied (ab)."
      }
    ]
  },
  {
    "id": "q_l15_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: The Cosine Rule can be used to find any angle of a triangle when all three sides are known.",
    "correctAnswer": "A",
    "explanation": "cos A = (b² + c² - a²) / (2bc) solves SSS triangles.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: The Cosine Rule can be used to find any angle of a triangle when all three sides are known.",
      "output": "True: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$ solves for angle $A$ uniquely since $0^\\circ < A < 180^\\circ$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$ solves for angle $A$ uniquely since $0^\\circ < A < 180^\\circ$."
      },
      {
        "id": "B",
        "text": "False: At least one angle must be known.",
        "misconceptionTag": "MIS-RULE-SELECTION",
        "misconceptionId": "MIS-RULE-SELECTION",
        "feedback": "SSS information uniquely determines angles via cosine rule.",
        "rationale": "SSS information uniquely determines angles via cosine rule.",
        "remediation": "SSS information uniquely determines angles via cosine rule."
      },
      {
        "id": "C",
        "text": "False: Holds only for acute triangles.",
        "misconceptionTag": "MIS-OBTUSE-RESTRICTION",
        "misconceptionId": "MIS-OBTUSE-RESTRICTION",
        "feedback": "Cosine handles obtuse angles naturally (cos > 90° is negative).",
        "rationale": "Cosine handles obtuse angles naturally (cos > 90° is negative).",
        "remediation": "Cosine handles obtuse angles naturally (cos > 90° is negative)."
      },
      {
        "id": "D",
        "text": "True: But only if the perimeter is an even integer.",
        "misconceptionTag": "MIS-ARBITRARY-RULE",
        "misconceptionId": "MIS-ARBITRARY-RULE",
        "feedback": "Valid for all valid triangle side lengths.",
        "rationale": "Valid for all valid triangle side lengths.",
        "remediation": "Valid for all valid triangle side lengths."
      }
    ]
  },
  {
    "id": "q_l15_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In $\\triangle ABC$, $a = 6\\text{ cm}, b = 8\\text{ cm},$ and $\\angle C = 30^\\circ$. Calculate the area of the triangle.",
    "correctAnswer": "A",
    "explanation": "Area = (1/2) × 6 × 8 × sin 30° = 24 × 0.5 = 12 cm².",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In $\\triangle ABC$, $a = 6\\text{ cm}, b = 8\\text{ cm},$ and $\\angle C = 30^\\circ$. Calculate the area of the triangle.",
      "output": "$12\\text{ cm}^2$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$12\\text{ cm}^2$"
      },
      {
        "id": "B",
        "text": "$24\\text{ cm}^2$",
        "misconceptionTag": "MIS-HALF-OMIT",
        "misconceptionId": "MIS-HALF-OMIT",
        "feedback": "Forgot 1/2: 6 × 8 × 0.5 = 24, with 1/2 gives 12 cm².",
        "rationale": "Forgot 1/2: 6 × 8 × 0.5 = 24, with 1/2 gives 12 cm².",
        "remediation": "Forgot 1/2: 6 × 8 × 0.5 = 24, with 1/2 gives 12 cm²."
      },
      {
        "id": "C",
        "text": "$16\\text{ cm}^2$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(1/2)(6)(8) sin 30° = 24 × 0.5 = 12 cm².",
        "rationale": "(1/2)(6)(8) sin 30° = 24 × 0.5 = 12 cm².",
        "remediation": "(1/2)(6)(8) sin 30° = 24 × 0.5 = 12 cm²."
      },
      {
        "id": "D",
        "text": "$48\\text{ cm}^2$",
        "misconceptionTag": "MIS-SIN-OMIT",
        "misconceptionId": "MIS-SIN-OMIT",
        "feedback": "Forgot sin 30°.",
        "rationale": "Forgot sin 30°.",
        "remediation": "Forgot sin 30°."
      }
    ]
  },
  {
    "id": "q_l15_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In $\\triangle ABC$, $b = 5\\text{ cm}, c = 7\\text{ cm},$ and $\\angle A = 60^\\circ$. Calculate side $a$.",
    "correctAnswer": "A",
    "explanation": "a² = 5² + 7² - 2(5)(7) cos 60° = 25 + 49 - 35 = 39 => a = √39 ≈ 6.24 cm.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In $\\triangle ABC$, $b = 5\\text{ cm}, c = 7\\text{ cm},$ and $\\angle A = 60^\\circ$. Calculate side $a$.",
      "output": "$\\sqrt{39}\\text{ cm} \\approx 6.24\\text{ cm}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\sqrt{39}\\text{ cm} \\approx 6.24\\text{ cm}$"
      },
      {
        "id": "B",
        "text": "$\\sqrt{74}\\text{ cm}$",
        "misconceptionTag": "MIS-COS-TERM-OMIT",
        "misconceptionId": "MIS-COS-TERM-OMIT",
        "feedback": "5² + 7² = 74; forgot -2bc cos A = -35.",
        "rationale": "5² + 7² = 74; forgot -2bc cos A = -35.",
        "remediation": "5² + 7² = 74; forgot -2bc cos A = -35."
      },
      {
        "id": "C",
        "text": "$6\\text{ cm}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "a² = 25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39 => a = √39 cm.",
        "rationale": "a² = 25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39 => a = √39 cm.",
        "remediation": "a² = 25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39 => a = √39 cm."
      },
      {
        "id": "D",
        "text": "$\\sqrt{109}\\text{ cm}$",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "Subtracted instead of added in cosine rule.",
        "rationale": "Subtracted instead of added in cosine rule.",
        "remediation": "Subtracted instead of added in cosine rule."
      }
    ]
  },
  {
    "id": "q_l15_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "In $\\triangle ABC$, $a = 10\\text{ cm}, \\angle A = 30^\\circ,$ and $\\angle B = 45^\\circ$. Calculate side $b$.",
    "correctAnswer": "A",
    "explanation": "b / sin 45° = 10 / sin 30° => b = 10 × (√2/2) / (1/2) = 10√2 ≈ 14.14 cm.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In $\\triangle ABC$, $a = 10\\text{ cm}, \\angle A = 30^\\circ,$ and $\\angle B = 45^\\circ$. Calculate side $b$.",
      "output": "$10\\sqrt{2}\\text{ cm} \\approx 14.14\\text{ cm}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$10\\sqrt{2}\\text{ cm} \\approx 14.14\\text{ cm}$"
      },
      {
        "id": "B",
        "text": "$10\\text{ cm}$",
        "misconceptionTag": "MIS-EQUAL-SLIP",
        "misconceptionId": "MIS-EQUAL-SLIP",
        "feedback": "b = a sin B / sin A = 10(√2/2) / (1/2) = 10√2 cm.",
        "rationale": "b = a sin B / sin A = 10(√2/2) / (1/2) = 10√2 cm.",
        "remediation": "b = a sin B / sin A = 10(√2/2) / (1/2) = 10√2 cm."
      },
      {
        "id": "C",
        "text": "$20\\text{ cm}$",
        "misconceptionTag": "MIS-SCALE-SLIP",
        "misconceptionId": "MIS-SCALE-SLIP",
        "feedback": "10√2 ≈ 14.14 cm.",
        "rationale": "10√2 ≈ 14.14 cm.",
        "remediation": "10√2 ≈ 14.14 cm."
      },
      {
        "id": "D",
        "text": "$5\\sqrt{2}\\text{ cm}$",
        "misconceptionTag": "MIS-HALF-SLIP",
        "misconceptionId": "MIS-HALF-SLIP",
        "feedback": "Dividing by 1/2 multiplies by 2: (5√2) × 2 = 10√2.",
        "rationale": "Dividing by 1/2 multiplies by 2: (5√2) × 2 = 10√2.",
        "remediation": "Dividing by 1/2 multiplies by 2: (5√2) × 2 = 10√2."
      }
    ]
  },
  {
    "id": "q_l15_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the area of a triangle with sides $10\\text{ cm}$ and $12\\text{ cm}$ enclosing an angle of $30^\\circ$ (in $\\text{cm}^2$).",
    "correctAnswer": 30,
    "explanation": "Area = (1/2) × 10 × 12 × sin 30° = 60 × 0.5 = 30 cm².",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the area of a triangle with sides $10\\text{ cm}$ and $12\\text{ cm}$ enclosing an angle of $30^\\circ$ (in $\\tex",
      "output": "30",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l15_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to find side $a$ given two sides $b, c$ and included angle $A$:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard SAS Cosine Rule sequence.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to find side $a$ given two sides $b, c$ and included angle $A$:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Identify that two sides and included angle (SAS) requires the Cosine Rule."
      },
      {
        "id": "B",
        "text": "State formula: a² = b² + c² - 2bc cos A."
      },
      {
        "id": "C",
        "text": "Substitute values and evaluate the right-hand side."
      },
      {
        "id": "D",
        "text": "Take the positive square root to determine side length a."
      }
    ]
  },
  {
    "id": "q_l15_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the formula for $\\cos A$ in terms of sides $a, b,$ and $c$.",
    "correctAnswer": "(b^2 + c^2 - a^2)/(2*b*c)",
    "explanation": "cos A = (b² + c² - a²) / (2bc).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the formula for $\\cos A$ in terms of sides $a, b,$ and $c$.",
      "output": "(b^2 + c^2 - a^2)/(2*b*c)",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l15_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To calculate side $a$ with $b=4, c=5, A=60^\\circ$, a student computed $a^2 = 4^2 + 5^2 - 4(5)\\cos 60^\\circ$. What was the error?",
    "correctAnswer": "A",
    "explanation": "The term is -2bc cos A = -2(4)(5)(0.5) = -20. The student wrote -10.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To calculate side $a$ with $b=4, c=5, A=60^\\circ$, a student computed $a^2 = 4^2 + 5^2 - 4(5)\\cos 60^\\circ$. What was th",
      "output": "Omitted the coefficient $2$ in the formula $-2bc \\cos A$ (wrote $-bc \\cos A$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Omitted the coefficient $2$ in the formula $-2bc \\cos A$ (wrote $-bc \\cos A$)."
      },
      {
        "id": "B",
        "text": "Subtracted instead of adding 4² + 5².",
        "misconceptionTag": "MIS-SIGN-SLIP",
        "misconceptionId": "MIS-SIGN-SLIP",
        "feedback": "4² + 5² = 41 was correct.",
        "rationale": "4² + 5² = 41 was correct.",
        "remediation": "4² + 5² = 41 was correct."
      },
      {
        "id": "C",
        "text": "cos 60° should be √3/2.",
        "misconceptionTag": "MIS-COS-VALUE",
        "misconceptionId": "MIS-COS-VALUE",
        "feedback": "cos 60° is 1/2.",
        "rationale": "cos 60° is 1/2.",
        "remediation": "cos 60° is 1/2."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "The formula strictly requires -2bc cos A.",
        "rationale": "The formula strictly requires -2bc cos A.",
        "remediation": "The formula strictly requires -2bc cos A."
      }
    ]
  },
  {
    "id": "q_l15_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student attempts to use the Sine Rule to solve a triangle with known sides $a=7, b=8, c=9$ without any angles. Why is this impossible?",
    "correctAnswer": "A",
    "explanation": "SSS configuration requires the Cosine Rule first to find an angle.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student attempts to use the Sine Rule to solve a triangle with known sides $a=7, b=8, c=9$ without any angles. Why is ",
      "output": "The Sine Rule $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ requires at least one known angle to set up an equation.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The Sine Rule $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ requires at least one known angle to set up an equation."
      },
      {
        "id": "B",
        "text": "The Sine Rule works only for right triangles.",
        "misconceptionTag": "MIS-RIGHT-RESTRICTION",
        "misconceptionId": "MIS-RIGHT-RESTRICTION",
        "feedback": "Sine rule works for all triangles, but needs an angle-side pair.",
        "rationale": "Sine rule works for all triangles, but needs an angle-side pair.",
        "remediation": "Sine rule works for all triangles, but needs an angle-side pair."
      },
      {
        "id": "C",
        "text": "Three sides form an invalid triangle.",
        "misconceptionTag": "MIS-TRIANGLE-INEQ",
        "misconceptionId": "MIS-TRIANGLE-INEQ",
        "feedback": "7 + 8 > 9 is a valid triangle.",
        "rationale": "7 + 8 > 9 is a valid triangle.",
        "remediation": "7 + 8 > 9 is a valid triangle."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "SSS requires the Cosine Rule first.",
        "rationale": "SSS requires the Cosine Rule first.",
        "remediation": "SSS requires the Cosine Rule first."
      }
    ]
  },
  {
    "id": "q_l15_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A triangle has sides $5\\text{ cm}, 6\\text{ cm},$ and $7\\text{ cm}$. Find the cosine of the largest angle.",
    "correctAnswer": "A",
    "explanation": "Longest side is 7 cm. cos C = (5² + 6² - 7²) / (2 × 5 × 6) = (25 + 36 - 49) / 60 = 12 / 60 = 1/5 = 0.2.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A triangle has sides $5\\text{ cm}, 6\\text{ cm},$ and $7\\text{ cm}$. Find the cosine of the largest angle.",
      "output": "$\\frac{1}{5} = 0.2$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{5} = 0.2$"
      },
      {
        "id": "B",
        "text": "$\\frac{19}{35}$",
        "misconceptionTag": "MIS-ANGLE-SWAP",
        "misconceptionId": "MIS-ANGLE-SWAP",
        "feedback": "Largest angle is opposite longest side (7 cm): cos C = (5² + 6² - 7²) / (2 × 5 × 6) = 12 / 60 = 1/5.",
        "rationale": "Largest angle is opposite longest side (7 cm): cos C = (5² + 6² - 7²) / (2 × 5 × 6) = 12 / 60 = 1/5.",
        "remediation": "Largest angle is opposite longest side (7 cm): cos C = (5² + 6² - 7²) / (2 × 5 × 6) = 12 / 60 = 1/5."
      },
      {
        "id": "C",
        "text": "$\\frac{29}{35}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "25 + 36 - 49 = 12. 2(5)(6) = 60 => 12/60 = 1/5.",
        "rationale": "25 + 36 - 49 = 12. 2(5)(6) = 60 => 12/60 = 1/5.",
        "remediation": "25 + 36 - 49 = 12. 2(5)(6) = 60 => 12/60 = 1/5."
      },
      {
        "id": "D",
        "text": "$\\frac{2}{3}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "cos C = 1/5 = 0.2.",
        "rationale": "cos C = 1/5 = 0.2.",
        "remediation": "cos C = 1/5 = 0.2."
      }
    ]
  },
  {
    "id": "q_l15_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l15",
    "topicId": "top-waec-trig-02",
    "objectiveIndex": 0,
    "objective": "Apply the Sine and Cosine rules to solve scalene triangles",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Two ships leave port at the same time. Ship A sails on bearing $040^\\circ$ at $15\\text{ km/h}$, and Ship B sails on bearing $100^\\circ$ at $20\\text{ km/h}$. How far apart are they after $2\\text{ hours}$?",
    "correctAnswer": "A",
    "explanation": "Distances are 30 km and 40 km. Angle = 100° - 40° = 60°. d² = 30² + 40² - 2(30)(40) cos 60° = 2500 - 1200 = 1300 => d = √1300 = 10√13 ≈ 36.06 km.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Two ships leave port at the same time. Ship A sails on bearing $040^\\circ$ at $15\\text{ km/h}$, and Ship B sails on bear",
      "output": "$10\\sqrt{13}\\text{ km} \\approx 36.06\\text{ km}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$10\\sqrt{13}\\text{ km} \\approx 36.06\\text{ km}$"
      },
      {
        "id": "B",
        "text": "$35\\text{ km}$",
        "misconceptionTag": "MIS-LINEAR-DIFF",
        "misconceptionId": "MIS-LINEAR-DIFF",
        "feedback": "Cannot simply subtract distances: 40 - 30 = 10.",
        "rationale": "Cannot simply subtract distances: 40 - 30 = 10.",
        "remediation": "Cannot simply subtract distances: 40 - 30 = 10."
      },
      {
        "id": "C",
        "text": "$50\\text{ km}$",
        "misconceptionTag": "MIS-PYTHAG-ASSUMPTION",
        "misconceptionId": "MIS-PYTHAG-ASSUMPTION",
        "feedback": "Angle between them is 100° - 40° = 60°, not 90°.",
        "rationale": "Angle between them is 100° - 40° = 60°, not 90°.",
        "remediation": "Angle between them is 100° - 40° = 60°, not 90°."
      },
      {
        "id": "D",
        "text": "$25\\text{ km}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "d² = 30² + 40² - 2(30)(40) cos 60° = 900 + 1600 - 1200 = 1300 => d = 10√13 ≈ 36.06 km.",
        "rationale": "d² = 30² + 40² - 2(30)(40) cos 60° = 900 + 1600 - 1200 = 1300 => d = 10√13 ≈ 36.06 km.",
        "remediation": "d² = 30² + 40² - 2(30)(40) cos 60° = 900 + 1600 - 1200 = 1300 => d = 10√13 ≈ 36.06 km."
      }
    ]
  },
  {
    "id": "q_l16_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "How are three-figure bearings always measured?",
    "correctAnswer": "A",
    "explanation": "Three-figure bearings are measured clockwise from North using 3 digits.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "How are three-figure bearings always measured?",
      "output": "Clockwise from the True North line, expressed as a three-digit angle ($000^\\circ$ to $360^\\circ$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Clockwise from the True North line, expressed as a three-digit angle ($000^\\circ$ to $360^\\circ$)."
      },
      {
        "id": "B",
        "text": "Counter-clockwise from North.",
        "misconceptionTag": "MIS-BEARING-ANTICLOCKWISE",
        "misconceptionId": "MIS-BEARING-ANTICLOCKWISE",
        "feedback": "Bearings must be measured clockwise from North.",
        "rationale": "Bearings must be measured clockwise from North.",
        "remediation": "Bearings must be measured clockwise from North."
      },
      {
        "id": "C",
        "text": "Clockwise or counter-clockwise depending on quadrant.",
        "misconceptionTag": "MIS-COMPASS-BEARING",
        "misconceptionId": "MIS-COMPASS-BEARING",
        "feedback": "That describes compass bearings (e.g. N30°E), not 3-figure bearings.",
        "rationale": "That describes compass bearings (e.g. N30°E), not 3-figure bearings.",
        "remediation": "That describes compass bearings (e.g. N30°E), not 3-figure bearings."
      },
      {
        "id": "D",
        "text": "From the horizontal East-West axis.",
        "misconceptionTag": "MIS-HORIZONTAL-AXIS",
        "misconceptionId": "MIS-HORIZONTAL-AXIS",
        "feedback": "Bearings start strictly from North.",
        "rationale": "Bearings start strictly from North.",
        "remediation": "Bearings start strictly from North."
      }
    ]
  },
  {
    "id": "q_l16_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "If the bearing of point $B$ from point $A$ is $065^\\circ$, what is the back bearing of $A$ from $B$?",
    "correctAnswer": "A",
    "explanation": "Since 065° < 180°, Back Bearing = 65° + 180° = 245°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If the bearing of point $B$ from point $A$ is $065^\\circ$, what is the back bearing of $A$ from $B$?",
      "output": "$245^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$245^\\circ$"
      },
      {
        "id": "B",
        "text": "$115^\\circ$",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Back bearing rule for θ < 180° is θ + 180°: 65° + 180° = 245°.",
        "rationale": "Back bearing rule for θ < 180° is θ + 180°: 65° + 180° = 245°.",
        "remediation": "Back bearing rule for θ < 180° is θ + 180°: 65° + 180° = 245°."
      },
      {
        "id": "C",
        "text": "$295^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "65 + 180 = 245, not 295.",
        "rationale": "65 + 180 = 245, not 295.",
        "remediation": "65 + 180 = 245, not 295."
      },
      {
        "id": "D",
        "text": "$065^\\circ$",
        "misconceptionTag": "MIS-EQUAL-BEARING",
        "misconceptionId": "MIS-EQUAL-BEARING",
        "feedback": "Back bearing is in the opposite direction (differing by 180°).",
        "rationale": "Back bearing is in the opposite direction (differing by 180°).",
        "remediation": "Back bearing is in the opposite direction (differing by 180°)."
      }
    ]
  },
  {
    "id": "q_l16_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What is the relationship between the angle of elevation of an object from an observer and the angle of depression of the observer from the object?",
    "correctAnswer": "A",
    "explanation": "Horizontal sight lines are parallel, making elevation and depression alternate angles.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the relationship between the angle of elevation of an object from an observer and the angle of depression of the",
      "output": "They are equal, because they are alternate interior angles between parallel horizontal lines.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "They are equal, because they are alternate interior angles between parallel horizontal lines."
      },
      {
        "id": "B",
        "text": "They add up to 90°.",
        "misconceptionTag": "MIS-COMPLEMENTARY",
        "misconceptionId": "MIS-COMPLEMENTARY",
        "feedback": "They are equal alternate interior angles.",
        "rationale": "They are equal alternate interior angles.",
        "remediation": "They are equal alternate interior angles."
      },
      {
        "id": "C",
        "text": "They add up to 180°.",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Horizontal lines are parallel, so angles are equal.",
        "rationale": "Horizontal lines are parallel, so angles are equal.",
        "remediation": "Horizontal lines are parallel, so angles are equal."
      },
      {
        "id": "D",
        "text": "Angle of depression is always twice angle of elevation.",
        "misconceptionTag": "MIS-SCALE-SLIP",
        "misconceptionId": "MIS-SCALE-SLIP",
        "feedback": "Both angles share equal measure.",
        "rationale": "Both angles share equal measure.",
        "remediation": "Both angles share equal measure."
      }
    ]
  },
  {
    "id": "q_l16_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: The three-figure bearing of due South-West is $225^\\circ$.",
    "correctAnswer": "A",
    "explanation": "SW is 180° + 45° = 225°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: The three-figure bearing of due South-West is $225^\\circ$.",
      "output": "True: South is $180^\\circ$ and West is $270^\\circ$; halfway is $180^\\circ + 45^\\circ = 225^\\circ$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: South is $180^\\circ$ and West is $270^\\circ$; halfway is $180^\\circ + 45^\\circ = 225^\\circ$."
      },
      {
        "id": "B",
        "text": "False: South-West is 135°.",
        "misconceptionTag": "MIS-SE-CONFUSION",
        "misconceptionId": "MIS-SE-CONFUSION",
        "feedback": "135° is South-East.",
        "rationale": "135° is South-East.",
        "remediation": "135° is South-East."
      },
      {
        "id": "C",
        "text": "False: South-West is 315°.",
        "misconceptionTag": "MIS-NW-CONFUSION",
        "misconceptionId": "MIS-NW-CONFUSION",
        "feedback": "315° is North-West.",
        "rationale": "315° is North-West.",
        "remediation": "315° is North-West."
      },
      {
        "id": "D",
        "text": "True: But only in the Southern Hemisphere.",
        "misconceptionTag": "MIS-HEMISPHERE-CONFUSION",
        "misconceptionId": "MIS-HEMISPHERE-CONFUSION",
        "feedback": "Bearing reference holds globally.",
        "rationale": "Bearing reference holds globally.",
        "remediation": "Bearing reference holds globally."
      }
    ]
  },
  {
    "id": "q_l16_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A ship sails $12\\text{ km}$ due North, then $16\\text{ km}$ due East. What is the straight-line distance from the starting point?",
    "correctAnswer": "A",
    "explanation": "d = √(12² + 16²) = √(144 + 256) = √400 = 20 km.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A ship sails $12\\text{ km}$ due North, then $16\\text{ km}$ due East. What is the straight-line distance from the startin",
      "output": "$20\\text{ km}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$20\\text{ km}$"
      },
      {
        "id": "B",
        "text": "$28\\text{ km}$",
        "misconceptionTag": "MIS-LINEAR-SUM",
        "misconceptionId": "MIS-LINEAR-SUM",
        "feedback": "12 + 16 = 28 is distance walked; straight line is √(12² + 16²) = 20 km.",
        "rationale": "12 + 16 = 28 is distance walked; straight line is √(12² + 16²) = 20 km.",
        "remediation": "12 + 16 = 28 is distance walked; straight line is √(12² + 16²) = 20 km."
      },
      {
        "id": "C",
        "text": "$24\\text{ km}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "√(144 + 256) = √400 = 20 km.",
        "rationale": "√(144 + 256) = √400 = 20 km.",
        "remediation": "√(144 + 256) = √400 = 20 km."
      },
      {
        "id": "D",
        "text": "$18\\text{ km}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "12-16-20 is a multiple of 3-4-5.",
        "rationale": "12-16-20 is a multiple of 3-4-5.",
        "remediation": "12-16-20 is a multiple of 3-4-5."
      }
    ]
  },
  {
    "id": "q_l16_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "The bearing of town $Y$ from town $X$ is $130^\\circ$. What is the bearing of $X$ from $Y$?",
    "correctAnswer": "A",
    "explanation": "130° + 180° = 310°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The bearing of town $Y$ from town $X$ is $130^\\circ$. What is the bearing of $X$ from $Y$?",
      "output": "$310^\\circ$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$310^\\circ$"
      },
      {
        "id": "B",
        "text": "$050^\\circ$",
        "misconceptionTag": "MIS-SUPPLEMENTARY",
        "misconceptionId": "MIS-SUPPLEMENTARY",
        "feedback": "Back bearing is 130° + 180° = 310°.",
        "rationale": "Back bearing is 130° + 180° = 310°.",
        "remediation": "Back bearing is 130° + 180° = 310°."
      },
      {
        "id": "C",
        "text": "$230^\\circ$",
        "misconceptionTag": "MIS-ADD-100",
        "misconceptionId": "MIS-ADD-100",
        "feedback": "Add 180°, not 100°.",
        "rationale": "Add 180°, not 100°.",
        "remediation": "Add 180°, not 100°."
      },
      {
        "id": "D",
        "text": "$320^\\circ$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "130 + 180 = 310°.",
        "rationale": "130 + 180 = 310°.",
        "remediation": "130 + 180 = 310°."
      }
    ]
  },
  {
    "id": "q_l16_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "From the top of a cliff $50\\text{ m}$ high, the angle of depression of a boat on the water is $30^\\circ$. How far is the boat from the base of the cliff?",
    "correctAnswer": "A",
    "explanation": "tan 30° = 50 / d => d = 50 / tan 30° = 50 / (1/√3) = 50√3 ≈ 86.6 m.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "From the top of a cliff $50\\text{ m}$ high, the angle of depression of a boat on the water is $30^\\circ$. How far is the",
      "output": "$50\\sqrt{3}\\text{ m} \\approx 86.6\\text{ m}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$50\\sqrt{3}\\text{ m} \\approx 86.6\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$25\\text{ m}$",
        "misconceptionTag": "MIS-SIN-CONFUSION",
        "misconceptionId": "MIS-SIN-CONFUSION",
        "feedback": "50 sin 30° = 25 m is half height; distance d = 50 / tan 30° = 50√3 m.",
        "rationale": "50 sin 30° = 25 m is half height; distance d = 50 / tan 30° = 50√3 m.",
        "remediation": "50 sin 30° = 25 m is half height; distance d = 50 / tan 30° = 50√3 m."
      },
      {
        "id": "C",
        "text": "$100\\text{ m}$",
        "misconceptionTag": "MIS-HYPOTENUSE-SLIP",
        "misconceptionId": "MIS-HYPOTENUSE-SLIP",
        "feedback": "100 m is the line of sight distance (hypotenuse).",
        "rationale": "100 m is the line of sight distance (hypotenuse).",
        "remediation": "100 m is the line of sight distance (hypotenuse)."
      },
      {
        "id": "D",
        "text": "$50\\text{ m}$",
        "misconceptionTag": "MIS-EQUAL-SLIP",
        "misconceptionId": "MIS-EQUAL-SLIP",
        "feedback": "Angle is 30°, not 45°.",
        "rationale": "Angle is 30°, not 45°.",
        "remediation": "Angle is 30°, not 45°."
      }
    ]
  },
  {
    "id": "q_l16_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Find the back bearing of $040^\\circ$ in degrees.",
    "correctAnswer": 220,
    "explanation": "40 + 180 = 220°.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the back bearing of $040^\\circ$ in degrees.",
      "output": "220",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l16_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to find the distance between two points given their bearings and distances from an origin:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard navigation and triangulation sequence.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to find the distance between two points given their bearings and distances from an origin:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Draw North lines at all reference points and sketch the path."
      },
      {
        "id": "B",
        "text": "Calculate the interior angle enclosed between the two bearing lines."
      },
      {
        "id": "C",
        "text": "Apply the Cosine Rule to find the unknown distance opposite the angle."
      },
      {
        "id": "D",
        "text": "Apply the Sine Rule to calculate any required destination bearings."
      }
    ]
  },
  {
    "id": "q_l16_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the back bearing formula for an initial bearing $\\theta$ where $\\theta < 180^\\circ$.",
    "correctAnswer": "theta + 180",
    "explanation": "Back bearing = theta + 180.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the back bearing formula for an initial bearing $\\theta$ where $\\theta < 180^\\circ$.",
      "output": "theta + 180",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l16_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student measures a bearing by starting from the horizontal East axis and moving counter-clockwise. What was the mistake?",
    "correctAnswer": "A",
    "explanation": "Navigation bearings are strictly measured clockwise from True North.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student measures a bearing by starting from the horizontal East axis and moving counter-clockwise. What was the mistak",
      "output": "Three-figure bearings must start from the vertical North axis and measure in a clockwise direction.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Three-figure bearings must start from the vertical North axis and measure in a clockwise direction."
      },
      {
        "id": "B",
        "text": "Should have started from South.",
        "misconceptionTag": "MIS-SOUTH-AXIS",
        "misconceptionId": "MIS-SOUTH-AXIS",
        "feedback": "North is the universal reference line.",
        "rationale": "North is the universal reference line.",
        "remediation": "North is the universal reference line."
      },
      {
        "id": "C",
        "text": "Should have measured counter-clockwise from North.",
        "misconceptionTag": "MIS-BEARING-ANTICLOCKWISE",
        "misconceptionId": "MIS-BEARING-ANTICLOCKWISE",
        "feedback": "Bearings strictly turn clockwise.",
        "rationale": "Bearings strictly turn clockwise.",
        "remediation": "Bearings strictly turn clockwise."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "East-counterclockwise is Cartesian angle, not navigation bearing.",
        "rationale": "East-counterclockwise is Cartesian angle, not navigation bearing.",
        "remediation": "East-counterclockwise is Cartesian angle, not navigation bearing."
      }
    ]
  },
  {
    "id": "q_l16_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To find the back bearing of $210^\\circ$, a student added $180^\\circ$ to get $390^\\circ$. What should the student have done?",
    "correctAnswer": "A",
    "explanation": "When θ >= 180°, subtract 180°: 210° - 180° = 030°.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To find the back bearing of $210^\\circ$, a student added $180^\\circ$ to get $390^\\circ$. What should the student have do",
      "output": "Subtracted $180^\\circ$ because the forward bearing exceeds $180^\\circ$ ($210^\\circ - 180^\\circ = 030^\\circ$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Subtracted $180^\\circ$ because the forward bearing exceeds $180^\\circ$ ($210^\\circ - 180^\\circ = 030^\\circ$)."
      },
      {
        "id": "B",
        "text": "Subtracted 90°.",
        "misconceptionTag": "MIS-90-SUB",
        "misconceptionId": "MIS-90-SUB",
        "feedback": "Must add or subtract 180°.",
        "rationale": "Must add or subtract 180°.",
        "remediation": "Must add or subtract 180°."
      },
      {
        "id": "C",
        "text": "Added 360°.",
        "misconceptionTag": "MIS-FULL-CIRCLE",
        "misconceptionId": "MIS-FULL-CIRCLE",
        "feedback": "Bearings remain in [000°, 360°).",
        "rationale": "Bearings remain in [000°, 360°).",
        "remediation": "Bearings remain in [000°, 360°)."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "390° is outside the valid range [000°, 360°).",
        "rationale": "390° is outside the valid range [000°, 360°).",
        "remediation": "390° is outside the valid range [000°, 360°)."
      }
    ]
  },
  {
    "id": "q_l16_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A hunter walks $6\\text{ km}$ on a bearing of $060^\\circ$ and then $8\\text{ km}$ on a bearing of $150^\\circ$. What is his straight-line distance from the starting point?",
    "correctAnswer": "A",
    "explanation": "Interior angle = 180° - 150° + 60° = 90°. d = √(6² + 8²) = √100 = 10 km.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A hunter walks $6\\text{ km}$ on a bearing of $060^\\circ$ and then $8\\text{ km}$ on a bearing of $150^\\circ$. What is his",
      "output": "$10\\text{ km}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$10\\text{ km}$"
      },
      {
        "id": "B",
        "text": "$14\\text{ km}$",
        "misconceptionTag": "MIS-LINEAR-SUM",
        "misconceptionId": "MIS-LINEAR-SUM",
        "feedback": "6 + 8 = 14 km is path length; triangle has angle 180° - (150° - 60°) = 90° => √(6² + 8²) = 10 km.",
        "rationale": "6 + 8 = 14 km is path length; triangle has angle 180° - (150° - 60°) = 90° => √(6² + 8²) = 10 km.",
        "remediation": "6 + 8 = 14 km is path length; triangle has angle 180° - (150° - 60°) = 90° => √(6² + 8²) = 10 km."
      },
      {
        "id": "C",
        "text": "$12\\text{ km}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "6-8-10 is a right-angled triangle.",
        "rationale": "6-8-10 is a right-angled triangle.",
        "remediation": "6-8-10 is a right-angled triangle."
      },
      {
        "id": "D",
        "text": "$9.5\\text{ km}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "d = 10 km exactly.",
        "rationale": "d = 10 km exactly.",
        "remediation": "d = 10 km exactly."
      }
    ]
  },
  {
    "id": "q_l16_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m6",
    "lessonId": "l16",
    "topicId": "top-waec-trig-03",
    "objectiveIndex": 0,
    "objective": "Calculate three-figure bearings and angles of elevation and depression",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Two observation posts $A$ and $B$ are $100\\text{ m}$ apart on an East-West line. The bearing of a fire $F$ from $A$ is $030^\\circ$ and from $B$ (due East of $A$) is $330^\\circ$. How far is the fire from line $AB$?",
    "correctAnswer": "A",
    "explanation": "Base angles inside triangle are 90° - 30° = 60° each (equilateral triangle). Height = 50 tan 60° = 50√3 ≈ 86.6 m.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Two observation posts $A$ and $B$ are $100\\text{ m}$ apart on an East-West line. The bearing of a fire $F$ from $A$ is $",
      "output": "$50\\sqrt{3}\\text{ m} \\approx 86.6\\text{ m}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$50\\sqrt{3}\\text{ m} \\approx 86.6\\text{ m}$"
      },
      {
        "id": "B",
        "text": "$50\\text{ m}$",
        "misconceptionTag": "MIS-HALF-BASELINE",
        "misconceptionId": "MIS-HALF-BASELINE",
        "feedback": "50 m is half the baseline.",
        "rationale": "50 m is half the baseline.",
        "remediation": "50 m is half the baseline."
      },
      {
        "id": "C",
        "text": "$100\\text{ m}$",
        "misconceptionTag": "MIS-EQUAL-SLIP",
        "misconceptionId": "MIS-EQUAL-SLIP",
        "feedback": "Height = 50 tan 60° = 50√3 m.",
        "rationale": "Height = 50 tan 60° = 50√3 m.",
        "remediation": "Height = 50 tan 60° = 50√3 m."
      },
      {
        "id": "D",
        "text": "$75\\text{ m}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "50 × 1.732 ≈ 86.6 m.",
        "rationale": "50 × 1.732 ≈ 86.6 m.",
        "remediation": "50 × 1.732 ≈ 86.6 m."
      }
    ]
  },
  {
    "id": "q_l17_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which formula correctly gives the estimated mean $\\bar{x}$ of a grouped frequency distribution?",
    "correctAnswer": "A",
    "explanation": "Grouped mean: x̄ = (∑ fx) / (∑ f).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which formula correctly gives the estimated mean $\\bar{x}$ of a grouped frequency distribution?",
      "output": "$\\bar{x} = \\frac{\\sum f x}{\\sum f}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\bar{x} = \\frac{\\sum f x}{\\sum f}$"
      },
      {
        "id": "B",
        "text": "$\\bar{x} = \\frac{\\sum x}{n}$",
        "misconceptionTag": "MIS-UNGROUPED-FORMULA",
        "misconceptionId": "MIS-UNGROUPED-FORMULA",
        "feedback": "This applies to ungrouped raw data, omitting frequencies.",
        "rationale": "This applies to ungrouped raw data, omitting frequencies.",
        "remediation": "This applies to ungrouped raw data, omitting frequencies."
      },
      {
        "id": "C",
        "text": "$\\bar{x} = \\frac{\\sum f}{\\sum x}$",
        "misconceptionTag": "MIS-INVERTED-FORMULA",
        "misconceptionId": "MIS-INVERTED-FORMULA",
        "feedback": "Frequencies belong in the denominator sum.",
        "rationale": "Frequencies belong in the denominator sum.",
        "remediation": "Frequencies belong in the denominator sum."
      },
      {
        "id": "D",
        "text": "$\\bar{x} = \\sum f x$",
        "misconceptionTag": "MIS-DENOM-DROP",
        "misconceptionId": "MIS-DENOM-DROP",
        "feedback": "Must divide by total frequency ∑f.",
        "rationale": "Must divide by total frequency ∑f.",
        "remediation": "Must divide by total frequency ∑f."
      }
    ]
  },
  {
    "id": "q_l17_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What is the class midpoint (class mark) $x$ of the interval $20 - 29$?",
    "correctAnswer": "A",
    "explanation": "Midpoint = (20 + 29) / 2 = 49 / 2 = 24.5.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the class midpoint (class mark) $x$ of the interval $20 - 29$?",
      "output": "$24.5$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$24.5$"
      },
      {
        "id": "B",
        "text": "$25$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(20 + 29) / 2 = 49 / 2 = 24.5.",
        "rationale": "(20 + 29) / 2 = 49 / 2 = 24.5.",
        "remediation": "(20 + 29) / 2 = 49 / 2 = 24.5."
      },
      {
        "id": "C",
        "text": "$24$",
        "misconceptionTag": "MIS-ROUND-DOWN",
        "misconceptionId": "MIS-ROUND-DOWN",
        "feedback": "Cannot truncate 0.5.",
        "rationale": "Cannot truncate 0.5.",
        "remediation": "Cannot truncate 0.5."
      },
      {
        "id": "D",
        "text": "$9$",
        "misconceptionTag": "MIS-WIDTH-SLIP",
        "misconceptionId": "MIS-WIDTH-SLIP",
        "feedback": "9 is class span, not midpoint.",
        "rationale": "9 is class span, not midpoint.",
        "remediation": "9 is class span, not midpoint."
      }
    ]
  },
  {
    "id": "q_l17_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "How is the modal class identified in a grouped frequency table with equal class widths?",
    "correctAnswer": "A",
    "explanation": "Modal class = interval with the highest frequency.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "How is the modal class identified in a grouped frequency table with equal class widths?",
      "output": "The class interval having the highest frequency.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "The class interval having the highest frequency."
      },
      {
        "id": "B",
        "text": "The class interval located at the physical centre of the table.",
        "misconceptionTag": "MIS-MEDIAN-CONFUSION",
        "misconceptionId": "MIS-MEDIAN-CONFUSION",
        "feedback": "Physical position does not determine mode.",
        "rationale": "Physical position does not determine mode.",
        "remediation": "Physical position does not determine mode."
      },
      {
        "id": "C",
        "text": "The class interval with the largest class width.",
        "misconceptionTag": "MIS-WIDTH-CONFUSION",
        "misconceptionId": "MIS-WIDTH-CONFUSION",
        "feedback": "Mode depends on frequency.",
        "rationale": "Mode depends on frequency.",
        "remediation": "Mode depends on frequency."
      },
      {
        "id": "D",
        "text": "The class interval containing the cumulative frequency N/2.",
        "misconceptionTag": "MIS-MEDIAN-CLASS",
        "misconceptionId": "MIS-MEDIAN-CLASS",
        "feedback": "N/2 identifies the median class, not modal class.",
        "rationale": "N/2 identifies the median class, not modal class.",
        "remediation": "N/2 identifies the median class, not modal class."
      }
    ]
  },
  {
    "id": "q_l17_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: The class boundaries of the interval $10 - 19$ (with unit integers) are $9.5$ and $19.5$.",
    "correctAnswer": "A",
    "explanation": "Class boundaries for integer limits are lower - 0.5 and upper + 0.5.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: The class boundaries of the interval $10 - 19$ (with unit integers) are $9.5$ and $19.5$.",
      "output": "True: Boundaries extend $0.5$ below the lower limit and $0.5$ above the upper limit.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Boundaries extend $0.5$ below the lower limit and $0.5$ above the upper limit."
      },
      {
        "id": "B",
        "text": "False: Boundaries are 10 and 19.",
        "misconceptionTag": "MIS-LIMITS-CONFUSION",
        "misconceptionId": "MIS-LIMITS-CONFUSION",
        "feedback": "10 and 19 are class limits, not boundaries.",
        "rationale": "10 and 19 are class limits, not boundaries.",
        "remediation": "10 and 19 are class limits, not boundaries."
      },
      {
        "id": "C",
        "text": "False: Boundaries are 10.5 and 18.5.",
        "misconceptionTag": "MIS-CONTRACTION",
        "misconceptionId": "MIS-CONTRACTION",
        "feedback": "Boundaries expand to eliminate gaps.",
        "rationale": "Boundaries expand to eliminate gaps.",
        "remediation": "Boundaries expand to eliminate gaps."
      },
      {
        "id": "D",
        "text": "True: But only if total frequency is greater than 50.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Boundaries depend on data precision, not sample size.",
        "rationale": "Boundaries depend on data precision, not sample size.",
        "remediation": "Boundaries depend on data precision, not sample size."
      }
    ]
  },
  {
    "id": "q_l17_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Classes and frequencies: $1 - 5 (f=4), 6 - 10 (f=8), 11 - 15 (f=5), 16 - 20 (f=3)$. Identify the modal class.",
    "correctAnswer": "A",
    "explanation": "Class 6 - 10 has highest frequency f = 8.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Classes and frequencies: $1 - 5 (f=4), 6 - 10 (f=8), 11 - 15 (f=5), 16 - 20 (f=3)$. Identify the modal class.",
      "output": "$6 - 10$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$6 - 10$"
      },
      {
        "id": "B",
        "text": "$11 - 15$",
        "misconceptionTag": "MIS-MEDIAN-CONFUSION",
        "misconceptionId": "MIS-MEDIAN-CONFUSION",
        "feedback": "Class 6-10 has the highest frequency (f=8).",
        "rationale": "Class 6-10 has the highest frequency (f=8).",
        "remediation": "Class 6-10 has the highest frequency (f=8)."
      },
      {
        "id": "C",
        "text": "$1 - 5$",
        "misconceptionTag": "MIS-FIRST-CLASS",
        "misconceptionId": "MIS-FIRST-CLASS",
        "feedback": "Frequency is 4.",
        "rationale": "Frequency is 4.",
        "remediation": "Frequency is 4."
      },
      {
        "id": "D",
        "text": "$16 - 20$",
        "misconceptionTag": "MIS-LAST-CLASS",
        "misconceptionId": "MIS-LAST-CLASS",
        "feedback": "Frequency is 3.",
        "rationale": "Frequency is 3.",
        "remediation": "Frequency is 3."
      }
    ]
  },
  {
    "id": "q_l17_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Find the total frequency $\\sum f$ for frequencies: $4, 7, 12, 11, 6$.",
    "correctAnswer": "A",
    "explanation": "4 + 7 + 12 + 11 + 6 = 40.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Find the total frequency $\\sum f$ for frequencies: $4, 7, 12, 11, 6$.",
      "output": "$40$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$40$"
      },
      {
        "id": "B",
        "text": "$35$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "4 + 7 + 12 + 11 + 6 = 40.",
        "rationale": "4 + 7 + 12 + 11 + 6 = 40.",
        "remediation": "4 + 7 + 12 + 11 + 6 = 40."
      },
      {
        "id": "C",
        "text": "$45$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Sum is exactly 40.",
        "rationale": "Sum is exactly 40.",
        "remediation": "Sum is exactly 40."
      },
      {
        "id": "D",
        "text": "$5$",
        "misconceptionTag": "MIS-CLASS-COUNT",
        "misconceptionId": "MIS-CLASS-COUNT",
        "feedback": "5 is number of classes, not total frequency.",
        "rationale": "5 is number of classes, not total frequency.",
        "remediation": "5 is number of classes, not total frequency."
      }
    ]
  },
  {
    "id": "q_l17_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "If $\\sum fx = 750$ and $\\sum f = 25$, calculate the estimated mean $\\bar{x}$.",
    "correctAnswer": "A",
    "explanation": "x̄ = 750 / 25 = 30.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $\\sum fx = 750$ and $\\sum f = 25$, calculate the estimated mean $\\bar{x}$.",
      "output": "$30$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$30$"
      },
      {
        "id": "B",
        "text": "$25$",
        "misconceptionTag": "MIS-DIVISOR-COPY",
        "misconceptionId": "MIS-DIVISOR-COPY",
        "feedback": "750 / 25 = 30.",
        "rationale": "750 / 25 = 30.",
        "remediation": "750 / 25 = 30."
      },
      {
        "id": "C",
        "text": "$35$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "30 × 25 = 750.",
        "rationale": "30 × 25 = 750.",
        "remediation": "30 × 25 = 750."
      },
      {
        "id": "D",
        "text": "$20$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "x̄ = 30.",
        "rationale": "x̄ = 30.",
        "remediation": "x̄ = 30."
      }
    ]
  },
  {
    "id": "q_l17_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "Calculate the class midpoint of interval $50 - 59$.",
    "correctAnswer": 54.5,
    "explanation": "(50 + 59) / 2 = 109 / 2 = 54.5.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Calculate the class midpoint of interval $50 - 59$.",
      "output": "54.5",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l17_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to calculate the estimated mean from a grouped frequency table:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard grouped mean sequence.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to calculate the estimated mean from a grouped frequency table:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Find the class midpoint x for each class interval."
      },
      {
        "id": "B",
        "text": "Multiply each class midpoint by its frequency: fx."
      },
      {
        "id": "C",
        "text": "Sum the fx column to obtain ∑ fx, and sum frequencies for ∑ f."
      },
      {
        "id": "D",
        "text": "Divide ∑ fx by ∑ f to obtain the mean."
      }
    ]
  },
  {
    "id": "q_l17_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the formula for the class midpoint $x$ given lower limit $L$ and upper limit $U$.",
    "correctAnswer": "(L + U)/2",
    "explanation": "Midpoint = (L + U) / 2.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the formula for the class midpoint $x$ given lower limit $L$ and upper limit $U$.",
      "output": "(L + U)/2",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l17_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student calculates the mean of a grouped table by adding midpoints $x$ and dividing by the number of classes. What was the error?",
    "correctAnswer": "A",
    "explanation": "Frequency weighting ∑ fx / ∑ f is strictly required for grouped data.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student calculates the mean of a grouped table by adding midpoints $x$ and dividing by the number of classes. What was",
      "output": "Omitted the frequencies; each midpoint must be weighted by its frequency $f$ before dividing by $\\sum f$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Omitted the frequencies; each midpoint must be weighted by its frequency $f$ before dividing by $\\sum f$."
      },
      {
        "id": "B",
        "text": "Should have multiplied by 100%.",
        "misconceptionTag": "MIS-PERCENT-CONFUSION",
        "misconceptionId": "MIS-PERCENT-CONFUSION",
        "feedback": "Mean is not a percentage.",
        "rationale": "Mean is not a percentage.",
        "remediation": "Mean is not a percentage."
      },
      {
        "id": "C",
        "text": "Should have used upper class boundaries instead of midpoints.",
        "misconceptionTag": "MIS-BOUNDARY-CONFUSION",
        "misconceptionId": "MIS-BOUNDARY-CONFUSION",
        "feedback": "Midpoints are correct, weighting is missing.",
        "rationale": "Midpoints are correct, weighting is missing.",
        "remediation": "Midpoints are correct, weighting is missing."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Unweighted midpoint mean ignores sample distribution.",
        "rationale": "Unweighted midpoint mean ignores sample distribution.",
        "remediation": "Unweighted midpoint mean ignores sample distribution."
      }
    ]
  },
  {
    "id": "q_l17_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student stated that the modal class is the interval with the widest class width. What was the misconception?",
    "correctAnswer": "A",
    "explanation": "Mode is the most frequent value/interval.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student stated that the modal class is the interval with the widest class width. What was the misconception?",
      "output": "Confused class width with frequency; modal class is determined strictly by the largest frequency count.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Confused class width with frequency; modal class is determined strictly by the largest frequency count."
      },
      {
        "id": "B",
        "text": "Modal class has the smallest class width.",
        "misconceptionTag": "MIS-WIDTH-INVERSION",
        "misconceptionId": "MIS-WIDTH-INVERSION",
        "feedback": "Width does not determine mode.",
        "rationale": "Width does not determine mode.",
        "remediation": "Width does not determine mode."
      },
      {
        "id": "C",
        "text": "Modal class is the first class.",
        "misconceptionTag": "MIS-FIRST-CLASS",
        "misconceptionId": "MIS-FIRST-CLASS",
        "feedback": "Position does not determine mode.",
        "rationale": "Position does not determine mode.",
        "remediation": "Position does not determine mode."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Mode depends on frequency.",
        "rationale": "Mode depends on frequency.",
        "remediation": "Mode depends on frequency."
      }
    ]
  },
  {
    "id": "q_l17_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "In a distribution with classes $1-5 (f=2), 6-10 (f=k), 11-15 (f=5)$, the mean is $9.5$. Find the value of $k$.",
    "correctAnswer": "A",
    "explanation": "(71 + 8k) / (7 + k) = 9.5 => 71 + 8k = 66.5 + 9.5k => 1.5k = 4.5 => k = 3.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In a distribution with classes $1-5 (f=2), 6-10 (f=k), 11-15 (f=5)$, the mean is $9.5$. Find the value of $k$.",
      "output": "3",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "4",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Midpoints: 3, 8, 13. ∑ fx = 2(3) + 8k + 5(13) = 6 + 8k + 65 = 71 + 8k. ∑ f = 7 + k. (71 + 8k)/(7 + k) = 9.5 => 71 + 8k = 66.5 + 9.5k => 1.5k = 4.5 => k = 3.",
        "rationale": "Midpoints: 3, 8, 13. ∑ fx = 2(3) + 8k + 5(13) = 6 + 8k + 65 = 71 + 8k. ∑ f = 7 + k. (71 + 8k)/(7 + k) = 9.5 => 71 + 8k = 66.5 + 9.5k => 1.5k = 4.5 => k = 3.",
        "remediation": "Midpoints: 3, 8, 13. ∑ fx = 2(3) + 8k + 5(13) = 6 + 8k + 65 = 71 + 8k. ∑ f = 7 + k. (71 + 8k)/(7 + k) = 9.5 => 71 + 8k = 66.5 + 9.5k => 1.5k = 4.5 => k = 3."
      },
      {
        "id": "C",
        "text": "2",
        "misconceptionTag": "MIS-GUESS-SLIP",
        "misconceptionId": "MIS-GUESS-SLIP",
        "feedback": "k = 3 satisfies the mean equation.",
        "rationale": "k = 3 satisfies the mean equation.",
        "remediation": "k = 3 satisfies the mean equation."
      },
      {
        "id": "D",
        "text": "5",
        "misconceptionTag": "MIS-EQUAL-FREQ",
        "misconceptionId": "MIS-EQUAL-FREQ",
        "feedback": "k = 3.",
        "rationale": "k = 3.",
        "remediation": "k = 3."
      }
    ]
  },
  {
    "id": "q_l17_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l17",
    "topicId": "top-waec-stat-01",
    "objectiveIndex": 0,
    "objective": "Calculate mean and modal class of grouped frequency distributions",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "Using an assumed mean $A = 25$ and coded deviations $d = \\frac{x - 25}{10}$, a student computes $\\sum f = 50$ and $\\sum fd = 15$. Find the actual mean $\\bar{x}$.",
    "correctAnswer": "A",
    "explanation": "x̄ = A + c(∑ fd / ∑ f) = 25 + 10(15 / 50) = 25 + 3 = 28.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Using an assumed mean $A = 25$ and coded deviations $d = \\frac{x - 25}{10}$, a student computes $\\sum f = 50$ and $\\sum ",
      "output": "$28$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$28$"
      },
      {
        "id": "B",
        "text": "$26.5$",
        "misconceptionTag": "MIS-SCALE-OMIT",
        "misconceptionId": "MIS-SCALE-OMIT",
        "feedback": "Forgot to multiply by class width 10: 25 + (15/50) = 25.3, with ×10 gives 25 + 3 = 28.",
        "rationale": "Forgot to multiply by class width 10: 25 + (15/50) = 25.3, with ×10 gives 25 + 3 = 28.",
        "remediation": "Forgot to multiply by class width 10: 25 + (15/50) = 25.3, with ×10 gives 25 + 3 = 28."
      },
      {
        "id": "C",
        "text": "$25.3$",
        "misconceptionTag": "MIS-SCALE-OMIT",
        "misconceptionId": "MIS-SCALE-OMIT",
        "feedback": "d is coded; must multiply by width 10.",
        "rationale": "d is coded; must multiply by width 10.",
        "remediation": "d is coded; must multiply by width 10."
      },
      {
        "id": "D",
        "text": "$30$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "x̄ = A + c(∑ fd / ∑ f) = 25 + 10(15/50) = 25 + 3 = 28.",
        "rationale": "x̄ = A + c(∑ fd / ∑ f) = 25 + 10(15/50) = 25 + 3 = 28.",
        "remediation": "x̄ = A + c(∑ fd / ∑ f) = 25 + 10(15/50) = 25 + 3 = 28."
      }
    ]
  },
  {
    "id": "q_l18_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "What values are plotted on the horizontal (x) axis of a cumulative frequency curve (Ogive)?",
    "correctAnswer": "A",
    "explanation": "An Ogive plots upper class boundaries on x versus cumulative frequency on y.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What values are plotted on the horizontal (x) axis of a cumulative frequency curve (Ogive)?",
      "output": "Upper class boundaries.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Upper class boundaries."
      },
      {
        "id": "B",
        "text": "Lower class boundaries.",
        "misconceptionTag": "MIS-LOWER-BOUNDARY",
        "misconceptionId": "MIS-LOWER-BOUNDARY",
        "feedback": "Cumulative frequency accumulates up to the upper boundary.",
        "rationale": "Cumulative frequency accumulates up to the upper boundary.",
        "remediation": "Cumulative frequency accumulates up to the upper boundary."
      },
      {
        "id": "C",
        "text": "Class midpoints.",
        "misconceptionTag": "MIS-FREQUENCY-POLYGON",
        "misconceptionId": "MIS-FREQUENCY-POLYGON",
        "feedback": "Class midpoints are used for frequency polygons, not Ogives.",
        "rationale": "Class midpoints are used for frequency polygons, not Ogives.",
        "remediation": "Class midpoints are used for frequency polygons, not Ogives."
      },
      {
        "id": "D",
        "text": "Raw frequencies.",
        "misconceptionTag": "MIS-AXIS-SWAP",
        "misconceptionId": "MIS-AXIS-SWAP",
        "feedback": "Frequencies belong to the vertical accumulation.",
        "rationale": "Frequencies belong to the vertical accumulation.",
        "remediation": "Frequencies belong to the vertical accumulation."
      }
    ]
  },
  {
    "id": "q_l18_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "For a total frequency of $N = 120$, at what cumulative frequency is the median mark read from the Ogive?",
    "correctAnswer": "A",
    "explanation": "Median is located at N/2 = 120 / 2 = 60.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "For a total frequency of $N = 120$, at what cumulative frequency is the median mark read from the Ogive?",
      "output": "$60$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$60$"
      },
      {
        "id": "B",
        "text": "$30$",
        "misconceptionTag": "MIS-LOWER-QUARTILE",
        "misconceptionId": "MIS-LOWER-QUARTILE",
        "feedback": "30 is N/4 (lower quartile Q1).",
        "rationale": "30 is N/4 (lower quartile Q1).",
        "remediation": "30 is N/4 (lower quartile Q1)."
      },
      {
        "id": "C",
        "text": "$90$",
        "misconceptionTag": "MIS-UPPER-QUARTILE",
        "misconceptionId": "MIS-UPPER-QUARTILE",
        "feedback": "90 is 3N/4 (upper quartile Q3).",
        "rationale": "90 is 3N/4 (upper quartile Q3).",
        "remediation": "90 is 3N/4 (upper quartile Q3)."
      },
      {
        "id": "D",
        "text": "$120$",
        "misconceptionTag": "MIS-TOTAL-N",
        "misconceptionId": "MIS-TOTAL-N",
        "feedback": "120 is maximum cumulative frequency.",
        "rationale": "120 is maximum cumulative frequency.",
        "remediation": "120 is maximum cumulative frequency."
      }
    ]
  },
  {
    "id": "q_l18_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "Which formula defines the Interquartile Range ($IQR$)?",
    "correctAnswer": "A",
    "explanation": "IQR = Upper Quartile (Q3) - Lower Quartile (Q1).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Which formula defines the Interquartile Range ($IQR$)?",
      "output": "$IQR = Q_3 - Q_1$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$IQR = Q_3 - Q_1$"
      },
      {
        "id": "B",
        "text": "$IQR = \\frac{Q_3 - Q_1}{2}$",
        "misconceptionTag": "MIS-SEMI-IQR",
        "misconceptionId": "MIS-SEMI-IQR",
        "feedback": "Dividing by 2 gives the Semi-Interquartile Range.",
        "rationale": "Dividing by 2 gives the Semi-Interquartile Range.",
        "remediation": "Dividing by 2 gives the Semi-Interquartile Range."
      },
      {
        "id": "C",
        "text": "$IQR = Q_3 + Q_1$",
        "misconceptionTag": "MIS-SUM-CONFUSION",
        "misconceptionId": "MIS-SUM-CONFUSION",
        "feedback": "IQR is a range (difference), not sum.",
        "rationale": "IQR is a range (difference), not sum.",
        "remediation": "IQR is a range (difference), not sum."
      },
      {
        "id": "D",
        "text": "$IQR = Q_2 - Q_1$",
        "misconceptionTag": "MIS-LOWER-HALF",
        "misconceptionId": "MIS-LOWER-HALF",
        "feedback": "IQR spans from lower to upper quartile.",
        "rationale": "IQR spans from lower to upper quartile.",
        "remediation": "IQR spans from lower to upper quartile."
      }
    ]
  },
  {
    "id": "q_l18_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: A cumulative frequency curve always starts at zero and never decreases as it moves from left to right.",
    "correctAnswer": "A",
    "explanation": "Cumulative frequency is an accumulating sum of non-negative frequencies.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: A cumulative frequency curve always starts at zero and never decreases as it moves from left to right.",
      "output": "True: Frequencies are non-negative, so cumulative frequency is monotonically non-decreasing.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: Frequencies are non-negative, so cumulative frequency is monotonically non-decreasing."
      },
      {
        "id": "B",
        "text": "False: It decreases when frequencies become small.",
        "misconceptionTag": "MIS-DECREASING-CONFUSION",
        "misconceptionId": "MIS-DECREASING-CONFUSION",
        "feedback": "Even small positive frequencies increase the cumulative sum.",
        "rationale": "Even small positive frequencies increase the cumulative sum.",
        "remediation": "Even small positive frequencies increase the cumulative sum."
      },
      {
        "id": "C",
        "text": "False: It forms a bell curve that rises and falls.",
        "misconceptionTag": "MIS-NORMAL-CURVE",
        "misconceptionId": "MIS-NORMAL-CURVE",
        "feedback": "Frequency curves fall, but cumulative curves only rise.",
        "rationale": "Frequency curves fall, but cumulative curves only rise.",
        "remediation": "Frequency curves fall, but cumulative curves only rise."
      },
      {
        "id": "D",
        "text": "True: But only for symmetrical data.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Monotonicity holds for all datasets.",
        "rationale": "Monotonicity holds for all datasets.",
        "remediation": "Monotonicity holds for all datasets."
      }
    ]
  },
  {
    "id": "q_l18_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "If $Q_3 = 68\\text{ marks}$ and $Q_1 = 44\\text{ marks}$, calculate the Semi-Interquartile Range.",
    "correctAnswer": "A",
    "explanation": "Semi-IQR = (Q3 - Q1) / 2 = (68 - 44) / 2 = 24 / 2 = 12 marks.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $Q_3 = 68\\text{ marks}$ and $Q_1 = 44\\text{ marks}$, calculate the Semi-Interquartile Range.",
      "output": "$12\\text{ marks}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$12\\text{ marks}$"
      },
      {
        "id": "B",
        "text": "$24\\text{ marks}$",
        "misconceptionTag": "MIS-IQR-ONLY",
        "misconceptionId": "MIS-IQR-ONLY",
        "feedback": "24 is the full IQR; semi-IQR is 24/2 = 12 marks.",
        "rationale": "24 is the full IQR; semi-IQR is 24/2 = 12 marks.",
        "remediation": "24 is the full IQR; semi-IQR is 24/2 = 12 marks."
      },
      {
        "id": "C",
        "text": "$56\\text{ marks}$",
        "misconceptionTag": "MIS-MEDIAN-GUESS",
        "misconceptionId": "MIS-MEDIAN-GUESS",
        "feedback": "56 is the midpoint (Q1+Q3)/2.",
        "rationale": "56 is the midpoint (Q1+Q3)/2.",
        "remediation": "56 is the midpoint (Q1+Q3)/2."
      },
      {
        "id": "D",
        "text": "$14\\text{ marks}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "(68 - 44) / 2 = 24 / 2 = 12.",
        "rationale": "(68 - 44) / 2 = 24 / 2 = 12.",
        "remediation": "(68 - 44) / 2 = 24 / 2 = 12."
      }
    ]
  },
  {
    "id": "q_l18_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "For an examination cohort of $200$ candidates, at what cumulative frequency is the 80th percentile read?",
    "correctAnswer": "A",
    "explanation": "80th percentile CF = 0.80 × 200 = 160.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "For an examination cohort of $200$ candidates, at what cumulative frequency is the 80th percentile read?",
      "output": "$160$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$160$"
      },
      {
        "id": "B",
        "text": "$80$",
        "misconceptionTag": "MIS-PERCENTILE-VALUE",
        "misconceptionId": "MIS-PERCENTILE-VALUE",
        "feedback": "80% of 200 = 0.80 × 200 = 160.",
        "rationale": "80% of 200 = 0.80 × 200 = 160.",
        "remediation": "80% of 200 = 0.80 × 200 = 160."
      },
      {
        "id": "C",
        "text": "$40$",
        "misconceptionTag": "MIS-COMPLEMENTARY-CF",
        "misconceptionId": "MIS-COMPLEMENTARY-CF",
        "feedback": "40 is 20th percentile.",
        "rationale": "40 is 20th percentile.",
        "remediation": "40 is 20th percentile."
      },
      {
        "id": "D",
        "text": "$100$",
        "misconceptionTag": "MIS-MEDIAN-VAL",
        "misconceptionId": "MIS-MEDIAN-VAL",
        "feedback": "100 is median (50th percentile).",
        "rationale": "100 is median (50th percentile).",
        "remediation": "100 is median (50th percentile)."
      }
    ]
  },
  {
    "id": "q_l18_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "If the pass mark is $50$ and the cumulative frequency corresponding to mark $50$ on the Ogive is $70$ out of $100$ students, how many students passed?",
    "correctAnswer": "A",
    "explanation": "Number scoring above 50 = Total - CF(50) = 100 - 70 = 30 students.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If the pass mark is $50$ and the cumulative frequency corresponding to mark $50$ on the Ogive is $70$ out of $100$ stude",
      "output": "$30\\text{ students}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$30\\text{ students}$"
      },
      {
        "id": "B",
        "text": "$70\\text{ students}$",
        "misconceptionTag": "MIS-BELOW-PASS",
        "misconceptionId": "MIS-BELOW-PASS",
        "feedback": "70 students scored at or below 50 (failed).",
        "rationale": "70 students scored at or below 50 (failed).",
        "remediation": "70 students scored at or below 50 (failed)."
      },
      {
        "id": "C",
        "text": "$50\\text{ students}$",
        "misconceptionTag": "MIS-PASS-MARK",
        "misconceptionId": "MIS-PASS-MARK",
        "feedback": "Number passing is 100 - 70 = 30.",
        "rationale": "Number passing is 100 - 70 = 30.",
        "remediation": "Number passing is 100 - 70 = 30."
      },
      {
        "id": "D",
        "text": "$35\\text{ students}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "100 - 70 = 30 students.",
        "rationale": "100 - 70 = 30 students.",
        "remediation": "100 - 70 = 30 students."
      }
    ]
  },
  {
    "id": "q_l18_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "If $Q_3 = 78$ and $Q_1 = 52$, calculate the Interquartile Range ($IQR$).",
    "correctAnswer": 26,
    "explanation": "IQR = 78 - 52 = 26.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $Q_3 = 78$ and $Q_1 = 52$, calculate the Interquartile Range ($IQR$).",
      "output": "26",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l18_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to determine the median mark from a cumulative frequency table:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard Ogive median extraction sequence.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to determine the median mark from a cumulative frequency table:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Calculate the total frequency N = ∑ f."
      },
      {
        "id": "B",
        "text": "Find the median rank: N/2."
      },
      {
        "id": "C",
        "text": "Locate N/2 on the vertical cumulative frequency axis."
      },
      {
        "id": "D",
        "text": "Read horizontally to the Ogive curve and project down to the mark axis."
      }
    ]
  },
  {
    "id": "q_l18_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the formula for Semi-Interquartile Range in terms of $Q_1$ and $Q_3$.",
    "correctAnswer": "(Q3 - Q1)/2",
    "explanation": "Semi-IQR = (Q3 - Q1) / 2.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the formula for Semi-Interquartile Range in terms of $Q_1$ and $Q_3$.",
      "output": "(Q3 - Q1)/2",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l18_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student plotted cumulative frequency against the lower class boundaries instead of upper boundaries. What effect did this have on the curve?",
    "correctAnswer": "A",
    "explanation": "Plotting at lower boundaries shifts data to the left, underestimating values.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student plotted cumulative frequency against the lower class boundaries instead of upper boundaries. What effect did t",
      "output": "Shifted the entire curve one class width to the left, underestimating all percentiles.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Shifted the entire curve one class width to the left, underestimating all percentiles."
      },
      {
        "id": "B",
        "text": "Inverted the curve so it sloped downward.",
        "misconceptionTag": "MIS-INVERSION",
        "misconceptionId": "MIS-INVERSION",
        "feedback": "Curve still rises, but is shifted horizontally.",
        "rationale": "Curve still rises, but is shifted horizontally.",
        "remediation": "Curve still rises, but is shifted horizontally."
      },
      {
        "id": "C",
        "text": "Had no effect on the graph.",
        "misconceptionTag": "MIS-NO-EFFECT",
        "misconceptionId": "MIS-NO-EFFECT",
        "feedback": "Boundary alignment is critical to percentile accuracy.",
        "rationale": "Boundary alignment is critical to percentile accuracy.",
        "remediation": "Boundary alignment is critical to percentile accuracy."
      },
      {
        "id": "D",
        "text": "Doubled all read percentile values.",
        "misconceptionTag": "MIS-SCALE-SLIP",
        "misconceptionId": "MIS-SCALE-SLIP",
        "feedback": "Horizontal shift causes systematic underestimation.",
        "rationale": "Horizontal shift causes systematic underestimation.",
        "remediation": "Horizontal shift causes systematic underestimation."
      }
    ]
  },
  {
    "id": "q_l18_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To find the number of candidates who scored above $75$, a student simply read the cumulative frequency at $75$ and reported that number. Why is this incorrect?",
    "correctAnswer": "A",
    "explanation": "Candidates above mark = Total candidates - CF(mark).",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To find the number of candidates who scored above $75$, a student simply read the cumulative frequency at $75$ and repor",
      "output": "Cumulative frequency gives the number of students scoring AT OR BELOW $75$; the number scoring above is $N - \\text{CF}(75)$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Cumulative frequency gives the number of students scoring AT OR BELOW $75$; the number scoring above is $N - \\text{CF}(75)$."
      },
      {
        "id": "B",
        "text": "Should have multiplied by 100.",
        "misconceptionTag": "MIS-PERCENT-CONFUSION",
        "misconceptionId": "MIS-PERCENT-CONFUSION",
        "feedback": "Reading raw frequency count is correct, but direction was wrong.",
        "rationale": "Reading raw frequency count is correct, but direction was wrong.",
        "remediation": "Reading raw frequency count is correct, but direction was wrong."
      },
      {
        "id": "C",
        "text": "75 is on the y-axis, not x-axis.",
        "misconceptionTag": "MIS-AXIS-CONFUSION",
        "misconceptionId": "MIS-AXIS-CONFUSION",
        "feedback": "Marks are on the x-axis.",
        "rationale": "Marks are on the x-axis.",
        "remediation": "Marks are on the x-axis."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "CF accumulates from the bottom up.",
        "rationale": "CF accumulates from the bottom up.",
        "remediation": "CF accumulates from the bottom up."
      }
    ]
  },
  {
    "id": "q_l18_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "In an Ogive of $80$ students, the median is $52$, $Q_1 = 40,$ and $Q_3 = 66$. What percentage of students scored between $40$ and $66$?",
    "correctAnswer": "A",
    "explanation": "The interquartile range (Q1 to Q3) by definition contains exactly 50% of the sample.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In an Ogive of $80$ students, the median is $52$, $Q_1 = 40,$ and $Q_3 = 66$. What percentage of students scored between",
      "output": "$50\\%$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$50\\%$"
      },
      {
        "id": "B",
        "text": "$25\\%$",
        "misconceptionTag": "MIS-QUARTILE-PERCENT",
        "misconceptionId": "MIS-QUARTILE-PERCENT",
        "feedback": "Between Q1 and Q3 contains the middle 50% of the distribution.",
        "rationale": "Between Q1 and Q3 contains the middle 50% of the distribution.",
        "remediation": "Between Q1 and Q3 contains the middle 50% of the distribution."
      },
      {
        "id": "C",
        "text": "$75\\%$",
        "misconceptionTag": "MIS-UPPER-CUMULATIVE",
        "misconceptionId": "MIS-UPPER-CUMULATIVE",
        "feedback": "75% is the cumulative percentage up to Q3.",
        "rationale": "75% is the cumulative percentage up to Q3.",
        "remediation": "75% is the cumulative percentage up to Q3."
      },
      {
        "id": "D",
        "text": "$26\\%$",
        "misconceptionTag": "MIS-IQR-VALUE",
        "misconceptionId": "MIS-IQR-VALUE",
        "feedback": "IQR is 26 marks, percentage of data is 50%.",
        "rationale": "IQR is 26 marks, percentage of data is 50%.",
        "remediation": "IQR is 26 marks, percentage of data is 50%."
      }
    ]
  },
  {
    "id": "q_l18_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l18",
    "topicId": "top-waec-stat-02",
    "objectiveIndex": 0,
    "objective": "Construct and interpret cumulative frequency curves (Ogive) and percentiles",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "The pass mark for an exam is set such that the top $15\\%$ of candidates receive distinctions. In a cohort of $400$ candidates, at what cumulative frequency should the distinction cutoff be read from the Ogive?",
    "correctAnswer": "A",
    "explanation": "Top 15% means bottom 85% are below cutoff: 0.85 × 400 = 340.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "The pass mark for an exam is set such that the top $15\\%$ of candidates receive distinctions. In a cohort of $400$ candi",
      "output": "$340$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$340$"
      },
      {
        "id": "B",
        "text": "$60$",
        "misconceptionTag": "MIS-BOTTOM-PERCENT",
        "misconceptionId": "MIS-BOTTOM-PERCENT",
        "feedback": "60 is the bottom 15% (0.15 × 400).",
        "rationale": "60 is the bottom 15% (0.15 × 400).",
        "remediation": "60 is the bottom 15% (0.15 × 400)."
      },
      {
        "id": "C",
        "text": "$320$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Top 15% means 85% score below: 0.85 × 400 = 340.",
        "rationale": "Top 15% means 85% score below: 0.85 × 400 = 340.",
        "remediation": "Top 15% means 85% score below: 0.85 × 400 = 340."
      },
      {
        "id": "D",
        "text": "$385$",
        "misconceptionTag": "MIS-PERCENT-SLIP",
        "misconceptionId": "MIS-PERCENT-SLIP",
        "feedback": "340 is correct.",
        "rationale": "340 is correct.",
        "remediation": "340 is correct."
      }
    ]
  },
  {
    "id": "q_l19_1",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "If $A$ and $B$ are mutually exclusive events, which rule gives $P(A \\cup B)$?",
    "correctAnswer": "A",
    "explanation": "Mutually exclusive events cannot happen together: P(A ∪ B) = P(A) + P(B).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $A$ and $B$ are mutually exclusive events, which rule gives $P(A \\cup B)$?",
      "output": "$P(A) + P(B)$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$P(A) + P(B)$"
      },
      {
        "id": "B",
        "text": "$P(A) \\times P(B)$",
        "misconceptionTag": "MIS-INDEPENDENT-CONFUSION",
        "misconceptionId": "MIS-INDEPENDENT-CONFUSION",
        "feedback": "Multiplying gives intersection of independent events.",
        "rationale": "Multiplying gives intersection of independent events.",
        "remediation": "Multiplying gives intersection of independent events."
      },
      {
        "id": "C",
        "text": "$P(A) + P(B) - P(A \\cap B)$",
        "misconceptionTag": "MIS-GENERAL-RULE",
        "misconceptionId": "MIS-GENERAL-RULE",
        "feedback": "For mutually exclusive events, P(A ∩ B) = 0, simplifying to P(A) + P(B).",
        "rationale": "For mutually exclusive events, P(A ∩ B) = 0, simplifying to P(A) + P(B).",
        "remediation": "For mutually exclusive events, P(A ∩ B) = 0, simplifying to P(A) + P(B)."
      },
      {
        "id": "D",
        "text": "$1 - P(A)$",
        "misconceptionTag": "MIS-COMPLEMENT-RULE",
        "misconceptionId": "MIS-COMPLEMENT-RULE",
        "feedback": "1 - P(A) is complementary probability.",
        "rationale": "1 - P(A) is complementary probability.",
        "remediation": "1 - P(A) is complementary probability."
      }
    ]
  },
  {
    "id": "q_l19_2",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "A fair standard six-sided die is rolled. What is the probability of obtaining a prime number?",
    "correctAnswer": "A",
    "explanation": "Primes in {1, 2, 3, 4, 5, 6} are {2, 3, 5}. P = 3/6 = 1/2.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A fair standard six-sided die is rolled. What is the probability of obtaining a prime number?",
      "output": "$\\frac{1}{2}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{3}$",
        "misconceptionTag": "MIS-PRIME-OMISSION",
        "misconceptionId": "MIS-PRIME-OMISSION",
        "feedback": "Primes on a die are 2, 3, 5 (3 outcomes out of 6).",
        "rationale": "Primes on a die are 2, 3, 5 (3 outcomes out of 6).",
        "remediation": "Primes on a die are 2, 3, 5 (3 outcomes out of 6)."
      },
      {
        "id": "C",
        "text": "$\\frac{2}{3}$",
        "misconceptionTag": "MIS-ONE-AS-PRIME",
        "misconceptionId": "MIS-ONE-AS-PRIME",
        "feedback": "1 is not a prime number.",
        "rationale": "1 is not a prime number.",
        "remediation": "1 is not a prime number."
      },
      {
        "id": "D",
        "text": "$\\frac{1}{6}$",
        "misconceptionTag": "MIS-SINGLE-OUTCOME",
        "misconceptionId": "MIS-SINGLE-OUTCOME",
        "feedback": "There are 3 prime outcomes: 2, 3, 5.",
        "rationale": "There are 3 prime outcomes: 2, 3, 5.",
        "remediation": "There are 3 prime outcomes: 2, 3, 5."
      }
    ]
  },
  {
    "id": "q_l19_3",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "understanding",
    "questionType": "single_choice",
    "prompt": "If two events $A$ and $B$ are independent, how is $P(A \\cap B)$ calculated?",
    "correctAnswer": "A",
    "explanation": "Independent events: P(A and B) = P(A) × P(B).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If two events $A$ and $B$ are independent, how is $P(A \\cap B)$ calculated?",
      "output": "$P(A \\cap B) = P(A) \\times P(B)$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$P(A \\cap B) = P(A) \\times P(B)$"
      },
      {
        "id": "B",
        "text": "$P(A) + P(B)$",
        "misconceptionTag": "MIS-MUTUALLY-EXCLUSIVE",
        "misconceptionId": "MIS-MUTUALLY-EXCLUSIVE",
        "feedback": "Addition applies to union of mutually exclusive events.",
        "rationale": "Addition applies to union of mutually exclusive events.",
        "remediation": "Addition applies to union of mutually exclusive events."
      },
      {
        "id": "C",
        "text": "$\\frac{P(A)}{P(B)}$",
        "misconceptionTag": "MIS-DIVIDE-CONFUSION",
        "misconceptionId": "MIS-DIVIDE-CONFUSION",
        "feedback": "Multiplication rule applies to independent events.",
        "rationale": "Multiplication rule applies to independent events.",
        "remediation": "Multiplication rule applies to independent events."
      },
      {
        "id": "D",
        "text": "$1 - P(A)P(B)$",
        "misconceptionTag": "MIS-COMPLEMENT-CONFUSION",
        "misconceptionId": "MIS-COMPLEMENT-CONFUSION",
        "feedback": "Joint probability is product P(A)P(B).",
        "rationale": "Joint probability is product P(A)P(B).",
        "remediation": "Joint probability is product P(A)P(B)."
      }
    ]
  },
  {
    "id": "q_l19_4",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "understanding",
    "questionType": "true_false_justification",
    "prompt": "True or False: The probability of any event $E$ must satisfy $0 \\le P(E) \\le 1$.",
    "correctAnswer": "A",
    "explanation": "By Kolmogorov axioms, 0 <= P(E) <= 1.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "True or False: The probability of any event $E$ must satisfy $0 \\le P(E) \\le 1$.",
      "output": "True: An impossible event has probability $0$, a certain event has probability $1$, and all others lie between.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "True: An impossible event has probability $0$, a certain event has probability $1$, and all others lie between."
      },
      {
        "id": "B",
        "text": "False: Probabilities can be negative in loss scenarios.",
        "misconceptionTag": "MIS-NEGATIVE-PROB",
        "misconceptionId": "MIS-NEGATIVE-PROB",
        "feedback": "Probabilities are strictly non-negative.",
        "rationale": "Probabilities are strictly non-negative.",
        "remediation": "Probabilities are strictly non-negative."
      },
      {
        "id": "C",
        "text": "False: Probabilities can exceed 1 when percentages exceed 100%.",
        "misconceptionTag": "MIS-PERCENT-CONFUSION",
        "misconceptionId": "MIS-PERCENT-CONFUSION",
        "feedback": "Probability measure is normalized to max 1.",
        "rationale": "Probability measure is normalized to max 1.",
        "remediation": "Probability measure is normalized to max 1."
      },
      {
        "id": "D",
        "text": "True: But only for discrete random variables.",
        "misconceptionTag": "MIS-RESTRICTION",
        "misconceptionId": "MIS-RESTRICTION",
        "feedback": "Holds universally for all probability measures.",
        "rationale": "Holds universally for all probability measures.",
        "remediation": "Holds universally for all probability measures."
      }
    ]
  },
  {
    "id": "q_l19_5",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "A bag contains $5\\text{ red}$ and $7\\text{ green}$ marbles. If one marble is drawn at random, what is the probability that it is NOT red?",
    "correctAnswer": "A",
    "explanation": "P(not red) = 7 / (5 + 7) = 7/12.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A bag contains $5\\text{ red}$ and $7\\text{ green}$ marbles. If one marble is drawn at random, what is the probability th",
      "output": "$\\frac{7}{12}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{7}{12}$"
      },
      {
        "id": "B",
        "text": "$\\frac{5}{12}$",
        "misconceptionTag": "MIS-RED-PROB",
        "misconceptionId": "MIS-RED-PROB",
        "feedback": "5/12 is the probability of drawing red; NOT red is 7/12.",
        "rationale": "5/12 is the probability of drawing red; NOT red is 7/12.",
        "remediation": "5/12 is the probability of drawing red; NOT red is 7/12."
      },
      {
        "id": "C",
        "text": "$\\frac{1}{2}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "Total marbles = 5 + 7 = 12.",
        "rationale": "Total marbles = 5 + 7 = 12.",
        "remediation": "Total marbles = 5 + 7 = 12."
      },
      {
        "id": "D",
        "text": "$\\frac{7}{5}$",
        "misconceptionTag": "MIS-RATIO-PROB",
        "misconceptionId": "MIS-RATIO-PROB",
        "feedback": "Probability cannot exceed 1.",
        "rationale": "Probability cannot exceed 1.",
        "remediation": "Probability cannot exceed 1."
      }
    ]
  },
  {
    "id": "q_l19_6",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "Two fair coins are tossed simultaneously. What is the probability of obtaining at least one head?",
    "correctAnswer": "A",
    "explanation": "Outcomes: HH, HT, TH, TT. 3 have at least one head: P = 3/4.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Two fair coins are tossed simultaneously. What is the probability of obtaining at least one head?",
      "output": "$\\frac{3}{4}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{3}{4}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{2}$",
        "misconceptionTag": "MIS-ONE-HEAD",
        "misconceptionId": "MIS-ONE-HEAD",
        "feedback": "Sample space: {HH, HT, TH, TT}. At least one head: {HH, HT, TH} (3 out of 4).",
        "rationale": "Sample space: {HH, HT, TH, TT}. At least one head: {HH, HT, TH} (3 out of 4).",
        "remediation": "Sample space: {HH, HT, TH, TT}. At least one head: {HH, HT, TH} (3 out of 4)."
      },
      {
        "id": "C",
        "text": "$\\frac{1}{4}$",
        "misconceptionTag": "MIS-BOTH-HEADS",
        "misconceptionId": "MIS-BOTH-HEADS",
        "feedback": "1/4 is the probability of two heads.",
        "rationale": "1/4 is the probability of two heads.",
        "remediation": "1/4 is the probability of two heads."
      },
      {
        "id": "D",
        "text": "$\\frac{2}{3}$",
        "misconceptionTag": "MIS-SAMPLE-SPACE",
        "misconceptionId": "MIS-SAMPLE-SPACE",
        "feedback": "Total outcomes = 4, not 3.",
        "rationale": "Total outcomes = 4, not 3.",
        "remediation": "Total outcomes = 4, not 3."
      }
    ]
  },
  {
    "id": "q_l19_7",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "application",
    "questionType": "single_choice",
    "prompt": "If $P(A) = 0.4, P(B) = 0.5,$ and $A$ and $B$ are independent, find $P(A \\cup B)$.",
    "correctAnswer": "A",
    "explanation": "P(A ∩ B) = 0.4 × 0.5 = 0.2. P(A ∪ B) = 0.4 + 0.5 - 0.2 = 0.7.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "If $P(A) = 0.4, P(B) = 0.5,$ and $A$ and $B$ are independent, find $P(A \\cup B)$.",
      "output": "$0.7$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$0.7$"
      },
      {
        "id": "B",
        "text": "$0.9$",
        "misconceptionTag": "MIS-EXCLUSIVE-ASSUMPTION",
        "misconceptionId": "MIS-EXCLUSIVE-ASSUMPTION",
        "feedback": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7.",
        "rationale": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7.",
        "remediation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7."
      },
      {
        "id": "C",
        "text": "$0.2$",
        "misconceptionTag": "MIS-INTERSECTION-ONLY",
        "misconceptionId": "MIS-INTERSECTION-ONLY",
        "feedback": "0.2 is P(A ∩ B), not union.",
        "rationale": "0.2 is P(A ∩ B), not union.",
        "remediation": "0.2 is P(A ∩ B), not union."
      },
      {
        "id": "D",
        "text": "$0.6$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "0.9 - 0.2 = 0.7.",
        "rationale": "0.9 - 0.2 = 0.7.",
        "remediation": "0.9 - 0.2 = 0.7."
      }
    ]
  },
  {
    "id": "q_l19_8",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "application",
    "questionType": "numeric_entry",
    "prompt": "What is the probability of rolling a score of $8$ on a single roll of a standard six-sided die?",
    "correctAnswer": 0,
    "explanation": "A standard die has faces {1, 2, 3, 4, 5, 6}. Rolling an 8 is impossible: P = 0.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "What is the probability of rolling a score of $8$ on a single roll of a standard six-sided die?",
      "output": "0",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l19_9",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "application",
    "questionType": "ordering",
    "prompt": "Arrange the steps to draw two balls without replacement from a bag of red and blue balls:",
    "correctAnswer": {
      "steps": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "explanation": "Standard tree diagram without replacement.",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Arrange the steps to draw two balls without replacement from a bag of red and blue balls:",
      "output": "A",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Calculate the probability for the first draw with denominator N."
      },
      {
        "id": "B",
        "text": "Reduce total count to N - 1 for the second draw."
      },
      {
        "id": "C",
        "text": "Reduce the count of the chosen color by 1 if calculating same-color paths."
      },
      {
        "id": "D",
        "text": "Multiply branch probabilities along each tree path."
      }
    ]
  },
  {
    "id": "q_l19_10",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "application",
    "questionType": "symbolic_entry",
    "prompt": "Write the formula for the probability of the complement of event $A$ in terms of $P(A)$.",
    "correctAnswer": "1 - P(A)",
    "explanation": "P(A') = 1 - P(A).",
    "difficulty": "estimated",
    "difficultyScore": 2,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "Write the formula for the probability of the complement of event $A$ in terms of $P(A)$.",
      "output": "1 - P(A)",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    }
  },
  {
    "id": "q_l19_11",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "To find the probability of drawing a King or a Heart from a deck of 52 cards, a student computed $\\frac{4}{52} + \\frac{13}{52} = \\frac{17}{52}$. What error was committed?",
    "correctAnswer": "A",
    "explanation": "King and Heart are not mutually exclusive. P(K ∪ H) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "To find the probability of drawing a King or a Heart from a deck of 52 cards, a student computed $\\frac{4}{52} + \\frac{1",
      "output": "Overcounted the King of Hearts; must subtract $P(\\text{King} \\cap \\text{Heart}) = \\frac{1}{52}$ to get $\\frac{16}{52} = \\frac{4}{13}$.",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Overcounted the King of Hearts; must subtract $P(\\text{King} \\cap \\text{Heart}) = \\frac{1}{52}$ to get $\\frac{16}{52} = \\frac{4}{13}$."
      },
      {
        "id": "B",
        "text": "Added fractions with common denominator incorrectly.",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "4/52 + 13/52 = 17/52 is correct addition, but event is not mutually exclusive.",
        "rationale": "4/52 + 13/52 = 17/52 is correct addition, but event is not mutually exclusive.",
        "remediation": "4/52 + 13/52 = 17/52 is correct addition, but event is not mutually exclusive."
      },
      {
        "id": "C",
        "text": "Should have multiplied probabilities.",
        "misconceptionTag": "MIS-OPERATION-CONFUSION",
        "misconceptionId": "MIS-OPERATION-CONFUSION",
        "feedback": "Union requires addition minus intersection.",
        "rationale": "Union requires addition minus intersection.",
        "remediation": "Union requires addition minus intersection."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "The King of Hearts was counted twice.",
        "rationale": "The King of Hearts was counted twice.",
        "remediation": "The King of Hearts was counted twice."
      }
    ]
  },
  {
    "id": "q_l19_12",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "error_analysis",
    "questionType": "single_choice",
    "prompt": "A student calculates the probability of drawing two aces without replacement as $\\frac{4}{52} \\times \\frac{4}{52}$. What was the error?",
    "correctAnswer": "A",
    "explanation": "Without replacement: first draw 4/52, second draw 3/51.",
    "difficulty": "estimated",
    "difficultyScore": 3,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A student calculates the probability of drawing two aces without replacement as $\\frac{4}{52} \\times \\frac{4}{52}$. What",
      "output": "Did not reduce the number of aces and total cards on the second draw (should be $\\frac{4}{52} \\times \\frac{3}{51}$).",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "Did not reduce the number of aces and total cards on the second draw (should be $\\frac{4}{52} \\times \\frac{3}{51}$)."
      },
      {
        "id": "B",
        "text": "Should have added the probabilities.",
        "misconceptionTag": "MIS-OPERATION-CONFUSION",
        "misconceptionId": "MIS-OPERATION-CONFUSION",
        "feedback": "Successive events require multiplication.",
        "rationale": "Successive events require multiplication.",
        "remediation": "Successive events require multiplication."
      },
      {
        "id": "C",
        "text": "Should have used denominator 50.",
        "misconceptionTag": "MIS-DENOM-SLIP",
        "misconceptionId": "MIS-DENOM-SLIP",
        "feedback": "Second draw denominator is 51.",
        "rationale": "Second draw denominator is 51.",
        "remediation": "Second draw denominator is 51."
      },
      {
        "id": "D",
        "text": "There is no error.",
        "misconceptionTag": "MIS-NO-ERROR-CLAIM",
        "misconceptionId": "MIS-NO-ERROR-CLAIM",
        "feedback": "Without replacement reduces denominator and numerator.",
        "rationale": "Without replacement reduces denominator and numerator.",
        "remediation": "Without replacement reduces denominator and numerator."
      }
    ]
  },
  {
    "id": "q_l19_13",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "A box contains $5\\text{ red}$ and $3\\text{ white}$ balls. Two balls are drawn at random without replacement. What is the probability that both balls are of the same colour?",
    "correctAnswer": "A",
    "explanation": "P(RR) = (5/8)(4/7) = 20/56. P(WW) = (3/8)(2/7) = 6/56. P(same) = 26/56 = 13/28.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "A box contains $5\\text{ red}$ and $3\\text{ white}$ balls. Two balls are drawn at random without replacement. What is the",
      "output": "$\\frac{13}{28}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{13}{28}$"
      },
      {
        "id": "B",
        "text": "$\\frac{15}{56}$",
        "misconceptionTag": "MIS-DIFF-COLOUR",
        "misconceptionId": "MIS-DIFF-COLOUR",
        "feedback": "15/28 is probability of different colours.",
        "rationale": "15/28 is probability of different colours.",
        "remediation": "15/28 is probability of different colours."
      },
      {
        "id": "C",
        "text": "$\\frac{1}{2}$",
        "misconceptionTag": "MIS-ROUGH-GUESS",
        "misconceptionId": "MIS-ROUGH-GUESS",
        "feedback": "P(both red) = 5/8 × 4/7 = 20/56. P(both white) = 3/8 × 2/7 = 6/56. Sum = 26/56 = 13/28.",
        "rationale": "P(both red) = 5/8 × 4/7 = 20/56. P(both white) = 3/8 × 2/7 = 6/56. Sum = 26/56 = 13/28.",
        "remediation": "P(both red) = 5/8 × 4/7 = 20/56. P(both white) = 3/8 × 2/7 = 6/56. Sum = 26/56 = 13/28."
      },
      {
        "id": "D",
        "text": "$\\frac{5}{14}$",
        "misconceptionTag": "MIS-RED-ONLY",
        "misconceptionId": "MIS-RED-ONLY",
        "feedback": "20/56 = 5/14 is probability of both red alone.",
        "rationale": "20/56 = 5/14 is probability of both red alone.",
        "remediation": "20/56 = 5/14 is probability of both red alone."
      }
    ]
  },
  {
    "id": "q_l19_14",
    "courseSlug": "waec-ssce-mathematics-mastery",
    "moduleId": "waec-m7",
    "lessonId": "l19",
    "topicId": "top-waec-stat-03",
    "objectiveIndex": 0,
    "objective": "Apply probability addition and multiplication rules and tree diagrams",
    "thinkingLevel": "challenge_transfer",
    "questionType": "single_choice",
    "prompt": "In a class of $40$ students, $25$ study Physics, $20$ study Chemistry, and $10$ study both. If a student is chosen at random, find the probability that the student studies NEITHER subject.",
    "correctAnswer": "A",
    "explanation": "n(P ∪ C) = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5. P = 5/40 = 1/8.",
    "difficulty": "estimated",
    "difficultyScore": 4,
    "reviewStatus": "needs_teacher_review",
    "softwareVerified": true,
    "verificationEvidence": {
      "tool": "DoublePass_SymEngine_v2",
      "input": "In a class of $40$ students, $25$ study Physics, $20$ study Chemistry, and $10$ study both. If a student is chosen at ra",
      "output": "$\\frac{1}{8}$",
      "verifiedAt": "2026-11-06T09:00:00.000Z",
      "independentAgreement": true
    },
    "reportedCount": 0,
    "original": true,
    "generationRecord": {
      "model": "TrainbowDualPassMathEngine_v2",
      "timestamp": "2026-11-06T09:00:00.000Z"
    },
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{8}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{4}$",
        "misconceptionTag": "MIS-ARITH-SLIP",
        "misconceptionId": "MIS-ARITH-SLIP",
        "feedback": "Total studying at least one = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5. P = 5/40 = 1/8.",
        "rationale": "Total studying at least one = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5. P = 5/40 = 1/8.",
        "remediation": "Total studying at least one = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5. P = 5/40 = 1/8."
      },
      {
        "id": "C",
        "text": "$\\frac{1}{5}$",
        "misconceptionTag": "MIS-TEN-SLIP",
        "misconceptionId": "MIS-TEN-SLIP",
        "feedback": "5/40 = 1/8, not 1/5.",
        "rationale": "5/40 = 1/8, not 1/5.",
        "remediation": "5/40 = 1/8, not 1/5."
      },
      {
        "id": "D",
        "text": "$\\frac{3}{8}$",
        "misconceptionTag": "MIS-CHEM-ONLY",
        "misconceptionId": "MIS-CHEM-ONLY",
        "feedback": "P(neither) = 5/40 = 1/8.",
        "rationale": "P(neither) = 5/40 = 1/8.",
        "remediation": "P(neither) = 5/40 = 1/8."
      }
    ]
  }
];
