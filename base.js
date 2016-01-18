'use strict';

module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    camelcase: 0,
    'id-length': 0,
    indent: [2, 2, {SwitchCase: 1}],
    'no-unused-vars': [2, {args: 'none'}],
    'no-console': 0,
    'no-alert': 0,
    'object-curly-spacing': [2, 'never'],
  },
};
