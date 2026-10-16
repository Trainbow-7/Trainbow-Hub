"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Send,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  GraduationCap,
  Calculator,
  PlusCircle,
  Trash2,
  ThumbsUp,
  ThumbsDown,
  Flag,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  RefreshCw,
  BookOpen,
  Spline,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { AIHintLevel, AIMathVerification } from "@/lib/db";
import { FormattedMathContent } from "./FormattedMathContent";
import { MathDrawingCanvas } from "./MathDrawingCanvas";

interface Message {
  id: string;
  role: "USER" | "ASSISTANT";
  content: string;
  hintLevel: AIHintLevel;
  verification?: AIMathVerification;
  pedagogicalSummary?: string;
  isEscalated?: boolean;
  createdAt: string;
}

interface Conversation {
  id: string;
  title: string;
  curriculum: string;
  subject: string;
  createdAt: string;
  updatedAt: string;
}

interface QuotaState {
  remaining: number;
  maxQuota: number;
  queryCount: number;
  resetAt?: string;
}

const SAMPLE_QUESTIONS = [
  {
    topic: "WAEC SSCE",
    curriculum: "WAEC_SSCE",
    query: "How do I solve 2x² - 5x + 3 = 0 by factorisation for WAEC?",
  },
  {
    topic: "JAMB UTME",
    curriculum: "JAMB_UTME",
    query: "Find the discriminant and roots of 3x² + 7x + 2 = 0",
  },
  {
    topic: "Cambridge IGCSE",
    curriculum: "CAMBRIDGE_IGCSE",
    query: "Solve the linear equation 4x - 12 = 20 step-by-step",
  },
  {
    topic: "Quadratic Difference",
    curriculum: "WAEC_SSCE",
    query: "Solve x² - 16 = 0 using difference of two squares",
  },
];

const MATH_SYMBOLS = ["x²", "√", "±", "π", "θ", "Δ", "÷", "≤", "≥", "="];

export function SocraticWorkspace() {
  const router = useRouter();

  const [conversations, setConversations] = React.useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = React.useState<string | null>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [quota, setQuota] = React.useState<QuotaState>({
    remaining: 10,
    maxQuota: 10,
    queryCount: 0,
  });

  const [prompt, setPrompt] = React.useState("");
  const [selectedHintLevel, setSelectedHintLevel] = React.useState<AIHintLevel>("HINT_1");
  const [selectedCurriculum, setSelectedCurriculum] = React.useState("WAEC_SSCE");
  const [loading, setLoading] = React.useState(false);
  const [fetchingConversation, setFetchingConversation] = React.useState(false);
  const [feedbackGiven, setFeedbackGiven] = React.useState<Record<string, string>>({});
  const [escalatingMessageId, setEscalatingMessageId] = React.useState<string | null>(null);
  const [escalationSuccess, setEscalationSuccess] = React.useState<{
    tutorName: string;
    bookingUrl: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [showDrawingBoard, setShowDrawingBoard] = React.useState(false);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const isNewProblemRef = React.useRef(false);

  // Auto-scroll messages
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Load conversations and quota on mount
  React.useEffect(() => {
    loadQuota();
    loadConversations(true);
  }, []);

  const loadQuota = async () => {
    try {
      const res = await fetch("/api/ai/quota");
      if (res.ok) {
        const data = await res.json();
        if (data.quota) {
          setQuota({
            remaining: data.quota.remaining,
            maxQuota: data.quota.maxQuota,
            queryCount: data.quota.queryCount,
            resetAt: data.quota.resetAt,
          });
        }
      }
    } catch (err) {
      console.error("Failed to load quota", err);
    }
  };

  const loadConversations = async (autoSelect = false) => {
    try {
      const res = await fetch("/api/ai/conversations");
      if (res.ok) {
        const data = await res.json();
        if (data.conversations && data.conversations.length > 0) {
          setConversations(data.conversations);
          if (autoSelect && !isNewProblemRef.current) {
            selectConversation(data.conversations[0].id);
          }
        } else {
          setConversations([]);
        }
      }
    } catch (err) {
      console.error("Failed to load conversations", err);
    }
  };

  const selectConversation = async (id: string) => {
    isNewProblemRef.current = false;
    setActiveConversationId(id);
    setFetchingConversation(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`/api/ai/conversations/${id}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Failed to fetch conversation details", err);
    } finally {
      setFetchingConversation(false);
    }
  };

  const handleStartNewConversation = () => {
    isNewProblemRef.current = true;
    setActiveConversationId(null);
    setMessages([]);
    setPrompt("");
    setErrorMessage(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleDeleteConversation = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch(`/api/ai/conversations/${id}`, { method: "DELETE" });
      if (res.ok) {
        const nextList = conversations.filter((c) => c.id !== id);
        setConversations(nextList);
        if (activeConversationId === id) {
          if (nextList.length > 0) {
            selectConversation(nextList[0].id);
          } else {
            handleStartNewConversation();
          }
        }
      }
    } catch (err) {
      console.error("Failed to delete conversation", err);
    }
  };

  const handleSubmit = async (overridePrompt?: string, overrideHintLevel?: AIHintLevel) => {
    const textToSubmit = overridePrompt || prompt;
    const hintToUse = overrideHintLevel || selectedHintLevel;

    if (!textToSubmit.trim() || loading) return;

    const optimisticUserMsg: Message = {
      id: `temp-usr-${Date.now()}`,
      role: "USER",
      content: textToSubmit,
      hintLevel: hintToUse,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, optimisticUserMsg]);
    setPrompt("");
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId: activeConversationId || undefined,
          prompt: textToSubmit,
          hintLevel: hintToUse,
          curriculum: selectedCurriculum,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== optimisticUserMsg.id));
        if (res.status === 429) {
          setErrorMessage(data.error || "Daily query quota reached.");
        } else {
          setErrorMessage(data.error || "Failed to process query.");
        }
        setLoading(false);
        return;
      }

      if (data.quota) {
        setQuota((prev) => ({
          ...prev,
          remaining: data.quota.remaining,
          maxQuota: data.quota.maxQuota,
        }));
      }

      if (data.moderated) {
        // Moderated pedagogical redirect
        const modMessage: Message = {
          id: `mod-${Date.now()}`,
          role: "ASSISTANT",
          content: data.content,
          hintLevel: "HINT_1",
          createdAt: new Date().toISOString(),
        };
        setMessages((prev) => [
          ...prev.filter((m) => m.id !== optimisticUserMsg.id),
          optimisticUserMsg,
          modMessage,
        ]);
        setLoading(false);
        return;
      }

      if (!activeConversationId && data.conversationId) {
        setActiveConversationId(data.conversationId);
      }
      await loadConversations(false);

      if (data.userMessage && data.aiMessage) {
        setMessages((prev) => [
          ...prev.filter((m) => m.id !== optimisticUserMsg.id),
          data.userMessage,
          data.aiMessage,
        ]);
      }
    } catch (err) {
      console.error("AI chat error", err);
      setMessages((prev) => prev.filter((m) => m.id !== optimisticUserMsg.id));
      setErrorMessage("Network error connecting to Socratic AI server.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvanceHint = (currentLevel: AIHintLevel, lastUserQuery?: string) => {
    let nextLevel: AIHintLevel = "HINT_1";
    if (currentLevel === "HINT_1") nextLevel = "HINT_2";
    else if (currentLevel === "HINT_2") nextLevel = "HINT_3";
    else if (currentLevel === "HINT_3") nextLevel = "FULL_SOLUTION";
    else nextLevel = "FULL_SOLUTION";

    // Find the latest user message
    const lastUserMsg = [...messages].reverse().find((m) => m.role === "USER");
    const query = lastUserQuery || lastUserMsg?.content || "Explain the next step of the problem";

    setSelectedHintLevel(nextLevel);
    handleSubmit(query, nextLevel);
  };

  const handleFeedback = async (
    messageId: string,
    rating: "HELPFUL" | "NOT_HELPFUL" | "REPORT_ERROR"
  ) => {
    try {
      const res = await fetch("/api/ai/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId, rating }),
      });
      if (res.ok) {
        setFeedbackGiven((prev) => ({ ...prev, [messageId]: rating }));
      }
    } catch (err) {
      console.error("Feedback error", err);
    }
  };

  const handleEscalateToTutor = async (msg: Message) => {
    if (!activeConversationId) return;
    setEscalatingMessageId(msg.id);
    try {
      const lastUserMsg = [...messages].reverse().find((m) => m.role === "USER");
      const res = await fetch("/api/ai/escalate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId: activeConversationId,
          messageId: msg.id,
          tutorSlug: "dr-tayo-okafor",
          problemSnippet: lastUserMsg?.content || "Mathematics equation clarification",
          studentAttempt: msg.content.slice(0, 200),
          suggestedTopic: "Quadratic Equation Socratic Review",
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setEscalationSuccess({
          tutorName: data.tutorName,
          bookingUrl: data.bookingUrl,
        });
        // Update local message escalated flag
        setMessages((prev) =>
          prev.map((m) => (m.id === msg.id ? { ...m, isEscalated: true } : m))
        );
      }
    } catch (err) {
      console.error("Escalation error", err);
    } finally {
      setEscalatingMessageId(null);
    }
  };

  const insertSymbol = (sym: string) => {
    setPrompt((prev) => prev + sym);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-slate-200 bg-white shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[720px]">
      {/* Sidebar: Conversation Thread History & Quota Counter */}
      <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-neutral-slate-200 bg-neutral-slate-50/70 p-4 flex flex-col justify-between shrink-0">
        <div className="space-y-4">
          {/* New Thread CTA */}
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="ai"
              size="sm"
              onClick={handleStartNewConversation}
              className="w-full justify-center text-xs font-semibold shadow-xs"
              data-testid="new-conversation-btn"
            >
              <PlusCircle className="h-4 w-4 mr-1.5" />
              New Problem
            </Button>
          </div>

          {/* Curriculum Selection */}
          <div className="space-y-1.5">
            <label
              htmlFor="curriculum-select"
              className="text-[11px] font-bold text-neutral-slate-600 uppercase tracking-wider block"
            >
              Curriculum Grounding
            </label>
            <select
              id="curriculum-select"
              value={selectedCurriculum}
              onChange={(e) => setSelectedCurriculum(e.target.value)}
              className="w-full text-xs rounded-lg border border-neutral-slate-200 bg-white px-2.5 py-1.5 text-neutral-slate-900 focus:outline-none focus:ring-2 focus:ring-service-ai-600"
              data-testid="curriculum-selector"
            >
              <option value="WAEC_SSCE">WAEC SSCE (Senior Secondary)</option>
              <option value="JAMB_UTME">JAMB UTME (Matriculation)</option>
              <option value="CAMBRIDGE_IGCSE">Cambridge IGCSE</option>
              <option value="BECE">BECE (Junior Secondary)</option>
              <option value="GENERAL">General Mathematics</option>
            </select>
          </div>

          {/* Conversation List */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-neutral-slate-600 uppercase tracking-wider block">
              Recent Threads ({conversations.length})
            </span>
            <div
              className="max-h-64 md:max-h-96 overflow-y-auto space-y-1 pr-1"
              data-testid="conversation-list"
            >
              {conversations.length === 0 ? (
                <div className="text-center py-6 px-2 text-xs text-neutral-slate-600">
                  <BookOpen className="h-6 w-6 text-neutral-slate-300 mx-auto mb-1" />
                  No questions yet. Ask a question or pick a sample problem!
                </div>
              ) : (
                conversations.map((conv) => {
                  const isActive = conv.id === activeConversationId;
                  return (
                    <div
                      key={conv.id}
                      onClick={() => selectConversation(conv.id)}
                      className={cn(
                        "group relative flex items-center justify-between rounded-lg p-2.5 text-left text-xs transition-all cursor-pointer",
                        isActive
                          ? "bg-service-ai-600/10 text-service-ai-700 font-semibold border border-service-ai-600/30"
                          : "hover:bg-neutral-slate-100 text-neutral-slate-700 border border-transparent"
                      )}
                      data-testid={`conv-item-${conv.id}`}
                    >
                      <div className="min-w-0 flex-1 pr-2">
                        <p className="truncate font-medium text-xs">{conv.title}</p>
                        <div className="flex items-center gap-1.5 text-[10px] text-neutral-slate-600 mt-0.5">
                          <span className="px-1 py-0.2 rounded bg-neutral-slate-200/70 text-neutral-slate-700 font-mono">
                            {conv.curriculum.replace("_", " ")}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleDeleteConversation(conv.id, e)}
                        className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 p-1 text-neutral-slate-600 hover:text-status-red-600 rounded transition-opacity"
                        title="Delete Thread"
                        aria-label="Delete Thread"
                        data-testid="delete-conversation-btn"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Daily Quota Counter Card (AI-05) */}
        <div
          className="mt-4 pt-4 border-t border-neutral-slate-200 bg-white p-3 rounded-xl border"
          data-testid="quota-counter"
        >
          <div className="flex items-center justify-between text-xs font-semibold text-neutral-slate-900 mb-1.5">
            <span className="flex items-center gap-1 text-service-ai-700">
              <Sparkles className="h-3.5 w-3.5 text-service-ai-600" />
              Daily Query Quota
            </span>
            <span className="font-mono text-xs">
              {quota.remaining} / {quota.maxQuota}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-neutral-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                quota.remaining > 3
                  ? "bg-service-ai-600"
                  : quota.remaining > 0
                  ? "bg-status-amber-500"
                  : "bg-status-red-600"
              )}
              style={{
                width: `${Math.max(5, (quota.remaining / quota.maxQuota) * 100)}%`,
              }}
            />
          </div>

          <p className="text-[10px] text-neutral-slate-600 mt-1.5 leading-tight">
            {quota.remaining > 0
              ? "Free tier: 10 queries/day. Failed queries never deduct your balance."
              : "Daily quota exhausted. Resets midnight WAT or upgrade to Pro."}
          </p>
        </div>
      </aside>

      {/* Main Chat Workspace */}
      <section className="flex-1 flex flex-col justify-between overflow-hidden bg-white">
        {/* Workspace Header */}
        <header className="px-6 py-4 border-b border-neutral-slate-200 flex flex-wrap items-center justify-between gap-3 bg-neutral-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-service-ai-600/10 text-service-ai-600 flex items-center justify-center shrink-0">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold font-heading text-neutral-slate-900 flex items-center gap-2">
                <span>Socratic Mathematics Workspace</span>
                <span className="rounded bg-service-ai-600/10 px-2 py-0.5 text-[10px] font-bold text-service-ai-600 uppercase tracking-wider">
                  Live Engine
                </span>
              </h2>
              <p className="text-[11px] text-neutral-slate-600">
                Hint-first pedagogy &amp; programmatic equation verification
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge
              variant="neutral"
              className="text-[10px] py-1 border-status-green-600/40 text-status-green-900 bg-status-green-100 flex items-center gap-1 font-semibold"
            >
              <CheckCircle2 className="h-3 w-3 text-status-green-700" />
              Formula Verifier Active
            </Badge>

            <Button
              variant={showDrawingBoard ? "ai" : "outline"}
              size="sm"
              onClick={() => setShowDrawingBoard(!showDrawingBoard)}
              className="text-xs h-7 gap-1 border-service-ai-600 text-service-ai-700 hover:bg-purple-50"
              title="Open Mathematical Diagram & Geometry Board"
            >
              <Spline className="h-3 w-3" />
              {showDrawingBoard ? "Hide Diagram Board" : "Draw Diagram"}
            </Button>

            <Link href="/tutors/dr-tayo-okafor">
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-7 gap-1 border-service-tutor-600 text-service-tutor-700 hover:bg-service-tutor-50"
              >
                <GraduationCap className="h-3 w-3" />
                Live Tutor
              </Button>
            </Link>
          </div>
        </header>

        {/* Interactive Diagram Board Panel */}
        {showDrawingBoard && (
          <div className="mx-4 sm:mx-6 mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <MathDrawingCanvas onClose={() => setShowDrawingBoard(false)} />
          </div>
        )}

        {/* Escalation Success Banner */}
        {escalationSuccess && (
          <div
            className="mx-6 mt-4 p-3 rounded-xl bg-status-green-600/10 border border-status-green-600/30 flex items-center justify-between text-xs text-status-green-800"
            data-testid="escalation-success-banner"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0" />
              <span>
                Successfully escalated to <strong>{escalationSuccess.tutorName}</strong>! Your
                problem and hint progress have been attached to your booking.
              </span>
            </div>
            <Link href={escalationSuccess.bookingUrl}>
              <Button size="sm" variant="tutor" className="text-xs h-7 py-1 px-3">
                Complete Booking <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div
            className="mx-6 mt-4 p-3 rounded-xl bg-status-red-50 border border-status-red-200 text-xs text-status-red-700 flex items-center justify-between"
            data-testid="ai-error-banner"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-status-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-status-red-800 font-bold hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Messages Stream */}
        <div
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-h-[500px]"
          data-testid="messages-stream"
        >
          {fetchingConversation ? (
            <div className="flex items-center justify-center py-16 text-neutral-slate-600 text-xs">
              <RefreshCw className="h-5 w-5 animate-spin mr-2 text-service-ai-600" />
              Loading mathematical discussion...
            </div>
          ) : messages.length === 0 ? (
            /* Empty state with Nigerian curriculum prompts */
            <div className="text-center py-10 max-w-xl mx-auto space-y-5">
              <div className="h-12 w-12 rounded-2xl bg-purple-100 text-service-ai-600 mx-auto flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                  Welcome to Trainbow Socratic AI
                </h3>
                <p className="text-xs text-neutral-slate-600 leading-relaxed">
                  Enter any Mathematics equation or question from your Nigerian syllabus (WAEC,
                  JAMB, IGCSE). We guide you through step-by-step hints and verify all calculations.
                </p>
              </div>

              <div className="pt-2 text-left space-y-2">
                <span className="text-[11px] font-bold text-neutral-slate-600 uppercase tracking-wider block text-center">
                  Try a curriculum sample question:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SAMPLE_QUESTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedCurriculum(item.curriculum);
                        setPrompt(item.query);
                        handleSubmit(item.query, "HINT_1");
                      }}
                      className="p-3 rounded-lg border border-neutral-slate-200 bg-neutral-slate-50 hover:bg-purple-50/50 hover:border-service-ai-600/40 text-left transition-all group"
                      data-testid={`sample-prompt-${idx}`}
                    >
                      <span className="text-[10px] font-bold text-service-ai-600 block mb-0.5">
                        {item.topic}
                      </span>
                      <p className="text-xs text-neutral-slate-800 line-clamp-2 group-hover:text-service-ai-700">
                        {item.query}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Render Conversation Messages */
            messages.map((msg) => {
              const isUser = msg.role === "USER";

              if (isUser) {
                return (
                  <div
                    key={msg.id}
                    className="flex items-start gap-3 justify-end"
                    data-testid={`message-user-${msg.id}`}
                  >
                    <div className="max-w-xl rounded-2xl rounded-tr-xs bg-brand-blue-700 text-white p-4 text-xs space-y-1 shadow-sm">
                      <span className="text-[10px] font-bold text-blue-200 block uppercase">
                        Student Inquiry
                      </span>
                      <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">
                        {msg.content}
                      </p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-brand-navy-900 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-1">
                      S
                    </div>
                  </div>
                );
              }

              /* AI Message Turn */
              const hintLabels: Record<AIHintLevel, { label: string; color: string }> = {
                HINT_1: { label: "Hint 1: Conceptual Clue", color: "bg-purple-100 text-purple-800" },
                HINT_2: { label: "Hint 2: Formula & Identity", color: "bg-blue-100 text-blue-800" },
                HINT_3: { label: "Hint 3: Step Breakdown", color: "bg-amber-100 text-amber-800" },
                FULL_SOLUTION: {
                  label: "Full Solution: Complete Worked Problem",
                  color: "bg-status-green-100 text-status-green-800",
                },
              };

              const hintMeta = hintLabels[msg.hintLevel] || hintLabels.HINT_1;
              const feedback = feedbackGiven[msg.id];

              return (
                <div
                  key={msg.id}
                  className="flex items-start gap-3"
                  data-testid={`message-ai-${msg.id}`}
                >
                  <div className="h-8 w-8 rounded-full bg-service-ai-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-1 shadow-xs">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div className="flex-1 max-w-2xl space-y-3">
                    {/* Message Box */}
                    <div className="rounded-2xl rounded-tl-xs border border-service-ai-600/30 bg-white p-5 text-xs text-neutral-slate-900 space-y-4 shadow-sm">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "px-2.5 py-0.5 rounded-full text-[10px] font-bold",
                              hintMeta.color
                            )}
                            data-testid="hint-level-badge"
                          >
                            {hintMeta.label}
                          </span>
                          <span
                            className="text-[10px] font-semibold text-service-ai-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200"
                            data-testid="ai-generated-badge"
                          >
                            AI-Generated Guidance
                          </span>
                        </div>

                        {msg.isEscalated && (
                          <span className="text-[10px] font-bold text-service-tutor-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                            Escalated to Tutor
                          </span>
                        )}
                      </div>

                      {/* Content Body with Rich Mathematical & Diagram Rendering */}
                      <div className="text-neutral-slate-800 leading-relaxed font-sans">
                        <FormattedMathContent
                          content={msg.content}
                          verification={msg.verification}
                        />
                      </div>

                      {/* Programmatic Verification Badge (AI-03) */}
                      {msg.verification && (
                        <div
                          className="rounded-xl border border-status-green-600/30 bg-status-green-600/5 p-3.5 space-y-1.5"
                          data-testid="math-verification-card"
                        >
                          <div className="flex items-center gap-1.5 text-status-green-700 font-bold text-xs">
                            <CheckCircle2 className="h-4 w-4 text-status-green-600 shrink-0" />
                            <span>Server-Side Programmatic Verification Passed</span>
                          </div>
                          {msg.verification.equation && (
                            <p className="text-[11px] font-mono text-neutral-slate-700">
                              <strong>Equation:</strong> {msg.verification.equation}
                            </p>
                          )}
                          {msg.verification.stepCheck && (
                            <p className="text-[11px] font-mono text-neutral-slate-700">
                              <strong>Check:</strong> {msg.verification.stepCheck}
                            </p>
                          )}
                          {msg.verification.roots && msg.verification.roots.length > 0 && (
                            <p className="text-[11px] font-mono text-status-green-800 font-semibold">
                              <strong>Computed Roots:</strong> x ={" "}
                              {msg.verification.roots.join(", ")}
                            </p>
                          )}
                          {msg.verification.notes && (
                            <p className="text-[10px] text-neutral-slate-600 italic">
                              {msg.verification.notes}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Socratic Hint Advancement CTA (AI-02) */}
                      {msg.hintLevel !== "FULL_SOLUTION" && (
                        <div
                          className="pt-2 border-t border-neutral-slate-100 flex flex-wrap items-center justify-between gap-2"
                          data-testid="hint-advancement-controls"
                        >
                          <div className="text-[11px] text-neutral-slate-600 flex items-center gap-1">
                            <Lightbulb className="h-3.5 w-3.5 text-service-ai-600" />
                            <span>Try solving using this clue, or request the next level:</span>
                          </div>

                          <div className="flex items-center gap-2">
                            {msg.hintLevel === "HINT_1" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleAdvanceHint("HINT_1")}
                                className="text-xs h-7 px-2.5 font-semibold border-service-ai-600 text-service-ai-700 hover:bg-purple-50"
                                data-testid="advance-hint-2-btn"
                              >
                                Advance to Hint 2 (Formula) <ChevronRight className="h-3 w-3 ml-1" />
                              </Button>
                            )}

                            {msg.hintLevel === "HINT_2" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleAdvanceHint("HINT_2")}
                                className="text-xs h-7 px-2.5 font-semibold border-service-ai-600 text-service-ai-700 hover:bg-purple-50"
                                data-testid="advance-hint-3-btn"
                              >
                                Advance to Hint 3 (Steps) <ChevronRight className="h-3 w-3 ml-1" />
                              </Button>
                            )}

                            <Button
                              size="sm"
                              variant="ai"
                              onClick={() => handleAdvanceHint("HINT_3")}
                              className="text-xs h-7 px-2.5 font-semibold"
                              data-testid="reveal-solution-btn"
                            >
                              Reveal Full Solution
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Turn Feedback Widget & 1-Tap Tutor Escalation (AI-09, AI-10) */}
                      <div className="pt-2 border-t border-neutral-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                        {/* Turn Feedback (AI-09) */}
                        <div
                          className="flex items-center gap-1.5"
                          data-testid="turn-feedback-widget"
                        >
                          <span className="text-[10px] text-neutral-slate-600 mr-1">
                            Helpful?
                          </span>
                          <button
                            type="button"
                            onClick={() => handleFeedback(msg.id, "HELPFUL")}
                            className={cn(
                              "p-1 rounded hover:bg-neutral-slate-100 transition-colors",
                              feedback === "HELPFUL"
                                ? "text-status-green-600 font-bold"
                                : "text-neutral-slate-600"
                            )}
                            title="Helpful explanation"
                            data-testid="feedback-helpful"
                          >
                            <ThumbsUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFeedback(msg.id, "NOT_HELPFUL")}
                            className={cn(
                              "p-1 rounded hover:bg-neutral-slate-100 transition-colors",
                              feedback === "NOT_HELPFUL"
                                ? "text-status-amber-600 font-bold"
                                : "text-neutral-slate-600"
                            )}
                            title="Not helpful"
                            data-testid="feedback-unhelpful"
                          >
                            <ThumbsDown className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFeedback(msg.id, "REPORT_ERROR")}
                            className={cn(
                              "p-1 rounded hover:bg-neutral-slate-100 transition-colors",
                              feedback === "REPORT_ERROR"
                                ? "text-status-red-600 font-bold"
                                : "text-neutral-slate-600"
                            )}
                            title="Report error"
                            data-testid="feedback-report"
                          >
                            <Flag className="h-3.5 w-3.5" />
                          </button>
                          {feedback && (
                            <span className="text-[10px] text-status-green-600 font-medium ml-1">
                              Recorded!
                            </span>
                          )}
                        </div>

                        {/* 1-Tap Human Tutor Escalation (AI-10) */}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEscalateToTutor(msg)}
                          disabled={escalatingMessageId === msg.id}
                          className="text-xs h-7 px-2 text-service-tutor-700 hover:bg-teal-50 hover:text-service-tutor-800 font-medium"
                          data-testid="escalate-tutor-btn"
                        >
                          <GraduationCap className="h-3.5 w-3.5 mr-1 text-service-tutor-600" />
                          {escalatingMessageId === msg.id
                            ? "Escalating..."
                            : "Escalate to Human Tutor"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Loading Indicator */}
          {loading && (
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-service-ai-600 text-white font-bold flex items-center justify-center text-xs shrink-0 animate-pulse">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="rounded-2xl rounded-tl-xs border border-purple-200 bg-purple-50/50 p-4 text-xs text-service-ai-700 flex items-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin text-service-ai-600" />
                <span>Applying Socratic pedagogical reasoning &amp; verifying formula...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Question Form & Quick Math Shortcuts */}
        <div className="p-4 sm:p-5 border-t border-neutral-slate-200 bg-neutral-slate-50/70 space-y-3">
          {/* Math Symbols Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-[10px] font-bold text-neutral-slate-600 uppercase tracking-wider shrink-0 mr-1">
              Math Quick Insert:
            </span>
            {MATH_SYMBOLS.map((sym) => (
              <button
                key={sym}
                type="button"
                onClick={() => insertSymbol(sym)}
                className="px-2 py-0.5 rounded bg-white border border-neutral-slate-200 text-neutral-slate-700 font-mono text-xs hover:border-service-ai-600 hover:text-service-ai-700 transition-colors shadow-2xs"
              >
                {sym}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder="Type your mathematics equation (e.g., 2x² - 5x + 3 = 0, find roots using factorisation)..."
                rows={2}
                disabled={loading || quota.remaining === 0}
                className="flex-1 rounded-xl border border-neutral-slate-200 bg-white p-3 text-xs sm:text-sm text-neutral-slate-900 placeholder:text-neutral-slate-600 focus:outline-none focus:ring-2 focus:ring-service-ai-600 focus:border-transparent resize-none shadow-2xs"
                data-testid="ai-prompt-input"
              />

              <Button
                variant="ai"
                onClick={() => handleSubmit()}
                disabled={loading || !prompt.trim() || quota.remaining === 0}
                className="h-14 px-4 font-semibold shadow-sm shrink-0"
                data-testid="ai-submit-btn"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send mathematical question</span>
              </Button>
            </div>

            {/* Hint Mode Selection Row */}
            <div className="flex flex-wrap items-center justify-between text-xs text-neutral-slate-600 gap-2 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-neutral-slate-700">
                  Pedagogical Mode:
                </span>
                <div className="inline-flex rounded-lg border border-neutral-slate-200 bg-white p-0.5">
                  <button
                    type="button"
                    onClick={() => setSelectedHintLevel("HINT_1")}
                    className={cn(
                      "px-2 py-1 rounded text-[11px] font-medium transition-colors",
                      selectedHintLevel === "HINT_1"
                        ? "bg-service-ai-600 text-white font-semibold"
                        : "text-neutral-slate-600 hover:text-neutral-slate-900"
                    )}
                  >
                    Hint-First (Socratic)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedHintLevel("FULL_SOLUTION")}
                    className={cn(
                      "px-2 py-1 rounded text-[11px] font-medium transition-colors",
                      selectedHintLevel === "FULL_SOLUTION"
                        ? "bg-service-ai-600 text-white font-semibold"
                        : "text-neutral-slate-600 hover:text-neutral-slate-900"
                    )}
                  >
                    Direct Full Solution
                  </button>
                </div>
              </div>

              <span className="text-[11px] text-neutral-slate-600">
                Press <strong>Enter</strong> to send • <strong>Shift+Enter</strong> for newline
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
