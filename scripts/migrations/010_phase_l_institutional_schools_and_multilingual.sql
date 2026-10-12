-- ==============================================================================
-- Migration: 010_phase_l_institutional_schools_and_multilingual.sql
-- Description: Phase L: Institutional School Administration, Multi-Tenant Cohorts,
--              License Allocations & Localization Metadata (SC-01 to SC-05, ADR-013)
-- ==============================================================================

-- 1. Educational Institutions / Schools Table (SC-01)
CREATE TABLE IF NOT EXISTS "schools" (
  "id" VARCHAR(64) PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "code" VARCHAR(32) UNIQUE NOT NULL,
  "state" VARCHAR(64) NOT NULL,
  "address" TEXT NOT NULL,
  "contact_email" VARCHAR(255) NOT NULL,
  "contact_phone" VARCHAR(32) NOT NULL,
  "seat_capacity" INTEGER NOT NULL DEFAULT 100,
  "seats_used" INTEGER NOT NULL DEFAULT 0,
  "status" VARCHAR(32) NOT NULL DEFAULT 'ACTIVE', -- ACTIVE, PENDING_VERIFICATION, SUSPENDED
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "idx_schools_code" ON "schools" ("code");
CREATE INDEX IF NOT EXISTS "idx_schools_state" ON "schools" ("state");

-- 2. School Cohorts / Classes Table (SC-01, SC-02)
CREATE TABLE IF NOT EXISTS "school_cohorts" (
  "id" VARCHAR(64) PRIMARY KEY,
  "school_id" VARCHAR(64) NOT NULL REFERENCES "schools"("id") ON DELETE CASCADE,
  "name" VARCHAR(128) NOT NULL, -- e.g. "SSS 3 Gold - WAEC Science", "JSS 2 Diamond"
  "grade_level" VARCHAR(64) NOT NULL,
  "academic_year" VARCHAR(32) NOT NULL DEFAULT '2026/2027',
  "student_count" INTEGER NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "idx_school_cohorts_school" ON "school_cohorts" ("school_id");

-- 3. Institutional Student Enrollments (SC-02, SC-03)
CREATE TABLE IF NOT EXISTS "school_student_enrollments" (
  "id" VARCHAR(64) PRIMARY KEY,
  "school_id" VARCHAR(64) NOT NULL REFERENCES "schools"("id") ON DELETE CASCADE,
  "cohort_id" VARCHAR(64) NOT NULL REFERENCES "school_cohorts"("id") ON DELETE CASCADE,
  "student_id" VARCHAR(64) NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "student_external_id" VARCHAR(64), -- e.g. School Student ID "KCL/2026/041"
  "status" VARCHAR(32) NOT NULL DEFAULT 'ACTIVE',
  "enrolled_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS "idx_school_enrollment_unique" ON "school_student_enrollments" ("school_id", "student_id");
CREATE INDEX IF NOT EXISTS "idx_school_enrollment_cohort" ON "school_student_enrollments" ("cohort_id");
