import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/**
 * vibeTeX marketing + docs site — deployed on Vercel (Next.js runtime).
 * No static `output: 'export'`: the Fumadocs search / OG / llms route handlers
 * run as serverless functions on Vercel. Final home is the apex domain
 * vibetex.dev (DEFERRED — placeholder until the real domain is attached).
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default withMDX(config);
