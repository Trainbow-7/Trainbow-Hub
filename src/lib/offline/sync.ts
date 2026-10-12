/**
 * Trainbow HUB — Low-Bandwidth & Offline Sync Service (Phase L / SC-05)
 * Manages localStorage-backed offline quiz/lesson queues and data-saver mode
 * designed for intermittent Nigerian 2G/3G connectivity.
 */

export interface OfflineQuizAttempt {
  id: string;
  quizId: string;
  studentId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  answers: Record<string, string | number>;
  synced: boolean;
}

const STORAGE_KEY_OFFLINE_ATTEMPTS = "trainbow_offline_quiz_attempts";
const STORAGE_KEY_DATA_SAVER = "trainbow_data_saver_mode";

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

/**
 * Retrieve all offline attempts from local storage.
 */
export function getOfflineAttempts(): OfflineQuizAttempt[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_OFFLINE_ATTEMPTS);
    if (!raw) return [];
    return JSON.parse(raw) as OfflineQuizAttempt[];
  } catch (err) {
    console.warn("Failed to parse offline quiz attempts:", err);
    return [];
  }
}

/**
 * Persist an attempt completed offline.
 */
export function saveOfflineAttempt(
  data: Omit<OfflineQuizAttempt, "id" | "synced">
): OfflineQuizAttempt {
  if (!isBrowser()) {
    return {
      id: "mock-" + Date.now(),
      ...data,
      synced: false,
    };
  }

  const attempts = getOfflineAttempts();
  const newAttempt: OfflineQuizAttempt = {
    id: "off-att-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7),
    ...data,
    synced: false,
  };

  attempts.push(newAttempt);
  localStorage.setItem(STORAGE_KEY_OFFLINE_ATTEMPTS, JSON.stringify(attempts));
  window.dispatchEvent(new CustomEvent("trainbow-offline-queue-change", { detail: { count: attempts.length } }));
  return newAttempt;
}

/**
 * Count of attempts waiting to be synced to the backend.
 */
export function getPendingSyncCount(): number {
  return getOfflineAttempts().filter((a) => !a.synced).length;
}

/**
 * Flush all pending offline quiz attempts to the backend server.
 */
export async function syncOfflineAttempts(): Promise<{ synced: number; failed: number }> {
  if (!isBrowser()) return { synced: 0, failed: 0 };

  const attempts = getOfflineAttempts();
  const pending = attempts.filter((a) => !a.synced);
  if (pending.length === 0) return { synced: 0, failed: 0 };

  let synced = 0;
  let failed = 0;

  for (const item of pending) {
    try {
      const res = await fetch("/api/academy/quiz/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (res.ok) {
        item.synced = true;
        synced++;
      } else {
        failed++;
      }
    } catch {
      failed++;
    }
  }

  localStorage.setItem(STORAGE_KEY_OFFLINE_ATTEMPTS, JSON.stringify(attempts));
  window.dispatchEvent(new CustomEvent("trainbow-offline-queue-change", { detail: { count: getPendingSyncCount() } }));
  return { synced, failed };
}

/**
 * Clear synced items from storage to free quota.
 */
export function clearSyncedAttempts(): void {
  if (!isBrowser()) return;
  const attempts = getOfflineAttempts().filter((a) => !a.synced);
  localStorage.setItem(STORAGE_KEY_OFFLINE_ATTEMPTS, JSON.stringify(attempts));
}

/**
 * Check if 2G/3G low-bandwidth Data Saver mode is active.
 */
export function isDataSaverEnabled(): boolean {
  if (!isBrowser()) return false;
  return localStorage.getItem(STORAGE_KEY_DATA_SAVER) === "true";
}

/**
 * Set Data Saver mode on or off. Updates DOM documentElement attribute for CSS rules.
 */
export function setDataSaver(enabled: boolean): void {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY_DATA_SAVER, enabled ? "true" : "false");
  if (enabled) {
    document.documentElement.setAttribute("data-saver", "true");
  } else {
    document.documentElement.removeAttribute("data-saver");
  }
  window.dispatchEvent(new CustomEvent("trainbow-datasaver-change", { detail: { enabled } }));
}

/**
 * Toggle Data Saver mode.
 */
export function toggleDataSaver(): boolean {
  const next = !isDataSaverEnabled();
  setDataSaver(next);
  return next;
}
