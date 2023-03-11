/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        "screen" : "url('../img/background.jpg')"
      }
    },
  },
  plugins: [],
}
