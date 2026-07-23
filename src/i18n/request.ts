import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (context) => {
  const reqLocale = (context as any).requestLocale;
  const resolvedLocale = reqLocale ? (await reqLocale) : (context as any).locale;
  const activeLocale = resolvedLocale || 'id';
  return {
    locale: activeLocale,
    messages: (await import(`../../messages/${activeLocale}.json`)).default
  };
});
