module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  extends: ['plugin:prettier/recommended', 'next/core-web-vitals'],
  root: true,
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'packages/frontend/pages/'],
  },
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
};
