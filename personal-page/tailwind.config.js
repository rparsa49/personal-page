/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'screen': "url(../public/minimalism-bg.jpg)"
      }
    },
  },
  plugins: [],
}

