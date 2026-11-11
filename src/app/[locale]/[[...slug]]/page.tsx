import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DemoForm, HostingCard, ModuleMap, SwitchPanel } from '@/components/client';
import { Capture, Cards, CtaBand, Diagram, Footer, Header, PageHero, SectionHead, Sections, Steps } from '@/components/ui';
import { getDict } from '@/content';
import type { Dict } from '@/content/fr';
import { bookingUrl, contactEmail, formatTnd, href, isLocale, locales, pageKeys, resolvePage, routes, type Locale, type PageKey } from '@/lib/site';

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
  const content = getDict(locale).pages[page];
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
  const home = dict.home;
  const hero = dict.pages.home;
  return (
    <>
      <section className="hero hero-home">
        <div className="wrap hero-grid">
          <div>
            <p className="label">{hero.eyebrow}</p>
            <h1>{hero.h1}</h1>
            <p className="lead">{hero.lead}</p>
            <div className="actions">
              <Link href={href(locale, 'demo')} className="btn">
                {dict.nav.demo}
              </Link>
              <Link href={href(locale, 'product')} className="more">
                {dict.nav.seeProduct}
              </Link>
            </div>
          </div>
          <Diagram dict={dict} animated />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHead title={home.problem.title} />
          <Cards items={home.problem.items} numbered />
        </div>
      </section>

      <section className="band band-blanc">
        <div className="wrap">
          <SectionHead label={home.system.label} title={home.system.title} lead={home.system.lead} />
          <ModuleMap
            hereLabel={home.system.here}
            moreLabel={dict.nav.more}
            modules={dict.modules.map((module) => ({
              ...module,
              count: home.system.count(module.blocks.length),
              link: href(locale, module.key),
            }))}
          />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHead label={home.proof.label} title={home.proof.title} />
          <div className="proof">
            {home.proof.items.map((item) => (
              <Capture
                key={item.img}
                img={item.img}
                alt={`${item.t} — AXÉLIA`}
                caption={
                  <>
                    <strong>{item.t}</strong> {item.d}
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="numbers">
        <dl className="wrap">
          {home.numbers.map((item, index) => (
            <div key={item.t}>
              <dd className={index === 0 ? 'is-key' : undefined}>{item.n}</dd>
              <dt>{item.t}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="band band-blanc">
        <div className="wrap">
          <SectionHead label={home.loop.label} title={home.loop.title} />
          <Steps items={home.loop.items} />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHead label={home.switch.label} title={home.switch.title} />
          <SwitchPanel withoutLabel={home.switch.without} withLabel={home.switch.with} rows={home.switch.rows} />
        </div>
      </section>

      <section className="band band-blanc">
        <div className="wrap">
          <SectionHead label={home.trust.label} title={home.trust.title} />
          <Cards items={home.trust.items} />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHead label={home.pricing.label} title={home.pricing.title} lead={dict.pricing.note} />
          <div className="grid">
            {dict.modules.map((module) => (
              <article key={module.key} className="card">
                <h3>{module.name}</h3>
                <p>{module.tag}</p>
                <p className="price">{dict.pricing.quote}</p>
              </article>
            ))}
          </div>
          <p className="after">
            <Link href={href(locale, 'pricing')} className="more">
              {home.pricing.link}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function Pricing({ locale, dict }: ViewProps) {
  const pricing = dict.pricing;
  return (
    <>
      <section className="band">
        <div className="wrap">
          <div className="grid">
            {dict.modules.map((module) => (
              <article key={module.key} className="card">
                <h3>{module.name}</h3>
                <p className="price">{pricing.quote}</p>
                <p className="label">{pricing.included}</p>
                <ul className="list">
                  {module.blocks.map((block) => (
                    <li key={block}>{block}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="after">{pricing.note}</p>
        </div>
      </section>
      <section className="band band-blanc">
        <div className="wrap">
          <div className="grid">
            <article className="card">
              <h3>{pricing.extras.setup.t}</h3>
              <p className="price">{pricing.quote}</p>
              <p>{pricing.extras.setup.d}</p>
            </article>
            <HostingCard
              label={pricing.billing.label}
              monthlyLabel={pricing.billing.monthly}
              annualLabel={pricing.billing.annual}
              title={pricing.extras.hosting.t}
              monthly={pricing.extras.hosting.monthly}
              annual={pricing.extras.hosting.annual}
              quote={pricing.quote}
            />
            <article className="card">
              <h3>{pricing.format.t}</h3>
              <p>{pricing.format.d}</p>
              <p className="amount">{formatTnd(1250, locale)}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <SectionHead title={pricing.stepsTitle} />
          <Steps items={dict.deployment} />
        </div>
      </section>
      <section className="band band-blanc">
        <div className="wrap">
          <SectionHead title={pricing.conditions.title} />
          <Cards items={pricing.conditions.items} />
        </div>
      </section>
    </>
  );
}

function ContactLine({ dict }: { dict: Dict }) {
  if (!contactEmail) return null;
  return (
    <p className="after">
      {dict.demo.contactLine} <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
    </p>
  );
}

function Demo({ locale, dict }: ViewProps) {
  const demo = dict.demo;
  return (
    <section className="band">
      <div className={bookingUrl ? 'wrap demo demo-split' : 'wrap demo'}>
        {bookingUrl && (
          <div>
            <h2>{demo.calendar}</h2>
            <iframe className="calendar" src={bookingUrl} title={demo.calendar} loading="lazy" />
          </div>
        )}
        <div>
          <h2>{bookingUrl ? demo.form : dict.nav.demo}</h2>
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
          <p className="after">{demo.prepare}</p>
          <ContactLine dict={dict} />
        </div>
      </div>
    </section>
  );
}

export default async function Page({ params }: Props) {
  const found = resolve(await params);
  if (!found) notFound();
  const { locale, page } = found;
  const dict = getDict(locale);
  const content = dict.pages[page];
  const view: ViewProps = { locale, dict };
  const isHome = page === 'home';
  const ownCta = page === 'demo' || page === 'contact';

  return (
    <>
      <Header locale={locale} dict={dict} page={page} />
      <main id="main">
        {isHome ? (
          <Home {...view} />
        ) : (
          <>
            <PageHero eyebrow={content.eyebrow} h1={content.h1} lead={content.lead}>
              {page === 'contact' && (
                <div className="actions">
                  <Link href={href(locale, 'demo')} className="btn">
                    {dict.nav.demo}
                  </Link>
                  {contactEmail && (
                    <a className="more" href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </a>
                  )}
                </div>
              )}
            </PageHero>
            {page === 'pricing' && <Pricing {...view} />}
            {page === 'demo' && <Demo {...view} />}
            <Sections locale={locale} dict={dict} sections={content.sections} />
          </>
        )}
        {!ownCta && <CtaBand locale={locale} dict={dict} />}
      </main>
      <Footer locale={locale} dict={dict} page={page} />
    </>
  );
}
