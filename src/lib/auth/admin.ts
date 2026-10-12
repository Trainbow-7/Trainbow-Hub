import { NextResponse } from "next/server";
import { getSession, SessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db";

/**
 * Server-side authorization guard ensuring caller holds ADMIN role.
 * Enforces AD-01 least-privilege role boundaries.
 */
export async function requireAdminSession(): Promise<{ user: SessionUser } | { response: NextResponse }> {
  const user = await getSession();
  if (!user) {
    return {
      response: NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      ),
    };
  }

  if (user.role !== "ADMIN") {
    return {
      response: NextResponse.json(
        { error: "Forbidden: Administrative privilege required (AD-01)" },
        { status: 403 }
      ),
    };
  }

  const dbUser = await db.findUserById(user.id);
  if (dbUser?.isSuspended) {
    return {
      response: NextResponse.json(
        { error: "Forbidden: Account is suspended" },
        { status: 403 }
      ),
    };
  }

  return { user };
}
