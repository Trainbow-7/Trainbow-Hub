import { NextResponse } from "next/server";
import { DATA_RETENTION_POLICIES, getPrivacyPurgeHistory } from "@/lib/privacy/retention";

export async function GET() {
  try {
    const history = await getPrivacyPurgeHistory();
    return NextResponse.json({
      policies: DATA_RETENTION_POLICIES,
      history,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to retrieve privacy policies" },
      { status: 500 }
    );
  }
}
