/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/register",
        destination:
          "https://mkausa.wufoo.com/forms/2022-national-khuddam-atfal-ijtema-registration/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
