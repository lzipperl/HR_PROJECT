/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#8B0000',
          dark: '#6B0000',
          light: '#A52A2A',
          50: '#FDF2F2',
          100: '#F5D0D0',
          200: '#E8A0A0',
          300: '#D06060',
          400: '#B83030',
          500: '#8B0000',
          600: '#6B0000',
          700: '#500000',
          800: '#3A0000',
          900: '#250000',
        },
        gold: {
          DEFAULT: '#FFD700',
          dark: '#DAA520',
          light: '#FFE44D',
          50: '#FFFDF0',
          100: '#FFF8D4',
          200: '#FFEFA8',
          300: '#FFE44D',
          400: '#FFD700',
          500: '#DAA520',
          600: '#B8860B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
