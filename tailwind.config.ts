import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fafaf8',
        ink: {
          DEFAULT: '#0f1715',
          soft: '#4a5654',
          faint: '#8a9492',
        },
        teal: {
          DEFAULT: '#03999a',
          600: '#027c7d',
          100: '#d3f0ef',
          50: '#eefaf9',
        },
        mint: '#e3f5ef',
        peach: '#fbe9e1',
        butter: '#faf3d9',
        lavender: '#ece8f7',
        sky: '#e3eff5',
        blush: '#fbe5ec',
        coral: '#fde8e0',
        periwinkle: '#e8ecfa',
        sage: '#e8f0e3',
        'rose-50': '#fdf0f2',
        lilac: '#f3eefa',
        line: '#e7e9e7',
        'footer-bg': '#0f1715',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 3px rgba(15,23,21,0.06)',
        md: '0 8px 24px rgba(15,23,21,0.08)',
        lg: '0 16px 48px rgba(15,23,21,0.10)',
        xl: '0 24px 64px rgba(15,23,21,0.12)',
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}

export default config
