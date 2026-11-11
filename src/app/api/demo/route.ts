import { NextResponse } from 'next/server';

const fields = ['name', 'establishment', 'email', 'phone'] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLength = 200;

export async function POST(request: Request): Promise<NextResponse> {
  const webhookUrl = process.env.DEMO_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('Demo request rejected: DEMO_WEBHOOK_URL is not configured.');
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
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
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error(`Demo webhook responded with status ${response.status}.`);
      return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
    }
  } catch (error) {
    console.error('Demo webhook request failed.', error);
    return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
