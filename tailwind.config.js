/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hejo: {
          10: "#BFCC94",
          20: "#F0F4EF",
        },
        donk: {
          10: "#0D1821",
          20: "#34537D",
          30: "#344966",
        },
      },
    },
  },
  plugins: [],
};
