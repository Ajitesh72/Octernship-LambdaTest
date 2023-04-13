/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'em': '10em',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1220px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom':'1053px',
      'custom1':'896px',
      'custom2':'1171px',
      'custom3':'1085px',
    },
  },
  plugins: [],
}

