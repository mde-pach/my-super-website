/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      // Rewrite internally urls to the target website.
      // No need to have more configuration than this.
      beforeFiles: [{
        source: '/docs:path*',
        destination: 'https://www.meilisearch.com/docs:path*',
      }],
      // Trick to handle missing assets that are relative in the original websites but
      // we need to use `assetPrefix` in the target rewritten url app to make it work
      // in a real vercel deployment.
      // See https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
      // If correctly setup, you don't need this config and you can remove it.
      fallback: [{
        source: '/:path*',
        destination: 'https://www.meilisearch.com/:path*',
      }]
    }
  },
  trailingSlash: false,
}

export default nextConfig