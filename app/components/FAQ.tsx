'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

type QA = { q: string; a: string };
type FAQSection = { section: string; items: QA[] };

interface FAQProps {
  items: QA[] | FAQSection[];
  title?: string;
}

export default function FAQ({ items, title }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  // Helper to determine if items are sectioned
  const isSectioned = (items: QA[] | FAQSection[]): items is FAQSection[] =>
    (items as FAQSection[])[0]?.section !== undefined;

  return (
    <section className="container mx-auto px-4 py-12">
      {title && (
        <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          {title}
        </h2>
      )}

      <div className="max-w-3xl mx-auto">
        {isSectioned(items) ? (
          items.map((section, sIdx) => (
            <div key={sIdx} className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">
                {section.section}
              </h3>
              <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm">
                {section.items.map((qa, i) => {
                  const isOpen = open === i + sIdx * 1000;
                  const headerId = `faq-header-${sIdx}-${i}`;
                  const panelId = `faq-panel-${sIdx}-${i}`;
                  return (
                    <div key={i} className="group">
                      <button
                        id={headerId}
                        className="flex w-full items-start justify-between gap-3 p-4 text-left hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                        onClick={() =>
                          setOpen(isOpen ? null : i + sIdx * 1000)
                        }
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span
                          className={`text-[15px] font-medium md:text-base ${
                            isOpen ? 'text-primary' : 'text-gray-900'
                          }`}
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
                            className={`h-3.5 w-3.5 ${
                              isOpen ? 'rotate-180' : ''
                            } transition-transform duration-200 md:h-4 md:w-4`}
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
                        <div className="min-h-0 px-5 pb-4 pl-12 text-sm text-gray-700">
                          {qa.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm">
            {(items as QA[]).map((qa, i) => {
              const isOpen = open === i;
              const headerId = `faq-header-${i}`;
              const panelId = `faq-panel-${i}`;
              return (
                <div key={i} className="group">
                  <button
                    id={headerId}
                    className="flex w-full items-start justify-between gap-3 p-4 text-left hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span
                      className={`text-[15px] font-medium md:text-base ${
                        isOpen ? 'text-primary' : 'text-gray-900'
                      }`}
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
                        className={`h-3.5 w-3.5 ${
                          isOpen ? 'rotate-180' : ''
                        } transition-transform duration-200 md:h-4 md:w-4`}
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
                    <div className="min-h-0 px-5 pb-4 pl-12 text-sm text-gray-700">
                      {qa.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
