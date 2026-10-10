"use client";

import * as React from "react";
import { SEED_FAQS } from "@/lib/data/seed-data";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export function HomeFAQ() {
  const [openId, setOpenId] = React.useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Accordion className="rounded-xl border border-neutral-slate-200 bg-white p-4 sm:p-6 shadow-xs">
      {SEED_FAQS.slice(0, 8).map((faq) => (
        <AccordionItem
          key={faq.id}
          id={faq.id}
          title={faq.question}
          isOpen={openId === faq.id}
          onToggle={() => toggleItem(faq.id)}
        >
          <p className="text-sm text-neutral-slate-600 leading-relaxed font-sans">
            {faq.answer}
          </p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
