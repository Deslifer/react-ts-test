module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', 'ts'] }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-param-reassign': [2, { props: false }],
    'import/no-named-as-default': 0,
    'no-alert': 'off',
    'object-shorthand': ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
  },

};
