import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

const updateUserSchema = z.object({
  userId: z.string().min(1),
  action: z.enum(["UPDATE_ROLE", "TOGGLE_SUSPENSION"]),
  role: z.enum(["STUDENT", "PARENT", "TUTOR", "ADMIN"]).optional(),
  isSuspended: z.boolean().optional(),
  reason: z.string().optional(),
});

export async function GET(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const { searchParams } = new URL(req.url);
    const role = searchParams.get("role") || undefined;
    const search = searchParams.get("search") || undefined;

    const users = await db.listUsersForAdmin({ role, search });
    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to list users" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await req.json();
    const parsed = updateUserSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid user update payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { userId, action, role, isSuspended, reason } = parsed.data;

    if (action === "UPDATE_ROLE") {
      if (!role) {
        return NextResponse.json({ error: "Missing new role" }, { status: 400 });
      }
      const updated = await db.updateUserRole(userId, role, auth.user.id);
      return NextResponse.json({ success: true, user: updated });
    }

    if (action === "TOGGLE_SUSPENSION") {
      if (typeof isSuspended !== "boolean") {
        return NextResponse.json({ error: "Missing isSuspended boolean" }, { status: 400 });
      }
      const updated = await db.toggleUserSuspension(userId, isSuspended, auth.user.id, reason);
      return NextResponse.json({ success: true, user: updated });
    }

    return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update user" },
      { status: 500 }
    );
  }
}
