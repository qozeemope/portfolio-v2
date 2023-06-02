/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#e63946",
      secondary: "#f1faee",
      white: "#ffffff",
      inert: "#a8dadc",
      two: "#457b9d",
      three: "#1d3557",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
