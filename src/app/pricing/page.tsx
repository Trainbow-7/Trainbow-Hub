import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import {
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Sparkles,
  GraduationCap,
  BookOpen,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Pricing & Plans — Trainbow HUB",
  description: "Transparent, predictable pricing in Nigerian Naira. Pay per tutoring session or choose an affordable Socratic AI subscription.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="brand">Simple & Predictable</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
            Clear Pricing. Zero Hidden Fees.
          </h1>
          <p className="text-sm sm:text-base text-neutral-slate-600 leading-relaxed">
            All prices are in Nigerian Naira (NGN). Pay per tutoring lesson or unlock continuous AI mathematics guidance with flexible monthly subscriptions.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plan 1: 1-on-1 Tutoring */}
          <Card className="flex flex-col justify-between border-neutral-slate-200 hover:shadow-hover transition-all">
            <CardHeader className="space-y-2">
              <Badge variant="tutor" className="w-fit">1-on-1 Lessons</Badge>
              <CardTitle className="text-xl">Hourly Tutoring</CardTitle>
              <div className="pt-2">
                <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">From ₦5,000</span>
                <span className="text-xs text-neutral-slate-500 block">/ 60-minute lesson</span>
              </div>
              <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                Personalized instruction from verified Nigerian educators for WAEC, JAMB, or junior secondary school.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-neutral-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>Choose tutors by experience, qualification, and hourly rate</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>10-minute temporary slot hold during checkout</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>Free reschedule up to 4 hours before the session</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-tutor-700 shrink-0 mt-0.5" />
                <span>Full 100% refund on tutor cancellation</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/tutors" className="w-full">
                <Button variant="outline" size="sm" className="w-full justify-center">
                  Browse Tutors Directory
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Plan 2: Socratic AI Plan (Featured) */}
          <Card className="flex flex-col justify-between border-2 border-service-ai-600 bg-purple-50/20 shadow-xl relative hover:shadow-hover transition-all">
            <div className="absolute -top-3 right-6 bg-service-ai-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <CardHeader className="space-y-2">
              <Badge variant="ai" className="w-fit">Trainbow AI</Badge>
              <CardTitle className="text-xl">Socratic AI Pass</CardTitle>
              <div className="pt-2">
                <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">₦3,500</span>
                <span className="text-xs text-neutral-slate-500 block">/ month</span>
              </div>
              <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                24/7 Socratic Mathematics homework helper with hint-first guidance and programmatic formula checking.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-neutral-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>Generous daily question quota (up to 25 detailed turns)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>Hint-first pedagogy (never spoils answers)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>Programmatically verified algebraic calculations</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-service-ai-600 shrink-0 mt-0.5" />
                <span>One-tap escalation to human tutors</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button variant="ai" size="sm" className="w-full justify-center">
                  Subscribe to AI Pass
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Plan 3: Academy Full Course Pass */}
          <Card className="flex flex-col justify-between border-neutral-slate-200 hover:shadow-hover transition-all">
            <CardHeader className="space-y-2">
              <Badge variant="brand" className="w-fit">Academy Pass</Badge>
              <CardTitle className="text-xl">Curriculum Courses</CardTitle>
              <div className="pt-2">
                <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">₦15,000</span>
                <span className="text-xs text-neutral-slate-500 block">/ term per subject</span>
              </div>
              <CardDescription className="text-xs text-neutral-slate-600 pt-2">
                Complete access to structured syllabus lessons, practice questions, and stored quiz attempts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-neutral-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>All video modules and downloadable notes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Automated quiz grading with instant feedback</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Resumable across phones and laptops</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Parent weekly progress email reports</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/academy" className="w-full">
                <Button variant="outline" size="sm" className="w-full justify-center">
                  Explore Courses
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Payment Security & Refund Terms Strip */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-8 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-brand-blue-600" />
            <h2 className="font-heading font-bold text-base text-neutral-slate-900">
              Payment Safeguards & Refund Policy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-slate-600">
            <div className="space-y-1.5">
              <h3 className="font-bold text-neutral-slate-900 text-sm">Protected Paystack Transactions</h3>
              <p className="leading-relaxed">
                All card details are processed directly through Paystack&apos;s PCI-DSS compliant vault. We never store debit card numbers, CVVs, or bank PINs on our servers.
              </p>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-bold text-neutral-slate-900 text-sm">Transparent Cancellation Terms</h3>
              <p className="leading-relaxed">
                Cancel a tutoring session &gt; 24 hours prior for a 100% refund. Cancellations between 12-24 hours receive 50%. If an educator cancels or fails to attend, 100% is refunded immediately.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
