/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    mytheme: {
      primary: "#2F266C",

      secondary: "#FE765E",

      accent: "#FFBD83",

      neutral: "#FFF5EC",

      "base-100": "#FFF5EC",

      info: "#F84B2C",

      success: "#84DC9C",

      warning: "#FFB06A",

      error: "#DF3C1F",
    },

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
