"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log error cleanly without leaking PII
    console.error("Application error:", error.message);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-md">
          <span className="text-xs font-bold uppercase tracking-wider text-status-red-600">
            Error
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
            Something went wrong
          </h1>

          <p className="text-sm text-neutral-slate-600 leading-relaxed">
            An unexpected error occurred while loading this page. Please try again or return to the home page.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => reset()}
              className="w-full sm:w-auto"
            >
              Try again
            </Button>
            <Link href="/" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

