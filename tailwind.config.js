module.exports = {
  purge: [
    'source/**/*.blade.php',
    'source/**/*.md',
    'source/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'tmk-blue': '#118ab2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
