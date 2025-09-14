import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    // In a real app, persist to a DB/CRM or send an email notification.
    return NextResponse.json({ ok: true, received: body ?? null });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
