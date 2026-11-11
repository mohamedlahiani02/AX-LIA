import type { MetadataRoute } from 'next';
import { href, locales, pageKeys, siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys.flatMap((key) =>
    locales.map((locale) => ({
      url: `${siteUrl}${href(locale, key)}`,
      alternates: {
        languages: Object.fromEntries(locales.map((code) => [code, `${siteUrl}${href(code, key)}`])),
      },
    })),
  );
}
