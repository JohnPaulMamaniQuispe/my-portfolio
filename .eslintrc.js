module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-function-type': 'warn',
    '@typescript-eslint/no-wrapper-object-types': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@next/next/no-img-element': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  ignorePatterns: [
    '.next/**/*',
    'node_modules/**/*',
    'out/**/*',
    'build/**/*',
  ],
};
