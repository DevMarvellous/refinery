/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#002366',
          dark: '#001a4d',
          light: '#003399',
        },
        'gold': {
          DEFAULT: '#D4AF37', // Classic Gold
          light: '#f1e2b0',
          dark: '#a6892c',
          muted: '#bda15b',
        },
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        },
        'royal-blue': '#002366', // Keep for compatibility
        'sky-blue': '#87CEEB',
        'light-blue': '#E8F4FD',
        'medium-blue': '#4A90E2',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
