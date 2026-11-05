/**
 * Trainbow HUB: English Language Comprehensive Curriculum & Course Registry
 *
 * Grounded in:
 * 1. NERDC 9-Year Basic Education English Curriculum (Primary 1-6 & JSS 1-3)
 * 2. WAEC WASSCE English Language Regulations & Syllabus (2024-2026)
 * 3. JAMB UTME Use of English Specification (IBASS 2024-2026)
 * 4. NECO BECE & SSCE English Examination Guidelines
 *
 * All content starts with reviewStatus = "needs_teacher_review" (Teacher Review Gate).
 */

import { CourseData, CourseModuleData, CourseLessonData } from "./curricula";
import { PRIMARY_JSS_COURSES } from "./courses/english-primary-jss";
import { SS_EXAM_COURSES } from "./courses/english-ss-exams";
import { SKILLS_WORKSHOP_COURSES } from "./courses/english-skills-workshops";

export interface EnglishLessonData extends CourseLessonData {
  subtitle?: string;
  weakAreaCodes: string[];
  commonMistakes: {
    mistake: string;
    wrongExample: string;
    correctedExample: string;
    explanation: string;
  };
  workedExamples: {
    context: string;
    question: string;
    stepByStepSolution: string[];
    finalAnswer: string;
    ruleExplanation: string;
  }[];
  checkpoint: {
    id: string;
    title: string;
    passPercentage: number;
    verificationMethod: string;
    questions: {
      id: string;
      prompt: string;
      options: { id: string; text: string }[];
      correctOptionId: string;
      explanation: string;
      topic: string;
      weakAreaCode: string;
    }[];
  };
  examTip: string;
}

export interface EnglishModuleData extends CourseModuleData {
  lessons: EnglishLessonData[];
}

export interface EnglishCourseData extends CourseData {
  subtitle?: string;
  audience?: string;
  tags?: string[];
  syllabusAlignment?: {
    source: string;
    year: string;
    lastAlignedAt: string;
    needsVerification: boolean;
  };
  relatedCourseSlugs?: string[];
  modules: EnglishModuleData[];
}

// ============================================================================
// COMBINED 11 ENGLISH COURSES
// ============================================================================
export const ENGLISH_COURSES_DATA: EnglishCourseData[] = [
  ...PRIMARY_JSS_COURSES,
  ...SS_EXAM_COURSES,
  ...SKILLS_WORKSHOP_COURSES,
];

export function getEnglishCourseBySlug(slug: string): EnglishCourseData | undefined {
  return ENGLISH_COURSES_DATA.find((c) => c.slug === slug);
}

export function listAllEnglishLessons(): { courseSlug: string; lesson: EnglishLessonData }[] {
  const result: { courseSlug: string; lesson: EnglishLessonData }[] = [];
  for (const course of ENGLISH_COURSES_DATA) {
    for (const mod of course.modules) {
      for (const les of mod.lessons) {
        result.push({ courseSlug: course.slug, lesson: les });
      }
    }
  }
  return result;
}

export function getEnglishLessonBySlug(courseSlug: string, lessonSlug: string): {
  course: EnglishCourseData;
  module: EnglishModuleData;
  lesson: EnglishLessonData;
} | undefined {
  const course = getEnglishCourseBySlug(courseSlug);
  if (!course) return undefined;

  for (const mod of course.modules) {
    const lesson = mod.lessons.find((l) => l.slug === lessonSlug || l.id === lessonSlug);
    if (lesson) {
      return { course, module: mod, lesson };
    }
  }
  return undefined;
}
