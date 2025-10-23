// Apps Script stub (see your existing working script; this is just a reminder file).
// Ensure doPost/doGet, shared secret auth, and rollup logic exist.
const SHEET_ID = "1QmHu1QzSjWolV0taAqDe7eobVWu6fO55yyfgfU_gbAc"; // <-- replace with your Google Sheet ID
const SHEET_NAME = "Sheet1"; // change if your tab name differs
const TZ = "Asia/Kolkata";
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD

function doPost(e) {
    try {
      const body = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
      const day = body.day;
      if (!day || !DAY_RE.test(day)) {
        return ContentService
          .createTextOutput(JSON.stringify({ ok: false, error: "Missing or invalid `day` (YYYY-MM-DD)" }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      const row = [
        day,
        body.grateful_for || "",
        body.will_make_great || "",
        body.affirmations || "",
        body.amazing_three || "",
        body.strengths || "",
        body.could_be_better || "",
        body.full_day_summary || "",
        body.key_reflections || ""
      ];
      const hasData = row.slice(1).some(value => value && value.trim() !== "");
      if (!hasData) {
        return ContentService.createTextOutput(JSON.stringify({ ok: true, skipped: true }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      const sh = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
      sh.appendRow(row);
      return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  function doGet(e) {
    try {
      const p = e.parameter || {};
      const day = p.day;
      if (!day || !DAY_RE.test(day)) {
        return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "Missing or invalid `day` (YYYY-MM-DD)" }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      const row = [
        day,
        p.grateful_for || "",
        p.will_make_great || "",
        p.affirmations || "",
        p.amazing_three || "",
        p.strengths || "",
        p.could_be_better || "",
        p.full_day_summary || "",
        p.key_reflections || ""
      ];
      const hasData = row.slice(1).some(value => value && value.trim() !== "");
      if (!hasData) {
        return ContentService.createTextOutput(JSON.stringify({ ok: true, skipped: true }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      const sh = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
      sh.appendRow(row);
      return ContentService.createTextOutput(JSON.stringify({ ok: true }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  