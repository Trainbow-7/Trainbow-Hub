import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_URL: z.string().url().default("http://localhost:3000"),
  DATABASE_URL: z.string().min(1).default("postgresql://trainbow_user:trainbow_secure_password_2026@localhost:5432/trainbow_hub_dev?schema=public"),
  SESSION_SECRET: z.string().min(16).default("trainbow_dev_session_secret_32_chars_long_minimum_key!"),
  DEFAULT_CURRENCY: z.string().default("NGN"),
  DEFAULT_TIMEZONE: z.string().default("Africa/Lagos"),
  PAYMENT_PROVIDER: z.enum(["sandbox", "paystack", "flutterwave"]).default("sandbox"),
  AI_PROVIDER: z.enum(["sandbox", "gemini", "openai", "anthropic"]).default("sandbox"),
  VIDEO_PROVIDER: z.enum(["sandbox", "daily", "agora", "jitsi"]).default("sandbox"),
  MESSAGING_PROVIDER: z.enum(["sandbox", "termii", "resend"]).default("sandbox"),
  ADMIN_MFA_ENFORCED: z.string().transform((v) => v === "true").default("true"),
});

export type Env = z.infer<typeof envSchema>;

let parsedEnv: Env;

try {
  parsedEnv = envSchema.parse({
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    APP_URL: process.env.APP_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    SESSION_SECRET: process.env.SESSION_SECRET,
    DEFAULT_CURRENCY: process.env.DEFAULT_CURRENCY,
    DEFAULT_TIMEZONE: process.env.DEFAULT_TIMEZONE,
    PAYMENT_PROVIDER: process.env.PAYMENT_PROVIDER,
    AI_PROVIDER: process.env.AI_PROVIDER,
    VIDEO_PROVIDER: process.env.VIDEO_PROVIDER,
    MESSAGING_PROVIDER: process.env.MESSAGING_PROVIDER,
    ADMIN_MFA_ENFORCED: process.env.ADMIN_MFA_ENFORCED,
  });
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("Invalid environment variables configuration:", error.flatten().fieldErrors);
  }
  // Fallback defaults for build or test environments
  parsedEnv = envSchema.parse({});
}

export const env = parsedEnv;
