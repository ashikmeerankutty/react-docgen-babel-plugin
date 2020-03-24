const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
      rules: [{
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join('public', 'index.html') }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};