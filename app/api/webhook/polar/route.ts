import { Webhooks } from '@polar-sh/nextjs';
import { NextResponse } from 'next/server';

/**
 * POST /api/webhook/polar — receive Polar webhook events for the hosted license.
 *
 * Guarded: without POLAR_WEBHOOK_SECRET the route returns 503 rather than
 * failing the build. Wire the real fulfillment (issue/expire a 1-year license
 * key) into the handlers below once billing is live.
 *
 *   POLAR_WEBHOOK_SECRET — signing secret from the Polar dashboard
 */
const webhookSecret = process.env.POLAR_WEBHOOK_SECRET;

export const POST = webhookSecret
  ? Webhooks({
      webhookSecret,
      onOrderPaid: async () => {
        // TODO: provision / renew the user's 1-year vibeTeX hosted license key.
      },
      onSubscriptionCanceled: async () => {
        // TODO: mark the license to expire at period end.
      },
      onPayload: async () => {
        // Catch-all — useful for logging during bring-up.
      },
    })
  : async () =>
      NextResponse.json(
        { error: 'Webhook endpoint is not configured (POLAR_WEBHOOK_SECRET unset).' },
        { status: 503 },
      );

export const dynamic = 'force-dynamic';
