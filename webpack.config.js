const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");

const entryConfig = require('./webpack-config/config.entry');
const outputConfig = require('./webpack-config/config.output');
const moduleRules = require('./webpack-config/config.module');
const webpack = require('webpack');
module.exports = {
    entry: entryConfig,
    output: outputConfig,
    module: {
        rules: moduleRules
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: ['.css','.scss', '.js', '.jsx']
    }
    // plugins: [new ExtractTextPlugin({ filename: '[name]/style.css', disable: false, allChunks: true })]
}