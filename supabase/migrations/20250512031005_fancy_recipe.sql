/*
  # Create enquiries table

  1. New Tables
    - `enquiries`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `course` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on `enquiries` table
    - Add policy for authenticated users to read all enquiries
    - Add policy for anon/authenticated users to insert enquiries
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  course text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read all enquiries"
  ON enquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow anyone to insert enquiries"
  ON enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);