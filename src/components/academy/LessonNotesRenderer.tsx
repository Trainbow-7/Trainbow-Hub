"use client";

import * as React from "react";
import { InlineMathText } from "@/components/ui/InlineMathText";
// Typographic callout markers per Icon Policy
import { cn } from "@/lib/utils";

interface LessonNotesRendererProps {
  content: string;
  className?: string;
}

type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "divider" }
  | { type: "paragraph"; text: string }
  | { type: "bullet_list"; items: string[] }
  | { type: "numbered_list"; items: string[] }
  | { type: "callout"; text: string };

/**
 * Parses inline markdown:
 * - **bold text**
 * - math expressions via InlineMathText
 */
function renderFormattedInline(text: string): React.ReactNode {
  if (!text) return null;

  // Split by bold (**...**)
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={i} className="font-semibold text-neutral-slate-900">
              <InlineMathText text={boldText} />
            </strong>
          );
        }
        return <InlineMathText key={i} text={part} />;
      })}
    </>
  );
}

/**
 * Parses raw markdown into semantic blocks
 */
function parseMarkdownToBlocks(markdown: string): Block[] {
  if (!markdown) return [];

  const rawLines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let currentList: { type: "bullet" | "numbered"; items: string[] } | null = null;

  function flushList() {
    if (currentList) {
      if (currentList.type === "bullet") {
        blocks.push({ type: "bullet_list", items: currentList.items });
      } else {
        blocks.push({ type: "numbered_list", items: currentList.items });
      }
      currentList = null;
    }
  }

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();

    if (!line) {
      flushList();
      continue;
    }

    // Horizontal rule: --- or ***
    if (/^(\-{3,}|\*{3,})$/.test(line)) {
      flushList();
      blocks.push({ type: "divider" });
      continue;
    }

    // Heading 1: # Title
    if (line.startsWith("# ")) {
      flushList();
      blocks.push({ type: "h1", text: line.replace(/^#\s+/, "") });
      continue;
    }

    // Heading 2: ## Section
    if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", text: line.replace(/^##\s+/, "") });
      continue;
    }

    // Heading 3: ### Subsection
    if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", text: line.replace(/^###\s+/, "") });
      continue;
    }

    // Callout / Quote: > text
    if (line.startsWith("> ")) {
      flushList();
      blocks.push({ type: "callout", text: line.replace(/^>\s*/, "") });
      continue;
    }

    // Bullet list: - item or * item
    if (/^[\-\*]\s+/.test(line)) {
      const itemText = line.replace(/^[\-\*]\s+/, "");
      if (currentList && currentList.type === "bullet") {
        currentList.items.push(itemText);
      } else {
        flushList();
        currentList = { type: "bullet", items: [itemText] };
      }
      continue;
    }

    // Numbered list: 1. item, 2. item
    if (/^\d+\.\s+/.test(line)) {
      const itemText = line.replace(/^\d+\.\s+/, "");
      if (currentList && currentList.type === "numbered") {
        currentList.items.push(itemText);
      } else {
        flushList();
        currentList = { type: "numbered", items: [itemText] };
      }
      continue;
    }

    // Regular paragraph
    flushList();
    blocks.push({ type: "paragraph", text: line });
  }

  flushList();
  return blocks;
}

export function LessonNotesRenderer({ content, className }: LessonNotesRendererProps) {
  const blocks = React.useMemo(() => parseMarkdownToBlocks(content), [content]);

  if (!content || blocks.length === 0) {
    return (
      <div className="text-xs text-neutral-slate-400 italic py-4">
        No notes available for this lesson.
      </div>
    );
  }

  return (
    <div className={cn("lesson-notes-content space-y-4", className)}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h1":
            return (
              <div key={idx} className="pb-3 border-b border-neutral-slate-200 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-700 block mb-1">
                  Lesson Notes & Syllabus Guide
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
                  {renderFormattedInline(block.text)}
                </h2>
              </div>
            );

          case "h2":
            return (
              <div key={idx} className="flex items-center gap-2 pt-4 pb-1 border-b border-neutral-slate-100">
                
                <h3 className="text-base sm:text-lg font-bold font-heading text-neutral-slate-900">
                  {renderFormattedInline(block.text)}
                </h3>
              </div>
            );

          case "h3":
            return (
              <div key={idx} className="pt-3 pb-1">
                <h4 className="text-sm sm:text-base font-bold font-heading text-neutral-slate-900">
                  {renderFormattedInline(block.text)}
                </h4>
              </div>
            );

          case "divider":
            return <hr key={idx} className="my-5 border-neutral-slate-200/80" />;

          case "bullet_list":
            return (
              <ul key={idx} className="space-y-2 my-2.5 pl-1">
                {block.items.map((it, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-slate-700 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-600 shrink-0 mt-2" />
                    <span className="flex-1">{renderFormattedInline(it)}</span>
                  </li>
                ))}
              </ul>
            );

          case "numbered_list":
            return (
              <ol key={idx} className="space-y-2.5 my-3">
                {block.items.map((it, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-neutral-slate-700 leading-relaxed bg-neutral-slate-50/70 p-3 rounded-xl border border-neutral-slate-100 hover:border-brand-blue-200 transition-colors"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue-600 text-white font-bold text-[11px] shrink-0 mt-0.5 shadow-xs">
                      {itemIdx + 1}
                    </span>
                    <span className="flex-1">{renderFormattedInline(it)}</span>
                  </li>
                ))}
              </ol>
            );

          case "callout":
            return (
              <div
                key={idx}
                className="my-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3"
              >
                
                <div className="flex-1 leading-relaxed">{renderFormattedInline(block.text)}</div>
              </div>
            );

          case "paragraph":
            return (
              <p key={idx} className="text-xs sm:text-sm text-neutral-slate-700 leading-relaxed my-2">
                {renderFormattedInline(block.text)}
              </p>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
