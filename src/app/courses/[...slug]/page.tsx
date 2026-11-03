import * as React from "react";
import { notFound, redirect } from "next/navigation";
import { SEED_COURSES } from "@/lib/data/seed-data";
import { CourseDetailView } from "@/components/academy/CourseDetailView";
import { LessonPlayerView } from "@/components/academy/LessonPlayerView";

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  for (const course of SEED_COURSES) {
    // 1. Course syllabus route: /courses/[courseSlug]
    params.push({ slug: [course.slug] });

    // 2. Lesson routes: /courses/[courseSlug]/lessons/[lessonSlug]
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
    const course = SEED_COURSES.find((c) => c.slug === parts[0]);
    if (course) {
      return {
        title: `${course.title} (${course.level}) — Trainbow HUB Academy`,
        description: course.shortDescription,
      };
    }
  }

  if (parts.length === 3 && parts[1] === "lessons") {
    const course = SEED_COURSES.find((c) => c.slug === parts[0]);
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
    const course = SEED_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      notFound();
    }
    return <CourseDetailView course={course} />;
  }

  // 2. Three segments: /courses/[courseSlug]/lessons/[lessonSlug]
  if (parts.length === 3 && parts[1] === "lessons") {
    const [courseSlug, , lessonSlug] = parts;
    const course = SEED_COURSES.find((c) => c.slug === courseSlug);
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

  // 3. Two segments: legacy /courses/[track]/[subject]
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
