import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DemoForm, PointerZone, Reel, RotatingWord } from '@/components/client';
import { Footer, Header } from '@/components/ui';
import { getDict } from '@/content';
import type { Dict } from '@/content/fr';
import { contactEmail, href, isLocale, locales, pageKeys, resolvePage, routes, type LegalKey, type Locale, type PageKey } from '@/lib/site';

type Params = { locale: string; slug?: string[] };
type Props = { params: Promise<Params> };
type ViewProps = { locale: Locale; dict: Dict };

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) =>
    pageKeys.map((key) => ({ locale, slug: routes[key][locale] ? routes[key][locale].split('/') : [] })),
  );
}

function resolve(params: Params): { locale: Locale; page: PageKey } | null {
  if (!isLocale(params.locale)) return null;
  const page = resolvePage(params.locale, params.slug);
  return page ? { locale: params.locale, page } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = resolve(await params);
  if (!found) return {};
  const { locale, page } = found;
  const dict = getDict(locale);
  const content = page === 'home' ? dict.meta : dict.legalPages[page];
  return {
    title: page === 'home' ? { absolute: content.title } : content.title,
    description: content.desc,
    alternates: {
      canonical: href(locale, page),
      languages: { fr: href('fr', page), en: href('en', page), 'x-default': href('fr', page) },
    },
    openGraph: {
      title: content.title,
      description: content.desc,
      url: href(locale, page),
      siteName: 'AXÉLIA',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

function Home({ locale, dict }: ViewProps) {
  const { hero, reel, universe, cta, demo } = dict;
  const marquee = [...dict.marquee, ...dict.marquee];
  return (
    <>
      <PointerZone className="hero">
        <div className="wrap">
          <h1>
            {hero.pre} <RotatingWord words={hero.words} />
            <br />
            {hero.post}
          </h1>
          <p className="lead">{hero.sub}</p>
          <div className="actions">
            <a href="#demo" className="btn">
              {dict.nav.demo}
            </a>
            <a href="#reel" className="peek">
              {hero.peek}
            </a>
          </div>
        </div>
      </PointerZone>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </div>
      </div>

      <section className="section" id="reel">
        <div className="wrap">
          <h2>{reel.title}</h2>
          <p className="lead">{reel.sub}</p>
          <Reel tabs={reel.tabs} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{universe.title}</h2>
          <p className="lead">{universe.sub}</p>
          <div className="bricks">
            {universe.bricks.map((brick, index) => (
              <PointerZone key={brick.t} className={`brick brick-${brick.tone}`} tilt>
                <span className="brick-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{brick.t}</h3>
                <p>{brick.d}</p>
              </PointerZone>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta" id="demo">
        <div className="wrap cta-grid">
          <div>
            <h2>{cta.title}</h2>
            <p className="lead">{cta.sub}</p>
            {contactEmail && (
              <p className="contact">
                {demo.contactLine} <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            )}
          </div>
          <DemoForm
            locale={locale}
            labels={demo.fields}
            text={{
              submit: demo.submit,
              sending: demo.sending,
              required: demo.required,
              invalidEmail: demo.invalidEmail,
              success: demo.success,
              prepare: demo.prepare,
              failure: demo.failure,
            }}
          />
        </div>
      </section>
    </>
  );
}

function Legal({ locale, dict, page }: ViewProps & { page: LegalKey }) {
  const content = dict.legalPages[page];
  return (
    <section className="section legal">
      <div className="wrap">
        <h1>{content.title}</h1>
        {content.blocks.map((block) => (
          <div key={block.t}>
            <h2>{block.t}</h2>
            {block.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
        <Link href={href(locale, 'home')} className="peek">
          {dict.nav.back}
        </Link>
      </div>
    </section>
  );
}

export default async function Page({ params }: Props) {
  const found = resolve(await params);
  if (!found) notFound();
  const { locale, page } = found;
  const dict = getDict(locale);
  return (
    <>
      <Header locale={locale} dict={dict} page={page} />
      <main id="main">{page === 'home' ? <Home locale={locale} dict={dict} /> : <Legal locale={locale} dict={dict} page={page} />}</main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
