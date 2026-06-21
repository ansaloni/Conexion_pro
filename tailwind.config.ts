import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A6B',
          dark: '#0f2444',
          light: '#2a5199',
        },
        brand: {
          DEFAULT: '#C53030',
          hover: '#a82020',
          light: '#e05050',
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#E8C040',
          dark: '#a8800f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f2444 0%, #1B3A6B 50%, #2a5199 100%)',
        'brand-gradient': 'linear-gradient(135deg, #C53030 0%, #a82020 100%)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(27,58,107,0.10)',
        'card-lg': '0 8px 40px rgba(27,58,107,0.18)',
        brand: '0 4px 20px rgba(197,48,48,0.35)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
