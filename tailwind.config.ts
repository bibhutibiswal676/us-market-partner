import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f766e',
          dark: '#115e59',
          light: '#2dd4bf',
        },
        surface: '#f8fafc',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'marquee-ltr': {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(25%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 500ms ease-out both',
        'fade-in': 'fade-in 400ms ease-out both',
        'marquee-ltr': 'marquee-ltr 30s linear infinite',
        'marquee-rtl': 'marquee-rtl 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
