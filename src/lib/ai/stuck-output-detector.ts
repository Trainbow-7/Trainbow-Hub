/**
 * In-memory / ephemeral cache of recent extraction results by image hash.
 * Ensures the stuck-output detector can identify when two DIFFERENT images produce IDENTICAL text,
 * or when an identical image is legitimately re-queried (cache hit).
 */
import { computeSha256Hex } from "./attachment-hash";

interface ExtractionCacheEntry {
  imageHash: string;
  questionText: string;
  questionTextHash: string;
  timestamp: number;
}

const recentExtractions: ExtractionCacheEntry[] = [];
const MAX_HISTORY = 50;

/**
 * Checks whether an extraction output appears stuck/frozen across distinct images.
 * If two DIFFERENT image hashes yield identical extracted text (and non-empty), it flags as stuck output.
 */
export function checkStuckOutput(
  imageHash: string,
  questionText: string
): { isStuck: boolean; reason?: string } {
  const normalizedText = questionText.trim().toLowerCase();
  if (normalizedText.length < 15) {
    return { isStuck: false };
  }

  const questionTextHash = computeSha256Hex(normalizedText);

  // Look for any PREVIOUS extraction with DIFFERENT image hash but IDENTICAL text hash
  const collision = recentExtractions.find(
    (entry) =>
      entry.imageHash !== imageHash &&
      entry.questionTextHash === questionTextHash
  );

  if (collision) {
    return {
      isStuck: true,
      reason: `Stuck-output detected: different image (${imageHash.substring(0, 8)}) produced identical extraction to previous image (${collision.imageHash.substring(0, 8)}).`,
    };
  }

  // Record this extraction
  recentExtractions.unshift({
    imageHash,
    questionText,
    questionTextHash,
    timestamp: Date.now(),
  });

  if (recentExtractions.length > MAX_HISTORY) {
    recentExtractions.pop();
  }

  return { isStuck: false };
}

/**
 * Reset cache (useful in tests).
 */
export function resetStuckOutputDetector() {
  recentExtractions.length = 0;
}
