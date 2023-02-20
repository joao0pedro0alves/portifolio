/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#66656e'
        },
        green: {
          300: "#1ed7b7",
          500: "#1a9a8a",
          700: "#055e56"
        },
        blue: {
          500: "#282e4f",
          900: "#13152c"
        },
      }
    },
  },
  plugins: [],
}
