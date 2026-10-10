# Changelog

All notable changes to Trainbow HUB will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
