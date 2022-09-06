/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      background: "#191414",
      main: "#ffffff",
    },
    fontFamily: {
      brand: ["Russo One", "sans-serif"],
      body: 'Poppins',
    },
  },
  plugins: [],
};
