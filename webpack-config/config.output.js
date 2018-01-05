const catalog = require('./base.catalog.js');
module.exports = {
  path: catalog.buildRoot,
  publicPath: '/',
  // filename: '[name]/app.[chunkhash].js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
  filename: '[name]/app.js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
  chunkFilename: '[name].[chunkhash].bundle.js',
};
