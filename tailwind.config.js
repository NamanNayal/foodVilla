/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'c1': '#EEEEEE',
        'c2': '#D4BEE4',
        'c3': '#9B7EBD',
        'c4': '#3B1E54',
      }
    },
  },
  plugins: [],
}

