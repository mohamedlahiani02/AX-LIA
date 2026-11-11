import type { Locale } from '@/lib/site';
import { en } from './en';
import { fr, type Dict } from './fr';

const dictionaries: Record<Locale, Dict> = { fr, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
