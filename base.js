'use strict';

module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    camelcase: 0,
    'id-length': 0,
    indent: [2, 2, {SwitchCase: 1}],
    'no-alert': 0,
    'no-console': 0,
    'no-unused-vars': [2, {args: 'none'}],
    'object-curly-spacing': [2, 'never'],
  },
};
