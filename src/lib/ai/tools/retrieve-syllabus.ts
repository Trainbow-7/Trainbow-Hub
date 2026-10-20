import { z } from "zod";
import { ToolResult } from "./types";
import { db } from "@/lib/db";

export const RetrieveSyllabusInputSchema = z.object({
  query: z.string().describe("Search query, topic, or concept to retrieve authoritative curriculum guidance for (e.g. 'circle theorems angles in same segment', 'solving rational algebraic equations', 'stoichiometry molar mass')"),
  subject: z.string().optional().default("Mathematics"),
  curriculum: z.string().optional().default("WAEC_SSCE")
});

export type RetrieveSyllabusInput = z.infer<typeof RetrieveSyllabusInputSchema>;

// Verified high school & WAEC syllabus core topics for instant grounding
const CURRICULUM_KNOWLEDGE_STORE: Array<{
  id: string;
  subject: string;
  topic: string;
  source: string;
  content: string;
}> = [
  {
    id: "MATH-ALG-01",
    subject: "Mathematics",
    topic: "Rational Algebraic Equations",
    source: "Trainbow Approved Lesson: WAEC SSCE General Mathematics (Algebraic Processes)",
    content: "When solving rational equations with algebraic denominators such as 1/(3a-1) = 2/(a+1) - 3/8: (1) State non-permissible values (restrictions) where denominators equal zero (a != 1/3, a != -1). (2) Multiply every term by the Lowest Common Denominator (LCD), here 8(3a-1)(a+1). (3) Expand and collect like terms to form standard quadratic form ax^2 + bx + c = 0. (4) Factorize or apply quadratic formula. (5) Substitute both roots back into the original LHS and RHS to verify no extraneous roots were introduced."
  },
  {
    id: "MATH-GEOM-01",
    subject: "Mathematics",
    topic: "Circle Theorems and Cyclic Quadrilaterals",
    source: "Trainbow Approved Lesson: WAEC SSCE Circle Geometry & Deductive Proofs",
    content: "Key circle theorems: (1) Angle at the centre is twice the angle subtended at the circumference by the same arc. (2) Angle in a semicircle is a right angle (90°). (3) Angles in the same segment of a circle are equal. (4) Opposite angles of a cyclic quadrilateral are supplementary (sum to 180°). (5) Exterior angle of a cyclic quadrilateral equals the interior opposite angle. (6) Radii from centre to points on circumference are equal (OP = OQ = OS), forming isosceles triangles whose base angles are equal."
  },
  {
    id: "MATH-QUAD-01",
    subject: "Mathematics",
    topic: "Quadratic Equations and Discriminants",
    source: "Trainbow Approved Lesson: WAEC SSCE Quadratic Equations",
    content: "For quadratic equation ax^2 + bx + c = 0: Discriminant D = b^2 - 4ac. If D > 0, there are two distinct real roots x = (-b +- sqrt(D))/(2a). If D = 0, one repeated root. For 2x^2 - 5x + 3 = 0, a=2, b=-5, c=3, D = 25 - 24 = 1, giving x = (5 +- 1)/4 => x = 3/2 or x = 1."
  },
  {
    id: "CHEM-STOICH-01",
    subject: "Chemistry",
    topic: "Chemical Calculations and Stoichiometry",
    source: "Trainbow Approved Lesson: WAEC SSCE Chemistry (Stoichiometry)",
    content: "Law of conservation of mass: Atoms are neither created nor destroyed. The number of moles n = mass (g) / molar mass (g/mol). In solution, molarity M = n / V(dm³). pH = -log10[H+], pOH = -log10[OH-], pH + pOH = 14 at 25°C."
  },
  {
    id: "PHYS-KINE-01",
    subject: "Physics",
    topic: "Equations of Linear Motion",
    source: "Trainbow Approved Lesson: WAEC SSCE Mechanics (Motion)",
    content: "For uniformly accelerated linear motion: v = u + at, s = ut + (1/2)at^2, v^2 = u^2 + 2as, s = ((u+v)/2)t. Always ensure consistent SI units (m, s, m/s, m/s^2) before calculating."
  }
];

export async function runRetrieveSyllabus(args: RetrieveSyllabusInput): Promise<ToolResult<any>> {
  const startTime = Date.now();
  const qLower = args.query.toLowerCase();
  const subLower = (args.subject || "").toLowerCase();

  try {
    // 1. First attempt to query PostgreSQL pgvector / KnowledgeChunk table if populated
    try {
      const dbChunks = await (db as any).knowledgeChunk?.findMany({
        where: {
          subject: { contains: args.subject, mode: "insensitive" }
        },
        take: 3,
        include: { document: true }
      });

      if (dbChunks && dbChunks.length > 0) {
        return {
          success: true,
          toolName: "retrieve_syllabus",
          durationMs: Date.now() - startTime,
          engineUsed: "deterministic",
          data: {
            query: args.query,
            passages: dbChunks.map((c: any) => ({
              id: c.id,
              source: c.document?.title || "Approved Teaching Note",
              content: c.content
            }))
          }
        };
      }
    } catch (dbErr) {
      // Continue to in-memory curriculum store
    }

    // 2. Query in-memory approved curriculum knowledge store
    const matches = CURRICULUM_KNOWLEDGE_STORE.filter((doc) => {
      const matchSubject = !args.subject || doc.subject.toLowerCase().includes(subLower) || subLower.includes(doc.subject.toLowerCase());
      const words = qLower.split(/\s+/).filter(w => w.length > 3);
      const docText = `${doc.topic} ${doc.content}`.toLowerCase();
      const hasWordMatch = words.some(w => docText.includes(w));
      return matchSubject || hasWordMatch;
    });

    const results = matches.length > 0 ? matches : CURRICULUM_KNOWLEDGE_STORE.slice(0, 2);

    return {
      success: true,
      toolName: "retrieve_syllabus",
      durationMs: Date.now() - startTime,
      engineUsed: "deterministic",
      data: {
        query: args.query,
        passages: results.map(r => ({
          id: r.id,
          source: r.source,
          content: r.content
        }))
      }
    };
  } catch (err: any) {
    return {
      success: false,
      toolName: "retrieve_syllabus",
      durationMs: Date.now() - startTime,
      engineUsed: "deterministic",
      error: err.message
    };
  }
}
