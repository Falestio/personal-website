/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},

    fontSize: {
      "cute": "14px", 
      "tiny": "16px",
      "small": "18px",
      "base": "20px",
      "h6": "24px",
      "h5": "28px",
      "h4": "32px",
      "h3": "36px",
      "h2": "40px",
      "h1": "48px",
      "6xl": "56px",
      "7xl": "64px",
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
