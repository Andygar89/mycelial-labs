const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Arial', 'Helvetica', 'sans-serif'],
    },

    extend: {
      width: {
        200: '50rem',
      },
      height: {
        112.5: '28.125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
