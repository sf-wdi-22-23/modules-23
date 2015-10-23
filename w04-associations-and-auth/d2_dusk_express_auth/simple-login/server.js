// server.js

// require express framework and additional modules
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  session = require('express-session');

// create express app object
var app = express();

// connect to database and pull in model(s)
mongoose.connect('mongodb://localhost/simple-login');
var User = require('./models/user');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 30 * 60 * 1000 }
}));


// show the signup form
app.get('/signup', function (req, res) {
  res.render('signup');
});

// create a user 
app.post('/users', function (req, res) {
  console.log(req.body)
  User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    req.session.userId = newUser._id;
    res.redirect('/profile');
  });
});

// show the login form
app.get('/login', function (req, res) {
  res.render('login');
});

// authenticate the user and set the session
app.post('/sessions', function (req, res) {
  // call authenticate function to check if password user entered is correct
  User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
    if (err){
      console.log('authentication error: ', err);
      res.status(500).send();
    } else {
      console.log('setting sesstion user id ', loggedInUser._id);
      req.session.userId = loggedInUser._id;
      res.redirect('/profile');
    }
  });
});

// show user profile page
app.get('/profile', function (req, res) {
  console.log('session user id: ', req.session.userId);
  // find the user currently logged in
  User.findOne({_id: req.session.userId}, function (err, currentUser) {
    if (err){
      console.log('database error: ', err);
      res.redirect('/login');
    } else {
      // render profile template with user's data
      console.log('loading profile of logged in user');
      res.render('user-show.ejs', {user: currentUser});
    }
  });
});

app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  // redirect to login (for now)
  res.redirect('/login');
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on locahost:3000');
});