# YOUPER — University Student Mental Health Support Platform

A mobile-first web app giving university students mood tracking, mental health education, anonymous peer support, and a fast path to professional or emergency help.

## Docs

| File | What's in it |
|---|---|
| [`PROBLEM_STATEMENT.md`](./PROBLEM_STATEMENT.md) | The problem this solves and who it's for |
| [`SRS.md`](./SRS.md) | Requirements — MVP vs. stretch goals |
| [`SYSTEM_DESIGN.md`](./SYSTEM_DESIGN.md) | Architecture, database schema, key workflows |
| [`CONTRIBUTORS.md`](./CONTRIBUTORS.md) | Who's building what |

## Stack

Next.js (installable as a PWA) + Supabase (Postgres, Auth) + IndexedDB for offline mood-entry caching. See `SYSTEM_DESIGN.md` for details — swap this out if your team prefers a different stack.

## Getting Started

1. Clone the repo
   ```bash
   git clone <repo-url>
   cd <repo-name>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Supabase project URL and anon key.

4. Run the dev server
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:3000`

## Core Demo Flow

1. Student signs up, logs a mood entry
2. Student views their mood trend over time
3. Student browses the educational library
4. Student posts anonymously in the community forum
5. Student taps "Get Help Now" for emergency contacts, or the counselor link to schedule

## Important Note

This app supplements — it does not replace — professional mental health services. Emergency contact info shown in the app must come from real, current campus/regional crisis resources.

## Status

MVP in progress — see `SRS.md` for what's built vs. stretch/future work.