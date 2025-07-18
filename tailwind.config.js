/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#53423e",
      lightbrown: "#645550",
      darkbrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightcyan: "#88e5f0",
      darkcyan: "#009fb3",
      orange: "#fb9718",
      lightorange: "#fac27b",
      darkorange: "#d28422",
      grey: "#626965",
      lightgrey: "#978580",
      darkgrey: "#3f4441",
      cream: "#fff9f5",
      darkbrowngrey: "#4a4a4a",
      warmclay: "#d6a4a4",
      softviolet: "#bfa2db",
      deepnavy: "#2c2f48",
      lightlilac: "#E6DAF1",
      rosequartz: "#e2a9be",
      softblushpink: "#FBEFF2",
      champagnegold: "#ECD9B0",
    },
    extend: {
      boxShadow: {
        rosequartzShadow: "0px 0px 20px 0px rgba(170,152,169,1)",
        pinkMediumShadow: "10px 10px 200px 150px rgba(226, 169, 190, 1)",
        warmclayMediumShadow: "10px 10px 200px 150px rgba(214, 164, 164, 1)",
        violetMediumShadow: "10px 10px 200px 150px rgba(191, 162, 219, 1)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ["Roboto"],
    },
  },
  plugins: [],
};
