# Trainbow HUB

> **Learn • Connect • Grow**  
> A mobile-first, resilient online learning hub engineered for Nigeria (WAEC, JAMB, Cambridge IGCSE) and built for international scale.

---

## Overview

Trainbow HUB brings students, parents, tutors, and interactive learning content together into a unified platform. Built as a high-performance modular monolith, it delivers:
- **Academy:** Comprehensive syllabus-aligned courses, interactive step-by-step quizzes, and persistent cross-device progress.
- **Trainbow AI Assistant:** A pedagogical, hint-first Mathematics assistant with safety guardrails, programmatic formula verification, and seamless human tutor escalation.
- **Tutor Marketplace:** Vetted educators, subject-specific credentialing, dynamic availability scheduling, and double-booking prevention.
- **Trust & Safeguarding:** Mandatory parental consent for minors (<18), encrypted audit logs, append-only financial ledgers, and zero direct unmonitored communication between minors and tutors.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router) + TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + CSS Custom Properties (Trainbow Design System) + Radix UI / shadcn/ui
- **Database:** PostgreSQL 16 with `btree_gist` exclusion constraints
- **ORM:** Prisma ORM
- **Validation:** Zod schemas across API routes, server actions, and environment variables
- **Testing:** Vitest (Unit/Integration) + Playwright (E2E) + Concurrency & Webhook Replay suites
- **Providers:** Clean modular TypeScript adapters for Payments (Paystack sandbox), AI (Gemini/OpenAI/Claude sandbox), Video (Daily.co sandbox), and Messaging (Termii/Resend sandbox).

---

## Design System Tokens

| Role | Token / Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Brand** | Navy 900 | `#0B1B3A` | Headers, hero sections, dark surfaces |
| **Brand** | Blue 600 | `#2563EB` | Primary buttons, links, Academy accent |
| **Brand** | Blue 50 | `#EFF4FF` | Tints, selected rows |
| **Service** | AI Violet 600 | `#7C3AED` | Trainbow HUB AI assistant accent |
| **Service** | Tutor Teal 700 | `#0F766E` | Tutors text and buttons |
| **Service** | Tutor Teal 500 | `#14B8A6` | Fills, badges, icons (Never white text) |
| **Service** | Music Amber 500 | `#F59E0B` | Highlights, music preview (Always dark text) |
| **Neutral** | Slate 900 | `#0F172A` | Primary body text |
| **Neutral** | Slate 600 | `#475569` | Secondary text |
| **Neutral** | Slate 200 | `#E2E8F0` | Borders and dividers |
| **Neutral** | Slate 50 | `#F8FAFC` | Page background |
| **Status** | Green 600 | `#16A34A` | Success, confirmed |
| **Status** | Orange 600 | `#D97706` | Warning, pending |
| **Status** | Red 600 | `#DC2626` | Destructive, error |

---

## Getting Started

### Prerequisites
- Node.js 20+ LTS
- Docker & Docker Compose (for PostgreSQL)

### 1. Clone & Install Dependencies
```bash
git clone <repo-url>
cd "Trainbow Hub"
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Start Local PostgreSQL Database
```bash
docker compose up -d
```

### 4. Run Migrations & Seed Data
```bash
npx prisma migrate dev
npx prisma db seed
```

### 5. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view Trainbow HUB.

---

## Quality & Testing

- **Lint:** `npm run lint`
- **Type-Check:** `npm run type-check`
- **Unit Tests:** `npm run test`
- **E2E Tests:** `npx playwright test`
- **Health Check:** `curl http://localhost:3000/api/health`

---

## License

Proprietary © 2026 Trainbow HUB. All rights reserved.
