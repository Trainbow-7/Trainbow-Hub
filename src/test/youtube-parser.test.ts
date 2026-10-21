import { describe, it, expect } from "vitest";
import { parseYouTubeUrl, parseSeconds } from "@/lib/video/youtube-parser";

describe("YouTube URL & ID Parser", () => {
  it("parses raw 11-character video IDs", () => {
    const res = parseYouTubeUrl("dQw4w9WgXcQ");
    expect(res).not.toBeNull();
    expect(res?.videoId).toBe("dQw4w9WgXcQ");
  });

  it("parses standard watch URLs with query params", () => {
    const res = parseYouTubeUrl("https://www.youtube.com/watch?v=5sS7w-CMHkU");
    expect(res).not.toBeNull();
    expect(res?.videoId).toBe("5sS7w-CMHkU");
  });

  it("parses youtu.be short URLs", () => {
    const res = parseYouTubeUrl("https://youtu.be/Eg6CqR_pI30");
    expect(res).not.toBeNull();
    expect(res?.videoId).toBe("Eg6CqR_pI30");
  });

  it("parses embed URLs and privacy-enhanced domain youtube-nocookie.com", () => {
    const res = parseYouTubeUrl("https://www.youtube-nocookie.com/embed/prx_BfrWtx8");
    expect(res).not.toBeNull();
    expect(res?.videoId).toBe("prx_BfrWtx8");
  });

  it("parses shorts URLs", () => {
    const res = parseYouTubeUrl("https://youtube.com/shorts/y_K99G95RjM");
    expect(res).not.toBeNull();
    expect(res?.videoId).toBe("y_K99G95RjM");
  });

  it("parses start and end time parameters in seconds and compound formats", () => {
    expect(parseSeconds("120")).toBe(120);
    expect(parseSeconds("120s")).toBe(120);
    expect(parseSeconds("2m30s")).toBe(150);
    expect(parseSeconds("1h2m3s")).toBe(3723);
    expect(parseSeconds("04:30")).toBe(270);

    const withTime = parseYouTubeUrl("https://www.youtube.com/watch?v=5sS7w-CMHkU&t=1m20s&end=300");
    expect(withTime?.videoId).toBe("5sS7w-CMHkU");
    expect(withTime?.startSeconds).toBe(80);
    expect(withTime?.endSeconds).toBe(300);
  });

  it("rejects invalid or malicious input", () => {
    expect(parseYouTubeUrl("")).toBeNull();
    expect(parseYouTubeUrl("not-a-url")).toBeNull();
    expect(parseYouTubeUrl("https://vimeo.com/123456")).toBeNull();
    expect(parseYouTubeUrl("https://evil.com/youtube.com/watch?v=123")).toBeNull();
  });
});
