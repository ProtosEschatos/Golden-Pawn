import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = routing.locales.includes(locale as any) ? locale : routing.defaultLocale;
  return {
    messages: (await import(`../../messages/${safeLocale}.json`)).default,
  };
});
