/* eslint no-console: 0 */
const mongoose = require('mongoose');
const express = require('express');
const api = require('./server/api');
const app = express();

const PROD = process.env.NODE_ENV === "production";

function startDevAppServer() {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config');
  new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Listening at localhost: ${config.port}`);
    console.log('Opening your system browser...');
    // open(`http://localhost:${config.port}/webpack-dev-server/`);
  });

  // return new Promise((resolve, reject) => {
  //   const server = new WebpackDevServer(compiler, {
  //     hot: true,
  //     historyApiFallback: true,
  //     noInfo: false,
  //     publicPath: config.output.publicPath,
  //     port
  //   });
  //   server.listen(port, 'localhost', (err) => {
  //     if (err) reject(err);
  //     else {
  //       resolve(port);
  //     }
  //   });
  // });
}

startDevAppServer();


// // Our API route
// app.use('/api', api);
//
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
//
// const mongodbURI = `mongodb://${process.env.DB_URI || 'localhost'}/${process.env.DB_NAME || 'REM'}`;
// const port = process.env.PORT || 3000;
// mongoose.connect(mongodbURI)
//   .then(() => {
//     app.listen(port, (err) => {
//       if (err) console.error(err);
//       else {
//         console.info(`Open up http://localhost:${port}/ in your browser`);
//       }
//     });
//   })
//   .catch(err => {throw err;});

// clientServer.listen(port + 1, 'localhost');
