# Sky Lift Group — SEO activity log

Persistent record for https://www.skyliftgroup.com. Newest entry first.

**Where things live**
- This log — `docs/seo-activity-log.md` (the agreed records folder is `docs/` in
  this repository; there is no desktop or external drive reachable from the
  working environment, and nothing is saved to one).
- Master engagement record — `docs/seo-engagement-report.md`
- Keyword map — `docs/keyword-map.md`
- Directory profile copy — `docs/directory-profiles.md`
- Outreach plan — `docs/phase-6-profiles-and-outreach.md`

**Note on this file's start date.** It was created on 2026-10-07. No activity
log existed before that, so entries for earlier work are not reconstructed here;
the git history and `seo-engagement-report.md` are the record for those.

---

## 2026-10-09 — Second /contact defect: the fallback replaced the form after 6s

### What the owner saw

Screenshot of `/contact` in Incognito after the blank-page fix: the page renders
correctly — nav, hero, and all four contact cards — but the right-hand panel
shows the blocked-embed fallback, "The form could not load.", instead of the
form. So the React fix held and a second, separate defect was underneath it.

### Cause — confirmed in code, not inferred from the screenshot

Mine, in `src/pages/Contact.jsx`. The reachability probe attached only a
rejection handler:

```js
fetch(CONTACT_FORM_SRC, { mode: "no-cors", cache: "no-store" }).catch(fail);
const t = setTimeout(fail, 6000);          // never cleared on success
```

`cancelled` is only set on unmount, so the timer fired on **every** visit
regardless of what the probe did. The form loaded, and six seconds later the
fallback replaced it. It was not an extension, not a block, and not a false
positive from the probe: the backstop was behaving as a deadline.

`ServiceInquiryForm.jsx` — the other 22 pages — never had this. It settles
through a tri-state (`pending` → `loaded` | `failed`) where the timer's write is
ignored once the state has left `pending`, so success already disarmed it. Only
`/contact` was affected.

### Fix

`Contact.jsx` now settles once: a `settled` flag, a success handler that clears
the timer, and `.then(succeed, fail)` in place of a bare `.catch`. The fallback
shows only on a genuine rejection (ad blocker, DNS failure, dropped connection)
or on a probe that never settles at all. Both states still occupy the same
923px box, so CLS stays at 0 either way.

### Why fourteen tests missed it, again

`scripts/embed-adoption-test.mjs` — the regression test written for the
blank-page incident the same day — **ran against this bug and passed.** It
asserted `root.innerText.length > 200`. The fallback is text, so the page was
never blank and the assertion held while the form was gone. The test measured
the wrong thing: that something rendered, not that the right thing rendered.

The test now asserts both directions, and runs each route twice:

| probe | assertion |
| --- | --- |
| resolves (`200`) | the embed iframe is still mounted past the backstop, and the fallback is **not** shown |
| rejects (blocked) | the fallback **is** shown and the iframe is gone |

Validated both ways before shipping. Against the build that was live, the new
assertions fail on `/contact` and pass on `/services/missed-call-text-back`,
which is exactly the defect's shape:

```
FAIL  ok  /contact   embed still mounted past the backstop (0 iframe)
FAIL  ok  /contact   fallback not shown while the probe is reachable
PASS  ok  /services/missed-call-text-back   embed still mounted past the backstop (1 iframe)
```

After the fix: 14/14.

The iframe's own request is still aborted in the test — this container has no
egress to `leadconnectorhq.com` — so "the embed stays" is asserted on the
element being in the DOM, not on the form inside it having rendered. That limit
is stated in the test file itself.

### Evidence

- Build: 56 prerendered pages.
- `scripts/embed-adoption-test.mjs`: 14/14 (was 12/14 on the live build).
- `scripts/audit-seo.mjs`: 0 critical, 2 high — both the pre-existing "thin"
  flags on `/book` and `/contact`, which are embed-driven pages by design.
- `scripts/smoke-test.mjs` across all 34 static routes × 2 viewports: 68/68
  clean, JSON-LD valid on every one.

### Changed

- `src/pages/Contact.jsx` — probe settles once.
- `scripts/embed-adoption-test.mjs` — asserts the embed survives, not just that
  the page is non-empty.

No URL changed. No redirect added. No content changed.

### Confirmed by the owner

2026-10-09, after `a2a02ef` deployed: the form renders on `/contact` and stays
there. Both /contact defects are closed.

### Next step

Still open and unchanged: `book_call_click` needs creating via
**Admin → Key events → New key event**; the LeadConnector postMessage
signatures in `src/lib/conversions.js` remain UNVERIFIED pending one real
submission; indexing not yet requested for the three trade pages; the `/work`
counters still await the owner's decision.

---

## 2026-10-09 — INCIDENT: /contact blanked in production, fixed

### What happened

After `61edf3c`, `/contact` rendered as a blank white page on the live site.
Reported by the owner with a screenshot: correct tab title, LeadConnector chat
widget drawing, nothing else.

### Cause — confirmed, not inferred

The `data-*` attributes copied from the owner's embed snippet are exactly what
`form_embed.js` scans for. With them present it adopts the iframe and mutates a
node React is actively reconciling. The next React render then hits a DOM it no
longer recognises and unmounts the entire tree. The chat widget survives because
it owns its own container — which is precisely the pattern in the screenshot.

Reproduced locally against the broken build with a stand-in for `form_embed.js`:

```
/contact   root innerText 0 chars, 2 frames adopted
           Failed to execute 'removeChild' on 'Node':
           The node to be removed is not a child of this node.
```

The service pages did not blank — one frame adopted, tree intact — so `/contact`
was the acute case, matching what the owner saw.

### Why every test passed anyway

**This is the real failure.** Every local test aborts `leadconnectorhq.com` and
`link.msgsndr.com`, so `form_embed.js` never ran in any of them. Fourteen checks
passed against a page with the thing that breaks it switched off. The attributes
were a mistake; testing around the dependency was the bigger one.

### Fix — `88bd7e3`

Reverted to the iframe shape that ran unbroken for weeks: `src`, `title`,
`height`, `class`, nothing else. The new form id `wF3454LwddFo7Lmjp5V2` is kept
on `/contact` and all 22 `ServiceInquiryForm` pages. The `data-*` attributes only
drove `form_embed.js`'s auto-resize, and the reserved 923px already makes that a
no-op, so nothing of value was lost.

### New permanent check — `scripts/embed-adoption-test.mjs`

Serves a stand-in for `form_embed.js` that does what a resizer does to an adopted
frame — rewrite attributes, replace the node — then forces a React re-render and
asserts the app is still on screen.

Validated both ways, which is the point: **fails** on the broken build (0 chars
rendered, the `removeChild` error), **passes** on the fixed one (0 frames
adopted, app intact). Run it after any change to an embedded third-party iframe.

### Shipped vs preview-only

**Shipped.** `88bd7e3` restored the page; this entry's regression test follows.

### Remaining blockers

Unchanged: conversion matcher signatures unverified; native `InquiryForm`
destination; `book_call_click` not a key event.

### Next step

Owner to confirm `/contact` renders again. Blocked-embed and adoption behaviour
now both have tests; the remaining untested surface is anything requiring a real
submission.

---

## 2026-10-09 — New inquiry form on /contact

Owner supplied the current LeadConnector inquiry form, `wF3454LwddFo7Lmjp5V2`
("Sky Lift Group"). `/contact` was still on `J6Gtz1pzBFNFDvoMGV05`, recovered
from an old commit back when that page had no working contact method at all.

### Changed files

- `src/pages/Contact.jsx` — new form id, the owner's `data-*` attributes, and
  the height fix below. **Shipped.**
- `public/sitemap.xml`, `public/rss.xml` — regenerated timestamps only.

No URLs added, changed or removed.

### Carried over from the owner's snippet

`allow`-free iframe with `data-layout`, `data-trigger-type`,
`data-activation-type`, `data-deactivation-type`, `data-form-name`,
`data-height`, `data-layout-iframe-id`, `data-form-id`, `data-cookie-consent`,
`data-cookie-consent-provider`, and the `inline-<formId>` id that
`form_embed.js` uses to find and resize the frame.

One deliberate change: the snippet's `title` was "Sky Lift Group". An iframe
title is announced to describe what the frame is for, so it reads "Contact form
for Sky Lift Group". The LeadConnector-facing name is `data-form-name`, which is
untouched.

### A layout-shift risk found by testing, not by reading

`data-height="923"` is the form's own declared height, so the box is reserved at
exactly that. The first attempt kept the existing `h-full` class, and the frame
measured **1115px desktop / 1211px mobile** — stretched to the column. Had
`form_embed.js` then sized it to its declared 923, that is a shrink and a
layout shift. The frame now starts at exactly 923px and `form_embed.js` can
still grow it. The previous reservation was 760px, a guess that would have
shifted by 163px.

### Tests — 8 of 8 passed

Two cases, since the blocked-embed fallback means the iframe does not render at
all when LeadConnector is unreachable:

```
A. embed reachable (probe fulfilled, frame aborted)
   desktop  frame exactly 923px (819x923)   CLS 0.0000
   mobile   frame exactly 923px (358x923)   CLS 0.0000
   new form requested, old id never requested
B. embed blocked
   fallback panel shown; email and phone offered
```

Build clean 56 pages, audit 0 critical, smoke 110/110.

### Shipped vs preview-only

**Shipped.**

### Remaining blockers

1. **22 pages still use the old recovered form `J6Gtz1pzBFNFDvoMGV05`** — the 18
   service pages, the 3 trade pages and `/testimonials`, all via
   `ServiceInquiryForm`. The owner named `/contact` only, so they were left
   alone. If the recovered form is stale, those pages are collecting into
   nothing. **Asked once; awaiting the decision.**
2. Carried over: the conversion matcher signatures remain unverified (the live
   test cannot run from this environment — see 2026-10-09 entry below); the
   native `InquiryForm` destination URL; `book_call_click` not yet a key event.

### Follow-up, same day — all 22 other pages switched too

Owner confirmed. `ServiceInquiryForm` now uses `wF3454LwddFo7Lmjp5V2`, which
covers the 18 service pages, the 3 trade pages and `/testimonials`. The old form
id appears **nowhere in the build** — not in HTML, not in any JS chunk.

The compact embed also gained the LeadConnector wiring `/contact` has
(`inline-<formId>` id, `data-layout`, `data-form-name`, `data-form-id`,
`data-height`, cookie-consent attributes) so `form_embed.js` can find and size
it.

**A second instance of the same layout-shift bug, found by testing.** The
compact embed reserved 700px — chosen when it was meant to be a compact version.
It is the same form as `/contact`, which declares 923px, so `form_embed.js`
would have grown the frame by 223px on first size and shifted everything below
it on 22 pages. Reserved at the real 923px; the resize is now a no-op. Costs
vertical space, which is the right trade against a visible jump.

Two comments that had become untrue were corrected rather than left: one in
`Contact.jsx` still naming the old form as the live embed, one in
`inquiry-endpoint.js` describing the old widget's placement.

Tests: 6 of 6 across three routes and both viewports — frame exactly 923px,
CLS 0.0000 everywhere. Plus the earlier 8 on `/contact`. Build clean 56 pages,
audit 0 critical, smoke 110/110, sitemap URL set unchanged.

### Next step

Nothing outstanding on the inquiry form. The live-test blocker is unchanged: the
conversion matcher signatures still need one real submission to confirm, which
cannot be run from this environment.

---

## 2026-10-08 — Confirmed-conversion tracking, event spec, CRM reconciliation

Full spec: `docs/event-spec-and-reconciliation.md`.

### Booking calendar — already settled, not re-asked

The owner supplied `go3vHktAyk0Z9QABNphm` on 2026-10-07 and it was integrated on
`/book` in commit `2576c6f`. Verified still in place. No new request made.

### Evidence — the callback documentation

**There is no official LeadConnector documentation for these postMessage
events.** Public sources are third-party write-ups and pull requests; they agree
on the message *names* and **disagree on the origin**, and one reported payload
shape conflicts with the others. LeadConnector's own help article says its
external tracking script does not support iframe-embedded forms, so a
postMessage listener is the only available route.

Two findings that shaped the build:

- The reported inquiry payload (`set-sticky-contacts`) **carries contact JSON
  with email, full name and phone**. No payload body is read into any event.
- The reported booking payload has `fingerprint` and `calendarId` but **no email
  or contactId**, so it cannot be joined to a contact on its own — which is why
  reconciliation needs our own identifier.

**The implemented signatures are plausible but UNVERIFIED against this account.**
They have not been seen on a real submission. The matcher is strict, so a wrong
guess produces silence, never a false conversion.

### Changed files

- `src/lib/conversions.js` — **new.** Origin-validated listener. Fires
  `generate_lead` and `booking_complete` only on a confirmation message from an
  exact allow-listed origin.
- `src/components/Layout.jsx` — installs it once per session.
- `docs/event-spec-and-reconciliation.md` — **new.** Deliverable.

No URLs added, changed or removed. No new pages.

### Counting rules implemented

- **De-duplication is not session-wide.** Only the same message within 5 seconds
  collapses. A genuine later submission still counts.
- **One prospect who inquires and books is one qualified lead.** Both events
  carry the same `lead_ref`; the reporting rule is distinct `lead_ref`, never
  the sum of the two events.
- Button, phone and email events stay **intent** and were not touched.
- `form_submit` deliberately avoided for conversions — enhanced measurement
  already emits that name.

### CRM reconciliation

`lead_ref`: random, first-party, `slg-` + 16 hex, no personal data, safe in GA4.
Proposed join is a hidden `lead_ref` custom field on the LeadConnector form,
passed in as a URL parameter. **Unverified step:** whether LeadConnector
prefills a custom field from a URL parameter *on an embedded iframe form* has
not been confirmed on this account. Until it is, GA4 reports conversion counts
that cannot be tied to named CRM records — stated rather than worked around.

### Tests — 13 of 13 passed

Messages dispatched synthetically with controlled origins; no embed loaded,
nothing reached Google or LeadConnector.

Origin validation 2/2 (wrong origin ignored; look-alike suffix origin
`api.leadconnectorhq.com.evil.example` ignored). Noise rejection 3/3
(`[iFrameSizer]` chatter, unrecognised object, unrecognised array all fire
nothing). Confirmed booking 3/3. Confirmed inquiry 2/2, including a payload
seeded with an email, a full name and a phone number, asserting none of it
reaches the event. De-duplication 3/3.

Two initial failures in the de-duplication section were the test firing inside a
window still open from earlier sections, not an implementation fault; the
sequencing was corrected.

Build clean 56 pages, audit 0 critical, smoke 110/110, sitemap URL set
unchanged.

### Shipped vs preview-only

**Shipped.** Active on the live site, firing only on strict matches.

### Remaining blockers

1. **The real payload shape is unconfirmed.** One real submission with
   `localStorage.setItem('slg-embed-debug','1')` logs the true origin and
   payload; the matcher then gets tightened to what was observed. No live test
   has been run — it creates a real contact and may trigger notifications, so it
   needs specific permission.
2. **URL-parameter prefill into the embedded form is unverified**, so the GA4 to
   CRM join is specified but not built.
3. Carried over: inquiry destination URL for the native `InquiryForm` (still
   inert); `book_call_click` not yet a key event; Google Signals property toggle
   not re-verifiable through the read-only API.

### Live test attempt, 2026-10-09 — could not be run from this environment

Owner authorized the live test. It could not be executed here.

The environment's network policy denies every host the test needs:
`www.skyliftgroup.com`, `api.leadconnectorhq.com`, `link.msgsndr.com` and
`www.google-analytics.com` all fail to connect. No browser that runs on the
owner's own machine is available to this session either, so there is no route to
load the live page, render the embed, or submit anything.

**No test submission was made and no result is claimed.** The matcher signatures
remain UNVERIFIED.

Two ways forward, neither assumed: the owner runs the capture themselves with
`docs/capture-embed-payload.js` pasted into the browser console, or the
environment's Network access is widened to those hosts and the test is run here.

The capture snippet redacts anything resembling personal data before printing,
since the reported inquiry payload carries email, full name and phone. The shape
is what is needed; the contact's details are not.

### Next step

Owner to run the probe on one real inquiry or booking and send the console
output. That resolves blocker 1, and confirms in passing that the new calendar
renders.

---

## 2026-10-08 — Removed scroll_90, kept GA4's built-in scroll

Owner's decision on the duplication flagged 2026-10-07.

### Evidence checked first

Before removing ours, re-read the Admin API to confirm the built-in would still
be there: `scrollsEnabled: true` on stream `15840970192`. Had enhanced
measurement's scroll been off, removing ours would have left no scroll tracking
at all. Also re-confirmed `pageChangesEnabled: false`.

Our `scroll_90` fired at 90% depth on blog posts only. GA4's built-in `scroll`
fires at the same depth site-wide and already carries page context, so this
removal loses nothing and widens coverage.

### Changed files

- `src/lib/analytics.js` — removed the scroll-depth section (27 lines):
  `installScrollDepth()`, the `scrollBound` module variable and the `scroll_90`
  event.
- `src/components/Layout.jsx` — removed the import and the per-route call.
- `public/sitemap.xml`, `public/rss.xml` — regenerated timestamps only.

No URLs added, changed or removed.

### Tests — 5 of 5 passed

Loader aborted throughout; nothing reached Google.

```
no scroll event from our code after a full-page scroll   queued: []
phone_click still fires
email_click still fires
book_call_click still fires
page_view still fires
```

`scroll_90` is absent from the whole of `dist/`. Build clean 56 pages, audit
0 critical, smoke 110/110, sitemap URL set unchanged.

### Shipped vs preview-only

**Shipped.**

### Remaining blockers

Unchanged from 2026-10-07: the inquiry destination URL (native `InquiryForm`
stays inert until then), `book_call_click` not yet a key event, and the Google
Signals property toggle not re-verifiable through the read-only API.

### Next step

Nothing outstanding on analytics instrumentation. Next action is the owner's:
either the inquiry destination URL, or clicking a "Book a Free Strategy Call"
button on the live site so `book_call_click` appears in GA4 and can be starred.

---

## 2026-10-07 — Inquiry path: blocked-embed fallback shipped, native form prepared

Full write-up: `docs/inquiry-path.md`.

### Evidence — the inquiry capability and its destination

The site has working inquiry capability; no native form is not the same as no
way to inquire. Live: LeadConnector form `J6Gtz1pzBFNFDvoMGV05` on `/contact`
and all 18 service pages, booking calendar `go3vHktAyk0Z9QABNphm` on `/book`,
chat widget `6a4ec0f6d77eb8016d211bce` site-wide, plus `form_embed.js`. Direct
routes (`hello@skyliftgroup.com`, `+1 (725) 263-1475`) on `/contact` and every
service page.

**Where submissions land is not established.** Checked and ruled out:
all four LeadConnector hosts unreachable from the container; no endpoint,
webhook or key in `.env`, `vercel.json` or source; Zapier has Facebook Pages,
LinkedIn and GA4 only; LeadConnector exists in the Zapier catalog but is not
enabled and has no connections, shared included. Nothing assumed, nothing
invented.

### Changed files

- `src/pages/Contact.jsx` — blocked-embed fallback (**shipped**)
- `src/components/ServiceInquiryForm.jsx` — same, covers 18 service pages (**shipped**)
- `src/components/InquiryForm.jsx` — native short form (**new, not rendered**)
- `src/lib/inquiry-endpoint.js` — destination config, deliberately empty (**new**)
- `docs/inquiry-path.md` — deliverable (**new**)
- `public/sitemap.xml`, `public/rss.xml` — regenerated timestamps only

No URLs added, changed or removed.

### A wrong first implementation, caught by testing

The fallback first used the iframe's `onLoad` plus a timeout. A test with the
embed blocked proved it never fired the fallback: Chromium fires `onLoad` for
its own error page, so `onLoad` cannot distinguish success from failure.
Replaced with a `no-cors` probe to the same origin — an ad blocker blocks that
too and the promise rejects — with the timer kept as a backstop. Had the test
not been run, this would have shipped looking correct and doing nothing.

### Tests — 22 of 22 passed

Every POST intercepted and fulfilled locally; nothing left the machine and no
real inquiry was created. Labels and a11y 2/2, empty submit 4/4, bad
email/short message 3/3, destination rejects 5/5 (no false success, message
preserved, no analytics event), destination accepts 5/5 (success only after
acceptance, attribution sent, no PII in analytics), blocked embed 3/3.

Build clean 56 pages, audit 0 critical, smoke 110/110, CLS 0.0000 on `/contact`
and `/services/missed-call-text-back`, sitemap URL set unchanged.

### Shipped vs preview-only

**Shipped:** the blocked-embed fallback on `/contact` and 18 service pages.
**Preview-only:** the native `InquiryForm`. It is imported nowhere and renders
`null` while `INQUIRY_ENDPOINT` is empty, so nothing about the live inquiry path
changed. Previews captured locally.

### Remaining blockers

1. **Destination URL for the native form.** A webhook URL that accepts the JSON
   payload and returns 2xx — in LeadConnector, an Inbound Webhook trigger on a
   workflow. Must be safe for client-side code: a webhook URL, never an API key.
2. **No real test inquiry sent, and none will be without specific permission** —
   a live test creates a real contact and may trigger real notifications.
3. Carried over: `book_call_click` still not a key event (GA4's Events table
   only lists names already collected; the custom events have never fired
   because nobody has clicked). Google Signals property toggle not re-verifiable
   through the read-only API.
4. Noted, not acted on: `scroll_90` duplicates GA4's built-in `scroll`.

### Next step

Supply the destination URL and the native form goes live with a one-line change.
Until then the verified LeadConnector embed remains the live path, now with a
fallback so it cannot dead-end.

---

## 2026-10-07 — GA4 consent and event-sequence verification

**Scope:** continue the existing GA4 install on `G-L6KM3R8YGF`. No property
created, no tag reinstalled, no new pages.

### Evidence

Google's endpoints are unreachable from the working container
(`www.googletagmanager.com`, `www.google-analytics.com`,
`region1.google-analytics.com` all fail to connect). That shaped the method and
it is stated here so the limits are not mistaken for proof:

| Claim | How it was established | Strength |
|---|---|---|
| Queued event sequence and consent payloads | Drove the real production build in Chromium, read `window.dataLayer` after each scenario. Without `gtag.js` the queue is never consumed, so the dataLayer **is** the ordered sequence the tag would process. | Direct observation of the site's behaviour |
| GA4 is receiving data | OpenSEO read-only GA4 reporting, property `555951601`, stream `G-L6KM3R8YGF` | Direct, first-party |
| No duplicate page_views | Counted `page_view` calls per scenario in the dataLayer | Direct — **not** inferred from GA4 aggregates |
| Enhanced-measurement duplicate risk | **Not testable here.** Depends on config delivered inside `gtag.js`, which cannot load. | **Unverified** |

Nothing was sent to Google. The loader and all `google-analytics.com` requests
were intercepted and aborted, so the run could not put manufactured test data in
the property.

### Consent results (all paths)

- Defaults queued **before** `config`, all four v2 signals `denied`,
  `wait_for_update: 500`.
- **Accept** → `analytics_storage: granted`; `ad_storage`, `ad_user_data`,
  `ad_personalization` all remain `denied`. Analytics-only setup confirmed.
- **Decline** → all four explicitly `denied`.
- **Returning accepted** → stored grant replayed before `config`; banner absent.
- **Returning declined** → defaults only, no update; banner absent.
- `config` carries `send_page_view: false`, `allow_google_signals: false`,
  `allow_ad_personalization_signals: false`.

Declining does not mean "no network requests". Under Consent Mode v2 Advanced,
which is what is installed, the tag still sends cookieless pings. That is the
intended behaviour of the chosen mode, not a leak.

### Event sequence (page_view count per scenario)

```
A  first visit, no prior choice                 1
B  clicks Accept                                0  (consent update only)
C  returning, previously accepted (deep URL)    1
D  clicks Decline                               0  (consent update only)
E  returning, previously declined               1
F  client nav  / -> /services -> /contact       2  (one per route)
G1 browser Back                                 1
G2 browser Forward                              1
H  non-production host, no debug flag           0  (was 1 before today)
```

### Changed files

- `src/lib/analytics.js` — `pageView()` and `track()` now return early unless
  `window.__slgGa.enabled === true`, failing closed when the flag is absent.
  Consent calls deliberately left ungated.
- `public/sitemap.xml`, `public/rss.xml` — regenerated timestamps only. **URL
  set byte-identical.**

No URLs added, changed or removed.

### External actions

- Removed the Zapier **Google Analytics 4 → Run Report** write action. It had no
  connected account and could not execute; read-only GA4 reporting now comes
  from the authorized OpenSEO connection. The Find Conversion read action was
  left in place. No account access was expanded.

### Tests

- GA4 matrix: 9 scenarios, all pass (table above).
- Build clean, 56 prerendered pages.
- Audit: 0 critical. Two pre-existing HIGH thin-content flags on `/contact` and
  `/book` — their content sits inside a cross-origin iframe.
- Smoke test: 110/110 across desktop and mobile.
- Sitemap URL set unchanged.

### Shipped vs preview-only

**Shipped.** Commit `5bbcb46`, pushed to `main`, deployed to production.

### Remaining blockers

1. ~~**Enhanced measurement "page changes based on browser history events".**~~
   **RESOLVED 2026-10-07.** Owner turned it off; re-read of the Admin API
   confirms `pageChangesEnabled: false`. There is now exactly one page_view
   mechanism on the site — the deliberate one in `Layout.jsx` — and the direct
   test shows it emits exactly one `page_view` per route. The configuration risk
   is closed. Note this is a configuration fact read from the Admin API, not a
   live observation of `gtag.js`, which still cannot load in this environment.
2. **`book_call_click` is still not a key event — the change did not take.**
   Re-read on 2026-10-07 after the owner reported making it: `keyEventCount` is
   still 3 and the list is unchanged (`purchase`, `qualify_lead`,
   `close_convert_lead`). The key-events report returns 0 rows for
   2026-09-24..2026-10-06.
   Most likely cause: GA4's **Events** table only lists event names it has
   already collected, so there was no `book_call_click` row to toggle. With 2
   active users in the period the event has probably never fired. The path that
   works for an unseen event is **Admin → Key events → New key event**, typing
   the name manually. Marking it is configuration only — it will read 0 until
   someone actually clicks a "Book a Free Strategy Call" link.
3. **Google Signals property setting** — tag-side is verified off
   (`allow_google_signals: false`). The property-level toggle was last confirmed
   off by the owner's screenshot on 2026-09-30 and is not exposed by the
   read-only reporting API, so it is not re-verified today.
4. One observation flagged, not concluded: `/about-us` on 2026-09-29 shows 6
   page views from 1 active user with 3 seconds engagement. That is consistent
   with rapid repeat loads, a bot, or duplication. **No conclusion drawn** —
   aggregate counts are not evidence of duplication, and the direct test shows
   one `page_view` per route.

### Single access handoff

Two changes in the GA4 admin UI, both outside any API available here:

- **Admin → Data streams → Sky Lift Group Website → Enhanced measurement →**
  un-tick **"Page changes based on browser history events"**.
- **Admin → Events → Key events →** mark **`book_call_click`** as a key event
  (intent signal, not a lead — do not report it as booked calls).

### Verification follow-up, 2026-10-07 (same day)

Owner reported both admin changes made. Re-read of the Admin API:
`pageChangesEnabled` **false** (confirmed changed), `keyEventCount` **3**
(unchanged — `book_call_click` absent). One of the two landed. Detail in the
blocker list above.

### Booking calendar replaced, 2026-10-07

The owner supplied the current LeadConnector booking calendar
(`go3vHktAyk0Z9QABNphm`). `/book` was still embedding
`Mi5gk5QCFKULntPciL7d`, which had been recovered from an old commit when the
page had no working booking method at all. Swapped.

Carried over from the owner's snippet: `allow="payment"`, `scrolling="no"`, and
the `{widgetId}_{timestamp}` id that `link.msgsndr.com/js/form_embed.js` uses to
find and resize the iframe. That script was already loaded in `index.html`.

Changed from the snippet, deliberately: the raw embed sets no height and lets
form_embed.js size it from zero, which shifts the page as it loads. Replaced
with `minHeight: 900px` on both the wrapper and the iframe, so the box is
reserved from first paint and form_embed.js can still grow it if the calendar
needs more room. A fixed height would have clipped a taller calendar, because
scrolling is off.

**Not verifiable from this environment:** `api.leadconnectorhq.com` is
unreachable from the container, so the calendar itself cannot be loaded here.
Confirmed: the markup ships correctly, the 900px box is reserved at 996x900
desktop and 346x900 mobile, and CLS is 0.0000 on both. Whether the calendar
renders and accepts a booking needs a look at the live page.

All "Book a Free Strategy Call" buttons across the site point at `/book`, so
this one change covers every entry point.

### Custom-event firing, verified 2026-10-07

The GA4 **Recent events** list contains only six names, all GA4 built-ins:
`click`, `first_visit`, `page_view`, `scroll`, `session_start`,
`user_engagement`. No custom event from this site has ever been collected, which
is why `book_call_click` could not be toggled — GA4 had never seen it.

That is either "nobody clicked" or "the tracking is broken", so it was tested
rather than assumed. Clicking the real elements in the real build, with the
loader aborted so nothing reached Google:

```
phone_click      {"link_location":"footer"}
email_click      {"link_location":"footer"}
book_call_click  {"button_location":"header"}
scroll_90        {"page_path":"/blog/get-hvac-leads-without-paying-for-ads"}
```

**The tracking works.** The delegated listener in `installLinkTracking()` fires
on `tel:`, `mailto:` and `/book` links and labels the location correctly.
Nothing is collected because nobody has clicked. That is consistent with the
traffic: 2-3 users in the period, viewing `/about-us`, `/blog`, `/blog/page/2`,
`/contact` and `/privacy-policy`, with no phone, email or booking click among
them.

**Open question raised by this, not yet acted on:** our `scroll_90` duplicates
GA4 enhanced measurement's built-in `scroll`, which also fires at 90% depth and
already carries page context. Two events, one signal. Recommend dropping ours
and keeping the built-in, but that is a measurement-scope decision, so it is
flagged rather than changed.

### Next step

`book_call_click` still needs creating via **Admin → Key events → New key
event** rather than the Events-table toggle. Re-read key events after that to
confirm the intent-event wiring end to end. Unrelated and still open from 2026-09-30: the
three trade pages need indexing requested, and the unverified counters on
`/work` (500+ Projects, 350+ Happy Clients, 95% Client Retention) are still live
pending the owner's decision.
