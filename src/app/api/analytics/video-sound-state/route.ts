import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { videoId, courseSlug, lessonSlug, muted, volume, unmutedBySafeguard, origin } = body;

    // Log the anonymous video sound telemetry event
    // Keep it anonymous - no PII, no user tokens
    if (process.env.NODE_ENV !== "production") {
      console.log("[TELEMETRY] video_sound_state:", {
        videoId,
        courseSlug,
        lessonSlug,
        muted,
        volume,
        unmutedBySafeguard: !!unmutedBySafeguard,
        origin,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true, recorded: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Failed to record event" }, { status: 500 });
  }
}

