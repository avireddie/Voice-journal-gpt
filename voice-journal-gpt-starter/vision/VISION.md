# VISION

**North Star (12–18 months):**  
A free (or near-zero cost), privacy-safe Voice Journal that enforces a daily habit, surfaces weekly/monthly insights, and nudges better decisions — easy enough for non-technical friends to adopt.

**Core Principles**
- Prompt-as-code: repo is source of truth; GPT is just the deploy target.
- Free infra bias: Cloudflare Worker + Google Apps Script.
- Portable data: Google Sheets as default store, exportable elsewhere.
- Human-first UX: one question at a time; explicit Fill/Skip; crash-resilient.

**Value Ladder**
1) Capture → 2) Clean → 3) Summarize → 4) Insight → 5) Nudge → 6) Share

**Risks / Assumptions**
- Apps Script quotas; Cloudflare egress rules; Custom GPT Action limits.
- Strict mode needs smart recovery to avoid user fatigue.

**Success Metrics**
- 21-day streak completion %, weekly insight open rate, % entries with actionables,
  time-to-first-setup for a new user, and weekly retention.
