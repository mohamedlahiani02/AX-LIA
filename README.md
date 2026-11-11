# AXÉLIA — marketing site

Bilingual (FR/EN) marketing site built with Next.js (App Router, TypeScript, static generation).

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
| `src/lib/site.ts` | Locales, translated route table, URL helpers, TND formatting |
| `src/content/fr.ts`, `src/content/en.ts` | All copy, per locale. `en.ts` is type-checked against `fr.ts` |
| `src/app/[locale]/[[...slug]]/page.tsx` | Single route resolving every page from the route table |
| `src/components/ui.tsx` | Server components: header, footer, system diagram, section templates |
| `src/components/client.tsx` | Interactive components: module map, comparison switch, billing toggle, demo form |
| `src/app/api/demo/route.ts` | Demo request endpoint, forwards to `DEMO_WEBHOOK_URL` |
| `src/app/sitemap.ts`, `src/app/robots.ts` | `sitemap.xml` with hreflang alternates, `robots.txt` |

To add a page: add an entry to `routes` in `src/lib/site.ts`, then its content in both dictionaries.

## Configuration

Copy `.env.example` to `.env.local`. On Vercel, set the same variables in the project settings.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical URLs, hreflang and the sitemap |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address; hidden when empty |
| `NEXT_PUBLIC_BOOKING_URL` | Calendar embedded on the demo page; form only when empty |
| `DEMO_WEBHOOK_URL` | Receives demo requests as JSON; the form reports a failure when empty |

## Before going live

- Replace the About copy (mission, vision, values) with the verbatim brandbook text.
- Complete the legal pages with the publisher and hosting details.
- Publish the blog articles and guides currently listed as upcoming.
