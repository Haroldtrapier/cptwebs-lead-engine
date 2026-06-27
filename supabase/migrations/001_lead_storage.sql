create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  lead_type text not null check (lead_type in ('church','small_business')),
  category text,
  address text,
  city text,
  state text,
  phone text,
  website text,
  contact_url text,
  email text,
  google_rating numeric,
  website_issues text[] not null default '{}',
  score integer not null default 0,
  priority text not null default 'Low' check (priority in ('Hot','Strong','Possible','Low')),
  recommended_offer text,
  outreach_angle text,
  status text not null default 'New' check (status in ('New','Contacted','Replied','Booked','Closed')),
  source text default 'manual',
  notes text,
  last_contacted_at timestamptz,
  next_follow_up_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lead_audits (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  audit_summary text,
  checks jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.outreach_messages (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  channel text not null check (channel in ('email','sms','phone','followup','audit')),
  subject text,
  body text not null,
  status text not null default 'Draft' check (status in ('Draft','Reviewed','Sent','Archived')),
  created_at timestamptz not null default now()
);

create index if not exists leads_city_state_idx on public.leads(city,state);
create index if not exists leads_priority_idx on public.leads(priority);
create index if not exists leads_status_idx on public.leads(status);
create index if not exists outreach_messages_lead_id_idx on public.outreach_messages(lead_id);

alter table public.leads enable row level security;
alter table public.lead_audits enable row level security;
alter table public.outreach_messages enable row level security;
