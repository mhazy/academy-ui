const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
];

const prodPlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: [ 'vendor', ],
  })
];

const plugins = basePlugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : []
);

module.exports = plugins;
