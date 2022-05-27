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
      backgroundImage: {
        pinkbubble: "url('./src/assets/bg-help.svg')",
        bluebubble: "url('./src/assets/oval.svg')",
        hero: "url('./src/assets/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
