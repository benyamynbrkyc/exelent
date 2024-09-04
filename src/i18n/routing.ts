import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'bs'],
  defaultLocale: 'en'
});

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);