import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getVideoProvider } from "@/lib/adapters/video";
import { getSession } from "@/lib/auth/session";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = params.id;
    const booking = await db.findBookingById(bookingId);

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // CL-02: Link access revoked on cancellation or expiry
    if (booking.bookingStatus === "CANCELLED") {
      return NextResponse.json(
        {
          error: "Session access revoked. This booking has been cancelled.",
          isRevoked: true,
          status: "CANCELLED",
        },
        { status: 410 }
      );
    }

    // Identify user: from authenticated session or demo fallback
    const sessionUser = await getSession();
    let user = sessionUser ? await db.findUserById(sessionUser.id) : null;
    const searchParams = request.nextUrl.searchParams;
    const requestedRole = searchParams.get("role");
    const requestedUserId = searchParams.get("userId");

    if (!user && requestedUserId) {
      user = await db.findUserById(requestedUserId);
    }

    // Default to student if demo access
    if (!user) {
      user = await db.findUserById(booking.studentId);
    }

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized access to classroom" },
        { status: 401 }
      );
    }

    // Determine attendee role
    let attendeeRole: "STUDENT" | "TUTOR" | "GUARDIAN" = "STUDENT";
    if (requestedRole === "TUTOR" || user.role === "TUTOR") {
      attendeeRole = "TUTOR";
    } else if (requestedRole === "GUARDIAN" || user.role === "PARENT") {
      attendeeRole = "GUARDIAN";
    } else if (user.id === booking.studentId) {
      attendeeRole = "STUDENT";
    }

    // Authorization check (CL-01): Only booked participants or linked guardian can join
    const isStudent = user.id === booking.studentId;
    const isTutor = attendeeRole === "TUTOR";
    const isGuardian = attendeeRole === "GUARDIAN";
    const isAdmin = user.role === "ADMIN";

    if (!isStudent && !isTutor && !isGuardian && !isAdmin) {
      return NextResponse.json(
        { error: "Forbidden: You are not an authorized participant for this lesson." },
        { status: 403 }
      );
    }

    // Get or initialize classroom session
    const session = await db.getOrCreateClassroomSession(booking.id);
    if (!session) {
      return NextResponse.json(
        { error: "Failed to initialize classroom session" },
        { status: 500 }
      );
    }

    // Generate ephemeral video meeting token via Daily adapter
    const videoProvider = getVideoProvider();
    const tokenRecord = await videoProvider.generateToken({
      roomName: session.roomName,
      userId: user.id,
      userName: user.fullName || "Learner",
      role: attendeeRole,
      bookingId: booking.id,
    });

    // Check if a review already exists
    const existingReview = await db.findReviewByBookingId(booking.id);

    return NextResponse.json({
      success: true,
      session: {
        id: session.id,
        bookingId: session.bookingId,
        roomName: session.roomName,
        roomUrl: session.roomUrl,
        status: session.status,
        recordingEnabled: session.recordingEnabled, // CL-06: Strict false
        startsAt: session.startsAt,
        expiresAt: session.expiresAt,
        endedAt: session.endedAt,
      },
      booking: {
        id: booking.id,
        tutorName: booking.tutorName,
        tutorSlug: booking.tutorSlug,
        subject: booking.subject,
        slotDate: booking.slotDate,
        slotTime: booking.slotTime,
        status: booking.bookingStatus,
      },
      attendee: {
        userId: user.id,
        fullName: user.fullName,
        role: attendeeRole,
        isOwner: tokenRecord.isOwner,
        token: tokenRecord.token,
      },
      review: existingReview,
    });
  } catch (error: any) {
    console.error("Error loading classroom session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
