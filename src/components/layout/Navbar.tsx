"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { Button } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";
import { Menu, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/academy", label: "Academy" },
  { href: "/ai", label: "AI" },
  { href: "/tutors", label: "Tutors" },
  { href: "/music", label: "Music" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Wordmark & Tagline */}
        <div className="flex items-center gap-8">
          <TrainbowLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-brand-blue-600 bg-brand-blue-50 font-semibold"
                      : "text-neutral-slate-600 hover:text-neutral-slate-900 hover:bg-neutral-slate-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Action Elements */}
        <div className="flex items-center gap-3">
          {/* Currency / Regional Hint */}
          <div
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-neutral-slate-600 bg-neutral-slate-100 rounded-full border border-neutral-slate-200"
            title="Operating currency: Nigerian Naira (NGN)"
          >
            <Globe className="h-3.5 w-3.5 text-neutral-slate-500" />
            <span>NGN (₦)</span>
          </div>

          {/* Log In (Ghost) */}
          <Link href="/login" className="hidden sm:inline-flex">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>

          {/* Get Started (Primary) */}
          <Link href="/register">
            <Button variant="primary" size="sm" className="font-semibold shadow-sm">
              Get started
            </Button>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden rounded-lg p-2 text-neutral-slate-600 hover:bg-neutral-slate-100 hover:text-neutral-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        title="Menu"
      >
        <div className="flex flex-col h-full justify-between gap-6">
          <div className="space-y-4">
            <div className="pb-4 border-b border-neutral-slate-200">
              <TrainbowLogo />
            </div>

            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-2.5 text-base rounded-md font-medium transition-colors",
                      isActive
                        ? "text-brand-blue-600 bg-brand-blue-50 font-semibold"
                        : "text-neutral-slate-700 hover:bg-neutral-slate-100 hover:text-neutral-slate-900"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 text-neutral-slate-400" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-neutral-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-slate-500 py-1">
              <span>Currency & Locale</span>
              <span className="font-semibold text-neutral-slate-700">NGN (₦) · Nigeria</span>
            </div>

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
            </Link>

            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="primary" className="w-full justify-center">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </Sheet>
    </header>
  );
}
