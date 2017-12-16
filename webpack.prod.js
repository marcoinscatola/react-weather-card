const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common.config, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new CleanWebpackPlugin([common.paths.DIST]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
