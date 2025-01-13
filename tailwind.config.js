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
    },
  },
  plugins: [require("daisyui")], // DaisyUI plugin
};
