'use strict';

module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    camelcase: 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'id-length': 'off',
    indent: ['error', 2, {SwitchCase: 1}],
    'no-alert': 'off',
    'no-console': 'off',
    'no-param-reassign': ['error', {props: false}],
    'no-plusplus': 'off',
    'no-unused-vars': ['error', {args: 'none'}],
    'object-curly-spacing': ['error', 'never'],
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": 'off',
  },
};
