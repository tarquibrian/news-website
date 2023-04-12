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
      colors: {
        redish: "#1d3557",
      },
      textColor: {
        white: "#ffffff",
        black: "#000000",
      },
      backgroundColor: {
        skin: {
          fill: "var(--bg-color)",
          indicator: "var(--fill-color-indicator)",
        },
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
