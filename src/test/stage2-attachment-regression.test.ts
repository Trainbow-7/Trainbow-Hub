import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";
import { computeSha256Hex, generateUploadId } from "@/lib/ai/attachment-hash";

describe("Stage 2: Attachment Scoping & Regression Test Suite", () => {
  beforeEach(async () => {
    await db.reset();
  });

  describe("Content-Addressed Hashing & ID Generation", () => {
    it("generates deterministic SHA-256 for identical content", () => {
      const content = "Circle PMQN diameter PQ angle 63 degrees";
      const hash1 = computeSha256Hex(content);
      const hash2 = computeSha256Hex(content);
      expect(hash1).toEqual(hash2);
      expect(hash1.length).toBe(64);
    });

    it("generates distinct SHA-256 for different content with same filename", () => {
      const file1 = "image data 1 (shoe sizes)";
      const file2 = "image data 2 (circle geometry)";
      const hash1 = computeSha256Hex(file1);
      const hash2 = computeSha256Hex(file2);
      expect(hash1).not.toEqual(hash2);

      const uploadId1 = generateUploadId("mats2.jpeg", hash1);
      const uploadId2 = generateUploadId("mats2.jpeg", hash2);
      expect(uploadId1).not.toEqual(uploadId2);
      expect(uploadId1).toContain("mats2.jpeg");
    });
  });

  describe("Message Attachment Scoping & Back-to-Back Isolation", () => {
    it("strict scoping: message turn only references its own attachments and does not pollute next turn", async () => {
      const user = await db.findUserById("usr-std-001");
      expect(user).toBeDefined();

      const conv = await db.createAIConversation({
        userId: "usr-std-001",
        title: "Test Isolation Conversation",
        curriculum: "WAEC_SSCE",
        subject: "Mathematics",
      });

      // Turn 1: User uploads image 1 (shoe sizes)
      const turn1Attachment = {
        id: "att_1",
        uploadId: "upl_hash1_mats1.jpeg",
        contentSha256: "hash1_shoes",
        name: "mats1.jpeg",
        extractedText: "Shoe sizes: 10, 9, 10, 11, 5",
      };

      const userMsg1 = await db.createAIMessage({
        conversationId: conv.id,
        role: "USER",
        content: "Find the median shoe size",
        hintLevel: "FULL_SOLUTION",
        attachments: [turn1Attachment],
        usedAttachmentIds: ["att_1"],
      });

      const aiMsg1 = await db.createAIMessage({
        conversationId: conv.id,
        role: "ASSISTANT",
        content: "Median shoe size is 10.",
        hintLevel: "FULL_SOLUTION",
        attachments: [turn1Attachment],
        usedAttachmentIds: ["att_1"],
      });

      expect(userMsg1.usedAttachmentIds).toEqual(["att_1"]);
      expect(aiMsg1.usedAttachmentIds).toEqual(["att_1"]);

      // Turn 2: User sends text-only query without any attachments
      const userMsg2 = await db.createAIMessage({
        conversationId: conv.id,
        role: "USER",
        content: "Solve 2x^2 - 5x + 3 = 0",
        hintLevel: "FULL_SOLUTION",
      });

      const aiMsg2 = await db.createAIMessage({
        conversationId: conv.id,
        role: "ASSISTANT",
        content: "Roots are x = 1.5, 1",
        hintLevel: "FULL_SOLUTION",
      });

      // Crucial regression check: Turn 2 MUST NOT inherit Turn 1's attachments
      expect(userMsg2.attachments).toBeUndefined();
      expect(userMsg2.usedAttachmentIds).toBeUndefined();
      expect(aiMsg2.attachments).toBeUndefined();
      expect(aiMsg2.usedAttachmentIds).toBeUndefined();

      // Turn 3: User uploads NEW image 2 (circle geometry)
      const turn3Attachment = {
        id: "att_2",
        uploadId: "upl_hash2_mats2.jpeg",
        contentSha256: "hash2_circle",
        name: "mats2.jpeg",
        extractedText: "In Fig. 2.19, PQ is a diameter of circle PMQN, centre O. If PQM = 63°, find QNM.",
      };

      const userMsg3 = await db.createAIMessage({
        conversationId: conv.id,
        role: "USER",
        content: "In Fig. 2.19, PQ is a diameter of circle PMQN, centre O. If PQM = 63 degrees, find QNM.",
        hintLevel: "FULL_SOLUTION",
        attachments: [turn3Attachment],
        usedAttachmentIds: ["att_2"],
      });

      const aiMsg3 = await db.createAIMessage({
        conversationId: conv.id,
        role: "ASSISTANT",
        content: "Angle QNM is 27° by circle theorems.",
        hintLevel: "FULL_SOLUTION",
        attachments: [turn3Attachment],
        usedAttachmentIds: ["att_2"],
      });

      expect(userMsg3.usedAttachmentIds).toEqual(["att_2"]);
      expect(aiMsg3.usedAttachmentIds).toEqual(["att_2"]);
      expect(aiMsg3.usedAttachmentIds).not.toContain("att_1");
    });
  });

  describe("Stage 2: Vision Extraction Honest Degradation & Zero-Fabrication Guarantees", () => {
    it("fails honestly when AI_PROVIDER is unconfigured or sandbox rather than fabricating a fake question", async () => {
      const { POST } = await import("@/app/api/ai/extract-vision/route");
      const fakeRequest = new Request("http://localhost:3000/api/ai/extract-vision", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": "usr-std-001",
        },
        body: JSON.stringify({
          imageBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRg==",
          fileName: "mats2.jpeg",
          typedPrompt: "",
        }),
      });

      const res = await POST(fakeRequest);
      expect(res.status).toBe(503);
      const data = await res.json();
      expect(data.success).toBe(false);
      expect(data.error).toBe(
        "Image reading is not available right now. You can type the question instead."
      );
      // Zero fabrication: must not contain any fake or hardcoded circle question
      expect(JSON.stringify(data)).not.toContain("Fig. 2.19");
      expect(JSON.stringify(data)).not.toContain("PMQN");
    });
  });

  describe("Requirement A: Provider payload spy asserting image bytes present and no placeholder strings", () => {
    it("spies on Gemini vision payload, asserting image bytes are present and no 'Exam Figure Attached' appears in prompt", async () => {
      const { callGeminiVision } = await import("@/lib/ai/multimodal-vision");

      const rawBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
      const dataUri = `data:image/png;base64,${rawBase64}`;

      let capturedPayload: any = null;
      const originalFetch = global.fetch;
      global.fetch = async (url: any, init: any) => {
        if (typeof url === "string" && url.includes("generativelanguage.googleapis.com")) {
          capturedPayload = JSON.parse(init.body);
          return new Response(
            JSON.stringify({
              candidates: [
                {
                  content: {
                    parts: [
                      {
                        text: JSON.stringify({
                          question_text: "In Fig. 2.35, calculate the value of x. [WAEC]",
                          sub_questions: ["Calculate the value of x"],
                          confidence: 95,
                        }),
                      },
                    ],
                  },
                },
              ],
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
        return originalFetch(url, init);
      };

      try {
        const result = await callGeminiVision(dataUri, "mock-gemini-key", "Please help with this");
        expect(result).toBeDefined();
        expect(capturedPayload).not.toBeNull();

        // 1. Assert image data/bytes are present in payload
        const parts = capturedPayload.contents[0].parts;
        const inlinePart = parts.find((p: any) => p.inline_data);
        expect(inlinePart).toBeDefined();
        expect(inlinePart.inline_data.data).toBe(rawBase64);
        expect(inlinePart.inline_data.mime_type).toBe("image/png");

        // 2. Assert NO placeholder string like "Exam Figure Attached" appears in any part
        const promptText = parts.map((p: any) => p.text || "").join(" ");
        expect(promptText).not.toContain("Exam Figure Attached");
        expect(promptText).not.toContain("[Exam Figure");
        expect(promptText).not.toContain("Attached Question Document");
      } finally {
        global.fetch = originalFetch;
      }
    });
  });

  describe("Requirement B & D: Real Chat Route Execution, Guard Against Echoing, and Thread Titles", () => {
    it("aborts and returns error if user prompt is a generic command and attachment has no extracted text", async () => {
      const { POST: chatRoute } = await import("@/app/api/ai/chat/route");

      const req = new Request("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": "usr-std-001",
        },
        body: JSON.stringify({
          prompt: "solve the attached question",
          attachments: [
            {
              id: "att-empty-ocr",
              name: "mats2.jpeg",
              type: "image/jpeg",
              size: 50000,
              previewUrl: "data:image/jpeg;base64,...",
              // Note: No extracted text (failed or unread image)
            },
          ],
        }),
      });

      const res = await chatRoute(req);
      expect(res.status).toBe(422);
      const data = await res.json();
      expect(data.success).toBe(false);
      expect(data.error).toBe("I couldn't read your attachment. Try again, re-scan, or type the question.");
    });

    it("solves multi-part WAEC cyclic quadrilateral question and generates thread title from extracted question", async () => {
      const { POST: chatRoute } = await import("@/app/api/ai/chat/route");

      const waecExtractedText =
        "(a) Prove that the opposite angles of a cyclic quadrilateral are supplementary. (b) In Fig. 2.35, calculate the value of x, giving a reason for each step in your answer. [WAEC]";

      const req = new Request("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": "usr-std-001",
        },
        body: JSON.stringify({
          prompt: "solve the attached question",
          hintLevel: "FULL_SOLUTION",
          attachments: [
            {
              id: "att-waec-photo",
              name: "mats2.jpeg",
              type: "image/jpeg",
              size: 154000,
              previewUrl: "data:image/jpeg;base64,abc",
              extractedText: waecExtractedText,
            },
          ],
        }),
      });

      const res = await chatRoute(req);
      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.success).toBe(true);
      expect(data.aiMessage).toBeDefined();

      const aiContent = data.aiMessage.content;
      // Solves both parts:
      expect(aiContent).toContain("Part (a)");
      expect(aiContent).toContain("supplementary");
      expect(aiContent).toContain("Part (b)");
      expect(aiContent).toContain("Fig. 2.35");
      expect(aiContent).toContain("x = 40");

      // Uses labels from figure:
      expect(aiContent).toContain("ABCD");
      expect(aiContent).toContain("ADE");

      // Does not contain placeholder tag or echo of student command
      expect(aiContent).not.toContain("[Exam Figure Attached");
      expect(aiContent).not.toContain("Here is the complete step-by-step solution for:\n*\"**solve the attached question**\"*");

      // Title must be generated from extracted question, not generic prompt
      const conv = await db.findAIConversationById(data.conversationId, "usr-std-001");
      expect(conv?.title.toLowerCase()).toContain("cyclic quadrilateral");
      expect(conv?.title.toLowerCase()).not.toContain("solve the attached");
    });

    it("handles two different fixture images in one conversation with independent extraction, solving, and distinct titles", async () => {
      const { POST: chatRoute } = await import("@/app/api/ai/chat/route");

      // Image 1: Statistics Shoe Sizes in New Conversation
      const req1 = new Request("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": "usr-std-001",
        },
        body: JSON.stringify({
          prompt: "solve this question",
          attachments: [
            {
              id: "att-shoes",
              name: "mats_shoes.jpeg",
              type: "image/jpeg",
              size: 80000,
              previewUrl: "data:image/jpeg;base64,123",
              extractedText: "The shoe sizes of five students are 10, 9, 10, 11 and 5. Find the median shoe size.",
            },
          ],
        }),
      });

      const res1 = await chatRoute(req1);
      const data1 = await res1.json();
      expect(data1.success).toBe(true);
      expect(data1.aiMessage.content).toContain("Median");
      expect(data1.aiMessage.content).not.toContain("cyclic quadrilateral");

      const conv1 = await db.findAIConversationById(data1.conversationId, "usr-std-001");
      expect(conv1?.title.toLowerCase()).toContain("shoe");

      // Image 2: Cyclic Quad in Second Conversation
      const req2 = new Request("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": "usr-std-001",
        },
        body: JSON.stringify({
          prompt: "solve the attached question",
          attachments: [
            {
              id: "att-quad",
              name: "mats2.jpeg",
              type: "image/jpeg",
              size: 90000,
              previewUrl: "data:image/jpeg;base64,456",
              extractedText: "In Fig. 2.35, calculate the value of x. [WAEC]",
            },
          ],
        }),
      });

      const res2 = await chatRoute(req2);
      const data2 = await res2.json();
      expect(data2.success).toBe(true);
      expect(data2.aiMessage.content).toContain("Fig. 2.35");
      expect(data2.aiMessage.content).not.toContain("shoe sizes");

      const conv2 = await db.findAIConversationById(data2.conversationId, "usr-std-001");
      expect(conv2?.title.toLowerCase()).toContain("fig. 2.35");
      expect(conv2?.id).not.toBe(conv1?.id);
      expect(conv2?.title).not.toBe(conv1?.title);
    });

    it("ensures honest verification labeling: isValid is false for unverified generic domains", async () => {
      const { verifyMathProblem } = await import("@/lib/adapters/ai");

      // A general physics conceptual prompt without geometric or CAS equation
      const result = verifyMathProblem("Explain the difference between transverse and longitudinal waves with examples.");
      expect(result.isValid).toBe(false);
      expect(result.method).toContain("Not independently verified");
    });
  });
});


