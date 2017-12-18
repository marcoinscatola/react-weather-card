const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist')
};

const config = {
  entry: ['babel-polyfill', 'raf/polyfill', path.join(paths.SRC, 'index.js')],
  output: {
    path: paths.DIST,
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    modules: [paths.SRC, 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ]
};

module.exports = {
  paths: paths,
  config: config
};
