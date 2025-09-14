'use client';
import React from 'react';

type Step = { title: string; description?: string };

export default function StepsTimeline({
  steps,
  title,
}: {
  steps: Step[];
  title?: string;
}) {
  return (
    <section className="container mx-auto px-4 py-12">
      {title && (
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      )}
      <ol className="relative border-s border-gray-200 pl-6">
        {steps.map((s, i) => (
          <li key={i} className="mb-8 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary"></div>
            <h3 className="text-lg font-medium">
              {i + 1}. {s.title}
            </h3>
            {s.description && (
              <p className="text-gray-700 mt-1">{s.description}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
