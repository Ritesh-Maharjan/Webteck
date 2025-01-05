/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webteckpayload.vercel.app",
      },
    ],
  },
};

export default nextConfig;
