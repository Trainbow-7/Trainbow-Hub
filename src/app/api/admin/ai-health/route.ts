import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export interface AIProviderHealthStatus {
  status: "OK" | "DEGRADED" | "UNCONFIGURED";
  configuredProvider: string;
  hasApiKey: boolean;
  visionCapable: boolean;
  activeModel: string;
  isMockSandbox: boolean;
  healthMessage: string;
}

export async function GET(req: Request) {
  try {
    const session = await getSession();
    const userId = req.headers.get("x-user-id") || session?.id || "usr-adm-001";
    const user = await db.findUserById(userId);

    const provider = process.env.AI_PROVIDER || "sandbox";
    const apiKey = process.env.AI_API_KEY || process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY || "";
    const isMock = provider === "sandbox" || !apiKey || apiKey.startsWith("mock_");

    let status: "OK" | "DEGRADED" | "UNCONFIGURED" = "OK";
    let healthMessage = "AI Provider operational.";

    if (isMock) {
      status = "UNCONFIGURED";
      healthMessage = "Vision provider unconfigured or running mock sandbox. Image reading is unavailable; text questions accepted.";
    }

    const health: AIProviderHealthStatus = {
      status,
      configuredProvider: provider,
      hasApiKey: !!apiKey && !apiKey.startsWith("mock_"),
      visionCapable: !isMock,
      activeModel: isMock ? "none (sandbox mock)" : "gemini-1.5-flash / gpt-4o",
      isMockSandbox: isMock,
      healthMessage,
    };

    return NextResponse.json({
      success: true,
      health,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[AI_HEALTH_CHECK_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to evaluate AI health status" },
      { status: 500 }
    );
  }
}
