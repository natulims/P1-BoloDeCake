/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seashell: "#FFF5EC",
        midnightblue: "#2F266C",
        bittersweet: "#FE765E",
        fawn: "#FFBD83",
        whitesmoke: "#F3F3F3",
        darkpurple: "#151131",
        cinnabar: "#F84B2C",
      },
    },
  },
  plugins: [require("daisyui")],
};
