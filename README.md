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
| `src/app/api/demo/route.ts` | Demo request endpoint, sends notification emails through Resend |

## Configuration

Copy `.env.example` to `.env.local`. On Vercel, set the same variables in the project settings and use the Next.js framework preset.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical URLs, hreflang and the sitemap |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address shown next to the form; hidden when empty |
| `RESEND_API_KEY` | Server-only Resend API key for sending email |
| `DEMO_EMAIL_FROM` | Sender on a domain verified in Resend, e.g. `AXELIA <demo@axelia.software>` |
| `DEMO_EMAIL_TO` | Destination inbox; defaults to `sales.axelia@outlook.com` |

## Demo email setup

1. Create a Resend account and add `axelia.software` under Domains.
2. Add the DNS records Resend displays at your DNS provider and wait for verification. Preserve existing website and email records.
3. Create a sending API key and save it as `RESEND_API_KEY` in Vercel's Production environment variables. Do not commit it.
4. Set `DEMO_EMAIL_FROM` to `AXELIA <demo@axelia.software>` and `DEMO_EMAIL_TO` to `sales.axelia@outlook.com`.
5. Remove the obsolete `DEMO_WEBHOOK_URL` variable and redeploy.
6. Submit a demo request and confirm receipt in Outlook (including Junk). Replying uses the visitor's email address.

No webhook or Outlook password is required. A successful API response means the email provider accepted the message; inbox delivery must be checked separately.
