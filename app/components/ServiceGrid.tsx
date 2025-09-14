import Link from 'next/link';
import type { Service } from '@/types/content';
import Icon from './Icon';

export default function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <section
      id="services"
      className="relative container mx-auto px-4 py-12 motion-safe:animate-fade-up"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_93%)]"
        style={{
          backgroundImage: 'url(/bg/grid.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '520px',
          color: 'rgb(15 23 42 / 1)',
        }}
      />
      <h2 className="text-2xl font-semibold">Services</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group block rounded-xl p-5 bg-white/70 backdrop-blur-sm ring-1 ring-gray-200/60 hover:bg-white/80 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary motion-safe:transition-all motion-safe:duration-200 motion-safe:animate-fade-up"
            style={{ animationDelay: `${Math.min(i * 60, 360)}ms` }}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 grid h-10 w-10 aspect-square place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 motion-safe:transition-transform group-hover:-translate-y-0.5">
                <Icon
                  name={s.icon ?? ''}
                  className="text-[18px] leading-none"
                />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary motion-safe:transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {s.shortDescription}
                </p>
              </div>
            </div>
            <div className="mt-3 inline-flex items-center text-sm text-primary">
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 h-4 w-4 motion-safe:transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
