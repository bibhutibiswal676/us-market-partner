'use client';
import type { Country } from '@/types/content';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function CountryList({ countries }: { countries: Country[] }) {
  const [active, setActive] = useState<string | null>(null);
  const hoverRef = useRef(false);

  // Choose the first country by default once data is available
  useEffect(() => {
    if (!active && countries.length > 0) {
      setActive(countries[0].slug);
    }
  }, [active, countries]);

  const activeCountry = useMemo(
    () => countries.find((c) => c.slug === active) ?? countries[0],
    [active, countries]
  );

  // Auto-advance the active country on an interval
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return; // Respect reduced motion
    if (!active) return;

    const idx = countries.findIndex((c) => c.slug === active);
    const tick = () => {
      if (hoverRef.current) return; // pause on hover
      const next = countries[(idx + 1) % countries.length];
      setActive(next.slug);
    };
    const id = window.setInterval(tick, 3000);
    return () => window.clearInterval(id);
  }, [active, countries]);

  // Intentionally no auto-scroll into view per request

  if (!countries || countries.length === 0) {
    return null;
  }

  return (
    <section
      id="countries"
      aria-labelledby="countries-heading"
      className="relative container mx-auto px-4 py-12 motion-safe:animate-fade-up"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
        style={{
          backgroundImage: 'url(/bg/dots.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '420px',
          color: 'rgb(15 23 42 / 1)',
        }}
      />
      <h2 id="countries-heading" className="text-2xl font-semibold">
        Country Support
      </h2>
      <div className="mt-6 grid lg:grid-cols-3 gap-8">
        {/* Master list */}
        <div className="lg:col-span-1">
          <div
            className="divide-y divide-gray-200 rounded-md bg-white/70 backdrop-blur-sm ring-1 ring-gray-200/60 max-h-[28rem] overflow-auto"
            role="listbox"
            aria-label="Countries"
            tabIndex={0}
            onFocus={() => (hoverRef.current = true)}
            onBlur={() => (hoverRef.current = false)}
            onKeyDown={(e) => {
              const currentIndex = countries.findIndex(
                (c) => c.slug === active
              );
              const focusOption = (slug: string) => {
                setActive(slug);
                const el = document.getElementById(`country-${slug}-option`);
                if (el) (el as HTMLButtonElement).focus();
              };
              switch (e.key) {
                case 'ArrowDown': {
                  e.preventDefault();
                  const next =
                    countries[
                      (Math.max(0, currentIndex) + 1) % countries.length
                    ];
                  focusOption(next.slug);
                  break;
                }
                case 'ArrowUp': {
                  e.preventDefault();
                  const prev =
                    countries[
                      (currentIndex - 1 + countries.length) % countries.length
                    ] ?? countries[countries.length - 1];
                  focusOption(prev.slug);
                  break;
                }
                case 'Home': {
                  e.preventDefault();
                  focusOption(countries[0].slug);
                  break;
                }
                case 'End': {
                  e.preventDefault();
                  focusOption(countries[countries.length - 1].slug);
                  break;
                }
                case 'Enter':
                case ' ': {
                  // announce selection; state already reflects active
                  e.preventDefault();
                  break;
                }
              }
            }}
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            {countries.map((c, i) => {
              const isActive = c.slug === active;
              const contentId = `country-${c.slug}-detail`;
              return (
                <div
                  key={c.slug}
                  className="group motion-safe:animate-fade-up"
                  style={{ animationDelay: `${Math.min(i * 60, 360)}ms` }}
                >
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    aria-controls={contentId}
                    id={`country-${c.slug}-option`}
                    onClick={() => setActive(c.slug)}
                    className={
                      'w-full text-left px-4 py-2.5 focus:outline-none motion-safe:transition-colors border-l-2 ' +
                      (isActive
                        ? 'bg-primary/5 border-primary'
                        : 'hover:bg-gray-50 border-transparent')
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={
                          'mt-1 inline-block h-2 w-2 rounded-full ' +
                          (isActive ? 'bg-primary' : 'bg-gray-300')
                        }
                      />
                      <h3
                        className={
                          'text-base font-medium ' +
                          (isActive ? 'text-gray-900' : 'text-gray-800')
                        }
                      >
                        {c.name}
                      </h3>
                      <span
                        className={
                          'ml-auto inline-block text-[11px] leading-5 rounded-full px-2 py-0.5 motion-safe:transition-colors ' +
                          (isActive
                            ? 'bg-primary/10 text-primary'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200')
                        }
                      >
                        {c.sectors.length} sectors
                      </span>
                    </div>
                  </button>

                  {/* Mobile detail (accordion-style) */}
                  <div
                    id={contentId}
                    className={
                      'lg:hidden px-4 pb-4 motion-safe:transition-all motion-safe:duration-300 ' +
                      (isActive ? 'opacity-100' : 'opacity-0 hidden')
                    }
                    role="region"
                    aria-live="polite"
                    aria-labelledby={`country-${c.slug}-option`}
                  >
                    <h4 className="font-semibold mt-2">Sectors</h4>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      {c.sectors.map((s, j) => (
                        <li
                          key={s.slug}
                          className="motion-safe:animate-fade-up"
                          style={{
                            animationDelay: `${Math.min(j * 50, 300)}ms`,
                          }}
                        >
                          <a
                            href={`/country/${c.slug}/${s.slug}`}
                            className="text-gray-800 underline hover:text-primary motion-safe:transition-colors"
                          >
                            {s.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="hidden lg:block lg:col-span-2">
          <div
            className="rounded-xl bg-white/70 backdrop-blur-sm ring-1 ring-gray-200/60 p-6 h-full motion-safe:transition-colors"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at top right, rgba(99,102,241,0.07), transparent 60%)',
            }}
            role="region"
            aria-live="polite"
            aria-labelledby={`country-${activeCountry.slug}-option`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{activeCountry.name}</h3>
                <p className="text-gray-600 mt-1 max-w-3xl">
                  {activeCountry.description}
                </p>
              </div>
            </div>
            <h4 className="font-semibold mt-6">Sectors</h4>
            <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-2">
              {activeCountry.sectors.map((s, i) => (
                <li
                  key={s.slug}
                  className="motion-safe:animate-fade-up"
                  style={{ animationDelay: `${Math.min(i * 60, 360)}ms` }}
                >
                  <a
                    href={`/country/${activeCountry.slug}/${s.slug}`}
                    className="text-gray-800 underline hover:text-primary motion-safe:transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
