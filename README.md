# Pathrise — AI-Powered Talent Visa & Green Card Platform

A unified, single-page Next.js application combining the best strategies from
six visa platforms (USWALA, eb2niw.info, LevelUp EB1A Experts, Tukki.ai,
eb1greencard.info, oscarsgreencard.com) into one premium product: AI-powered
eligibility, drafting, opportunity matching, and optional attorney support
across 15+ visa pathways.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York)
- **Animations:** Framer Motion
- **Fonts:** Inter + Playfair Display + JetBrains Mono
- **Icons:** Lucide React
- **Hosting:** Vercel (recommended)
- **Domain:** Any registrar (Spaceship, Cloudflare, Namecheap)

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
bun install

# 2. Copy env template and configure (optional for local dev)
cp .env.example .env.local

# 3. Run dev server
bun run dev

# 4. Open http://localhost:3000
```

Lint:
```bash
bun run lint
```

---

## Deploy to Vercel + Custom Domain

### Prerequisites
- A GitHub account
- A Vercel account (free at vercel.com)
- A custom domain (e.g. from Spaceship, Cloudflare, Namecheap)

### Step 1 — Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/pathrise.git
git branch -M main
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click **"Import"** on your `pathrise` repo
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Wait ~2 minutes — you'll get a `pathrise-xxx.vercel.app` URL

### Step 3 — Connect Your Domain

In Vercel:
1. Project → **Settings → Domains**
2. Click **"Add"**, enter `yourdomain.com`
3. Add the `www` variant too
4. Vercel shows DNS records to add

In your registrar's DNS panel:
| Type  | Name  | Value                     |
|-------|-------|---------------------------|
| A     | `@`   | `76.76.21.21`             |
| CNAME | `www` | `cname.vercel-dns.com`    |

Back in Vercel → click **Verify** → SSL auto-provisions in 1-5 minutes.

### Step 4 — Set Canonical Domain (SEO)

In Vercel → Settings → Domains → mark `yourdomain.com` as primary,
redirect `www.yourdomain.com` → `yourdomain.com`.

---

## Environment Variables

Configure in Vercel → **Settings → Environment Variables**. All are optional —
the site runs fine without them; analytics scripts only render when set.

| Variable                          | Purpose                | Example              |
|-----------------------------------|------------------------|----------------------|
| `NEXT_PUBLIC_SITE_URL`            | Canonical site URL    | `https://pathrise.io` |
| `NEXT_PUBLIC_GA_ID`               | Google Analytics 4    | `G-XXXXXXXXXX`       |
| `NEXT_PUBLIC_META_PIXEL_ID`       | Meta/Facebook Pixel    | `123456789012345`    |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag   | `1234567`            |
| `DATABASE_URL`                     | Prisma DB (optional)   | `file:./dev.db`      |

Copy `.env.example` to `.env.local` for local development.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Premium emerald + cream + gold theme
│   ├── layout.tsx            # Fonts, metadata, analytics wrapper
│   ├── page.tsx              # Single-page composition
│   ├── icon.svg              # Favicon (auto-detected by Next.js)
│   ├── opengraph-image.png   # OG share image (auto-detected)
│   ├── robots.ts             # Generates /robots.txt
│   └── sitemap.ts            # Generates /sitemap.xml
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── site/
│       ├── analytics.tsx     # GA4 + Meta Pixel + LinkedIn Insight (env-gated)
│       ├── eligibility-quiz.tsx
│       ├── header.tsx
│       ├── hero.tsx
│       ├── sections.tsx
│       ├── pricing.tsx
│       ├── visa-compare.tsx
│       ├── faq.tsx
│       └── footer.tsx
├── lib/
│   ├── platform-data.ts      # All content + quiz scoring engine
│   ├── db.ts                 # Prisma client (optional)
│   └── utils.ts              # Tailwind merge utilities
scripts/
└── generate-og-image.py      # Python script to regenerate OG image
public/
├── manifest.json             # PWA manifest
└── logo.svg                  # Default logo
vercel.json                   # Security headers + caching + redirects
.env.example                  # Template for environment variables
```

---

## Editing the Site

All content lives in **`src/lib/platform-data.ts`** — edit one file, the whole
site updates. Common edits:

| Want to...                       | Edit this file                                |
|----------------------------------|-----------------------------------------------|
| Change pricing                   | `src/lib/platform-data.ts` → `PRICING`        |
| Add a testimonial                | `src/lib/platform-data.ts` → `TESTIMONIALS`   |
| Add a visa pathway               | `src/lib/platform-data.ts` → `VISA_PATHWAYS`  |
| Change hero copy                 | `src/components/site/hero.tsx`                |
| Change brand colors              | `src/app/globals.css` → `:root` variables     |
| Regenerate OG share image        | `python3 scripts/generate-og-image.py`        |
| Add a new section                | `src/app/page.tsx` (compose in component)    |
| Disable a section                | `src/app/page.tsx` (comment out)              |

After any edit:
```bash
git add .
git commit -m "Describe your change"
git push
# Vercel auto-deploys in ~90 seconds
```

---

## Post-Launch Checklist

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Set up [Vercel Analytics](https://vercel.com/analytics) (free, 1-click)
- [ ] Configure GA4 / Meta Pixel / LinkedIn Insight env vars (when ready)
- [ ] Enable domain lock + DNSSEC in your registrar
- [ ] Set up `hello@yourdomain.com` email forwarding
- [ ] Test OG preview at [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Test mobile speed at [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)

---

## Disclaimer

Pathrise is an educational and tooling platform, not a law firm. Content on
this site is not legal advice and does not create an attorney-client relationship.
Individual outcomes depend on facts specific to each case.

---

## License

Private. All rights reserved.
