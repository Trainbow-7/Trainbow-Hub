import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

const triageSchema = z.object({
  incidentId: z.string().min(1),
  status: z.enum(["OPEN", "INVESTIGATING", "RESOLVED", "DISMISSED"]),
  assignedTo: z.string().optional(),
  resolutionNotes: z.string().optional(),
});

export async function GET(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const { searchParams } = new URL(req.url);
    const severity = searchParams.get("severity") || undefined;
    const status = searchParams.get("status") || undefined;

    const incidents = await db.listSafeguardingIncidentsAdmin(severity, status);
    return NextResponse.json({ success: true, incidents });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to list safeguarding incidents" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await req.json();
    const parsed = triageSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid triage payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { incidentId, status, assignedTo, resolutionNotes } = parsed.data;
    const updated = await db.triageSafeguardingIncident(incidentId, {
      status,
      assignedTo,
      resolutionNotes,
      adminId: auth.user.id,
    });

    return NextResponse.json({ success: true, incident: updated });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to triage incident" },
      { status: 500 }
    );
  }
}
