"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  User,
  Calendar,
  Sparkles,
} from "lucide-react";

interface TutorRequestItem {
  id: string;
  referenceCode: string;
  subject: string;
  level: string;
  urgency: string;
  lessonFormat: string;
  status: string;
  createdAt: string;
}

export function TutorRequestTracker() {
  const [requests, setRequests] = React.useState<TutorRequestItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadRequests() {
      try {
        const res = await fetch("/api/tutor-requests");
        const json = await res.json();
        if (json.success && Array.isArray(json.requests)) {
          setRequests(json.requests);
        }
      } catch (err) {
        console.error("Failed to load tutor requests:", err);
      } finally {
        setLoading(false);
      }
    }
    loadRequests();
  }, []);

  if (loading) {
    return (
      <div className="p-4 rounded-xl border border-neutral-slate-200 bg-white text-xs text-neutral-slate-500 text-center animate-pulse">
        Loading matching desk requests...
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="rounded-xl border border-service-tutor-200 bg-gradient-to-br from-white to-purple-50/30 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-service-tutor-900 font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-service-tutor-700" />
            <span>Concierge Tutor Matching</span>
          </div>
          <Badge variant="neutral" className="text-[10px]">Zero Guesswork</Badge>
        </div>
        <p className="text-xs text-neutral-slate-600 leading-relaxed">
          Need a vetted 1-on-1 tutor? Mr Oyedeji S.T, Director of Trainbow HUB, personally matches you with verified tutors available right now.
        </p>
        <Link href="/request-tutor/new">
          <Button
            variant="primary"
            size="sm"
            className="text-xs font-bold w-full justify-center min-h-[36px]"
          >
            <span>Request a Personal Match</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </Link>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "RECEIVED":
        return <Badge variant="neutral" className="bg-neutral-slate-100 text-neutral-slate-800">1. Received</Badge>;
      case "MATCHING":
        return <Badge variant="ai" className="bg-purple-100 text-purple-900 animate-pulse">2. Director Matching</Badge>;
      case "TUTOR_PROPOSED":
        return <Badge variant="brand" className="bg-brand-blue-100 text-brand-blue-900 font-bold">3. Tutor Proposed</Badge>;
      case "AWAITING_PAYMENT":
        return <Badge variant="tutor" className="bg-amber-100 text-amber-900 font-bold">Awaiting Payment</Badge>;
      case "CONFIRMED":
        return <Badge variant="success">Confirmed &amp; Active</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="rounded-xl border border-brand-blue-200 bg-white p-5 space-y-4 shadow-sm" data-testid="tutor-request-tracker">
      <div className="flex items-center justify-between border-b border-neutral-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm text-neutral-slate-900">
              My Tutor Match Requests ({requests.length})
            </h3>
            <p className="text-[11px] text-neutral-slate-500">
              Personally supervised by Director Mr Oyedeji S.T
            </p>
          </div>
        </div>
        <Link href="/request-tutor/new">
          <Button variant="outline" size="sm" className="text-xs font-semibold h-8 px-2.5">
            + New Request
          </Button>
        </Link>
      </div>

      <div className="space-y-3">
        {requests.map((req) => (
          <div
            key={req.id}
            className="p-3.5 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50/50 hover:bg-white hover:border-brand-blue-200 transition-all space-y-2"
          >
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-brand-blue-700">{req.referenceCode}</span>
                <span className="text-neutral-slate-400">·</span>
                <span className="font-semibold text-neutral-slate-800">{req.subject}</span>
              </div>
              {getStatusBadge(req.status)}
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-slate-500 pt-1">
              <span>{req.level} · {req.lessonFormat}</span>
              <span className="flex items-center gap-1 text-neutral-slate-400">
                <Clock className="w-3 h-3" />
                {req.urgency.replace(/_/g, " ")}
              </span>
            </div>

            {req.status === "TUTOR_PROPOSED" && (
              <div className="pt-2 border-t border-brand-blue-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-brand-blue-700">
                  Tutor proposal ready for your review!
                </span>
                <Link href={`/request-tutor/${req.referenceCode}`}>
                  <Button variant="primary" size="sm" className="h-7 text-xs px-3">
                    Review Proposal →
                  </Button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
