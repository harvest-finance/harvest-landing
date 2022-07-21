/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';
const securityHeaders = [
  {
    key: 'x-download-options',
    value: 'noopen',
  },
  {
    key: 'x-dns-prefetch-control',
    value: 'off',
  },
  {
    key: 'x-content-type-options',
    value: 'nosniff',
  },
  {
    key: 'x-frame-options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'x-permitted-cross-domain-policies',
    value: 'none',
  },
  {
    key: 'x-xss-protection',
    value: '1; mode=block',
  },
]

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? './' : '',
  poweredByHeader: false
}

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
