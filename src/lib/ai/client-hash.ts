export async function computeClientSha256(file: File): Promise<string> {
  try {
    if (typeof window !== "undefined" && window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === "function") {
      const buffer = await file.arrayBuffer();
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    }
  } catch (err) {
    console.warn("Subtle crypto unavailable, using fallback hash", err);
  }

  // Fallback hash when SubtleCrypto is unavailable in context
  const str = `${file.name}_${file.size}_${file.lastModified}`;
  let h1 = 0xdeadbeef;
  let h2 = 0x41c64e6d;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const p1 = (h1 >>> 0).toString(16).padStart(8, "0");
  const p2 = (h2 >>> 0).toString(16).padStart(8, "0");
  return `${p1}${p2}`.padEnd(64, "0");
}

export function generateClientUploadId(fileName: string, sha256Hex: string): string {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const shortHash = sha256Hex.substring(0, 10);
  const rand = Math.random().toString(36).substring(2, 7);
  return `upl_${shortHash}_${rand}_${safeName}`;
}
