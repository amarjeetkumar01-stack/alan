/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)', foreground: 'var(--ink)', ink: 'var(--ink)', surface: 'var(--surface)', muted: 'var(--muted)', accent: 'var(--accent)',
      },
      fontFamily: { sans: ['Onest', 'sans-serif'] },
    },
  },
  plugins: [],
};
