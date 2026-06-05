import { CustomerPortal } from '@polar-sh/nextjs';
import { NextResponse } from 'next/server';

/**
 * GET /api/portal — open the Polar customer portal for an existing customer.
 *
 * Guarded: without POLAR_ACCESS_TOKEN the route returns 503. The customer id is
 * read from the `customer_id` query param here as a placeholder; once auth is
 * wired in, resolve it from the signed-in session instead.
 *
 *   POLAR_ACCESS_TOKEN — Polar organization access token
 *   POLAR_SERVER       — "sandbox" | "production" (default production)
 */
const accessToken = process.env.POLAR_ACCESS_TOKEN;

export const GET = accessToken
  ? CustomerPortal({
      accessToken,
      getCustomerId: async (req) =>
        new URL(req.url).searchParams.get('customer_id') ?? '',
      server: process.env.POLAR_SERVER === 'sandbox' ? 'sandbox' : 'production',
    })
  : async () =>
      NextResponse.json(
        { error: 'Customer portal is not configured (POLAR_ACCESS_TOKEN unset).' },
        { status: 503 },
      );

export const dynamic = 'force-dynamic';
