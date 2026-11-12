/**
 * Trainbow HUB: Physics Comprehensive Curriculum & Course Registry
 *
 * Grounded in:
 * 1. NERDC Senior Secondary Physics Curriculum (SS 1-3)
 * 2. WAEC WASSCE Physics Regulations & Syllabus (2024-2026)
 * 3. JAMB UTME Physics Specification (IBASS 2024-2026)
 * 4. NECO SSCE Physics Examination Guidelines
 *
 * All content starts with reviewStatus = "needs_teacher_review" (Teacher Review Gate).
 */

import { CourseData, CourseModuleData, CourseLessonData } from "./curricula";

export interface PhysicsFormula {
  name: string;
  expression: string; // KaTeX format (e.g. "v = u + at")
  variables: { symbol: string; meaning: string; unit: string }[];
}

export interface PhysicsConstant {
  symbol: string;
  name: string;
  value: string;
  unit: string;
  examConvention?: string; // e.g. "g = 9.8 m/s² (WAEC) or 10.0 m/s² (JAMB)"
}

export interface PhysicsLessonData extends CourseLessonData {
  subtitle?: string;
  weakAreaCodes: string[];
  formulas?: PhysicsFormula[];
  constantsTable?: PhysicsConstant[];
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
  diagram?: {
    id: string;
    title: string;
    family: "PHYSICS_MECHANICS" | "PHYSICS_CIRCUIT" | "PHYSICS_OPTICS" | "PHYSICS_WAVE" | "PHYSICS_GRAPH";
    svg?: string;
    altText: string;
  };
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

export interface PhysicsModuleData extends CourseModuleData {
  lessons: PhysicsLessonData[];
}

export interface PhysicsCourseData extends CourseData {
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
  modules: PhysicsModuleData[];
}

// Sub-course modules imported
import { SENIOR_SECONDARY_PHYSICS_COURSES } from "./courses/physics-senior-secondary";
import { EXAM_PREP_PHYSICS_COURSES } from "./courses/physics-exam-prep";
import { PRACTICAL_BOOTCAMP_PHYSICS_COURSES } from "./courses/physics-practical-bootcamps";
import { DEEP_DIVE_PHYSICS_COURSES } from "./courses/physics-deep-dives";

// ============================================================================
// COMBINED 12 PHYSICS COURSES
// ============================================================================
export const PHYSICS_COURSES_DATA: PhysicsCourseData[] = [
  ...SENIOR_SECONDARY_PHYSICS_COURSES,
  ...EXAM_PREP_PHYSICS_COURSES,
  ...PRACTICAL_BOOTCAMP_PHYSICS_COURSES,
  ...DEEP_DIVE_PHYSICS_COURSES,
];

export function getPhysicsCourseBySlug(slug: string): PhysicsCourseData | undefined {
  return PHYSICS_COURSES_DATA.find((c) => c.slug === slug);
}

export function listAllPhysicsLessons(): { courseSlug: string; lesson: PhysicsLessonData }[] {
  const result: { courseSlug: string; lesson: PhysicsLessonData }[] = [];
  for (const course of PHYSICS_COURSES_DATA) {
    for (const mod of course.modules) {
      for (const les of mod.lessons) {
        result.push({ courseSlug: course.slug, lesson: les });
      }
    }
  }
  return result;
}

export function getPhysicsLessonBySlug(courseSlug: string, lessonSlug: string): {
  course: PhysicsCourseData;
  module: PhysicsModuleData;
  lesson: PhysicsLessonData;
} | undefined {
  const course = getPhysicsCourseBySlug(courseSlug);
  if (!course) return undefined;

  for (const courseModule of course.modules) {
    const lesson = courseModule.lessons.find((l) => l.slug === lessonSlug || l.id === lessonSlug);
    if (lesson) {
      return { course, module: courseModule, lesson };
    }
  }
  return undefined;
}
