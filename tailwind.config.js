/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './public/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover']
  },
  plugins: [],
}
