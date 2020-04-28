const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const fishes = require('./routes/api/fishes');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use('/api/fishes', fishes);

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

module.exports = server;
