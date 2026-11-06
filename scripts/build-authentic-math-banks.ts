import * as fs from "fs";
import * as path from "path";
import { ALL_COURSES } from "../src/lib/data/seed-data";
import { AssessmentItem, QuestionOption, ThinkingLevel, QuestionType } from "../src/lib/assessment/types";
import { createAssessmentItem } from "../src/lib/assessment/builder";
import { WAEC_MATH_BANK as EXISTING_WAEC_BANK } from "../src/lib/assessment/banks/waec-math-bank";

const outputDir = path.join(__dirname, "../src/lib/assessment/banks");

// Helper to create 4 MCQ choices where A is correct and B, C, D are distractors tagged with misconceptions
function makeChoices(
  correctText: string,
  d1Text: string,
  d1Misc: string,
  d1Feedback: string,
  d2Text: string,
  d2Misc: string,
  d2Feedback: string,
  d3Text: string,
  d3Misc: string,
  d3Feedback: string
): QuestionOption[] {
  return [
    { id: "A", text: correctText },
    { id: "B", text: d1Text, misconceptionTag: d1Misc, misconceptionId: d1Misc, feedback: d1Feedback, rationale: d1Feedback, remediation: d1Feedback },
    { id: "C", text: d2Text, misconceptionTag: d2Misc, misconceptionId: d2Misc, feedback: d2Feedback, rationale: d2Feedback, remediation: d2Feedback },
    { id: "D", text: d3Text, misconceptionTag: d3Misc, misconceptionId: d3Misc, feedback: d3Feedback, rationale: d3Feedback, remediation: d3Feedback },
  ];
}

console.log("Building authentic mathematics question banks for all 71 lessons across 6 courses...");
