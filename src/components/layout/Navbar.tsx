"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";
import { Avatar } from "@/components/ui/Avatar";
import { useAuth } from "@/components/auth/AuthProvider";
import { Menu, ArrowRight, LogOut, ShieldAlert, ChevronDown, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { UtilityPopover } from "./UtilityPopover";

const PRIMARY_NAV_LINKS = [
  { href: "/ai", label: "AI" },
  { href: "/request-tutor", label: "Get a tutor" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const ACADEMY_SUB_LINKS = [
  {
    href: "/academy",
    title: "Academy Overview",
    desc: "Syllabus courses for WAEC, JAMB & Cambridge IGCSE",
  },
  {
    href: "/subjects",
    title: "Subjects Directory",
    desc: "Mathematics, English, Physics, Chemistry, Biology",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [academyMenuOpen, setAcademyMenuOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const academyDropdownRef = React.useRef<HTMLDivElement>(null);
  const userDropdownRef = React.useRef<HTMLDivElement>(null);
  const { user, logout, isLoading } = useAuth();

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "STUDENT":
        return "Learner";
      case "PARENT":
        return "Parent";
      case "TUTOR":
        return "Tutor";
      case "ADMIN":
        return "Admin";
      default:
        return role;
    }
  };

  // Close dropdowns on outside click
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (academyDropdownRef.current && !academyDropdownRef.current.contains(e.target as Node)) {
        setAcademyMenuOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    if (academyMenuOpen || userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [academyMenuOpen, userMenuOpen]);

  const isAcademyActive =
    pathname === "/academy" ||
    pathname?.startsWith("/academy/") ||
    pathname === "/subjects" ||
    pathname?.startsWith("/subjects/");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0B1226]/95 backdrop-blur-md transition-all text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 min-h-[4.25rem] flex items-center justify-between">
        {/* Brand Wordmark & Tagline */}
        <div className="flex items-center gap-6 lg:gap-8">
          <TrainbowLogo isDarkSurface={true} />

          {/* Desktop Navigation (>=1024px) */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {/* Academy with Dropdown Menu */}
            <div className="relative inline-flex items-center" ref={academyDropdownRef}>
              <div
                className={cn(
                  "inline-flex items-center rounded-control transition-colors",
                  isAcademyActive
                    ? "bg-white/10 text-sky-300 font-semibold"
                    : "hover:bg-white/[0.06] text-slate-200 hover:text-white"
                )}
              >
                <Link
                  href="/academy"
                  className="px-3 py-2 text-sm font-medium"
                >
                  Academy
                </Link>
                <button
                  type="button"
                  onClick={() => setAcademyMenuOpen(!academyMenuOpen)}
                  aria-expanded={academyMenuOpen}
                  aria-haspopup="menu"
                  aria-label="Toggle Academy menu"
                  className="pr-2.5 pl-0.5 py-2 hover:text-sky-300 focus-visible:outline-none"
                >
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-150",
                      academyMenuOpen && "rotate-180 text-sky-300"
                    )}
                  />
                </button>
              </div>

              {academyMenuOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-72 rounded-panel bg-[#111A2E] p-2 shadow-floating border border-white/10 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  {ACADEMY_SUB_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setAcademyMenuOpen(false)}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-control transition-colors text-left",
                        pathname === item.href || pathname?.startsWith(`${item.href}/`)
                          ? "bg-white/10 text-sky-200"
                          : "hover:bg-white/[0.06] text-slate-200 hover:text-white"
                      )}
                    >
                      <div className="h-8 w-8 rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{item.title}</p>
                        <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Core Nav Links (AI, Get a tutor, Pricing, About) */}
            {PRIMARY_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-control transition-colors",
                    isActive
                      ? "text-sky-300 bg-white/10 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/[0.06]"
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
          {/* Combined Utility Popover (Data Saver + Language + Currency) */}
          <div className="hidden lg:flex items-center">
            <UtilityPopover isDark={true} />
          </div>

          {!isLoading && user ? (
            /* Logged-In User Profile: Single Avatar Dropdown */
            <div className="hidden lg:flex items-center gap-3" ref={userDropdownRef}>
              {user.isMinor && !user.isVerified && (
                <Link
                  href={`/guardian/consent?studentId=${user.id}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/40 text-xs font-semibold hover:bg-amber-500/30 transition-colors"
                  title="Guardian verification required under NDPA 2023 Section 31"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-300" />
                  <span>Verify Guardian</span>
                </Link>
              )}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="menu"
                  aria-label="User account menu"
                  className="flex items-center gap-2 pl-2 p-1.5 rounded-control hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <Avatar name={user.fullName} size="sm" />
                  <div className="text-left text-xs leading-tight">
                    <div data-testid="navbar-user-name" className="font-bold text-white truncate max-w-[120px]">
                      {user.fullName.split(" ")[0]}
                    </div>
                    <span data-testid="navbar-user-role" className="text-[10px] uppercase font-semibold text-slate-400">
                      {getRoleLabel(user.role)}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-slate-400 transition-transform duration-150",
                      userMenuOpen && "rotate-180 text-sky-300"
                    )}
                  />
                </button>

                {userMenuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full mt-2 w-56 rounded-panel bg-[#111A2E] p-1.5 shadow-floating border border-white/10 z-50 animate-in fade-in zoom-in-95 duration-150"
                  >
                    {/* User Summary */}
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="text-xs font-bold text-white truncate">{user.fullName}</p>
                      <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                    </div>

                    {/* Role-specific Profile Link */}
                    {user.role === "PARENT" ? (
                      <Link
                        href="/guardian"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-control text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                        data-testid="navbar-parent-portal-link"
                      >
                        Profile & Parent Portal
                      </Link>
                    ) : user.role === "TUTOR" ? (
                      <Link
                        href="/dashboard/tutor"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-control text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                        data-testid="navbar-tutor-portal-link"
                      >
                        Profile & Tutor Portal
                      </Link>
                    ) : (
                      <Link
                        href="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-control text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                        data-testid="navbar-dashboard-link"
                      >
                        Profile & Dashboard
                      </Link>
                    )}

                    {/* Admin Portal - Show Admin Portal ONLY for admin users */}
                    {user.role === "ADMIN" && (
                      <Link
                        href="/admin"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-control text-purple-300 hover:text-purple-100 hover:bg-purple-900/30 transition-colors"
                        data-testid="navbar-admin-link"
                      >
                        Admin Portal
                      </Link>
                    )}

                    <div className="my-1 border-t border-white/10" />

                    {/* Log out */}
                    <button
                      type="button"
                      onClick={() => {
                        setUserMenuOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-control text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-left"
                      aria-label="Sign out of account"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Guest Controls: Never wrap, 44px height */
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/login"
                className="whitespace-nowrap font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] px-4 py-2 min-h-[44px] inline-flex items-center justify-center rounded-control text-sm transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="whitespace-nowrap font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-4 py-2 min-h-[44px] inline-flex items-center justify-center rounded-control text-sm shadow-sm transition-colors"
              >
                Get started
              </Link>
            </div>
          )}

          {/* Quick CTA on Tablet & Mobile before Hamburger */}
          {!user && (
            <div className="lg:hidden flex items-center">
              <Link
                href="/register"
                className="whitespace-nowrap font-semibold text-xs px-3 min-h-[36px] inline-flex items-center justify-center rounded-control bg-[#2563EB] text-white shadow-sm"
              >
                Get started
              </Link>
            </div>
          )}

          {/* Mobile Menu Trigger (<1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden rounded-control p-2.5 text-slate-300 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Full-Height Mobile Navigation Sheet */}
      <Sheet
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        title="Menu"
      >
        <div className="flex flex-col h-full justify-between gap-6 py-2">
          <div className="space-y-4">
            <div className="pb-4 border-b border-neutral-slate-200">
              <TrainbowLogo />
            </div>

            {user && (
              <div className="p-3 bg-neutral-slate-50 border border-neutral-slate-200 rounded-card space-y-2">
                <div className="flex items-center gap-3">
                  <Avatar name={user.fullName} size="md" />
                  <div>
                    <p data-testid="mobile-user-name" className="text-sm font-bold text-neutral-slate-900">{user.fullName}</p>
                    <p className="text-xs text-neutral-slate-500">{user.email}</p>
                    <span data-testid="mobile-user-role" className="inline-block mt-0.5 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-blue-100 text-brand-blue-800">
                      {getRoleLabel(user.role)}
                    </span>
                  </div>
                </div>

                <Link
                  href={user.role === "ADMIN" ? "/admin" : user.role === "PARENT" ? "/guardian" : user.role === "TUTOR" ? "/dashboard/tutor" : "/dashboard"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block w-full py-2.5 px-3 text-center text-xs font-bold text-white rounded-control shadow-xs transition-colors",
                    user.role === "ADMIN"
                      ? "bg-purple-700 hover:bg-purple-800"
                      : user.role === "PARENT"
                      ? "bg-amber-600 hover:bg-amber-700"
                      : "bg-brand-blue-600 hover:bg-brand-blue-700"
                  )}
                  data-testid="mobile-portal-link"
                >
                  {user.role === "ADMIN"
                    ? "Open Admin Portal"
                    : user.role === "PARENT"
                    ? "Open Parent Portal"
                    : user.role === "TUTOR"
                    ? "Open Tutor Portal"
                    : "Open My Dashboard"}
                </Link>

                {user.isMinor && !user.isVerified && (
                  <Link
                    href={`/guardian/consent?studentId=${user.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-control bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 hover:bg-amber-100"
                  >
                    <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>NDPA Consent Required — Verify Now</span>
                  </Link>
                )}
              </div>
            )}

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              <Link
                href="/academy"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3.5 py-3 text-base rounded-control font-medium transition-colors",
                  pathname === "/academy" || pathname?.startsWith("/academy/")
                    ? "text-brand-blue-600 bg-brand-blue-50 font-semibold"
                    : "text-neutral-slate-700 hover:bg-neutral-slate-100 hover:text-neutral-slate-900"
                )}
              >
                <span>Academy</span>
                <ArrowRight className="h-4 w-4 text-neutral-slate-400" />
              </Link>
              <Link
                href="/subjects"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3.5 py-3 text-base rounded-control font-medium transition-colors",
                  pathname === "/subjects" || pathname?.startsWith("/subjects/")
                    ? "text-brand-blue-600 bg-brand-blue-50 font-semibold"
                    : "text-neutral-slate-700 hover:bg-neutral-slate-100 hover:text-neutral-slate-900"
                )}
              >
                <span>Subjects</span>
                <ArrowRight className="h-4 w-4 text-neutral-slate-400" />
              </Link>
              {PRIMARY_NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-3 text-base rounded-control font-medium transition-colors",
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

          {/* Mobile Bottom Preferences */}
          <div className="pt-4 border-t border-neutral-slate-200 space-y-3">
            <div className="py-1">
              <UtilityPopover />
            </div>

            {user ? (
              <Button
                variant="outline"
                className="w-full justify-center text-red-700 hover:bg-red-50 hover:border-red-300 min-h-[44px]"
                onClick={() => {
                  setMobileMenuOpen(false);
                  logout();
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Log out</span>
              </Button>
            ) : (
              <div className="space-y-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className={buttonVariants({ variant: "outline", size: "md", className: "w-full justify-center" })}
                >
                  Log in
                </Link>

                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className={buttonVariants({ variant: "primary", size: "md", className: "w-full justify-center" })}
                >
                  Get started
                </Link>
              </div>
            )}
          </div>
        </div>
      </Sheet>
    </header>
  );
}
