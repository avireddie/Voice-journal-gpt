import fetch from "node-fetch";

export default defineComponent({
  async run({ steps, $ }) {
    // Grab the raw JSON body from webhook trigger
    const data = steps.trigger.event.body;

    // Forward JSON directly
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzaGHxQpgOxAhsyMk0VL_1_kXrki9_kIE44p1luAx_yOkMpgZYvJ1aLbFqgdTFC-WvV/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),   // raw JSON
        redirect: "follow"            // follow Google redirects
      }
    );

    // Try to parse JSON response, but fallback to text
    const text = await res.text();
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { ok: true, raw: text };
    }

    return parsed;
  },
});
