import { AssessmentItem, QuestionOption, ThinkingLevel, QuestionType } from "../../src/lib/assessment/types";
import { createAssessmentItem } from "../../src/lib/assessment/builder";

export interface ItemDef {
  id: string;
  courseSlug: string;
  moduleId: string;
  lessonId: string;
  topicId: string;
  objectiveIndex: number;
  objective: string;
  thinkingLevel: ThinkingLevel;
  questionType: QuestionType;
  prompt: string;
  options?: QuestionOption[];
  correctAnswer: any;
  explanation: string;
  hint?: string;
  verificationTool?: string;
  verificationInput?: string;
  verificationOutput?: string;
}

export function makeChoices(
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

export function buildItem(def: ItemDef): AssessmentItem {
  return createAssessmentItem(def);
}
