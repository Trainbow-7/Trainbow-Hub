-- ==============================================================================
-- Trainbow HUB - Migration 002: Phase D Academy & Native Learning Engine
-- Target Engine: PostgreSQL 16
-- ==============================================================================

DO $$ BEGIN
  CREATE TYPE course_status AS ENUM ('DRAFT', 'IN_REVIEW', 'PUBLISHED');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 1. Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_slug VARCHAR(128) NOT NULL,
  completed_lesson_ids TEXT[] NOT NULL DEFAULT '{}',
  last_accessed_lesson_id VARCHAR(64) NOT NULL DEFAULT '',
  progress_percentage NUMERIC(5, 2) NOT NULL DEFAULT 0.00,
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_user_course UNIQUE (user_id, course_slug)
);

CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course_slug);

-- 2. Quiz Attempts Table
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_slug VARCHAR(128) NOT NULL,
  lesson_id VARCHAR(64) NOT NULL,
  score NUMERIC(5, 2) NOT NULL, -- 0.00 to 100.00
  total_questions INT NOT NULL,
  correct_count INT NOT NULL,
  answers_json JSONB NOT NULL,
  recommendations_json JSONB NOT NULL,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_lesson ON quiz_attempts(lesson_id);

-- 3. Study Stats Table
CREATE TABLE IF NOT EXISTS study_stats (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  streak_days INT NOT NULL DEFAULT 1,
  last_active_date DATE NOT NULL DEFAULT CURRENT_DATE,
  total_minutes_studied INT NOT NULL DEFAULT 0,
  lessons_completed INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Authoring Courses Table (Tutor & Content Creator Engine)
CREATE TABLE IF NOT EXISTS authoring_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(128) UNIQUE NOT NULL,
  subject_slug VARCHAR(128) NOT NULL,
  level VARCHAR(64) NOT NULL,
  status course_status NOT NULL DEFAULT 'DRAFT',
  version INT NOT NULL DEFAULT 1,
  changelog TEXT,
  price_minor_units INT NOT NULL DEFAULT 0,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  syllabus_json JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_authoring_courses_author ON authoring_courses(author_id);
CREATE INDEX IF NOT EXISTS idx_authoring_courses_status ON authoring_courses(status);
CREATE INDEX IF NOT EXISTS idx_authoring_courses_slug ON authoring_courses(slug);
