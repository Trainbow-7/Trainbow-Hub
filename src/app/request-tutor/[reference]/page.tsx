"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Calendar,
  CreditCard,
  User,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Sparkles,
  X,
  MessageSquare,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

interface RequestProposalData {
  request: {
    id: string;
    referenceCode: string;
    subject: string;
    level: string;
    urgency: string;
    topicsNeedingHelp: string;
    status: string;
    createdAt: string;
  };
  events: Array<{
    id: string;
    toStatus: string;
    note?: string;
    createdAt: string;
  }>;
  proposal: {
    id: string;
    tutorName: string;
    tutorSlug: string;
    proposedSlotDate: string;
    proposedSlotTime: string;
    quoteAmountMinorUnits: number;
    messageToFamily: string;
    cancellationTerms: string;
    status: string;
    familyFeedback?: string;
  } | null;
}

export default function RequestTrackerProposalPage({
  params,
}: {
  params: { reference: string };
}) {
  const router = useRouter();
  const { user } = useAuth();
  const [data, setData] = React.useState<RequestProposalData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [acting, setActing] = React.useState<boolean>(false);
  const [showDeclineModal, setShowDeclineModal] = React.useState<boolean>(false);
  const [declineReason, setDeclineReason] = React.useState<string>("");
  const [notice, setNotice] = React.useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/tutor-requests/${params.reference}`);
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (err) {
      console.error("Failed to load request detail", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchDetail();
  }, [params.reference]);

  const handleApprove = async () => {
    if (!data?.proposal) return;
    setActing(true);
    setNotice(null);
    try {
      const res = await fetch(`/api/match-proposals/${data.proposal.id}/decision`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "APPROVE" }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setNotice({
          message: "Proposal approved! Redirecting to secure Paystack checkout...",
          type: "success",
        });
        setTimeout(() => {
          if (json.checkoutUrl) {
            router.push(json.checkoutUrl);
          } else {
            router.push(`/bookings`);
          }
        }, 1200);
      } else {
        setNotice({ message: json.error || "Failed to approve proposal", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message || "Network error", type: "error" });
    } finally {
      setActing(false);
    }
  };

  const handleDecline = async () => {
    if (!data?.proposal) return;
    setActing(true);
    setNotice(null);
    try {
      const res = await fetch(`/api/match-proposals/${data.proposal.id}/decision`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "DECLINE", reason: declineReason }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setNotice({
          message: "Proposal declined. Director Oyedeji has been notified to match an alternative tutor.",
          type: "success",
        });
        setShowDeclineModal(false);
        await fetchDetail();
      } else {
        setNotice({ message: json.error || "Failed to decline proposal", type: "error" });
      }
    } catch (err: any) {
      setNotice({ message: err.message || "Network error", type: "error" });
    } finally {
      setActing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-slate-500 hover:text-neutral-slate-900 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </Link>
          <Badge variant="brand" className="font-mono">
            {params.reference}
          </Badge>
        </div>

        {notice && (
          <div
            className={`p-4 rounded-xl border flex items-center justify-between text-xs font-semibold ${
              notice.type === "success"
                ? "bg-emerald-50 text-emerald-900 border-emerald-300"
                : "bg-red-50 text-red-900 border-red-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{notice.message}</span>
            </div>
            <button onClick={() => setNotice(null)} className="text-neutral-slate-400 hover:text-neutral-900">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {loading ? (
          <div className="py-20 text-center text-xs text-neutral-slate-500 animate-pulse">
            Loading request and match proposal...
          </div>
        ) : !data ? (
          <div className="p-8 bg-white rounded-xl border border-neutral-slate-200 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-neutral-slate-400 mx-auto" />
            <p className="text-sm font-bold text-neutral-slate-800">Tutor Request Not Found</p>
            <p className="text-xs text-neutral-slate-500">
              Unable to locate reference {params.reference}. Please check the code and try again.
            </p>
            <Link href="/request-tutor/new">
              <Button variant="primary" size="sm">Create New Request</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Header Status Card */}
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-400 block">
                    Tutoring Request Reference
                  </span>
                  <h1 className="text-2xl font-black font-heading text-neutral-slate-900">
                    {data.request.subject} ({data.request.level})
                  </h1>
                </div>
                <Badge
                  variant={data.request.status === "TUTOR_PROPOSED" ? "brand" : "neutral"}
                  className="w-fit text-xs px-3 py-1 font-bold"
                >
                  Status: {data.request.status.replace(/_/g, " ")}
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-neutral-slate-600">
                <div>
                  <span className="text-[10px] text-neutral-slate-400 block font-semibold">Focus Topics</span>
                  <strong className="text-neutral-slate-800">{data.request.topicsNeedingHelp}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-slate-400 block font-semibold">Urgency</span>
                  <strong className="text-neutral-slate-800">{data.request.urgency.replace(/_/g, " ")}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-slate-400 block font-semibold">Target Turnaround</span>
                  <strong className="text-brand-blue-700">Under 24 Hours</strong>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-slate-400 block font-semibold">Submitted</span>
                  <strong className="text-neutral-slate-800">
                    {new Date(data.request.createdAt).toLocaleDateString("en-NG")}
                  </strong>
                </div>
              </div>
            </div>

            {/* MATCH PROPOSAL SPOTLIGHT CARD */}
            {data.proposal ? (
              <div className="rounded-2xl border-2 border-brand-blue-600 bg-gradient-to-br from-white via-brand-blue-50/20 to-purple-50/30 p-6 sm:p-8 space-y-6 shadow-floating">
                <div className="flex items-start justify-between gap-4 border-b border-brand-blue-100 pb-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-900 text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-brand-blue-600" />
                      <span>Director Match Proposal</span>
                    </div>
                    <h2 className="text-xl font-black font-heading text-neutral-slate-900">
                      Personal Tutor Match for Your Review
                    </h2>
                    <p className="text-xs text-neutral-slate-600">
                      Proposed by Mr Oyedeji S.T, Director of Trainbow HUB.
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-slate-400 block">
                      Agreed Lesson Rate
                    </span>
                    <span className="text-2xl font-black font-heading text-neutral-slate-900">
                      ₦{(data.proposal.quoteAmountMinorUnits / 100).toLocaleString("en-NG")}
                    </span>
                    <span className="text-[10px] text-neutral-slate-500 block">/ 60-min session</span>
                  </div>
                </div>

                {/* Tutor Profile Preview */}
                <div className="p-4 rounded-xl bg-white border border-neutral-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="h-12 w-12 rounded-xl bg-brand-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-sm text-neutral-slate-900">{data.proposal.tutorName}</h3>
                        <Badge variant="tutor" className="text-[10px] gap-1">
                          <ShieldCheck className="w-3 h-3" /> Verified Faculty
                        </Badge>
                      </div>
                      <p className="text-xs text-neutral-slate-500">
                        Private Roster Specialist · Background &amp; TRCN Vetted
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-neutral-slate-700 bg-neutral-slate-50 px-3 py-2 rounded-lg border border-neutral-slate-200">
                    <Calendar className="w-4 h-4 text-brand-blue-600 shrink-0" />
                    <div>
                      <span className="block font-bold">{data.proposal.proposedSlotDate}</span>
                      <span className="text-[11px] text-neutral-slate-500">{data.proposal.proposedSlotTime}</span>
                    </div>
                  </div>
                </div>

                {/* Director Recommendation Rationale */}
                <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 space-y-1.5 text-xs text-purple-950">
                  <span className="font-bold flex items-center gap-1.5 text-purple-900">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Director Oyedeji's Match Rationale:
                  </span>
                  <p className="leading-relaxed text-neutral-slate-700">
                    "{data.proposal.messageToFamily}"
                  </p>
                </div>

                {/* Proposal Decision Actions */}
                {data.proposal.status === "PENDING_APPROVAL" ? (
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-brand-blue-100">
                    <Button
                      variant="outline"
                      size="md"
                      disabled={acting}
                      onClick={() => setShowDeclineModal(true)}
                      className="w-full sm:w-auto text-red-700 border-red-200 hover:bg-red-50 min-h-[44px]"
                    >
                      <span>Decline &amp; Request Alternative</span>
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      disabled={acting}
                      onClick={handleApprove}
                      className="w-full sm:w-auto min-h-[44px] px-8 font-bold shadow-md"
                    >
                      <span>{acting ? "Confirming..." : "Approve Match & Proceed to Paystack"}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-neutral-slate-100 text-xs font-semibold text-neutral-slate-700 text-center">
                    Proposal marked as: {data.proposal.status}
                  </div>
                )}
              </div>
            ) : (
              /* Awaiting Director Match Proposal Notice */
              <div className="p-8 rounded-2xl bg-white border border-neutral-slate-200 text-center space-y-3 shadow-xs">
                <Clock className="w-10 h-10 text-brand-blue-600 mx-auto animate-pulse" />
                <h2 className="text-lg font-bold text-neutral-slate-900">
                  Mr Oyedeji S.T is Reviewing Your Needs
                </h2>
                <p className="text-xs text-neutral-slate-500 max-w-md mx-auto leading-relaxed">
                  The Director is hand-matching your request with an available tutor from our private roster. You will receive an alert and proposal review prompt right here within our SLA target.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Decline Feedback Dialog Modal */}
      {showDeclineModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-neutral-slate-200 text-xs">
            <div className="flex items-center justify-between border-b border-neutral-slate-100 pb-2">
              <h3 className="text-sm font-bold text-neutral-slate-900">Request Alternative Tutor</h3>
              <button onClick={() => setShowDeclineModal(false)} className="text-neutral-slate-400 hover:text-neutral-900">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-neutral-slate-600 leading-relaxed">
              Help Mr Oyedeji S.T adjust your match. What would you like improved in the next proposal?
            </p>
            <textarea
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              placeholder="e.g. Prefer an earlier time slot, looking for a female educator, or need lower hourly fee..."
              rows={3}
              className="w-full rounded-control border border-neutral-slate-300 p-2.5 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600"
            />
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={() => setShowDeclineModal(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                disabled={acting}
                onClick={handleDecline}
                className="bg-red-700 hover:bg-red-800 text-white font-bold"
              >
                {acting ? "Re-queuing..." : "Submit & Re-match"}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
