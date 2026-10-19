import { DiagramElements } from "./extraction-schema";

export interface OCRCrossCheckResult {
  passed: boolean;
  score: number; // 0 to 1
  missingLabels: string[];
  matchedLabels: string[];
  notes: string;
}

/**
 * Cross-checks diagram labels against question text and OCR transcription.
 * If diagram contains points/labels (e.g. A, B, C, D, 60°, x) that don't match the problem text,
 * this flags potential hallucination or mismatched figure.
 */
export function crossCheckDiagramWithText(
  questionText: string,
  diagramElements?: DiagramElements
): OCRCrossCheckResult {
  if (!diagramElements || (!diagramElements.points?.length && !diagramElements.labels?.length)) {
    return {
      passed: true,
      score: 1.0,
      missingLabels: [],
      matchedLabels: [],
      notes: "No diagram elements to cross-check.",
    };
  }

  const normalizedText = questionText.toLowerCase();

  // Collect labels from diagram
  const candidateLabels: string[] = [];
  diagramElements.points?.forEach((p) => {
    if (p.name && p.name.length <= 3) candidateLabels.push(p.name);
  });
  diagramElements.labels?.forEach((l) => {
    if (l && l.length <= 10) candidateLabels.push(l);
  });

  const uniqueLabels = Array.from(new Set(candidateLabels));
  if (uniqueLabels.length === 0) {
    return {
      passed: true,
      score: 1.0,
      missingLabels: [],
      matchedLabels: [],
      notes: "No unique labels to verify.",
    };
  }

  const matched: string[] = [];
  const missing: string[] = [];

  for (const label of uniqueLabels) {
    const cleanLabel = label.replace(/[°º]/g, "").trim().toLowerCase();
    if (!cleanLabel) continue;

    // Search for whole word or exact token match in question text
    const regex = new RegExp(`\\b${cleanLabel}\\b`, "i");
    if (regex.test(normalizedText) || normalizedText.includes(cleanLabel)) {
      matched.push(label);
    } else {
      missing.push(label);
    }
  }

  const score = uniqueLabels.length > 0 ? matched.length / uniqueLabels.length : 1;
  const passed = score >= 0.3 || missing.length <= 4; // Tolerant of implicit geometry labels like centre O or vertices not explicitly listed in intro

  return {
    passed,
    score: Number(score.toFixed(2)),
    matchedLabels: matched,
    missingLabels: missing,
    notes: passed
      ? `Cross-check passed with ${matched.length}/${uniqueLabels.length} labels matched.`
      : `Warning: low label consistency. Missing in text: ${missing.join(", ")}`,
  };
}
