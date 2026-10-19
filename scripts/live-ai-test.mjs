#!/usr/bin/env node
/**
 * Manual Live Test Script for Trainbow HUB Vision & Reasoning Solver
 * Usage:
 *   node scripts/live-ai-test.mjs [path-to-image]
 *
 * Requirements:
 *   Set GEMINI_API_KEY (or OPENAI_API_KEY) in your environment before running:
 *     $env:GEMINI_API_KEY="AIzaSy..."
 *     node scripts/live-ai-test.mjs
 */

import fs from "fs";
import path from "path";

// Load .env.local if present
const envLocalPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const idx = trimmed.indexOf("=");
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim();
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;
const provider = process.env.AI_PROVIDER || (process.env.GEMINI_API_KEY ? "gemini" : process.env.OPENAI_API_KEY ? "openai" : "none");

console.log("=================================================");
console.log(" Trainbow HUB Live AI Provider Test Runner");
console.log("=================================================");
console.log(`Provider: ${provider}`);
console.log(`API Key set: ${apiKey ? "YES (" + apiKey.slice(0, 8) + "...)" : "NO"}`);

if (!apiKey) {
  console.error("\n[ERROR] No live API key configured.");
  console.error("Please export your server environment variable:");
  console.error("  For Google Gemini: $env:GEMINI_API_KEY=\"AIzaSy...\"");
  console.error("  For OpenAI:        $env:OPENAI_API_KEY=\"sk-...\"");
  process.exit(1);
}

const sampleImagePath = process.argv[2] || path.resolve(process.cwd(), "public", "mats2.jpeg");
console.log(`\nTesting with image: ${sampleImagePath}`);

async function runLiveTest() {
  try {
    let base64Data = "";
    if (fs.existsSync(sampleImagePath)) {
      const buffer = fs.readFileSync(sampleImagePath);
      base64Data = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      console.log(`Loaded ${buffer.length} bytes from image file.`);
    } else {
      console.log("Sample image not found on disk, using minimal 1x1 test image.");
      base64Data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    }

    console.log("\n1. Testing Multimodal Vision Extraction (/api/ai/extract-vision)...");
    const extractRes = await fetch("http://localhost:3000/api/ai/extract-vision", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-user-id": "usr-std-001" },
      body: JSON.stringify({
        imageBase64: base64Data,
        fileName: path.basename(sampleImagePath),
        typedPrompt: "solve the attached question",
      }),
    });

    const extractData = await extractRes.json();
    console.log(`HTTP Status: ${extractRes.status}`);
    console.log("Extraction Response:", JSON.stringify(extractData, null, 2));

    if (extractData.success && extractData.extraction) {
      console.log("\n2. Testing Socratic Solver (/api/ai/chat) with live extracted text...");
      const chatRes = await fetch("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-user-id": "usr-std-001" },
        body: JSON.stringify({
          prompt: "solve the attached question",
          hintLevel: "FULL_SOLUTION",
          curriculum: "WAEC_SSCE",
          subject: "Mathematics",
          attachments: [
            {
              id: "att-live-test",
              name: path.basename(sampleImagePath),
              type: "image/jpeg",
              size: 154000,
              previewUrl: base64Data,
              extractedText: extractData.extraction.question_text,
            },
          ],
        }),
      });

      const chatData = await chatRes.json();
      console.log(`HTTP Status: ${chatRes.status}`);
      console.log("\n--- AI Assistant Worked Solution ---");
      console.log(chatData.aiMessage?.content || chatData);
      console.log("\n[SUCCESS] Live model test completed successfully.");
    }
  } catch (err) {
    console.error("[LIVE_TEST_ERROR]", err);
  }
}

runLiveTest();
