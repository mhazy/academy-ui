const path = require('path');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders.js');

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
    rules: loaders,
  },

  plugins: plugins,
}
