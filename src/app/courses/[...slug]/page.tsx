import * as React from "react";
import { notFound, redirect } from "next/navigation";
import { ALL_COURSES } from "@/lib/data/seed-data";
import { CourseDetailView } from "@/components/academy/CourseDetailView";
import { LessonPlayerView } from "@/components/academy/LessonPlayerView";
import { CourseDiagnosticView } from "@/components/academy/CourseDiagnosticView";
import { CourseAssessmentView } from "@/components/academy/CourseAssessmentView";

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  for (const course of ALL_COURSES) {
    // 1. Course syllabus route: /courses/[courseSlug]
    params.push({ slug: [course.slug] });

    // 2. Course diagnostic route: /courses/[courseSlug]/diagnostic
    params.push({ slug: [course.slug, "diagnostic"] });

    // 3. Lesson routes: /courses/[courseSlug]/lessons/[lessonSlug]
    for (const mod of course.syllabus) {
      for (const les of mod.lessons) {
        if ((les as any).slug) {
          params.push({ slug: [course.slug, "lessons", (les as any).slug] });
        }
        params.push({ slug: [course.slug, "lessons", les.id] });
      }
    }
  }

  return params;
}

interface CoursesCatchAllProps {
  params: {
    slug: string[];
  };
}

export function generateMetadata({ params }: CoursesCatchAllProps) {
  const parts = params.slug || [];

  if (parts.length === 1) {
    const course = ALL_COURSES.find((c) => c.slug === parts[0]);
    if (course) {
      return {
        title: `${course.title} (${course.level}) — Trainbow HUB Academy`,
        description: course.shortDescription,
      };
    }
  }

  if (parts.length === 2 && parts[1] === "diagnostic") {
    const course = ALL_COURSES.find((c) => c.slug === parts[0]);
    if (course) {
      return {
        title: `Diagnostic Assessment — ${course.title} — Trainbow HUB Academy`,
        description: `Find your weak spots and get a personalized remediation path for ${course.title}.`,
      };
    }
  }

  if (parts.length === 3 && parts[1] === "lessons") {
    const course = ALL_COURSES.find((c) => c.slug === parts[0]);
    if (course) {
      let lessonTitle = "Lesson";
      for (const m of course.syllabus) {
        const found = m.lessons.find((l) => (l as any).slug === parts[2] || l.id === parts[2]);
        if (found) {
          lessonTitle = found.title;
          break;
        }
      }
      return {
        title: `${lessonTitle} — ${course.title} — Trainbow HUB Academy`,
        description: `Interactive lesson and checkpoint practice for ${lessonTitle} in ${course.title}.`,
      };
    }
  }

  return {
    title: "Course Syllabus — Trainbow HUB Academy",
    description: "Curriculum-aligned masterclasses and structured lessons.",
  };
}

export default function CoursesCatchAllPage({ params }: CoursesCatchAllProps) {
  const parts = params.slug || [];

  // 1. Single segment: /courses/[courseSlug]
  if (parts.length === 1) {
    const courseSlug = parts[0];
    const course = ALL_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      notFound();
    }
    return <CourseDetailView course={course} />;
  }

  // 2. Two segments: /courses/[courseSlug]/diagnostic
  if (parts.length === 2 && parts[1] === "diagnostic") {
    const courseSlug = parts[0];
    const course = ALL_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      notFound();
    }
    return <CourseDiagnosticView course={course} />;
  }

  // 2b. Two segments: /courses/[courseSlug]/final-assessment
  if (parts.length === 2 && parts[1] === "final-assessment") {
    const courseSlug = parts[0];
    const course = ALL_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      notFound();
    }
    return <CourseAssessmentView course={course} type="final_assessment" />;
  }

  // 2c. Four segments: /courses/[courseSlug]/modules/[moduleId]/test
  if (parts.length === 4 && parts[1] === "modules" && parts[3] === "test") {
    const [courseSlug, , moduleId] = parts;
    const course = ALL_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      notFound();
    }
    const modExists = course.syllabus.some((m) => m.id === moduleId);
    if (!modExists) {
      notFound();
    }
    return <CourseAssessmentView course={course} type="module_test" moduleId={moduleId} />;
  }

  // 3. Three segments: /courses/[courseSlug]/lessons/[lessonSlug]
  if (parts.length === 3 && parts[1] === "lessons") {
    const [courseSlug, , lessonSlug] = parts;
    const course = ALL_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      notFound();
    }

    // STRICT CHECK: Verify that the lesson belongs to THIS course
    const belongsToCourse = course.syllabus.some((m) =>
      m.lessons.some(
        (l) =>
          (l as any).slug === lessonSlug ||
          l.id === lessonSlug ||
          (lessonSlug === "l1" && l.id === "waec-l1")
      )
    );

    if (!belongsToCourse) {
      notFound();
    }

    return <LessonPlayerView courseSlug={courseSlug} lessonSlug={lessonSlug} />;
  }

  // 4. Two segments: legacy /courses/[track]/[subject]
  if (parts.length === 2) {
    const [track, subject] = parts;
    const trackToCourseMap: Record<string, string> = {
      "waec-ssce": "waec-ssce-mathematics-mastery",
      "jamb-utme": "jamb-utme-speed-mathematics",
      "jss-bece": "jss3-basic-mathematics-bece-prep",
      "primary-ncee": "primary6-quantitative-reasoning-common-entrance",
      "cambridge-igcse": "cambridge-igcse-extended-mathematics",
    };

    if (trackToCourseMap[track]) {
      redirect(`/courses/${trackToCourseMap[track]}`);
    }

    redirect(`/academy/${subject}`);
  }

  notFound();
}
