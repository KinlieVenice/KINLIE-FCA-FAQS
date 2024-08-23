/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      colors: {
        primary: "#f2f2f2",
        secondary: "#008542",
        buttonblue: "#1573e5",
        buttonyellow: "#daa625",
        fbHover: "#3b5897",
      },
      colors: {
        backg: "#f2f2f2",
        primary: "#008542",
        fbHover: "#1573e5",
        secondary: "#daa625",
        tertiary: "#3b5897",
      },
    },
  },
  plugins: [],
};
