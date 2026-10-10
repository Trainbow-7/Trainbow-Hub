-- ==============================================================================
-- Trainbow HUB - Migration 001: Phase C Identity & Guardian Schema
-- Target Engine: PostgreSQL 16
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS btree_gist;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Role & Status Enums
DO $$ BEGIN
  CREATE TYPE user_role AS ENUM ('STUDENT', 'PARENT', 'TUTOR', 'ADMIN');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE guardianship_status AS ENUM ('PENDING_OTP', 'VERIFIED', 'REVOKED');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE tutor_status AS ENUM ('PENDING_REVIEW', 'APPROVED', 'SUSPENDED');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(32),
  role user_role NOT NULL DEFAULT 'STUDENT',
  date_of_birth DATE,
  is_minor BOOLEAN NOT NULL DEFAULT false,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- 2. Guardianships Table (NDPA 2023 Section 31 Compliance)
CREATE TABLE IF NOT EXISTS guardianships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  guardian_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  relationship VARCHAR(64) NOT NULL DEFAULT 'Legal Guardian',
  status guardianship_status NOT NULL DEFAULT 'PENDING_OTP',
  guardian_phone VARCHAR(32),
  guardian_email VARCHAR(255),
  otp_hash VARCHAR(255),
  otp_expires_at TIMESTAMPTZ,
  otp_attempts INT NOT NULL DEFAULT 0,
  consent_given_at TIMESTAMPTZ,
  consent_audit_log TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_student_guardian UNIQUE (student_id, guardian_id)
);

CREATE INDEX IF NOT EXISTS idx_guardianships_student ON guardianships(student_id);
CREATE INDEX IF NOT EXISTS idx_guardianships_guardian ON guardianships(guardian_id);
CREATE INDEX IF NOT EXISTS idx_guardianships_status ON guardianships(status);

-- 3. Tutor Profiles Table
CREATE TABLE IF NOT EXISTS tutor_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  slug VARCHAR(128) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  bio TEXT NOT NULL,
  teaching_approach TEXT NOT NULL,
  hourly_rate_minor_units INT NOT NULL, -- Integer kobo
  currency VARCHAR(8) NOT NULL DEFAULT 'NGN',
  rating NUMERIC(3, 2) NOT NULL DEFAULT 5.00,
  completed_lessons INT NOT NULL DEFAULT 0,
  nin_verified BOOLEAN NOT NULL DEFAULT false,
  background_checked BOOLEAN NOT NULL DEFAULT false,
  trcn_certified BOOLEAN NOT NULL DEFAULT false,
  status tutor_status NOT NULL DEFAULT 'PENDING_REVIEW',
  settlement_bank_name VARCHAR(128),
  settlement_account VARCHAR(32),
  settlement_name VARCHAR(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tutor_profiles_slug ON tutor_profiles(slug);
CREATE INDEX IF NOT EXISTS idx_tutor_profiles_status ON tutor_profiles(status);

-- 4. Sessions Table
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash VARCHAR(255) UNIQUE NOT NULL,
  ip_address VARCHAR(64),
  user_agent TEXT,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at);
