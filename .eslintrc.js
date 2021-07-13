module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 自定义规则
    'prettier/prettier': [
      'off',
      // 0 = off, 1 = warn, 2 = error
      // Use // eslint-disable-next-line to ignore the next line.
      // Use /* eslint-disable */ to ignore all warnings in a file. 
      {
        semi: false,
        singleQuote: true,
        printWidth: 160,
      },
    ],
  },
}
