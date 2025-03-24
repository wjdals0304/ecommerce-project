module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
