import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const safeguardReportSchema = z.object({
  sessionId: z.string().optional(),
  reporterId: z.string().min(1),
  reportedUserId: z.string().optional(),
  severity: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("HIGH"),
  category: z.enum([
    "INAPPROPRIATE_BEHAVIOR",
    "HARASSMENT",
    "TECHNICAL_FAILURE",
    "SAFETY_CONCERN",
    "UNAUTHORIZED_RECORDING",
  ]),
  description: z.string().min(5, "Please provide sufficient detail for safeguarding review"),
  sessionTimestampSeconds: z.number().int().optional(),
});

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = params.id;
    const booking = await db.findBookingById(bookingId);

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    const body = await request.json();
    const parsed = safeguardReportSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid report data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // CL-04: Report-conduct control inside the session flow
    // Escalates immediately to safeguarding queue with triage SLA (< 24h)
    const incident = await db.createSafeguardingIncident({
      sessionId: parsed.data.sessionId,
      bookingId,
      reporterId: parsed.data.reporterId,
      reportedUserId: parsed.data.reportedUserId,
      severity: parsed.data.severity,
      category: parsed.data.category,
      description: parsed.data.description,
      sessionTimestampSeconds: parsed.data.sessionTimestampSeconds,
    });

    return NextResponse.json({
      success: true,
      message: "Safeguarding report submitted successfully. Our Designated Safeguarding Lead has been alerted.",
      incidentId: incident.id,
      severity: incident.severity,
      status: incident.status,
      assignedTo: incident.assignedTo,
      createdAt: incident.createdAt,
    });
  } catch (error: any) {
    console.error("Error submitting safeguarding report:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
