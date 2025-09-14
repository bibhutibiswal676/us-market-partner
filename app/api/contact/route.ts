import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // TODO: add validation, spam protection, and email/CRM forwarding
  return NextResponse.json({ ok: true, received: body }, { status: 200 });
}
