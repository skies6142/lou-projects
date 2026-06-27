/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // warm editorial-architectural palette, drawn from the Lou Projects monogram + site
        cream: {
          DEFAULT: '#F1E9D6', // base bone background
          50: '#FAF6EC',
          100: '#F6F0E2',
          200: '#EFE6D2',
          300: '#E6DAC0',
        },
        ink: {
          DEFAULT: '#23241B', // deep olive-black, primary text
          soft: '#3A3B2E',
        },
        olive: {
          DEFAULT: '#43462F', // muted forest/olive band
          deep: '#2C2E1F',
          800: '#33361F',
        },
        terracotta: {
          DEFAULT: '#7C3D1E', // monogram brown/rust — accent only
          600: '#8E4A26',
          400: '#A55A30',
        },
        clay: {
          DEFAULT: '#A8946A', // khaki/gold — dividers, secondary accent
          light: '#C4B289',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'grain-shift': {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-2%,1%)' },
        },
      },
    },
  },
  plugins: [],
}
