/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibmPlexMono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        swipeIn: {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "100%": { transform: "translateX(10px)", opacity: "1" },
        },
        swipeInTwo: {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "100%": { transform: "translateX(5px)", opacity: "1" },
        },
        showup: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        swipeIn: " swipeIn  5s ease-in-out forwards",
        swipeInTwo: " swipeInTwo  5s ease-in-out forwards",
        showUp: " showup  20s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
