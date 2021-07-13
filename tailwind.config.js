module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.astro'
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    listStyleType: {
      decimal: "decimal-leading-zero"
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Taviraj', 'serif'],
    },
  }
};