# Keyword Map — Sky Lift LLC

Thirty long-tail questions US home service contractors search, clustered by the
service page each one supports.

**On search volume:** no volume figures appear here. We have no keyword tool
connected, and inventing numbers would make this document worse than useless.
Priority is set by business value, by evidence from Search Console, and by how
close the query sits to hiring someone — not by guessed volume. Where Search
Console shows real impressions, that is stated explicitly and is the strongest
evidence in this document.

**Evidence labels**
- `CONFIRMED` — the site already receives impressions for this or a close variant (GSC, last 3 months)
- `ADJACENT` — same cluster as a confirmed query, same intent
- `INFERRED` — reasonable from the service offering; no data yet

---

## Cluster 1 — SMS & Text Message Marketing
**Money page:** `/services/sms-marketing`

This is the only cluster with confirmed non-brand impressions. Everything here
is top priority.

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 1 | Is text message marketing worth it for home service businesses? | CONFIRMED — "text message marketing for home services", 12 impr, pos 58 | Commercial research | EXISTS, needs rewrite |
| 2 | Do I need A2P 10DLC registration to text my customers? | ADJACENT | Problem/compliance | New |
| 3 | Can I text customers who never opted in? | ADJACENT | Compliance/risk | New |
| 4 | What should a missed call text back message actually say? | ADJACENT | Implementation | New |
| 5 | How many times can you text a customer before it's too many? | INFERRED | Implementation | Later |
| 6 | Text message vs email marketing for contractors — which works? | ADJACENT | Comparison | Later |

## Cluster 2 — Missed Call Text Back
**Money page:** `/services/missed-call-text-back`

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 7 | How much does a missed call actually cost a contractor? | INFERRED | Problem-aware | New |
| 8 | What happens to customers when contractors don't answer the phone? | INFERRED | Problem-aware | New |
| 9 | Missed call text back vs an answering service — which is better? | INFERRED | Comparison | New |
| 10 | Should contractors answer the phone after hours? | INFERRED | Problem-aware | Later |

## Cluster 3 — Database Reactivation
**Money page:** `/services/database-reactivation`

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 11 | How do I get past customers to book again? | INFERRED | Solution-aware | New |
| 12 | What to send customers who haven't booked in a year | INFERRED | Implementation | Later |
| 13 | Is my old customer list worth anything? | INFERRED | Problem-aware | Later |

## Cluster 4 — Google Business Profile / Local Maps
**Money page:** `/services/local-maps`

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 14 | How do I get into the Google Map Pack? | ADJACENT — "local seo and ai for home services 2026", 1 impr | Solution-aware | EXISTS (GBP guide) |
| 15 | Why is my competitor ranking above me on Google Maps? | INFERRED | Problem-aware | New |
| 16 | What Google Business Profile category should an HVAC company use? | INFERRED | Implementation | New |
| 17 | Can I add keywords to my Google Business Profile name? | INFERRED | Risk/compliance | Later |
| 18 | How do service area businesses rank without an address? | INFERRED | Implementation | Later |

## Cluster 5 — Reviews
**Money page:** `/services/reviews`

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 19 | How do I get more Google reviews without asking awkwardly? | INFERRED | Solution-aware | EXISTS, needs rewrite |
| 20 | How many Google reviews does a contractor need? | INFERRED | Problem-aware | New |
| 21 | How should I respond to a bad review? | INFERRED | Implementation | Later |
| 22 | Is it illegal to pay for Google reviews? | INFERRED | Risk/compliance | Later |

## Cluster 6 — Google Ads
**Money page:** `/services/google-ads`

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 23 | Why am I wasting money on Google Ads for my contracting business? | INFERRED | Problem-aware | New |
| 24 | How much should a contractor spend on Google Ads? | INFERRED | Commercial research | Later |
| 25 | Google Ads vs Local Services Ads for contractors | INFERRED | Comparison | Later |

## Cluster 7 — AI Chatbots & Voice Agents
**Money pages:** `/services/ai-chatbots`, `/services/ai-voice-agents`

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 26 | Can AI answer the phone for my contracting business? | INFERRED | Solution-aware | New |
| 27 | Do AI chatbots actually work for home service websites? | INFERRED | Commercial research | Later |
| 28 | Will customers be annoyed by an AI answering the phone? | INFERRED | Objection | Later |

## Cluster 8 — Choosing an Agency (trust / brand defense)
**Money page:** `/about-us`, `/contact`

| # | Question | Evidence | Intent | Post |
|---|---|---|---|---|
| 29 | What are the red flags when hiring a marketing agency? | CONFIRMED — "red flags when hiring a marketing agency", 1 impr, pos 32 | Trust | EXISTS, needs rewrite |
| 30 | What should a contractor expect to pay for marketing? | INFERRED | Commercial research | Later |

---

## Publishing order

The first ten are chosen so that every post links to a money page that needs
crawl signal, and the earliest ones sit in the only cluster with confirmed
demand.

| Week | Post | Cluster | Supports |
|---|---|---|---|
| 1 | Rewrite: Is SMS marketing worth it for contractors? | 1 | `/services/sms-marketing` |
| 1 | Do I need A2P 10DLC to text my customers? | 1 | `/services/sms-marketing` |
| 1 | How much does a missed call cost a contractor? | 2 | `/services/missed-call-text-back` |
| 2 | Can I text customers who never opted in? | 1 | `/services/sms-marketing` |
| 2 | Missed call text back vs an answering service | 2 | `/services/missed-call-text-back` |
| 2 | Rewrite: How to get more Google reviews | 5 | `/services/reviews` |
| 3 | Why is my competitor ranking above me on Google Maps? | 4 | `/services/local-maps` |
| 3 | How do I get past customers to book again? | 3 | `/services/database-reactivation` |
| 3 | What should a missed call text back message say? | 1, 2 | both |
| 4 | Why am I wasting money on Google Ads? | 6 | `/services/google-ads` |
| 4 | Can AI answer the phone for my business? | 7 | `/services/ai-voice-agents` |
| 4 | Rewrite: Red flags when hiring an agency | 8 | `/about-us` |

## Standard every post must meet

- 1,500+ words
- Direct answer in the first paragraph, self-contained enough to be quoted alone
- H2s phrased as questions
- FAQ section, emitted as FAQPage schema from the post body
- At least two internal links to money pages
- One CTA
- Article schema with author, datePublished, dateModified

## What would sharpen this map

Search Console query data filtered to the United States, and the per-page query
breakdown for `/services/web-design` (201 impressions at position 9, zero
clicks — currently unexplained). Both are exports from the GSC UI. With those,
`INFERRED` rows can be re-scored against real demand instead of judgment.
