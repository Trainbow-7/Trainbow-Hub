/**
 * Trainbow HUB: Chemistry Comprehensive Curriculum & Course Registry
 *
 * Grounded in:
 * 1. NERDC Senior Secondary Chemistry Curriculum (SS 1-3)
 * 2. WAEC WASSCE Chemistry Regulations & Syllabus (2024-2026)
 * 3. JAMB UTME Chemistry Specification (IBASS 2024-2026)
 * 4. NECO SSCE Chemistry Examination Guidelines
 *
 * All content starts with reviewStatus = "needs_teacher_review" (Teacher Review Gate).
 */

import { CourseData, CourseModuleData, CourseLessonData } from "./curricula";

export interface ChemistryFormula {
  name: string;
  expression: string; // KaTeX format (e.g. "n = \\frac{m}{M}")
  variables: { symbol: string; meaning: string; unit: string }[];
}

export interface ChemistryConstant {
  symbol: string;
  name: string;
  value: string;
  unit: string;
  examConvention?: string; // e.g. "Molar volume of gas at s.t.p. = 22.4 dm³/mol (WAEC & JAMB)"
}

export interface ChemistryLessonData extends CourseLessonData {
  subtitle?: string;
  weakAreaCodes: string[];
  formulas?: ChemistryFormula[];
  constantsTable?: ChemistryConstant[];
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
    family:
      | "CHEMISTRY_APPARATUS"
      | "CHEMISTRY_STRUCTURE"
      | "CHEMISTRY_TITRATION"
      | "CHEMISTRY_ELECTROLYSIS"
      | "CHEMISTRY_ENERGY_PROFILE"
      | "CHEMISTRY_PERIODIC_TREND";
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
  safetyNote?: string;
}

export interface ChemistryModuleData extends CourseModuleData {
  lessons: ChemistryLessonData[];
}

export interface ChemistryCourseData extends CourseData {
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
  modules: ChemistryModuleData[];
}

// Sub-course modules imported
import { SENIOR_SECONDARY_CHEMISTRY_COURSES } from "./courses/chemistry-senior-secondary";
import { EXAM_PREP_CHEMISTRY_COURSES } from "./courses/chemistry-exam-prep";
import { PRACTICAL_BOOTCAMP_CHEMISTRY_COURSES } from "./courses/chemistry-practical-bootcamps";
import { DEEP_DIVE_CHEMISTRY_COURSES } from "./courses/chemistry-deep-dives";

// ============================================================================
// COMBINED 12 CHEMISTRY COURSES
// ============================================================================
export const CHEMISTRY_COURSES_DATA: ChemistryCourseData[] = [
  ...SENIOR_SECONDARY_CHEMISTRY_COURSES,
  ...EXAM_PREP_CHEMISTRY_COURSES,
  ...PRACTICAL_BOOTCAMP_CHEMISTRY_COURSES,
  ...DEEP_DIVE_CHEMISTRY_COURSES,
];

export function getChemistryCourseBySlug(slug: string): ChemistryCourseData | undefined {
  return CHEMISTRY_COURSES_DATA.find((c) => c.slug === slug);
}

export function listAllChemistryLessons(): { courseSlug: string; lesson: ChemistryLessonData }[] {
  const result: { courseSlug: string; lesson: ChemistryLessonData }[] = [];
  for (const course of CHEMISTRY_COURSES_DATA) {
    for (const mod of course.modules) {
      for (const les of mod.lessons) {
        result.push({ courseSlug: course.slug, lesson: les });
      }
    }
  }
  return result;
}

export function getChemistryLessonBySlug(
  courseSlug: string,
  lessonSlug: string
):
  | {
      course: ChemistryCourseData;
      module: ChemistryModuleData;
      lesson: ChemistryLessonData;
    }
  | undefined {
  const course = getChemistryCourseBySlug(courseSlug);
  if (!course) return undefined;

  for (const courseModule of course.modules) {
    const lesson = courseModule.lessons.find((l) => l.slug === lessonSlug || l.id === lessonSlug);
    if (lesson) {
      return { course, module: courseModule, lesson };
    }
  }
  return undefined;
}

