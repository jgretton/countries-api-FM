module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['"Nunito Sans"', "sans-serif"],
      },
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        VDarkBlueDBG: "hsl(207, 26%, 17%)",
        VDarkBlueLText: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
