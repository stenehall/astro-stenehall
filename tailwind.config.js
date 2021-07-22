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
    extend: {
      colors: {
        code: '#FFC200',
        article: '#82C7DE',
        primary: '#e00031',
        'primary-offset': '#eb0033',
        secondary: '#43a9a3'
      },
    }
  },
  variants: {
    extend: {
     zIndex: ['hover', 'active'],
    }
  }
};