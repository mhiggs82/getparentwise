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
const BOOK_AMOUNT   = 700;   // $7.00
const BUMP_AMOUNT   = 7500;  // $75.00
const UPSELL_AMOUNT = 19700; // $197.00

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'Stripe not configured' });
  }

  const { bumpIncluded, upsellIncluded } = req.body || {};
  const amount = BOOK_AMOUNT + (bumpIncluded ? BUMP_AMOUNT : 0) + (upsellIncluded ? UPSELL_AMOUNT : 0);

  // Build description for Stripe dashboard clarity
  const parts = ["A Parent's Quick Guide"];
  if (bumpIncluded)   parts.push('3-Month Global Circle');
  if (upsellIncluded) parts.push('Full 3-Phase Pathway');
  const description = parts.join(' + ');

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
    return res.status(stripeRes.status).json({ error: data.error?.message || 'Stripe error' });
  }

  return res.status(200).json({ clientSecret: data.client_secret });
}
