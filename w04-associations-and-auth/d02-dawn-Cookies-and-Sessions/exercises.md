**Cookies** -- Exercises

### Getting Started

```bash
mkdir cookies-and-sessions;
cd cookies-and-sessions;
touch index.js;
npm init;
npm install --save express cookie-parser;
```

In `index.js` add some Express Application boiler-plate:

```javascript

var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("UP AND RUNNING");
});
```

## Cookies

#### Challenge 1: Write a Cookie - [solutions](solutions.md)
* Set a cookie in the HTTP Response Header with a key of `"wdi"` and value of `22` whenever you hit `/moar_cookie`. See [res.cookie](http://expressjs.com/api.html#res.cookie).
* Next, hit your endpoint. From inside your route, can you `read` the incoming cookies and `console.log` them?
    - How would you `get` the value associated with `wdi`?
    - What datatype is it? Can you prove it?

#### Challenge 2: Destroy a Cookie - [solutions](solutions.md)
* Remove the `"wdi"` cookie from the HTTP Response Header whenever you hit `/sad_cookie`. See [res.clearCookie](http://expressjs.com/api.html#res.clearCookie).

#### Challenge 3: Visit Counter - [solutions](solutions.md)
Let's see if we can `count` the number of times someone has come to the site, using a cookie. First, set a cookie. Then, update the cookie each time you visit "/", incrementing the number by 1.


## Sessions

#### Challenge 1: Take a look at the following code line by line:

var express = require('express');
var bodyParser = require('body-parser'); 
var expressSession = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

var app = express();

// must use cookieParser before expressSession
app.use(cookieParser());

app.use(expressSession({secret:'somesecrettokenhere'}));

app.use(bodyParser());

app.get('/', function(req, res){
  var html = '<form action="/" method="post">' +
             'Your name: <input type="text" name="userName"><br>' +
             '<button type="submit">Submit</button>' +
             '</form>';
  if (req.session.userName) {
    html += '<br>Your username from your session is: ' + req.session.userName;
  }
  res.send(html);
});

app.post('/', function(req, res){
  req.session.userName = req.body.userName;
  res.redirect('/');
});

app.listen(80);

#### Challenge 2: Comment each line of to explain what it is doing. - [Solution](solutions.md)

