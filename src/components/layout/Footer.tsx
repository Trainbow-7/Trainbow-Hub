import * as React from "react";
import Link from "next/link";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-neutral-slate-200 bg-white text-neutral-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 space-y-3">
            <TrainbowLogo isDarkSurface={false} showTagline={true} />
            <p className="text-xs sm:text-sm text-neutral-slate-600 max-w-sm leading-relaxed">
              {BRAND.description}
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-slate-900">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-slate-600">
              <li>
                <Link href="/academy" className="hover:text-brand-blue-600 transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/ai" className="hover:text-service-ai-600 transition-colors">
                  AI
                </Link>
              </li>
              <li>
                <Link href="/request-tutor" className="hover:text-service-tutor-700 transition-colors">
                  Tutors
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-amber-700 transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-blue-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-blue-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-slate-900">
              Policies
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-slate-600">
              <li>
                <Link href="/legal/terms" className="hover:text-brand-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-brand-blue-600 transition-colors">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link href="/legal/safeguarding" className="hover:text-brand-blue-600 transition-colors">
                  Safeguarding Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refunds" className="hover:text-brand-blue-600 transition-colors">
                  Refunds &amp; Cancellations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip (Typographic, no decorative icons) */}
        <div className="mt-8 pt-6 border-t border-neutral-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-slate-600">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${BRAND.supportEmail}`}
              className="hover:text-brand-blue-600 transition-colors"
            >
              <span>{BRAND.supportEmail}</span>
            </a>
            <a
              href={`tel:${BRAND.supportPhone}`}
              className="hover:text-brand-blue-600 transition-colors"
            >
              <span>{BRAND.supportPhone}</span>
            </a>
            <span>{BRAND.location}</span>
          </div>

          <p className="text-neutral-slate-400">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
