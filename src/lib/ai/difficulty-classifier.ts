export interface QuestionClassification {
  subject: string;
  topic: string;
  level: "BECE" | "SS1" | "SS2" | "SS3" | "UTME" | "IGCSE";
  difficulty: "easy" | "medium" | "hard";
  recommendedEffort: "low" | "medium" | "high";
  maxTools: number;
  requiresDecomposition: boolean;
}

export function classifyQuestion(
  text: string,
  declaredSubject = "Mathematics"
): QuestionClassification {
  const lower = text.toLowerCase();

  // Multi-part detection: contains (a), (b) or part 1, part 2
  const hasMultipleParts = /(\([a-d]\)|part\s+[a-d]|i\.\s+|ii\.\s+)/i.test(text);

  // Advanced / hard topics
  const isFurtherMathOrCalculus =
    lower.includes("differentiate") ||
    lower.includes("integral") ||
    lower.includes("calculus") ||
    lower.includes("dy/dx") ||
    lower.includes("cyclic quadrilateral") ||
    lower.includes("parallel chord") ||
    lower.includes("projectile") ||
    lower.includes("stoichiometry") ||
    lower.includes("equilibrium constant") ||
    lower.includes("genetics") ||
    lower.includes("pedigree") ||
    lower.includes("rational equation") ||
    lower.includes("fig. 2.") ||
    lower.includes("1/(3a-1)");

  const isMedium =
    lower.includes("quadratic") ||
    lower.includes("simultaneous") ||
    lower.includes("median") ||
    lower.includes("mean") ||
    lower.includes("trigonometry") ||
    lower.includes("pythagor");

  let difficulty: "easy" | "medium" | "hard" = "easy";
  let recommendedEffort: "low" | "medium" | "high" = "low";
  let maxTools = 4;

  if (isFurtherMathOrCalculus || hasMultipleParts) {
    difficulty = "hard";
    recommendedEffort = "high";
    maxTools = 8;
  } else if (isMedium) {
    difficulty = "medium";
    recommendedEffort = "medium";
    maxTools = 6;
  }

  return {
    subject: declaredSubject,
    topic: isFurtherMathOrCalculus ? "Advanced Analysis & Geometry" : isMedium ? "Intermediate Algebra & Statistics" : "Foundational Concept",
    level: "SS3",
    difficulty,
    recommendedEffort,
    maxTools,
    requiresDecomposition: hasMultipleParts,
  };
}
