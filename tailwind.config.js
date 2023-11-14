module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ffbb06",
      },
      boxShadow: {
        lg: '3px 3px 0 black',
        xl: '6px 6px 0 black',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
