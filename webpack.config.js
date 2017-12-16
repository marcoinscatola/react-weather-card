const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: '[name].[chunkhash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.SRC
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([paths.DIST]),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ]
};
