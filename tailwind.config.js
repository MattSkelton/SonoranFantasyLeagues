/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        'desert-bg':      '#F5EDE0',
        'desert-surface': '#EAD9C0',
        'desert-brown':   '#2C1A0E',
        'desert-red':     '#C45C2A',
        'desert-terra':   '#C45C2A',
        'desert-blue':    '#1A4A7A',
        'desert-sage':    '#4A6B4C',
        'desert-green':   '#4A6B4C',
        'desert-maroon':  '#8B3A2A',
        'desert-sand':    '#E8C48A',
        'desert-dark':    '#F5EDE0',
        'desert-gold':    '#B8700F',
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
