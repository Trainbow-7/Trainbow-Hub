# Audit Report: Course & Syllabus Duplication (Before State)
**Date:** November 3, 2026  
**Subject Under Review:** Mathematics (`/academy/mathematics`)  
**Auditor:** Senior Full-Stack Engineer & Curriculum Lead

---

## 1. Executive Summary & Root Cause Investigation

Upon testing `/academy/mathematics`, six distinct Mathematics courses are presented to the learner:
1. `WAEC & SSCE Comprehensive Mathematics Mastery` (`waec-ssce-mathematics-mastery`)
2. `JAMB UTME Speed & Strategy Mathematics` (`jamb-utme-speed-mathematics`)
3. `JSS 3 Basic Mathematics & BECE Exam Prep` (`jss3-basic-mathematics-bece-prep`)
4. `Senior Secondary Algebra & Trigonometry Deep Dive` (`ss2-algebra-and-trigonometry-deep-dive`)
5. `Primary 6 Quantitative Reasoning & Mathematics` (`primary6-quantitative-reasoning-common-entrance`)
6. `Cambridge IGCSE Extended Mathematics Complete Guide` (`cambridge-igcse-extended-mathematics`)

However, when a learner browses or clicks "View Syllabus" on any of these courses, the lessons, modules, and embedded videos were **100% identical** across every course, displaying the senior secondary WAEC General Mathematics syllabus.

### Root Causes Analysis:

| Test Question | Verdict | File Path(s) | Concrete Evidence |
| :--- | :--- | :--- | :--- |
| **1. Seed data reuses one template lesson list** | **TRUE** | `src/lib/data/seed-data.ts` | `SEED_COURSES` only fully defined lessons `l1`–`l33` for `waec-ssce-mathematics-mastery`. Courses 2–6 only contained stub 1–2 module definitions with 2 placeholder lessons each, while claiming 20–40 lessons in metadata. |
| **2. Courses point to the same Module / Lesson IDs** | **PARTIALLY TRUE** | `src/lib/data/seed-data.ts`, `src/lib/data/academy-content.ts` | Detailed lessons (`DETAILED_LESSONS`) only existed for keys `l1`, `l2`, `l3`. All other course lessons fell back to a shared generic template in `/api/academy/courses/[slug]/lessons/[lessonId]/route.ts`. |
| **3. Syllabus route ignores course slug / hardcodes subject** | **TRUE (PRIMARY CAUSE)** | `src/app/courses/[...slug]/page.tsx`, `src/app/instructors/[instructorSlug]/courses/[...slug]/page.tsx`, `src/components/academy/SubjectSyllabusView.tsx`, `src/data/courses.ts` | `legacyRedirects` routed all course clicks to `/instructors/mr-oyedeji-st/courses/${track}/mathematics`. Both routes called `getSubjectBySlug("mathematics")`. `CATALOGUE_SUBJECTS` in `courses.ts` had only **one** static `syllabus` array (11 modules, 33 topics) containing senior WAEC SSCE topics. `SubjectSyllabusView` rendered this exact same syllabus regardless of track or course slug. |
| **4. Lessons have default/placeholder videoId copied everywhere** | **TRUE** | `src/data/courses.ts`, `src/data/videos.ts`, `content/video-map.json`, `src/lib/db/index.ts` | `content/video-map.json` and `RECOVERED_MATHEMATICS_VIDEOS` only contained 33 video mappings for senior secondary WAEC topics. Because the same syllabus was rendered everywhere, the same 33 videos were shown for Primary 6, JSS 3, and IGCSE. |
| **5. "View Syllabus" button links to one shared page** | **TRUE** | `src/app/academy/[subject]/page.tsx`, `src/app/courses/[...slug]/page.tsx` | "View Syllabus" linked to `/courses/[courseSlug]`, which immediately redirected via `legacyRedirects` to the single shared syllabus view showing the same WAEC syllabus. |

---

## 2. Before State: Course Inventory & Metadata Mismatches

| Course Slug | Exam Body / Level | Claimed Lessons | Actual Seed Lessons | Claimed Hours | Actual Lesson Minutes (Sum) | Hardcoded Rating | Instructor |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `waec-ssce-mathematics-mastery` | WAEC SSCE (SS 1–3) | 33 | 33 | 26 hrs | 1,595 min (~26.6 hrs) | 4.9 (84) | Mr Oyedeji S.T |
| `jamb-utme-speed-mathematics` | JAMB UTME | 35 | 4 | 25 hrs | 175 min (~2.9 hrs) | 4.8 (62) | Mr Oyedeji S.T |
| `jss3-basic-mathematics-bece-prep` | BECE / JSS 1–3 | 28 | 2 | 20 hrs | 75 min (~1.25 hrs) | 4.9 (51) | Mr Oyedeji S.T |
| `ss2-algebra-and-trigonometry-deep-dive` | Senior Secondary (SS 2) | 24 | 2 | 18 hrs | 90 min (1.5 hrs) | 4.8 (39) | Mr Oyedeji S.T |
| `primary6-quantitative-reasoning-common-entrance` | NCEE / Primary 1–6 | 20 | 2 | 15 hrs | 65 min (~1.1 hrs) | 4.9 (47) | Mr Oyedeji S.T |
| `cambridge-igcse-extended-mathematics` | Cambridge IGCSE 0580 | 40 | 2 | 30 hrs | 95 min (~1.6 hrs) | 5.0 (33) | Mr Oyedeji S.T |

---

## 3. Syllabus & Lesson Overlap Matrix (Before State)

When clicking "View Syllabus" from any course card, the application redirected to `SubjectSyllabusView`, which loaded the single `syllabus` property of `CATALOGUE_SUBJECTS["mathematics"]`.

### Pairwise Syllabus Topic Overlap (Displayed to Learners):

| Course A \ Course B | WAEC SSCE | JAMB UTME | JSS 3 BECE | SS2 Algebra/Trig | Primary 6 NCEE | Cambridge IGCSE |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **WAEC SSCE** | 100% | 100%* | 100%* | 100%* | 100%* | 100%* |
| **JAMB UTME** | 100%* | 100% | 100%* | 100%* | 100%* | 100%* |
| **JSS 3 BECE** | 100%* | 100%* | 100% | 100%* | 100%* | 100%* |
| **SS2 Algebra/Trig** | 100%* | 100%* | 100%* | 100% | 100%* | 100%* |
| **Primary 6 NCEE** | 100%* | 100%* | 100%* | 100%* | 100% | 100%* |
| **Cambridge IGCSE** | 100%* | 100%* | 100%* | 100%* | 100%* | 100% |

*\* Note: Indicates that because the route redirected to the single shared `SubjectSyllabusView`, 100% of the displayed modules (11 modules) and topics (33 topics with embedded YouTube videos) were identical across every single course.*

### Sample Topics Displayed to a Primary 6 Pupil (Severe Level Mismatch):
- Module 9: Equations of Straight Lines ($y = mx + c$, $m_1 \times m_2 = -1$)
- Module 10: Three-figure Bearings & Sine/Cosine Rules for Triangles ($a^2 = b^2 + c^2 - 2bc \cos A$)
- Module 11: Vector Translations & Integral Calculus Basics ($\int_a^b f(x)\,dx$)
- Video: `PUB0TaZ7bhA` ("Trigonometry - SOH CAH TOA, Right Triangles")
- Video: `9Yz-RCdS2Tg` ("The Power Rule For Derivatives & Rate of Change")

---

## 4. Unverifiable Claims & Data Fabrication Identified

1. **Fake Ratings and Review Counts:**
   - Every course displayed hardcoded stars and review counts (e.g., 4.9 from 84 reviews, 5.0 from 33 reviews) that were not derived from database review records.
2. **Untruthful Lesson and Duration Counts:**
   - Cards advertised "40 Lessons, 30 Hours" or "28 Lessons, 20 Hours", whereas the seed syllabi contained only 2–4 lessons.
3. **Hardcoded Instructor Attribution:**
   - "Mr Oyedeji S.T" was hardcoded across all courses, including primary-school quantitative reasoning and Cambridge international curricula.
4. **Banned Unverifiable Promotional Claims:**
   - "scoring 85+ in JAMB UTME Mathematics" (guaranteeing unstandardized test outcome)
   - "Target A* in Cambridge IGCSE" (unverifiable grade promise)
   - "verified 1-on-1 tutors aligned to Nigerian educational boards" (unsupported institutional claim)

---

## 5. Next Steps for Remediation (Plan of Execution)

1. **Step 2:** Define real `SyllabusSource`, `SyllabusTopic`, `Course`, `Module`, `Lesson` topic trees for each of the 6 distinct curriculum scopes (Primary 6 NCEE, JSS 3 BECE, SS2 Algebra & Trig, WAEC SSCE, JAMB UTME, Cambridge IGCSE 0580).
2. **Step 3:** Implement discrete routing (`/courses/[courseSlug]`, `/courses/[courseSlug]/lessons/[lessonSlug]`), strict course isolation, and breadcrumbs.
3. **Step 4:** Map verified, level-appropriate educational videos per topic using the allowlisted educational inventory.
4. **Step 5:** Compute ratings, lesson counts, and hours dynamically from real database records and remove banned claims.
5. **Step 6 & 7:** Seed idempotent data and verify with comprehensive Vitest and Playwright test suites.

