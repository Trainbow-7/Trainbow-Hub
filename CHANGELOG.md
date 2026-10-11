# Changelog

All notable changes to Trainbow HUB will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
