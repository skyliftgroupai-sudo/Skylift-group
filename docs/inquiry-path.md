# Inquiry path — findings, what shipped, and the one detail needed

Date: 2026-10-07 · Site: https://www.skyliftgroup.com

---

## 1. The real inquiry capability (it exists)

The site does have working inquiry capability. There is no native HTML form, but
that is not the same as having no way to inquire. Four LeadConnector
integrations are live:

| What | Identifier | Where |
|---|---|---|
| Inquiry form widget | `J6Gtz1pzBFNFDvoMGV05` | `/contact` and all 18 `/services/*` pages |
| Booking calendar | `go3vHktAyk0Z9QABNphm` | `/book` |
| Chat widget | `6a4ec0f6d77eb8016d211bce` | every page (`index.html`) |
| Embed resizer | `link.msgsndr.com/js/form_embed.js` | every page (`index.html`) |

Plus direct routes on `/contact` and every service page:
`hello@skyliftgroup.com` and `+1 (725) 263-1475`.

## 2. Destination — what is and is not established

**Established:** submissions go into LeadConnector. The widget IDs above are
live in the markup and resolve against `api.leadconnectorhq.com`.

**Not established:** which LeadConnector sub-account, pipeline, inbox or
notification receives them. That is configured inside LeadConnector.

Everything available was checked:

| Route | Result |
|---|---|
| `api.leadconnectorhq.com`, `widgets.*`, `link.msgsndr.com`, `services.*` | All unreachable from the working container (connection refused) |
| Repository config — `.env`, `vercel.json`, source | No endpoint, webhook or key anywhere |
| Zapier — enabled apps | Facebook Pages, LinkedIn, Google Analytics 4. No LeadConnector |
| Zapier — catalog | LeadConnector exists but is **not enabled**, and listing its connections returns none, including shared |

No destination was assumed and none was invented.

## 3. Shipped

### Blocked-embed fallback — `/contact` and all 18 service pages

The inquiry path could dead-end silently. `leadconnectorhq.com` is on the common
ad-blocker lists, so a visitor running one saw a blank box where the page's main
call to action should be, with no indication anything was wrong.

Both embeds now detect that and show email and phone instead.

**How it detects, and why the obvious way fails.** An iframe's `onLoad` fires
even when the navigation failed — Chromium counts its own error page as a load.
The first implementation used `onLoad` and a timeout; a test with the embed
blocked proved the fallback never appeared. The working signal is a separate
`no-cors` request to the same origin: an ad blocker blocks that too and the
promise rejects. A real response resolves opaquely, and only its arrival
matters, not its status. A 6-second timer backstops a request that neither
resolves nor rejects.

## 4. Prepared, not shipped

### `src/components/InquiryForm.jsx` — short native inquiry form

Four fields: name, email, phone (optional), and what you need. Visible `<label>`
on every one, inline validation, `aria-invalid` and `aria-describedby`, focus
moved to the first invalid field, an `aria-live` region for errors, and a
keyboard-skipped honeypot for spam.

- Success appears **only** after the destination returns 2xx.
- On failure the message is preserved for a retry and email and phone are offered.
- Attribution sent: `page_path` and `referrer`. **No personal data reaches
  analytics** — the `form_submit` event carries `form_location` only.

**It renders nothing and is imported nowhere.** `src/lib/inquiry-endpoint.js`
holds an empty `INQUIRY_ENDPOINT`, and `hasInquiryEndpoint()` returning false
makes the component return `null`. A form posting to a guessed endpoint would
drop every inquiry silently, which is worse than no form at all.

## 5. Functional checks — 22 of 22 passed

Every POST was intercepted and fulfilled locally. **Nothing left the machine and
no real inquiry was created.**

```
1. labels and accessibility          2/2   every field labelled; honeypot hidden and unfocusable
2. empty submit                      4/4   3 inline errors, focus moved, aria-invalid set, nothing sent
3. bad email / short message         3/3   both rejected, nothing sent
4. destination rejects (500)         5/5   error shown, NO false success, message kept, no analytics event
5. destination accepts (200)         5/5   success only after acceptance, attribution sent, no PII in analytics
6. blocked embed                     3/3   fallback appears on /contact and on a service page
```

Also: build clean (56 pages), audit 0 critical, smoke test 110/110,
CLS 0.0000 on `/contact` and `/services/missed-call-text-back`,
sitemap URL set unchanged.

The two HIGH "thin page" flags on `/contact` and `/book` are pre-existing — their
content sits inside a cross-origin iframe the crawler counts as zero words.

## 6. The one detail needed

A URL that accepts `POST` of

```json
{ "name": "", "email": "", "phone": "", "message": "", "page_path": "", "referrer": "" }
```

and returns 2xx on acceptance. In LeadConnector this is normally an **Inbound
Webhook** trigger URL on a workflow.

It must be safe to expose in client-side code — a webhook URL, **never an API
key**. Paste it into `INQUIRY_ENDPOINT` in `src/lib/inquiry-endpoint.js` and the
form goes live with no other change.

**No real test inquiry has been sent, and none will be without specific
permission.** Once a destination exists, say the word and one test submission
will confirm it end to end — that will create a real contact and may trigger
real notifications, which is why it needs saying.
