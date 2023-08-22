const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#f0f0fa",
            primary: "#2f80ed",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#121212",
            content1: "#1e1e1e",
            primary: "#2f80ed",
          },
        },
      },
    }),
  ],
};
