/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      cream: "#F1EFD7",
      red: "#F65244",
      black: "#1E1E1E",
      grey: "#3c3c3c",
    },
    extend: {
      fontFamily: {
        Anton: ["Anton"],
      },
    },
  },
  plugins: [],
};
