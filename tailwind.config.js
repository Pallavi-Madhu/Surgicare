/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include your source files
    "./public/**/*.html",
  ],

  theme: {
    extend: {
 colors: {
        rose: colors.rose,
        emerald: colors.emerald,
        amber: colors.amber,
        primary: '#ff0000',
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
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jet: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")], // DaisyUI plugin
};
