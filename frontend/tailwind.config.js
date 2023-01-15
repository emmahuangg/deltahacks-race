/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'pink': '#EE386C',
        'purple': '#6D47B1',
        'black': '#49423E', 
        'orange': '#F48452',
        'blue': '#0EACE3',
        'yellow': '#FCDC15'
      }, 
      spacing: {
        '800': '80rem',
      }
    },
  },
  plugins: [],
}