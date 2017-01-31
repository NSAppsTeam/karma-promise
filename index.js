var path = require('path');

var createPattern = function (pattern) {
  return {
    pattern: pattern,
    included: true,
    served: true,
    watched: false
  };
};

var framework = function (files) {
  files.unshift(createPattern(path.join(__dirname, 'adapter.js')));
  files.unshift(createPattern(path.resolve(require.resolve('es6-promise'))));
};

framework.$inject = ['config.files'];

module.exports = {
  'framework:promise': ['factory', framework]
};
