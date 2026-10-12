# Changelog

All notable changes to Trainbow HUB will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### [0.9.0] - 2026-10-12 - Phase I: Multi-Subject Registry, Dynamic Curriculum & AI Subject Governance (SB-01 through SB-09)
#### Added
- **Dynamic Multi-Subject Registry & Lifecycle (SB-01, ADR-010)**:
  - Extensible academic subject registry enabling administrators to register, configure, and publish new academic subjects without code deployments (`/api/subjects`).
  - Subject lifecycle management supporting `DRAFT` (hidden from public catalogue), `ACTIVE` (publicly bookable and searchable), and `RETIRED` states.
  - Public Multi-Subject Exploration portal (`/subjects`) with category filters (STEM, Languages, Sciences, Arts), curriculum level tracks (JSS 1-3, SSS 1-3, WAEC/JAMB, IGCSE), and baseline lesson rates.
- **Dedicated Subject Landing & Curriculum Track Pages (SB-04)**:
  - Responsive, SEO-indexable subject portals (`/subjects/[slug]`) mapping national exam specifications to self-paced Academy courses and qualified tutors.
  - Breadcrumb navigation and real-time curriculum track badges.
- **Pre-Release AI Safety & Rubric Evaluation Rollout Gate (SB-05, SB-06, SB-07)**:
  - Strict statutory release invariant forbidding AI tutoring for any subject until formal curriculum evaluation is recorded (`/api/subjects/[slug]/ai/evaluate`).
  - Rubric benchmark gate requiring >=80.0% evaluation score, >=70.0% syllabus grounding coverage, and safety block test clearance before the activation switch unlocks (`toggleSubjectAI`).
  - Interactive AI banner dynamically switching between a 1-tap "Launch Socratic AI Assistant" launcher and an informative pedagogical quality gate notice (`data-testid="subject-ai-pending-notice"`).
  - Versioned per-subject pedagogical verification methods (`SYMBOLIC_SOLVER` for Math/Physics, `GRAMMAR_CHECKER` for English, `FACTUAL_RETRIEVAL` for Sciences).
- **Multi-Subject Tutor Qualifications & Verification Queue (SB-03)**:
  - Per-subject credential verification engine (`tutor_subject_qualifications`) linking tutors to specific curriculum tracks with evidence URLs (TRCN, university degrees, specialized certifications).
  - Administrative qualification verification queue (`data-testid="tutor-subject-qualifications-table"`) with approve/reject workflows and immutable audit logs.
- **Per-Subject Analytics & Commission Overrides (SB-08, SB-09)**:
  - Administrative reporting endpoint (`/api/subjects/[slug]/analytics`) detailing enrolments, bookings, tutor counts, and AI query volume.
  - Per-subject commission override rate (e.g., 12.5% Chemistry vs standard 15.0%) and base pricing tiers in integer minor units.
- **Comprehensive Quality Gates & Multi-Viewport Accessibility**:
  - PostgreSQL 16 schema migration (`007_phase_i_multi_subject_registry_and_ai_governance.sql`) and Prisma models.
  - 11 Vitest unit tests in `src/test/subject.test.ts` (111 passing total across project).
  - 5 Playwright E2E tests in `e2e/phase-i.spec.ts` covering public catalogue discovery, AI gate notices, admin registry creation, rubric evaluations, and tutor qualifications.
  - Multi-viewport accessibility audit verifying 0 serious or critical WCAG 2.2 AA violations across Desktop (1280px), Tablet (768px), and Mobile (375px) viewports.

### [0.8.0] - 2026-10-12 - Phase H: Administration, Safeguarding Triage & Financial Operations Hub (AD-01 through AD-07, PY-07 through PY-09)
#### Added
- **Unified Operations Hub & Least-Privilege RBAC (AD-01, ADR-009)**:
  - Role-protected administrative command center (`/admin`) enforcing strict server-side RBAC guard (`requireAdminSession`).
  - Returns HTTP 401 Unauthorized for unauthenticated requests and HTTP 403 Forbidden for non-administrative roles (Students, Parents, Tutors).
  - Role-aware navigation link dynamically rendered in `Navbar` (`data-testid="navbar-admin-link"`) for authenticated platform admins.
  - User directory management portal (`data-testid="user-management-table"`) with role reassignments, account suspensions, and NDPA 2023 verification status toggles.
- **Tutor Vetting & Credential Verification Queue (AD-02)**:
  - Dedicated queue interface (`data-testid="tutor-vetting-table"`) displaying pending tutor profiles.
  - Credential inspection modal (`data-testid="tutor-credentials-modal"`) detailing National Identification Number (NIN), Teachers Registration Council of Nigeria (TRCN) certifications, degree credentials, and criminal history screening confirmations.
  - Multi-action approval and rejection/suspension workflow with immediate public directory synchronisation.
- **Safeguarding Incident Triage Queue with SLA Countdown (AD-04, CL-04)**:
  - Incident triage queue (`data-testid="safeguarding-queue"`) prioritizing reports for Designated Safeguarding Lead (Grace Danladi) under the Child Rights Act and NDPA 2023.
  - Real-time SLA countdown timers tracking <24-hour compliance thresholds for urgent and high-severity incidents, displaying visual warnings and pulse indicators upon SLA breaches.
  - Interactive incident triage modal (`data-testid="safeguard-triage-modal"`) supporting status updates (`OPEN`, `INVESTIGATING`, `RESOLVED`, `DISMISSED`) and documented remediation actions.
- **Settlement Reconciliation & Tutor Payout Ledger (PY-07, PY-08)**:
  - Automated daily settlement reconciliation engine (`data-testid="reconciliation-panel"`) auditing processed bookings and escrow balances against Paystack transaction reference statements.
  - Tutor payout disbursement ledger (`data-testid="payouts-table"`) computing net 85% tutor allocations against the platform's 15% commission.
  - Manual disbursement modal (`data-testid="payout-modal"`) enforcing debiting of available balances via append-only ledger entries.
- **Booking Dispute Resolution & Escrow Refunds (AD-03, PY-09)**:
  - Dispute resolution controls allowing platform administrators to issue full or partial escrow refunds back to guardian balances while debiting hold states.
- **AI Token & Cost Governance Analytics (AD-05)**:
  - Administrative usage monitor (`data-testid="ai-usage-panel"`) aggregating total mathematical queries, prompt tokens, completion tokens, and real-time USD/NGN cost approximations.
  - Topic-based query distribution tracking across Quadratic Equations, Geometry, Trigonometry, and Calculus.
- **Operational Alerts Ticker & Immutable Audit Trail (AD-06, AD-07)**:
  - Real-time operational alerts ticker displaying system events (`URGENT_SAFEGUARDING`, `SETTLEMENT_DISCREPANCY`, `TUTOR_VETTING_PENDING`, `AI_QUOTA_SPIKE`) with acknowledge and resolve controls.
  - Append-only immutable administrative audit log table (`data-testid="admin-audit-log"`) recording action types, actor user IDs, target resources, IP addresses, and metadata payloads.
- **Comprehensive Quality Gates & Multi-Viewport Accessibility**:
  - PostgreSQL 16 schema migration (`006_phase_h_admin_operations_and_reconciliation.sql`) and Prisma models.
  - 15 Vitest unit tests in `src/test/admin.test.ts` (100 total passing across 10 test files).
  - 6 Playwright E2E tests in `e2e/phase-h.spec.ts` covering RBAC access control, admin sign-in, vetting queues, SLA countdowns, settlement reconciliation, and AI cost analytics.
  - Multi-viewport accessibility audit verifying 0 serious or critical WCAG 2.2 AA violations across Desktop (1280px), Tablet (768px), and Mobile (375px) viewports.

### [0.7.0] - 2026-10-11 - Phase G: Online Virtual Classroom & Safeguarding Engine (CL-01 through CL-06)
#### Added
- **Ephemeral WebRTC Virtual Classrooms (CL-01, ADR-002, ADR-008)**:
  - Time-bounded virtual classroom sessions dynamically mapped to confirmed bookings (`/classroom/[id]`).
  - Strict Daily.co provider adapter abstraction (`VideoProvider`) with persistent sandbox singleton (`DailySandboxVideoProvider`) and live integration adapter (`DailyLiveVideoProvider`).
  - Ephemeral token lifecycles restricting entry to valid participants within a 15-minute grace window.
  - Live WAT (West Africa Time) timezone synchronized clock display (`data-testid="wat-clock"`).
  - Multi-participant video stage featuring interactive feeds, student PiP view (`data-testid="student-pip-feed"`), and guardian active observer mode (`data-testid="guardian-observer-banner"`).
- **Session Revocation & Link Invalidation (CL-02)**:
  - Immediate meeting link and token invalidation upon booking cancellation, rescheduling, or expiration.
  - HTTP 410 Gone status returned by classroom session API for revoked sessions.
  - Dedicated safeguarding alert banner (`data-testid="session-revoked-banner"`) preventing unauthorized or stale room re-entry.
- **Attendance & Duration Audit Logs (CL-03)**:
  - Automated session joining and departure tracking (`ClassroomAttendance` schema and repository methods).
  - Server-calculated participant duration logging (`durationSeconds`), session state transitions (`SCHEDULED` -> `LIVE` -> `COMPLETED`), and non-repudiation audit trails.
- **Emergency In-Session Conduct & Safeguarding Triage (CL-04)**:
  - 1-tap emergency reporting button prominently displayed during active sessions (`data-testid="report-conduct-btn"`).
  - In-session incident report modal (`data-testid="safeguard-modal"`) supporting severity triage (`URGENT`, `HIGH`, `MEDIUM`, `LOW`) and violation categories.
  - Direct routing to Designated Safeguarding Lead (Grace Danladi) with strict SLA (<24 hours for urgent or high-severity concerns) under NDPA 2023 and Child Rights Act standards.
- **Network Resilience & 1-Tap Low-Bandwidth Mode (CL-05)**:
  - 1-tap 2G/3G audio-only fallback mode (`data-testid="low-bandwidth-toggle"`) pausing heavy video streaming to conserve Nigerian mobile data across MTN, Airtel, and Glo networks.
  - Active low-bandwidth status indicator (`data-testid="low-bandwidth-active-pill"`) and dedicated audio stream panel.
  - Integrated network troubleshooting modal (`data-testid="fallback-modal"`) with direct hotline (`+234 1 800 TRAINBOW`), WhatsApp bridge, and support email.
- **Strict Default Off-Recording Policy (CL-06)**:
  - Invariant enforcement disabling video/audio recording by default (`enable_recording: false`).
  - Prominent visual safeguard badge (`data-testid="recording-disabled-badge"`) confirming child privacy protection under NDPA 2023.
- **Post-Lesson Tutor Review & Star Rating Engine**:
  - Automatic review modal presentation upon lesson completion (`data-testid="review-modal"`).
  - 1-to-5 star rating selector (`data-testid="rating-star-5"`), feedback submission, and database persistence (`TutorReview` schema).
  - Dynamic recalculation of tutor's aggregate rating and completed lesson counter.
- **Interactive Whiteboard & Mathematical Scratchpad**:
  - Real-time mathematical note editor (`data-testid="whiteboard-notes-area"`), session chat, and WAEC/JAMB exam tip tabs.
- **Quality Gates & Test Suites**:
  - PostgreSQL 16 schema migration (`scripts/migrations/005_phase_g_classroom_and_safeguarding.sql`) and Prisma models.
  - 8 Vitest unit tests in `src/test/classroom.test.ts` (85 passing total across project).
  - 10 Playwright E2E tests in `e2e/phase-g.spec.ts` covering Desktop Chromium and Mobile Chrome.
  - Automated accessibility audit (`scripts/audit-phase-g.js`) verifying 0 serious or critical axe-core violations across Desktop (1280px), Tablet (768px), and Mobile (375px) viewports.

### [0.6.0] - 2026-10-11 - Phase F: Socratic AI Mathematics Assistant & Tutor Escalation Engine
#### Added
- **Socratic Pedagogical Assistant Core (AI-01, ADR-005)**:
  - Step-by-step mathematical reasoning engine rejecting raw answer dumping in favor of structured Socratic inquiry.
  - Explicit labelling of all AI outputs as `[AI-Generated Mathematical Guidance — Verified by Trainbow Hub Engine]` (`data-testid="ai-generated-badge"`).
- **Four-Stage Hint Progression Architecture (AI-02)**:
  - Hint Level 1 (`HINT_1`): Conceptual clue, standard equation classification ($ax^2 + bx + c = 0$), and guiding questions without disclosing roots.
  - Hint Level 2 (`HINT_2`): Formula identification and coefficient mapping ($x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$).
  - Hint Level 3 (`HINT_3`): Intermediate calculation steps and discriminant branch evaluation ($\sqrt{\Delta}$).
  - Full Solution (`FULL_SOLUTION`): Complete worked solution, verification by substitution, and WAEC/JAMB exam mark-scheme tips.
  - Interactive hint advancement controls (`data-testid="hint-advancement-controls"`).
- **Programmatic Mathematical Verification Engine (AI-03)**:
  - Server-side symbolic evaluation parsing quadratics, linear equations, discriminants, and arithmetic before client presentation.
  - Real root calculation ($x = \frac{-b \pm \sqrt{\Delta}}{2a}$) and discriminant classification ($\Delta > 0$, $\Delta = 0$, $\Delta < 0$).
  - Programmatic verification badge (`data-testid="math-verification-card"`) displaying computed roots, formulas, and verification notes.
- **Approved Nigerian Curriculum Grounding (AI-04)**:
  - Grounding across WAEC SSCE, JAMB UTME, Cambridge IGCSE, BECE, and General Mathematics.
  - Curriculum selector dropdown (`data-testid="curriculum-selector"`) persisting syllabus alignment across threads.
- **Daily Query Quota & Abuse Controls (AI-05, AI-06, AI-07)**:
  - Per-user daily quota tiers: Free Learner (10 queries/day), Pro Student (100 queries/day), Tutors & Admins (Unlimited).
  - Daily quota counter card with visual progress bar and reset timer (`data-testid="quota-counter"`).
  - Strict 429 quota exhaustion guard with upgrade guidance.
  - Outage detection and zero-quota deduction on failed/aborted requests or moderated queries.
- **Automated Content Moderation & Safeguards (AI-08)**:
  - Automated input filter blocking profanity, abusive terms, and prompt injection attempts.
  - Pedagogical redirects upholding Nigeria Data Protection Act (NDPA) 2023 and Child Rights Act standards.
- **Turn Feedback System (AI-09)**:
  - Granular per-turn feedback widget (`data-testid="turn-feedback-widget"`) with Helpful (👍), Not Helpful (👎), and Report Error (⚠️).
  - Immutable feedback logging via `AIFeedbackRecord` and `POST /api/ai/feedback`.
- **1-Tap Seamless Human Tutor Escalation Engine (AI-10)**:
  - 1-tap button (`data-testid="escalate-tutor-btn"`) allowing struggling learners to seamlessly bridge from AI hints to 1:1 human instruction.
  - Contextual escalation recording student question, hint progress, and suggested topic, pre-populating booking with Lead Tutor Dr. Tayo Okafor.
- **Privacy-Compliant Conversation Management (AI-11, AI-12)**:
  - Per-user isolated thread management (`POST /api/ai/conversations`, `GET /api/ai/conversations/[id]`, `DELETE /api/ai/conversations/[id]`).
  - Thread creation, switching, and deletion with cascading message cleanup.
- **Interactive Socratic Workspace (`/ai`)**:
  - Full-featured, responsive conversational UI featuring quick math symbol insertion, curriculum tabs, optimistic messages, and WCAG 2.2 AA accessibility.
- **Quality Gates & Test Suites**:
  - 21 Vitest unit tests in `src/test/ai.test.ts` (77 passing total across project).
  - 8 Playwright E2E tests in `e2e/phase-f.spec.ts` passing across Desktop Chromium and Mobile Chrome.
  - 0 serious or critical axe-core accessibility violations.

### [0.5.0] - 2026-10-11 - Phase E: 1-on-1 Lesson Booking & Paystack Integration
#### Added
- **Temporary Slot Hold Engine (BK-01)**:
  - 10-minute slot hold reservations during checkout with real-time countdown timer (`data-testid="slot-hold-timer"`).
  - Automatic expiration release freeing inactive slots for other students.
  - Interactive day and time window selection in `TutorBookingFlow` component.
- **Concurrency-Safe Conflict Rejection (BK-02)**:
  - Atomic validation rejecting simultaneous reservation conflicts for the same tutor slot.
  - Rejection of hold attempts against confirmed bookings and existing active holds.
- **Server-Verified Paystack Payment Confirmation (BK-03, PY-01, PY-02)**:
  - Server-side transaction verification via Paystack adapter (`src/lib/adapters/paystack.ts`); browser redirect alone never confirms a booking.
  - Paystack NGN checkout integration supporting debit card, bank transfer, and USSD.
  - Secure HMAC-SHA512 webhook signature verification using timing-safe comparison (`crypto.timingSafeEqual`).
- **Idempotent Webhook Replay Protection (BK-04, PY-03)**:
  - Unique idempotency key enforcement preventing duplicate bookings or redundant ledger entries upon replayed Paystack webhooks.
- **Timezone Invariants & Display Standards (BK-05)**:
  - Dates and timestamps stored in UTC, formatted and displayed in West Africa Time (`Africa/Lagos` / WAT) across student and tutor portals.
- **Reschedule Workflow with Conflict Validation (BK-06)**:
  - In-app rescheduling modal (`data-testid="reschedule-modal"`) enabling learners to choose new session slots.
  - Conflict detection rejecting occupied slots while recording historical audit trail (`rescheduledFromId`).
- **Cancellation & Escrow Refund Audit Trail (BK-07, PY-06)**:
  - Policy-based booking cancellation modal (`data-testid="cancel-booking-modal"`) capturing cancellation reasons.
  - Automated status transition to `CANCELLED` with policy-aligned refund processing and ledger refund debits (`REFUND_DEBIT`).
- **Tutor Financial Ledger & 15% Platform Split (PY-04, PY-05)**:
  - Automated revenue split allocating 85% net earnings to tutors and 15% platform commission to Trainbow HUB under PRD PY-05.
  - Tamper-proof, immutable financial ledger tracking all credits, debits, and escrow settlements (`TutorLedgerEntry`).
- **NDPA 2023 Section 31 Minor Safeguard Enforcement**:
  - Verification gate blocking minor learners (< 18) without verified parental consent from booking paid lessons.
  - Contextual consent redirect to `/guardian/consent?studentId=...` for seamless parental OTP verification.
- **Student Booking Management Hub (`/bookings`)**:
  - Comprehensive dashboard tabbed by Upcoming Sessions, Completed, and Cancelled & Refunds.
  - Direct 1-tap "Join Virtual Classroom" CTA with meeting link.
  - KPI stat cards for Upcoming Confirmed, Completed Lessons, and Escrow Protected rate.
- **Tutor Escrow Ledger & Bookings Portal (`/dashboard/tutor`)**:
  - Live 1-on-1 Student Bookings table with student IDs, WAT schedule, and "Launch Classroom" buttons.
  - Financial metric KPI cards for Gross Booking Volume, Platform Fee (15%), and Net Tutor Earnings (85%).
  - Real-time immutable escrow financial ledger table with reference hashes and credit/debit audit badges.
- **Database & Architecture Integration**:
  - PostgreSQL 16 migration `scripts/migrations/003_phase_e_booking_and_payment_ledger.sql`.
  - Prisma schema models: `SlotHold`, `Booking`, `PaymentTransaction`, `TutorLedgerEntry`.
  - Process-wide shared singleton on `globalThis` in `src/lib/db/index.ts` and `src/lib/adapters/paystack.ts` ensuring deterministic multi-route state sharing in Next.js.
- **Verification & Quality Gates**:
  - Vitest Unit Test Suite: `src/test/booking.test.ts` with 16 comprehensive unit tests covering slot holds, concurrency, NDPA minor safeguard, commission calculation, HMAC signature validation, idempotency, rescheduling, and cancellation. Suite passing 100% (56/56 tests across 7 test files).
  - Playwright E2E Suite: `e2e/phase-e.spec.ts` with 6 end-to-end tests across Chromium desktop and Mobile Chrome viewports.
  - Multi-Viewport Accessibility & Visual Audit: `scripts/audit-phase-e.js` capturing 9 screenshots across 1280px, 768px, and 375px viewports with axe-core verifying 0 serious or critical violations.

### [0.4.0] - 2026-10-11 - Phase D: Academy & Native Learning Engine
#### Added
- **Native Curriculum & Lesson Delivery Engine (LN-01)**:
  - Standardized WAEC/SSCE curriculum delivery with structured modules, lessons, duration tracking, and free preview designations.
  - Interactive Lesson Viewer (`/learn/[slug]/[lessonId]`) featuring simulated HD video player stage with playback speed controls (1x, 1.25x, 1.5x), comprehensive theory and mathematical notes, place value positional notation breakdowns, WAEC Chief Examiner marking invariants, and downloadable resources.
- **Practice Checkpoint Quiz Runner & Mathematical Reasoning (LN-02)**:
  - Multi-question checkpoint quizzes with instant scoring, pass/fail thresholds, and comprehensive step-by-step mathematical reasoning for every question.
  - Interactive quiz runner embedded directly in the lesson workspace with real-time feedback banners and question review states.
- **Cross-Device Learning Progress Persistence (LN-03)**:
  - Real-time lesson completion tracking via `POST /api/academy/courses/[slug]/lessons/[lessonId]/complete`.
  - Automatic course progress calculation (`completedLessonIds.length / totalLessons * 100`) and next-lesson pointer advancement.
  - Dynamic study streak counter with 7-day visual calendar activity indicators and total study minutes accumulation.
- **Network Disconnection Resilience & Draft Recovery (LN-04)**:
  - Automatic `localStorage` backup of in-progress quiz answers on every option selection with localized timestamps.
  - Offline simulation toggle and connection drop detection displaying friendly retry banners without loss of user input.
  - 1-tap retry submission automatically resubmitting locally cached answers once connectivity is restored.
- **Targeted Revision Recommendations Engine (LN-05)**:
  - Automated analysis of incorrect quiz question topic tags to identify learning gaps.
  - Personalized revision focus cards on the Student Learning Dashboard and quiz result banners directing learners to foundational review materials.
- **Tutor Course Authoring & Publishing Workflow (LN-06)**:
  - Dedicated Tutor Authoring Portal (`/dashboard/tutor` and `/authoring`) displaying course inventories, draft and published statuses, pricing, and enrollments.
  - Full course lifecycle management (`DRAFT` -> `IN_REVIEW` -> `PUBLISHED`) with automatic version bumping and audit changelog entries.
  - Interactive Student Live Preview modal enabling educators to experience lessons exactly as enrolled learners do before publishing.
- **Student Learning Dashboard (`/dashboard`)**:
  - Personalized welcome header with active study streak counter.
  - Key Performance Indicators (Enrolled Courses, Lessons Completed, Quizzes Taken, Study Minutes).
  - Prominent "Continue Learning" Hero Card with 1-tap "Resume Lesson" shortcut pointing to the student's current lesson.
  - Enrolled courses progress grid with visual progress bars and quick syllabus access.
  - Dynamic "Targeted Revision Focus" recommendations widget.
- **Database & Data Architecture**:
  - PostgreSQL 16 migration `scripts/migrations/002_phase_d_academy_and_learning_engine.sql` with models for `enrollments`, `quiz_attempts`, `study_stats`, and `authoring_courses`.
  - Updated `prisma/schema.prisma` with relational models and regenerated Prisma client.
  - Resilient in-memory database store (`src/lib/db/index.ts`) pre-seeded with demo student Chioma Adeleke (`usr-std-001`) and vetted tutor Dr. Tayo Okafor (`usr-tut-004`).
- **RESTful Academy API Routes**:
  - `GET /api/academy/dashboard`: Aggregated dashboard data including enrollments, study stats, streak days, recent attempts, and revision topics.
  - `POST /api/academy/enroll`: Course enrollment action with entry lesson initialization.
  - `GET /api/academy/courses/[slug]/lessons/[lessonId]`: Lesson curriculum data with syllabus navigation and completion state.
  - `POST /api/academy/courses/[slug]/lessons/[lessonId]/complete`: Mark lesson complete and calculate updated progress.
  - `POST /api/academy/quiz/submit`: Checkpoint quiz grading with step-by-step reasoning and revision topic generation.
  - `GET /api/tutor/courses` & `POST /api/tutor/courses`: Tutor course authoring list and lifecycle status updates.
- **Verification & Quality Gates**:
  - Unit test suite: `src/test/academy.test.ts` (11 tests covering quiz grading, progress calculator, streak manager, lesson completion, and tutor lifecycle workflow). Vitest suite passing 100% (40/40 tests across 6 files).
  - Playwright E2E suite: `e2e/phase-d.spec.ts` (14 tests across Chromium desktop and Mobile Chrome viewports covering dashboard, lesson viewer, quiz grading, offline resilience, completion navigation, tutor authoring, and mobile drawer).
  - Accessibility & visual audit: `scripts/audit-phase-d.js` capturing 9 screenshots across 1280px, 768px, and 375px viewports with axe-core verifying 0 serious or critical violations.

#### Changed
- Exported `buttonVariants` helper in `src/components/ui/Button.tsx` to eliminate nested interactive elements (`<Link><Button>`) and preserve valid HTML5 semantics.
- Added explicit `aria-label` to `src/components/ui/ProgressBar.tsx` to satisfy W3C `aria-progressbar-name` requirements.
- Standardized status green badge copy to `text-status-green-800` (`#166534`) to enforce WCAG 2.2 AA contrast compliance (> 5.5:1).
- Updated `Navbar.tsx` tablet breakpoint collapse to `hidden lg:flex` and hamburger to `lg:hidden` with `min-h-[4.5rem]` touch target sizing.
- Added role-aware "My Dashboard" (Student) and "Tutor Portal" (Tutor) links across desktop navbar and mobile sheet drawer.

### [0.3.0] - 2026-10-10 - Phase C: Identity, RBAC & Guardian Consent Architecture
#### Added
- **NDPA 2023 Section 31 Minor Safeguard Engine**: Full underage learner detection (< 18) based on Date of Birth, mandating verifiable parent/guardian consent prior to lesson bookings or interactive tutoring.
- **Dedicated Guardian Consent Portal**: `/guardian/consent` providing 6-digit OTP verification, 15-minute passcode expiration, rate-limiting brute force protection (max 5 attempts), statutory consent agreements, and instant audit trail generation.
- **Authentication Pages**:
  - `/login`: Accessible sign-in form with email/password inputs, show/hide password toggle, and a 1-tap "Quick Demo Sign-In" credential selector for immediate testing of all 5 system roles (`Learner (Adult)`, `Learner (Minor)`, `Parent / Guardian`, `Vetted Tutor`, and `Platform Admin`).
  - `/register`: Comprehensive 3-role onboarding (`Learner`, `Parent / Guardian`, `Tutor`) with real-time minor age calculation and dynamic NDPA 2023 guardian information panel.
- **Cryptographic & Session Infrastructure**:
  - `src/lib/auth/password.ts`: Enterprise-grade password hashing via `scrypt` with 16-byte random salt and constant-time `timingSafeEqual` verification.
  - `src/lib/auth/session.ts`: Tamper-resistant HMAC-SHA256 session tokens with expiration and HTTP-only, secure, SameSite lax cookie transport.
- **RESTful Authentication API Routes**:
  - `POST /api/auth/register`: Zod-validated registration with role assignment, password hashing, minor detection, and guardian OTP dispatch.
  - `POST /api/auth/login`: Constant-time credential authentication and session cookie generation.
  - `POST /api/auth/logout`: Safe session invalidation and cookie clearing.
  - `GET /api/auth/me`: Session introspection returning user record, minor guardianship status, and parent wards.
  - `POST /api/auth/guardian/consent`: OTP generation and dispatch via SMS/Email adapters with rate-limiting.
  - `POST /api/auth/guardian/verify-otp`: Constant-time passcode verification and NDPA 2023 Section 31 audit log persistence.
- **Messaging Adapter**: `src/lib/adapters/messaging.ts` with Termii (SMS) and Resend (Email) production integrations, plus in-memory sandbox dispatch with inspected passcode histories for deterministic local testing.
- **Database Architecture**:
  - Production PostgreSQL 16 schema: `prisma/schema.prisma` with models `User`, `Guardianship`, `TutorProfile`, `Session` and SQL migration `scripts/migrations/001_phase_c_identity_and_guardian_schema.sql`.
  - Resilient in-memory database store (`src/lib/db/index.ts`) pre-seeded with 5 deterministic role accounts and CRUD methods for full offline execution.
- **Reactive Client Auth Context**: `src/components/auth/AuthProvider.tsx` exposing `useAuth()` hook for live user and guardianship state across client components.
- **Application Shell Integration**: Updated `Navbar.tsx` displaying user avatar initials, role badge (`Learner`, `Parent`, `Tutor`, `Admin`), pending minor consent alerts, and reactive logout controls on both desktop and mobile drawer views.
- **Verification & Quality Gates**:
  - Unit test suite: `src/test/auth.test.ts` (7 tests covering scrypt hashing, HMAC signing/tamper resistance, age calculation, and seed store).
  - Playwright E2E suite: `e2e/phase-c.spec.ts` (10 tests covering 1-tap demo logins, adult/minor registration, minor guardian consent redirection, and OTP verification across Desktop and Mobile viewports).
  - Automated axe-core visual and accessibility audit script (`scripts/audit-phase-c.js`) verifying 0 serious/critical violations across `/login`, `/register`, and `/guardian/consent` on 1280px, 768px, and 375px viewports.

### [0.2.0] - 2026-10-10 - Phase B: Public Website & Catalogue Slice
#### Added
- Full public education catalogue: `/academy` (9 subjects directory), `/academy/[subject]` (subject detail with level filters, courses, and verified tutors), `/courses/[slug]` (comprehensive syllabus, lesson breakdown, free previews, verified instructor profiles, and tuition fees).
- Verified tutor directory: `/tutors` with multi-factor search (name, subject, Nigerian state), grade level filters, delivery formats (Online, In-Person, Hybrid), language filters, and active filter reset.
- Tutor profile pages: `/tutors/[slug]` with academic qualifications, TRCN certifications, weekly availability windows, 10-minute safe slot hold notice, transparent cancellation policy, and booking CTA.
- Socratic AI Assistant pillar page: `/ai` detailing hint-first pedagogy, programmatic math verification, student quota management, and NDPA 2023 data anonymization safeguards.
- Interactive Socratic AI preview widget (`AIInteractiveDemo.tsx`) demonstrating hint-first guidance on quadratic equations, AP series, and mensuration.
- Music Tuition pillar page: `/music` supporting ABRSM/MUSON theory, piano, guitar, and vocal coaching under a unified platform calendar.
- Transparent pricing page: `/pricing` detailing 1-on-1 hourly tutoring from ₦5,000/hr, Socratic AI Pass at ₦3,500/month, Academy full course passes, Paystack PCI-DSS protection, 15% platform commission disclosure, and refund rules.
- Institutional & support pages: `/about` (mission, 3 pillars, safeguarding promise), `/contact` (Lagos coordinates, interactive inquiry form with toast confirmation), `/faq` (categorized knowledge base with accordion items), and `/become-a-tutor` (recruitment pipeline and educator value proposition).
- Four core legal policy pages under `src/app/legal/` (`/legal/terms`, `/legal/privacy`, `/legal/safeguarding`, `/legal/refunds`), all featuring the mandatory legal review banner under the Nigeria Data Protection Act 2023.
- Search Engine Optimization (SEO): dynamic `sitemap.xml` covering all static pages, subjects, courses, and tutors; and `robots.txt` disallowing `/dev/`, `/admin/`, and `/api/`.
- Automated Phase B multi-viewport verification audit script (`scripts/audit-phase-b.js`) capturing 1280px, 768px, and 375px screenshots and executing axe-core scans.
- Comprehensive Playwright E2E test suite (`e2e/phase-b.spec.ts`) validating 28 scenarios across Desktop and Mobile viewports.

#### Changed
- Added `"use client"` directive to `Avatar.tsx` to ensure safe isomorphic rendering in Server and Client components.
- Added `role="img"` to `Rating.tsx` component to comply with W3C ARIA specifications for `aria-label`.
- Added accessible `id`, `htmlFor`, and `aria-label` bindings across all directory filter selects.
- Added `status-green-800` semantic token (`#166534`) to enforce WCAG 2.2 AA contrast ratios (> 5.5:1) for green text on light surfaces.
- Made tutor availability scrollable containers keyboard-focusable (`tabIndex={0}`, `role="region"`).

### [0.1.0] - 2026-10-10 - Phase A: Reset, Design System Hardening & Real Shell
#### Added
- Real public application shell: sticky responsive `Navbar` with currency hint (`NGN`), desktop navigation, ghost login, primary CTA, and accessible mobile drawer `Sheet`.
- Real public `Footer` containing 4 core pillars, company links, NDPA 2023 legal policies, child safeguarding trust notice, and Lagos operating coordinates.
- Production-ready public education landing page on `/` featuring Navy 900 high-contrast gradient hero, trust signals, SVG/CSS product composition (Tutor card, Socratic AI hint bubble, and progress ring), four service pillar cards, and dual-track student/parent journey.
- Automated WCAG 2.2 AA contrast unit test suite (`src/test/contrast.test.ts`) checking all design tokens (≥ 4.5:1 body, ≥ 3.0:1 large text) and verifying dark-on-amber and dark-on-teal invariants.
- Accessible UI components: `Sheet`, `Accordion`, `Avatar`, `Rating`, `ProgressBar`, `Textarea`, `Checkbox`.
- Automated Playwright multi-viewport visual screenshot and axe-core accessibility audit script (`scripts/audit-phase-a.js`).
- E2E Playwright test suite validating public page, responsive mobile menu drawer, and isolated `/dev/design-system` route.

#### Changed
- Relocated developer diagnostic showcase from root `/` to `/dev/design-system`, returning 404 in production environments.
- Updated Tailwind configuration and `globals.css` with semantic text tokens (`text-on-dark`, `text-on-dark-muted`, `text-on-light`, `text-on-light-muted`) and enforced white text on Navy surfaces.
- Corrected footer disclaimer text contrast from Slate 400 to Slate 600, achieving 0 axe violations.

#### Removed
- Removed developer token swatches, smoke test triggers, API health badges, and diagnostic buttons from all public-facing views.

### [0.0.1] - 2026-10-10 - Phase 0: Foundation
#### Added
- Architectural foundation plan approved by tech lead.
- Project documentation: README, CHANGELOG, DECISIONS log.
- Environment configuration schema and `.env.example`.
- Docker Compose configuration for PostgreSQL 16 with `btree_gist` extension support.
- GitHub Actions CI workflow for linting, type-checking, and automated test execution.
- Trainbow HUB Design System tokens (Navy, confident Blue, service accents for AI, Tutors, and Music).
- System health status endpoint (`/api/health`).
