'use client';
import React from 'react';

type Logo = { src: string; alt: string; href?: string };

export default function LogoCloud({
  logos,
  title,
}: {
  logos: Logo[];
  title?: string;
}) {
  const hasLogos = Array.isArray(logos) && logos.length > 0;
  const items = hasLogos
    ? logos
    : [
        { src: '/og.png', alt: 'Placeholder 1' },
        { src: '/og.png', alt: 'Placeholder 2' },
        { src: '/og.png', alt: 'Placeholder 3' },
        { src: '/og.png', alt: 'Placeholder 4' },
        { src: '/og.png', alt: 'Placeholder 5' },
      ];

  // To create a seamless marquee, duplicate the list so the second half follows the first
  const track = [...items, ...items];

  return (
    <section className="container mx-auto px-4 py-12 motion-safe:animate-fade-up">
      {title && (
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      )}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex items-center gap-10 whitespace-nowrap will-change-transform motion-safe:animate-marquee-ltr"
            style={{ width: '200%', transform: 'translateX(-25%)' }}
          >
            {track.map((l, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                {l.href ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10"
                  >
                    <img
                      src={l.src}
                      alt={l.alt}
                      title={l.alt}
                      className="h-10 object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={l.src}
                    alt={l.alt}
                    title={l.alt}
                    className="h-10 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
