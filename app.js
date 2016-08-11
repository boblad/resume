var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var moment = require('moment');

var app = express();

var ENV = process.env.NODE_ENV;
app.locals.is_production = ENV !== 'development';

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

// // view engine setup
app.set('view engine', 'hbs');

app.set('case sensitive routing', true);

app.enable('trust proxy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function(req, res) {
  res.render('layout', {});
})


app.listen(3011, function() {
  console.log('listening on port 3011')
});
