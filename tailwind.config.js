/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'softOrange': 'hsl(35, 77%, 62%)',
        'grayishBlue': 'hsl(233, 8%, 79%)',
        'darkGrayishBlue': 'hsl(236, 13%, 42%)',
        'softRed': 'hsl(5, 85%, 63%)',
        'offWhite': '#fefdf9',
        'veryDarkBlue': 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
}
