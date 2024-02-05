/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.{html,js}"],
  mode:"jit",
  theme: {
    extend: {
      backgroundImage : {
        'loginBackgroundImage': "url('/static/images/background.jpg')"
      },
    },
  },
  plugins: [],
}

