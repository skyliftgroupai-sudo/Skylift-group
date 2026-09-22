# Sky Lift Group — SEO Engagement Report

**Period:** 21–22 September 2026
**Branch:** `claude/admiring-euler-03b2hc`, merged to `main`
**Deployed:** all work is live on https://www.skyliftgroup.com

---

## 1. Where the site started and where it is now

| | Before | Now |
|---|---|---|
| Pages Google could read as content | **0** | 49 |
| URLs in sitemap | 31 | 48 |
| Blog posts | 5 (408–2,306 words) | 15 (1,731–2,492 words) |
| Service pages | 16 | 18 |
| Schema types in raw HTML | Organization, WebSite | + ProfessionalService, Service, FAQPage, BreadcrumbList, BlogPosting, Blog |
| Blog categories / pagination | none | 4 categories, crawlable pagination |
| `public/assets` size | 28 MB | 3.5 MB |
| Critical audit issues | — | 0 |

The first row is the important one. Before this work, every page on the site
served `<div id="root"></div>` and nothing else. Google renders JavaScript but
queues it; most AI crawlers do not render it at all. To all of them the site was
blank pages with titles. That single fact explains most of the Search Console
symptoms — 17 pages not indexed, position 22, and no presence in AI answers.

---

## 2. Changelog

11 commits. 85 source files changed (6,590 insertions, 1,025 deletions), plus 45
asset files deleted.

### Phase 1 — Technical audit and fixes

`9514039` **Static rendering for every page**
- `src/entry-server.jsx`, `src/routes.jsx` (new) — route table shared by the
  browser app and the build, so they cannot drift
- `scripts/prerender.mjs` — renders every route with React 19's `prerender()`,
  which resolves the lazy route chunks instead of emitting Suspense fallbacks
- `vite.config.js` — `ssr.noExternal` with React kept external. Bundling React
  produced "invalid hook call"; leaving the CJS deps external produced a module
  namespace object where a component was expected, which failed silently and
  fell back to a blank page
- Build now fails if any route renders with no meaningful content
- **Result:** pages went from 0 to 242–2,449 words of crawlable HTML

`9514039` **FAQ answers were invisible to crawlers**
- `src/pages/Faqs.jsx`, `src/pages/Faq.jsx` — answers were rendered only while
  an accordion item was open, so the HTML held six questions and zero answers
- Answers now stay mounted and collapse by height

`9514039` **Mobile horizontal scroll**
- `src/index.css` — sections animating in from `x: 40` sat 40px off-screen,
  giving `/contact` and several service pages a horizontal scrollbar on a phone
- Fixed with `overflow-x: clip` (not `hidden`, which would break the sticky header)

`9514039` **Duplicate host**
- `vercel.json` — `skylift-group.vercel.app` served the whole site with no
  redirect. Now 308s to the canonical www host, as the apex already did

`9514039` **Tooling**
- `scripts/audit-seo.mjs` — rewritten to crawl `dist/` with no JavaScript
- `scripts/smoke-test.mjs` — loads routes in Chromium at desktop and phone
  widths, checking hydration, h1 count, horizontal overflow and JSON-LD parsing

`6fc24b7` **Invented testimonials removed**
- Six fabricated reviews ("Oliver Bennett — Great experience...") were on the
  homepage and every service page. Attaching Review schema to them in Phase 5
  would have been a Google policy violation
- `src/lib/testimonials.js` — now the single source, deliberately empty. The
  section renders nothing while it is empty

`6fc24b7` **25 MB of unused assets deleted** — 45 PNG/JPEG originals nothing
referenced; WebP versions had replaced them. Recoverable from git history

`6fc24b7` **Entity naming** — Organization `legalName` is now "Sky Lift LLC"
(the registered entity, matching the footer); `name` stays "Sky Lift Group"

`962b1f8` **FAQ answers hidden on all 16 service pages**
- The same defect as `/faq`, which I missed on the first pass. Found only by
  reading the deployed HTML of `/services/missed-call-text-back`
- Word counts did not catch it — the pages were long enough to pass anyway
- `scripts/audit-seo.mjs` now scans the source for conditionally mounted
  accordion content. Verified both directions

### Phase 2 — Schema, meta, entity signals

`660d9a2`
- `src/lib/schema.js` (new) — every JSON-LD block built in one place. Schema
  previously existed in three unrelated places (a hardcoded block in
  `index.html`, runtime injection from `useSeo`, and a conflicting Organization
  node in `Blog.jsx`) with nothing keeping them consistent. This is the most
  likely origin of the "Unparsable structured data" report
- Each page emits a single `@graph`: Organization, WebSite, ProfessionalService
  with a `hasOfferCatalog` of all services, plus BreadcrumbList, FAQPage,
  Service or BlogPosting as applicable
- `src/lib/service-faqs.js` (new) — all FAQ content in one place, read by both
  the page component and the schema, so they cannot drift
- `src/hooks/useSeo.jsx` — replaces the prerendered block on client navigation
  instead of appending a second one, and only when it has a replacement
- `src/lib/seo-config.js` — five titles had a doubled pipe or the brand in the
  wrong position; all titles now keyword-first, one `| Sky Lift Group`, under 60
- `src/components/Footer.jsx` — tagline now renders the same `ORG_DESCRIPTION`
  string the schema uses
- `scripts/generate-llms.mjs` (new) — `/llms.txt` generated from the live route
  and post lists. States plainly that Sky Lift Group is a marketing agency and
  not a lift-equipment company
- `public/robots.txt` — points to `/llms.txt`
- `scripts/generate-seo-files.mjs` — sitemap `lastmod` now comes from the last
  commit touching each page's own source, not today's date on all URLs

`a5f193b` **The services mega menu was never rendered**
- `src/components/Header.jsx` — conditionally mounted on hover state, so it did
  not exist in crawlable HTML. It held the only links to ten of the sixteen
  service pages
- Those pages had 1–2 inbound internal links each. The highest-value ones
  (Google Ads, AI chatbots, missed call text back, AI voice agents) were worst off
- **This is the cause of the 12 "Discovered – currently not indexed" pages**
- Now always in the DOM, and completed to all 16 services
- Every service page went from 2–6 inbound links to 32
- `scripts/audit-seo.mjs` now counts inbound links rather than only checking for
  zero. The old orphan check reported 0 orphans, which was technically true and
  useless

### Phase 3 — Service pages

`5b3f5e4` **Two new money pages**
- `/services/sms-marketing` (1,853 words) — built for the only non-brand cluster
  with confirmed impressions
- `/services/database-reactivation` (1,815 words)
- `src/pages/ServicePage.jsx`, `src/content/services/*.js` (new)

`62d9999` **Six existing pages expanded**

| Page | Before | Now |
|---|---|---|
| `/services/missed-call-text-back` | 558 | 1,661 |
| `/services/ai-chatbots` | 545 | 1,645 |
| `/services/lead-follow-up` | 576 | 1,623 |
| `/services/google-ads` | 488 | 1,615 |
| `/services/ai-voice-agents` | 556 | 1,588 |
| `/services/local-maps` | 447 | 1,477 |

- Long-form body inserted between existing sections rather than rebuilding the
  pages, which would have discarded a working design for nothing
- FAQs expanded from 4 to 7–8 on all eight pages
- Every page carries a section on what the service will not do

### Phase 4 — Blog content engine

`a580416`
- `docs/keyword-map.md` (new) — 30 questions across 8 clusters, each mapped to
  the money page it supports. No search volume figures; rows labelled CONFIRMED,
  ADJACENT or INFERRED so guesses are visible as guesses
- `src/lib/blog-taxonomy.js` (new) — categories and pagination as real URLs,
  prerendered and in the sitemap. Pagination is anchor tags, not a load-more
  button
- Categories need 2+ posts before getting a page, and carry written intro copy
- Post category badges link to their listing

`9166171` **Two real FAQ schema bugs**
1. Markdown passed through verbatim — an answer containing a link put raw
   markdown into the schema while the page rendered the label. Every answer
   containing a link, bold or code was describing text not on the page
2. Everything after the last question leaked into its answer — a closing
   horizontal rule and the post's CTA were appended and emitted as schema.
   **This was already live on the Google Business Profile post**
- The audit was sampling the first 60 characters, which passed bug 1 by luck.
  It now compares whole answers, and caught bug 2 immediately

`2729132`, `2e09a99` **Ten new posts, three rewrites**
- All 15 posts now 1,731–2,492 words with direct answer, question H2s, FAQ
  schema, internal links and a CTA
- `src/lib/posts.js` — `getRelatedPosts` matched on category alone, so the
  tie-break fell to publication date and older posts were never surfaced. That
  left two posts with one inbound link each. Now scores on shared tags; every
  post has 3–8

---

## 3. What I could not fix, and why

### Blocked by access

**I could not crawl the live site directly.** This environment's egress policy
blocks `skyliftgroup.com`. Everything was audited against the local build at the
deployed commit — byte-identical output — plus spot checks of the live HTML
through the Vercel API. I could not verify live response headers independently.

**I cannot request indexing for you.** No API exposes it. The URL Inspection API
is read-only, and the separate Indexing API officially supports only JobPosting
and BroadcastEvent markup. A GSC MCP would let me read index status and
performance data, which is worth having, but not submit URLs.

### Blocked on missing data

**Per-URL coverage lists were not in the export.** The Coverage zip contained
only the three-row summary. Getting the URL lists requires clicking into a reason
and exporting from that drill-down.

**No structured-data export arrived.** My own validator reports 0 schema errors
across all 49 pages, and the Phase 2 rebuild removed the most likely cause, but I
could not confirm against the actual report.

**`/services/web-design` is still unexplained.** 201 impressions at position 9
with zero clicks. Position is not the problem. I cannot tell whether the snippet
mismatches intent or the impressions are irrelevant, because the export does not
cross-reference queries to pages.

### Decisions left with you

**The Counter block stats are unverified.** You confirmed the homepage hero
figures are real. The Counter section — `50+ Businesses Helped`, `300% Average
Lead Growth`, `5+ Years Combined Industry Experience` — was not confirmed and you
did not ask me to remove them, so they are untouched. Worth a decision.

**`src/pages/Sliderbar.jsx` holds fabricated claims** (`350+ Real Results`,
`120% ROI Growth in Just 3 Months`). It is commented out on every page and does
not render, so nothing false is live. Worth deleting rather than leaving.

### Not done

**Phase 5 (video testimonials)** — not started. Needs your videos.
**Phase 6 (backlink and citation prep)** — not started.

### Known, low priority

**`/book` (226 words) and `/contact` (264 words) are thin.** Short conversion
pages are defensible, but both would benefit from expansion.

**251 pre-existing lint errors.** `eslint.config.js` is missing
`eslint-plugin-react`, so every JSX-only identifier is flagged as unused. Cosmetic,
identical before this work, unrelated to SEO — but it masks real errors.

---

## 4. URLs to submit via GSC URL Inspection

17 URLs are new since the engagement began. Google limits submissions to roughly
10–12 per property per day.

### Day 1 — new money pages and the confirmed-demand cluster

```
https://www.skyliftgroup.com/services/sms-marketing
https://www.skyliftgroup.com/services/database-reactivation
https://www.skyliftgroup.com/blog/a2p-10dlc-registration-contractors
https://www.skyliftgroup.com/blog/text-customers-who-never-opted-in
https://www.skyliftgroup.com/blog/missed-call-text-back-message-examples
https://www.skyliftgroup.com/blog/what-missed-calls-cost-contractors
https://www.skyliftgroup.com/blog/missed-call-text-back-vs-answering-service
https://www.skyliftgroup.com/blog/get-past-customers-to-book-again
https://www.skyliftgroup.com/blog/competitor-ranking-above-me-google-maps
https://www.skyliftgroup.com/blog/wasting-money-google-ads-contractor
https://www.skyliftgroup.com/blog/can-ai-answer-the-phone-for-my-business
https://www.skyliftgroup.com/blog/how-many-google-reviews-does-a-contractor-need
```

### Day 2 — the six expanded service pages

These are already indexed but are substantially different documents now.

```
https://www.skyliftgroup.com/services/missed-call-text-back
https://www.skyliftgroup.com/services/ai-chatbots
https://www.skyliftgroup.com/services/lead-follow-up
https://www.skyliftgroup.com/services/google-ads
https://www.skyliftgroup.com/services/ai-voice-agents
https://www.skyliftgroup.com/services/local-maps
```

### Do not submit

The four category pages and `/blog/page/2` — they are in the sitemap and linked
internally, and they are not worth the quota. Nor any redirecting URL
(`/about`, `/blogs/*`, `/services/ai-chatbot`, `/faqs`, `/terms`, `/privacy`,
`/contact-us`, `/home`, the apex domain).

---

## 5. Sitemap

**Ready to resubmit.** `https://www.skyliftgroup.com/sitemap.xml`

- 48 URLs, every one returning 200 with a self-referencing canonical and no
  noindex — verified against the build
- `lastmod` now reflects the last commit touching each page's own source, so it
  is an honest freshness signal rather than today's date on everything
- Regenerated automatically on every deploy

Your existing submission is already registered and shows Success with 31
discovered pages. Resubmitting the same URL prompts a re-read, which is worth
doing now that the count has gone from 31 to 48.

---

## 6. Your 30-day checklist

### This week

- [ ] Submit the Day 1 URLs above (12 URLs)
- [ ] Submit the Day 2 URLs the following day (6 URLs)
- [ ] Resubmit the sitemap in GSC → Sitemaps
- [ ] Click **VALIDATE FIX** on "Crawled – currently not indexed" — free, does
      not use submission quota, and the underlying cause is fixed
- [ ] Decide on the Counter block stats (confirm, correct, or remove)

### Next export (in 2 weeks) — the three that would help most

- [ ] Coverage → click into **"Discovered – currently not indexed"** → Export
      (and the same for "Crawled – currently not indexed"). The summary export
      does not contain URLs
- [ ] Performance → filter **Page = `/services/web-design`** → Queries → Export.
      This is the biggest unexplained signal in your data
- [ ] Performance → filter **Country = United States** → Export. Your US numbers
      are currently buried under Pakistan and India traffic

### Within 30 days

- [ ] Send video testimonials so Phase 5 can be built — for each one: client
      name, business name, city and state, industry, the specific result, and
      permission to publish
- [ ] Confirm whether you want Phase 6 (directory profile copy for Clutch,
      UpCity, DesignRush and the rest, plus outreach targets)
- [ ] Claim and verify your Bing Places listing — Bing feeds ChatGPT search
- [ ] Add the LinkedIn company page and Facebook page URLs to any directory
      profile you create, so the `sameAs` signals reinforce each other

### What to expect

Recrawling takes one to three weeks. The pages that were blank when Google last
looked should resolve once it sees real content. Do not judge the work by next
week's numbers — the honest checkpoint is your 2-week export, and the meaningful
one is 30 days out.

The realistic first movement is impressions rather than clicks: more pages
indexed, appearing for more queries, before any of them rank well enough to earn
a click. If impressions rise and clicks do not, that is the expected shape at
this stage, not a failure.
