// =============================================================
// ParentWise — Create Payment Intent
// Vercel Serverless Function (Node 18+, native fetch)
//
// Environment variables (set in Vercel dashboard):
//   STRIPE_SECRET_KEY — your Stripe secret key (sk_live_... or sk_test_...)
//
// POST body: { bumpIncluded: boolean }
// Response:  { clientSecret: string }
// =============================================================

const STRIPE_API = 'https://api.stripe.com/v1';

// Product amounts in cents
const BOOK_AMOUNT = 700;       // $7.00
const BUMP_AMOUNT = 7500;      // $75.00
const TOTAL_WITH_BUMP = BOOK_AMOUNT + BUMP_AMOUNT; // $82.00

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
}

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).set(corsHeaders()).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).set(corsHeaders()).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).set(corsHeaders()).json({ error: 'Stripe not configured' });
  }

  const { bumpIncluded } = req.body || {};
  const amount = bumpIncluded ? TOTAL_WITH_BUMP : BOOK_AMOUNT;

  // Build description for Stripe dashboard clarity
  const description = bumpIncluded
    ? "A Parent's Quick Guide + 3-Month Global Circle"
    : "A Parent's Quick Guide: How to Create Security During Adolescence";

  // Build x-www-form-urlencoded body for Stripe API
  const params = new URLSearchParams({
    amount: String(amount),
    currency: 'usd',
    'automatic_payment_methods[enabled]': 'true',
    description,
  });

  const stripeRes = await fetch(`${STRIPE_API}/payment_intents`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const data = await stripeRes.json();

  if (!stripeRes.ok) {
    return res.status(stripeRes.status).set(corsHeaders()).json({ error: data.error?.message || 'Stripe error' });
  }

  return res.status(200).set(corsHeaders()).json({ clientSecret: data.client_secret });
}
