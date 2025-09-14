import type { Metadata } from 'next';
import React from 'react';
import './styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'US Market Partner',
    template: '%s | US Market Partner',
  },
  description:
    'Helping SMEs expand into the US market with confidence — services, country expertise, and guidance.',
  metadataBase: new URL('https://www.example.com'),
  openGraph: {
    type: 'website',
    title: 'US Market Partner',
    description:
      'Helping SMEs expand into the US market with confidence — services, country expertise, and guidance.',
    url: 'https://www.example.com',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'US Market Partner' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Market Partner',
    description:
      'Helping SMEs expand into the US market with confidence — services, country expertise, and guidance.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
