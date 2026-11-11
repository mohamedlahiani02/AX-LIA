import Link from 'next/link';
import { Logo } from '@/components/ui';
import { getDict } from '@/content';
import { href, locales } from '@/lib/site';

export default function NotFound() {
  return (
    <main className="notfound">
      <Logo locale="fr" />
      {locales.map((locale) => {
        const text = getDict(locale).notFound;
        return (
          <div key={locale} lang={locale}>
            <h1>{text.title}</h1>
            <Link href={href(locale, 'home')} className="peek">
              {text.back}
            </Link>
          </div>
        );
      })}
    </main>
  );
}
