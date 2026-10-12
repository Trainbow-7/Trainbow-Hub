-- Phase I: Multi-Subject Registry, Dynamic Curriculum & AI Subject Governance
-- Requirements: SB-01 through SB-09, ADR-010

-- 1. Create Enums for Subject lifecycle and delivery formats
CREATE TYPE subject_status AS ENUM ('DRAFT', 'ACTIVE', 'RETIRED');
CREATE TYPE subject_delivery_format AS ENUM ('ONE_ON_ONE_ONLINE', 'SELF_PACED_ACADEMY', 'HYBRID');
CREATE TYPE subject_ai_eval_status AS ENUM ('NOT_STARTED', 'IN_EVALUATION', 'PASSED', 'FAILED');

-- 2. Create Subjects Table (SB-01, SB-05, SB-07, SB-09)
CREATE TABLE IF NOT EXISTS subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(128) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(64) NOT NULL DEFAULT 'General',
    levels TEXT[] NOT NULL DEFAULT '{"JSS 1-3", "SSS 1-3", "WAEC/JAMB"}',
    delivery_formats TEXT[] NOT NULL DEFAULT '{"ONE_ON_ONE_ONLINE", "SELF_PACED_ACADEMY"}',
    status subject_status NOT NULL DEFAULT 'DRAFT',
    icon VARCHAR(64) NOT NULL DEFAULT 'BookOpen',
    color VARCHAR(32) NOT NULL DEFAULT 'purple',
    pricing_tier_minor_units INTEGER NOT NULL DEFAULT 500000, -- ₦5,000 base
    commission_rate_percent NUMERIC(5,2) NOT NULL DEFAULT 15.00, -- SB-09: Per-subject commission override
    ai_enabled BOOLEAN NOT NULL DEFAULT FALSE, -- SB-05: AI toggle per subject
    ai_evaluation_status subject_ai_eval_status NOT NULL DEFAULT 'NOT_STARTED', -- SB-06: Gate
    ai_evaluation_score NUMERIC(5,2), -- Benchmark percentage (e.g. 92.5%)
    ai_evaluation_signed_by VARCHAR(128),
    ai_evaluation_signed_at TIMESTAMPTZ,
    ai_grounding_summary TEXT,
    ai_verification_method VARCHAR(64) NOT NULL DEFAULT 'SYMBOLIC_SOLVER', -- SB-07
    ai_system_prompt TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Create Subject AI Evaluations Table (SB-06, SB-07)
CREATE TABLE IF NOT EXISTS subject_ai_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_slug VARCHAR(64) NOT NULL REFERENCES subjects(slug) ON DELETE CASCADE,
    evaluator_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    rubric_score NUMERIC(5,2) NOT NULL,
    passed BOOLEAN NOT NULL DEFAULT FALSE,
    unsafe_content_blocked_count INTEGER NOT NULL DEFAULT 0,
    grounding_coverage_percent NUMERIC(5,2) NOT NULL DEFAULT 0,
    notes TEXT,
    sign_off_signature VARCHAR(256) NOT NULL,
    evaluated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Create Tutor Subject Qualifications Table (SB-03)
CREATE TABLE IF NOT EXISTS tutor_subject_qualifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tutor_slug VARCHAR(128) NOT NULL,
    subject_slug VARCHAR(64) NOT NULL REFERENCES subjects(slug) ON DELETE CASCADE,
    levels TEXT[] NOT NULL DEFAULT '{"JSS 1-3", "SSS 1-3"}',
    credential_evidence_url TEXT NOT NULL,
    credential_type VARCHAR(64) NOT NULL DEFAULT 'UNIVERSITY_DEGREE',
    status VARCHAR(32) NOT NULL DEFAULT 'PENDING', -- PENDING, APPROVED, REJECTED
    verified_by_admin_id UUID REFERENCES users(id) ON DELETE SET NULL,
    verified_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(tutor_slug, subject_slug)
);

-- 5. Create Content Manager Subject Assignments Table (SB-02)
CREATE TABLE IF NOT EXISTS content_manager_subject_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject_slug VARCHAR(64) NOT NULL REFERENCES subjects(slug) ON DELETE CASCADE,
    assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, subject_slug)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_subjects_status ON subjects(status);
CREATE INDEX IF NOT EXISTS idx_subjects_category ON subjects(category);
CREATE INDEX IF NOT EXISTS idx_tutor_qualifications_subject ON tutor_subject_qualifications(subject_slug, status);
CREATE INDEX IF NOT EXISTS idx_ai_evaluations_subject ON subject_ai_evaluations(subject_slug);
