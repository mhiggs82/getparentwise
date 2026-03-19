// =============================================================
// ParentWise — Assessment Submission Handler
// Vercel Serverless Function (Node 18+, native fetch)
//
// Environment variables (set in Vercel dashboard):
//   MAILERLITE_API_KEY       — your MailerLite v3 API key
//   MAILERLITE_GROUP_ID      — the group subscribers are added to
//   MAILERLITE_AUTOMATION_ID — (optional) automation to trigger
// =============================================================

const MAILERLITE_API = 'https://connect.mailerlite.com/api';

// ── Pillar definitions ────────────────────────────────────────
// Questions are ordered: Safe(0-3), Seen(4-7), Soothe(8-11), Expressed Sovereignty(12-15)
const PILLARS = [
  { key: 'safe',                  label: 'Safe',                  start: 0,  end: 3  },
  { key: 'seen',                  label: 'Seen',                  start: 4,  end: 7  },
  { key: 'soothe',                label: 'Soothe',                start: 8,  end: 11 },
  { key: 'expressed_sovereignty', label: 'Expressed Sovereignty', start: 12, end: 15 },
];

// ── Scoring helpers ───────────────────────────────────────────
function scorePillar(answers, start, end) {
  const yesCount = answers.slice(start, end + 1).filter(Boolean).length;
  const score    = Math.round((yesCount / 4) * 10);
  const label    = yesCount === 4 ? 'Strong'
                 : yesCount >= 2  ? 'Growing'
                 : 'Needs Attention';
  return { yesCount, score, label };
}

function overallScore(answers) {
  const total = answers.filter(Boolean).length;
  return Math.round((total / 16) * 10);
}

// ── Email copy blocks ─────────────────────────────────────────
const STRONG = {
  safe:
    'You scored well in Safe. Your teen knows you are a consistent presence, someone they can come to when life gets hard. That reliability is the foundation everything else is built on.',
  seen:
    'You scored well in Seen. You are paying attention in a way that most parents do not. You know what genuinely lights your teen up, and you make space to stay curious about it.',
  soothe:
    'You scored well in Soothe. You are able to stay steady when your teen cannot. That matters more than most parents realise. A regulated parent is the original co-regulator.',
  expressed_sovereignty:
    'You scored well in Expressed Sovereignty. You are giving your teen room to own their story. It takes real restraint to trust someone\'s capacity to figure things out. You are doing that.',
};

const NEEDS_ATTENTION = {
  safe:
    'Safe had the most room to grow. It does not mean your home is unsafe. It means there may be moments when your teen is not sure they can bring the hard stuff to you. That is worth looking at.',
  seen:
    'Seen was your lowest area. It is easy to think we know our teen and miss how much they have changed. This pillar is about tuning in to who they are right now, not who they were.',
  soothe:
    'Soothe had the most room to grow. When a teen\'s emotions spike, what they need is a parent who does not spike with them. Learning to manage your own state first is the real work here.',
  expressed_sovereignty:
    'Expressed Sovereignty was your lowest area. It is the hardest pillar for driven, high-achieving parents. Letting go of outcomes for your teen, while staying present, is its own kind of discipline.',
};

const CLOSING = {
  high:
    'You are already doing much of this well. ParentWise is where parents like you go deeper. The work at this stage is not about fixing problems. It is about elevating what is already working and building the environment your teen truly launches from.',
  mid:
    'You are doing more right than you may realise. ParentWise helps parents in your position close the gap between where they are and where they want to be. The adjustments are usually smaller than expected. The difference they make is not.',
  low:
    'This is a meaningful moment to take stock. None of these scores are permanent. They are a mirror. ParentWise gives you a guided process to work on each of these areas with intention, not alone, and not from scratch.',
};

// ── Email assembly ────────────────────────────────────────────
function buildEmail(pillarResults, overall) {
  const strong         = pillarResults.filter(p => p.label === 'Strong');
  const needsAttention = pillarResults.filter(p => p.label === 'Needs Attention');

  const wentWell = strong.length
    ? strong.map(p => STRONG[p.key]).join(' ')
    : 'Each of the four pillars has room to grow, and that is exactly what ParentWise is designed for.';

  const needsWork = needsAttention.length
    ? needsAttention.map(p => NEEDS_ATTENTION[p.key]).join(' ')
    : 'Across the board, you are showing up with real intention for your teen.';

  const closingKey = overall >= 9 ? 'high' : overall >= 7 ? 'mid' : 'low';
  const closing    = CLOSING[closingKey];

  return { wentWell, needsWork, closing };
}

// ── MailerLite API call ───────────────────────────────────────
async function upsertSubscriber(firstName, email, fields, groupId) {
  const apiKey = process.env.MAILERLITE_API_KEY || 'YOUR_MAILERLITE_API_KEY';

  const body = {
    email,
    fields: {
      name: firstName,
      ...fields,
    },
    groups:  groupId && groupId !== 'YOUR_MAILERLITE_GROUP_ID' ? [groupId] : [],
    status:  'active',
  };

  const res = await fetch(`${MAILERLITE_API}/subscribers`, {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Accept':        'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`MailerLite subscriber error ${res.status}: ${text}`);
  }

  return res.json();
}

async function triggerAutomation(email, automationId) {
  if (!automationId || automationId === 'YOUR_MAILERLITE_AUTOMATION_ID') return;

  const apiKey = process.env.MAILERLITE_API_KEY || 'YOUR_MAILERLITE_API_KEY';

  const res = await fetch(`${MAILERLITE_API}/automations/${automationId}/subscribers`, {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Accept':        'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.warn(`MailerLite automation trigger warning ${res.status}: ${text}`);
    // Non-fatal: subscriber was created, automation trigger is best-effort
  }
}

// ── Main handler ──────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ── Parse body ──
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const { firstName, email, answers } = body || {};

  // ── Validate ──
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  if (!Array.isArray(answers) || answers.length !== 16) {
    return res.status(400).json({ error: 'Expected 16 answers' });
  }

  // ── Score ──
  const pillarResults = PILLARS.map(p => ({
    key:   p.key,
    label: p.label,
    ...scorePillar(answers, p.start, p.end),
  }));

  const overall      = overallScore(answers);
  const { wentWell, needsWork, closing } = buildEmail(pillarResults, overall);

  // ── Build MailerLite custom fields ──
  const mlFields = {
    overall_score:    overall,
    results_went_well: wentWell,
    results_needs_work: needsWork,
    results_closing:  closing,
  };

  pillarResults.forEach(p => {
    mlFields[`${p.key}_score`] = p.score;
    mlFields[`${p.key}_label`] = p.label;
  });

  // ── Tags: pillars that need attention ──
  const needsAttentionLabels = pillarResults
    .filter(p => p.label === 'Needs Attention')
    .map(p => p.label);

  if (needsAttentionLabels.length) {
    mlFields['needs_attention'] = pillarResults
      .filter(p => p.label === 'Needs Attention')
      .map(p => p.label)
      .join(', ');
  }

  // ── MailerLite ──
  const groupId      = process.env.MAILERLITE_GROUP_ID      || 'YOUR_MAILERLITE_GROUP_ID';
  const automationId = process.env.MAILERLITE_AUTOMATION_ID || 'YOUR_MAILERLITE_AUTOMATION_ID';

  try {
    await upsertSubscriber(firstName || '', email, mlFields, groupId);
    await triggerAutomation(email, automationId);
  } catch (err) {
    console.error('MailerLite error:', err.message);
    // Still return success to the user — don't expose API errors
    return res.status(200).json({ ok: true, warning: 'Submission received; email provider error logged.' });
  }

  return res.status(200).json({ ok: true });
}
