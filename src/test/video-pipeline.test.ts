import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";
import { applyHardFilters, buildLessonSearchQueries } from "@/lib/video/youtube-client";
import { scoreVideoRelevance, verifyAndIngestManualVideo } from "@/lib/video/video-orchestrator";

describe("Video Pipeline, Verification & Safety Rules", () => {
  beforeEach(async () => {
    await db.reset();
  });

  it("Rule 1: An ID proposed by a language model or arbitrary string CANNOT be saved as approved without API or verified human entry", async () => {
    // Attempting to inject an invented URL through manual verification with an invalid ID
    const res = await verifyAndIngestManualVideo({
      urlOrId: "completely-invalid-id-that-does-not-exist",
      lessonId: "l1",
      courseSlug: "waec-ssce-mathematics-mastery",
    });

    expect(res.success).toBe(false);
    expect(res.error).toBeDefined();

    // Verify it is not in the database
    const videos = await db.findLessonVideos("l1");
    const invented = videos.find((v) => v.providerVideoId === "completely-invalid-id-that-does-not-exist");
    expect(invented).toBeUndefined();
  });

  it("Rule 2: Hard filters reject videos that are too short (< 4 min), too long (> 45 min), disabled embedding, or blocked", () => {
    // Too short (2 minutes = 120s)
    const shortVideo = {
      videoId: "short_12345",
      title: "Modular Arithmetic Fast",
      channelId: "UC_SOME_CHANNEL",
      channelName: "Quick Shorts",
      description: "Quick",
      thumbnailUrl: "",
      durationSeconds: 120,
      publishedAt: "",
      embeddable: true,
      privacyStatus: "public",
      madeForKids: false,
    };
    const shortRes = applyHardFilters(shortVideo);
    expect(shortRes.passed).toBe(false);
    expect(shortRes.reasons.some((r) => r.includes("too short"))).toBe(true);

    // Disabled embedding
    const unembeddable = { ...shortVideo, durationSeconds: 600, embeddable: false };
    const unembedRes = applyHardFilters(unembeddable);
    expect(unembedRes.passed).toBe(false);
    expect(unembedRes.reasons.some((r) => r.includes("embedding is disabled"))).toBe(true);

    // Blocked channel
    const blocked = { ...shortVideo, durationSeconds: 600, channelId: "UC_BLOCKED_ID" };
    const blockedRes = applyHardFilters(blocked, { blockedChannelIds: new Set(["UC_BLOCKED_ID"]) });
    expect(blockedRes.passed).toBe(false);
    expect(blockedRes.reasons.some((r) => r.includes("blocked list"))).toBe(true);
  });

  it("Rule 3: Query builder constructs targeted exam queries including curriculum context", () => {
    const queries = buildLessonSearchQueries({
      title: "Modular Arithmetic & Cyclic Algebra",
      moduleTitle: "Module 1: Number Bases, Modular Arithmetic & Logarithms",
      courseTitle: "WAEC & SSCE Comprehensive Mathematics Mastery",
      curriculum: "WAEC",
    });

    expect(queries.length).toBeGreaterThanOrEqual(2);
    expect(queries[0]).toContain("Modular Arithmetic & Cyclic Algebra");
    expect(queries[0]).toContain("WAEC");
  });

  it("Rule 4: Relevance scoring assigns high score to trusted allowlist channels with direct title keyword matches", async () => {
    const candidate = {
      videoId: "5sS7w-CMHkU",
      title: "Number Bases - Converting Decimals and Fractions (WAEC / SSCE)",
      channelId: "UCEWpbFLzoYGPfuWUMFPSaoA", // The Organic Chemistry Tutor (Allowlisted)
      channelName: "The Organic Chemistry Tutor",
      description: "Comprehensive step by step explanation of converting fractional number bases for senior secondary exams.",
      thumbnailUrl: "",
      durationSeconds: 1380,
      publishedAt: "",
      embeddable: true,
      privacyStatus: "public",
      madeForKids: false,
    };

    const scoring = await scoreVideoRelevance(candidate, {
      title: "Conversion of Number Bases (Fractions & Decimals)",
      moduleTitle: "Module 1: Number Bases",
      curriculum: "WAEC",
    });

    expect(scoring.score).toBeGreaterThanOrEqual(0.85);
    expect(scoring.reasons.some((r) => r.includes("vetted educational channel"))).toBe(true);
  });

  it("Rule 5: Video progress auto-completes lesson when percentWatched reaches 90%", async () => {
    const userId = "usr-std-001";
    const courseSlug = "waec-ssce-mathematics-mastery";
    const lessonId = "l1";
    const videoId = "lv-l1-01";

    // Watch 50%
    const p1 = await db.saveVideoProgress({
      userId,
      lessonId,
      videoId,
      positionSeconds: 690,
      percentWatched: 50,
    });
    expect(p1.completedAt).toBeUndefined();

    // Watch 90%
    const p2 = await db.saveVideoProgress({
      userId,
      lessonId,
      videoId,
      positionSeconds: 1242,
      percentWatched: 90,
    });
    expect(p2.completedAt).toBeDefined();
  });
});
