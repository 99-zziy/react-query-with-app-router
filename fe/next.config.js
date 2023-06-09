/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:4000/:path*",
      },
    ];
  },
};
