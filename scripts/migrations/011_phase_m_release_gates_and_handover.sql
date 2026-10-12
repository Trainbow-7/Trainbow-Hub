-- ============================================================================
-- Trainbow HUB — Phase M Migration: Release Gates, Backups & Privacy Purge
-- Architecture Decision Record: ADR-014
-- Covers PRD Section 8, Section 9 (Release Gates 1-8, Handover Items 1-12)
-- ============================================================================

CREATE TABLE IF NOT EXISTS release_gate_evaluations (
    id TEXT PRIMARY KEY,
    gate_number INTEGER NOT NULL,
    gate_name TEXT NOT NULL,
    category TEXT NOT NULL,
    passed BOOLEAN NOT NULL DEFAULT 0,
    score_percentage REAL NOT NULL DEFAULT 100.0,
    evidence_payload TEXT, -- JSON summary of test scenarios and checks
    evaluated_by TEXT NOT NULL DEFAULT 'SYSTEM_AUTOMATION',
    evaluated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS system_backups (
    id TEXT PRIMARY KEY,
    backup_type TEXT NOT NULL DEFAULT 'SCHEDULED_DAILY', -- SCHEDULED_DAILY, MANUAL_ADMIN, PRE_DEPLOYMENT
    snapshot_filename TEXT NOT NULL,
    record_counts TEXT NOT NULL, -- JSON object of table record counts
    checksum TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'VERIFIED', -- PENDING, VERIFIED, FAILED, RESTORED
    data_scrubbed BOOLEAN NOT NULL DEFAULT 1, -- NDPA 2023 privacy scrubbing flag
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    restored_at DATETIME
);

CREATE TABLE IF NOT EXISTS privacy_purge_requests (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    requested_by_role TEXT NOT NULL DEFAULT 'STUDENT',
    retention_category TEXT NOT NULL DEFAULT 'AI_CONVERSATIONS_90D', -- AI_CONVERSATIONS_90D, RIGHT_TO_BE_FORGOTTEN, REVOKED_GUARDIAN
    records_purged INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'COMPLETED', -- PENDING, COMPLETED, REJECTED
    executed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    audit_notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_release_gate_evaluations_number ON release_gate_evaluations(gate_number);
CREATE INDEX IF NOT EXISTS idx_system_backups_status ON system_backups(status);
CREATE INDEX IF NOT EXISTS idx_privacy_purge_user ON privacy_purge_requests(user_id);
