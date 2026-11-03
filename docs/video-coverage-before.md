# Video Coverage Audit: Before State

**Generated Date:** 2026-11-03  
**Status:** Audit Completed  
**Source Code References:**
- [src/lib/data/curricula.ts](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/src/lib/data/curricula.ts)
- [src/lib/db/index.ts](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/src/lib/db/index.ts)
- [src/app/api/academy/courses/[slug]/lessons/[lessonId]/route.ts](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/src/app/api/academy/courses/[slug]/lessons/[lessonId]/route.ts)
- [src/components/academy/LessonPlayerView.tsx](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/src/components/academy/LessonPlayerView.tsx)
- [next.config.mjs](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/next.config.mjs)

---

## 1. Root Causes Analysis

| Check Item | Result | Evidence & File Paths |
| :--- | :---: | :--- |
| **1. Lessons have no `videoId` or a placeholder** | **TRUE** | Across the 6 mathematics courses, **43 of 71 lessons (60.6%)** had `videoId: undefined` in [src/lib/data/curricula.ts](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/src/lib/data/curricula.ts). Only WAEC SSCE had full coverage (19/19), while JAMB had 2/11, JSS 3 had 2/12, SS 2 had 3/9, Primary 6 had 0/9, and Cambridge IGCSE had 2/11. |
| **2. Pipeline never ran or has no `YOUTUBE_API_KEY`** | **TRUE** | `.env.local` contains `YOUTUBE_API_KEY=API_KEY_INVALID`. No batch discovery job existed for the newly separated courses. Previous scripts (`scripts/generate-videomap.mjs`) hardcoded mappings exclusively for WAEC SSCE (`waec-ssce-mathematics-mastery`). |
| **3. Lesson player hides when `videoId` is missing** | **TRUE** | In [src/components/academy/LessonPlayerView.tsx](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/src/components/academy/LessonPlayerView.tsx#L280-L321), when `video?.hasVideo` is false, the video container displays a fallback message *"Video Lesson in Production"* while the course page advertised *"8 Hours Video & Quizzes"*. |
| **4. Embeds blocked by Content Security Policy** | **PARTIAL** | [next.config.mjs](file:///c:/Users/USER/Documents/Trainbow%20Hub/Trainbow-Hub/next.config.mjs#L63) permitted `https://www.youtube-nocookie.com`, but also allowed `https://www.youtube.com`. Institutional guidelines require restricting `frame-src` strictly to `https://www.youtube-nocookie.com`. |
| **5. Stored IDs invalid, private, or non-embeddable** | **FALSE** | The 28 attached WAEC/sample IDs are valid YouTube videos from *The Organic Chemistry Tutor*, but 43 curriculum lessons were completely unpopulated. |
| **6. Lesson page loads the wrong lesson** | **RESOLVED** | Catch-all routing previously redirected to `mr-oyedeji-st`. The routing is now direct, but API queries for non-WAEC lesson videos returned empty records because database seed script `scripts/attach-videos.ts` had no videos mapped for them. |

---

## 2. Before-State Coverage Table

| Course Slug | Course Name | Exam Board | Total Lessons | Lessons With Video | Lessons Without Video | Coverage % |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| `waec-ssce-mathematics-mastery` | WAEC & SSCE Comprehensive Mathematics Mastery | WAEC | 19 | 19 | 0 | 100.0% |
| `jamb-utme-speed-mathematics` | JAMB UTME Speed & Strategy Mathematics | JAMB | 11 | 2 | 9 | 18.2% |
| `jss3-basic-mathematics-bece-prep` | JSS 3 Basic Mathematics & BECE Exam Prep | NECO/BECE | 12 | 2 | 10 | 16.7% |
| `ss2-algebra-and-trigonometry-deep-dive` | Senior Secondary Algebra & Trigonometry Deep Dive | NERDC / WAEC | 9 | 3 | 6 | 33.3% |
| `primary6-quantitative-reasoning-common-entrance` | Primary 6 Quantitative Reasoning & Mathematics | NECO NCEE | 9 | 0 | 9 | 0.0% |
| `cambridge-igcse-extended-mathematics` | Cambridge IGCSE Extended Mathematics Complete Guide | Cambridge (0580) | 11 | 2 | 9 | 18.2% |
| **Total** | **All 6 Courses** | **Platform** | **71** | **28** | **43** | **39.4%** |

---

## 3. Discrepancies on Course Pages

On `/courses/jamb-utme-speed-mathematics`:
1. The badge claimed **"Syllabus Verified"** despite no verified teacher review status recorded.
2. The stat bar claimed **"8 Hours Video & Quizzes"** despite 9 of 11 lessons having no video.
3. The instructor card showed **"UTME Quantitative Specialist & CBT Strategy Lead"**, an invented marketing title.
4. Microcopy claimed **"100% money-back guarantee within 7 days"** and **"Lifetime access to course revisions"** without tying to real platform policy data.
5. The description claimed **"40 questions in under 45 minutes"**, which contradicts actual JAMB timing (180 questions across 4 subjects in 120 minutes total).
