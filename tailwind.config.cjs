/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'admin': '0 -6px 8px -2px rgba(0, 255, 0, 0.25)'
      }

    },
  },
  plugins: [],
}
