/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0B14',
          soft: '#11131F',
          line: 'rgba(255,255,255,0.08)',
        },
        paper: {
          DEFAULT: '#F7F7FB',
          soft: '#FFFFFF',
          line: 'rgba(10,11,20,0.08)',
        },
        violet: '#8B7CFA',
        cyan: '#34E2C7',
        coral: '#FF6F8E',
        amber: '#FFB36B',
        muted: '#9295B5',
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        spectrum: 'linear-gradient(90deg, #5B5FEF 0%, #8B7CFA 28%, #C76DF0 52%, #FF6F8E 78%, #FFB36B 100%)',
        'spectrum-vertical': 'linear-gradient(180deg, #5B5FEF 0%, #8B7CFA 28%, #C76DF0 52%, #FF6F8E 78%, #FFB36B 100%)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(139,124,250,0.25)',
        'glow-coral': '0 0 40px rgba(255,111,142,0.20)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        eq: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        eq: 'eq 1.1s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
