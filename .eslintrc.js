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
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
