'use strict';

module.exports = {
  rules: {
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false
      }
    ]
  }
};
