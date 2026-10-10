import crypto from "crypto";
import { cookies } from "next/headers";
import { env } from "@/lib/env";

export const SESSION_COOKIE_NAME = "trainbow_session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

export interface SessionUser {
  id: string;
  email: string;
  fullName: string;
  role: "STUDENT" | "PARENT" | "TUTOR" | "ADMIN";
  isMinor: boolean;
  isVerified: boolean;
  tutorProfileSlug?: string;
}

export interface SessionPayload {
  user: SessionUser;
  exp: number; // unix timestamp in seconds
}

function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return Buffer.from(base64, "base64").toString("utf-8");
}

/**
 * Sign a session payload using HMAC-SHA256.
 */
export function createSessionToken(user: SessionUser): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const payload: SessionPayload = { user, exp };
  const payloadStr = JSON.stringify(payload);
  const encodedPayload = base64UrlEncode(payloadStr);

  const signature = crypto
    .createHmac("sha256", env.SESSION_SECRET)
    .update(encodedPayload)
    .digest("base64url");

  return `${encodedPayload}.${signature}`;
}

/**
 * Verify a session token and return the payload if valid and unexpired.
 */
export function verifySessionToken(token: string): SessionPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;

    const [encodedPayload, providedSignature] = parts;

    const expectedSignature = crypto
      .createHmac("sha256", env.SESSION_SECRET)
      .update(encodedPayload)
      .digest("base64url");

    if (providedSignature.length !== expectedSignature.length) return null;
    const isValid = crypto.timingSafeEqual(
      Buffer.from(providedSignature),
      Buffer.from(expectedSignature)
    );

    if (!isValid) return null;

    const payloadJson = base64UrlDecode(encodedPayload);
    const payload: SessionPayload = JSON.parse(payloadJson);

    // Check expiration
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) return null;

    return payload;
  } catch {
    return null;
  }
}

/**
 * Get the current authenticated user session from Next.js cookies (Server Component / Route Handler).
 */
export async function getSession(): Promise<SessionUser | null> {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token) return null;

    const payload = verifySessionToken(token);
    return payload?.user ?? null;
  } catch {
    return null;
  }
}

/**
 * Set the session cookie on a Next.js response or Server Action.
 */
export async function setSessionCookie(user: SessionUser): Promise<string> {
  const token = createSessionToken(user);
  const cookieStore = cookies();
  cookieStore.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return token;
}

/**
 * Clear the session cookie.
 */
export async function clearSessionCookie(): Promise<void> {
  try {
    const cookieStore = cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
  } catch {
    // Ignore error if cookies cannot be modified in context
  }
}
