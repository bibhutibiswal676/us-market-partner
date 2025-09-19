'use client';
import React from 'react';

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  logoSrc?: string;
};

export default function Testimonials({
  items,
  title,
}: {
  items: Testimonial[];
  title?: string;
}) {
  return (
    <section className="container mx-auto px-4 py-12 motion-safe:animate-fade-up">
      {title && (
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      )}
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-lg border border-gray-200 bg-white p-6 h-full flex flex-col"
          >
            <p className="text-gray-800">“{t.quote}”</p>
            <div className="mt-4 flex items-center gap-3">
              {t.logoSrc && (
                <img
                  src={t.logoSrc}
                  alt={`${t.author} company logo`}
                  title={`${t.author} company logo`}
                  className="h-6"
                />
              )}
              <div>
                <div className="font-medium">{t.author}</div>
                {t.role && (
                  <div className="text-sm text-gray-600">{t.role}</div>
                )}
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
