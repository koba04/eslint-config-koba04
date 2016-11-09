'use strict';

module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    camelcase: 0,
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: "never",
    }],
    'id-length': 0,
    indent: [2, 2, {SwitchCase: 1}],
    'no-alert': 0,
    'no-console': 0,
    'no-param-reassign': [2, {props: false}],
    'no-plusplus': 0,
    'no-unused-vars': [2, {args: 'none'}],
    'object-curly-spacing': [2, 'never'],
    'import/prefer-default-export': 0,
    "import/no-extraneous-dependencies": 0,
  },
};
