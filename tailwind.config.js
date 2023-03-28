/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "7.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
