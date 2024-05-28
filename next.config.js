/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/auth', destination: '/auth/signin', permanent: false },
      { source: '/user', destination: '/user/home', permanent: false },
      { source: '/', destination: '/index.html', permanent: false },
      { source: '/_error', destination: '/404.html', permanent: true },
      { source: '/404', destination: '/404.html', permanent: true },
    ];
  },
  i18n: {
    locales: ['en', 'cn'],
    defaultLocale: 'cn',
  },
};

module.exports = nextConfig;
