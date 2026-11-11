import Image from 'next/image';
import Link from 'next/link';
import type { Dict } from '@/content/fr';
import { href, locales, type LegalKey, type Locale, type PageKey } from '@/lib/site';

type Base = { locale: Locale; dict: Dict };

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link href={href(locale, 'home')} className="logo" aria-label="AXÉLIA">
      <Image src="/img/axelia-mark.svg" alt="" width={32} height={32} priority />
      <span>AXÉLIA</span>
    </Link>
  );
}

function LanguageSwitch({ locale, page, label }: { locale: Locale; page: PageKey; label: string }) {
  return (
    <nav className="lang" aria-label={label}>
      {locales.map((code) => (
        <Link key={code} href={href(code, page)} hrefLang={code} aria-current={code === locale ? 'true' : undefined}>
          {code.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}

export function Header({ locale, dict, page }: Base & { page: PageKey }) {
  return (
    <header className="header">
      <a href="#main" className="skip">
        {dict.nav.skip}
      </a>
      <div className="wrap header-row">
        <Logo locale={locale} />
        <div className="header-side">
          <LanguageSwitch locale={locale} page={page} label={dict.nav.language} />
          <a href={`${href(locale, 'home')}#demo`} className="btn btn-small">
            {dict.nav.demo}
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer({ locale, dict }: Base) {
  const legal: LegalKey[] = ['legal', 'privacy', 'terms'];
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>{dict.signature}</p>
        <nav>
          {legal.map((key) => (
            <Link key={key} href={href(locale, key)}>
              {dict.legalPages[key].title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
