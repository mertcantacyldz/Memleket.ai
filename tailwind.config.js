/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        odor: ["Odor Mean Chey", "serif"],
      },

      colors: {
        navbar: "#4A6074",
        navyellow: "#FFBC00",
        modal_bg: "#18112db8",
        close_button : '#a2a2a2',
      },
      backgroundImage: {
        fethiye: "url('../public/image/fethiye.jpg')",
      },
      transitionDelay: {
        50: "50ms",
      },
    },
  },
  plugins: [],
};
