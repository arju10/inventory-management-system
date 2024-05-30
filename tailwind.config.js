/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2d2bff',
        'custom-green':'#00bd9d', // Add your custom color here
        'custom-lightGreen':'#00a0e9',
        'custom-lightBlue':'#3bbaff',
        'custom-riptide':'#8bd7d2',
        'custom-dark':'#163758',
        'custom-levenderBlue':'#CCC1FF',
        'custom-amethyst':'#9E8FFF',
      },
    },
  },
  plugins: [require("daisyui")],
}

