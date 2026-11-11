export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';

export const routes = {
  home: { fr: '', en: '' },
  legal: { fr: 'mentions-legales', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', en: 'privacy' },
  terms: { fr: 'cgu', en: 'terms' },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof routes;
export type LegalKey = Exclude<PageKey, 'home'>;
export const pageKeys = Object.keys(routes) as PageKey[];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function href(locale: Locale, key: PageKey): string {
  const slug = routes[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function resolvePage(locale: Locale, slug: string[] | undefined): PageKey | null {
  const path = (slug ?? []).join('/');
  return pageKeys.find((key) => routes[key][locale] === path) ?? null;
}

export type Tone = 'indigo' | 'ambre' | 'ciel' | 'blanc';
export type Brick = { t: string; d: string; tone: Tone };
export type LegalPage = { title: string; desc: string; blocks: { t: string; body: string[] }[] };
