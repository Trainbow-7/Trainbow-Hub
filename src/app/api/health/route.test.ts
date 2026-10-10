import { describe, it, expect } from "vitest";
import { GET } from "./route";

describe("Health API Endpoint (/api/health)", () => {
  it("should return HTTP 200 with operational status and service metadata", async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.status).toBe("healthy");
    expect(data.environment).toBeDefined();
    expect(data.timezone).toBe("Africa/Lagos");
    expect(data.services).toEqual({
      api: "operational",
      database: "configured",
      providers: {
        payment: "sandbox",
        ai: "sandbox",
        video: "sandbox",
        messaging: "sandbox",
      },
    });
  });
});
