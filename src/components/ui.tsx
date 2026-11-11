import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Dict } from '@/content/fr';
import { href, locales, type Locale, type PageKey, type Section } from '@/lib/site';

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
  const items: [PageKey, string][] = [
    ['product', dict.nav.product],
    ['solutions', dict.nav.solutions],
    ['pricing', dict.nav.pricing],
    ['resources', dict.nav.resources],
    ['about', dict.nav.about],
  ];
  const quiet = page === 'home' || page === 'demo';
  const links = (
    <>
      {items.map(([key, label]) => (
        <Link key={key} href={href(locale, key)}>
          {label}
        </Link>
      ))}
      <Link href={href(locale, 'demo')} className={quiet ? 'btn btn-outline' : 'btn'}>
        {dict.nav.demo}
      </Link>
    </>
  );
  return (
    <header className="header">
      <a href="#main" className="skip">
        {dict.nav.skip}
      </a>
      <div className="wrap header-row">
        <Logo locale={locale} />
        <nav className="nav" aria-label={dict.nav.main}>
          {links}
        </nav>
        <details className="menu">
          <summary>{dict.nav.menu}</summary>
          <nav aria-label={dict.nav.main}>{links}</nav>
        </details>
      </div>
    </header>
  );
}

export function Footer({ locale, dict, page }: Base & { page: PageKey }) {
  const short = dict.short;
  const columns: [string, [PageKey, string][]][] = [
    [
      dict.footer.product,
      [
        ['product', dict.footer.overview],
        ['formation', dict.modules[0].name],
        ['coworking', dict.modules[1].name],
        ['website', dict.modules[2].name],
        ['pricing', short.pricing],
      ],
    ],
    [
      dict.footer.solutions,
      [
        ['solTraining', short.solTraining],
        ['solCoworking', short.solCoworking],
        ['solMulti', short.solMulti],
        ['solSchools', short.solSchools],
      ],
    ],
    [
      dict.footer.resources,
      [
        ['blog', short.blog],
        ['guides', short.guides],
        ['help', short.help],
        ['security', short.security],
      ],
    ],
    [
      dict.footer.company,
      [
        ['about', short.about],
        ['method', short.method],
        ['demo', short.demo],
        ['contact', short.contact],
      ],
    ],
  ];
  const legal: PageKey[] = ['legal', 'privacy', 'terms'];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo locale={locale} />
            <p className="signature">{dict.signature}</p>
          </div>
          {columns.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <p className="label">{title}</p>
              {links.map(([key, label]) => (
                <Link key={key} href={href(locale, key)}>
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-base">
          <p>{dict.footer.amounts}</p>
          <div className="footer-legal">
            {legal.map((key) => (
              <Link key={key} href={href(locale, key)}>
                {short[key as 'legal' | 'privacy' | 'terms']}
              </Link>
            ))}
            <LanguageSwitch locale={locale} page={page} label={dict.nav.language} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Diagram({ dict, animated = false }: { dict: Dict; animated?: boolean }) {
  return (
    <div className={animated ? 'dia dia-animated' : 'dia'} role="img" aria-label={dict.diagramAlt}>
      <div className="dia-core">
        <span className="dot" />
        <strong>{dict.core.name}</strong>
        <span>{dict.core.items}</span>
      </div>
      <div className="dia-mods">
        {dict.modules.map((module) => (
          <div key={module.key} className="dia-mod">
            <strong>{module.short}</strong>
            <span>{module.tag}</span>
          </div>
        ))}
      </div>
      <div className="dia-bridges">
        {dict.bridges.map((bridge) => (
          <span key={bridge}>{bridge}</span>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({ label, title, lead }: { label?: string; title?: string; lead?: string }) {
  if (!label && !title && !lead) return null;
  return (
    <div className="head">
      {label && <p className="label">{label}</p>}
      {title && <h2>{title}</h2>}
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function Capture({ img, alt, caption }: { img: string; alt: string; caption?: ReactNode }) {
  return (
    <figure className="capture">
      <Image src={`/img/${img}`} alt={alt} width={1440} height={900} sizes="(max-width: 1100px) 100vw, 1100px" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Steps({ items }: { items: { t: string; d?: string }[] }) {
  return (
    <ol className="steps">
      {items.map((item, index) => (
        <li key={item.t}>
          <span className="num">{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.t}</h3>
          {item.d && <p>{item.d}</p>}
        </li>
      ))}
    </ol>
  );
}

export function Cards({ items, numbered = false }: { items: { t: string; d?: string }[]; numbered?: boolean }) {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <article key={item.t} className="card">
          {numbered && <span className="num">{String(index + 1).padStart(2, '0')}</span>}
          <h3>{item.t}</h3>
          {item.d && <p>{item.d}</p>}
        </article>
      ))}
    </div>
  );
}

export function Sections({ locale, dict, sections }: Base & { sections: Section[] }) {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className={index % 2 === 1 ? 'band band-blanc' : 'band'}>
          <div className="wrap">
            {section.kind !== 'capture' && section.kind !== 'note' && section.kind !== 'prose' && (
              <SectionHead label={section.label} title={section.title} lead={section.lead} />
            )}
            {section.kind === 'cards' && <Cards items={section.items ?? []} />}
            {section.kind === 'steps' && <Steps items={section.items ?? []} />}
            {section.kind === 'diagram' && (
              <div className="panel-nuit">
                <Diagram dict={dict} />
              </div>
            )}
            {section.kind === 'links' && (
              <div className="grid">
                {(section.items ?? []).map((item) => (
                  <Link key={item.t} href={href(locale, item.to ?? 'home')} className="card card-link">
                    <h3>{item.t}</h3>
                    {item.d && <p>{item.d}</p>}
                    <span className="more">{dict.nav.more}</span>
                  </Link>
                ))}
              </div>
            )}
            {section.kind === 'capture' && section.img && (
              <Capture img={section.img} alt={section.alt ?? ''} caption={section.title} />
            )}
            {section.kind === 'note' && (
              <aside className="note">
                {section.title && <h2>{section.title}</h2>}
                {(section.body ?? []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </aside>
            )}
            {section.kind === 'prose' && (
              <div className="prose">
                {section.title && <h2>{section.title}</h2>}
                {(section.body ?? []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

export function PageHero({ eyebrow, h1, lead, children }: { eyebrow: string; h1: string; lead: string; children?: ReactNode }) {
  return (
    <section className="hero">
      <div className="wrap">
        <p className="label">{eyebrow}</p>
        <h1>{h1}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function CtaBand({ locale, dict }: Base) {
  return (
    <section className="cta">
      <div className="wrap">
        <h2>{dict.cta.title}</h2>
        <p className="lead">{dict.cta.lead}</p>
        <Link href={href(locale, 'demo')} className="btn">
          {dict.nav.demo}
        </Link>
      </div>
    </section>
  );
}
