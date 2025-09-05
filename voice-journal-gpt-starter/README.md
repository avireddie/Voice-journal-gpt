# Voice Journal GPT – Prompt-as-Code Repo

A clean, versioned scaffold for your **Voice Journal** system:
- **Instructions** (prompt-as-code) for your Custom GPT.
- **Infrastructure** (PipeDream → Cloudflare → Apps Script).
- **Vision & roadmap** so you can ship like a product team.
- **Tests** (golden prompts) to prevent regressions.

## Quickstart
1. Create a GitHub repo named `voice-journal-gpt` (steps in this README below).
2. Download the starter zip I gave you, unzip it, and upload the **entire folder** to GitHub (drag-and-drop works).
3. Paste your current prod instructions into `instructions/instruction.v1.2.gentle.md` and commit.
4. Edit `instructions/instruction.v1.3.strict.md` for your strict upgrade. Use the tests in `/tests` to validate in your **Test GPT**.
5. When happy, paste v1.3 into your production Custom GPT and tag a release in `/releases/CHANGELOG.md`.

## How to create a GitHub repo (web, no CLI)
1. Go to https://github.com → **Sign up / Sign in**.
2. Click the **+** (top-right) → **New repository**.
3. **Repository name:** `voice-journal-gpt` (or any name you like).  
   **Visibility:** Private (recommended) or Public.
4. Leave “Initialize this repository with a README” **unchecked** (we’ll upload our own files).
5. Click **Create repository**.
6. On the new repo page, click **“uploading an existing file”** or **Add file → Upload files**.
7. Drag the **entire unzipped folder** into the browser. GitHub supports folder drag‑and‑drop.
8. Scroll down, add a short commit message like “Initial commit”, and click **Commit changes**.
9. Done. You now have your versioned repo.

## Semantic Versioning Strategy
- **Instructions**: `instruction.vX.Y.MODE.md` (e.g., v1.2.gentle, v1.3.strict)
- **Infra**: `pipeline.vX.Y.stack.md` (e.g., v1.2.pipedream, v1.3.cloudflare)
- Releases are combinations, e.g. **Release 1.3.0 = instruction v1.3.strict + pipeline v1.3.cloudflare**

## Hash / Drift Check (optional)
On macOS/Linux, you can compute a SHA‑256 for an instruction file:
```bash
shasum -a 256 instructions/instruction.v1.3.strict.md
```
Paste the result into the `checksum:` field in that file’s front‑matter.

## Next
- Edit the files under `/vision` to reflect your North Star and phases.
- Use `/tests` prompts inside a **Test GPT** (clone of your prod GPT) so you don’t pollute your real sheet.
