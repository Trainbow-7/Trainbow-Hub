import { z } from "zod";

export type ThinkingLevel = "understanding" | "application" | "error_analysis" | "challenge_transfer" | "challenge";

export type QuestionType =
  | "single_choice"
  | "multi_select"
  | "numeric_entry"
  | "symbolic_entry"
  | "ordering"
  | "true_false_justification"
  | "table_reading"
  | "structured_theory";

export type ReviewStatus = "needs_teacher_review" | "teacher_approved" | "rejected";
export type DifficultyLabel = "estimated" | "calibrated";

export interface QuestionOption {
  id: string; // "A", "B", "C", "D", etc.
  text: string;
  misconceptionId?: string;
  misconceptionTag?: string;
  feedback?: string;
  rationale?: string;
  remediation?: string;
}

export interface MarkingCriterion {
  step: string;
  marks: number;
  markType: "M" | "A" | "B"; // M = Method, A = Accuracy, B = Independent mark
  criteria: string;
}

export interface NumericAnswerSpec {
  value: number;
  tolerance?: number;
  unit?: string;
}

export interface VerificationEvidence {
  tool?: string;
  input?: string;
  output?: string;
  verifiedAt?: string;
  independentAgreement?: boolean;
  notes?: string;
  method?: string;
  computedAnswer?: any;
  disjointOptions?: boolean;
}

export interface GenerationRecord {
  model: string;
  timestamp: string;
  promptTokens?: number;
  completionTokens?: number;
  strategy?: string;
}

export interface AssessmentItem {
  id: string;
  courseSlug: string;
  moduleId: string;
  lessonId: string;
  topicId?: string;
  topic?: string;
  objectiveId?: string;
  objectiveIndex?: number;
  objective: string;
  thinkingLevel: ThinkingLevel;
  questionType: QuestionType;
  type?: string;
  prompt: string;
  options?: QuestionOption[]; // for single_choice, multi_select, true_false_justification, table_reading
  correctAnswer: string | string[] | number | NumericAnswerSpec | { steps: string[] };
  correctOptionId?: string;
  correctOrder?: string[];
  tolerance?: number;
  acceptedUnits?: string[];
  markingScheme?: any;
  explanation: string;
  hint?: string;
  solutionSteps?: string[];
  isParametric?: boolean;
  templateId?: string;
  difficulty?: DifficultyLabel;
  difficultyScore?: number; // 1 to 5
  reviewStatus?: ReviewStatus;
  softwareVerified?: boolean;
  verificationEvidence?: VerificationEvidence;
  reportedCount?: number;
  original?: boolean;
  generationRecord?: GenerationRecord;
}

// Client-safe version with answers & explanations stripped
export interface SanitizedAssessmentItem {
  id: string;
  courseSlug: string;
  moduleId: string;
  lessonId: string;
  objectiveIndex: number;
  objective: string;
  thinkingLevel: ThinkingLevel;
  questionType: QuestionType;
  prompt: string;
  options?: { id: string; text: string }[];
  unit?: string;
  orderItems?: { id: string; text: string }[]; // for ordering questions (shuffled)
  difficultyScore: number;
  hint?: string;
}

export interface ParametricVariableDef {
  name: string;
  min: number;
  max: number;
  step?: number;
  type?: "integer" | "float" | "prime";
  exclude?: number[];
}

export interface ParametricTemplate {
  id: string;
  courseSlug: string;
  moduleId: string;
  lessonId: string;
  topicId: string;
  objective: string;
  title: string;
  thinkingLevel: ThinkingLevel;
  questionType: QuestionType;
  variables: ParametricVariableDef[];
  generate: (params?: Record<string, number>) => AssessmentItem;
}

export interface AssessmentSubmission {
  courseSlug: string;
  lessonId: string;
  mode: "practice" | "test" | "jamb_speed";
  answers: Record<string, any>;
  timeSpentSeconds: number;
}

export interface QuestionResult {
  questionId: string;
  prompt: string;
  thinkingLevel: ThinkingLevel;
  objective: string;
  userAnswer: any;
  correctAnswer: any;
  isCorrect: boolean;
  score: number; // 0 to 1
  explanation: string;
  misconceptionId?: string;
  feedback?: string;
  solutionSteps?: string[];
}

export type ObjectiveMasteryStatus = "understood" | "almost_there" | "needs_work";

export interface ObjectiveMastery {
  objective: string;
  totalQuestions: number;
  correctQuestions: number;
  percentage: number;
  status: ObjectiveMasteryStatus;
}

export interface AssessmentGradingResult {
  attemptId: string;
  score: number; // 0 to 100
  percentage?: number;
  totalScore?: number;
  totalQuestions: number;
  correctCount: number;
  passed: boolean;
  passPercentage: number;
  timeSpentSeconds: number;
  mode: "practice" | "test" | "jamb_speed";
  results: QuestionResult[];
  objectiveMasteries: ObjectiveMastery[];
  objectiveMastery?: ObjectiveMastery[];
  identifiedMisconceptions: { id: string; code: string; title: string; remediation: string }[];
  misconceptionsIdentified?: any[];
  recommendedLessons: { slug: string; title: string; reason: string }[];
  isMastered: boolean;
}

export interface QuestionReportInput {
  questionId: string;
  reason: string;
  details?: string;
}

// Zod validation schemas
export const AssessmentSubmissionSchema = z.object({
  courseSlug: z.string().min(1),
  lessonId: z.string().min(1),
  mode: z.enum(["practice", "test", "jamb_speed"]).default("practice"),
  answers: z.record(z.any()),
  timeSpentSeconds: z.number().nonnegative().default(0),
});

export const QuestionOptionSchema = z.object({
  id: z.string(),
  text: z.string(),
  misconceptionId: z.string().optional(),
  misconceptionTag: z.string().optional(),
  feedback: z.string().optional(),
  rationale: z.string().optional(),
  remediation: z.string().optional(),
});

export const AssessmentItemSchema = z.object({
  id: z.string().min(1),
  courseSlug: z.string().min(1),
  moduleId: z.string().min(1),
  lessonId: z.string().min(1),
  topicId: z.string().optional(),
  objectiveId: z.string().optional(),
  objectiveIndex: z.number().optional(),
  objective: z.string().min(1),
  thinkingLevel: z.enum(["understanding", "application", "error_analysis", "challenge_transfer", "challenge"]),
  questionType: z.enum([
    "single_choice",
    "multi_select",
    "numeric_entry",
    "symbolic_entry",
    "ordering",
    "true_false_justification",
    "table_reading",
    "structured_theory",
  ]),
  prompt: z.string().min(1),
  options: z.array(QuestionOptionSchema).optional(),
  correctAnswer: z.any(),
  correctOptionId: z.string().optional(),
  correctOrder: z.array(z.string()).optional(),
  markingScheme: z.any().optional(),
  explanation: z.string().min(1),
  hint: z.string().optional(),
  solutionSteps: z.array(z.string()).optional(),
  isParametric: z.boolean().optional(),
  templateId: z.string().optional(),
  difficulty: z.enum(["estimated", "calibrated"]).optional(),
  difficultyScore: z.number().optional(),
  reviewStatus: z.enum(["needs_teacher_review", "teacher_approved", "rejected"]).optional(),
  softwareVerified: z.boolean().optional(),
  verificationEvidence: z.any().optional(),
  reportedCount: z.number().optional(),
  original: z.literal(true),
  generationRecord: z.any().optional(),
});

export const QuestionReportSchema = z.object({
  questionId: z.string().min(1),
  reason: z.string().min(3),
  details: z.string().optional(),
});

