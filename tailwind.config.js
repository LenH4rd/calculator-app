/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        "main-backgroound": "hsl(222, 26%, 31%)",
        "toggle-and-keypad": "hsl(223, 31%, 20%)",
        "screen-background": "hsl(224, 36%, 15%)",
        "Desaturated-dark-blue": "hsl(225, 21%, 49%)",
        "Red": "hsl(6, 63%, 50%)",
        "Dark-red": "hsl(6, 70%, 34%)",
        "White" : "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}

