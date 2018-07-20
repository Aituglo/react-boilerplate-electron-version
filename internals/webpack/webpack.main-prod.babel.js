const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  devtool: 'source-map',

  mode: 'development',

  target: 'electron-main',

  entry: path.join(process.cwd(), 'app/electron/main.dev.js'),

  libraryTarget: 'commonjs2',

  output: {
    path: path.join(process.cwd(), 'app/electron/'),
    filename: 'main.prod.js',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG_PROD: 'false',
    }),
  ],

  node: {
    __dirname: false,
    __filename: false,
  },
});
