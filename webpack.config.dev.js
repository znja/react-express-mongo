const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.config.base');

const config = Object.assign({}, baseConfig, {
  entry: [
    `webpack-dev-server/client?http://127.0.0.1:${baseConfig.port}/`,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loaders: ['react-hot', 'babel'],
  include: [...config.additionalPaths, path.join(__dirname, 'src')]
});

module.exports = config;
