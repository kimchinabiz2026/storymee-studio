import { NextRequest, NextResponse } from 'next/server';

const locales = ['vi', 'en'];
const defaultLocale = 'vi';

function getLocale(request: NextRequest): string {
  // Check cookie first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  // Check Accept-Language header
  const acceptLang = request.headers.get('Accept-Language') || '';
  if (acceptLang.includes('vi')) return 'vi';
  if (acceptLang.includes('en')) return 'en';

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip api routes, static files, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Check if pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  const response = NextResponse.redirect(newUrl);
  response.cookies.set('NEXT_LOCALE', locale, { maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
