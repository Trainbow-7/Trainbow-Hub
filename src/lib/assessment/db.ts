import { AssessmentItem, ReviewStatus, AssessmentGradingResult } from "./types";
import { ALL_ASSESSMENT_ITEMS, getItemsByCourse, getItemsByLesson } from "./banks";
import { ALL_PARAMETRIC_TEMPLATES } from "./templates/math-templates";
import { COURSES_DATA } from "../data/curricula";

export interface AssessmentAttemptRecord {
  id: string;
  userId: string;
  courseSlug: string;
  lessonId: string;
  moduleId?: string;
  type: "checkpoint" | "module_test" | "final_assessment";
  mode: "practice" | "test" | "jamb_speed";
  score: number;
  totalQuestions: number;
  correctCount: number;
  passed: boolean;
  isMastered: boolean;
  timeSpentSeconds: number;
  answers: Record<string, any>;
  objectiveMasteries: any[];
  identifiedMisconceptions: any[];
  completedAt: Date;
}

export interface QuestionReportRecord {
  id: string;
  questionId: string;
  userId?: string;
  reason: string;
  details?: string;
  reportedAt: Date;
  status: "pending" | "resolved" | "dismissed";
}

// In-memory persistent collections across dev server lifetime
class AssessmentDatabase {
  private items: Map<string, AssessmentItem> = new Map();
  private attempts: Map<string, AssessmentAttemptRecord> = new Map();
  private reports: Map<string, QuestionReportRecord> = new Map();
  private lessonMasteries: Map<string, Set<string>> = new Map(); // key: `${userId}:${courseSlug}` -> Set<lessonId>
  private initialized = false;

  constructor() {
    this.init();
  }

  private init() {
    if (this.initialized) return;
    this.initialized = true;

    for (const item of ALL_ASSESSMENT_ITEMS) {
      this.items.set(item.id, { ...item });
    }
  }

  public getAssessmentItem(id: string): AssessmentItem | undefined {
    this.init();
    return this.items.get(id);
  }

  public listAssessmentItems(filter?: {
    courseSlug?: string;
    moduleId?: string;
    lessonId?: string;
    reviewStatus?: ReviewStatus;
    reportedOnly?: boolean;
    search?: string;
  }): AssessmentItem[] {
    this.init();
    let result = Array.from(this.items.values());

    if (filter?.courseSlug) {
      result = result.filter((i) => i.courseSlug === filter.courseSlug);
    }
    if (filter?.moduleId) {
      result = result.filter((i) => i.moduleId === filter.moduleId);
    }
    if (filter?.lessonId) {
      result = result.filter((i) => i.lessonId === filter.lessonId);
    }
    if (filter?.reviewStatus) {
      result = result.filter((i) => i.reviewStatus === filter.reviewStatus);
    }
    if (filter?.reportedOnly) {
      result = result.filter((i) => (i.reportedCount ?? 0) > 0);
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      result = result.filter((i) => i.prompt.toLowerCase().includes(q) || i.objective.toLowerCase().includes(q));
    }

    return result;
  }

  public updateAssessmentItem(id: string, updates: Partial<AssessmentItem>): AssessmentItem {
    this.init();
    const existing = this.items.get(id);
    if (!existing) {
      throw new Error(`Assessment item with id '${id}' not found`);
    }
    const updated = {
      ...existing,
      ...updates,
    };
    this.items.set(id, updated);
    return updated;
  }

  public createAssessmentAttempt(data: {
    userId: string;
    courseSlug: string;
    lessonId: string;
    moduleId?: string;
    type?: "checkpoint" | "module_test" | "final_assessment";
    mode: "practice" | "test" | "jamb_speed";
    grading: AssessmentGradingResult;
  }): AssessmentAttemptRecord {
    this.init();
    const record: AssessmentAttemptRecord = {
      id: data.grading.attemptId,
      userId: data.userId,
      courseSlug: data.courseSlug,
      lessonId: data.lessonId,
      moduleId: data.moduleId,
      type: data.type || "checkpoint",
      mode: data.mode,
      score: data.grading.score,
      totalQuestions: data.grading.totalQuestions,
      correctCount: data.grading.correctCount,
      passed: data.grading.passed,
      isMastered: data.grading.isMastered,
      timeSpentSeconds: data.grading.timeSpentSeconds,
      answers: {},
      objectiveMasteries: data.grading.objectiveMasteries,
      identifiedMisconceptions: data.grading.identifiedMisconceptions,
      completedAt: new Date(),
    };

    this.attempts.set(record.id, record);

    // If mastered, register lesson mastery
    if (record.isMastered) {
      const key = `${data.userId}:${data.courseSlug}`;
      if (!this.lessonMasteries.has(key)) {
        this.lessonMasteries.set(key, new Set());
      }
      this.lessonMasteries.get(key)!.add(data.lessonId);
    }

    return record;
  }

  public listAssessmentAttempts(userId: string, courseSlug?: string): AssessmentAttemptRecord[] {
    this.init();
    const results: AssessmentAttemptRecord[] = [];
    for (const att of this.attempts.values()) {
      if (att.userId === userId) {
        if (!courseSlug || att.courseSlug === courseSlug) {
          results.push({ ...att });
        }
      }
    }
    return results.sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime());
  }

  public getMasteredLessons(userId: string, courseSlug: string): string[] {
    const key = `${userId}:${courseSlug}`;
    const set = this.lessonMasteries.get(key);
    return set ? Array.from(set) : [];
  }

  public reportQuestion(questionId: string, reason: string, userId?: string, details?: string): QuestionReportRecord {
    this.init();
    const repId = `rep-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const report: QuestionReportRecord = {
      id: repId,
      questionId,
      userId,
      reason,
      details,
      reportedAt: new Date(),
      status: "pending",
    };
    this.reports.set(repId, report);

    // Increment item reportedCount
    const item = this.items.get(questionId);
    if (item) {
      item.reportedCount = (item.reportedCount || 0) + 1;
      // Auto-hide rule: items reported 3 or more times are hidden until reviewed
      if (item.reportedCount >= 3) {
        item.reviewStatus = "rejected";
      }
      this.items.set(questionId, item);
    }

    return report;
  }

  public listReportedQuestions(): QuestionReportRecord[] {
    this.init();
    return Array.from(this.reports.values());
  }

  public getAssessmentCoverage(courseSlug?: string) {
    this.init();
    const coursesToScan = courseSlug
      ? COURSES_DATA.filter((c) => c.slug === courseSlug)
      : COURSES_DATA;

    return coursesToScan.map((c) => {
      const allLessons = c.modules.flatMap((m) => m.lessons);
      const totalLessons = allLessons.length;
      let lessonsWithQuizzes = 0;
      let totalBankItems = 0;
      let softwareVerifiedCount = 0;
      let teacherApprovedCount = 0;
      let objectivesCount = 0;

      for (const les of allLessons) {
        const items = this.listAssessmentItems({ courseSlug: c.slug, lessonId: les.id });
        if (items.length >= 6) {
          lessonsWithQuizzes++;
        }
        totalBankItems += items.length;
        softwareVerifiedCount += items.filter((i) => i.softwareVerified).length;
        teacherApprovedCount += items.filter((i) => i.reviewStatus === "teacher_approved").length;
        objectivesCount += (les.objectives || []).length;
      }

      const templates = ALL_PARAMETRIC_TEMPLATES.filter((t) => t.courseSlug === c.slug);

      return {
        courseSlug: c.slug,
        title: c.title,
        totalLessons,
        lessonsWithQuizzes,
        coveragePercentage: totalLessons > 0 ? Math.round((lessonsWithQuizzes / totalLessons) * 100) : 100,
        totalBankItems,
        itemsPerObjectiveAvg: objectivesCount > 0 ? Math.round((totalBankItems / objectivesCount) * 10) / 10 : 0,
        softwareVerifiedPercentage: totalBankItems > 0 ? Math.round((softwareVerifiedCount / totalBankItems) * 100) : 100,
        teacherApprovedPercentage: totalBankItems > 0 ? Math.round((teacherApprovedCount / totalBankItems) * 100) : 0,
        awaitingReviewCount: totalBankItems - teacherApprovedCount,
        parametricTemplateCount: templates.length,
      };
    });
  }

  public getLearnerNeedsAnalytics(courseSlug?: string) {
    this.init();
    // Minimum group size requirement for privacy protection
    const MIN_GROUP_SIZE = 10;

    let relevantAttempts = Array.from(this.attempts.values());
    if (courseSlug) {
      relevantAttempts = relevantAttempts.filter((a) => a.courseSlug === courseSlug);
    }

    if (relevantAttempts.length < MIN_GROUP_SIZE) {
      return {
        hasSufficientData: false,
        totalAttempts: relevantAttempts.length,
        minimumRequired: MIN_GROUP_SIZE,
        message: "Not enough data yet. Aggregated insights require at least 10 student attempts to protect individual privacy.",
      };
    }

    // Hardest objectives calculation
    const objStats = new Map<string, { total: number; correct: number }>();
    const miscCounts = new Map<string, { count: number; title: string; remediation: string }>();

    for (const att of relevantAttempts) {
      for (const obj of att.objectiveMasteries || []) {
        if (!objStats.has(obj.objective)) {
          objStats.set(obj.objective, { total: 0, correct: 0 });
        }
        const s = objStats.get(obj.objective)!;
        s.total += obj.totalQuestions;
        s.correct += obj.correctQuestions;
      }

      for (const misc of att.identifiedMisconceptions || []) {
        if (!miscCounts.has(misc.id)) {
          miscCounts.set(misc.id, { count: 0, title: misc.title, remediation: misc.remediation });
        }
        miscCounts.get(misc.id)!.count++;
      }
    }

    const hardestObjectives = Array.from(objStats.entries())
      .map(([objective, stat]) => ({
        objective,
        attempts: stat.total,
        successRate: stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0,
      }))
      .sort((a, b) => a.successRate - b.successRate)
      .slice(0, 5);

    const topMisconceptions = Array.from(miscCounts.entries())
      .map(([id, info]) => ({
        id,
        title: info.title,
        occurrences: info.count,
        remediation: info.remediation,
      }))
      .sort((a, b) => b.occurrences - a.occurrences)
      .slice(0, 5);

    return {
      hasSufficientData: true,
      totalAttempts: relevantAttempts.length,
      hardestObjectives,
      topMisconceptions,
    };
  }
}

export const assessmentDb = new AssessmentDatabase();

