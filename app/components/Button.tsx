'use client';
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
};

const base =
  'btn inline-flex items-center justify-center gap-2 rounded-md font-medium transform shadow-sm hover:shadow-md active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-60 disabled:pointer-events-none motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out';
const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5',
  lg: 'px-6 py-3 text-lg',
};
const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark motion-safe:hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-primary-light text-white hover:bg-primary motion-safe:hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'bg-white text-primary border border-primary/60 hover:bg-primary/10 hover:border-primary',
};

export default function Button({
  href,
  onClick,
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ariaLabel,
  type = 'button',
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href as any} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
