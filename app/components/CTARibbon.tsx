'use client';
import React from 'react';
import Button from './Button';

export default function CTARibbon({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="bg-primary/10 border-y border-primary/20">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          {subtitle && <p className="text-gray-700 mt-1">{subtitle}</p>}
        </div>
        <Button href={ctaHref} size="md">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
