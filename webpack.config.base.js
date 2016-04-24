const path = require('path');
const srcPath = path.join(__dirname, 'src');
const port = process.env.PORT || 3000;
const publicPath = '/assets/';

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
const additionalPaths = [];

module.exports = {
  additionalPaths,
  port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'app.js',
    publicPath: `.${publicPath}`
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port,
    publicPath,
    noInfo: false,
    proxy: {
      '/api/*': 'http://localhost:8000'
    }
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
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: []
};
