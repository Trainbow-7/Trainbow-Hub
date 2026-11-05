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
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE", "BECE"],
    systemPromptGuidance:
      "Analyze grammatical functions, figures of speech, comprehension passages, and poetic devices. Adhere strictly to authoritative literary texts.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["Never invent quotes or historical dates; cite text line numbers when given"],
    examinerMarkingGuide: "Identify grammatical grammatical name and function in formal syntax terms.",
    enabledForStudents: false,
  },
  basic_science: {
    id: "basic_science",
    name: "Basic Science",
    category: "SCIENCES",
    curriculums: ["BECE"],
    systemPromptGuidance:
      "Explain fundamental natural phenomena, human body systems, energy, matter, and environmental science tailored to Nigerian NERDC Junior Secondary curriculum.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["Ensure concepts match Junior Secondary (JSS 1-3) level"],
    examinerMarkingGuide: "Award marks for accurate terminology, clear explanations, and labeled diagrams where applicable.",
    enabledForStudents: true,
  },
  basic_technology: {
    id: "basic_technology",
    name: "Basic Technology",
    category: "TECHNICAL",
    curriculums: ["BECE"],
    systemPromptGuidance:
      "Cover technical drawing conventions, woodworking/metalworking tools, basic building materials, electricity basics, and maintenance as prescribed by BECE curriculum.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["State standard dimensions, safety precautions, and drawing instruments clearly"],
    examinerMarkingGuide: "Provide accurate drawing steps, tool classifications, and safety rules.",
    enabledForStudents: true,
  },
  business_studies: {
    id: "business_studies",
    name: "Business Studies",
    category: "COMMERCIAL",
    curriculums: ["BECE"],
    systemPromptGuidance:
      "Introduce office procedures, petty cash, ledger principles, keyboarding, consumer rights, and trade for Junior Secondary BECE candidates.",
    verificationMethod: "NUMERIC_CAS",
    guardrails: ["Use simple two-column or three-column cash book format when ledger is needed"],
    examinerMarkingGuide: "Check debit/credit alignment and exact business definitions.",
    enabledForStudents: true,
  },
  civic_education: {
    id: "civic_education",
    name: "Social Studies & Civic Education",
    category: "ARTS",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "BECE"],
    systemPromptGuidance:
      "Explain values, citizenship, democratic governance, constitutional rights, national institutions, and social challenges according to NERDC syllabus.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["Cite the Constitution and official democratic principles correctly"],
    examinerMarkingGuide: "Provide structured points, clear definitions, and societal applications.",
    enabledForStudents: true,
  },
  further_maths: {
    id: "further_maths",
    name: "Further Mathematics",
    category: "MATHEMATICS",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "CAMBRIDGE_IGCSE"],
    systemPromptGuidance:
      "Solve advanced topics: matrices, calculus (differentiation & integration), vectors, coordinate geometry, mechanics, and probability distributions with rigorous step-by-step proofs.",
    verificationMethod: "NUMERIC_CAS",
    guardrails: ["Show all integration constants and differentiation rules explicitly"],
    examinerMarkingGuide: "Award M1 for formula setup, M1 for intermediate reduction, A1 for final answer.",
    enabledForStudents: true,
  },
  agricultural_science: {
    id: "agricultural_science",
    name: "Agricultural Science",
    category: "SCIENCES",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "BECE"],
    systemPromptGuidance:
      "Cover crop production, soil science, animal husbandry, farm machinery, and agricultural economics grounded in West African agricultural practices.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["Use correct botanical and zoological names where required"],
    examinerMarkingGuide: "Award marks for detailed agronomic practices and farm management techniques.",
    enabledForStudents: true,
  },
  music: {
    id: "music",
    name: "Music (Theory & Practical)",
    category: "ARTS",
    curriculums: ["WAEC_SSCE", "NECO_SSCE", "JAMB_UTME", "CAMBRIDGE_IGCSE", "BECE"],
    systemPromptGuidance:
      "Explain staff notation, scales, intervals, African and Western musical instruments, harmony, and composition analysis.",
    verificationMethod: "CURRICULUM_GROUNDING",
    guardrails: ["State exact pitch names, clefs, time signatures, and key signatures"],
    examinerMarkingGuide: "Accurate note values and harmonic analysis.",
    enabledForStudents: true,
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
