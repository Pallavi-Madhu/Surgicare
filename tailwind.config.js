/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include your source files
    "./public/**/*.html",
  ],

  theme: {
    extend: {
      backgroundImage: {
        flower: "url('C:ProjectsSurgicaresrcassets\flowers.jpg')",
      },
    },
  },
  plugins: [require("daisyui")], // DaisyUI plugin
};
