# Contributors

 Task references (FR#) point back to `SRS.md`.

> **Flag:** with Supabase as the backend, "Backend" and "Database" overlap heavily in practice (schema design, RLS policies, and server-side queries are the same work). these two  are closely paired rather than treating them as fully separate lanes.

## Rogders , Latim — Frontend
- Mood entry form/UI (FR2)
- Mood history chart with trend visualization (FR3)
- Educational library UI, organized by topic (FR4)
- Anonymous forum feed + post/reply UI (FR5, FR6)
- Dark mode toggle (FR9)
- "Get Help Now" emergency contact page/modal UI (FR7)
- Counselor scheduling link/contact page UI (FR8)

## Baker ,Marvin  — Backend
- Server Actions / API logic for mood entry creation and retrieval (FR2, FR3)
- Server Actions for forum post/reply creation (FR5, FR6)
- Sign-up/login flow logic (FR1)
- "Report post" logic — flags a post for manual review
- Works closely with [Name 3] (Database) on schema-dependent logic

## Joel , Noella , Agatha  — Database
- Configure Supabase project (Auth, Postgres)
- Design and migrate `profiles`, `mood_entries`, `forum_posts`, `forum_replies` tables (see `SYSTEM_DESIGN.md`)
- Write RLS policies — a student can only see their own mood data; forum posts show only the anonymous handle, never real identity
- IndexedDB offline caching structure for recent mood entries (FR10)
- Works closely with [Name 2] (Backend) since Supabase blurs the backend/database line

## Timothy — Hosting, Deployment & QA
- Connect repo to hosting (e.g. Vercel), set environment variables, verify preview deployments
- Keep `PROBLEM_STATEMENT.md`, `SRS.md`, `SYSTEM_DESIGN.md` current as scope shifts
- Double-check emergency contact numbers/links are real and current before demo — never placeholder/fictional hotline info
- QA pass on the full core loop before submission (log mood → view trend → browse library → post in forum → reach emergency contact)
- Prepare demo script / walkthrough for judging

## Shared / Whoever has time
- Stretch features from `SRS.md`, in priority order: in-app counselor booking → automated moderation → push reminders → personalized recommendations
- Test that no real name/email ever leaks to the frontend on forum posts — anonymity is a hard requirement, not a nice-to-have

---
**Notes for the team:**
- Backend and Database should sync daily given how tightly coupled they are under Supabase
- If someone finishes early, pull from "Shared" rather than idling
