import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { CheckIcon } from "@/components/ui/icons";

export const metadata = {
  title: "Pricing & Plans — Trainbow HUB",
  description: "Transparent, predictable pricing in Nigerian Naira. Pay per tutoring session or choose an affordable study helper subscription.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4 text-center flex flex-col items-center">
          <Badge variant="brand" className="w-fit">Simple &amp; Predictable</Badge>
          <h1 className="text-display font-extrabold font-heading text-neutral-slate-900 tracking-tight text-center">
            Clear pricing. Zero hidden fees.
          </h1>
          <p className="text-body-lg text-neutral-slate-600 leading-relaxed max-w-2xl mx-auto text-center">
            All prices are in Nigerian Naira (₦). Pay per tutoring lesson or subscribe for ongoing study helper guidance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
          {/* Plan 1: 1-on-1 Tutoring */}
          <Card className="flex flex-col justify-between border-neutral-slate-200">
            <CardHeader className="space-y-2">
              <Badge variant="tutor" className="w-fit">Coordinator matching</Badge>
              <CardTitle className="text-xl">1-on-1 tutoring</CardTitle>
              <div className="pt-2">
                <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">From ₦5,000</span>
                <span className="text-xs text-neutral-slate-500 block">/ 60-minute lesson</span>
              </div>
              <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                Personally matched by Mr Oyedeji S.T, Director of Trainbow HUB, based on student goals and schedule.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-neutral-slate-700">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>Hand-selected matching based on student goals</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>Review match details and approve before payment</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>Parent or guardian approval required for under-18 learners</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>Full 100% refund on tutor cancellation</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/request-tutor" className="w-full">
                <Button variant="outline" className="w-full justify-center h-11">
                  Request a tutor match
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Plan 2: Study Helper Pass */}
          <Card className="flex flex-col justify-between border-2 border-service-ai-600 bg-purple-50/20 relative">
            <div className="absolute -top-3 right-6 bg-service-ai-600 text-white px-3 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
              Study helper
            </div>
            <CardHeader className="space-y-2">
              <Badge variant="ai" className="w-fit">Trainbow AI</Badge>
              <CardTitle className="text-xl">Study helper pass</CardTitle>
              <div className="pt-2">
                <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">₦3,500</span>
                <span className="text-xs text-neutral-slate-500 block">/ month</span>
              </div>
              <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                Step-by-step homework helper with hints first and automated calculation checks.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-neutral-slate-700">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>Daily question quota (up to 25 detailed turns)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>Hints first to guide your thinking before the full solution</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>Calculations checked by software where possible</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>Ask for a tutor match directly from any question</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button variant="ai" className="w-full justify-center h-11">
                  Subscribe to study helper
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Plan 3: Academy Full Course Pass */}
          <Card className="flex flex-col justify-between border-neutral-slate-200">
            <CardHeader className="space-y-2">
              <Badge variant="brand" className="w-fit">Academy pass</Badge>
              <CardTitle className="text-xl">Curriculum courses</CardTitle>
              <div className="pt-2">
                <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">₦15,000</span>
                <span className="text-xs text-neutral-slate-500 block">/ term per subject</span>
              </div>
              <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                Access to structured syllabus lessons, practice questions, and stored quiz attempts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-neutral-slate-700">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>All video modules and downloadable notes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Automated quiz grading with instant feedback</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Resumable across phones and laptops</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Parent weekly progress email reports</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/academy" className="w-full">
                <Button variant="outline" className="w-full justify-center h-11">
                  Explore courses
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Payment Security & Refund Terms Strip */}
        <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 sm:p-8 w-full space-y-6">
          <div className="border-b border-neutral-slate-100 pb-3">
            <h2 className="font-heading font-bold text-base text-neutral-slate-900">
              Payment safeguards &amp; refund terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-slate-600">
            <div className="space-y-1.5">
              <h3 className="font-bold text-neutral-slate-900 text-sm">Protected Paystack transactions</h3>
              <p className="leading-relaxed">
                All card details are processed directly through Paystack&apos;s PCI-DSS compliant vault. We never store debit card numbers, CVVs, or bank PINs on our servers.
              </p>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-bold text-neutral-slate-900 text-sm">Transparent cancellation terms</h3>
              <p className="leading-relaxed">
                Cancel a tutoring session more than 24 hours prior for a 100% refund. Cancellations between 12 and 24 hours receive 50%. If an educator cancels or fails to attend, 100% is refunded immediately.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
