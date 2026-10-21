import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { SEED_COURSES } from "@/lib/data/seed-data";
import { getLessonById, DETAILED_LESSONS } from "@/lib/data/academy-content";
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

    // Retrieve detailed lesson or fallback generic mock for lessons beyond seed
    let lesson = getLessonById(lessonId);
    if (!lesson) {
      // Find within course syllabus
      let foundLesson = null;
      let moduleTitle = "Module 1";
      for (const m of course.syllabus) {
        const match = m.lessons.find((l) => l.id === lessonId);
        if (match) {
          foundLesson = match;
          moduleTitle = m.title;
          break;
        }
      }

      if (foundLesson) {
        lesson = {
          id: foundLesson.id,
          courseSlug: course.slug,
          title: foundLesson.title,
          moduleTitle,
          durationMinutes: foundLesson.durationMinutes,
          isFreePreview: foundLesson.isFreePreview,
          videoTitle: `${course.title} - ${foundLesson.title}`,
          videoThumbnail: "/images/lessons/waec-math-l1.jpg",
          keyObjectives: [
            `Master key principles of ${foundLesson.title}`,
            "Understand mathematical formulas and examination techniques",
            "Solve past exam problems with step-by-step clarity",
          ],
          markdownNotes: `
# ${foundLesson.title}

Welcome to this lesson in **${course.title}**.

---

## Overview & Mathematical Concepts
This topic builds directly upon core WAEC and senior secondary mathematics objectives. Make sure you have your scientific calculator and notebook ready as you follow each worked step.

### Step-by-Step Principles
1. Carefully write down all given variables and identities.
2. Select the appropriate formula from the syllabus reference.
3. Solve systematically and express final units or base subscripts clearly.
          `,
          worksheets: [
            {
              title: `${foundLesson.title} Practice Sheet (PDF)`,
              filename: `${foundLesson.id}_practice_drill.pdf`,
              size: "650 KB",
              type: "PDF Document",
            },
          ],
          quiz: {
            id: `quiz-${foundLesson.id}`,
            title: `Practice Checkpoint: ${foundLesson.title}`,
            passPercentage: 60,
            questions: [
              {
                id: "q_gen_1",
                prompt: `Which of the following best represents the foundational rule for ${foundLesson.title}?`,
                options: [
                  { id: "A", text: "Direct algebraic substitution and balance" },
                  { id: "B", text: "Ignoring sign changes across the equals sign" },
                  { id: "C", text: "Approximation without formal working" },
                  { id: "D", text: "None of the above" },
                ],
                correctOptionId: "A",
                explanation: "Formal WAEC marking guidelines award full method marks (M1) for correct algebraic substitution.",
                topic: foundLesson.title,
              },
            ],
          },
        };
      } else {
        return NextResponse.json(
          { success: false, error: "Lesson not found in course" },
          { status: 404 }
        );
      }
    }

    // Get user's enrollment and progress
    const enrollment = await db.findEnrollment(userId, slug);
    const isCompleted = enrollment?.completedLessonIds.includes(lessonId) || false;

    // Get next and previous lesson pointers
    const allLessons = getCourseLessonList(slug);
    const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex !== -1 && currentIndex + 1 < allLessons.length ? allLessons[currentIndex + 1] : null;

    // Update last accessed lesson if enrolled
    if (enrollment) {
      await db.createOrUpdateEnrollment({
        userId,
        courseSlug: slug,
        lastAccessedLessonId: lessonId,
      });
    }

    // Retrieve verified real educational videos for this lesson
    const allLessonVideos = await db.findLessonVideos(lessonId);
    const approvedVideos = allLessonVideos.filter((v) => v.status === "APPROVED");
    const primaryVideo = approvedVideos.find((v) => v.isPrimary) || approvedVideos[0] || null;
    const alternateVideos = approvedVideos.filter((v) => v.id !== primaryVideo?.id);

    // Get user's video progress if primary video exists
    let videoProgress = null;
    if (primaryVideo) {
      videoProgress = await db.getVideoProgress(userId, lessonId, primaryVideo.id);
    }

    // Check WAEC alignment: syllabus mapped and verified
    const isWaecAligned = course.level.toLowerCase().includes("waec") || course.slug.includes("waec");

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
        isWaecAligned,
      },
      progress: {
        isEnrolled: !!enrollment,
        isCompleted,
        completedLessonIds: enrollment?.completedLessonIds || [],
        progressPercentage: enrollment?.progressPercentage || 0,
        totalLessons: allLessons.length,
      },
      navigation: {
        prevLesson,
        nextLesson,
      },
    });
  } catch (error) {
    console.error("Failed to load lesson:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
