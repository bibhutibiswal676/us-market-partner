'use client';
import type { Country } from '@/types/content';
import Link from 'next/link';
import { useState } from 'react';

export default function CountryCards({ countries }: { countries: Country[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="countries"
      className="container mx-auto px-4 py-12 motion-safe:animate-fade-up"
    >
      <h2 className="text-2xl font-semibold">Country Support</h2>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((c) => {
          const isOpen = expanded === c.slug;
          const contentId = `country-${c.slug}-sectors`;
          return (
            <div
              key={c.slug}
              className="group relative overflow-hidden min-h-[220px] rounded-lg border border-gray-200 p-5 bg-white hover:shadow-md motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-primary/40"
            >
              <button
                className="w-full text-left"
                onClick={() =>
                  setExpanded((prev: string | null) =>
                    prev === c.slug ? null : c.slug
                  )
                }
                aria-expanded={isOpen}
                aria-controls={contentId}
                id={`${contentId}-button`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-lg">{c.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {c.description}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className={`flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white motion-safe:transition-transform motion-safe:duration-300 ${
                      isOpen ? 'rotate-180 bg-gray-50' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-gray-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </button>

              {/* Overlay panel so row height does not change */}
              <div
                id={contentId}
                role="region"
                aria-labelledby={`${contentId}-button`}
                className={`absolute inset-0 p-5 bg-white/95 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300 ${
                  isOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="absolute top-3 right-3">
                  <button
                    aria-label="Close"
                    onClick={() => setExpanded(null)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 motion-safe:transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <h4 className="font-semibold">Sectors</h4>
                <ul className="mt-3 list-disc list-inside space-y-1 overflow-auto max-h-full pr-2">
                  {c.sectors.map((s, i) => (
                    <li
                      key={s.slug}
                      className="motion-safe:transition-opacity motion-safe:duration-300"
                      style={{
                        transitionDelay: `${Math.min(i * 60, 360)}ms`,
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <Link
                         href={`/country/${c.slug}/${s.slug}`}
                        className="underline hover:text-primary motion-safe:transition-colors"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
