# Pipeline v1.3 – Cloudflare Worker

**Goal:** Replace PipeDream with a free Cloudflare Worker that forwards to Apps Script.

**Flow:** Custom GPT Action → Cloudflare Worker (auth + routing) → Apps Script Web App → Google Sheet

- Auth: Shared secret or signed JWT in headers/body
- Endpoints:
  - POST /entry  (write entry)
  - POST /status (read daily rollup)
  - GET  /health

## Example Worker (TypeScript-like)
```js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ok:true, service:'voice-journal'}), {headers:{'content-type':'application/json'}});
    }

    if (request.method === 'POST' && (url.pathname === '/entry' || url.pathname === '/status')) {
      const body = await request.json();
      // TODO: verify shared secret: body.token === env.SHARED_SECRET
      const target = env.APPS_SCRIPT_URL + '?path=' + url.pathname.slice(1);
      const resp = await fetch(target, { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(body) });
      return new Response(await resp.text(), {status: resp.status, headers:{'content-type':'application/json'}});
    }

    return new Response(JSON.stringify({ok:false, error:'not_found'}), {status:404, headers:{'content-type':'application/json'}});
  }
}
```
