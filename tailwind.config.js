/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "7.5rem",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        integral: ["Integral", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
