import { db, EnrollmentRecord, StudyStatsRecord, AuthoringCourseRecord } from "@/lib/db";
import { SEED_COURSES } from "@/lib/data/seed-data";
import { getLessonById, DETAILED_LESSONS } from "@/lib/data/academy-content";

export interface QuestionGradingResult {
  id: string;
  prompt: string;
  userOption: string;
  correctOption: string;
  isCorrect: boolean;
  explanation: string;
  topic: string;
}

export interface QuizGradingResult {
  score: number; // 0 - 100
  totalQuestions: number;
  correctCount: number;
  passed: boolean;
  questionResults: QuestionGradingResult[];
  recommendedTopics: string[];
}

/**
 * Evaluates submitted quiz answers, records score, and generates targeted revision topics.
 */
export function gradeQuizAttempt(lessonId: string, answers: Record<string, string>): QuizGradingResult {
  const lesson = getLessonById(lessonId);
  if (!lesson || !lesson.quiz) {
    throw new Error(`Lesson with id '${lessonId}' or its quiz was not found.`);
  }

  const questions = lesson.quiz.questions;
  let correctCount = 0;
  const questionResults: QuestionGradingResult[] = [];
  const missedTopicsSet = new Set<string>();

  for (const q of questions) {
    const userOption = answers[q.id] || "";
    const isCorrect = userOption.toUpperCase() === q.correctOptionId.toUpperCase();

    if (isCorrect) {
      correctCount++;
    } else {
      missedTopicsSet.add(q.topic);
    }

    questionResults.push({
      id: q.id,
      prompt: q.prompt,
      userOption,
      correctOption: q.correctOptionId,
      isCorrect,
      explanation: q.explanation,
      topic: q.topic,
    });
  }

  const totalQuestions = questions.length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 100;
  const passed = score >= (lesson.quiz.passPercentage || 60);

  return {
    score,
    totalQuestions,
    correctCount,
    passed,
    questionResults,
    recommendedTopics: Array.from(missedTopicsSet),
  };
}

/**
 * Calculates percentage progress for a course.
 */
export function calculateCourseProgress(completedCount: number, totalLessons: number): number {
  if (totalLessons <= 0) return 0;
  return Math.min(100, Math.round((completedCount / totalLessons) * 100));
}

/**
 * Calculates updated streak days based on calendar dates.
 */
export function calculateUpdatedStreak(currentStreak: number, lastActiveDateStr: string): number {
  const today = new Date().toISOString().split("T")[0];
  if (lastActiveDateStr === today) {
    return Math.max(1, currentStreak);
  }

  const lastDate = new Date(lastActiveDateStr);
  const now = new Date(today);
  const diffTime = now.getTime() - lastDate.getTime();
  const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

  if (diffDays === 1) {
    return currentStreak + 1;
  } else if (diffDays > 1) {
    return 1;
  }
  return currentStreak;
}

/**
 * Helper to retrieve all lesson IDs in sequential order for a course.
 */
export function getCourseLessonList(courseSlug: string): { id: string; title: string; durationMinutes: number }[] {
  const course = SEED_COURSES.find((c) => c.slug === courseSlug);
  if (!course) return [];

  const list: { id: string; title: string; durationMinutes: number }[] = [];
  for (const mod of course.syllabus) {
    for (const l of mod.lessons) {
      list.push({ id: l.id, title: l.title, durationMinutes: l.durationMinutes });
    }
  }
  return list;
}

/**
 * Marks a lesson completed for a student, updating completion sets and study stats.
 */
export async function completeLessonForUser(userId: string, courseSlug: string, lessonId: string): Promise<{
  enrollment: EnrollmentRecord;
  studyStats: StudyStatsRecord;
  nextLessonId: string | null;
}> {
  const allLessons = getCourseLessonList(courseSlug);
  const totalLessonCount = allLessons.length;

  let enrollment = await db.findEnrollment(userId, courseSlug);
  const completedIds = new Set(enrollment?.completedLessonIds || []);
  completedIds.add(lessonId);

  // Find next lesson
  let nextLessonId: string | null = null;
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  if (currentIndex !== -1 && currentIndex + 1 < allLessons.length) {
    nextLessonId = allLessons[currentIndex + 1].id;
  }

  const progressPercentage = calculateCourseProgress(completedIds.size, totalLessonCount);

  enrollment = await db.createOrUpdateEnrollment({
    userId,
    courseSlug,
    completedLessonIds: Array.from(completedIds),
    lastAccessedLessonId: nextLessonId || lessonId,
    progressPercentage,
  });

  // Update study stats
  const currentStats = await db.getStudyStats(userId);
  const newStreak = calculateUpdatedStreak(currentStats.streakDays, currentStats.lastActiveDate);
  const todayStr = new Date().toISOString().split("T")[0];

  const updatedStats = await db.updateStudyStats(userId, {
    streakDays: newStreak,
    lastActiveDate: todayStr,
    totalMinutesStudied: currentStats.totalMinutesStudied + 35,
    lessonsCompleted: completedIds.size,
  });

  return {
    enrollment,
    studyStats: updatedStats,
    nextLessonId,
  };
}
