import { createHash } from "crypto";

export interface AttachmentRecord {
  id: string;
  name: string;
  type: string;
  size: number;
  previewUrl?: string;
  contentSha256: string;
  uploadId: string;
  extractedText?: string;
  diagramCode?: string;
}

export function computeSha256Hex(bufferOrString: string | ArrayBuffer | Uint8Array): string {
  const hash = createHash("sha256");
  if (typeof bufferOrString === "string") {
    hash.update(bufferOrString, "utf8");
  } else if (bufferOrString instanceof Uint8Array) {
    hash.update(bufferOrString);
  } else {
    hash.update(Buffer.from(bufferOrString));
  }
  return hash.digest("hex");
}

export function generateUploadId(fileName: string, hashHex: string): string {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const shortHash = hashHex.substring(0, 12);
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `upl_${shortHash}_${randomSuffix}_${safeName}`;
}
