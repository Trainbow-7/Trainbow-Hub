-- ==============================================================================
-- Trainbow HUB - Database Migration 005: Phase G Online Virtual Classroom & Safeguarding
-- ==============================================================================
-- Requirements: CL-01, CL-02, CL-03, CL-04, CL-05, CL-06
-- Standard: PostgreSQL 16 (Strict FKs, Audit Timestamps, NDPA 2023 Minor Safeguards)
-- ==============================================================================

-- 1. Classroom Session Status Enums
DO $$ BEGIN
    CREATE TYPE classroom_session_status AS ENUM (
        'SCHEDULED',
        'LIVE',
        'COMPLETED',
        'CANCELLED',
        'EXPIRED'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE attendance_status AS ENUM (
        'ATTENDED',
        'PARTIAL',
        'MISSED'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE safeguarding_severity AS ENUM (
        'LOW',
        'MEDIUM',
        'HIGH',
        'URGENT'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE safeguarding_category AS ENUM (
        'INAPPROPRIATE_BEHAVIOR',
        'HARASSMENT',
        'TECHNICAL_FAILURE',
        'SAFETY_CONCERN',
        'UNAUTHORIZED_RECORDING'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE safeguarding_status AS ENUM (
        'OPEN',
        'INVESTIGATING',
        'RESOLVED',
        'DISMISSED'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- 2. Classroom Sessions Table (CL-01, CL-02, CL-06)
CREATE TABLE IF NOT EXISTS classroom_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id VARCHAR(100) NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    room_name VARCHAR(120) NOT NULL UNIQUE,
    room_url TEXT NOT NULL,
    status classroom_session_status NOT NULL DEFAULT 'SCHEDULED',
    recording_enabled BOOLEAN NOT NULL DEFAULT FALSE, -- CL-06: Strict NDPA default false
    starts_at TIMESTAMPTZ NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL, -- CL-01: Time-bounded room access
    ended_at TIMESTAMPTZ,
    low_bandwidth_fallback_used BOOLEAN NOT NULL DEFAULT FALSE, -- CL-05
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_classroom_sessions_booking_id ON classroom_sessions(booking_id);
CREATE INDEX IF NOT EXISTS idx_classroom_sessions_status ON classroom_sessions(status);

-- 3. Classroom Attendance Logs Table (CL-03)
CREATE TABLE IF NOT EXISTS classroom_attendances (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES classroom_sessions(id) ON DELETE CASCADE,
    booking_id VARCHAR(100) NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    user_id VARCHAR(100) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL, -- 'STUDENT', 'TUTOR', 'GUARDIAN'
    joined_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    left_at TIMESTAMPTZ,
    duration_seconds INT NOT NULL DEFAULT 0,
    status attendance_status NOT NULL DEFAULT 'ATTENDED',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_classroom_attendances_session ON classroom_attendances(session_id);
CREATE INDEX IF NOT EXISTS idx_classroom_attendances_user ON classroom_attendances(user_id);

-- 4. Safeguarding & Conduct Incidents Table (CL-04)
CREATE TABLE IF NOT EXISTS safeguarding_incidents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES classroom_sessions(id) ON DELETE SET NULL,
    booking_id VARCHAR(100) REFERENCES bookings(id) ON DELETE SET NULL,
    reporter_id VARCHAR(100) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reported_user_id VARCHAR(100) REFERENCES users(id) ON DELETE SET NULL,
    severity safeguarding_severity NOT NULL DEFAULT 'HIGH',
    category safeguarding_category NOT NULL,
    description TEXT NOT NULL,
    session_timestamp_seconds INT,
    status safeguarding_status NOT NULL DEFAULT 'OPEN',
    assigned_to VARCHAR(100),
    resolution_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_safeguarding_incidents_severity ON safeguarding_incidents(severity);
CREATE INDEX IF NOT EXISTS idx_safeguarding_incidents_status ON safeguarding_incidents(status);

-- 5. Tutor Reviews Table (Post-session completion rating & review)
CREATE TABLE IF NOT EXISTS tutor_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id VARCHAR(100) NOT NULL UNIQUE REFERENCES bookings(id) ON DELETE CASCADE,
    student_id VARCHAR(100) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tutor_slug VARCHAR(100) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    is_public BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_tutor_reviews_tutor_slug ON tutor_reviews(tutor_slug);
