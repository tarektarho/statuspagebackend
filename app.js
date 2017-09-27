var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



Status = require('./models/status');

// Connect to mongoose
mongoose.connect('mongodb://localhost/status', { useMongoClient: true });
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Wlcome to Status StandBy Page');
});

app.get('/api/status', function(req, res){
  Status.getStatus(function(err, status){
    if (err) {
      throw err;

    }
    res.json(status);
  });

});


app.listen(8000);
console.log('Running on port 8000...');
