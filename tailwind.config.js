/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': '#A3C6C4',
        'balmy-green': '#354649',
        'balmy-blue': '#A3C6C4',
        'balmy-gray': '#E0E7E9',
      }
    },
  },
  plugins: [],
}