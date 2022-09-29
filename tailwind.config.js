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
      gray: {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
      }
      
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
