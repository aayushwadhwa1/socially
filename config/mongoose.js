const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socially_development', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected to Database :: mongodb");});

module.exports = db;