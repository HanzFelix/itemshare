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
      text: "#0e1111",
      background: "#e6eaea",
      primary: "#2d6c50",
      secondary: "#f4f4f6",
      accent: "#f0bb62",
    },
  },
  plugins: [require("flowbite/plugin")],
};
