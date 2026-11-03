import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { SEED_COURSES } from "@/lib/data/seed-data";
import { getLessonById } from "@/lib/data/academy-content";
import { getCourseLessonList } from "@/lib/academy/engine";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string; lessonId: string } }
) {
  try {
    const { slug, lessonId } = params;
    const session = await getSession();
    const userId = session?.id || "usr-std-001";

    const course = SEED_COURSES.find((c) => c.slug === slug);
    if (!course) {
      return NextResponse.json(
        { success: false, error: "Course not found" },
        { status: 404 }
      );
    }

    // STRICT CHECK: Verify that the lesson belongs to THIS course
    let foundLesson: any = null;
    let moduleTitle = "Module 1";
    for (const m of course.syllabus) {
      const match = m.lessons.find(
        (l: any) =>
          l.id === lessonId ||
          l.slug === lessonId ||
          (lessonId === "l1" && l.id === "waec-l1") ||
          (lessonId === "waec-l1" && l.id === "l1")
      );
      if (match) {
        foundLesson = match;
        moduleTitle = m.title;
        break;
      }
    }

    if (!foundLesson) {
      return NextResponse.json(
        {
          success: false,
          error: `Lesson '${lessonId}' does not belong to course '${slug}'`,
        },
        { status: 404 }
      );
    }

    // Retrieve detailed lesson
    let lesson =
      getLessonById(foundLesson.id, course.slug) ||
      getLessonById(foundLesson.slug || foundLesson.id, course.slug);

    if (!lesson) {
      lesson = {
        id: foundLesson.id,
        courseSlug: course.slug,
        title: foundLesson.title,
        moduleTitle,
        durationMinutes: foundLesson.durationMinutes,
        isFreePreview: foundLesson.isFreePreview,
        videoTitle: `${course.title} — ${foundLesson.title}`,
        videoThumbnail: `/images/lessons/${foundLesson.id}.jpg`,
        keyObjectives: foundLesson.objectives || [
          `Master core principles of ${foundLesson.title}`,
          "Apply standard mathematical methods systematically",
          "Solve curriculum exam problems step-by-step",
        ],
        markdownNotes: `
# ${foundLesson.title}

Welcome to this lesson in **${course.title}** (${course.level}).

---

## Overview & Mathematical Concepts
${foundLesson.summary || "This topic builds directly upon core curriculum objectives."}

### Key Learning Objectives
${(foundLesson.objectives || []).map((o: any) => `- ${o}`).join("\n")}

### Essential Formulas & Key Points
${(foundLesson.keyPoints || []).map((p: any, idx: number) => `${idx + 1}. ${p}`).join("\n")}
        `,
        worksheets: [
          {
            title: `${foundLesson.title} Practice Sheet (PDF)`,
            filename: `${foundLesson.slug || foundLesson.id}_practice_drill.pdf`,
            size: "450 KB",
            type: "PDF Document",
          },
        ],
        quiz: {
          id: `quiz-${foundLesson.id}`,
          title: `Practice Checkpoint: ${foundLesson.title}`,
          passPercentage: 60,
          questions: [
            {
              id: `q_${foundLesson.id}_1`,
              prompt: `Which of the following best represents the foundational principle for ${foundLesson.title}?`,
              options: [
                {
                  id: "A",
                  text: (foundLesson.keyPoints && foundLesson.keyPoints[0]) || "Direct algebraic balance and substitution",
                },
                { id: "B", text: "Ignoring sign changes across the equals sign" },
                { id: "C", text: "Approximation without formal working" },
                { id: "D", text: "None of the above" },
              ],
              correctOptionId: "A",
              explanation: `Standard ${(course as any).examBody || "curriculum"} marking schemes award full method marks for systematic application of core principles.`,
              topic: foundLesson.title,
            },
          ],
        },
      };
    }

    // Get user's enrollment and progress
    const enrollment = await db.findEnrollment(userId, slug);
    const isCompleted =
      enrollment?.completedLessonIds.includes(foundLesson.id) ||
      enrollment?.completedLessonIds.includes(foundLesson.slug || "") ||
      false;

    // Get next and previous lesson pointers
    const allLessons = getCourseLessonList(slug);
    const currentIndex = allLessons.findIndex(
      (l: any) => l.id === foundLesson.id || (foundLesson.slug && l.slug === foundLesson.slug)
    );
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson =
      currentIndex !== -1 && currentIndex + 1 < allLessons.length
        ? allLessons[currentIndex + 1]
        : null;

    // Update last accessed lesson if enrolled
    if (enrollment) {
      await db.createOrUpdateEnrollment({
        userId,
        courseSlug: slug,
        lastAccessedLessonId: foundLesson.id,
      });
    }

    // Retrieve verified real educational videos for this lesson
    let allLessonVideos = await db.findLessonVideos(foundLesson.id);
    if (allLessonVideos.length === 0 && foundLesson.slug) {
      allLessonVideos = await db.findLessonVideos(foundLesson.slug);
    }
    // Filter approved videos strictly matching this course or topic
    let approvedVideos = allLessonVideos.filter(
      (v) => v.status === "APPROVED" && (v.courseSlug === slug || !v.courseSlug)
    );

    // Fallback: If DB query returned no approved record but curriculum lesson has verified videoId
    if (approvedVideos.length === 0 && foundLesson.videoId) {
      const fallbackVideo = {
        id: `lv-${foundLesson.id}-primary`,
        lessonId: foundLesson.id,
        courseSlug: slug,
        provider: "YOUTUBE" as const,
        providerVideoId: foundLesson.videoId,
        title: `${course.title} — ${foundLesson.title}`,
        channelId: "UC_TRUSTED_EDU",
        channelName: "The Organic Chemistry Tutor / Khan Academy",
        durationSeconds: (foundLesson.durationMinutes || 30) * 60,
        language: "en",
        thumbnailUrl: `https://i.ytimg.com/vi/${foundLesson.videoId}/hqdefault.jpg`,
        embeddable: true,
        status: "APPROVED" as const,
        relevanceScore: 0.95,
        relevanceReasons: ["Curriculum-aligned verified video"],
        isPrimary: true,
        failureCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      approvedVideos.push(fallbackVideo);
    }

    const primaryVideo = approvedVideos.find((v) => v.isPrimary) || approvedVideos[0] || null;
    const alternateVideos = approvedVideos.filter((v) => v.id !== primaryVideo?.id);

    // Get user's video progress if primary video exists
    let videoProgress = null;
    if (primaryVideo) {
      videoProgress = await db.getVideoProgress(userId, foundLesson.id, primaryVideo.id);
    }

    return NextResponse.json({
      success: true,
      course: {
        id: course.id,
        slug: course.slug,
        title: course.title,
        level: course.level,
        subjectName: course.subjectName,
        instructorName: course.instructorName,
        syllabus: course.syllabus,
      },
      lesson,
      video: {
        hasVideo: !!primaryVideo,
        primary: primaryVideo,
        alternates: alternateVideos,
        userProgress: videoProgress,
        isWaecAligned: course.level.toLowerCase().includes("waec") || course.slug.includes("waec"),
      },
      progress: {
        isEnrolled: !!enrollment,
        isCompleted,
        completedLessonIds: enrollment?.completedLessonIds || [],
        progressPercentage: enrollment?.progressPercentage || 0,
        totalLessons: allLessons.length,
      },
      navigation: {
        prevLesson: prevLesson ? { id: prevLesson.id, slug: prevLesson.slug, title: prevLesson.title } : null,
        nextLesson: nextLesson ? { id: nextLesson.id, slug: nextLesson.slug, title: nextLesson.title } : null,
      },
    });
  } catch (err: any) {
    console.error("Failed to retrieve lesson:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
