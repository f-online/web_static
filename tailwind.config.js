module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fonline: {
          50: '#e9eff7',
          100: '#a9bde0',
          200: '#93add9',
          300: '#7d9dd1',
          400: '#527cc1',
          500: '#275BB2',
        },
      },
    },
  },
  plugins: [],
};
