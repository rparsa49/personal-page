/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      "fade-in": "fade-in 1s ease-in-out",
    },
  },
  plugins: [require("daisyui")],
  extend: {
    backgroundImage: {
      screen: "url(../public/minimalism-bg.jpg)",
    },
  },
};
