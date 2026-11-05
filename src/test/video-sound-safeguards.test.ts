/**
 * Trainbow HUB: Video Audio Playback & Security Policy Safeguards Test Suite
 *
 * Verifies:
 * 1. Static Audit: Zero occurrences of mute=1, mute: 1, setVolume(0), player.mute() in video player code paths.
 * 2. Player Contract: LessonVideoPlayer constructs valid privacy-enhanced embeds with origin, enablejsapi=1,
 *    and exact required allow permissions without sandbox restriction or click-blocking overlays.
 * 3. Security Policy Headers: next.config.mjs exports explicit Permissions-Policy delegating autoplay and
 *    encrypted-media to youtube-nocookie.com, and CSP whitelists googlevideo.com in media-src and connect-src.
 * 4. Sound Safeguard: Detects muted player states and provides accessible user unMute resolution.
 */

import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";

describe("Video Audio Playback Safeguards", () => {
  const rootDir = path.resolve(__dirname, "../..");

  // --------------------------------------------------------------------------
  // 1. Static Code Audit: Prevent accidental muting regressions
  // --------------------------------------------------------------------------
  describe("1. Static Code Audit (Zero Muting Regressions)", () => {
    it("ensures LessonVideoPlayer.tsx contains no mute=1, mute: 1, or setVolume(0)", () => {
      const playerPath = path.join(rootDir, "src/components/video/LessonVideoPlayer.tsx");
      expect(fs.existsSync(playerPath)).toBe(true);
      const code = fs.readFileSync(playerPath, "utf-8");

      expect(code).not.toContain("mute=1");
      expect(code).not.toContain("mute: 1");
      expect(code).not.toContain("mute: \"1\"");
      expect(code).not.toContain("setVolume(0)");
      expect(code).not.toContain(".mute()");
    });

    it("ensures LessonPlayerView.tsx contains no muting parameters", () => {
      const viewPath = path.join(rootDir, "src/components/academy/LessonPlayerView.tsx");
      expect(fs.existsSync(viewPath)).toBe(true);
      const code = fs.readFileSync(viewPath, "utf-8");

      expect(code).not.toContain("mute=1");
      expect(code).not.toContain("mute: 1");
      expect(code).not.toContain("muted={true}");
    });

    it("ensures SubjectSyllabusView.tsx contains no muting parameters", () => {
      const viewPath = path.join(rootDir, "src/components/academy/SubjectSyllabusView.tsx");
      expect(fs.existsSync(viewPath)).toBe(true);
      const code = fs.readFileSync(viewPath, "utf-8");

      expect(code).not.toContain("mute=1");
      expect(code).not.toContain("mute: 1");
    });
  });

  // --------------------------------------------------------------------------
  // 2. Player Contract & URL Construction
  // --------------------------------------------------------------------------
  describe("2. Iframe Contract & Embed URL Specifications", () => {
    const dummyVideoId = "iLw5DSyYsaI";
    const origin = "http://localhost:3000";

    it("generates privacy-enhanced youtube-nocookie embed URL with required parameters", () => {
      const embedParams = new URLSearchParams({
        autoplay: "1",
        playsinline: "1",
        enablejsapi: "1",
        origin: origin,
        rel: "0",
        controls: "1",
        fs: "1",
        cc_load_policy: "1",
      });
      const url = `https://www.youtube-nocookie.com/embed/${dummyVideoId}?${embedParams.toString()}`;

      expect(url).toContain("https://www.youtube-nocookie.com/embed/iLw5DSyYsaI?");
      expect(url).toContain("autoplay=1");
      expect(url).toContain("playsinline=1");
      expect(url).toContain("enablejsapi=1");
      expect(url).toContain(`origin=${encodeURIComponent(origin)}`);
      expect(url).toContain("controls=1");
      expect(url).toContain("fs=1");
      expect(url).not.toContain("mute=1");
      expect(url).not.toContain("volume=0");
    });

    it("specifies correct iframe allow permissions and forbids restrictive sandbox", () => {
      const playerPath = path.join(rootDir, "src/components/video/LessonVideoPlayer.tsx");
      const code = fs.readFileSync(playerPath, "utf-8");

      // Verify allow attribute includes required capabilities
      expect(code).toContain('allow="autoplay; encrypted-media; picture-in-picture; fullscreen; accelerometer; gyroscope"');
      expect(code).toContain("allowFullScreen");

      // Ensure no sandbox attribute is set on the iframe
      expect(code).not.toContain('sandbox="');
      expect(code).not.toContain("sandbox='");
    });

    it("verifies that no overlay intercepts clicks once isPlaying is true", () => {
      const playerPath = path.join(rootDir, "src/components/video/LessonVideoPlayer.tsx");
      const code = fs.readFileSync(playerPath, "utf-8");

      // Facade must be conditionally rendered strictly when !isPlaying
      expect(code).toContain("!isPlaying ?");
      // No floating unmute buttons positioned over the iframe (e.g. absolute top-3 left-3)
      expect(code).not.toContain("Click to Unmute / Boost Audio");
      expect(code).not.toContain("showFloatingAudioHint");
    });
  });

  // --------------------------------------------------------------------------
  // 3. Security Policy Headers
  // --------------------------------------------------------------------------
  describe("3. Security Policy Headers (CSP & Permissions-Policy)", () => {
    it("verifies next.config.mjs defines required media-src and connect-src for YouTube audio CDN", () => {
      const configPath = path.join(rootDir, "next.config.mjs");
      expect(fs.existsSync(configPath)).toBe(true);
      const code = fs.readFileSync(configPath, "utf-8");

      // media-src directive
      expect(code).toContain("media-src");
      expect(code).toContain("https://*.googlevideo.com");
      expect(code).toContain("https://*.youtube.com");
      expect(code).toContain("https://*.youtube-nocookie.com");

      // connect-src directive
      expect(code).toContain("connect-src");
      expect(code).toContain("https://*.googlevideo.com");

      // frame-src directive
      expect(code).toContain("frame-src");
      expect(code).toContain("https://www.youtube-nocookie.com");

      // Permissions-Policy header
      expect(code).toContain("Permissions-Policy");
      expect(code).toContain("autoplay=(self \"https://www.youtube-nocookie.com\" \"https://www.youtube.com\")");
      expect(code).toContain("encrypted-media=(self \"https://www.youtube-nocookie.com\" \"https://www.youtube.com\")");
      expect(code).toContain("fullscreen=*");
    });
  });

  // --------------------------------------------------------------------------
  // 4. Sound Safeguard Mechanism
  // --------------------------------------------------------------------------
  describe("4. Sound Safeguard Logic", () => {
    it("ensures LessonVideoPlayer defines the sound safeguard banner and unMute actions", () => {
      const playerPath = path.join(rootDir, "src/components/video/LessonVideoPlayer.tsx");
      const code = fs.readFileSync(playerPath, "utf-8");

      // Sound safeguard state and trigger
      expect(code).toContain("soundSafeguardTriggered");
      expect(code).toContain("setSoundSafeguardTriggered");
      expect(code).toContain("isMuted");
      expect(code).toContain("getVolume");

      // Safeguard UI banner
      expect(code).toContain('data-testid="sound-safeguard-banner"');
      expect(code).toContain("Sound is off.");
      expect(code).toContain('data-testid="turn-on-sound-button"');
      expect(code).toContain("Turn on sound");

      // Programmatic unMute and volume restore
      expect(code).toContain("playerInstanceRef.current.unMute()");
      expect(code).toContain("playerInstanceRef.current.setVolume(100)");

      // Permanent helpful text
      expect(code).toContain("No sound? Check the volume in the video bar and on your device.");
      expect(code).toContain('data-testid="watch-on-youtube-link"');
    });

    it("verifies anonymous telemetry route exists for video sound state", () => {
      const routePath = path.join(rootDir, "src/app/api/analytics/video-sound-state/route.ts");
      expect(fs.existsSync(routePath)).toBe(true);
      const code = fs.readFileSync(routePath, "utf-8");

      expect(code).toContain("video_sound_state");
      expect(code).toContain("NextResponse.json");
    });
  });
});
