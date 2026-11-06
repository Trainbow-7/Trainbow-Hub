import { AssessmentItem, SanitizedAssessmentItem, ThinkingLevel } from "./types";
import {
  ALL_ASSESSMENT_ITEMS,
  getItemsByLesson,
  getItemsByModule,
  getItemsByCourse,
} from "./banks";

/**
 * Fisher-Yates shuffle for arrays
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Strips all answer keys, explanations, and verification evidence from an item
 * so it is safe to deliver over the network to a client before submission.
 */
export function sanitizeAssessmentItem(item: AssessmentItem): SanitizedAssessmentItem {
  // If options exist, sanitize and shuffle them
  let sanitizedOptions: { id: string; text: string }[] | undefined;
  if (item.options && item.options.length > 0) {
    // Preserve option id/text but strip misconceptionId and feedback
    sanitizedOptions = item.options.map((opt) => ({
      id: opt.id,
      text: opt.text,
    }));
  }

  let orderItems: { id: string; text: string }[] | undefined;
  if (item.questionType === "ordering" && item.options) {
    orderItems = shuffleArray(
      item.options.map((o) => ({ id: o.id, text: o.text }))
    );
  }

  return {
    id: item.id,
    courseSlug: item.courseSlug,
    moduleId: item.moduleId,
    lessonId: item.lessonId,
    objectiveIndex: item.objectiveIndex ?? 0,
    objective: item.objective,
    thinkingLevel: item.thinkingLevel,
    questionType: item.questionType,
    prompt: item.prompt,
    options: sanitizedOptions,
    orderItems,
    difficultyScore: item.difficultyScore ?? 3,
    hint: item.hint,
  };
}

/**
 * Draws a balanced checkpoint quiz for a lesson:
 * Typically 7 questions (between 6 and 8):
 * ~2 Understanding, ~3 Application, ~1 Error Analysis, ~1 Challenge/Transfer
 */
export function drawLessonCheckpoint(
  courseSlugOrLessonId: string,
  lessonIdOrCount?: string | number,
  maybeCount?: number
): AssessmentItem[] {
  let courseSlug: string | undefined;
  let lessonId: string;
  let count = 7;

  if (typeof lessonIdOrCount === "string") {
    courseSlug = courseSlugOrLessonId;
    lessonId = lessonIdOrCount;
    if (typeof maybeCount === "number") count = maybeCount;
  } else {
    lessonId = courseSlugOrLessonId;
    if (typeof lessonIdOrCount === "number") count = lessonIdOrCount;
  }

  const bank = courseSlug ? getItemsByLesson(courseSlug, lessonId) : getItemsByLesson(lessonId);
  if (bank.length === 0) return [];
  if (bank.length <= count) return shuffleArray(bank);

  const byLevel: Record<string, AssessmentItem[]> = {
    understanding: [],
    application: [],
    error_analysis: [],
    challenge_transfer: [],
    challenge: [],
  };

  for (const item of bank) {
    const lvl = (item.thinkingLevel as string) === "challenge" ? "challenge_transfer" : item.thinkingLevel;
    if (byLevel[lvl]) {
      byLevel[lvl].push(item);
    } else {
      byLevel.application.push(item);
    }
  }

  const selected: AssessmentItem[] = [];

  // Pick ~2 understanding
  const shuffledU = shuffleArray(byLevel.understanding);
  selected.push(...shuffledU.slice(0, 2));

  // Pick ~3 application
  const shuffledA = shuffleArray(byLevel.application);
  selected.push(...shuffledA.slice(0, 3));

  // Pick ~1 error analysis
  const shuffledE = shuffleArray(byLevel.error_analysis);
  selected.push(...shuffledE.slice(0, 1));

  // Pick ~1 challenge / transfer
  const shuffledC = shuffleArray(byLevel.challenge_transfer);
  selected.push(...shuffledC.slice(0, 1));

  // If we haven't reached count, fill from remaining items in the bank
  if (selected.length < count) {
    const selectedIds = new Set(selected.map((s) => s.id));
    const remaining = bank.filter((item) => !selectedIds.has(item.id));
    const shuffledRem = shuffleArray(remaining);
    selected.push(...shuffledRem.slice(0, count - selected.length));
  }

  // Shuffle question order and randomize options inside each question
  return shuffleArray(selected).map((item) => {
    if (item.options && item.options.length > 0 && item.questionType === "single_choice") {
      // Re-map option letters A, B, C, D to shuffled choices, maintaining correct answer
      const correctOpt = item.options.find((o) => o.id === item.correctAnswer);
      const shuffledOpts = shuffleArray(item.options);
      const letters = ["A", "B", "C", "D", "E", "F"];
      let newCorrectId = "A";

      const reindexedOpts = shuffledOpts.map((opt, idx) => {
        const newId = letters[idx] || opt.id;
        if (opt.id === item.correctAnswer) {
          newCorrectId = newId;
        }
        return {
          ...opt,
          id: newId,
        };
      });

      return {
        ...item,
        options: reindexedOpts,
        correctAnswer: newCorrectId,
      };
    }
    return item;
  });
}

/**
 * Draws a module test:
 * 10 to 12 questions drawn across all lessons in the module
 */
export function drawModuleTest(
  courseSlugOrModuleId: string,
  moduleIdOrCount?: string | number,
  maybeCount?: number
): AssessmentItem[] {
  let courseSlug: string | undefined;
  let moduleId: string;
  let count = 12;

  if (typeof moduleIdOrCount === "string") {
    courseSlug = courseSlugOrModuleId;
    moduleId = moduleIdOrCount;
    if (typeof maybeCount === "number") count = maybeCount;
  } else {
    moduleId = courseSlugOrModuleId;
    if (typeof moduleIdOrCount === "number") count = moduleIdOrCount;
  }

  let bank = getItemsByModule(moduleId);
  if (courseSlug) {
    bank = bank.filter((item) => item.courseSlug === courseSlug);
  }
  if (bank.length <= count) return shuffleArray(bank);

  // Group items by lesson
  const byLesson = new Map<string, AssessmentItem[]>();
  for (const item of bank) {
    if (!byLesson.has(item.lessonId)) byLesson.set(item.lessonId, []);
    byLesson.get(item.lessonId)!.push(item);
  }

  const lessons = Array.from(byLesson.keys());
  const perLesson = Math.max(1, Math.floor(count / lessons.length));
  const selected: AssessmentItem[] = [];

  for (const lesId of lessons) {
    const drawn = drawLessonCheckpoint(courseSlug || "", lesId, perLesson);
    selected.push(...drawn);
  }

  if (selected.length < count) {
    const selectedIds = new Set(selected.map((s) => s.id));
    const remaining = bank.filter((item) => !selectedIds.has(item.id));
    selected.push(...shuffleArray(remaining).slice(0, count - selected.length));
  }

  return shuffleArray(selected.slice(0, count));
}

/**
 * Draws a course final assessment:
 * 30 to 40 questions covering every module proportionally
 */
export function drawCourseFinalAssessment(courseSlug: string, count = 35): AssessmentItem[] {
  const bank = getItemsByCourse(courseSlug);
  if (bank.length <= count) return shuffleArray(bank);

  // Group items by module
  const byModule = new Map<string, AssessmentItem[]>();
  for (const item of bank) {
    if (!byModule.has(item.moduleId)) byModule.set(item.moduleId, []);
    byModule.get(item.moduleId)!.push(item);
  }

  const modules = Array.from(byModule.keys());
  const perModule = Math.max(1, Math.floor(count / modules.length));
  const selected: AssessmentItem[] = [];

  for (const modId of modules) {
    const drawn = drawModuleTest(courseSlug, modId, perModule);
    selected.push(...drawn);
  }

  if (selected.length < count) {
    const selectedIds = new Set(selected.map((s) => s.id));
    const remaining = bank.filter((item) => !selectedIds.has(item.id));
    selected.push(...shuffleArray(remaining).slice(0, count - selected.length));
  }

  return shuffleArray(selected.slice(0, count));
}

