'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type Stat = { label: string; value: string; subLabel?: string };

function StatCard({
  value,
  label,
  subLabel,
  delay = 0,
}: {
  value: string;
  label: string;
  subLabel?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState<string>(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { prefix, number, suffix, decimals, canAnimate } = useMemo(() => {
    const m = value.match(/(-?\d+(?:\.\d+)?)/);
    if (!m)
      return {
        prefix: '',
        number: 0,
        suffix: '',
        decimals: 0,
        canAnimate: false,
      };
    const start = m.index ?? 0;
    const numStr = m[0];
    const end = start + numStr.length;
    const prefix = value.slice(0, start);
    const suffix = value.slice(end);
    const decimals = numStr.includes('.')
      ? (numStr.split('.')[1]?.length ?? 0)
      : 0;
    const number = parseFloat(numStr);
    const canAnimate = Number.isFinite(number);
    return { prefix, number, suffix, decimals, canAnimate };
  }, [value]);

  useEffect(() => {
    if (!ref.current) return;
    if (hasAnimated) return; // only once
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // If cannot animate or reduced motion requested, keep original value
    if (!canAnimate || prefersReduced) return;

    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Start animation
          const duration = 1200; // ms
          const startTime = performance.now() + delay;
          const start = 0;
          const end = number;
          let raf = 0;

          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

          const tick = (now: number) => {
            if (now < startTime) {
              raf = requestAnimationFrame(tick);
              return;
            }
            const t = Math.min(1, (now - startTime) / duration);
            const eased = easeOutCubic(t);
            const current = start + (end - start) * eased;
            const formatted =
              decimals > 0
                ? current.toFixed(decimals)
                : Math.round(current).toString();
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (t < 1) {
              raf = requestAnimationFrame(tick);
            } else {
              setHasAnimated(true);
              cancelAnimationFrame(raf);
            }
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [canAnimate, decimals, delay, hasAnimated, number, prefix, suffix]);

  return (
    <div
      ref={ref}
      className="rounded-lg border border-gray-200 bg-white p-4 text-center motion-safe:opacity-0 motion-safe:animate-fade-up motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-2xl font-semibold tracking-tight">{display}</div>
      <div className="mt-1 text-gray-700">{label}</div>
      {subLabel && (
        <div className="mt-0.5 text-xs text-gray-500">{subLabel}</div>
      )}
    </div>
  );
}

export default function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="container mx-auto px-4 py-8 motion-safe:animate-fade-up">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <StatCard
            key={i}
            value={s.value}
            label={s.label}
            subLabel={s.subLabel}
            delay={i * 90}
          />
        ))}
      </div>
    </section>
  );
}
