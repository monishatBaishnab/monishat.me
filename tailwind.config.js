/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C778DD',
        'secondery': '#ABB2BF',
        'dark': '#282C33'
      },
      fontFamily: {
        'borel': "'Borel', cursive",
        'varela':"'Varela Round', sans-serif"
      }
    },
  },
  plugins: [],
}