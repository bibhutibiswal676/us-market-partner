'use client';
import React from 'react';
import Button from './Button';

export default function FloatingBookCall({
  href = '/contact',
  label = 'Book a call',
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button href={href} size="md" className="rounded-full shadow-lg">
        <span>📅</span>
        <span>{label}</span>
      </Button>
    </div>
  );
}
