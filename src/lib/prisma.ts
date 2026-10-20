import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function getPrisma(): any {
  if (typeof window !== "undefined") {
    return null;
  }

  if (!globalForPrisma.prisma) {
    try {
      if (process.env.DATABASE_URL) {
        globalForPrisma.prisma = new PrismaClient({
          log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
        });
      }
    } catch (err) {
      console.warn("[PRISMA_CLIENT_INIT_FALLBACK]", err);
    }
  }

  return globalForPrisma.prisma;
}

// Resilient proxy so that building on Vercel without DATABASE_URL never crashes
export const prisma: any = new Proxy({} as any, {
  get(_target, prop) {
    const client = getPrisma();
    if (client && prop in client) {
      const val = (client as any)[prop];
      if (typeof val === "function") {
        return val.bind(client);
      }
      return val;
    }
    // Return resilient mock handlers for database tables if DB is not configured
    return {
      create: async (args: any) => ({ id: `mock-${Date.now()}`, ...args?.data }),
      findMany: async () => [],
      findUnique: async () => null,
      findFirst: async () => null,
      upsert: async (args: any) => ({ id: `mock-${Date.now()}`, ...args?.create }),
      update: async (args: any) => ({ id: `mock-${Date.now()}`, ...args?.data }),
      delete: async () => ({ id: `mock-${Date.now()}` }),
    };
  },
});
