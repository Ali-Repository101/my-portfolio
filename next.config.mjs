/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Equivalent to the former `images.domains` list: hostname-only patterns
    // match any protocol, port, path and query string, exactly as `domains` did.
    remotePatterns: [
      { hostname: "www.cobry.co.uk" }, // 👈 allow this domain
      { hostname: "localhost" },       // optional, for local testing
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
