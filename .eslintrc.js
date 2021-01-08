module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',
    camelcase: 'off',
    'arrow-body-style': ['error', 'never'],
  },
};
