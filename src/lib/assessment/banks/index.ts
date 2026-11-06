import { AssessmentItem } from "../types";
import { WAEC_MATH_BANK } from "./waec-math-bank";
import { JAMB_MATH_BANK } from "./jamb-math-bank";
import { BECE_MATH_BANK } from "./bece-math-bank";
import { ALGEBRA_TRIG_BANK } from "./algebra-trig-bank";
import { PRIMARY6_MATH_BANK } from "./primary6-math-bank";
import { IGCSE_MATH_BANK } from "./igcse-math-bank";

export {
  WAEC_MATH_BANK,
  JAMB_MATH_BANK,
  BECE_MATH_BANK,
  ALGEBRA_TRIG_BANK,
  PRIMARY6_MATH_BANK,
  IGCSE_MATH_BANK,
};

export const ALL_ASSESSMENT_ITEMS: AssessmentItem[] = [
  ...WAEC_MATH_BANK,
  ...JAMB_MATH_BANK,
  ...BECE_MATH_BANK,
  ...ALGEBRA_TRIG_BANK,
  ...PRIMARY6_MATH_BANK,
  ...IGCSE_MATH_BANK,
];

export function getItemsByLesson(courseSlugOrLessonId: string, maybeLessonId?: string): AssessmentItem[] {
  if (maybeLessonId) {
    return ALL_ASSESSMENT_ITEMS.filter(
      (item) => item.courseSlug === courseSlugOrLessonId && item.lessonId === maybeLessonId
    );
  }
  return ALL_ASSESSMENT_ITEMS.filter((item) => item.lessonId === courseSlugOrLessonId);
}

export function getItemsByCourse(courseSlug: string): AssessmentItem[] {
  return ALL_ASSESSMENT_ITEMS.filter((item) => item.courseSlug === courseSlug);
}

export function getItemsByModule(moduleId: string): AssessmentItem[] {
  return ALL_ASSESSMENT_ITEMS.filter((item) => item.moduleId === moduleId);
}
