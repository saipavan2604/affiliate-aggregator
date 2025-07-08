/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FF5722',   // For price
        secondary: '#03A9F4', // Button color
        base: '#F9FAFB',      // Background
        textdark: '#111827',  // Font color
        dealgreen: '#8BC34A', // Highlights
      },
    },
  },
  plugins: [],
}
