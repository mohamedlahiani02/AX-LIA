import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';
import { defaultLocale, isLocale, locales, siteUrl } from '@/lib/site';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], weight: ['600', '800'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'AXÉLIA', template: '%s | AXÉLIA' },
};

export const viewport: Viewport = { themeColor: '#0E1A36' };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <html lang={isLocale(locale) ? locale : defaultLocale} className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
