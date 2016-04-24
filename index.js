const mongoose = require('mongoose');
const express = require('express');
const api = require('./server/api');
const app = express();

// Our API route
app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const mongodbURI = `mongodb://${process.env.DB_URI || 'localhost'}/${process.env.DB_NAME || 'REM'}`;
const port = process.env.PORT || 3000;
mongoose.connect(mongodbURI)
  .then(() => {
    app.listen(port, (err) => {
      if (err) console.error(err);
      else {
        console.info(`Open up http://localhost:${port}/ in your browser`);
      }
    });
  })
  .catch(err => {throw err;});
