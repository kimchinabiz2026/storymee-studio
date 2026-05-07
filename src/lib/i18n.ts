// Dictionary loading for i18n
import type { Dictionary } from './types';

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};

export const locales = ['vi', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'vi';

export function getLocalizedPath(lang: string, path: string): string {
  return `/${lang}${path}`;
}
