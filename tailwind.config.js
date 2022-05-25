const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      pink: "#EEBECE",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
