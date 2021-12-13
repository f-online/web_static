module.exports = {
  extends: ['prettier', 'airbnb'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/control-has-associated-label': 0,
    'no-underscore-dangle': 0,
  },
  plugins: ['html', 'prettier', 'react-hooks'],
};
