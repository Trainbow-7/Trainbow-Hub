-- Enable btree_gist extension for range and exclusion constraints
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- Enable pgvector extension for RAG document chunk embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Verification notice
DO $$
BEGIN
  RAISE NOTICE 'Trainbow HUB Database Initialized with btree_gist and pgvector extensions.';
END $$;

