'use client';
import React, { useState } from 'react';
import Button from './Button';

type Lead = { name: string; email: string; company?: string; intent?: string };

export default function LeadCaptureForm({ onSubmit }: { onSubmit?: Function }) {
  const [lead, setLead] = useState<Lead>({
    name: '',
    email: '',
    company: '',
    intent: '',
  });
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // Optional: post to API if present
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }).catch(() => {});
    } catch {
      // ignore errors; non-blocking UI submission
    }
    if (onSubmit) onSubmit(lead);
    setSent(true);
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-lg border border-gray-200 bg-white p-5"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          required
          placeholder="Name"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          value={lead.name}
          onChange={(e) => setLead({ ...lead, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          value={lead.email}
          onChange={(e) => setLead({ ...lead, email: e.target.value })}
        />
        <input
          placeholder="Company"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          value={lead.company}
          onChange={(e) => setLead({ ...lead, company: e.target.value })}
        />
        <input
          placeholder="What do you need? (e.g., US entity, hiring, GTM)"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          value={lead.intent}
          onChange={(e) => setLead({ ...lead, intent: e.target.value })}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Button type="submit">Get in touch</Button>
        {sent && (
          <span className="text-sm text-green-700">
            Thanks! We&#39;ll reply soon.
          </span>
        )}
      </div>
    </form>
  );
}
