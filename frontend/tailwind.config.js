// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#ffffff',
        accent: '#2563eb',
        text: {
          light: '#1a1a1a',
          dark: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      scrollBehavior: {
        smooth: 'smooth',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
