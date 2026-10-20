import fs from "fs";
import path from "path";
import https from "https";

function httpsPostJson(
  urlStr: string,
  bodyObj: any,
  headersObj: Record<string, string> = {},
  timeoutMs = 15000
): Promise<{ status: number; statusText: string; text: string }> {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(bodyObj);
    const parsedUrl = new URL(urlStr);
    const req = https.request(
      {
        protocol: parsedUrl.protocol,
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || 443,
        path: parsedUrl.pathname + parsedUrl.search,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(postData),
          ...headersObj,
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          resolve({
            status: res.statusCode || 500,
            statusText: res.statusMessage || "",
            text: data,
          });
        });
      }
    );

    req.on("error", (err) => reject(err));
    req.setTimeout(timeoutMs, () => {
      req.destroy();
      reject(new Error(`Operation timed out after ${timeoutMs}ms`));
    });

    req.write(postData);
    req.end();
  });
}

// 1. Load .env.local and .env
function loadEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, "utf-8");
  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eqIdx = line.indexOf("=");
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    // Strip surrounding quotes
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = val;
    }
  }
}

const envLocalPath = path.resolve(process.cwd(), ".env.local");
const envPath = path.resolve(process.cwd(), ".env");
loadEnvFile(envLocalPath);
loadEnvFile(envPath);

// Secret scrubber to prevent accidental leaks
function scrubSecrets(text: string): string {
  if (!text) return "";
  let scrubbed = text;
  const envKeys = [
    process.env.GEMINI_API_KEY,
    process.env.AI_API_KEY,
    process.env.OPENAI_API_KEY,
    process.env.PAYSTACK_SECRET_KEY,
    process.env.SESSION_SECRET,
    process.env.TOOLS_SERVICE_SECRET,
  ].filter(Boolean) as string[];

  for (const k of envKeys) {
    if (k && k.length > 5) {
      scrubbed = scrubbed.split(k).join("[REDACTED_API_KEY]");
    }
  }
  // Generic AI key regex patterns
  scrubbed = scrubbed.replace(/AIzaSy[A-Za-z0-9_-]{33}/g, "[REDACTED_GEMINI_KEY]");
  scrubbed = scrubbed.replace(/sk-[A-Za-z0-9_-]{30,}/g, "[REDACTED_OPENAI_KEY]");
  return scrubbed;
}

console.log("==================================================================");
console.log(" TRAINBOW HUB: Live AI Gateway Diagnostic & Connectivity Verification");
console.log("==================================================================");

// Environment Variable Audit
const checkedVars = [
  "AI_PROVIDER",
  "GEMINI_API_KEY",
  "AI_API_KEY",
  "OPENAI_API_KEY",
  "AI_MODEL",
  "AI_REASONING_MODEL",
  "AI_FAST_MODEL",
];

console.log("\n[1] Environment Variables Status:");
for (const v of checkedVars) {
  const val = process.env[v];
  if (!val) {
    console.log(`  - ${v.padEnd(20)}: NOT SET`);
  } else {
    const isMock = val.startsWith("mock_");
    const len = val.length;
    const prefix = val.slice(0, 3) + "...";
    console.log(
      `  - ${v.padEnd(20)}: SET (length: ${len}, isMock: ${isMock}, prefix: ${prefix})`
    );
  }
}

const provider = process.env.AI_PROVIDER || "sandbox";
const geminiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || "";
const openAIKey = process.env.OPENAI_API_KEY || "";
const effectiveKey = provider === "openai" ? openAIKey : (geminiKey || openAIKey);

const visionModelName =
  process.env.AI_MODEL ||
  (provider === "openai" ? "gpt-4o-mini" : "gemini-1.5-flash");

const reasoningModelName =
  process.env.AI_REASONING_MODEL ||
  process.env.AI_MODEL ||
  (provider === "openai" ? "gpt-4o" : "gemini-1.5-pro");

console.log("\n[2] Effective Configuration:");
console.log(`  - Active Provider      : ${provider}`);
console.log(`  - Vision Model         : ${visionModelName}`);
console.log(`  - Reasoning Model      : ${reasoningModelName}`);
console.log(`  - Has Active API Key   : ${Boolean(effectiveKey)}`);

// 1x1 transparent GIF base64
const sampleImageBase64 =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

async function verifyVision() {
  console.log(`\n[3] Testing Vision Model: ${visionModelName}`);
  const startTime = Date.now();

  if (provider === "sandbox" || !effectiveKey || effectiveKey.startsWith("mock_")) {
    console.log("  [SKIPPED] AI_PROVIDER is set to sandbox or key is mock. No live call made.");
    return { status: "MOCK_OR_SANDBOX", latencyMs: 0 };
  }

  try {
    let url = "";
    let body: any = {};
    let headers: Record<string, string> = { "Content-Type": "application/json" };

    if (provider === "openai" || (!geminiKey && openAIKey)) {
      url = "https://api.openai.com/v1/chat/completions";
      headers["Authorization"] = `Bearer ${effectiveKey}`;
      body = {
        model: visionModelName,
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "Transcribe what you see in this image." },
              { type: "image_url", image_url: { url: sampleImageBase64 } },
            ],
          },
        ],
        max_tokens: 50,
      };
    } else {
      url = `https://generativelanguage.googleapis.com/v1beta/models/${visionModelName}:generateContent?key=${effectiveKey}`;
      body = {
        contents: [
          {
            parts: [
              { text: "What do you see in this image? Answer briefly." },
              {
                inlineData: {
                  mimeType: "image/gif",
                  data: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                },
              },
            ],
          },
        ],
      };
    }

    const res = await httpsPostJson(url, body, headers, 15000);

    const latencyMs = Date.now() - startTime;
    const scrubbedBody = scrubSecrets(res.text);

    console.log(`  - HTTP Status: ${res.status} ${res.statusText}`);
    console.log(`  - Latency    : ${latencyMs}ms`);

    if (res.status >= 200 && res.status < 300) {
      console.log(`  - Result     : SUCCESS (Response received in ${latencyMs}ms)`);
      try {
        const json = JSON.parse(res.text);
        const snippet =
          json?.candidates?.[0]?.content?.parts?.[0]?.text ||
          json?.choices?.[0]?.message?.content ||
          "[output received]";
        console.log(`  - Sample     : ${snippet.slice(0, 100).replace(/\n/g, " ")}`);
      } catch {}
      return { status: "SUCCESS", httpStatus: res.status, latencyMs };
    } else {
      console.error(`  - Result     : FAILED (HTTP ${res.status})`);
      console.error(`  - Error Body : ${scrubbedBody.slice(0, 300)}`);
      return { status: "ERROR", httpStatus: res.status, error: scrubbedBody, latencyMs };
    }
  } catch (err: any) {
    const latencyMs = Date.now() - startTime;
    console.error(`  - Result     : NETWORK/RUNTIME EXCEPTION (${err.message})`);
    return { status: "EXCEPTION", error: scrubSecrets(err.message), latencyMs };
  }
}

async function verifyReasoning() {
  console.log(`\n[4] Testing Reasoning Model: ${reasoningModelName}`);
  const startTime = Date.now();

  if (provider === "sandbox" || !effectiveKey || effectiveKey.startsWith("mock_")) {
    console.log("  [SKIPPED] AI_PROVIDER is set to sandbox or key is mock. No live call made.");
    return { status: "MOCK_OR_SANDBOX", latencyMs: 0 };
  }

  try {
    let url = "";
    let body: any = {};
    let headers: Record<string, string> = { "Content-Type": "application/json" };

    if (provider === "openai" || (!geminiKey && openAIKey)) {
      url = "https://api.openai.com/v1/chat/completions";
      headers["Authorization"] = `Bearer ${effectiveKey}`;
      body = {
        model: reasoningModelName,
        messages: [
          { role: "user", content: "Solve: 2+2. Return JSON: {\"result\": 4}" },
        ],
        response_format: { type: "json_object" },
        temperature: 0.1,
      };
    } else {
      url = `https://generativelanguage.googleapis.com/v1beta/models/${reasoningModelName}:generateContent?key=${effectiveKey}`;
      body = {
        contents: [
          {
            parts: [
              { text: "Solve: 2+2. Return JSON: {\"result\": 4}" },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.1,
          response_mime_type: "application/json",
        },
      };
    }

    const res = await httpsPostJson(url, body, headers, 15000);

    const latencyMs = Date.now() - startTime;
    const scrubbedBody = scrubSecrets(res.text);

    console.log(`  - HTTP Status: ${res.status} ${res.statusText}`);
    console.log(`  - Latency    : ${latencyMs}ms`);

    if (res.status >= 200 && res.status < 300) {
      console.log(`  - Result     : SUCCESS (Response received in ${latencyMs}ms)`);
      try {
        const json = JSON.parse(res.text);
        const snippet =
          json?.candidates?.[0]?.content?.parts?.[0]?.text ||
          json?.choices?.[0]?.message?.content ||
          "[output received]";
        console.log(`  - Sample     : ${snippet.slice(0, 100).replace(/\n/g, " ")}`);
      } catch {}
      return { status: "SUCCESS", httpStatus: res.status, latencyMs };
    } else {
      console.error(`  - Result     : FAILED (HTTP ${res.status})`);
      console.error(`  - Error Body : ${scrubbedBody.slice(0, 300)}`);
      return { status: "ERROR", httpStatus: res.status, error: scrubbedBody, latencyMs };
    }
  } catch (err: any) {
    const latencyMs = Date.now() - startTime;
    console.error(`  - Result     : NETWORK/RUNTIME EXCEPTION (${err.message})`);
    return { status: "EXCEPTION", error: scrubSecrets(err.message), latencyMs };
  }
}

async function main() {
  const visionReport = await verifyVision();
  const reasoningReport = await verifyReasoning();

  console.log("\n==================================================================");
  console.log(" DIAGNOSTIC SUMMARY");
  console.log("==================================================================");
  console.log(`Vision Check   : ${visionReport.status}`);
  console.log(`Reasoning Check: ${reasoningReport.status}`);
  console.log("==================================================================\n");
}

main().catch((err) => {
  console.error("Fatal diagnostic runner error:", scrubSecrets(err.message));
  process.exit(1);
});
