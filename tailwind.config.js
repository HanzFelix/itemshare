/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      text: "#1d1f0e",
      background: "#f0f2e3",
      primary: "#18593b",
      secondary: "#c9d09f",
      accent: "#debc12",
    },
  },
  plugins: [require("flowbite/plugin")],
};
