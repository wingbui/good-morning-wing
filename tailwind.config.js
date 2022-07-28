/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // or 'media' or 'class ,
  theme: {
    extend: {
      colors: {
        primary: '',
        darkBlue: 'hsl(217, 28%, 15%)',
      },
    },
  },
  plugins: [],
}
