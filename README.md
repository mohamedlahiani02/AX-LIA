# AXÉLIA — marketing site

One-page bilingual (FR/EN) site built with Next.js (App Router, TypeScript, static generation).

## Commands

```
npm install
npm run dev
npm run build
npm run typecheck
```

## Structure

| Path | Role |
| --- | --- |
| `src/lib/site.ts` | Locales, route table, URL helpers |
| `src/content/fr.ts`, `src/content/en.ts` | All copy, per locale. `en.ts` is type-checked against `fr.ts` |
| `src/app/[locale]/[[...slug]]/page.tsx` | Home page and legal pages |
| `src/components/client.tsx` | Rotating headline, screen reel, pointer effects, demo form |
| `src/app/api/demo/route.ts` | Demo request endpoint, forwards to `DEMO_WEBHOOK_URL` |

## Configuration

Copy `.env.example` to `.env.local`. On Vercel, set the same variables in the project settings and use the Next.js framework preset.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical URLs, hreflang and the sitemap |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address shown next to the form; hidden when empty |
| `DEMO_WEBHOOK_URL` | Receives demo requests as JSON; the form reports a failure when empty |
