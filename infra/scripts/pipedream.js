import fetch from "node-fetch";

export default defineComponent({
  async run({ steps, $ }) {
    // Grab the raw JSON body from webhook trigger
    const data = steps.trigger.event.body;

    // Forward JSON directly
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxNsPhusT13DW_AK3YnR4E4oZi5gf06kzBPD9vGsOTD9Ra8Eko1FDRG8OoqHOpm5zFD/exec",
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
