-- Phase K: Trainbow HUB Music (Theory, Instruments, Voice & Repertoire)
-- Requirements: MU-01 through MU-05, ADR-012

-- 1. Music Practice Logs (MU-03)
CREATE TABLE IF NOT EXISTS music_practice_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    instrument VARCHAR(64) NOT NULL,
    duration_minutes INT NOT NULL,
    pieces_practiced TEXT NOT NULL,
    tempo_bpm INT,
    notes TEXT,
    practiced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Licensed Sheet Music & Repertoire Materials (MU-04)
CREATE TABLE IF NOT EXISTS music_licensed_materials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(256) NOT NULL,
    composer VARCHAR(128) NOT NULL,
    instrument VARCHAR(64) NOT NULL,
    license_type VARCHAR(64) NOT NULL, -- ABRSM_LICENSED, MUSON_CURRICULUM, PUBLIC_DOMAIN, TRAINBOW_ORIGINAL, COPYRIGHT_COMMISSIONED
    license_number VARCHAR(128) NOT NULL,
    publisher VARCHAR(128) NOT NULL,
    copyright_notice TEXT NOT NULL,
    score_pdf_url TEXT NOT NULL,
    audio_sample_url TEXT,
    grade_level VARCHAR(64) NOT NULL,
    is_licensed BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_practice_logs_student ON music_practice_logs(student_id);
CREATE INDEX IF NOT EXISTS idx_licensed_materials_instrument ON music_licensed_materials(instrument);
CREATE INDEX IF NOT EXISTS idx_licensed_materials_license ON music_licensed_materials(license_type);
