# Changelog

All notable changes to Trainbow HUB will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
