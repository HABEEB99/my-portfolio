module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "body": "#222831",
        "cta": "#F05454",
        "brand": "#30475e",
        "color": "#DDDDDD"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
