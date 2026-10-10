import { env } from "@/lib/env";

export interface SendMessageOptions {
  to: string;
  message: string;
}

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

export interface MessagingAdapter {
  sendSMS(options: SendMessageOptions): Promise<{ success: boolean; messageId: string }>;
  sendEmail(options: SendEmailOptions): Promise<{ success: boolean; messageId: string }>;
  sendGuardianConsentOTP(options: {
    target: string; // phone or email
    channel: "sms" | "email";
    otpCode: string;
    studentName: string;
  }): Promise<{ success: boolean; messageId: string }>;
}

// In-Memory store for Sandbox / Test environments
export interface SentOTPRecord {
  target: string;
  channel: "sms" | "email";
  otpCode: string;
  studentName: string;
  sentAt: Date;
}

export const sandboxSentOTPs: SentOTPRecord[] = [];

class SandboxMessagingAdapter implements MessagingAdapter {
  async sendSMS(options: SendMessageOptions): Promise<{ success: boolean; messageId: string }> {
    const messageId = `msg-mock-sms-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    console.log(`[SANDBOX SMS to ${options.to}] ${options.message}`);
    return { success: true, messageId };
  }

  async sendEmail(options: SendEmailOptions): Promise<{ success: boolean; messageId: string }> {
    const messageId = `msg-mock-email-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    console.log(`[SANDBOX EMAIL to ${options.to}] Subject: ${options.subject}`);
    return { success: true, messageId };
  }

  async sendGuardianConsentOTP(options: {
    target: string;
    channel: "sms" | "email";
    otpCode: string;
    studentName: string;
  }): Promise<{ success: boolean; messageId: string }> {
    const messageId = `msg-otp-${Date.now()}`;
    sandboxSentOTPs.unshift({
      target: options.target,
      channel: options.channel,
      otpCode: options.otpCode,
      studentName: options.studentName,
      sentAt: new Date(),
    });

    const body = `Your Trainbow HUB Guardian Verification Passcode for student ${options.studentName} is: ${options.otpCode}. Valid for 10 minutes. Do not share this code. Under NDPA 2023, this authorizes academic tutoring for a minor ward.`;

    if (options.channel === "sms") {
      return this.sendSMS({ to: options.target, message: body });
    } else {
      return this.sendEmail({
        to: options.target,
        subject: `[Trainbow HUB] Guardian Consent Passcode for ${options.studentName}: ${options.otpCode}`,
        html: `<p>${body}</p>`,
      });
    }
  }
}

// Production Termii & Resend Adapter
class ProductionMessagingAdapter implements MessagingAdapter {
  async sendSMS(options: SendMessageOptions): Promise<{ success: boolean; messageId: string }> {
    // In production with Termii API
    const response = await fetch("https://api.ng.termii.com/api/sms/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: options.to,
        from: process.env.TERMII_SENDER_ID || "Trainbow",
        sms: options.message,
        type: "plain",
        channel: "generic",
        api_key: process.env.TERMII_API_KEY,
      }),
    });
    const data = await response.json();
    return { success: response.ok, messageId: data.message_id || "termii-id" };
  }

  async sendEmail(options: SendEmailOptions): Promise<{ success: boolean; messageId: string }> {
    // In production with Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "Trainbow HUB <no-reply@trainbowhub.ng>",
        to: options.to,
        subject: options.subject,
        html: options.html,
      }),
    });
    const data = await response.json();
    return { success: response.ok, messageId: data.id || "resend-id" };
  }

  async sendGuardianConsentOTP(options: {
    target: string;
    channel: "sms" | "email";
    otpCode: string;
    studentName: string;
  }): Promise<{ success: boolean; messageId: string }> {
    const body = `Your Trainbow HUB Guardian Verification Passcode for student ${options.studentName} is: ${options.otpCode}. Valid for 10 minutes. Under NDPA 2023, this authorizes tutoring for a minor ward.`;
    if (options.channel === "sms") {
      return this.sendSMS({ to: options.target, message: body });
    } else {
      return this.sendEmail({
        to: options.target,
        subject: `[Trainbow HUB] Guardian Consent Passcode: ${options.otpCode}`,
        html: `<p>${body}</p>`,
      });
    }
  }
}

export const messagingAdapter: MessagingAdapter =
  env.MESSAGING_PROVIDER === "sandbox"
    ? new SandboxMessagingAdapter()
    : new ProductionMessagingAdapter();
