const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const postcssPlugins = require('./postcss-plugins.js');

const basePlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
  new webpack.LoaderOptionsPlugin({
    test: /\.css$/,
    options: { postcss: postcssPlugins },
  }),
  new ExtractTextPlugin("[name].[hash].css"),
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
