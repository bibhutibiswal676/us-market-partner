'use client';
import React from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  summary: string;
  href: string;
  logoSrc?: string;
  kpis?: { label: string; value: string }[];
};

export default function CaseStudyCard({
  title,
  summary,
  href,
  logoSrc,
  kpis = [],
}: Props) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 h-full flex flex-col">
      <div className="flex items-center gap-3">
        {logoSrc && (
          <img
            src={logoSrc}
            alt={`${title} company logo`}
            title={`${title} company logo`}
            className="h-8"
          />
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-gray-700 flex-1">{summary}</p>
      {kpis.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {kpis.map((k, i) => (
            <div
              key={i}
              className="rounded-md border border-gray-100 bg-gray-50 p-3 text-center"
            >
              <div className="text-base font-semibold">{k.value}</div>
              <div className="text-xs text-gray-600">{k.label}</div>
            </div>
          ))}
        </div>
      )}
      <Link href={href as any} className="mt-4 underline">
        Read case study →
      </Link>
    </article>
  );
}
