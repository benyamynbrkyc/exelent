/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

type SupportedLocale = (typeof routing.locales)[number];

export default getRequestConfig(async ({locale}) => {
  if (!routing.locales.includes(locale as SupportedLocale)) {
    return {
      // Explicitly type the import result
      messages: (await import(`../../messages/en.json`)).default
    };
  }
  return {
    // Explicitly type the import result
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});