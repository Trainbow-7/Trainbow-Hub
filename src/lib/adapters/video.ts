import { env } from "@/lib/env";

export interface VideoRoom {
  id: string;
  name: string;
  url: string;
  privacy: "private" | "public";
  createdAt: Date;
  expiresAt: Date;
  recordingEnabled: boolean;
  isRevoked: boolean;
}

export interface VideoToken {
  token: string;
  roomName: string;
  userRole: "STUDENT" | "TUTOR" | "GUARDIAN";
  userName: string;
  userId: string;
  isOwner: boolean;
  expiresAt: Date;
}

export interface CreateRoomOptions {
  bookingId: string;
  roomName: string;
  slotDurationMinutes?: number;
  recordingEnabled?: boolean; // CL-06: Strict NDPA default false
}

export interface GenerateTokenOptions {
  roomName: string;
  userId: string;
  userName: string;
  role: "STUDENT" | "TUTOR" | "GUARDIAN";
  bookingId: string;
  expiresInMinutes?: number;
}

export interface VideoProvider {
  createRoom(options: CreateRoomOptions): Promise<VideoRoom>;
  generateToken(options: GenerateTokenOptions): Promise<VideoToken>;
  revokeRoom(roomName: string): Promise<boolean>;
  getRoom(roomName: string): Promise<VideoRoom | null>;
}

// ==============================================================================
// Sandbox In-Memory Store & Global Singleton
// ==============================================================================

interface SandboxVideoState {
  rooms: Map<string, VideoRoom>;
  tokens: Map<string, VideoToken>;
}

const globalForVideo = globalThis as unknown as {
  __trainbowVideoSandbox?: SandboxVideoState;
};

const videoState: SandboxVideoState = globalForVideo.__trainbowVideoSandbox || {
  rooms: new Map<string, VideoRoom>(),
  tokens: new Map<string, VideoToken>(),
};

if (!globalForVideo.__trainbowVideoSandbox) {
  globalForVideo.__trainbowVideoSandbox = videoState;
}

export class DailySandboxVideoProvider implements VideoProvider {
  private domain = process.env.DAILY_DOMAIN || "https://trainbow-sandbox.daily.co";

  async createRoom(options: CreateRoomOptions): Promise<VideoRoom> {
    const duration = options.slotDurationMinutes || 60;
    const now = new Date();
    // Expiration is slot duration + 15 minute grace buffer (CL-01)
    const expiresAt = new Date(now.getTime() + (duration + 15) * 60 * 1000);

    const room: VideoRoom = {
      id: `room-${options.bookingId}`,
      name: options.roomName,
      url: `${this.domain}/${options.roomName}`,
      privacy: "private",
      createdAt: now,
      expiresAt,
      // CL-06: Safeguarding invariant - Recording off by default under NDPA 2023
      recordingEnabled: options.recordingEnabled === true,
      isRevoked: false,
    };

    videoState.rooms.set(options.roomName, room);
    return room;
  }

  async generateToken(options: GenerateTokenOptions): Promise<VideoToken> {
    const room = videoState.rooms.get(options.roomName);
    const now = new Date();
    const expiresAt = room ? room.expiresAt : new Date(now.getTime() + (options.expiresInMinutes || 75) * 60 * 1000);

    // Tutor is room owner/moderator; Student and Guardian are participants/observers
    const isOwner = options.role === "TUTOR";

    const tokenString = `dly-tok-${options.role.toLowerCase()}-${options.userId}-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    const token: VideoToken = {
      token: tokenString,
      roomName: options.roomName,
      userRole: options.role,
      userName: options.userName,
      userId: options.userId,
      isOwner,
      expiresAt,
    };

    videoState.tokens.set(tokenString, token);
    return token;
  }

  async revokeRoom(roomName: string): Promise<boolean> {
    const room = videoState.rooms.get(roomName);
    if (!room) {
      return false;
    }
    room.isRevoked = true;
    return true;
  }

  async getRoom(roomName: string): Promise<VideoRoom | null> {
    const room = videoState.rooms.get(roomName);
    return room || null;
  }
}

// Production Daily Provider (fallback / live API)
export class DailyLiveVideoProvider implements VideoProvider {
  private apiKey = process.env.DAILY_API_KEY || "";
  private domain = process.env.DAILY_DOMAIN || "https://trainbow.daily.co";

  async createRoom(options: CreateRoomOptions): Promise<VideoRoom> {
    // If running in development without valid Daily keys, delegate safely to Sandbox
    if (!this.apiKey || this.apiKey.startsWith("mock_")) {
      return new DailySandboxVideoProvider().createRoom(options);
    }

    const duration = options.slotDurationMinutes || 60;
    const now = new Date();
    const expiresAt = new Date(now.getTime() + (duration + 15) * 60 * 1000);
    const expUnix = Math.floor(expiresAt.getTime() / 1000);

    try {
      const res = await fetch("https://api.daily.co/v1/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          name: options.roomName,
          privacy: "private",
          properties: {
            exp: expUnix,
            enable_recording: options.recordingEnabled === true ? "cloud" : undefined,
            eject_at_room_exp: true,
          },
        }),
      });

      if (!res.ok) {
        console.warn(`[Daily API error: ${res.status}] Falling back to sandbox room`);
        return new DailySandboxVideoProvider().createRoom(options);
      }

      const data = await res.json();
      return {
        id: data.id || `room-${options.bookingId}`,
        name: data.name,
        url: data.url,
        privacy: data.privacy,
        createdAt: now,
        expiresAt,
        recordingEnabled: options.recordingEnabled === true,
        isRevoked: false,
      };
    } catch {
      return new DailySandboxVideoProvider().createRoom(options);
    }
  }

  async generateToken(options: GenerateTokenOptions): Promise<VideoToken> {
    if (!this.apiKey || this.apiKey.startsWith("mock_")) {
      return new DailySandboxVideoProvider().generateToken(options);
    }

    try {
      const res = await fetch("https://api.daily.co/v1/meeting-tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          properties: {
            room_name: options.roomName,
            user_name: options.userName,
            user_id: options.userId,
            is_owner: options.role === "TUTOR",
            enable_recording: false, // CL-06
          },
        }),
      });

      if (!res.ok) {
        return new DailySandboxVideoProvider().generateToken(options);
      }

      const data = await res.json();
      return {
        token: data.token,
        roomName: options.roomName,
        userRole: options.role,
        userName: options.userName,
        userId: options.userId,
        isOwner: options.role === "TUTOR",
        expiresAt: new Date(Date.now() + 75 * 60 * 1000),
      };
    } catch {
      return new DailySandboxVideoProvider().generateToken(options);
    }
  }

  async revokeRoom(roomName: string): Promise<boolean> {
    if (!this.apiKey || this.apiKey.startsWith("mock_")) {
      return new DailySandboxVideoProvider().revokeRoom(roomName);
    }

    try {
      const res = await fetch(`https://api.daily.co/v1/rooms/${roomName}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      return res.ok;
    } catch {
      return new DailySandboxVideoProvider().revokeRoom(roomName);
    }
  }

  async getRoom(roomName: string): Promise<VideoRoom | null> {
    return new DailySandboxVideoProvider().getRoom(roomName);
  }
}

let activeProvider: VideoProvider | null = null;

export function getVideoProvider(): VideoProvider {
  if (!activeProvider) {
    if (env.VIDEO_PROVIDER === "daily" && process.env.DAILY_API_KEY && !process.env.DAILY_API_KEY.startsWith("mock_")) {
      activeProvider = new DailyLiveVideoProvider();
    } else {
      activeProvider = new DailySandboxVideoProvider();
    }
  }
  return activeProvider;
}
