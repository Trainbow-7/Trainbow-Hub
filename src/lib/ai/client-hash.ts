export async function computeClientSha256(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function generateClientUploadId(fileName: string, sha256Hex: string): string {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const shortHash = sha256Hex.substring(0, 10);
  const rand = Math.random().toString(36).substring(2, 7);
  return `upl_${shortHash}_${rand}_${safeName}`;
}
