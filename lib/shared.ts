export const appName = 'vibeTeX';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

/** Canonical one-liner. Reuse verbatim across README, About, npm, OG, docs. */
export const tagline =
  'An MCP server for LaTeX and Overleaf projects: Git bridge, project sync, and LaTeX compile for Claude and other MCP clients.';

/** Trademark / affiliation disclaimer. Reuse verbatim everywhere it appears. */
export const disclaimer =
  'vibeTeX is an independent open-source project and is not affiliated with, endorsed by, or sponsored by Overleaf or Digital Science.';

export const gitConfig = {
  user: 'oscardvs',
  repo: 'vibetex',
  branch: 'main',
};

export const npmPackage = '@oscardvs/vibetex';
export const installCmd = 'npx -y @oscardvs/vibetex';

export const repoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;
export const npmUrl = `https://www.npmjs.com/package/${npmPackage}`;

/** Polar (merchant-of-record) hosted checkout for the paid hosted tier.
 *  DEFERRED placeholder; replace with the real Polar checkout link / product. */
export const polarCheckout =
  process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL || 'https://buy.polar.sh/vibetex-hosted';
export const hostedPrice = '€30';
export const hostedPeriod = '/year';
/** Pay-once billing string: one-time license, 1-year expiry. */
export const hostedBilling = 'pay once · 1-year license';

/** Contact for privacy/data requests. Set up an email forward to a real inbox. */
export const contactEmail = 'privacy@vibetex.dev';
/** General/support contact. */
export const supportEmail = 'support@vibetex.dev';
/** Operator legal entity. Governing-law jurisdiction = Belgium (wired into /terms + /privacy). */
export const operator = 'Oscar Devos (“vibeTeX”)';
/** Governing-law jurisdiction for the Terms; EU consumer home-country mandatory rights are preserved. */
export const jurisdiction = 'Belgium';

/** Public site origin (DEFERRED placeholder domain). */
export const siteUrl = 'https://vibetex.dev';
/** The hosted connector URL subscribers add in claude.ai (DEFERRED placeholder). */
export const connectorUrl = 'https://mcp.vibetex.dev/mcp';
/** Master switch for hosted-tier sales. Flip to false to pause new subscriptions. */
export const hostedLive = true;
