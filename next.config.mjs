import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
};

// Wrap config dengan Payload plugin
export default withPayload(nextConfig);
