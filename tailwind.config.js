/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: '#F3EDC8',
        redDetails: '#e2323b',
        darkerDetails: '#2c0516',
        mediumDetails: '#b41c1c',
        smallDetails: '#fdeceb'
      }
    },
  },
  plugins: [],
}

