'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

type QA = { q: string; a: string };

export default function FAQ({ items, title }: { items: QA[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container mx-auto px-4 py-16">
      {title && (
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          {title}
        </h2>
      )}
      <div className="mt-2 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white/60 backdrop-blur">
        {items.map((qa, i) => {
          const isOpen = open === i;
          const headerId = `faq-header-${i}`;
          const panelId = `faq-panel-${i}`;
          return (
            <div key={i} className="group">
              <button
                id={headerId}
                className="flex w-full items-start justify-between gap-3 p-3 text-left hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:gap-4 md:p-4"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span
                  className={`text-[15px] font-medium md:text-base ${isOpen ? 'text-primary' : 'text-gray-900'}`}
                >
                  {qa.q}
                </span>
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 transition-colors duration-200 md:h-8 md:w-8 ${
                    isOpen
                      ? 'bg-primary/10 text-primary ring-primary/30'
                      : 'bg-gray-100 text-gray-500 ring-gray-200 group-hover:bg-primary/5 group-hover:text-primary group-hover:ring-primary/30'
                  }`}
                >
                  <FaChevronDown
                    className={`h-3.5 w-3.5 ${isOpen ? 'rotate-180' : ''} transition-transform duration-200 md:h-4 md:w-4`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className={`grid overflow-hidden transition-all duration-200 ease-out ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 px-4 pb-3 pl-11 text-sm text-gray-700 md:px-5 md:pb-4 md:pl-12">
                  {qa.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
