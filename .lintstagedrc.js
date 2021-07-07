module.exports = {
  '*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yml}': 'prettier -c --debug-check',
  '*.{css,less,scss}': 'stylelint',
  '*.{js,jsx,ts,tsx}': [
    () => 'eslint', // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
    'jest --ci --bail --passWithNoTests --findRelatedTests',
  ],
};
