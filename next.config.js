module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },
};
