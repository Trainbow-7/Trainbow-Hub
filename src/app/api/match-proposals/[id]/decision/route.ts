import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001";
    const body = await req.json();
    const { action, reason } = body;
    const proposalId = params.id;

    if (action === "APPROVE") {
      const result = await db.approveMatchProposal(proposalId, userId);
      return NextResponse.json({
        success: true,
        proposal: result.proposal,
        booking: result.booking,
        checkoutUrl: `/api/payments/paystack/simulate-checkout?reference=${result.booking.id}&amount=${result.booking.amountMinorUnits}`,
      });
    } else if (action === "DECLINE") {
      const declinedProposal = await db.declineMatchProposal(
        proposalId,
        userId,
        reason || "Looking for an alternative schedule or tutor profile."
      );
      return NextResponse.json({
        success: true,
        proposal: declinedProposal,
        message: "Match proposal declined. Your request has been returned to Director Oyedeji's matching desk.",
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid action. Must be APPROVE or DECLINE." },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("[PROPOSAL_DECISION_ERROR]", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to process proposal decision" },
      { status: 400 }
    );
  }
}
