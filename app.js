var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var moment = require('moment');
var nodemailer = require('nodemailer');
// var config = require('./config');

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


var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Resume" <'+ config.fromEmailUsername +'>', // sender address
//     to: config.emailUsername, // list of receivers
//     subject: 'Response ✔', // Subject line
//     text: 'Hello world 🐴', // plaintext body
//     html: '<b>Hello world 🐴</b>' // html body
// };

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

app.get('/', function(req, res) {
  res.render('layout', {});
})

app.post('/', function(req, res) {
  res.send('hi')
})


app.listen(3011, function() {
  console.log('listening on port 3011')
});
