"use client";

import * as React from "react";
import { SessionUser } from "@/lib/auth/session";

interface GuardianshipInfo {
  id: string;
  status: "PENDING_OTP" | "VERIFIED" | "REVOKED";
  relationship: string;
  guardianPhone: string;
  guardianEmail: string;
  consentGivenAt?: string;
  otpExpiresAt?: string;
}

interface WardInfo {
  guardianshipId: string;
  studentId: string;
  studentName: string;
  relationship: string;
  status: string;
  consentGivenAt?: string;
}

interface AuthContextType {
  user: SessionUser | null;
  guardianship: GuardianshipInfo | null;
  wards: WardInfo[] | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  guardianship: null,
  wards: null,
  isLoading: true,
  refresh: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<SessionUser | null>(null);
  const [guardianship, setGuardianship] = React.useState<GuardianshipInfo | null>(null);
  const [wards, setWards] = React.useState<WardInfo[] | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchSession = React.useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setGuardianship(data.guardianship);
        setWards(data.wards);
      } else {
        setUser(null);
        setGuardianship(null);
        setWards(null);
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  const logout = React.useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setUser(null);
      setGuardianship(null);
      setWards(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        guardianship,
        wards,
        isLoading,
        refresh: fetchSession,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
