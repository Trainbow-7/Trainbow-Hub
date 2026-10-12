"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/auth/AuthProvider";
import { Eye, EyeOff, Lock, Mail, ShieldCheck, UserCheck, AlertCircle, Sparkles } from "lucide-react";

const DEMO_PRESETS = [
  {
    role: "Learner (Adult)",
    email: "student@trainbowhub.ng",
    password: "Trainbow2026!",
    badge: "Student",
    color: "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200",
  },
  {
    role: "Learner (Minor · 14yo)",
    email: "minor@trainbowhub.ng",
    password: "Trainbow2026!",
    badge: "Requires Guardian OTP",
    color: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    role: "Parent / Guardian",
    email: "parent@trainbowhub.ng",
    password: "Trainbow2026!",
    badge: "Guardian",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    role: "Vetted Tutor",
    email: "tutor@trainbowhub.ng",
    password: "Trainbow2026!",
    badge: "Dr. Tayo Okafor",
    color: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    role: "Platform Admin",
    email: "admin@trainbowhub.ng",
    password: "TrainbowAdmin2026!",
    badge: "Super Admin",
    color: "bg-neutral-slate-100 text-neutral-slate-800 border-neutral-slate-300",
  },
];

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const { refresh } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const handleDemoSelect = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to sign in. Please check your credentials.");
        setIsLoading(false);
        return;
      }

      await refresh();

      // Check if minor account with pending guardian consent
      if (data.pendingGuardianConsent) {
        window.location.href = `/guardian/consent?studentId=${data.user.id}`;
      } else {
        window.location.href = redirectUrl;
      }
    } catch {
      setErrorMsg("A network error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="flex justify-center mb-6">
          <TrainbowLogo />
        </div>
        <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-neutral-slate-900 font-heading">
          Sign in to your account
        </h1>
        <p className="mt-2 text-center text-sm text-neutral-slate-600">
          Access your personalized learning portal, curriculum notes, and scheduled sessions.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        {/* Quick Demo Credentials Panel */}
        <div className="mb-6 bg-white p-4 rounded-xl border border-neutral-slate-200 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-slate-700 uppercase tracking-wider mb-2.5">
            <Sparkles className="w-4 h-4 text-brand-blue-600" />
            <span>Quick Demo Sign-In (1-Tap Selection)</span>
          </div>
          <p className="text-xs text-neutral-slate-500 mb-3">
            Select a test role below to populate credentials instantly:
          </p>
          <div className="flex flex-wrap gap-2">
            {DEMO_PRESETS.map((preset) => (
              <button
                key={preset.role}
                type="button"
                onClick={() => handleDemoSelect(preset.email, preset.password)}
                className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all hover:opacity-90 active:scale-95 text-left flex items-center gap-1.5 ${preset.color}`}
              >
                <span>{preset.role}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Sign-In Card */}
        <div className="bg-white py-8 px-6 shadow-sm border border-neutral-slate-200 rounded-2xl sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {errorMsg && (
              <div
                role="alert"
                className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-sm text-red-700"
              >
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-neutral-slate-700 mb-1.5"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. chioma@trainbowhub.ng"
                  className="pl-10 text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-neutral-slate-700"
                >
                  Password
                </label>
                <span className="text-xs text-brand-blue-600 hover:text-brand-blue-700 font-medium cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="pl-10 pr-10 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-slate-400 hover:text-neutral-slate-600 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              className="w-full justify-center py-2.5 text-base font-semibold shadow-sm"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          {/* NDPA 2023 Safeguard Notice */}
          <div className="mt-6 pt-5 border-t border-neutral-slate-100 flex items-start gap-2 text-xs text-neutral-slate-500">
            <ShieldCheck className="w-4 h-4 text-brand-teal-600 shrink-0 mt-0.5" />
            <p>
              Under <span className="font-semibold text-neutral-slate-700">NDPA 2023 Section 31</span>,
              learners under 18 years operate under verified parental consent before booking sessions.
            </p>
          </div>

          {/* Registration Link */}
          <div className="mt-5 text-center text-sm text-neutral-slate-600">
            <span>Don&apos;t have an account yet? </span>
            <Link
              href="/register"
              className="font-semibold text-brand-blue-600 hover:text-brand-blue-700 hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-medium text-neutral-slate-500 hover:text-neutral-slate-700"
          >
            ← Back to Trainbow HUB Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-neutral-slate-50 text-xs text-neutral-slate-500">Loading sign-in...</div>}>
      <LoginForm />
    </React.Suspense>
  );
}
