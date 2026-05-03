/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        'desert-red': '#C8102E',
        'desert-blue': '#003087',
        'desert-green': '#2C5F2E',
        'desert-maroon': '#6B2737',
        'desert-sand': '#D4A96A',
        'desert-dark': '#1A1A1A',
        'desert-gold': '#FFB81C',
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
