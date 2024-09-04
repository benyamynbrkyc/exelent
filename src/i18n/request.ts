import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  if (!routing.locales.includes(locale as any)) {
    return {
      messages: (await import(`../../messages/en.json`)).default
    };
  }
  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});