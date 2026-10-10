import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET() {
  const startTime = process.uptime();

  const healthData = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(startTime),
    environment: env.NODE_ENV,
    version: "0.1.0",
    timezone: env.DEFAULT_TIMEZONE,
    services: {
      api: "operational",
      database: "configured",
      providers: {
        payment: env.PAYMENT_PROVIDER,
        ai: env.AI_PROVIDER,
        video: env.VIDEO_PROVIDER,
        messaging: env.MESSAGING_PROVIDER,
      },
    },
  };

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
