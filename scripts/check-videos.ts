/**
 * CLI Video Health Checker & Auto-Promote Scheduled Script
 *
 * Usage:
 *   npm run videos:check
 *
 * Functionality:
 * 1. Checks every APPROVED video using YouTube Data API videos.list
 * 2. Verifies status (public, embeddable, not deleted)
 * 3. Increments failureCount on failed verification
 * 4. Marks video as BROKEN after 2 consecutive failures
 * 5. Automatically promotes next approved alternate video to primary
 * 6. Supports CI-safe test mode when YOUTUBE_API_KEY is unset or simulated
 */

import { db, LessonVideoRecord } from "../src/lib/db";
import { fetchYouTubeVideoDetails } from "../src/lib/video/youtube-client";

export async function checkVideosHealth(options: {
  apiKey?: string;
  mockMode?: boolean;
}): Promise<{
  totalChecked: number;
  healthyCount: number;
  brokenCount: number;
  promotedCount: number;
}> {
  await db.init();
  const apiKey = options.apiKey || process.env.YOUTUBE_API_KEY || "";
  const isMock = options.mockMode || !apiKey || apiKey.startsWith("mock_");

  const approvedVideos = await db.listAllLessonVideos({ status: "APPROVED" });

  let healthyCount = 0;
  let brokenCount = 0;
  let promotedCount = 0;

  if (isMock) {
    console.log(`[VIDEO_HEALTH_CHECK] Running in CI-safe simulated mode (${approvedVideos.length} approved videos)`);
    for (const v of approvedVideos) {
      healthyCount++;
      v.lastCheckedAt = new Date();
      v.failureCount = 0;
      await db.upsertLessonVideo(v);
    }
    return {
      totalChecked: approvedVideos.length,
      healthyCount,
      brokenCount,
      promotedCount,
    };
  }

  // Real YouTube Data API verification
  const videoIds = approvedVideos.map((v) => v.providerVideoId);
  const detailsMap = await fetchYouTubeVideoDetails(videoIds, apiKey);

  for (const video of approvedVideos) {
    const details = detailsMap.get(video.providerVideoId);
    const isHealthy = details && details.embeddable && details.privacyStatus === "public";

    video.lastCheckedAt = new Date();

    if (isHealthy) {
      video.failureCount = 0;
      healthyCount++;
    } else {
      video.failureCount = (video.failureCount || 0) + 1;
      console.warn(`[VIDEO_HEALTH_WARN] Video ${video.providerVideoId} failed check (Failure #${video.failureCount})`);

      if (video.failureCount >= 2) {
        video.status = "BROKEN";
        brokenCount++;
        console.error(`[VIDEO_HEALTH_ALERT] Video ${video.id} marked BROKEN after 2 consecutive failures`);

        // If it was primary, automatically promote the next approved alternate
        if (video.isPrimary) {
          video.isPrimary = false;
          const alternates = await db.findLessonVideos(video.lessonId);
          const nextApproved = alternates.find((alt) => alt.id !== video.id && alt.status === "APPROVED");
          if (nextApproved) {
            nextApproved.isPrimary = true;
            await db.upsertLessonVideo(nextApproved);
            promotedCount++;
            console.log(`[AUTO_PROMOTE] Promoted alternate video ${nextApproved.id} to primary for lesson ${video.lessonId}`);
          }
        }
      }
    }

    await db.upsertLessonVideo(video);
  }

  return {
    totalChecked: approvedVideos.length,
    healthyCount,
    brokenCount,
    promotedCount,
  };
}

// Direct execution
if (require.main === module) {
  checkVideosHealth({})
    .then((res) => {
      console.log(`[VIDEO_HEALTH_CHECK_DONE] Total: ${res.totalChecked}, Healthy: ${res.healthyCount}, Broken: ${res.brokenCount}, Promoted: ${res.promotedCount}`);
      process.exit(0);
    })
    .catch((err) => {
      console.error("[VIDEO_HEALTH_CHECK_FAILED]", err);
      process.exit(1);
    });
}
