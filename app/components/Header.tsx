'use client';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import Image from 'next/image';
import { countries, sectors, services } from 'app/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<
    null | 'services' | 'sectors' | 'countries'
  >(null);
  let closeTimer: ReturnType<typeof setTimeout> | null = null;

  const openMenu = (key: 'services' | 'sectors' | 'countries') => {
    if (closeTimer) clearTimeout(closeTimer);
    setMenuOpen(key);
  };
  const scheduleClose = (key: 'services' | 'sectors' | 'countries') => {
    if (closeTimer) clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      setMenuOpen((m) => (m === key ? null : m));
    }, 120);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-36 h-10 md:w-44 md:h-12">
            <Image
              src="/us-market-logo.png"
              alt="US Market Partner Logo"
              title="US Market Partner Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href={'/about' as any}>About Us</Link>
          {/* Services dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => openMenu('services')}
            onMouseLeave={() => scheduleClose('services')}
          >
            <button
              className={`group inline-flex items-center gap-1 hover:text-primary ${menuOpen === 'services' ? 'text-primary' : ''}`}
              aria-haspopup="menu"
              aria-expanded={menuOpen === 'services'}
            >
              Services
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`ml-1 h-4 w-4 motion-safe:transition-transform ${menuOpen === 'services' ? 'rotate-180 text-primary' : 'text-gray-500 group-hover:text-primary'}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 top-full mt-2 z-50 w-[min(90vw,28rem)] rounded-xl bg-white ring-1 ring-gray-200/60 p-3 shadow-xl ${
                menuOpen === 'services' ? 'block' : 'hidden'
              }`}
              role="menu"
              onMouseEnter={() => openMenu('services')}
              onMouseLeave={() => scheduleClose('services')}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as any}
                      className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary/30 motion-safe:transition-colors"
                      role="menuitem"
                    >
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5 ${item.color} motion-safe:transition-colors`}
                      >
                        <Icon
                          name={item.icon as any}
                          className="text-[16px] leading-none"
                        />
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sectors dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => openMenu('sectors')}
            onMouseLeave={() => scheduleClose('sectors')}
          >
            <button
              className={`group inline-flex items-center gap-1 hover:text-primary ${menuOpen === 'sectors' ? 'text-primary' : ''}`}
              aria-haspopup="menu"
              aria-expanded={menuOpen === 'sectors'}
            >
              Sectors
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`ml-1 h-4 w-4 motion-safe:transition-transform ${menuOpen === 'sectors' ? 'rotate-180 text-primary' : 'text-gray-500 group-hover:text-primary'}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 top-full mt-2 z-50 w-[min(90vw,28rem)] rounded-xl bg-white ring-1 ring-gray-200/60 p-3 shadow-xl ${
                menuOpen === 'sectors' ? 'block' : 'hidden'
              }`}
              role="menu"
              onMouseEnter={() => openMenu('sectors')}
              onMouseLeave={() => scheduleClose('sectors')}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {sectors.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as any}
                      className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary/30 motion-safe:transition-colors"
                      role="menuitem"
                    >
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5 ${item.color} motion-safe:transition-colors`}
                      >
                        <Icon
                          name={item.icon as any}
                          className="text-[16px] leading-none"
                        />
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Countries dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => openMenu('countries')}
            onMouseLeave={() => scheduleClose('countries')}
          >
            <button
              className={`group inline-flex items-center gap-1 hover:text-primary ${menuOpen === 'countries' ? 'text-primary' : ''}`}
              aria-haspopup="menu"
              aria-expanded={menuOpen === 'countries'}
            >
              Countries
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`ml-1 h-4 w-4 motion-safe:transition-transform ${menuOpen === 'countries' ? 'rotate-180 text-primary' : 'text-gray-500 group-hover:text-primary'}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 top-full mt-2 z-50 w-[min(90vw,22rem)] rounded-xl bg-white ring-1 ring-gray-200/60 p-3 shadow-xl ${
                menuOpen === 'countries' ? 'block' : 'hidden'
              }`}
              role="menu"
              onMouseEnter={() => openMenu('countries')}
              onMouseLeave={() => scheduleClose('countries')}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {countries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as any}
                      className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary/30 motion-safe:transition-colors"
                      role="menuitem"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5 bg-gray-50 text-gray-700 motion-safe:transition-colors">
                        <Image
                          src={item.icon as string}
                          alt={item.label}
                          title={item.label}
                          width={24}
                          height={24}
                          className="rounded-full"
                          unoptimized
                        />
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href={'/blog' as any}>Blog</Link>
          <Button href="https://calendly.com/l4rgusllc/scheduling" size="md">
            Expand Now
          </Button>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 border border-gray-300"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            {/* Mobile collapsible groups */}
            <details>
              <summary className="cursor-pointer">Services</summary>
              <ul className="mt-2 pl-4 space-y-2">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as any}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-2"
                    >
                      <span
                        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5 ${item.color}`}
                      >
                        <Icon
                          name={item.icon as any}
                          className="text-[13px] leading-none"
                        />
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <details>
              <summary className="cursor-pointer">Sectors</summary>
              <ul className="mt-2 pl-4 space-y-2">
                {sectors.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as any}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-2"
                    >
                      <span
                        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5 ${item.color}`}
                      >
                        <Icon
                          name={item.icon as any}
                          className="text-[13px] leading-none"
                        />
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <details>
              <summary className="cursor-pointer">Countries / Regions</summary>
              <ul className="mt-2 pl-4 space-y-2">
                {countries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as any}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5 bg-gray-50 text-gray-700">
                        <Icon
                          name={(item.icon as any) ?? 'globe'}
                          className="text-[13px] leading-none"
                        />
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link href={'/about' as any} onClick={() => setOpen(false)}>
              About Us
            </Link>
            <Link href={'/blog' as any} onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Button
              href="https://calendly.com/l4rgusllc/scheduling"
              size="md"
              onClick={() => setOpen(false)}
            >
              Expand Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
