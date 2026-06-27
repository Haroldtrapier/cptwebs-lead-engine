# CPTWEBS Lead Engine Supabase Setup

This project now includes a safe Supabase foundation for lead storage.

## 1. Create or choose a Supabase project

Use a dedicated project for CPTWEBS Lead Engine.

## 2. Run the migration

Open Supabase SQL Editor and run:

```sql
-- supabase/migrations/001_lead_storage.sql
```

This creates:

- leads
- lead_audits
- outreach_messages

## 3. Optional seed data

Run `supabase/seed.sql` if you want two sample rows in the database.

## 4. Add Vercel environment variables

Add these to the Vercel project:

```text
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do not commit service-role keys.

## 5. Current production behavior

The app still falls back to mock leads when Supabase env vars are missing. This keeps production safe until the database is fully connected.

## 6. Next build step

After env vars are added, update the live pages to call `getLeads()` from `lib/leadRepository.ts` instead of using `mockLeads` directly.
