'use strict';

module.exports = {
  rules: {
    'jsx-a11y/no-static-element-interactions': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'off',
  },
};
