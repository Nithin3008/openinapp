/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/public/LeftSide.png')",
      },
    },
  },
  plugins: [],
};
