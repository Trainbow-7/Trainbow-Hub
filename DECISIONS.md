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

## ADR-006: Dedicated Dev Route `/dev/design-system` with Production 404 Guard
- **Status:** Accepted
- **Context:** The initial prototype placed internal token swatches, smoke test triggers, and API health badges on the public root `/`, diluting brand trust.
- **Decision:** Relocate all developer tooling and component swatches to `/dev/design-system`. In production environments (`process.env.NODE_ENV === 'production'`), this route invokes Next.js `notFound()` to return HTTP 404.
- **Consequences:** Production users encounter a polished, credible education website, while developers retain a living style guide in local and staging environments.

## ADR-007: WCAG 2.2 AA Automated Contrast Guardrails
- **Status:** Accepted
- **Context:** Dark surfaces (Navy 900) and vibrant accent fills (Teal 500, Amber 500) risk low-contrast text that violates accessibility and mobile readability under outdoor sunlight.
- **Decision:** Enforce semantic tokens (`text-on-dark`, `text-on-light`). Establish an invariant forbidding white text on Teal 500 and Amber 500. Embed an automated Vitest contrast calculation suite (`src/test/contrast.test.ts`) that programmatically fails the build if any token pair falls below 4.5:1 for body copy or 3.0:1 for large text.
- **Consequences:** Accessibility regressions are impossible to merge into main; all text passes WCAG 2.2 AA across desktop and mobile devices.

## ADR-008: Ephemeral WebRTC Video Rooms with Time-Bounded Tokens & Multi-Role Safeguarding Isolation
- **Status:** Accepted
- **Context:** Virtual 1-on-1 lessons require resilient video delivery across variable Nigerian networks (MTN, Airtel, Glo), strict minor safeguarding under the Nigeria Data Protection Act (NDPA) 2023, and instant in-session incident reporting.
- **Decision:** Implement an isolated `VideoProvider` adapter interface (`src/lib/adapters/video.ts`) backed by Daily.co sandbox/production WebRTC engine. Room links and tokens are strictly ephemeral and time-bounded to the booked slot duration plus a 15-minute grace window. Recording is strictly disabled by default (`enable_recording: false`). Sessions are revoked immediately upon cancellation or expiration. In-session emergency conduct reports bypass standard support tickets and route directly to a prioritized safeguarding triage queue.
- **Consequences:** Minors cannot be recorded without verified consent; unvetted participants cannot join; network drops are gracefully mitigated with 1-tap 2G/3G low-bandwidth voice mode; and high-severity conduct concerns trigger rapid triage within 24 hours.

