-- ==============================================================================
-- Trainbow HUB - Database Migration 006 (PostgreSQL 16)
-- Phase H: Administration, Safeguarding Triage & Financial Operations Hub
-- Requirements: AD-01 through AD-06, AD-07, PY-07, PY-08, PY-09
-- ==============================================================================

-- 1. Create Enums for Admin Operations
DO $$ BEGIN
  CREATE TYPE payout_status AS ENUM ('PENDING', 'PROCESSED', 'REJECTED');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE reconciliation_status AS ENUM ('BALANCED', 'FLAGGED_FOR_REVIEW');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE alert_severity AS ENUM ('INFO', 'WARNING', 'CRITICAL');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE alert_status AS ENUM ('ACTIVE', 'ACKNOWLEDGED', 'RESOLVED');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 2. Admin Audit Logs (AD-07, US-04, AD-01)
-- Append-only immutable log of all privileged administrative actions
CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id VARCHAR(64) PRIMARY KEY,
  admin_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  action VARCHAR(100) NOT NULL,
  target_type VARCHAR(50) NOT NULL,
  target_id VARCHAR(64) NOT NULL,
  before_state JSONB,
  after_state JSONB,
  ip_address VARCHAR(45),
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_target ON admin_audit_logs(target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_admin_id ON admin_audit_logs(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_created_at ON admin_audit_logs(created_at DESC);

-- 3. Tutor Payouts (PY-08)
-- Tracks manual and automated tutor payout dispatches against verified ledger balances
CREATE TABLE IF NOT EXISTS tutor_payouts (
  id VARCHAR(64) PRIMARY KEY,
  tutor_slug VARCHAR(120) NOT NULL,
  tutor_user_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  amount_minor_units BIGINT NOT NULL CHECK (amount_minor_units > 0),
  currency VARCHAR(3) NOT NULL DEFAULT 'NGN',
  bank_name VARCHAR(100) NOT NULL,
  account_number VARCHAR(20) NOT NULL,
  account_name VARCHAR(150) NOT NULL,
  status payout_status NOT NULL DEFAULT 'PENDING',
  processed_by_admin_id VARCHAR(64) REFERENCES users(id) ON DELETE SET NULL,
  notes TEXT,
  reference VARCHAR(100) UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_tutor_payouts_tutor_slug ON tutor_payouts(tutor_slug);
CREATE INDEX IF NOT EXISTS idx_tutor_payouts_status ON tutor_payouts(status);

-- 4. Financial Reconciliation Reports (PY-07)
-- Daily reconciliation against Paystack settlement dumps and internal transaction logs
CREATE TABLE IF NOT EXISTS reconciliation_reports (
  id VARCHAR(64) PRIMARY KEY,
  report_date DATE NOT NULL,
  provider VARCHAR(50) NOT NULL DEFAULT 'PAYSTACK',
  total_settled_minor_units BIGINT NOT NULL,
  matched_count INT NOT NULL DEFAULT 0,
  unmatched_count INT NOT NULL DEFAULT 0,
  discrepancy_minor_units BIGINT NOT NULL DEFAULT 0,
  status reconciliation_status NOT NULL DEFAULT 'BALANCED',
  reconciled_by VARCHAR(64) REFERENCES users(id) ON DELETE SET NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_reconciliation_date_provider ON reconciliation_reports(report_date, provider);

-- 5. Operational Alerts & System Health (AD-06)
-- Operational notification stream for payment anomalies, queue delays, and SLA deadlines
CREATE TABLE IF NOT EXISTS operational_alerts (
  id VARCHAR(64) PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  severity alert_severity NOT NULL DEFAULT 'INFO',
  title VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  status alert_status NOT NULL DEFAULT 'ACTIVE',
  acknowledged_by VARCHAR(64) REFERENCES users(id) ON DELETE SET NULL,
  acknowledged_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_operational_alerts_status ON operational_alerts(status, severity);
