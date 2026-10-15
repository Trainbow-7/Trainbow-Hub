import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    const id = params.id;

    let tutorRequest = await db.getTutorRequestById(id);
    if (!tutorRequest) {
      tutorRequest = await db.getTutorRequestByReference(id);
    }

    if (!tutorRequest) {
      return NextResponse.json(
        { success: false, error: "Tutor request not found" },
        { status: 404 }
      );
    }

    const events = await db.listRequestEvents(tutorRequest.id);

    // If there is an active proposal, fetch it
    const activeProposal = Array.from(db.matchProposals.values()).find(
      (p) => p.requestId === tutorRequest?.id
    );

    return NextResponse.json({
      success: true,
      request: tutorRequest,
      events,
      proposal: activeProposal || null,
    });
  } catch (error) {
    console.error("[GET_TUTOR_REQUEST_DETAIL_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
