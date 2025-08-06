import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cek apakah pathname-nya dimulai dengan /api/
  if (!pathname.startsWith('/api/')) {
    // Jika tidak, kembalikan respons 404 Not Found
    return NextResponse.json(
      {
        message: 'Endpoint not found. This server is for API use only.',
      },
      {
        status: 404,
      }
    );
  }

  // Jika ya, biarkan request berlanjut
  return NextResponse.next();
}

// Konfigurasi matcher untuk menentukan path mana yang akan dijalankan middleware
export const config = {
  matcher: [
    // Ini akan mencocokkan semua path kecuali:
    // - Path yang dimulai dengan /api/
    // - Berkas Next.js internal (_next/static, _next/image, dll.)
    // - Berkas publik (favicon.ico, robots.txt, dll.)
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|manifest.webmanifest).*)',
  ],
};
