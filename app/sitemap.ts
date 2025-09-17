import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.usmarketpartner.com/',
      lastModified: new Date('2025-09-05T12:07:37+00:00'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
