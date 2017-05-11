const PRODUCTION = process.env.NODE_ENV === 'production';

const postcssBasePlugins = [
  require('postcss-import'),
  require('postcss-cssnext'),
  require('css-mqpacker')({
    sort: true,
  }),
];

const postcssDevPlugins = [];

const postcssProdPlugins = [
  require('cssnano')({
    safe: true,
    autoprefixer: false,
    sourcemap: true,
    // do not convert rgba(0,0,0,0) to transparent for IE
    colormin: { legacy: true },
  }),
  require('postcss-pxtorem')({
    rootValue: 16,
    propWhiteList: [
      'flex-basis',
      'font',
      'font-size',
      'height',
      'letter-spacing',
      'line-height',
      'margin',
      'margin-bottom',
      'margin-left',
      'margin-right',
      'margin-top',
      'max-height',
      'max-width',
      'min-height',
      'min-width',
      'padding',
      'padding-bottom',
      'padding-left',
      'padding-right',
      'padding-top',
      'width',
      'transform',
    ],
    replace: true,
  }),
];

module.exports = postcssBasePlugins
  .concat(PRODUCTION ? postcssProdPlugins : [])
  .concat(!PRODUCTION ? postcssDevPlugins : []);
