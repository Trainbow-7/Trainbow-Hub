import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const reviewSchema = z.object({
  studentId: z.string().min(1),
  tutorSlug: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  reviewText: z.string().min(3, "Review text must be at least 3 characters"),
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

    if (booking.bookingStatus !== "COMPLETED") {
      return NextResponse.json(
        { error: "Reviews can only be submitted after the lesson has been marked as COMPLETED." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const parsed = reviewSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid review parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Check if student already submitted a review
    const existing = await db.findReviewByBookingId(bookingId);
    if (existing) {
      return NextResponse.json(
        { error: "A review has already been submitted for this lesson." },
        { status: 409 }
      );
    }

    const review = await db.createTutorReview({
      bookingId,
      studentId: parsed.data.studentId,
      tutorSlug: parsed.data.tutorSlug,
      rating: parsed.data.rating,
      reviewText: parsed.data.reviewText,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your tutor review and rating have been recorded.",
      review,
    });
  } catch (error: any) {
    console.error("Error submitting review:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
