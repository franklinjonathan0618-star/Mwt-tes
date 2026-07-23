import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['id', 'en'],

  // Used when no locale matches
  defaultLocale: 'id'
});

export function proxy(request: any) {
  return intlMiddleware(request);
}

export default intlMiddleware;

export const config = {
  // Match only internationalized pathnames, and all page routes that need to be localized
  matcher: ['/', '/(id|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
