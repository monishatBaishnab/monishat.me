/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#22c55e',
        'secondery': '#64748b',
        'dark': '#011627'
      },
      fontFamily: {
        'borel': "'Borel', cursive",
        'varela':"'Varela Round', sans-serif"
      }
    },
  },
  plugins: [],
}