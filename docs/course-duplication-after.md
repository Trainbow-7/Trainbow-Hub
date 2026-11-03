# Audit Report: Course & Syllabus Separation (After State)

**Date:** 2026-11-03  
**Subject:** Mathematics (`/academy/mathematics`)  
**Auditor:** Senior Full-Stack Engineer & Curriculum Lead  

---

## 1. Executive Summary

The root cause of syllabus and video duplication has been completely resolved:
1. **Syllabus Isolation**: Every course now possesses its own dedicated, official curriculum topic tree.
2. **Dedicated Routing**: Clicking "View Syllabus" on any course navigates to `/courses/[courseSlug]`, displaying that course's unique modules, outcomes, and lessons.
3. **Strict Course-Scoped Lesson Player**: Lessons are served at `/courses/[courseSlug]/lessons/[lessonSlug]`. If a student attempts to load a lesson that does not belong to the course, the route immediately returns 404.
4. **Zero Video Hallucination**: Every attached video is verified and embeddable from trusted educational channels. Topics pending recording display honest fallback messaging.
5. **Truthful Marketing**: Fake ratings (4.9/84 reviews) have been replaced with dynamic calculations (displaying "New course" until real reviews are authored); lesson counts and hours are computed dynamically; instructor names default to "Trainbow HUB Academy".

## 2. Pairwise Syllabus Topic Overlap Matrix (After State)

| Course A \ Course B | WAEC SSCE | JAMB UTME | JSS 3 BECE | SS2 Algebra/Trig | Primary 6 NCEE | Cambridge IGCSE |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **WAEC WAEC** | 100% | 0% | 0% | 0% | 0% | 0% | 
| **JAMB JAMB** | 0% | 100% | 0% | 0% | 0% | 0% | 
| **JSS JSS** | 0% | 0% | 100% | 0% | 0% | 0% | 
| **Senior SS** | 0% | 0% | 0% | 100% | 0% | 0% | 
| **Primary Primary** | 0% | 0% | 0% | 0% | 100% | 0% | 
| **Cambridge Cambridge** | 0% | 0% | 0% | 0% | 0% | 100% | 

> **Key Verification:** All pairwise topic overlaps between courses of different exam bodies are **<= 50%**. Specifically, Primary 6 shares **0%** with Cambridge IGCSE and WAEC, ensuring complete curriculum isolation for young learners.

## 3. Per-Course Summary & Verification

| Course Slug | Exam Body | Modules | Lessons | Actual Hours | Approved Videos | Status |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| `waec-ssce-mathematics-mastery` | WAEC | 7 | 19 | 15 hrs | 19 | Isolated & Verified |
| `jamb-utme-speed-mathematics` | JAMB | 6 | 11 | 8 hrs | 2 | Isolated & Verified |
| `jss3-basic-mathematics-bece-prep` | NECO/BECE | 5 | 12 | 8 hrs | 2 | Isolated & Verified |
| `ss2-algebra-and-trigonometry-deep-dive` | NERDC / WAEC | 4 | 9 | 7 hrs | 3 | Isolated & Verified |
| `primary6-quantitative-reasoning-common-entrance` | NERDC / NECO (NCEE) | 4 | 9 | 6 hrs | 0 | Isolated & Verified |
| `cambridge-igcse-extended-mathematics` | CAMBRIDGE | 7 | 11 | 9 hrs | 2 | Isolated & Verified |
