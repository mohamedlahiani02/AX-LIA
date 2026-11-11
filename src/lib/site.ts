export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? '';

export const routes = {
  home: { fr: '', en: '' },
  product: { fr: 'produit', en: 'product' },
  formation: { fr: 'produit/formation', en: 'product/training' },
  coworking: { fr: 'produit/coworking', en: 'product/coworking' },
  website: { fr: 'produit/site-web', en: 'product/website' },
  solutions: { fr: 'solutions', en: 'solutions' },
  solTraining: { fr: 'solutions/centres-de-formation', en: 'solutions/training-centres' },
  solCoworking: { fr: 'solutions/espaces-de-coworking', en: 'solutions/coworking-spaces' },
  solMulti: { fr: 'solutions/centres-multi-activites', en: 'solutions/multi-activity-centres' },
  solSchools: { fr: 'solutions/etablissements-scolaires-prives', en: 'solutions/private-schools' },
  pricing: { fr: 'tarifs', en: 'pricing' },
  method: { fr: 'methode', en: 'method' },
  resources: { fr: 'ressources', en: 'resources' },
  blog: { fr: 'ressources/blog', en: 'resources/blog' },
  guides: { fr: 'ressources/guides', en: 'resources/guides' },
  help: { fr: 'ressources/centre-d-aide', en: 'resources/help-center' },
  security: { fr: 'ressources/securite-et-tracabilite', en: 'resources/security-and-traceability' },
  about: { fr: 'a-propos', en: 'about' },
  demo: { fr: 'demo', en: 'demo' },
  contact: { fr: 'contact', en: 'contact' },
  legal: { fr: 'mentions-legales', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', en: 'privacy' },
  terms: { fr: 'cgu', en: 'terms' },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof routes;
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

export function formatTnd(amount: number, locale: Locale): string {
  const formatted = new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(amount);
  return `${formatted} TND`;
}

export type Item = { t: string; d?: string; to?: PageKey };

export type Section = {
  kind: 'cards' | 'steps' | 'capture' | 'prose' | 'links' | 'note' | 'diagram';
  label?: string;
  title?: string;
  lead?: string;
  items?: Item[];
  body?: string[];
  img?: string;
  alt?: string;
};

export type Page = {
  title: string;
  desc: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: Section[];
};

export type ModuleKey = 'formation' | 'coworking' | 'website';

export type ModuleInfo = {
  key: ModuleKey;
  name: string;
  short: string;
  tag: string;
  blocks: string[];
};
