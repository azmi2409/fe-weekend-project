const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      pink: "#EEBECE",
      specialBlue: "#0B24FB",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
