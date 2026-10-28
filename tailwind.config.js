/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F0E6', foreground: '#0B1F3A', ink: '#0B1F3A', surface: '#FBF7EF', muted: '#6F6B63', accent: '#B8C8DB',
      },
      fontFamily: { sans: ['Manrope', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
};
