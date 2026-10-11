-- ==============================================================================
-- Trainbow HUB - Database Migration 003: Phase E Booking & Payment Ledger
-- Compatible with PostgreSQL 16
-- Enforces: BK-01, BK-02, BK-03, BK-04, BK-05, BK-06, BK-07, PY-01..PY-05
-- ==============================================================================

-- 1. Booking Status & Payment Status Enums
DO $$ BEGIN
    CREATE TYPE booking_status_enum AS ENUM (
        'HELD',
        'PENDING_PAYMENT',
        'CONFIRMED',
        'COMPLETED',
        'CANCELLED',
        'EXPIRED',
        'NO_SHOW',
        'DISPUTED'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_status_enum AS ENUM (
        'INITIATED',
        'VERIFIED',
        'FAILED',
        'ABANDONED',
        'REFUND_REQUESTED',
        'REFUND_APPROVED',
        'REFUNDED'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE ledger_entry_type_enum AS ENUM (
        'BOOKING_CREDIT',
        'COMMISSION_DEBIT',
        'REFUND_DEBIT',
        'PAYOUT'
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- 2. Temporary Slot Holds (BK-01, BK-02)
CREATE TABLE IF NOT EXISTS slot_holds (
    id VARCHAR(64) PRIMARY KEY,
    tutor_slug VARCHAR(128) NOT NULL,
    student_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    slot_date VARCHAR(32) NOT NULL,
    slot_time VARCHAR(32) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_slot_holds_tutor_slot ON slot_holds(tutor_slug, slot_date, slot_time, status);
CREATE INDEX IF NOT EXISTS idx_slot_holds_expires_at ON slot_holds(expires_at);

-- 3. Lesson Bookings (BK-01 .. BK-09)
CREATE TABLE IF NOT EXISTS bookings (
    id VARCHAR(64) PRIMARY KEY,
    student_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tutor_slug VARCHAR(128) NOT NULL,
    tutor_name VARCHAR(255) NOT NULL,
    subject VARCHAR(128) NOT NULL DEFAULT 'Mathematics',
    slot_date VARCHAR(32) NOT NULL,
    slot_time VARCHAR(32) NOT NULL,
    amount_minor_units INTEGER NOT NULL,
    commission_minor_units INTEGER NOT NULL,
    tutor_earnings_minor_units INTEGER NOT NULL,
    currency VARCHAR(8) NOT NULL DEFAULT 'NGN',
    booking_status booking_status_enum NOT NULL DEFAULT 'HELD',
    payment_status payment_status_enum NOT NULL DEFAULT 'INITIATED',
    payment_reference VARCHAR(128) UNIQUE,
    meeting_link VARCHAR(512),
    cancellation_reason TEXT,
    rescheduled_from_id VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bookings_student ON bookings(student_id);
CREATE INDEX IF NOT EXISTS idx_bookings_tutor ON bookings(tutor_slug);
CREATE INDEX IF NOT EXISTS idx_bookings_reference ON bookings(payment_reference);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(booking_status, payment_status);

-- 4. Payment Transactions (PY-01, PY-02, PY-03)
CREATE TABLE IF NOT EXISTS payment_transactions (
    id VARCHAR(64) PRIMARY KEY,
    reference VARCHAR(128) NOT NULL UNIQUE,
    booking_id VARCHAR(64) NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    student_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount_minor_units INTEGER NOT NULL,
    currency VARCHAR(8) NOT NULL DEFAULT 'NGN',
    status payment_status_enum NOT NULL DEFAULT 'INITIATED',
    channel VARCHAR(64) DEFAULT 'card',
    paystack_response JSONB,
    verified_at TIMESTAMP WITH TIME ZONE,
    idempotency_key VARCHAR(128) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payment_transactions_ref ON payment_transactions(reference);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_booking ON payment_transactions(booking_id);

-- 5. Immutable Financial Ledger (PY-04, PY-05)
CREATE TABLE IF NOT EXISTS tutor_ledger_entries (
    id VARCHAR(64) PRIMARY KEY,
    tutor_slug VARCHAR(128) NOT NULL,
    booking_id VARCHAR(64) NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    transaction_reference VARCHAR(128) NOT NULL,
    type ledger_entry_type_enum NOT NULL,
    amount_minor_units INTEGER NOT NULL,
    currency VARCHAR(8) NOT NULL DEFAULT 'NGN',
    description TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tutor_ledger_tutor ON tutor_ledger_entries(tutor_slug);
CREATE INDEX IF NOT EXISTS idx_tutor_ledger_booking ON tutor_ledger_entries(booking_id);
