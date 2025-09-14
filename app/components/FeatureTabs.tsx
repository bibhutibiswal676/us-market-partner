'use client';
import React, { useState } from 'react';

type Tab = { id: string; label: string; content: React.ReactNode };

export default function FeatureTabs({
  tabs,
  title,
}: {
  tabs: Tab[];
  title?: string;
}) {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <section className="container mx-auto px-4 py-12">
      {title && (
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      )}
      <div className="flex gap-2 overflow-auto pb-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-4 py-2 rounded-md border ${active === t.id ? 'bg-primary text-white border-primary' : 'bg-white text-gray-800 border-gray-200'}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-6">{tabs.find((t) => t.id === active)?.content}</div>
    </section>
  );
}
