/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include your source files
    "./public/**/*.html",
  ],

  theme: {
    extend: {
      backgroundImage: {
        flower: "url('../assets/flowers.jpg')",
      colors: {
        primary: "#213555", // Custom primary color
        secondary: "#3E5879", // Custom secondary color (fixed with '#')
        gradientPink: "#ffb3d9", // Lighter pink
        gradientBlue: "#b3e0ff", // Lighter blue
        gradientLavender: "#c2c2f0", // Lighter lavender
      },
      animation: {
        gradientBackground: "gradientAnimation 10s infinite", // Gradient animation
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("daisyui")], // DaisyUI plugin
}
};
