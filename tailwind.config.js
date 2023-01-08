/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cvr-green': '#316767',
        'cvr-gold': '#AD8B38',
      },
    },
  },
  plugins: [],
};
