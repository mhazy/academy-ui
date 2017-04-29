const path = require('path');
const plugins = require('./webpack/plugins');

module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: [
      'react',
      'react-dom'
    ],
  },

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  devtool: 'sourcemap',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      }
    ]
  },

  plugins: plugins,
}
