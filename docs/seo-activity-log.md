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
