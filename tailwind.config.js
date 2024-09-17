/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./dist/background-1.png')",
        'footer-texture': "url('./dist/background-1.png')",
      }
    },
  },
  plugins: [],
}

