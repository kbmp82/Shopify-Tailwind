/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid'
  ],
  theme: {
    extend: {
      minHeight: {
        '50vh': '50vh',
      }
    },
  },
  plugins: [],
}

