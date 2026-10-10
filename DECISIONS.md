# Architecture Decision Records (ADR)

## ADR-001: Modular Monolith with Next.js App Router
- **Status:** Accepted
- **Context:** Trainbow HUB requires tight coordination between courses, booking, payments, and AI assistance, while keeping operational complexity low for Nigerian deployment.
- **Decision:** Build a single unified modular monolith using Next.js 14+ (App Router), TypeScript, and PostgreSQL. Avoid premature microservices.
- **Consequences:** Simplified deployment, zero distributed transaction overhead, straightforward atomic transactions across bookings and ledger entries.

## ADR-002: Provider Adapters with Sandbox Isolation
- **Status:** Accepted
- **Context:** Payment providers (Paystack, Flutterwave), AI engines (Gemini, Claude, OpenAI), Video providers (Daily.co, Agora), and Messaging providers (Termii, Resend) are subject to changing commercial terms and regulatory requirements.
- **Decision:** Decouple all external services behind strict TypeScript interfaces (`PaymentProvider`, `AIProvider`, `VideoProvider`, `MessagingProvider`) with complete mock/sandbox implementations.
- **Consequences:** Test suites can run entirely offline; switching production providers requires only swapping the adapter implementation with zero changes to business domain logic.

## ADR-003: Double-Booking Prevention via DB Exclusion Constraints & Slot Holds
- **Status:** Accepted
- **Context:** In high-demand tutoring windows, concurrent requests could lead to race conditions and double-booked sessions.
- **Decision:** Combine 10-minute transactional `SlotHold` states with a PostgreSQL GIST exclusion constraint (`EXCLUDE USING gist (tutor_id WITH =, time_range WITH &&) WHERE (status = 'Confirmed')`).
- **Consequences:** Double booking is mathematically prevented at the database engine level, rendering race conditions impossible.

## ADR-004: Append-Only Financial Ledger & Strict Minor Integer Accounting
- **Status:** Accepted
- **Context:** In financial transactions and tutor earnings reconciliation, float rounding errors and mutable balance records risk severe discrepancies.
- **Decision:** Store all monetary figures in integer minor units (Nigerian Kobo for NGN). Maintain an immutable, append-only `TutorLedgerEntry` table where current balances are derived dynamically from recorded events.
- **Consequences:** Complete auditability, error-free accounting, and straightforward reconciliation against gateway payout reports.

## ADR-005: Server-Only AI Gateway with Programmatic Math Verification
- **Status:** Accepted
- **Context:** Directly exposing AI endpoints to client applications causes prompt leakage, quota abuse, and hallucinations in quantitative subjects like Mathematics.
- **Decision:** Route all AI interactions through a server-side AI Gateway enforcing student quotas, input/output moderation, Socratic hint-first pedagogical prompts, and programmatic formula evaluation.
- **Consequences:** Safe, age-appropriate learning assistance with zero client API key exposure and verifiable mathematical accuracy.
