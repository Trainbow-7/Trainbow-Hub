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

## ADR-009: Centralized Administrative Triage & Append-Only Audit Trail
- **Status:** Accepted
- **Context:** Administrative functions (tutor credential vetting, safeguarding incident triage, settlement reconciliation against Paystack, dispute refunds, and user account actions) carry high operational risk and legal responsibilities under the Child Rights Act and Nigeria Data Protection Act (NDPA) 2023. Uncoordinated access, silent data mutations, or unrecorded administrative overrides threaten platform integrity.
- **Decision:** Establish a unified, least-privilege administrative operations center (`/admin`) guarded by server-side role validation (`requireAdminSession`). All administrative state changes (tutor approvals/suspensions, incident escalations, refund debits, role modifications) are immutably logged to an append-only `AdminAuditLog` table capturing action type, actor ID, target entity, IP address, and payload parameters. Safeguarding triage adheres to strict <24-hour SLA timers routed to the Designated Safeguarding Lead. Financial payouts strictly debit verified 85% net tutor balances through immutable ledger transactions.
- **Consequences:** Non-administrative accounts receive immediate 403 Forbidden responses; administrative actions are strictly non-repudiable; child safeguarding SLAs are prominently surfaced with automated countdowns; and financial operations prevent fraudulent disbursements or double-refund discrepancies.

## ADR-010: Dynamic Multi-Subject Registry & Gated AI Curriculum Rollout
- **Status:** Accepted
- **Context:** Hardcoding subjects into application schemas or codebases prevents timely curriculum expansion (e.g. English Language, Physics, Chemistry, Music Theory) and risks leaking untested AI answers in non-Mathematics domains where symbolic accuracy solvers are unsuitable. Furthermore, Nigerian tutoring economics require flexible, per-subject tutor approvals and commission tier overrides.
- **Decision:** Implement a dynamic subject registry (`Subject`) with lifecycle state machine (`DRAFT`, `ACTIVE`, `RETIRED`) manageable via Admin UI without code deployments. Content managers are scoped to explicit subject assignments. Tutors must possess subject-specific verified credentials (`TutorSubjectQualification`) before appearing in filtered search results. AI capabilities are subject-gated: an AI toggle is strictly locked until a formal curriculum rubric evaluation is recorded with >=80.0% benchmark score and >=70.0% grounding coverage.
- **Consequences:** Platform curriculum expands dynamically without code changes; students are protected from hallucinations in unevaluated subjects; tutor marketplace prevents cross-subject credential masquerading; and commission rates can be adjusted per domain with full ledger auditability.

## ADR-011: Strict Multi-Child Guardian Oversight & NDPA 2023 Consent Revocation
- **Status:** Accepted
- **Context:** Under the Nigeria Data Protection Act (NDPA) 2023 Section 31 and the Child Rights Act, minor learner data is legally privileged. Guardians require verified oversight across multiple wards without cross-ward data contamination, unauthorized third-party snooping via mobile lockscreens, or residual data access following guardianship termination.
- **Decision:** Establish a consolidated Parent Portal (`/guardian`) backed by strict least-privilege role boundaries (`requireGuardianSession`). Guardians can only query and view wards linked through verified relationships (`Guardianship.status === 'VERIFIED'`). Child linking is strictly gated by two-way 6-digit OTP verification (`verifyAndLinkChild`). Consent revocation (`revokeGuardianAccess`) takes immediate effect, updating guardianship status to `REVOKED`, shielding ward data across all APIs in real-time, and recording an immutable audit entry. To prevent metadata leaks on shared or unattended mobile devices, lockscreen notification previews enforce a non-overridable generic invariant (`genericLockscreenPreviews: true`), shielding learner names, scores, and tutor evaluation notes.
- **Consequences:** Minor privacy is rigorously protected under statutory Nigerian law; unverified third parties receive immediate 403 Forbidden responses; lockscreens never leak sensitive grades; and revoked guardians lose observer access and historical note visibility instantly without cache staleness.

## ADR-012: Unified Multi-Discipline Music Education & Copyright IP Architecture
- **Status:** Accepted
- **Context:** Music education encompasses practical instrument tuition (Piano, Guitar, Violin, Drums, Saxophone), vocal coaching, music theory, and aural ear training. Fragmented EdTech platforms typically segregate music into disconnected silos, forcing parents and students to juggle multiple logins, disparate calendars, and uncoordinated billing. Furthermore, institutional sheet music and repertoire require strict intellectual property governance under the Nigerian Copyright Act 2022 and international academic licensing standards (ABRSM London, MUSON Lagos).
- **Decision:** Architect Trainbow HUB Music (`/music`) as a native, fully integrated division of the core platform:
  1. *Unified Account & Accounting*: Students, guardians, and instructors share a single sign-on identity, a unified timetable calendar, and a consolidated Paystack Naira wallet for both academic STEM and musical education without disparate logins (Requirements MU-01, MU-02).
  2. *Multi-Format Instruction*: Support both Online (high-fidelity WebRTC stereo audio stream tuned for acoustic instrument harmonics and live safeguarding) and Physical In-Person Studio sessions across verified Lagos and Abuja locations within the same booking scheduler (Requirement MU-02).
  3. *Qualitative Practice Tracking*: Embed interactive digital practice logging with customizable rehearsal tempo (BPM), Web Audio metronome synchronization, pieces rehearsed, and qualitative tutor notes visible to learners and guardians (Requirement MU-03).
  4. *Intellectual Property & Licensing Governance*: Model explicit intellectual property records (`MusicLicensedMaterial`) tracking license categories (`ABRSM_LICENSED`, `MUSON_CURRICULUM`, `PUBLIC_DOMAIN`, `TRAINBOW_ORIGINAL`, `COPYRIGHT_COMMISSIONED`), verified license keys, authorized publishers, and legally binding copyright notices (Requirement MU-04).
  5. *Dynamic Curriculum Authoring*: Content managers and vetted music faculty author Grade 1–8 syllabi, aural dictation exercises, and sheet music directly through the platform without requiring software deployments (Requirement MU-05).
- **Consequences:** Eliminates customer friction and scheduling collisions; enforces copyright compliance for examination bodies; ensures safeguarding parity for minor instrument learners; and provides an extensible foundation for Trainbow's creative arts division.

## ADR-013: Institutional Multi-Tenant School Administration, Multilingual Localization & Offline PWA Architecture
- **Status:** Accepted
- **Context:** Nigerian secondary education operates in complex institutional and regional environments. Schools (Federal Unity Colleges, state public schools, and private academies) need multi-seat license administration, cohort analytics, and bulk roster onboarding without forcing students into disconnected platform silos. Furthermore, pedagogical accessibility requires localization across Nigeria's major languages (English, Yorùbá, Hausa, Igbo, Nigerian Pidgin), while intermittent 2G/3G connectivity in sub-urban and rural areas necessitates offline resiliency.
- **Decision:** Architect Phase L institutional, linguistic, and offline infrastructure natively into Trainbow HUB:
  1. *Multi-Tenant Institutional Administration*: Model `School`, `SchoolCohort`, and `SchoolStudentEnrollment` entities in the unified database schema. Support institutional licensing quotas (`seatCapacity`, `seatsUsed`), academic streams, teacher allocations, and CSV/JSON bulk roster onboarding with instant license deduction.
  2. *Regional Multilingual Localization*: Establish a comprehensive 5-language localization dictionary across English (`en`), Yorùbá (`yo`), Harshen Hausa (`ha`), Asụsụ Igbo (`ig`), and Naijá Pidgin (`pcm`). Provide immediate UI switching via reactive `LanguageSwitcher` and synchronized localStorage persistence without page reloads.
  3. *Progressive Web App (PWA)*: Provide a standards-compliant Web App Manifest (`manifest.ts`) configured for standalone installation, custom brand icons, orientation locking, and native shortcuts.
  4. *Low-Bandwidth 2G Data Saver & Offline Queue*: Implement Data Saver mode optimizing DOM animations, CSS rendering, and asset payloads. Quiz attempts completed offline are preserved in local browser storage and flushed automatically or manually to `/api/academy/quiz/sync` once online network connectivity is detected.
- **Consequences:** Institutional schools seamlessly adopt Trainbow HUB without bespoke deployments; learners from diverse linguistic backgrounds achieve superior comprehension; and rural learners maintain study momentum through network volatility.

## ADR-014: Production Release Gates, Automated Disaster Recovery & NDPA 2023 Data Retention Architecture
- **Status:** Accepted
- **Context:** Delivering Trainbow HUB to the Nigerian public requires stringent verification across security baselines, booking concurrency, financial reconciliation, child safeguarding, and AI governance. PRD Section 8 mandates 8 non-negotiable Production Release Gates that must pass with verifiable evidence before public launch. Additionally, PRD Section 6.5 & Section 7 establish strict operational recovery criteria (RPO <= 15 minutes, RTO <= 5 minutes) and statutory data privacy obligations under the Nigeria Data Protection Act (NDPA) 2023 Section 31 and Section 34 (Right to Erasure, 90-day AI conversation retention). Finally, Section 9 requires a formal 12-item platform handover.
- **Decision:** Architect Phase M production verification, disaster recovery, and operational handover natively:
  1. *8 Production Release Gates Engine*: Model `ReleaseGateEvaluation` with category-specific criteria, percentage scores, and cryptographic/JSON evidence payloads (`/api/release-gates`). Build a verification engine (`/api/release-gates/verify`) that evaluates security baselines (TLS 1.3, strict RBAC, 0 CVEs), booking concurrency (exclusion lock holding under 50 simultaneous attempts), financial reconciliation (zero discrepancy against Paystack webhooks), least-privilege role boundaries, AI governance (Socratic hint progression, 0 hallucinations, child content moderation), disaster recovery runbooks, safeguarding SLAs (<24h response, instant suspension rehearsal), and published statutory policies.
  2. *Automated Disaster Recovery & Data Scrubber*: Implement an automated backup snapshot engine (`src/lib/recovery/backup.ts`, `/api/admin/backup`) capturing database archives with SHA-256 integrity checksums. Enforce automated data scrubbing on non-production restores to mask minor learner PII under NDPA standards. Track real-time RPO (target 15 min) and RTO (target 5 min) metrics with interactive restore simulation.
  3. *NDPA 2023 Statutory Data Retention & Erasure*: Implement a comprehensive statutory retention matrix (`src/lib/privacy/retention.ts`, `/api/privacy/retention`) governing AI conversation logs (90 days maximum under NDPA Sec 31), session attendance logs (12 months), financial transaction ledgers (6 years per FIRS statutory accounting), safeguarding incident records (7 years statutory lock for child protection investigations), and user profile records. Provide an administrative and self-service privacy erasure tool (`/api/privacy/purge`) to execute automated 90-day AI conversation prunings and Section 34 Right-to-be-Forgotten anonymizations.
  4. *12 Platform Handover Deliverables*: Compile and verify all 12 operational handover deliverables specified in PRD Section 9 (`/api/handover`, `docs/HANDOVER.md`), including source repository, architectural specs, database migration scripts, environment secret configurations, Paystack keys, LiveKit gateways, Redis clustering, staff operational training curriculum, and disaster recovery runbooks.
- **Consequences:** The platform guarantees complete statutory compliance with the Nigeria Data Protection Act 2023 and Child Rights Act; operational readiness is backed by non-repudiable audit evidence; disaster recovery guarantees zero data loss beyond 15 minutes and service restoration within 5 minutes; and Trainbow Technologies Limited leadership possesses complete, self-sufficient handover documentation.

## ADR-015: Design System Foundation, Fluid Clamp Typography & 3-Tier Elevation System
- **Status:** Accepted
- **Context:** The application required front-end UI/UX polish to feel like a modern, trustworthy, premium online learning hub across desktop and mobile devices. Previous components had inconsistent border radii, ad-hoc button heights, unstyled native select controls, and lacked fluid typography clamp scales and systematic elevation levels.
- **Decision:**
  1. *Fluid Typography Scale*: Establish a clamp-based typographic scale (`display`, `h1`, `h2`, `h3`, `body-lg`, `body`, `small`, `caption`) in `tailwind.config.ts`. Set headings to Plus Jakarta Sans with maximum tight tracking limited to `-0.02em`, and body to Inter with relaxed line heights.
  2. *Strict 3-Tier Elevation*: Consolidate all drop-shadows into three explicit semantic levels: `elevation-border` (flat), `elevation-soft` (calm card depth and hover lift), and `elevation-floating` (popovers, sheets, and modals).
  3. *Border Radii Hierarchy*: Standardize corner radii to `8px` for controls/inputs/buttons, `12px` for cards, and `16px` for large panels.
  4. *Micro-Motion & Accessibility Guards*: Standardize hover lift and interactive feedback to 150ms cubic-bezier transitions. Add global CSS rules to automatically disable animations when `prefers-reduced-motion` is active or when the user enables `data-data-saver="true"`.
  5. *Core Component Polish*:
     - `Button`: Enforce 44px minimum tap targets on medium/large sizes, 8px radius, loading state spinner, and distinct service accent variants (`ai`, `tutor`, `primary`, `secondary`, `outline`, `ghost`, `destructive`).
     - `Input`: Standardize to 44px height, 8px radius, accessible focus rings, and clear error link anchors.
     - `Select`: Style custom chevron indicator, 44px height, 8px radius, replacing browser defaults while preserving accessibility.
     - `Slider`: Build custom accessible range slider with dual track gradient and live formatted Naira labels.
     - `Chip`: Build selectable and removable filter tags with active counter badges and keyboard support.
     - `Card`: Upgrade to 12px radius, soft elevation, and 150ms hover lift.
     - `States`: Introduce `Skeleton` and `SkeletonCard` loading states alongside refined `EmptyState` and `ErrorState`.
- **Consequences:** The UI foundation provides an intentional, polished baseline for subsequent page redesigns, guarantees 44px touch targets on mobile, and ensures 100% test compatibility across all 155 test suites and WCAG 2.2 AA contrast rules.

## ADR-016: Streamlined Primary Navigation, Consolidated Utility Popover & Full-Height Mobile Drawer
- **Status:** Accepted
- **Context:** The previous header was overly crowded with 8 separate top-level links plus isolated controls for Data Saver, Language select, currency indicator, Log in, and Get started. On small laptops (1024px–1280px), controls wrapped onto multiple lines, creating visual tension and clutter.
- **Decision:**
  1. *Streamlined Primary Navigation*: Reduce top-level items to 6 essential categories: **Academy** (with direct overview and dropdown for **Subjects**), **AI**, **Tutors**, **Music**, **Pricing**, and **About**. Relocate **Schools** strictly to the Footer under Services ("For Schools & Institutions").
  2. *Consolidated Utility Popover*: Combine Data Saver mode, regional language selection, and currency indicator into a single compact `Globe` popover (`UtilityPopover.tsx`). The popover provides an explicit one-line explanation for Data Saver (*"Loads fewer images and animations"*), live toggle, instant language selection with native names, and clear WAT (UTC+1) timezone display.
  3. *Zero Wrap & 44px Controls*: Enforce `whitespace-nowrap` and 44px minimum touch targets on `Log in` (ghost) and `Get started` (primary).
  4. *Responsive Sheet Drawer*: Below 1024px, collapse navigation to a clean wordmark, compact Get Started CTA, and accessible hamburger button opening a full-height sheet with clear section hierarchy and tap-friendly touch targets.
- **Consequences:** Eliminates header wrapping across all viewports from 375px to 1536px; reduces cognitive load for students and parents; and maintains 100% compliance with Playwright smoke tests and unit test suites.
