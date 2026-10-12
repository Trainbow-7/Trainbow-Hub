import { NextResponse } from "next/server";
import {
  triggerDatabaseBackup,
  getBackupArchives,
  testRestoreProcedure,
  getDisasterRecoveryStatus,
} from "@/lib/recovery/backup";

export async function GET() {
  try {
    const backups = await getBackupArchives();
    const drStatus = await getDisasterRecoveryStatus();
    return NextResponse.json({ backups, drStatus });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to retrieve backups" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { action, backupId } = body;

    if (action === "RESTORE" && backupId) {
      const result = await testRestoreProcedure(backupId);
      return NextResponse.json(result);
    }

    // Default action: Create new snapshot
    const backup = await triggerDatabaseBackup(body.type || "MANUAL_ADMIN");
    return NextResponse.json({ success: true, backup }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to execute backup action" },
      { status: 500 }
    );
  }
}
