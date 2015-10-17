# Auth in Express


| Learning Objectives |
| :---- |
| Implement a password **authentication** strategy in Express |
| Leverage a session to maintain logged-in state for users |
| Create routes for managing user sessions |

##Setup

###Background

This lesson assumes you have background knowledge from the [Storing Passwords w/ Bcrypt](https://github.com/sf-wdi-21/notes/blob/master/week-04/day-3-auth/readme.md) reading.

A solution to the following walk through is in the simple_login folder in this repo. 

###Our Tools

Today we will take advantage of:

* Express Framework: build our application and handle requests
* Express Middleware:
  * `body-parser`: handle incoming form data
  * `express-sessions`: manage user sessions
  * `mongoose`: act as an ORM for Mongo
  * `bcrypt`: hash passwords

###Pacing

See all branches in this repo with `git branch -a`. If you want to skip to another point in the exercise, checkout to another step with `git checkout <branch_name>`.

###Get Started

Fork & Clone [this repo](https://github.com/sf-wdi-21/express_auth/tree/master).

##Step 1: App Setup (10m)

**Goal:** Create a boilerplate server.

Inside the project you'll find a black `index.js` file that we will use as our server. Let's get started on setting up our project.

Initialize npm (and press enter a bunch of times) to create your `package.json`

```bash
npm init
```

At the very least we need something like the following:

`index.js`

```js
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/signup", function (req, res) {
  res.send("Coming soon");
});

var listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});
```

The above won't run unless we install those dependencies, so let's go ahead and make sure we do that now.


Now let's try to install

```
npm install --save express body-parser
```

Run your `index.js` file using `nodemon`

##Step 2: Setup Mongo (10m)

**Goal:** Write a `UserSchema` and define a `User` model.

In the project, create a new directory for `models` and create a file for your `User` model.

```bash
mkdir models
touch models/index.js
touch models/user.js
```

Install `mongoose` for our Mongo ORM and `bcrypt` to help hash our passwords.

```bash
$ npm install --save mongoose bcrypt
```

Let's write some logic to connect to our database and bring in our user model to our `models/index.js`.


`models/index.js`

```javascript
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/express_auth");
module.exports.User = require("./user");
```

In `models/user.js`, require `mongoose` and `bcrypt`.

`models/user.js`

```javascript
// dependencies
var mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt');
```

Also write the `UserSchema`. Users should have the properties **email**, **passwordDigest**, and **createdAt**.

`models/user.js`

```javascript
// the user schema
var UserSchema = new Schema({
  email: {type: String, required: true},
  passwordDigest: {type: String, required: true},
  createdAt: {type: Date, default: Date.now()}
});
```

Finally create and export a mongoose model to be required it in other parts of our application.

`models/user.js`

```javascript
// define user model
var User = mongoose.model('User', UserSchema);
// export user model
module.exports = User;
```

##Step 3: User Model Methods

Earlier we [played with Bcrypt](https://github.com/sf-wdi-21/notes/blob/master/week-04/day-3-auth/readme.md#bcrypt) to discover how we could help signup a user by generating a secure password or signin a user by comparing the password digest with the hashed version of the provided password. We're going to take that logic and *encapsulate* it into our User model's methods.

Remember `statics` are methods that will be accessible on the `db.User` model, while `methods` are accessible on an instance of the user model, aka a `new db.User()`.

There are four methods we're adding to our model below. This saves us from writing logic in our the functions our routes execute, also known as **controllers** and rather *abstract* it to our **model**. It is best to have fat models and skinny controllers (more logic in the model). The four models we are writing are as follows (note `::` indicates a method on the constructor, while `#` indicates a method on all instances):

* **`User.createSecure(email, password, cb)`**: used create a new user with a password digest (signup).
* **`User.authenticate(email, password, cb)`**: used to hash a provided password with a specific user's existing password digest. It relies partly on the `checkPassword` method below. (signin).
* **`user.checkPassword(password)`**: used to check if a user's password is correct.

`models/user.js`

```javascript
// require dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

// create user schema
var UserSchema = new Schema({
  email: {type: String, required: true},
  passwordDigest: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

// create a new user with secure (hashed) password (for sign up)
UserSchema.statics.createSecure = function (email, password, cb) {
  // `_this` now references our schema
  var _this = this;
  // generate some salt
  bcrypt.genSalt(function (err, salt) {
    // hash the password with the salt
    bcrypt.hash(password, salt, function (err, hash) {
      // build the user object
      var user = {
        email: email,
        passwordDigest: hash
      };
      // create a new user in the db with hashed password and execute the callback when done
      _this.create(user, cb);
    });
  });
};

// authenticate user (for login)
UserSchema.statics.authenticate = function (email, password, cb) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, user) {
    // throw error if can't find user
    if (user === null) {
      cb("Can\'t find user with that email", null);
    // if found user, check if password is correct
    } else if (user.checkPassword(password)) {
      // the user is found & password is correct, so execute callback
      // pass no error, just the user to the callback
      cb(null, user);
    } else {
      // user found, but password incorrect
      cb("password incorrect", user)
    }
  });
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password to compare with stored `passwordDigest`
  // `compareSync` is like `compare` but synchronous
  // returns true or false
  return bcrypt.compareSync(password, this.passwordDigest);
};

// define user model
var User = mongoose.model('User', UserSchema);

// export user model
module.exports = User;
```

###Creating a user

In node try creating a new User with a password digest generated for you:

```javascript
var db = require('./models');
db.User.createSecure("alice@ga.co", "foobarbazz", function(err, user){
  console.log("success!", user);
});
```

##Step 4: Signup Route

Let's add our models to our app.

`index.js`

```javascript
var express = require('express'),
    bodyParser = require('body-parser'),
    db = require("./models"),
    app = express();
```

Let's add a `POST /users` route to accept user signup requests.

```javascript
// where the user submits the sign-up form
app.post(["/users", "/signup"], function signup(req, res) {
  // grab the user from the params
  var user = req.body.user;
  // pull out their email & password
  var email = user.email;
  var password = user.password;
  // create the new user
  db.User.createSecure(email, password, function() {
    res.send(email + " is registered!\n");
  });
});
```

Let's test our `signup` route by sending it a post request using the `curl` command from our terminal. First start you server and then in a seperate terminal window run:

```bash
curl --data "user[email]=alice@ga.co&user[password]=foobarbazz" localhost:3000/signup
```

##Step 5: Login Route

Similarly to signup, let's add a route to login.

`index.js`

```javascript
// where the user submits the login form
app.post(["/sessions", "/login"], function login(req, res) {
  var user = req.body.user;
  var email = user.email;
  var password = user.password;
  db.User.authenticate(email, password, function (err, user) {
    res.send(email + " is logged in\n");
  });
});
```

Then test the route:

```bash
curl --data "user[email]=alice@ga.co&user[password]=foobarbazz" localhost:3000/login
```

##Step 6: Sessions

As you may [remember](https://github.com/sf-wdi-21/notes/blob/master/week-04/day-2-cookies-sessions/README.md#sessions), sessions help us store information about a user's current login state on the server side that is referred to by a `session-id`, placed in a cookie (session-cookie) passed to the client and returned back to the server with every request.

To add sessions into our app we can use the `express-session` middleware.

```bash
npm install --save express-session
```

Let's make a session:

`index.js`

```javascript
var express = require('express'),
    bodyParser = require('body-parser'),
    db = require("./models"),
    session = require("express-session"),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

// create our session
app.use(
  session({
    secret: 'super-secret-private-keyyy',
    resave: false,
    saveUninitialized: true
  })
);
```

Now hit your routes to see if they have a `set-cookie` header

```
curl --data "user[email]=bob@ga.co&user[password]=bazzbarfoo" -i localhost:3000/signup
curl --data "user[email]=bob@ga.co&user[password]=bazzbarfoo" -i localhost:3000/login
```

To login a user we'll need to populate their `req.session` object with their `userId`. Setting the `userId` helps us identify which user we are dealing with. As we'll be using certain functionality in our app a lot, we can extend the `req` object to abstract it away from us. Let's create three new methods for the `req` object:

* `req.login(user)`: to login a user
* `req.currentUser()`: to return the user that is logged in
* `req.logout()`: to logout the current user.


```javascript
// extending the `req` object to help manage sessions
app.use(function (req, res, next) {
  // login a user
  req.login = function (user) {
    req.session.userId = user._id;
  };
  // find the current user
  req.currentUser = function (cb) {
    db.User.
      findOne({ _id: req.session.userId },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };
  // logout the current user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }
  // call the next middleware in the stack
  next();
});
```

We can refactor our `/login` route to take advantage of the `req.login(user)` method and then redirect to their profile.

`index.js`

```javascript
// where the user submits the login form
app.post(["/sessions", "/login"], function login(req, res) {
  var user = req.body.user;
  var email = user.email;
  var password = user.password;
  db.User.authenticate(email, password, function (err, user) {
    // login the user
    req.login(user);
    // redirect to user profile
    res.redirect("/profile");
  });
});
```

Finally, we can add a `/profile` route that our `/login` route redirects to and take advantage of the `req.currentUser()` method:

```javascript
// show the current user
app.get("/profile", function userShow(req, res) {
  req.currentUser(function (err, user) {
    res.send("Hello " + user.email);
  })
});
```

##Step 7: Adding Views

### Adding Views

First let's  `mkdir` for views

### Adding a Login Path


We need a `GET /login` view and route by requiring `path` and creating a path to our views.


`index.js`

```javascript
var express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./models'),
    session = require('express-session'),
    path = require('path'),
    app = express();

// views path
var views = path.join(process.cwd(), "views");

app.get("/login", function (req, res) {
  res.sendFile(path.join(views, "login.html"));
});

```

Then create the login view:


`views/login.html`

```html
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <h1>Login</h1>
  <form method="post" action="/login">
    <div>
      <input type="text" name="user[email]">
    </div>
    <div>
      <input type="password" name="user[password]">
    </div>
    <button>Login</button>
  </form>
</body>
</html>
```


CONGRATS! You've just hand-rolled a login system!


## Moar Exercises ^_^

1. Add a `GET /signup` route and view to create a new user
2. When a user signs up also log them in and redirect them to the `/profile` page.
3. Create a route `GET /logout` that uses the `req.logout` middleware to destroy the session. Add a link on your site that logs out the user. (bonus for using a delete request, which is shown in the branch `step_10`).
4. The `req.currentUser` middleware finds the user who is currently logged in. Use `req.currentUser` to **authorize** parts of your site.
    * Logged-in users should NOT be able to see the /signup or /login pages.
    * Users should only be able to see /profile when logged in.

    *Hint: You'll need to add some logic when calling req.currentUser to check if a logged-in user was found. You'll want to use res.redirect if a user tries to perform an unauthorized action.*
