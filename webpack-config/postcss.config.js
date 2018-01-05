const path = require('path');
const catalog = require('./base.catalog');
module.exports = {
  plugins: {
    'postcss-import': {
      root: catalog.staticRoot,
      path: catalog.srcRoot
    },
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-apply': {},
    'postcss-nesting': {},
    'postcss-cssnext': {},
    'postcss-reporter': {
      clearMessages: true
    }
  }
}