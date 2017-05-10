const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const postcssPlugins = require('./postcss-plugins.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');

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
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    files: ['src/**/*.css'],
    failOnError: false
  })
];

const prodPlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: [ 'vendor', ],
  }),
  new UglifyJSPlugin(),
];

const plugins = basePlugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : []
);

module.exports = plugins;
