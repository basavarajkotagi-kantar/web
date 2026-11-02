import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
 async rewrites() {
  const apiOrigin = process.env.API_ORIGIN ?? "http://127.0.0.1:8000";
  return [{ source: "/api/:path*", destination: `${apiOrigin}/api/:path*` }];
},
};

export default nextConfig;
