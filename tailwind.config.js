/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-dark':'#163758',
        'custom-blue':'#1677FF',
      },
    },
  },
  plugins: [require("daisyui")],
}

