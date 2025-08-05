/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'move-left': 'move-left 8s linear infinite',
        'scroll-left': 'scroll-left 1s linear infinite',
        'scroll-right': 'scroll-right 1s linear infinite',
      },
      keyframes: {
        'move-left': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        'scroll-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'scroll-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      }
    },
  },
  plugins: [],
}
