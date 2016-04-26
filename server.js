/* eslint no-console: 0 */
const mongoose = require('mongoose');
const express = require('express');
const api = require('./server/api');
const app = express();
const webpack = require('webpack');
const PROD = process.env.NODE_ENV === 'production';

// In in development start a webpack-dev-server to server our Frontend
if (!PROD) {
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config.dev');
  const server = new WebpackDevServer(webpack(config), config.devServer);
  server.listen(config.port, 'localhost', () => {
    console.log(`Listening at localhost: ${config.port}`);
    console.log('Opening your system browser...');
  });
}

// Our API route
app.use('/api', api);

// If in production server our React SPA from dist folder
if (PROD) {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(require('./dist/index.html'));
  });
}

// Connect to our MongoDB database, Once connect start our server.
const mongodbURI = `mongodb://${process.env.DB_URI || 'localhost'}/${process.env.DB_NAME || 'REM'}`;
const port = process.env.PORT || 8000;
return mongoose.connect(mongodbURI)
  .then(() => {
    app.listen(port, (err) => {
      if (err) console.error(err);
    });
  })
  .catch(err => {throw err;});
