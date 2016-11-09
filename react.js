'use strict';

module.exports = {
  rules: {
    'jsx-a11y/no-static-element-interactions': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
      },
    ],
    'react/jsx-filename-extension': 0,
  },
};
