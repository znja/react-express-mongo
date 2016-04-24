const webpack = require('webpack');
const path = require('path');
const srcPath = path.join(__dirname, 'client');
const outputPath = path.join(__dirname, 'dist', 'assets');

module.exports = {
  context: srcPath,
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: outputPath,
    filename: 'app.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${srcPath}/actions/`,
      components: `${srcPath}/components/`,
      containers: `${srcPath}/containers/`,
      reducers: `${srcPath}/reducers/`,
      styles: `${srcPath}/styles/`,
      // config: `${srcPath}/config/${process.env.REACT_WEBPACK_ENV}`
      config: `${srcPath}/config/`
    }
  },
  // cache: true,
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [srcPath],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: [srcPath],
        exclude: /node_modules/
      },
      {
        test: /\.sass/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?outputStyle=expanded&indentedSyntax'],
        include: [srcPath],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?outputStyle=expanded'],
        include: [srcPath],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192',
        include: [srcPath],
        exclude: /node_modules/
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader',
        include: [srcPath],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
