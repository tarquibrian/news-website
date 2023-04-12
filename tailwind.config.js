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
        skin: {
          base: "var(--text-color)",
        },
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
    },
  },
  plugins: [],
};
