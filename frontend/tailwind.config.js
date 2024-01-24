/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    xs: "281px",
    sm: "431px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
    xxl: "1500px",
  },
  plugins: [require("daisyui")],
};
