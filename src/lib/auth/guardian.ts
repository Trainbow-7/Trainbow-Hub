import { NextResponse } from "next/server";
import { getSession, SessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db";

/**
 * Server-side authorization guard ensuring caller holds PARENT (or ADMIN) role.
 * Enforces PP-01 through PP-05 and NDPA 2023 least-privilege boundaries.
 */
export async function requireGuardianSession(): Promise<{ user: SessionUser } | { response: NextResponse }> {
  const user = await getSession();
  if (!user) {
    return {
      response: NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      ),
    };
  }

  if (user.role !== "PARENT" && user.role !== "ADMIN") {
    return {
      response: NextResponse.json(
        { error: "Forbidden: Parent or Guardian oversight privileges required (PP-01)" },
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
