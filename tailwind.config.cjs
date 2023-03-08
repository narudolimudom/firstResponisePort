/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#552049",
        cyan: "#61C4B7",
        lightRed: "#EB7565",
        pink: "#F39E9E",
        summerYellow: "#F6A560",
        galacticBlue: "#755CDE",
        lightCream: "#FFF7F0",
        mediumBrown: "#7A746E",
        black: "#030303",
      },
    },

    screens: {
      mobile: "200px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
