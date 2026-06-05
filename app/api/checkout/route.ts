import { Checkout } from '@polar-sh/nextjs';
import { NextResponse } from 'next/server';

/**
 * GET /api/checkout — start a Polar checkout for the vibeTeX hosted license.
 *
 * Env-driven and guarded: if POLAR_ACCESS_TOKEN is missing (e.g. preview
 * builds, forks, or before billing is wired up) the route returns 503 instead
 * of crashing the build or throwing at request time.
 *
 *   POLAR_ACCESS_TOKEN   — Polar organization access token
 *   POLAR_PRODUCT_ID     — the hosted-license product id (passed as ?products=)
 *   POLAR_SUCCESS_URL    — post-checkout redirect (default /pricing?success=1)
 *   POLAR_SERVER         — "sandbox" | "production" (default production)
 */
const accessToken = process.env.POLAR_ACCESS_TOKEN;

const handler = accessToken
  ? Checkout({
      accessToken,
      successUrl:
        process.env.POLAR_SUCCESS_URL ||
        'https://vibetex.dev/pricing?success=true&checkout_id={CHECKOUT_ID}',
      server: process.env.POLAR_SERVER === 'sandbox' ? 'sandbox' : 'production',
    })
  : async () =>
      NextResponse.json(
        { error: 'Hosted checkout is not configured (POLAR_ACCESS_TOKEN unset).' },
        { status: 503 },
      );

export const GET = handler;
export const dynamic = 'force-dynamic';
