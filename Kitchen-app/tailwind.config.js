/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ED7E46",
      },
      fontFamily: {
        Kanit: ['"Kanit"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [],
};
