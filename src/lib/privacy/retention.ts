/**
 * Trainbow HUB — NDPA 2023 Data Retention & Privacy Erasure Service (Phase M / ADR-014)
 * Implements PRD Section 8 table:
 * - AI conversations: 90 days default retention, user-controlled deletion
 * - Quiz attempts: account lifetime
 * - Financial records: immutable statutory accounting records
 * - Minor rights: guardian consent revocation and data erasure
 */

import { db, PrivacyPurgeRequestRecord } from "@/lib/db";

export interface DataRetentionPolicy {
  dataType: string;
  retentionWindow: string;
  lawfulBasis: string;
  userErasureSupported: boolean;
  ndpaArticle: string;
}

export const DATA_RETENTION_POLICIES: DataRetentionPolicy[] = [
  {
    dataType: "AI Conversations & Socratic Prompts",
    retentionWindow: "90 Days Default (User-deletable anytime)",
    lawfulBasis: "Explicit Consent & Educational Assistance",
    userErasureSupported: true,
    ndpaArticle: "NDPA 2023 Sec 34 (Right to Erasure)",
  },
  {
    dataType: "Quiz Attempts & Academic Diagnostics",
    retentionWindow: "Life of Account + 30 Days",
    lawfulBasis: "Legitimate Educational Performance Tracking",
    userErasureSupported: true,
    ndpaArticle: "NDPA 2023 Sec 31 (Minor Learner Protections)",
  },
  {
    dataType: "Booking & Virtual Classroom Attendance",
    retentionWindow: "24 Months (Dispute & Safeguarding Review)",
    lawfulBasis: "Contractual Performance & Child Safeguarding",
    userErasureSupported: false,
    ndpaArticle: "Child Rights Act 2003 & NDPA Sec 24",
  },
  {
    dataType: "Paystack Financial Transactions & Ledger",
    retentionWindow: "7 Years Statutory (Naira Tax & Audit)",
    lawfulBasis: "Legal Obligation (FIRS & CBN Guidelines)",
    userErasureSupported: false,
    ndpaArticle: "Companies and Allied Matters Act (CAMA) 2020",
  },
  {
    dataType: "Tutor Identity & Criminal Screening Evidence",
    retentionWindow: "Duration of Active Accreditation + 12 Months",
    lawfulBasis: "Safeguarding Vetting Compliance",
    userErasureSupported: false,
    ndpaArticle: "TRCN Regulations & Child Protection Safeguards",
  },
];

/**
 * Execute automated privacy purge request.
 */
export async function executePrivacyPurge(
  userId: string,
  category: "AI_CONVERSATIONS_90D" | "RIGHT_TO_BE_FORGOTTEN" | "REVOKED_GUARDIAN",
  requestedByRole: string
): Promise<PrivacyPurgeRequestRecord> {
  return await db.requestPrivacyPurge(userId, category, requestedByRole);
}

/**
 * List history of executed privacy purge requests.
 */
export async function getPrivacyPurgeHistory(): Promise<PrivacyPurgeRequestRecord[]> {
  return await db.listPrivacyPurgeRequests();
}
