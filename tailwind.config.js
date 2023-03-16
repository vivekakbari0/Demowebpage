// /** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: false,
    content: ["./dist/*.{html,js}"],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [],
}
