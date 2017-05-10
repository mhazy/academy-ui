const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const cssLoader = PRODUCTION ?
  ExtractTextPlugin.extract({
    use: [
      'css-loader',
      'postcss-loader',
    ],
  }) :
  [
   'style-loader',
   'css-loader',
   'postcss-loader',
  ];

module.exports = [
  {
    test: /\.tsx?$/,
    use: 'awesome-typescript-loader',
  },
  {
    enforce: 'pre',
    test: /\.js$/,
    use: 'source-map-loader',
  },
  {
    test: /\.css$/,
    use: cssLoader,
  },
  {
    test: /\.(png|jpg)$/,
    use: 'file-loader',
  }
];
