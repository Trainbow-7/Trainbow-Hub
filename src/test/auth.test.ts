import { describe, it, expect } from "vitest";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { createSessionToken, verifySessionToken, SessionUser } from "@/lib/auth/session";
import { calculateAge, isMinorFromDob } from "@/lib/auth/utils";
import { db } from "@/lib/db";

describe("Password Hashing & Verification (scrypt)", () => {
  it("hashes password with salt and successfully verifies correct password", async () => {
    const raw = "SuperSecretPassword123!";
    const hashed = await hashPassword(raw);

    expect(hashed).toBeDefined();
    expect(hashed).toContain(":"); // salt:hash format

    const isMatch = await verifyPassword(raw, hashed);
    expect(isMatch).toBe(true);
  });

  it("fails verification for incorrect password", async () => {
    const raw = "SuperSecretPassword123!";
    const wrong = "WrongPassword999!";
    const hashed = await hashPassword(raw);

    const isMatch = await verifyPassword(wrong, hashed);
    expect(isMatch).toBe(false);
  });
});

describe("HMAC Session Token Creation & Verification", () => {
  const dummyUser: SessionUser = {
    id: "usr-test-123",
    email: "test@trainbowhub.ng",
    fullName: "Ada Lovelace",
    role: "STUDENT",
    isMinor: false,
    isVerified: true,
  };

  it("signs and verifies a valid session payload", () => {
    const token = createSessionToken(dummyUser);
    expect(token).toBeDefined();
    expect(token.split(".").length).toBe(2);

    const payload = verifySessionToken(token);
    expect(payload).not.toBeNull();
    expect(payload?.user.email).toBe(dummyUser.email);
    expect(payload?.user.role).toBe("STUDENT");
  });

  it("detects and rejects tampered token signatures", () => {
    const token = createSessionToken(dummyUser);
    const [payload, sig] = token.split(".");
    // Tamper with signature
    const tamperedSig = sig.slice(0, -3) + "xyz";
    const result = verifySessionToken(`${payload}.${tamperedSig}`);
    expect(result).toBeNull();
  });

  it("detects and rejects malformed tokens", () => {
    expect(verifySessionToken("invalid-token-without-dot")).toBeNull();
    expect(verifySessionToken("")).toBeNull();
  });
});

describe("NDPA 2023 Minor Safeguard Utilities", () => {
  it("accurately calculates age and identifies minors under 18", () => {
    const today = new Date();
    const minorYear = today.getFullYear() - 14;
    const minorDob = `${minorYear}-01-01`;

    expect(calculateAge(minorDob)).toBe(14);
    expect(isMinorFromDob(minorDob)).toBe(true);

    const adultYear = today.getFullYear() - 22;
    const adultDob = `${adultYear}-01-01`;

    expect(calculateAge(adultDob)).toBe(22);
    expect(isMinorFromDob(adultDob)).toBe(false);
  });
});

describe("Resilient Database Engine (DatabaseStore)", () => {
  it("initializes seed users including demo adult, minor, parent, tutor, and admin", async () => {
    const student = await db.findUserByEmail("student@trainbowhub.ng");
    expect(student).not.toBeNull();
    expect(student?.role).toBe("STUDENT");
    expect(student?.isMinor).toBe(false);
    expect(student?.isVerified).toBe(true);

    const minor = await db.findUserByEmail("minor@trainbowhub.ng");
    expect(minor).not.toBeNull();
    expect(minor?.role).toBe("STUDENT");
    expect(minor?.isMinor).toBe(true);
    expect(minor?.isVerified).toBe(false);

    const guardianship = await db.findGuardianshipByStudentId(minor!.id);
    expect(guardianship).not.toBeNull();
    expect(guardianship?.status).toBe("PENDING_OTP");
    expect(guardianship?.otpCode).toBe("202610");

    const tutor = await db.findUserByEmail("tutor@trainbowhub.ng");
    expect(tutor).not.toBeNull();
    expect(tutor?.role).toBe("TUTOR");

    const tutorProfile = await db.findTutorProfileByUserId(tutor!.id);
    expect(tutorProfile).not.toBeNull();
    expect(tutorProfile?.slug).toBe("dr-tayo-okafor");
  });
});
