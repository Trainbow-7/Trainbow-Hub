import * as React from "react";
import { notFound, redirect } from "next/navigation";
import { PRIMARY_INSTRUCTOR } from "@/data/instructor";
import { TrackId, EXAM_TRACKS } from "@/data/pricing";
import { CATALOGUE_SUBJECTS, getSubjectBySlug } from "@/data/courses";
import { SubjectSyllabusView } from "@/components/academy/SubjectSyllabusView";

const courseSlugMap: Record<string, string> = {
  "waec-ssce-mathematics-mastery": "waec-ssce-mathematics-mastery",
  "jamb-utme-speed-mathematics": "jamb-utme-speed-mathematics",
  "jss3-basic-mathematics-bece-prep": "jss3-basic-mathematics-bece-prep",
  "ss2-algebra-and-trigonometry-deep-dive": "ss2-algebra-and-trigonometry-deep-dive",
  "primary6-quantitative-reasoning-common-entrance": "primary6-quantitative-reasoning-common-entrance",
  "cambridge-igcse-extended-mathematics": "cambridge-igcse-extended-mathematics",
};

const trackToCourseMap: Record<string, string> = {
  "waec-ssce": "waec-ssce-mathematics-mastery",
  "jamb-utme": "jamb-utme-speed-mathematics",
  "jss-bece": "jss3-basic-mathematics-bece-prep",
  "primary-ncee": "primary6-quantitative-reasoning-common-entrance",
  "cambridge-igcse": "cambridge-igcse-extended-mathematics",
};

export function generateStaticParams() {
  const tracks = Object.keys(EXAM_TRACKS) as TrackId[];
  const params: { instructorSlug: string; slug: string[] }[] = [];

  for (const track of tracks) {
    for (const sub of CATALOGUE_SUBJECTS) {
      params.push({
        instructorSlug: PRIMARY_INSTRUCTOR.slug,
        slug: [track, sub.slug],
      });
    }
  }

  for (const sub of CATALOGUE_SUBJECTS) {
    params.push({
      instructorSlug: PRIMARY_INSTRUCTOR.slug,
      slug: [sub.slug],
    });
  }

  return params;
}

interface CatchAllProps {
  params: {
    instructorSlug: string;
    slug: string[];
  };
}

export function generateMetadata({ params }: CatchAllProps) {
  let subjectSlug = params.slug?.[1] || params.slug?.[0] || "mathematics";
  let trackId: TrackId = (params.slug?.[0] as TrackId) in EXAM_TRACKS ? (params.slug[0] as TrackId) : "waec-ssce";

  const subject = getSubjectBySlug(subjectSlug);
  const track = EXAM_TRACKS[trackId];

  return {
    title: `${subject?.name || "Subject"} Syllabus (${track?.shortName || "Exam"}) — Trainbow HUB Academy`,
    description: `Complete exam syllabus, high-frequency topics, and practice questions for ${subject?.name || "Subject"}.`,
  };
}

export default function InstructorCourseCatchAllPage({ params }: CatchAllProps) {
  const parts = params.slug || [];

  if (parts.length === 1) {
    const single = parts[0];
    if (courseSlugMap[single]) {
      redirect(`/courses/${courseSlugMap[single]}`);
    }

    const sub = getSubjectBySlug(single);
    if (!sub) notFound();
    return <SubjectSyllabusView subject={sub} trackId="waec-ssce" />;
  }

  if (parts.length >= 2) {
    const potentialTrack = parts[0] as TrackId;
    const trackId: TrackId = potentialTrack in EXAM_TRACKS ? potentialTrack : "waec-ssce";
    const subSlug = parts[1];

    if (subSlug === "mathematics" && trackToCourseMap[trackId]) {
      redirect(`/courses/${trackToCourseMap[trackId]}`);
    }

    const sub = getSubjectBySlug(subSlug);
    if (!sub) notFound();
    return <SubjectSyllabusView subject={sub} trackId={trackId} />;
  }

  notFound();
}
