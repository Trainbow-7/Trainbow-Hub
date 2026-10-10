"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Controls";
import { Badge } from "@/components/ui/Badge";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageSquare } from "lucide-react";

function ContactContent() {
  const { addToast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      addToast({
        type: "success",
        title: "Message Delivered",
        description: "Your inquiry has been assigned ticket reference #TRB-SPT-4091. Our support team will reply within 4 hours.",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="brand">We are here to help</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
            Contact Support & Inquiries
          </h1>
          <p className="text-sm sm:text-base text-neutral-slate-600 leading-relaxed">
            Have questions about student enrollment, guardian consent, tutor vetting, or Paystack billing? Reach out directly to our Lagos-based support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
                Operating Coordinates
              </h2>

              <div className="space-y-4 text-xs text-neutral-slate-700">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-slate-900 block">Email Support</span>
                    <a href="mailto:support@trainbowhub.ng" className="text-brand-blue-600 hover:underline">
                      support@trainbowhub.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-slate-900 block">Phone Assistance</span>
                    <a href="tel:+23480087246269" className="text-brand-blue-600 hover:underline">
                      +234 (0) 800-TRAINBOW
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-slate-900 block">Head Office</span>
                    <p className="text-neutral-slate-600">
                      Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-slate-900 block">Operational Hours</span>
                    <p className="text-neutral-slate-600">
                      Monday – Saturday: 8:00 AM – 7:00 PM (WAT)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-status-green-600/10 text-status-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
                    Thank you! We received your message.
                  </h3>
                  <p className="text-xs text-neutral-slate-600 max-w-sm mx-auto">
                    Ticket #TRB-SPT-4091 has been opened. Our support officers will get back to your email shortly.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-heading font-bold text-lg text-neutral-slate-900 mb-2">
                    Send an Inquiry
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Full Name"
                      placeholder="e.g. Bisi Adeyemi"
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="I am a"
                      options={[
                        { value: "parent", label: "Parent / Guardian" },
                        { value: "student", label: "Student" },
                        { value: "tutor", label: "Prospective / Current Tutor" },
                        { value: "other", label: "Other Inquiry" },
                      ]}
                    />
                    <Input
                      label="Phone (+234)"
                      placeholder="080 1234 5678"
                    />
                  </div>

                  <Textarea
                    label="Message or Inquiry Details"
                    placeholder="Tell us what you need assistance with..."
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full justify-center font-bold"
                    isLoading={isSubmitting}
                  >
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <ToastProvider>
      <ContactContent />
    </ToastProvider>
  );
}
