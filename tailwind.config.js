/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include your source files
    "./public/**/*.html",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#213555", // Custom primary color
        secondary: "#3E5879", // Custom secondary color (fixed with '#')
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui")], // DaisyUI plugin
};
