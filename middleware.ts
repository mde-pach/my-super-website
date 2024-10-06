import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  if (url.pathname.startsWith('/_next')) {
    // Trick to handle missing assets that are relative in the original websites but
    // we need to use `assetPrefix` in the target rewritten url app to make it work
    // in a real vercel deployment.
    // See https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
    // If correctly setup, you don't need this config and you can remove it.
    //
    // WARNING: it will break the home page but will works for the docs one.
    console.log('Rewriting /_next route:', url.pathname);
    const newUrl = "https://meilisearch.com/_next" + url.pathname.slice(6)
    return NextResponse.rewrite(newUrl)
  }
}

export const config = {
  matcher: '/_next/:path*',
}