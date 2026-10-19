export interface SubjectProfile {
  id: string;
  name: string;
  category: "MATHEMATICS" | "SCIENCES" | "COMMERCIAL" | "ARTS" | "TECHNICAL";
  curriculums: string[];
  systemPromptGuidance: string;
  verificationMethod: "NUMERIC_CAS" | "GEOMETRY_CONSTRAINTS" | "DIMENSIONAL_UNITS" | "CODE_SANDBOX" | "CURRICULUM_GROUNDING";
  guardrails: string[];
  examinerMarkingGuide: string;
  enabledForStudents: boolean;
}

export const SUBJECT_REGISTRY: Record<string, SubjectProfile> = {
  mathematics: {
    id: "mathematics",
    name: "Mathematics & Further Maths",
    category: "MATHEMATICS",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE", "BECE"],
    systemPromptGuidance:
      "Solve step-by-step using theorem definitions, algebraic balance, and geometric proofs. Emphasize standard form, quadratic formula, circle theorems, and statistical distributions.",
    verificationMethod: "NUMERIC_CAS",
    guardrails: ["Never skip intermediate substitution", "Explicitly show both positive and negative branches"],
    examinerMarkingGuide: "Award M1 for formula declaration, M1 for substitution, A1 for final accuracy.",
    enabledForStudents: true, // Always live
  },
  physics: {
    id: "physics",
    name: "Physics",
    category: "SCIENCES",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE"],
    systemPromptGuidance:
      "State fundamental physical laws (Newton's laws, Ohm's law, wave equations, thermodynamics). Convert all units to standard SI before calculating.",
    verificationMethod: "DIMENSIONAL_UNITS",
    guardrails: ["Mandatory SI units on every numeric answer", "Check significant figures"],
    examinerMarkingGuide: "Numerical answer without standard SI unit loses full accuracy mark (A0).",
    enabledForStudents: false, // Evaluation gate required
  },
  chemistry: {
    id: "chemistry",
    name: "Chemistry",
    category: "SCIENCES",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE"],
    systemPromptGuidance:
      "Write balanced chemical equations with state symbols. Check mole ratios and stoichiometry. Clearly distinguish empirical from molecular formulas.",
    verificationMethod: "DIMENSIONAL_UNITS",
    guardrails: ["All chemical equations must be mass and charge balanced"],
    examinerMarkingGuide: "Equations without correct coefficients or state symbols are penalised.",
    enabledForStudents: false,
  },
  biology: {
    id: "biology",
    name: "Biology",
    category: "SCIENCES",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE"],
    systemPromptGuidance:
      "Ground answers in vetted anatomical and physiological structures. Explain functions alongside adaptations. Use Punnett squares for genetics.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["Only reference validated biological terminology; never hallucinate organs or structures"],
    examinerMarkingGuide: "Use standard biological terms (e.g. 'erythrocytes', 'alveoli', 'mitochondria').",
    enabledForStudents: false,
  },
  economics: {
    id: "economics",
    name: "Economics",
    category: "COMMERCIAL",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE"],
    systemPromptGuidance:
      "Analyze market structures, elasticity, demand/supply shifts, and national income. Include tabular data and curve descriptions.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["Clearly distinguish between shift in demand vs change in quantity demanded"],
    examinerMarkingGuide: "Label all axes (Price P, Quantity Q) and direction of curve shifts (D1 to D2).",
    enabledForStudents: false,
  },
  accounting: {
    id: "accounting",
    name: "Financial Accounting & Commerce",
    category: "COMMERCIAL",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME"],
    systemPromptGuidance:
      "Use double-entry bookkeeping principles. Generate structured T-accounts, trial balance, and balance sheet tables with balanced debits and credits.",
    verificationMethod: "NUMERIC_CAS",
    guardrails: ["Total debits must equal total credits in trial balances"],
    examinerMarkingGuide: "Format currency and ledgers with Dr and Cr column headers.",
    enabledForStudents: false,
  },
  computer_science: {
    id: "computer_science",
    name: "Computer Studies & ICT",
    category: "TECHNICAL",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE"],
    systemPromptGuidance:
      "Explain algorithms, logic gates, truth tables, and data structures. Provide syntactically valid code blocks with complexity analysis.",
    verificationMethod: "CODE_SANDBOX",
    guardrails: ["Execute code in isolated sandbox with timeout and memory ceiling"],
    examinerMarkingGuide: "Show step-by-step variable trace tables for loop algorithms.",
    enabledForStudents: false,
  },
  english: {
    id: "english",
    name: "English Language & Literature",
    category: "ARTS",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE"],
    systemPromptGuidance:
      "Analyze grammatical functions, figures of speech, comprehension passages, and poetic devices. Adhere strictly to authoritative literary texts.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["Never invent quotes or historical dates; cite text line numbers when given"],
    examinerMarkingGuide: "Identify grammatical grammatical name and function in formal syntax terms.",
    enabledForStudents: false,
  },
};

export function resolveSubjectProfile(subjectName: string): SubjectProfile {
  const key = subjectName.toLowerCase().replace(/[^a-z]/g, "_");
  for (const [k, prof] of Object.entries(SUBJECT_REGISTRY)) {
    if (key.includes(k) || prof.name.toLowerCase().includes(subjectName.toLowerCase())) {
      return prof;
    }
  }
  return SUBJECT_REGISTRY.mathematics;
}
