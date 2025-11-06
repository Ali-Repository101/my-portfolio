/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "www.cobry.co.uk", // 👈 allow this domain
      "localhost",        // optional, for local testing
    ],
  },
};

export default nextConfig;
