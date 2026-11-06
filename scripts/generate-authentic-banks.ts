import * as fs from "fs";
import * as path from "path";
import { ALL_COURSES } from "../src/lib/data/seed-data";
import { AssessmentItem, QuestionOption, ThinkingLevel, QuestionType } from "../src/lib/assessment/types";
import { createAssessmentItem } from "../src/lib/assessment/builder";
import { WAEC_MATH_BANK as EXISTING_WAEC_L1 } from "../src/lib/assessment/banks/waec-math-bank";
import { verifyAssessmentItem } from "../src/lib/assessment/verifier";

const outputDir = path.join(__dirname, "../src/lib/assessment/banks");

// Helper to make 4 options with misconception tags
function opts(
  correct: string,
  d1: string, m1: string, f1: string,
  d2: string, m2: string, f2: string,
  d3: string, m3: string, f3: string
): QuestionOption[] {
  return [
    { id: "A", text: correct },
    { id: "B", text: d1, misconceptionTag: m1, misconceptionId: m1, feedback: f1, rationale: f1, remediation: f1 },
    { id: "C", text: d2, misconceptionTag: m2, misconceptionId: m2, feedback: f2, rationale: f2, remediation: f2 },
    { id: "D", text: d3, misconceptionTag: m3, misconceptionId: m3, feedback: f3, rationale: f3, remediation: f3 },
  ];
}

console.log("Ready to generate authentic mathematics question banks.");
