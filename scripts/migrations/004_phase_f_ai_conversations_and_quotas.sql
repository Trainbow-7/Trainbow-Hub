-- ==============================================================================
-- Trainbow HUB - Database Migration 004: Phase F Socratic AI Assistant & Quotas
-- Compatible with PostgreSQL 16
-- Enforces: AI-01, AI-02, AI-03, AI-04, AI-05, AI-06, AI-08, AI-09, AI-10, AI-11, AI-12
-- ==============================================================================

-- 1. AI Message Role, Hint Level & Feedback Rating Enums
DO $$ BEGIN
    CREATE TYPE ai_role_enum AS ENUM (
        'USER',
        'ASSISTANT',
        'SYSTEM'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE ai_hint_level_enum AS ENUM (
        'HINT_1',        -- Conceptual Clue / Principle
        'HINT_2',        -- Formula / Identity Highlight
        'HINT_3',        -- Step-by-step Structure
        'FULL_SOLUTION'  -- Complete Worked Problem
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE ai_feedback_rating_enum AS ENUM (
        'HELPFUL',
        'NOT_HELPFUL',
        'REPORTED_ERROR'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- 2. AI Conversations (Threads)
CREATE TABLE IF NOT EXISTS ai_conversations (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    subject VARCHAR(64) NOT NULL DEFAULT 'Mathematics',
    model VARCHAR(64) NOT NULL DEFAULT 'gemini-1.5-flash',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_conversations_user ON ai_conversations(user_id, updated_at DESC);

-- 3. AI Messages (Conversation Turns)
CREATE TABLE IF NOT EXISTS ai_messages (
    id VARCHAR(64) PRIMARY KEY,
    conversation_id VARCHAR(64) NOT NULL REFERENCES ai_conversations(id) ON DELETE CASCADE,
    role ai_role_enum NOT NULL,
    content TEXT NOT NULL,
    hint_level ai_hint_level_enum NOT NULL DEFAULT 'HINT_1',
    verified_math_result JSONB,
    tokens_used INTEGER NOT NULL DEFAULT 0,
    latency_ms INTEGER NOT NULL DEFAULT 0,
    is_moderated BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_messages_conv ON ai_messages(conversation_id, created_at ASC);

-- 4. AI Daily Quotas & Rate Limiting (AI-05, AI-06)
CREATE TABLE IF NOT EXISTS ai_quotas (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    plan VARCHAR(32) NOT NULL DEFAULT 'FREE', -- FREE (10), PRO (100), TUTOR (UNLIMITED)
    queries_used_today INTEGER NOT NULL DEFAULT 0,
    daily_limit INTEGER NOT NULL DEFAULT 10,
    last_reset_date VARCHAR(16) NOT NULL, -- YYYY-MM-DD in WAT (Africa/Lagos)
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_quotas_user ON ai_quotas(user_id);

-- 5. AI Message Feedback & Accuracy Auditing (AI-09, AI-14)
CREATE TABLE IF NOT EXISTS ai_feedbacks (
    id VARCHAR(64) PRIMARY KEY,
    message_id VARCHAR(64) NOT NULL REFERENCES ai_messages(id) ON DELETE CASCADE,
    user_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    rating ai_feedback_rating_enum NOT NULL,
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_feedbacks_msg ON ai_feedbacks(message_id);
CREATE INDEX IF NOT EXISTS idx_ai_feedbacks_user ON ai_feedbacks(user_id);

-- 6. AI Tutor Escalations (AI-10)
CREATE TABLE IF NOT EXISTS ai_tutor_escalations (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    conversation_id VARCHAR(64) NOT NULL REFERENCES ai_conversations(id) ON DELETE CASCADE,
    problem_statement TEXT NOT NULL,
    student_attempt_summary TEXT,
    suggested_tutor_slug VARCHAR(128) NOT NULL DEFAULT 'dr-tayo-okafor',
    status VARCHAR(32) NOT NULL DEFAULT 'PENDING_BOOKING', -- PENDING_BOOKING, BOOKED, RESOLVED
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_escalations_user ON ai_tutor_escalations(user_id, status);
