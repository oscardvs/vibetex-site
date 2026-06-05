# vibetex-site

The marketing + documentation site for **vibeTeX** — _the everything Overleaf
MCP server — Git bridge, project sync, and LaTeX compile for Claude and any MCP
client._ Built with [Fumadocs](https://fumadocs.dev) on Next.js 16 + React 19 +
Tailwind v4, and deployed on **Vercel**.

> vibeTeX is an independent open-source project and is not affiliated with,
> endorsed by, or sponsored by Overleaf or Digital Science.

## Develop

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Build

```bash
pnpm build
```

Vercel auto-deploys from the default branch; the Fumadocs search, OG-image, and
`llms.txt` route handlers run on the Vercel Next.js runtime (no static export).

## Layout

| Path                         | Description                                              |
| ---------------------------- | ------------------------------------------------------- |
| `app/(home)`                 | Landing page, pricing, privacy, terms.                  |
| `app/docs`                   | Documentation layout and pages.                         |
| `app/api/search/route.ts`    | Fumadocs static search handler.                         |
| `app/api/checkout`           | Polar checkout (env-guarded — disabled without keys).   |
| `app/api/webhook/polar`      | Polar webhook receiver (env-guarded).                   |
| `app/api/portal`             | Polar customer-portal link (env-guarded).               |
| `content/docs/*.mdx`         | Documentation content (GFM + fenced code + mermaid).    |
| `lib/shared.ts`              | Site-wide constants (name, links, pricing, disclaimer). |

## Environment

The site builds and runs with no env vars. Billing routes activate when set:

```
POLAR_ACCESS_TOKEN     Polar organization access token
POLAR_WEBHOOK_SECRET   Polar webhook signing secret
POLAR_PRODUCT_ID       Hosted-license product id
POLAR_SUCCESS_URL      Post-checkout redirect (optional)
POLAR_SERVER           "sandbox" | "production" (optional)
NEXT_PUBLIC_POLAR_CHECKOUT_URL  Override the marketing CTA link (optional)
```

MIT © 2026 Oscar Devos.
