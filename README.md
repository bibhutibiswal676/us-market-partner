# US Market Partner — MVP

This is a production-ready MVP of the homepage for US Market Partner built with Next.js 14 (App Router) and TypeScript, following the provided FRD/TRD.

## Tech

- Next.js 14 + TypeScript
- Tailwind CSS
- Vitest + React Testing Library (unit)
- Playwright (E2E)
- GitHub Actions CI

## Getting started

Install dependencies, run dev server, and open http://localhost:3000.

```bash
npm install
npm run dev
```

Build and start:

```bash
npm run build
npm start
```

Tests:

```bash
npm run test           # unit
npm run e2e            # E2E (requires server)
```

## Content editing

- Edit `data/home.json` to update hero text, intro, countries, services, and CTA. Types live in `types/content.ts`.

## Structure

- `app/` — App Router pages and components
- `app/components/` — Reusable components
- `app/lib/content.ts` — Typed loader for static JSON content
- `data/home.json` — Content source
- `styles/globals.css` — Tailwind styles

## SEO

- Metadata in `app/layout.tsx`
- `app/robots.ts`, `app/sitemap.ts`

## Notes

- Replace `public/video/intro.mp4` and `public/video/poster.jpg` with real assets
- Update `metadataBase` and OG image URLs for production domain
- For hosting, deploy to Vercel and add analytics/error monitoring per TRD
