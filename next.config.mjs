import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': './payload.config.ts',
    };
    return config;
  },
};

// Wrap config dengan Payload plugin
export default withPayload(nextConfig);
