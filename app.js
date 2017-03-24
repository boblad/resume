var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var moment = require('moment');
var nodemailer = require('nodemailer');
var config = require('./config');

var app = express();

var ENV = process.env.NODE_ENV;
var is_production = true;

if (ENV === 'development') {
  is_production = false;
}
app.locals.is_production = ENV !== 'development';

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

// // view engine setup
app.set('view engine', 'hbs');

app.set('case sensitive routing', true);

app.enable('trust proxy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var transporter = nodemailer.createTransport('smtps://' + config.senderEmail + ':' + config.senderPassword + '@smtp.gmail.com');


app.get('/', function(req, res) {
  var speeds = []
  var duration = 60;
  var dotCount = 20;
  var osc = 40;

  for (var i = 1; i < 20; i++) {
    speeds.push((duration/ (dotCount + osc - i)));
  }
  res.render('layout', {
    is_production: is_production,
    speeds: speeds
  });
})

app.post('/contact', function(req, res) {
  var mailOptions = {
    from: '"Your web site" <' + config.senderEmail + '>', // sender address
    to: config.senderEmail, // list of receivers
    subject: 'Contact', // Subject line
    text: req.body.email + ' : ' + req.body.message,
    html: req.body.email + ' : ' + req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log('err', error);
      res.send('An Error Occurred');
    } else {
      console.log('Message sent: ' + info.response);
      res.send('Thank you! We will be in contact soon.');
    }
  });
})


app.listen(3011, function() {
  console.log('listening on port 3011')
});
