/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        white: "#ffffff",
        black: "#000000",
      },
      backgroundColor: {
        dark: {
          fill: "#1d3557",
        },
        light: {
          fill: "#f8f9fa",
        },
      },
      borderColor: {
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
