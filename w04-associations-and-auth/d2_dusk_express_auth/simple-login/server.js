// server.js

// require express framework and additional modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  ejs = require('ejs'),
  mongoose = require('mongoose'),
  session = require('express-session');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/simple-login');

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));

var User = require('./models/user');

app.post('/users', function (req, res) {
  console.log(req.body)
  User.createSecure(req.body.email, req.body.password, function (err, user) {
    req.session.userId = user.id;
    res.json(user);
  });
});

app.post('/login', function (req, res) {
  // call authenticate function to check if password user entered is correct
  User.authenticate(req.body.email, req.body.password, function (err, user) {
    req.session.userId = user.id;
    res.json(user);
  });
});

// signup route with placeholder response
app.get('/signup', function (req, res) {
  res.render('signup');
});

// login route with placeholder response
app.get('/login', function (req, res) {
  res.render('login');
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on locahost:3000');
});