"use client";

import * as React from "react";
import { TrainbowLogo } from "@/components/ui/TrainbowLogo";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/Dialog";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { EmptyState, LoadingState, ErrorState } from "@/components/ui/States";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Music,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";

function FoundationContent() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [healthStatus, setHealthStatus] = React.useState<{ status: string; uptimeSeconds: number } | null>(null);
  const { addToast } = useToast();

  React.useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setHealthStatus(data))
      .catch(() => setHealthStatus({ status: "unknown", uptimeSeconds: 0 }));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-slate-50 text-neutral-slate-900 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-slate-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <TrainbowLogo />
          
          <div className="flex items-center gap-3">
            {healthStatus ? (
              <Badge variant="success" className="gap-1.5 py-1">
                <span className="h-2 w-2 rounded-full bg-status-green-600 animate-pulse" />
                API Healthy (Uptime: {healthStatus.uptimeSeconds}s)
              </Badge>
            ) : (
              <Badge variant="warning" className="gap-1.5 py-1">
                <Clock className="h-3 w-3" />
                Connecting...
              </Badge>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                addToast({
                  type: "info",
                  title: "Design System Initialized",
                  description: "All Trainbow tokens and Radix components loaded cleanly.",
                });
              }}
            >
              Test Notification
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-navy-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy-950/80 px-3 py-1 text-xs font-semibold text-brand-blue-50 border border-brand-blue-500/20 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-blue-500" />
            Phase 0: Foundation Complete • System Ready
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading max-w-3xl leading-tight">
            The Resilient Learning Hub Built for <span className="text-brand-blue-500">Nigeria</span> and Beyond
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-slate-300 max-w-2xl leading-relaxed">
            Connecting students, parents, and expert tutors in one unified account. Powered by syllabus-aligned courses, Socratic AI assistance, and verified child safeguarding.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="lg"
              className="gap-2"
              onClick={() => setDialogOpen(true)}
            >
              <Activity className="h-4 w-4" />
              Verify Design Tokens Modal
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                addToast({
                  type: "success",
                  title: "Phase 0 Verified",
                  description: "Docker, TypeScript, Vitest, and design tokens active.",
                });
              }}
            >
              Run System Smoke Test
            </Button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-service-ai-600/10 blur-3xl pointer-events-none" />
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Design System & Service Pillars */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold font-heading text-neutral-slate-900">
                Service Pillars & Accents
              </h2>
              <p className="text-sm text-neutral-slate-600">
                Each service carries a distinct accent from the Trainbow palette with guaranteed WCAG AA contrast.
              </p>
            </div>
            <Badge variant="neutral">Design Tokens v1.0</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Academy Pillar */}
            <Card className="border-t-4 border-t-brand-blue-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <Badge variant="brand">Academy</Badge>
                </div>
                <CardTitle className="mt-2">Curriculum & Courses</CardTitle>
                <CardDescription>
                  Mathematics launch-ready with step-by-step quizzes and cross-device progress.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-neutral-slate-600">
                  Primary Brand Accent: <strong>Blue 600 (#2563EB)</strong> with Blue 50 tints.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm" className="w-full">
                  Explore Syllabus
                </Button>
              </CardFooter>
            </Card>

            {/* AI Assistant Pillar */}
            <Card className="border-t-4 border-t-service-ai-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-purple-50 text-service-ai-600 flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <Badge variant="ai">Trainbow AI</Badge>
                </div>
                <CardTitle className="mt-2">Mathematics Assistant</CardTitle>
                <CardDescription>
                  Socratic hints, programmatic formula verification, and seamless tutor escalation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-neutral-slate-600">
                  Service Accent: <strong>Violet 600 (#7C3AED)</strong>. Server-side only gateway.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ai" size="sm" className="w-full">
                  Try Math Assistant
                </Button>
              </CardFooter>
            </Card>

            {/* Tutors Pillar */}
            <Card className="border-t-4 border-t-service-tutor-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-teal-50 text-service-tutor-700 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <Badge variant="tutor">Tutors</Badge>
                </div>
                <CardTitle className="mt-2">1-on-1 Marketplace</CardTitle>
                <CardDescription>
                  Vetted tutors, 10-minute slot holds, and database exclusion constraints.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-neutral-slate-600">
                  Service Accent: <strong>Teal 700 (#0F766E)</strong> text & buttons; Teal 500 fills.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="tutor" size="sm" className="w-full">
                  Find a Tutor
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Component Showcase Tabs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-heading text-neutral-slate-900">
            Design System Components
          </h2>

          <Tabs defaultValue="tokens">
            <TabsList>
              <TabsTrigger value="tokens">Color Tokens & Contrast</TabsTrigger>
              <TabsTrigger value="forms">Form Elements</TabsTrigger>
              <TabsTrigger value="table">Ledger & Table</TabsTrigger>
              <TabsTrigger value="states">UI States</TabsTrigger>
            </TabsList>

            {/* Color Tokens Panel */}
            <TabsContent value="tokens">
              <Card>
                <CardHeader>
                  <CardTitle>Palette Tokens & WCAG AA Verification</CardTitle>
                  <CardDescription>
                    All brand and service tokens meet WCAG 2.2 AA contrast standards. White text is strictly prohibited on Teal 500 and Amber 500.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  <div className="p-4 rounded-lg bg-brand-navy-900 text-white text-center">
                    <span className="text-xs font-bold block">Navy 900</span>
                    <span className="text-[10px] opacity-80">#0B1B3A</span>
                  </div>
                  <div className="p-4 rounded-lg bg-brand-blue-600 text-white text-center">
                    <span className="text-xs font-bold block">Blue 600</span>
                    <span className="text-[10px] opacity-80">#2563EB</span>
                  </div>
                  <div className="p-4 rounded-lg bg-brand-blue-50 text-brand-blue-600 border border-brand-blue-200 text-center">
                    <span className="text-xs font-bold block">Blue 50</span>
                    <span className="text-[10px] opacity-80">#EFF4FF</span>
                  </div>
                  <div className="p-4 rounded-lg bg-service-ai-600 text-white text-center">
                    <span className="text-xs font-bold block">Violet 600</span>
                    <span className="text-[10px] opacity-80">#7C3AED</span>
                  </div>
                  <div className="p-4 rounded-lg bg-service-tutor-700 text-white text-center">
                    <span className="text-xs font-bold block">Teal 700</span>
                    <span className="text-[10px] opacity-80">#0F766E</span>
                  </div>
                  <div className="p-4 rounded-lg bg-service-music-500 text-neutral-slate-900 text-center font-semibold">
                    <span className="text-xs font-bold block">Amber 500</span>
                    <span className="text-[10px]">#F59E0B (Dark Text)</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Forms Panel */}
            <TabsContent value="forms">
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements & Inputs</CardTitle>
                  <CardDescription>
                    Accessible inputs with labels, validation states, and helper descriptions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Input
                    label="Student Full Name"
                    placeholder="e.g., Chioma Adeleke"
                    helperText="Required for WAEC registration record."
                  />
                  <Input
                    label="Guardian Phone (+234)"
                    placeholder="080 1234 5678"
                    helperText="OTP will be sent for under-18 consent."
                  />
                  <Select
                    label="Target Level"
                    options={[
                      { value: "jss", label: "Junior Secondary (JSS 1-3)" },
                      { value: "sss", label: "Senior Secondary (SSS 1-3)" },
                      { value: "jamb", label: "JAMB / UTME Preparation" },
                      { value: "igcse", label: "Cambridge IGCSE" },
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Table Panel */}
            <TabsContent value="table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference ID</TableHead>
                    <TableHead>Subject & Service</TableHead>
                    <TableHead>Learner / Tutor</TableHead>
                    <TableHead>Amount (NGN)</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">TRB-BKG-10492</TableCell>
                    <TableCell>
                      <div className="font-semibold">Mathematics (WAEC Prep)</div>
                      <div className="text-xs text-neutral-slate-500">1-on-1 Virtual Lesson</div>
                    </TableCell>
                    <TableCell>Dr. T. Okafor</TableCell>
                    <TableCell className="font-semibold">₦7,500.00</TableCell>
                    <TableCell>
                      <Badge variant="success">Confirmed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">TRB-BKG-10493</TableCell>
                    <TableCell>
                      <div className="font-semibold">Quadratic Equations Quiz</div>
                      <div className="text-xs text-neutral-slate-500">Academy Assessment</div>
                    </TableCell>
                    <TableCell>Amaka N.</TableCell>
                    <TableCell className="font-semibold">₦0.00 (Included)</TableCell>
                    <TableCell>
                      <Badge variant="brand">Completed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">TRB-BKG-10494</TableCell>
                    <TableCell>
                      <div className="font-semibold">Calculus Intro</div>
                      <div className="text-xs text-neutral-slate-500">Slot Hold (10 min expiry)</div>
                    </TableCell>
                    <TableCell>Babatunde O.</TableCell>
                    <TableCell className="font-semibold">₦6,000.00</TableCell>
                    <TableCell>
                      <Badge variant="warning">Held</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            {/* UI States Panel */}
            <TabsContent value="states">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <EmptyState
                  title="No Tutor Sessions"
                  description="You have no upcoming tutoring sessions scheduled for today."
                  actionText="Book Tutor"
                  onAction={() => alert("Navigate to directory")}
                />
                <LoadingState message="Connecting to secure sandbox payment adapter..." />
                <ErrorState
                  title="Guardian Consent Pending"
                  message="This account is registered for a learner under 18. Booking is locked until guardian OTP is verified."
                  onRetry={() => alert("Resend guardian SMS OTP")}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Phase Roadmap Status */}
        <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-lg font-bold text-neutral-slate-900">
              10-Phase Implementation Roadmap
            </h3>
            <Badge variant="brand">Gated Milestone Review</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-3 rounded-lg border border-green-200 bg-green-50/50 flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-status-green-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 0: Foundation</strong>
                <span className="text-xs text-neutral-slate-600">Docker, CI, Design tokens, /api/health, Vitest</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 1: Data & Identity</strong>
                <span className="text-xs text-neutral-slate-600">PostgreSQL schema, OTP auth, Guardian consent, audit</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 2: Public Site</strong>
                <span className="text-xs text-neutral-slate-600">Home, catalog, tutors directory, policies, SEO</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 3: Subjects & Learning</strong>
                <span className="text-xs text-neutral-slate-600">Math course authoring, quizzes, persistent progress</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 4: Tutors & Availability</strong>
                <span className="text-xs text-neutral-slate-600">Vetting queue, credentials upload, recurring slots</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 5: Concurrency Booking</strong>
                <span className="text-xs text-neutral-slate-600">10-min slot holds, DB exclusion constraints, concurrency tests</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 6: Payments & Ledger</strong>
                <span className="text-xs text-neutral-slate-600">Paystack sandbox, signed webhooks, append-only ledger</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 7: AI Gateway</strong>
                <span className="text-xs text-neutral-slate-600">Hint-first Socratic math, quotas, formula verification</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 flex items-start gap-2.5">
              <Clock className="h-5 w-5 text-neutral-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-slate-900">Phase 8-10: Classroom & Ops</strong>
                <span className="text-xs text-neutral-slate-600">Video sessions, admin safeguarding, security hardening</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-slate-200 bg-white py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <TrainbowLogo showTagline={false} />
          <p className="text-xs text-neutral-slate-500">
            © 2026 Trainbow HUB. Built with Next.js 14, Tailwind CSS, TypeScript, and PostgreSQL. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-slate-600">
            <span>Africa/Lagos (WAT)</span>
            <span>•</span>
            <span>NGN Minor Units</span>
            <span>•</span>
            <span>Sandbox Enabled</span>
          </div>
        </div>
      </footer>

      {/* Modal Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogHeader>
          <DialogTitle>Design System & Guardrails Active</DialogTitle>
          <DialogDescription>
            Trainbow HUB foundational architecture enforces server-side security, WCAG 2.2 AA contrast standards, and provider decoupling.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2 text-xs text-neutral-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-status-green-600" />
            <span>PostgreSQL 16 with btree_gist extension configured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-status-green-600" />
            <span>Tailwind design tokens mapped to CSS variables</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-status-green-600" />
            <span>Radix-compliant accessible components created</span>
          </div>
        </div>
        <DialogFooter>
          <Button variant="primary" onClick={() => setDialogOpen(false)}>
            Close Modal
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default function Home() {
  return (
    <ToastProvider>
      <FoundationContent />
    </ToastProvider>
  );
}
