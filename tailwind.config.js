module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringWidth: ['hover', 'active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
