/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        width: {
          '573': '573px',
          '1170': '1170px'
         },
         height: {
          '338': '338px',
          '450': '450px'
         }
      },
    },
    plugins: [],
  }