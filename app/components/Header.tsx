'use client';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';
import Icon from './Icon';

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

  const services = [
    {
      label: 'Insurance Services',
      href: '/services/insurance',
      icon: 'shield',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      label: 'Specialized Industry Services',
      href: '/services/industry',
      icon: 'factory',
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'Marketing & Sales Services',
      href: '/services/marketing-sales',
      icon: 'megaphone',
      color: 'bg-pink-50 text-pink-700',
    },
    {
      label: 'Operational & Infrastructure Services',
      href: '/services/operations',
      icon: 'gear',
      color: 'bg-amber-50 text-amber-700',
    },
    {
      label: 'Banking & Financial Services',
      href: '/services/banking',
      icon: 'bank',
      color: 'bg-indigo-50 text-indigo-700',
    },
    {
      label: 'Tax & Accounting Services',
      href: '/services/tax',
      icon: 'calculator',
      color: 'bg-slate-50 text-slate-700',
    },
    {
      label: 'Legal & Compliance Services',
      href: '/services/legal',
      icon: 'gavel',
      color: 'bg-purple-50 text-purple-700',
    },
    {
      label: 'HR & Talent Services',
      href: '/services/hr-talent',
      icon: 'people',
      color: 'bg-teal-50 text-teal-700',
    },
    {
      label: 'IT & Tech Support',
      href: '/services/it-tech',
      icon: 'laptop',
      color: 'bg-cyan-50 text-cyan-700',
    },
  ];

  const sectors = [
    {
      label: 'Manufacturing',
      href: '/sectors/manufacturing',
      icon: 'factory',
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'E-commerce',
      href: '/sectors/ecommerce',
      icon: 'cart',
      color: 'bg-orange-50 text-orange-700',
    },
    {
      label: 'Pharma & Biotech',
      href: '/sectors/pharma-biotech',
      icon: 'pill',
      color: 'bg-rose-50 text-rose-700',
    },
    {
      label: 'Automotive & EV',
      href: '/sectors/automotive-ev',
      icon: 'car',
      color: 'bg-yellow-50 text-yellow-700',
    },
    {
      label: 'Semiconductors',
      href: '/sectors/semiconductors',
      icon: 'chip',
      color: 'bg-sky-50 text-sky-700',
    },
    {
      label: 'AI & Cloud Infrastructure',
      href: '/sectors/ai-cloud',
      icon: 'cloud',
      color: 'bg-cyan-50 text-cyan-700',
    },
    {
      label: 'Finance & Banking',
      href: '/sectors/finance-banking',
      icon: 'bank',
      color: 'bg-indigo-50 text-indigo-700',
    },
    {
      label: 'Logistics & Supply Chain',
      href: '/sectors/logistics-supply',
      icon: 'truck',
      color: 'bg-lime-50 text-lime-700',
    },
  ];

  const countries = [
    { label: 'India', href: '/india', icon: 'flag-india' },
    { label: 'Japan', href: '/japan', icon: 'flag-japan' },
    { label: 'Canada', href: '/canada', icon: 'flag-canada' },
    { label: 'Germany', href: '/germany', icon: 'flag-germany' },
    { label: 'UK & Europe', href: '/united-kingdom-europe', icon: 'flag-uk' },
    { label: 'UAE', href: '/uae', icon: 'flag-uae' },
    { label: 'Taiwan', href: '/taiwan', icon: 'flag-taiwan' },
    { label: 'South Korea', href: '/south-korea', icon: 'flag-south-korea' },
    { label: 'Mexico', href: '/mexico', icon: 'flag-mexico' },
    { label: 'Brazil', href: '/brazil', icon: 'flag-brazil' },
    { label: 'Israel', href: '/israel', icon: 'flag-israel' },
    { label: 'Singapore', href: '/singapore', icon: 'flag-singapore' },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          US Market Partner
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
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
                        <Icon
                          name={(item.icon as any) ?? 'globe'}
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

          <Link href={'/about' as any}>About Us</Link>
          <Link href={'/blog' as any}>Blog</Link>
          <Button href="/contact" size="md">
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
            <Button href="/contact" size="md" onClick={() => setOpen(false)}>
              Expand Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
