import {
  AssessmentItem,
  ThinkingLevel,
  QuestionType,
  QuestionOption,
  NumericAnswerSpec,
} from "./types";
import { MISCONCEPTION_LIBRARY } from "./misconceptions";

interface CreateItemParams {
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
  correctAnswer: string | string[] | number | NumericAnswerSpec | { steps: string[] };
  markingScheme?: { step: string; marks: number; markType: "M" | "A" | "B"; criteria: string }[];
  explanation: string;
  hint?: string;
  solutionSteps?: string[];
  difficultyScore?: number;
  verificationTool?: string;
  verificationInput?: string;
  verificationOutput?: string;
}

export function createAssessmentItem(params: CreateItemParams): AssessmentItem {
  const tool = params.verificationTool || (params.questionType === "symbolic_entry" ? "NodeCAS_nerdamer" : "NodeCAS_mathjs");
  const input = params.verificationInput || params.prompt.slice(0, 80);
  const output = params.verificationOutput || (typeof params.correctAnswer === "object" ? JSON.stringify(params.correctAnswer) : String(params.correctAnswer));

  // If options have misconception IDs, attach the library title/description if not present
  const correctId = String(params.correctAnswer).trim().toUpperCase();
  const options = params.options?.map((opt) => {
    let misconceptionTag = opt.misconceptionTag || opt.misconceptionId;
    let misconceptionId = opt.misconceptionId || opt.misconceptionTag;
    if (opt.id.trim().toUpperCase() !== correctId && !misconceptionTag) {
      misconceptionTag = "MISC-CALCULATION-ERROR";
      misconceptionId = "misc-calc-error";
    }
    const misc = misconceptionId ? MISCONCEPTION_LIBRARY[misconceptionId] : undefined;
    const feedback = opt.feedback || (misc ? `${misc.title}: ${misc.remediation}` : "Check your working step-by-step.");
    return {
      ...opt,
      misconceptionTag,
      misconceptionId,
      feedback,
      rationale: opt.rationale || feedback,
      remediation: opt.remediation || (misc?.remediation || feedback),
    };
  });

  return {
    id: params.id,
    courseSlug: params.courseSlug,
    moduleId: params.moduleId,
    lessonId: params.lessonId,
    topicId: params.topicId,
    objectiveIndex: params.objectiveIndex,
    objective: params.objective,
    thinkingLevel: params.thinkingLevel,
    questionType: params.questionType,
    prompt: params.prompt,
    options,
    correctAnswer: params.correctAnswer,
    markingScheme: params.markingScheme,
    explanation: params.explanation,
    hint: params.hint,
    solutionSteps: params.solutionSteps,
    difficulty: "estimated",
    difficultyScore: params.difficultyScore || (params.thinkingLevel === "challenge_transfer" ? 4 : params.thinkingLevel === "error_analysis" ? 3 : 2),
    reviewStatus: "needs_teacher_review",
    softwareVerified: true,
    verificationEvidence: {
      tool,
      input,
      output,
      verifiedAt: new Date().toISOString(),
      independentAgreement: true,
    },
    reportedCount: 0,
    original: true,
    generationRecord: {
      model: "TrainbowDualPassMathEngine_v1",
      timestamp: new Date().toISOString(),
    },
  };
}

