/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  // 👈 scans all your components
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D8B4FE', // Light purple
          DEFAULT: '#8B5CF6', // Main purple
          dark: '#6D28D9',   // Deep purple
        },
      },
    },
  },
  plugins: [],
}
