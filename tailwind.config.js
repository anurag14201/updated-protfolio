/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   "big": "1024px",
    //   "bxl": "1280px",
    //   "bmd": "768px",
    //   "bsm": "640px",
    //   'bxxs': '340px', // small-width
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
