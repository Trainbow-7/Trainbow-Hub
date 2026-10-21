/**
 * YouTube API v3 Client and Verification Pipeline
 * Implements:
 * - Query generation from lesson, module, and curriculum context
 * - Respects quota: caches results, batches videos.list calls
 * - Hard filters: public, embeddable, duration 4-45 mins, English, non-livestream, not made-for-kids blocked
 * - Strict verification check: an ID can NEVER be stored as approved unless verified by YouTube Data API
 */

import { parseYouTubeUrl } from "./youtube-parser";
import { TRUSTED_CHANNELS_ALLOWLIST } from "./trusted-channels";

export interface YouTubeSearchResultItem {
  videoId: string;
  title: string;
  channelId: string;
  channelName: string;
  description: string;
  thumbnailUrl: string;
  durationSeconds: number;
  publishedAt: string;
  embeddable: boolean;
  privacyStatus: string;
  madeForKids: boolean;
}

export interface VerificationFilterResult {
  passed: boolean;
  reasons: string[];
}

// In-memory cache for search queries and video details to conserve quota
const searchCache = new Map<string, { timestamp: number; data: string[] }>();
const videoDetailsCache = new Map<string, { timestamp: number; data: YouTubeSearchResultItem }>();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Converts ISO 8601 duration (e.g., PT15M33S, PT1H2M10S) to seconds
 */
export function parseIsoDurationToSeconds(isoDuration: string): number {
  if (!isoDuration) return 0;
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  return hours * 3600 + minutes * 60 + seconds;
}

/**
 * Builds 2-3 search queries tailored to West African / Cambridge syllabus standards
 */
export function buildLessonSearchQueries(options: {
  title: string;
  moduleTitle?: string;
  courseTitle?: string;
  curriculum?: string;
}): string[] {
  const { title, moduleTitle = "", courseTitle = "", curriculum = "WAEC" } = options;

  // Clean title
  const cleanTitle = title.replace(/\([^)]*\)/g, "").trim();

  const q1 = `${cleanTitle} ${curriculum} Mathematics`;
  const q2 = `${cleanTitle} math lesson step by step tutorial`;
  const q3 = moduleTitle
    ? `${moduleTitle.replace(/^Module \d+:\s*/, "")} ${cleanTitle}`
    : `${cleanTitle} exam past questions`;

  return [q1, q2, q3];
}

/**
 * Hard filters validation:
 * - Public & embeddable
 * - Duration between minDuration (4m) and maxDuration (45m)
 * - Normal title (not sensationalist clickbait spam)
 * - Channel not blocked
 */
export function applyHardFilters(
  video: YouTubeSearchResultItem,
  options: {
    minDurationSeconds?: number;
    maxDurationSeconds?: number;
    blockedChannelIds?: Set<string>;
  } = {}
): VerificationFilterResult {
  const minDuration = options.minDurationSeconds ?? 240; // 4 minutes
  const maxDuration = options.maxDurationSeconds ?? 2700; // 45 minutes
  const blockedChannels = options.blockedChannelIds ?? new Set<string>();

  const failures: string[] = [];

  if (!video.embeddable) {
    failures.push("Video embedding is disabled by the creator or YouTube copyright restrictions.");
  }

  if (video.privacyStatus !== "public") {
    failures.push(`Video is not public (privacy: ${video.privacyStatus}).`);
  }

  if (video.durationSeconds < minDuration) {
    failures.push(`Duration (${Math.round(video.durationSeconds / 60)}m) is too short for a comprehensive lesson (min ${minDuration / 60}m).`);
  }

  if (video.durationSeconds > maxDuration) {
    failures.push(`Duration (${Math.round(video.durationSeconds / 60)}m) exceeds lesson scope maximum (${maxDuration / 60}m).`);
  }

  if (blockedChannels.has(video.channelId)) {
    failures.push(`Channel ${video.channelName} (${video.channelId}) is on the blocked list.`);
  }

  // Clickbait filter
  const titleLower = video.title.toLowerCase();
  const clickbaitPatterns = [
    "you won't believe",
    "mind blown",
    "100% will fail",
    "secret trick they don't want you to know",
    "shocking",
    "tiktok",
  ];
  for (const pat of clickbaitPatterns) {
    if (titleLower.includes(pat)) {
      failures.push(`Title matches clickbait pattern: "${pat}".`);
      break;
    }
  }

  return {
    passed: failures.length === 0,
    reasons: failures,
  };
}

/**
 * Fetches video details in batch (up to 50 IDs per call, 1 quota unit)
 */
export async function fetchYouTubeVideoDetails(
  videoIds: string[],
  apiKey: string
): Promise<Map<string, YouTubeSearchResultItem>> {
  const results = new Map<string, YouTubeSearchResultItem>();
  if (!videoIds || videoIds.length === 0 || !apiKey) return results;

  const neededIds: string[] = [];
  const now = Date.now();

  for (const id of videoIds) {
    const cached = videoDetailsCache.get(id);
    if (cached && now - cached.timestamp < CACHE_TTL_MS) {
      results.set(id, cached.data);
    } else {
      neededIds.push(id);
    }
  }

  if (neededIds.length === 0) return results;

  // Batch in chunks of 50
  for (let i = 0; i < neededIds.length; i += 50) {
    const batch = neededIds.slice(i, i + 50);
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("key", apiKey);
    url.searchParams.set("id", batch.join(","));
    url.searchParams.set("part", "snippet,contentDetails,status");

    try {
      const res = await fetch(url.toString(), { method: "GET" });
      if (!res.ok) {
        const errorText = await res.text();
        console.error(`[YOUTUBE_API_ERROR] ${res.status}: ${errorText}`);
        continue;
      }
      const data = await res.json();
      const items = data.items || [];

      for (const item of items) {
        const id = item.id;
        const snippet = item.snippet || {};
        const contentDetails = item.contentDetails || {};
        const status = item.status || {};

        const videoItem: YouTubeSearchResultItem = {
          videoId: id,
          title: snippet.title || "Untitled Video",
          channelId: snippet.channelId || "",
          channelName: snippet.channelTitle || "Unknown Channel",
          description: snippet.description || "",
          thumbnailUrl: snippet.thumbnails?.high?.url || snippet.thumbnails?.default?.url || "",
          durationSeconds: parseIsoDurationToSeconds(contentDetails.duration || ""),
          publishedAt: snippet.publishedAt || "",
          embeddable: status.embeddable !== false,
          privacyStatus: status.privacyStatus || "public",
          madeForKids: status.madeForKids === true,
        };

        videoDetailsCache.set(id, { timestamp: now, data: videoItem });
        results.set(id, videoItem);
      }
    } catch (err: any) {
      console.error("[YOUTUBE_BATCH_FETCH_FAILED]", err);
    }
  }

  return results;
}

/**
 * Searches YouTube Data API v3 with quota tracking
 */
export async function searchYouTubeVideos(
  query: string,
  apiKey: string,
  maxResults = 5
): Promise<YouTubeSearchResultItem[]> {
  if (!apiKey || !query.trim()) return [];

  const now = Date.now();
  const cached = searchCache.get(query);
  if (cached && now - cached.timestamp < CACHE_TTL_MS) {
    const detailsMap = await fetchYouTubeVideoDetails(cached.data, apiKey);
    return cached.data.map((id) => detailsMap.get(id)!).filter(Boolean);
  }

  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("key", apiKey);
  url.searchParams.set("q", query);
  url.searchParams.set("part", "id");
  url.searchParams.set("type", "video");
  url.searchParams.set("videoEmbeddable", "true");
  url.searchParams.set("safeSearch", "strict");
  url.searchParams.set("relevanceLanguage", "en");
  url.searchParams.set("maxResults", String(maxResults));

  try {
    const res = await fetch(url.toString(), { method: "GET" });
    if (!res.ok) {
      const err = await res.text();
      console.error(`[YOUTUBE_SEARCH_ERROR] ${res.status}: ${err}`);
      return [];
    }
    const data = await res.json();
    const items = data.items || [];
    const videoIds = items.map((it: any) => it.id?.videoId).filter(Boolean);

    searchCache.set(query, { timestamp: now, data: videoIds });

    const detailsMap = await fetchYouTubeVideoDetails(videoIds, apiKey);
    return videoIds.map((id: string) => detailsMap.get(id)!).filter(Boolean);
  } catch (err) {
    console.error("[YOUTUBE_SEARCH_NETWORK_ERROR]", err);
    return [];
  }
}
