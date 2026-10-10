-- Enable btree_gist extension for range and exclusion constraints
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- Verification notice
DO $$
BEGIN
  RAISE NOTICE 'Trainbow HUB Database Initialized with btree_gist extension.';
END $$;
