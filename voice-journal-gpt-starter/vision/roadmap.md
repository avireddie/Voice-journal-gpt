# ROADMAP

> Last updated: 2025-09-05

## Phase 1 – Stabilize & Baseline (Now → +1 week)
- Freeze **v1.2 (PipeDream)**. Document prod setup end-to-end.
- Create a **Test GPT** clone. Stage **v1.3.strict** instructions there.
- Run golden tests: skip discipline, crash recovery, weekly cadence, strict block.
**Exit:** All goldens pass in Test GPT; prod remains stable.

## Phase 2 – Infra Shift to Cloudflare (+1 → +3 weeks)
- Replace PipeDream with **Cloudflare Worker** (free tier).
- Keep Apps Script + Google Sheet as datastore.
- Add shared-secret or signed-JWT auth at the Worker.
**Exit:** Same payloads work; p50 latency ≤ 500ms after warm.

## Phase 3 – Read Path & Insights (+3 → +5 weeks)
- Add **GET endpoints** for status & trends.
- Add GPT prompts for **Weekly/Monthly Insight** (tables/charts + 2 nudges).
**Exit:** “Weekly Review” returns top 3 trends + 2 suggested actions.

## Phase 4 – Multi‑User & Sharing (+5 → +8 weeks)
- Onboarding flow: auto-create per-user Sheet + connect token.
- Self-serve setup docs for friends.
**Exit:** 3 external users onboard end-to-end in < 10 minutes each.

## Phase 5 – Productize (+8 weeks → )
- Minimal dashboard (status, streak, insights).
- Reliability: retry, backoff, idempotency keys, audit trail.
- Optional exports to Notion/Dropbox.
**Exit:** 95%+ write success; weekly retention > 60%.
