/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          brand: {
              200: '#e2e8f0',
              300: '#cbd5e1',
              900: '#1e293b',
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              300: '#fda4af',
              400: '#fb7185',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
              950: '#4c0519',
          }
      },
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Playfair Display', 'serif']
      },
      boxShadow: {
          'elegant': '0 10px 50px -12px rgba(0, 0, 0, 0.25)',
          'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
  }},

  plugins: [],
}