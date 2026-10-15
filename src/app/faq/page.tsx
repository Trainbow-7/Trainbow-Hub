"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEED_FAQS, FAQItem } from "@/lib/data/seed-data";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Search } from "lucide-react";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [openId, setOpenId] = React.useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const categories = ["All", "General", "Tutors & Booking", "Parents & Safety", "AI Assistant", "Payments"];

  const filteredFaqs = SEED_FAQS.filter((faq) => {
    if (selectedCategory !== "All" && faq.category !== selectedCategory) return false;
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      return (
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
      );
    }
    return true;
  });

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="brand">Knowledge Base</Badge>
          <h1 className="text-display font-extrabold font-heading text-neutral-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-body-lg text-neutral-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find immediate answers regarding course enrollments, Socratic AI assistance, tutor vetting checks, guardian consent, and refunds.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions by keyword (e.g. refund, guardian, WAEC, Paystack)..."
            className="w-full pl-10 pr-4 h-11 rounded-lg border border-neutral-slate-300 bg-white text-sm text-neutral-slate-900 placeholder:text-neutral-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent transition-colors shadow-soft"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-colors duration-150 min-h-[36px] ${
                selectedCategory === cat
                  ? "bg-brand-navy-900 text-white shadow-soft"
                  : "bg-white text-neutral-slate-600 border border-neutral-slate-200 hover:border-neutral-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ List */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 shadow-soft">
          {filteredFaqs.length > 0 ? (
            <Accordion>
              {filteredFaqs.map((faq) => (
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
          ) : (
            <div className="text-center py-10 space-y-2">
              <p className="text-sm font-semibold text-neutral-slate-900">No questions matched your search query</p>
              <p className="text-xs text-neutral-slate-500">Try searching for broader terms or select &quot;All&quot; categories.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
