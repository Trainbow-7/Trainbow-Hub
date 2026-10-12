-- Phase J: Full Parent & Guardian Oversight Portal
-- Requirements: PP-01 through PP-05, NDPA 2023, Child Rights Act, ADR-011

-- 1. Tutor Progress Notes & Homework Recommendations (PP-04)
CREATE TABLE IF NOT EXISTS tutor_progress_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    tutor_slug VARCHAR(128) NOT NULL,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject VARCHAR(64) NOT NULL,
    summary TEXT NOT NULL,
    homework_assignment TEXT,
    strengths TEXT,
    areas_for_improvement TEXT,
    session_date VARCHAR(32) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Guardian Notification Preferences & Privacy Previews (PP-03)
CREATE TABLE IF NOT EXISTS guardian_notification_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guardian_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    email_alerts BOOLEAN NOT NULL DEFAULT TRUE,
    sms_alerts BOOLEAN NOT NULL DEFAULT TRUE,
    whatsapp_alerts BOOLEAN NOT NULL DEFAULT FALSE,
    generic_lockscreen_previews BOOLEAN NOT NULL DEFAULT TRUE, -- Enforced under NDPA 2023
    digest_frequency VARCHAR(32) NOT NULL DEFAULT 'REALTIME', -- REALTIME, DAILY_DIGEST, WEEKLY_SUMMARY
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_progress_notes_student ON tutor_progress_notes(student_id);
CREATE INDEX IF NOT EXISTS idx_progress_notes_booking ON tutor_progress_notes(booking_id);
CREATE INDEX IF NOT EXISTS idx_guardian_notif_guardian ON guardian_notification_preferences(guardian_id);
