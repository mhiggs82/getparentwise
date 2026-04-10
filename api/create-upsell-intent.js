// =============================================================
// ParentWise — Create Upsell Payment Intent
// Vercel Serverless Function (Node 18+, native fetch)
//
// Environment variables (set in Vercel dashboard):
//   STRIPE_SECRET_KEY — your Stripe secret key (sk_live_... or sk_test_...)
//
// POST body: { baseAmount: number }   (in dollars, e.g. 7 or 82)
// Response:  { clientSecret: string }
// =============================================================

const STRIPE_API = 'https://api.stripe.com/v1';
const UPSELL_AMOUNT = 50000; // $500.00 in cents

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

  const params = new URLSearchParams({
    amount: String(UPSELL_AMOUNT),
    currency: 'usd',
    'automatic_payment_methods[enabled]': 'true',
    description: 'Full ParentWise Pathway — All 3 Phases',
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
