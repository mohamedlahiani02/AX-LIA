import { NextResponse } from 'next/server';

const fields = ['name', 'establishment', 'email', 'phone'] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLength = 200;

export async function POST(request: Request): Promise<NextResponse> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.DEMO_EMAIL_FROM;
  const to = process.env.DEMO_EMAIL_TO || 'sales.axelia@outlook.com';
  if (!apiKey || !from) {
    console.error('Demo request rejected: RESEND_API_KEY or DEMO_EMAIL_FROM is not configured.');
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const payload: Record<string, string> = {};
  for (const field of fields) {
    const value = typeof body[field] === 'string' ? body[field].trim() : '';
    if (!value || value.length > maxLength) {
      return NextResponse.json({ error: 'invalid_field', field }, { status: 422 });
    }
    payload[field] = value;
  }
  if (!emailPattern.test(payload.email)) {
    return NextResponse.json({ error: 'invalid_field', field: 'email' }, { status: 422 });
  }
  payload.locale = body.locale === 'en' ? 'en' : 'fr';
  payload.receivedAt = new Date().toISOString();

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: 'AXELIA - New demo request',
        text: [
          `Name: ${payload.name}`,
          `Establishment: ${payload.establishment}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone}`,
          `Language: ${payload.locale}`,
          `Received: ${payload.receivedAt}`,
        ].join('\n'),
      }),
    });
    if (!response.ok) {
      console.error(`Demo email provider responded with status ${response.status}.`);
      return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
    }
  } catch (error) {
    console.error('Demo email delivery failed.', error);
    return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
