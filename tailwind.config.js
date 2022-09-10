/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      main: "#ffffff",
      nav: "#28293D",
      primary: "#3E7BFA",
      "primary-hover": "#6698ff",
      "primary-focus": "#3568df",
    },
    fontFamily: {
      brand: ["Russo One", "sans-serif"],
      body: "Poppins",
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};
