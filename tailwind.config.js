module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    '*.html',
    './assets/js/main.js'
  ],
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },

      padding: {
        '120': '120px',
      },

      colors: {
        'theme-color': '#361CC1',
        'theme-color-2': '#FE7A7B'
      }
    },
  },
  plugins: [],
}
