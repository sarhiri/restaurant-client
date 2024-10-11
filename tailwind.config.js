/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode:'jit',
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Ramadhankarim', 'sans-serif'],
      },
      blur: {
        'extra-light': '1px', // Define a new blur class
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

