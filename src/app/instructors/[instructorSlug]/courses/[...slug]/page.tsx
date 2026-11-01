import * as React from "react";
import { notFound, redirect } from "next/navigation";
import { PRIMARY_INSTRUCTOR } from "@/data/instructor";
import { TrackId, EXAM_TRACKS } from "@/data/pricing";
import { CATALOGUE_SUBJECTS, getSubjectBySlug } from "@/data/courses";
import { SubjectSyllabusView } from "@/components/academy/SubjectSyllabusView";

const legacyRedirects: Record<string, { track: TrackId; subject: string }> = {
  "waec-ssce-mathematics-mastery": { track: "waec-ssce", subject: "mathematics" },
  "jamb-utme-speed-mathematics": { track: "jamb-utme", subject: "mathematics" },
  "jss3-basic-mathematics-bece-prep": { track: "jss-bece", subject: "mathematics" },
  "ss2-algebra-and-trigonometry-deep-dive": { track: "waec-ssce", subject: "mathematics" },
  "primary6-quantitative-reasoning-common-entrance": { track: "primary-ncee", subject: "mathematics" },
  "cambridge-igcse-extended-mathematics": { track: "cambridge-igcse", subject: "mathematics" },
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

  // Also include single-slug params
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

  if (legacyRedirects[subjectSlug]) {
    trackId = legacyRedirects[subjectSlug].track;
    subjectSlug = legacyRedirects[subjectSlug].subject;
  }

  const subject = getSubjectBySlug(subjectSlug);
  const track = EXAM_TRACKS[trackId];

  return {
    title: `${subject?.name || "Subject"} Syllabus (${track?.shortName || "Exam"}) — Taught by ${PRIMARY_INSTRUCTOR.name} — Trainbow HUB`,
    description: `Complete exam syllabus, high-frequency topics, and practice questions for ${subject?.name || "Subject"} directed by ${PRIMARY_INSTRUCTOR.name}.`,
  };
}

export default function InstructorCourseCatchAllPage({ params }: CatchAllProps) {
  const parts = params.slug || [];

  if (parts.length === 1) {
    const single = parts[0];
    if (legacyRedirects[single]) {
      const { track, subject } = legacyRedirects[single];
      redirect(`/instructors/${PRIMARY_INSTRUCTOR.slug}/courses/${track}/${subject}`);
    }

    const sub = getSubjectBySlug(single);
    if (!sub) notFound();
    return <SubjectSyllabusView subject={sub} trackId="waec-ssce" />;
  }

  if (parts.length >= 2) {
    const potentialTrack = parts[0] as TrackId;
    const trackId: TrackId = potentialTrack in EXAM_TRACKS ? potentialTrack : "waec-ssce";
    const sub = getSubjectBySlug(parts[1]);

    if (!sub) notFound();
    return <SubjectSyllabusView subject={sub} trackId={trackId} />;
  }

  notFound();
}

