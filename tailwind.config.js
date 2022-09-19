/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      background: "#f7f7fa",
      main: "#ffffff",
      nav: "#28293D",
      primary: "#3E7BFA",
      "primary-hover": "#6698ff",
      "primary-focus": "#3568df",
      destructive: "#FF3B3B",
      "destructive-hover": "#FF5C5C",
      "destructive-focus": "#E53535",
      positive: "#06C270",
      "positive-hover": "#39D98A",
      "positive-focus": "#05A660",
    },
    fontFamily: {
      brand: ["Russo One", "sans-serif"],
      body: "Poppins",
    },
    boxShadow: {
      nav: "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);",
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};
