# Changelog

All notable changes to Trainbow HUB will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
