module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/features/**/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        16: '16px',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      display: ['group-hover'],
    },
  },
  plugins: [],
};
