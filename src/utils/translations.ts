import { getTranslations as getNextIntlTranslations } from 'next-intl/server';
import { type TranslationFunction } from '@/types/translations';

export async function getTranslations(namespace: string): Promise<TranslationFunction> {
  return await getNextIntlTranslations(namespace) as TranslationFunction;
}