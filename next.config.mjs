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
  // The portfolio is a single page; old section routes point to their anchors.
  async redirects() {
    return ["skills", "about", "projects", "contact"].map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
