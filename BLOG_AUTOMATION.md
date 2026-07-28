# Sky Lift Group — Automated Daily Blog

This repo publishes **one SEO blog post every day, automatically**. No manual work is needed once it's turned on.

## How it works

1. A **GitHub Action** (`.github/workflows/daily-blog.yml`) runs every day at 13:00 UTC (~9 AM US Eastern).
2. It runs `scripts/generate-post.mjs`, which:
   - picks the next unused topic from `scripts/topics.json` (rotating through categories, never repeating one),
   - asks the Claude API to write a full 2,000+ word, SEO-optimized article (headings, table, FAQ, internal links, CTA),
   - saves it as a Markdown file in `src/content/blog/`.
3. It runs `npm run build` to **verify the site still builds** and to regenerate `public/sitemap.xml` and `public/rss.xml` (so the new post is discoverable by Google).
4. It commits the new post and **pushes to `main`** → Vercel deploys automatically.

The blog itself lives at **`/blog`** (index) and **`/blog/<slug>`** (each post). Each post includes `Article` + `FAQPage` + `Breadcrumb` structured data for Google featured snippets and AI Overviews.

## ⚙️ One-time setup (required to turn it on)

The automation needs a Claude API key so it can write the articles. You add it once as a GitHub secret — **you never share it with anyone; it stays in your GitHub account.**

1. Get an API key from **https://console.anthropic.com** → *API Keys* → *Create Key*.
2. In this repository on GitHub, go to **Settings → Secrets and variables → Actions → New repository secret**.
3. Name it exactly: **`ANTHROPIC_API_KEY`** — paste your key as the value — **Add secret**.

That's it. The next scheduled run will publish a post.

### Test it right now (optional)

Go to the **Actions** tab → **Daily Blog Post** → **Run workflow**. In a couple of minutes a new post appears and the site redeploys.

## 💵 Cost

Each article costs roughly a few cents to a few dozen cents of Claude API usage (depends on the model). By default it uses `claude-opus-4-8` (highest quality). To use a lower-cost model, add a repository **variable** (Settings → Secrets and variables → Actions → Variables) named `ANTHROPIC_MODEL` with the value `claude-sonnet-5`.

## Adding or changing topics

Edit `scripts/topics.json`. Each entry looks like:

```json
{ "slug": "url-friendly-slug", "title": "Working Title", "primaryKeyword": "target keyword", "category": "Local SEO", "serviceLink": "/services/seo" }
```

When every preset topic has been published, the system automatically asks Claude to propose fresh, non-duplicate topics — so it keeps going even if you never touch this file.

## Changing the schedule

Edit the `cron` line in `.github/workflows/daily-blog.yml`. For example `0 14 * * 1-5` = 2 PM UTC, weekdays only.
