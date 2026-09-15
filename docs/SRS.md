# Software Requirements Specification (SRS)

## 1. Purpose & Scope

Defines requirements for YOUPER, a mobile-first web platform giving university students mood tracking, mental health education, anonymous peer support, and a path to professional/emergency help. This SRS scopes a buildable MVP core loop first, with additional features tracked as stretch/future work.

## 2. User Roles

| Role | Description |
|---|---|
| Student | Logs mood, reads resources, posts/reads in the forum anonymously, books counselor sessions |
| Counselor / Campus Staff | Receives booking requests, manages availability (stretch — MVP can start with an external booking link/contact instead) |
| Moderator | Reviews flagged forum posts (stretch, or handled manually by campus staff in MVP) |

## 3. Functional Requirements — MVP (must-have)

| ID | Requirement |
|---|---|
| FR1 | Student can sign up / log in |
| FR2 | Student can log a daily mood entry (e.g. scale or emoji-based selection, optional note) |
| FR3 | Student can view their mood history as a trend chart over time |
| FR4 | Student can browse an educational library organized by topic (mindfulness, anxiety, stress, depression, meditation, overwhelm) |
| FR5 | Student can create an anonymous forum post (no real name shown) |
| FR6 | Student can read and reply to forum posts anonymously |
| FR7 | Student can access one-tap emergency support contact info (hotline number/link) from anywhere in the app |
| FR8 | Student can access a counselor scheduling link/contact (can be an external calendar link for MVP — a full in-app booking system is stretch) |
| FR9 | App supports dark mode |
| FR10 | Mood entries persist locally so a student can view recent history even offline |

## 4. Functional Requirements — Stretch

- In-app counselor scheduling with real-time availability
- Automated moderation / flagging of concerning forum content, with escalation to campus staff
- Push notifications / reminders to log mood
- Personalized resource recommendations based on mood trends
- Full offline mode (not just cached recent data, but usable without connectivity)

## 5. Non-Functional Requirements

- **Privacy** — forum posts must not expose the student's real identity; mood data is private to the student by default
- **Accessibility** — dark mode, readable typography, mobile-first responsive layout
- **Availability** — emergency support info must load fast and work even on a poor connection (static, cached content, not dependent on a live API call)
- **Data safety** — no mood or forum data should be publicly queryable without authorization
- **Performance** — mood chart and library should load quickly on typical campus wifi/mobile data

## 6. Core Use Cases

**UC1 — Log a mood entry**
- Actor: Student
- Steps: open app → select mood → optionally add a note → save
- Postcondition: entry stored, visible in mood history

**UC2 — View mood trends**
- Actor: Student
- Steps: open "Mood History" → view chart over selected time range
- Postcondition: student sees a visual pattern of mood over time

**UC3 — Post anonymously in the forum**
- Actor: Student
- Steps: open forum → new post → write content → submit
- Postcondition: post appears in the forum feed, attributed to an anonymous handle, not the student's real identity

**UC4 — Reach emergency support**
- Actor: Student
- Steps: tap a persistent "Get Help Now" button/icon → see hotline number(s) and/or crisis text line
- Postcondition: student can call/text immediately, no login or navigation required

**UC5 — Reach a counselor**
- Actor: Student
- Steps: open "Book a Counselor" → follow link/contact info to schedule
- Postcondition: student has a way to reach a counselor without needing to call during office hours

## 7. Constraints & Assumptions

- MVP does not replace professional mental health services — it supplements them and provides a faster path to reach them
- Emergency contact numbers must be sourced from real, current campus/regional crisis resources, not invented
- Anonymous forum in MVP does not include automated moderation — a manual reporting mechanism (e.g. a "report" button that notifies an admin) should exist even if a full moderation system is stretch
- No real-time chat/counseling within the app in MVP — it links out to existing scheduling/crisis channels