/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)', foreground: 'var(--fg)', ink: 'var(--fg)', surface: 'var(--surface)', muted: 'var(--muted-fg)', accent: 'var(--brass)',
        navy: '#0B1F3A', cream: '#F5F0E6', brass: '#B08D57',
      },
      fontFamily: {
        sans: ['Onest', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
