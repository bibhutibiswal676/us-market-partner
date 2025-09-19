'use client';
import React from 'react';
import Image from 'next/image';

type Props = {
  text: string;
  chips?: string[];
  kicker?: string;
};

const HIGHLIGHTS: Array<{ pattern: RegExp; variant: 'strong' | 'em' }> = [
  { pattern: /US Market Partner/gi, variant: 'strong' },
  { pattern: /SMEs?|small and medium enterprises/gi, variant: 'strong' },
  { pattern: /United States|US market/gi, variant: 'strong' },
  { pattern: /5\+ years|over 5 years/gi, variant: 'strong' },
  {
    pattern: /end[-\s]?to[-\s]?end support|end[-\s]?to[-\s]?end/gi,
    variant: 'em',
  },
  {
    pattern:
      /Insurance|Specialized Industry|Marketing & Sales|Operational & Infrastructure|Banking & Financial|Tax & Accounting|Legal & Compliance/gi,
    variant: 'em',
  },
];

function highlightText(text: string): React.ReactNode[] {
  if (!text) return [];
  // Build a combined regex to split the text into tokens of either highlighted or normal text
  const union = new RegExp(
    HIGHLIGHTS.map((h) => `(${h.pattern.source})`).join('|'),
    'gi'
  );
  const out: React.ReactNode[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = union.exec(text))) {
    const start = m.index;
    const end = union.lastIndex;
    if (start > lastIndex) out.push(text.slice(lastIndex, start));
    const matchText = text.slice(start, end);
    // Determine which highlight matched
    const rule = HIGHLIGHTS.find((h) =>
      new RegExp(`^${h.pattern.source}$`, 'i').test(matchText)
    );
    if (rule?.variant === 'strong') {
      out.push(
        <strong key={start} className="font-semibold text-gray-900">
          {matchText}
        </strong>
      );
    } else if (rule?.variant === 'em') {
      out.push(
        <em key={start} className="not-italic font-medium text-primary">
          {matchText}
        </em>
      );
    } else {
      out.push(matchText);
    }
    lastIndex = end;
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}

export default function IntroCard({
  text,
  chips = [],
  kicker = 'Why US Market Partner',
}: Props) {
  return (
    <section className="relative container mx-auto px-4 py-12 min-h-[360px] md:min-h-[520px] lg:min-h-[60vh]">
      {/* Background image: optimized with Next.js Image component */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <picture>
          <Image
            src="/bg/ny-skyline.jpg"
            alt="Expand Your Business"
            title="Expand Your Business"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
        </picture>
      </div>
      {/* Readability scrim behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[-9]"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.25) 65%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div className="mx-auto max-w-2xl md:max-w-3xl rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black/5 p-6 md:p-8 motion-safe:animate-fade-up">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          {kicker}
        </p>
        <p className="mt-3 text-lg leading-relaxed text-gray-800">
          {highlightText(text)}
        </p>
        {chips.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
