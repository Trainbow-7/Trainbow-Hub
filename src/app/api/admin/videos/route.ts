import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db, VideoStatusType } from "@/lib/db";
import {
  discoverVideosForLesson,
  verifyAndIngestManualVideo,
} from "@/lib/video/video-orchestrator";
import { SEED_COURSES } from "@/lib/data/seed-data";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    // Allow ADMIN and MATCHING_COORDINATOR / CONTENT_MANAGER roles
    if (!session || (session.role !== "ADMIN" && session.role !== "MATCHING_COORDINATOR")) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const courseSlug = searchParams.get("courseSlug") || undefined;
    const status = (searchParams.get("status") as VideoStatusType) || undefined;

    const videos = await db.listAllLessonVideos({ courseSlug, status });
    const reports = await db.listVideoReports("OPEN");
    const allowlist = await db.listChannelAllowlist();
    const blocklist = await db.listChannelBlocklist();

    // Map out all lessons across seed courses
    const allLessonsSummary: any[] = [];
    for (const c of SEED_COURSES) {
      if (courseSlug && c.slug !== courseSlug) continue;
      for (const m of c.syllabus) {
        for (const l of m.lessons) {
          const lVideos = videos.filter((v) => v.lessonId === l.id);
          const primary = lVideos.find((v) => v.isPrimary) || lVideos[0] || null;
          allLessonsSummary.push({
            lessonId: l.id,
            lessonTitle: l.title,
            moduleTitle: m.title,
            courseSlug: c.slug,
            courseTitle: c.title,
            primaryVideo: primary,
            videoCount: lVideos.length,
            status: primary ? primary.status : "NO_VIDEO",
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      lessons: allLessonsSummary,
      videos,
      openReportsCount: reports.length,
      reports,
      allowlist,
      blocklist,
    });
  } catch (error) {
    console.error("Admin videos GET failed:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || (session.role !== "ADMIN" && session.role !== "MATCHING_COORDINATOR")) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();
    const { action } = body;

    // Action 1: Discover candidate videos for a lesson
    if (action === "discover") {
      const { lessonId, courseSlug, lessonTitle, moduleTitle } = body;
      const result = await discoverVideosForLesson({
        id: lessonId,
        title: lessonTitle,
        moduleTitle,
        courseSlug,
      });

      // Save candidate evaluations into database
      for (const c of result.candidates) {
        await db.upsertLessonVideo({
          lessonId,
          courseSlug,
          provider: "YOUTUBE",
          providerVideoId: c.video.videoId,
          title: c.video.title,
          channelId: c.video.channelId,
          channelName: c.video.channelName,
          durationSeconds: c.video.durationSeconds,
          language: "en",
          thumbnailUrl: c.video.thumbnailUrl,
          embeddable: c.video.embeddable,
          status: c.autoApproved ? "APPROVED" : "CANDIDATE",
          relevanceScore: c.relevanceScore,
          relevanceReasons: c.relevanceReasons,
          isPrimary: c.autoApproved,
          startSeconds: c.proposedStartSeconds,
          failureCount: 0,
        });
      }

      return NextResponse.json({ success: true, discovery: result });
    }

    // Action 2: Approve or Reject a candidate video
    if (action === "update_status") {
      const { videoId, status, isPrimary, notes } = body;
      const video = await db.findLessonVideoById(videoId);
      if (!video) {
        return NextResponse.json({ success: false, error: "Video not found" }, { status: 404 });
      }

      video.status = status;
      if (typeof isPrimary === "boolean") {
        video.isPrimary = isPrimary;
        if (isPrimary) {
          await db.setPrimaryLessonVideo(video.lessonId, video.id);
        }
      }
      if (notes) video.notes = notes;
      video.reviewerId = session.id;
      video.reviewedAt = new Date();

      await db.upsertLessonVideo(video);
      return NextResponse.json({ success: true, video });
    }

    // Action 3: Add Manual Verified URL
    if (action === "add_manual_url") {
      const { url, lessonId, courseSlug, notes, startSeconds, endSeconds } = body;
      const res = await verifyAndIngestManualVideo({
        urlOrId: url,
        lessonId,
        courseSlug,
        reviewerId: session.id,
        notes,
        startSeconds,
        endSeconds,
      });
      return NextResponse.json(res, { status: res.success ? 200 : 400 });
    }

    // Action 4: Bulk Import video-map.json
    if (action === "import_map") {
      const { items } = body;
      if (!Array.isArray(items)) {
        return NextResponse.json({ success: false, error: "items must be an array" }, { status: 400 });
      }
      let importedCount = 0;
      for (const item of items) {
        await db.upsertLessonVideo({
          lessonId: item.lessonId,
          courseSlug: item.courseSlug || "waec-ssce-mathematics-mastery",
          provider: item.provider || "YOUTUBE",
          providerVideoId: item.providerVideoId,
          title: item.title,
          channelId: item.channelId,
          channelName: item.channelName,
          durationSeconds: item.durationSeconds,
          language: item.language || "en",
          thumbnailUrl: item.thumbnailUrl,
          embeddable: item.embeddable !== false,
          status: item.status || "APPROVED",
          relevanceScore: item.relevanceScore || 1.0,
          relevanceReasons: item.relevanceReasons || ["Curated seed"],
          startSeconds: item.startSeconds,
          endSeconds: item.endSeconds,
          isPrimary: item.isPrimary ?? true,
          reviewerId: session.id,
          reviewedAt: new Date(),
          notes: item.notes,
          failureCount: 0,
        });
        importedCount++;
      }
      return NextResponse.json({ success: true, importedCount });
    }

    // Action 5: Resolve broken link report
    if (action === "resolve_report") {
      const { reportId } = body;
      const report = await db.resolveVideoReport(reportId);
      return NextResponse.json({ success: true, report });
    }

    // Action 6: Channel allowlist / blocklist update
    if (action === "add_allowlist_channel") {
      const { channelId, name, notes } = body;
      const ch = await db.addChannelToAllowlist({ channelId, name, notes, addedBy: session.id });
      return NextResponse.json({ success: true, channel: ch });
    }

    if (action === "add_blocklist_channel") {
      const { channelId, name, notes } = body;
      const ch = await db.addChannelToBlocklist({ channelId, name, notes, addedBy: session.id });
      return NextResponse.json({ success: true, channel: ch });
    }

    return NextResponse.json({ success: false, error: "Unknown action" }, { status: 400 });
  } catch (error) {
    console.error("Admin videos POST failed:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
