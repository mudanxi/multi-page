const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const catalog = require('./base.catalog');
const postcssConfig = require('./postcss.config')
const moduleRules = []
/*
  由于ExtractTextPlugin不支持热更新，因此选择在开发环境下直接用style-loader加载样式。
  如有问题，可切换回ExtractTextPlugin，即使不能用热更新，也可实现LiveReload
*/

moduleRules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true, // default is false
        sourceMap: true, //'inline'
        importLoaders: 1,
        localIdentName: "[local]_[hash:base64:5]"
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        options: {
          config: {
            path: postcssConfig
          }
        }
      }
    }
  ],
},
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: 'babel-loader'
},
{
    test:    /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    loader:  'file-loader?limit="8129',
    exclude: /node_modules/
});

moduleRules.push({
  test: /\.scss$/,
  use: [{
      loader: "style-loader" // creates style nodes from JS strings
  }, {
      loader: "css-loader", // translates CSS into CommonJS
      options: {
        modules: true,
        localIdentName: "[local]_[hash:base64:5]"
      }
  }, {
      loader: "sass-loader", // compiles Sass to CSS
      options: {
        outputStyle: 'expanded',
        sourceMap: true,
        sourceMapContents: true
      }
  }]
})

moduleRules.push({
  test: /\.(jpe?g|png|gif|svg|)$/i,
  // use: 'file-loader?name=[hash:6].[ext]&outputPath=images/'
  use: [{
    loader: 'url-loader',
    options: {
      limit: 8192,
      mimetype: 'image/png',
      fallback: 'responsive-loader'
    }
  }]
})

module.exports = moduleRules;
