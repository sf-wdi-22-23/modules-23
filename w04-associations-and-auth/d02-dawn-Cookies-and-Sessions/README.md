# Cookies and Sessions

| Objectives |
| :--- |
| Review the request and response cycle and the stateless web. |
| Add, modify and delete cookies. |
| Use Express to add sessions to your application. |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Stateless web, cookies, sessions, authentication | Node, Express, cookie-parser, express-session | Challenges |

![cookiemonster](http://media0.giphy.com/media/EKUvB9uFnm2Xe/giphy.gif)

### Motivation (Why?)

Every HTTP request/response stands on its own. Because the request is the only context the client needs understand the response, the HTTP protocol is said to be *stateless*.

Sometimes we need state to persist across requests; this is where cookies and sessions come in. One example is a shopping cart. Without cookies or sessions, your shopping cart would be empty as soon as you navigated to the next page!

User authentication is another common example. When a user logs in, we'd like them to stay logged in until they log out or their session expires.

User/password combinations are a common way of authenticating. They are relatively insecure but provide sufficient security for most web applications. Thumb prints, driver's license, etc. are other ways we authenticate ourselves in the physical world.

### Analogy (What?)

Imagine you're in the habit of having deep conversations with a close friend every Sunday night. Every time you speak, you're able to pick up right where you left off. You're able to do this because you both have the context provided by previous conversations. The context you both share is analogous to a session.

Without sessions, each request/response is self contained. It would be as though you and your friend both had Alzheimer's.

## Reading and Writing Cookies -- Using cookie-parser

Cookies can be done without the cookie-parser module, just like requests can be done without body-parser! But it isn't as nice. We are going to just straight to cookie-parser. [Look here](no-cookie-parser.js) for an example of setting cookies without cookie-parser if you are curious. 

Cookie-parser will make it so you don't have to deal with string manipulation, and can just manipulate an object of key-value pairs. (We did the same thing with body-parser middleware).

First we have to install cookie-parser:

``` npm install --save cookie-parser ```
And now we just tell our app to use cookie-parser.

```js
var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

Altogether that looks like:

var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  console.log(req.cookie.message); // "hello"
  res.cookie("message", "hello again"); // overwrite
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("UP AND RUNNING");
});
```
HTTP Response Header

This sends a response that looks something like the following:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Set-Cookie: message=hello%20again
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-4a17b156"
Date: Mon, 18 May 2015 07:36:50 GMT
Connection: keep-alive

Hello World
```

The Cookie is then saved to the browser for localhost:3000. You can view it in the Chrome Developer Console under the "resources" tab. Try this.

Once the cookie is set in the browser, any subsequent request to the website automatically has the following line in the HTTP Request Header:

...
  ```cookie: 'message=hello',```
...

## Reading and Writing Cookies -- Client Side

It's also possible to manipulate cookies on the client-side.

From the Chrome Developer Console:

```js
document.cookie; // "message=hello"
```

You can write to this string simply by reassigning its value. Take care though that you don't overwrite anything important (and watch out for spaces and semi-colons)!

```js
document.cookie += "; magic_number=10;"
document.cookie; // "message=hello; magic_number=10;"
```

Try it out! Open your Console, and see what cookies are set in your browser. Try it out on a few different websites.

Can you:

- create a new cookie?
- overwrite an existing cookie?
- add a key-value pair to an existing cookie?
- log yourself out of a website by deleting your cookie (and refreshing the page)?

For more on this approach, take a look at [Quirksmode on Cookies](http://www.quirksmode.org/js/cookies.html).

## Sessions

Cookies are great, but they're limited in size, and they're hard to work with. If we want finer control, we want sessions!

Imagine for a moment that we have a fancy quiz-app and we used cookies to store user preferences and the current state of the quiz. Eventually the request header might look like:

```
host: quizful.ly
method: GET
cookie: wrong_answers=7; right_answer=3; current_question=11; GeoIP=US:CA:San_Francisco:37.7909:-122.4017:v4; last_access=31-Aug-2015;
```

Now imagine that, instead of storing all this data in the browser, the server kept it in a database. And every time someone visits the website for the first time, they're assigned a globally unique id, or guid.

```
host: quizful.ly
method: GET
cookie: guid=a134vbce34584ibjeapc38;
```

Now, instead of needing to read, parse, and manipulate all the data in the cookie, we can just find the user's session based on their guid.

#### Key Snippets

```js
//
// server.js
//

var session = require('express-session');

app.use(session({
  //this forces an unitialized session to be saved, uninitialized meaning new but not modified
  saveUninitialized: true,
  //this forces a session to be saved even if it is not modified
  resave: true,
  secret: 'OurSuperSecretCookieSecret',
  cookie: { maxAge: 60000 }
}));
```

With User Model

```js
//
// user.js
//

...

UserSchema.statics.authenticate = function (email, password, callback) {
  this.findOne({email: email}, function (err, user) {
    console.log(user);
    if (user === null) {
      callback('Can\'t find user with email ' + email, user);
    } else if (user.checkPassword(password)) {
      callback(null, user);
    }
  });
};

UserSchema.methods.checkPassword = function (password) {
  return password == this.password;
};
```

```js
app.post('/api/sessions', function (req, res) {
  User.authenticate(req.body.email, req.body.password, function(error, user) {
    if (error) {
      res.send(error)
    } else if (user) {
      req.session.user = user;
      res.redirect('/login');
    }
  });
});
```

## [Challenges](exercises.md)

### Docs & Resources

- [MDN document.cookie documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [Express API documentation for res.cookie](http://expressjs.com/api.html#res.cookie)
- [express-session README](https://github.com/expressjs/session)
