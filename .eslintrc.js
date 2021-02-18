module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'linebreak-style': 'off',
    // eslint-disable-next-line quote-props
    semi: 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'arrow-parens': 'off',
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
    sourceType: 'module',
    ecmaVersion: 8,
  },
}
