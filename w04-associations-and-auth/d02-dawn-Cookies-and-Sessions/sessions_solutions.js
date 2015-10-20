//Sessions -- Solutions

// load express module into variable
var express = require('express');
// load bodyParser module into variable
var bodyParser = require('body-parser');
// load express-session module into variable
var expressSession = require('express-session');
// load cookieParser module into variable
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

// call express module
var app = express();

// must use cookieParser before expressSession
// configure app to use cookieParser
app.use(cookieParser());
// configure app to use expressSession with a secret token
app.use(expressSession({secret:'somesecrettokenhere'}));
// configure app to use bodyParser
app.use(bodyParser());

// sets up get root route
app.get('/', function(req, res){
	// saves form in html variable
  var html = '<form action="/" method="post">' +
             'Your name: <input type="text" name="userName"><br>' +
             '<button type="submit">Submit</button>' +
             '</form>';
  // checks if there is currently a session attribut on the req object
  // and if there is a username attribute on that session
  if (req.session.userName) {
  	// if there is, add message containing user name
    html += '<br>Your username from your session is: ' + req.session.userName;
  }
  res.send(html);
});