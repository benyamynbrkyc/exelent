import { type TranslationValues } from 'next-intl';

export type TranslationFunction = (key: string, values?: TranslationValues) => string;