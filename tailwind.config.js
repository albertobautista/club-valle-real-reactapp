/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      flex: {
        full: '0 0 100%',
      },
      colors: {
        'cvr-green': '#316767',
        'cvr-gold': '#AD8B38',
        'cvr-blue': '#253245',
      },
    },
  },
  plugins: [],
};
