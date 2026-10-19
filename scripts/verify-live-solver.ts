import { solveWithGemini } from "../src/lib/ai/multimodal-solver";

const key = process.env.GEMINI_API_KEY || "";

async function main() {
  console.log("Calling live solveWithGemini with user API key...");
  const res = await solveWithGemini(
    "(a) Prove that the opposite angles of a cyclic quadrilateral are supplementary. (b) In Fig. 2.35, calculate the value of x, giving a reason for each step in your answer. [WAEC]",
    key,
    "WAEC_SSCE",
    "Mathematics"
  );
  console.log("=== LIVE GEMINI REASONING MODEL RESPONSE ===");
  console.log("Model Used:", res.modelUsed);
  console.log("Pedagogical Summary:", res.pedagogicalSummary);
  console.log("\nContent:\n" + res.content);
}

main().catch(console.error);
