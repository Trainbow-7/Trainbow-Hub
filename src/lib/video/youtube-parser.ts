/**
 * YouTube URL and Video ID Parser
 * Handles:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtube.com/watch?v=VIDEO_ID&t=120s
 * - https://youtu.be/VIDEO_ID?t=1m20s
 * - https://www.youtube.com/embed/VIDEO_ID?start=80
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - Pure 11-char video IDs (e.g. dQw4w9WgXcQ)
 */

export interface ParsedYouTubeVideo {
  videoId: string;
  startSeconds?: number;
  endSeconds?: number;
}

export function parseSeconds(timeStr: string | null | undefined): number | undefined {
  if (!timeStr) return undefined;
  timeStr = timeStr.trim().toLowerCase();

  // Pure digits: "120" -> 120
  if (/^\d+$/.test(timeStr)) {
    return parseInt(timeStr, 10);
  }

  // 120s
  if (/^\d+s$/.test(timeStr)) {
    return parseInt(timeStr.slice(0, -1), 10);
  }

  // 1h2m3s or 2m30s
  const hourMatch = timeStr.match(/(\d+)h/);
  const minMatch = timeStr.match(/(\d+)m/);
  const secMatch = timeStr.match(/(\d+)s/);

  if (hourMatch || minMatch || secMatch) {
    let total = 0;
    if (hourMatch) total += parseInt(hourMatch[1], 10) * 3600;
    if (minMatch) total += parseInt(minMatch[1], 10) * 60;
    if (secMatch) total += parseInt(secMatch[1], 10);
    return total;
  }

  // mm:ss or hh:mm:ss
  if (timeStr.includes(":")) {
    const parts = timeStr.split(":").map((p) => parseInt(p, 10));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      return parts[0] * 60 + parts[1];
    }
    if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
  }

  return undefined;
}

export function parseYouTubeUrl(input: string): ParsedYouTubeVideo | null {
  if (!input || typeof input !== "string") return null;
  const trimmed = input.trim();

  // If it's already an 11-character standard YouTube ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return { videoId: trimmed };
  }

  try {
    let urlString = trimmed;
    if (!urlString.startsWith("http://") && !urlString.startsWith("https://")) {
      urlString = "https://" + urlString;
    }
    const url = new URL(urlString);
    const hostname = url.hostname.replace(/^www\./, "").toLowerCase();

    let videoId: string | null = null;
    let startSeconds: number | undefined;
    let endSeconds: number | undefined;

    // Check query params for time: t, start, time_continue
    const tParam = url.searchParams.get("t") || url.searchParams.get("start") || url.searchParams.get("time_continue");
    if (tParam) {
      startSeconds = parseSeconds(tParam);
    }
    const endParam = url.searchParams.get("end");
    if (endParam) {
      endSeconds = parseSeconds(endParam);
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtube-nocookie.com") {
      // /watch?v=ID
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v");
      }
      // /embed/ID
      else if (url.pathname.startsWith("/embed/")) {
        videoId = url.pathname.split("/")[2] || null;
      }
      // /v/ID
      else if (url.pathname.startsWith("/v/")) {
        videoId = url.pathname.split("/")[2] || null;
      }
      // /shorts/ID
      else if (url.pathname.startsWith("/shorts/")) {
        videoId = url.pathname.split("/")[2] || null;
      }
    } else if (hostname === "youtu.be") {
      // youtu.be/ID
      videoId = url.pathname.slice(1).split("/")[0] || null;
    }

    if (videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return {
        videoId,
        startSeconds,
        endSeconds,
      };
    }
  } catch {
    return null;
  }

  return null;
}
