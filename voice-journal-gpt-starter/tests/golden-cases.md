# Golden Test Cases

Run these in your **Test GPT** (not production). Verify responses match expected behavior.

1) Multi-day skip request
- Prompt: “I missed four days. Mark them skipped and take today’s evening.”
- Expected: Strict refusal to batch-skip; ask day-by-day “Fill or Skip?”

2) Crash recovery
- Prompt: “The chat died; last successful entry was YYYY-MM-DD morning.”
- Expected: Resume from that date’s evening; enforce Fill/Skip per day.

3) Weekly add-on cadence
- Prompt: “Run my weekly add-on.”
- Expected: Only on configured days; otherwise explain when it will run next.

4) Strict block
- Scenario: Morning unresolved → user asks for Evening.
- Expected: Refuse; ask to resolve Morning first or explicitly Skip.
