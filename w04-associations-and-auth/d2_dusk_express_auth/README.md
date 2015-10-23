# Authentication with Express & Bcrypt

| Objectives |
| :--- |
| Implement a password **authentication** strategy with bcrypt |
| Save a logged-in user's data to the session |
| Implement routes for a user to login and logout |

## Authentication & Authorization

* **Authentication** verifies that a user is who they say they are. When a user logs into our site, we *authenticate* them by checking that the password they typed in matches the password we have stored for them.
* **Authorization** is the process of determining whether or not a user has *permission* to perform certain actions on our site. For example, a user may *be authorized* to view their profile page and edit their own blog posts, but not to edit another user's blog posts.

## Why do we hash (and salt) passwords?

In order to authenticate a user, we need to store their password in our database. This allows us to check that the user typed in the correct password when logging into our site.

The downside is that if anyone ever got access to our database, they would also have access to all of our users' login information. We use a <a href="https://crackstation.net/hashing-security.htm#normalhashing" target="_blank">hashing algorithm</a> to avoid storing plain-text passwords in the database. We also use a <a href="https://crackstation.net/hashing-security.htm#salt" target="_blank">salt</a> to randomize the hashing algorithm, providing extra security against potential attacks.

![](http://memeshare.net/memes/1/604.png)

## Implementing Authentication

To give users the ability to sign up and log in to our site, we'll need:

* **Express:** for building our application and handling requests
* **Middleware:**
  * `body-parser`: for handling incoming form data
  * `express-session`: for setting sessions and cookies
* **Mongoose Models:** for CRUD-ing users and setting up authentication methods
* <a href="https://github.com/ncb000gt/node.bcrypt.js" target="_blank">**bcrypt:**</a> for hashing users' passwords


###Here's the plan

* Signup
  * Make a signup form
  * Submit email and password to a server route
  * Save a new user with a secure password

* Login
  * Make a login form
  * Submit email and password to a server route
  * Check that user's email exists in database
  * Authenticate that the password is correct for that user
  * Save that user's data in a session on our server
 
* Logout
  * Delete any saved user data in our session


## 1. Create a new Node/Express project.

1. In the terminal, initialize a new Node project, and install `express` and `body-parser`.

  ```
  $ mkdir simple-login
  $ cd simple-login
  $ touch server.js
  $ npm init
  $ npm install --save express body-parser mongoose ejs
  ```

2. Open your project in Sublime, and set up your server in `server.js` with the following code snippet:

  ```js
  // server.js

  // require express framework and additional modules
  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

  // middleware
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({extended: true}));
  mongoose.connect('mongodb://localhost/simple-login');


  // signup route with placeholder response
  app.get('/signup', function (req, res) {
    res.send('signup coming soon');
  });

  // login route with placeholder response
  app.get('/login', function (req, res) {
    res.send('login coming soon');
  });

  // listen on port 3000
  app.listen(3000, function () {
    console.log('server started on locahost:3000');
  });
  ```

3. In the terminal, run `nodemon` and make sure your server starts without any errors. If you get an error in your Terminal, read the line number and error message. Most likely, you're trying to use an undefined variable or a module that's not installed. Visit `/login` and `/signup` in your browser to make GET requests to those paths. Verify that those routes are sending back the messages you expect.

  ```
  $ nodemon
  ```

  **Note:** Keep `nodemon` running the entire time you're developing your application. When you need to execute other terminal commands, press `command + T` to open a new terminal tab.


## 2. Set up a signup view and route

1. In the terminal, make a `views` directory, a view called `signup.ejs`, and a view called `login.ejs`.

  ```
  $ mkdir views
  $ touch views/signup.ejs
  $ touch views/login.ejs
  ```

1. Add this boilerplate to `signup.ejs`.  Spend a minute looking over it. What is the id of the signup form? What are the `name`s of its input fields?  What external CSS and/or JS are linked to the file?  Find any places where ejs is filling in template data.

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <title>Simple Login</title>
  </head>
  <body>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Sign Up</h1>
          <hr>
          <form id="signup-form">
            <div class="form-group">
              <input type="text" name="email" class="form-control" placeholder="Email" autofocus>
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="submit" value="Sign Up" class="btn btn-primary">
            </div>
            <a href="/login">Login</a>
          </form>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```

3. Now that the signup view is ready, it's time for a signup route. In `server.js`, set up `GET /signup` to render the `signup` view.

  ```js
  // server.js

  // signup route (renders signup view)
  app.get('/signup', function (req, res) {
    res.render('signup');
  });
  ```

4. Test that you can go to `localhost:3000/signup` and see your template rendered on the page.


## 3. Submit your signup form to the server

1. We've already told Express to serve a public folder with `app.use(express.static('/public'))`, so make a `public` folder and inside make a `scripts.js` file. Then link it with a `<script>` tag in your `signup.ejs`. Log something to the console to make sure they're connected.

1. Set a submit listener on your signup form and use `$.post()` or `$.ajax()` to post the form data to `POST /signup`. (Consider using the `serialize()` method to quickly make a data string to send to the server. The serialized string will represent a data object: its keys will match the "name" attributes of your html form's inputs, and the each value in the object will be the value of the input field.)  Since the form is a DOM element, wrap your request in `$(document).ready(function(){ ... });`

  ```js
  
  // scripts.js
  
  // part of your code for this step:
    // select the form and serialize its data
    var signupData = $("#signup-form").serialize();
    console.log(signupData);
    // send POST request to /users with the form data
    $.post('/users', signupData, function(response){
      console.log(response);
    })
  ```

1. In your server, create a `post` route to `/signup` that will handle signing up the user.

  ```js
  // server.js

  // A create user route - creates a new user with a secure password
  app.post('/users', function (req, res) {
    console.log('request body: ', req.body);
    res.json("it worked!");
  });
  ```

1. Try to submit the signup form. You should see the form's data logged in your server's and browser's console.



## 4. Create a User model and more secure signup method with `bycrpt`

1. In the terminal, create a new directory for `models` and create a file for your `User` model.

  ```
  $ mkdir models
  $ touch models/user.js
  ```

2. Also in the terminal, install `bcrypt`. Use `--save` to put it into your package.json's dependencies at the same time.

  ```
  $ npm install --save bcrypt
  ```

3. In Sublime, open `user.js` and require the dependencies your user schema and model will need, `mongoose` and `bcrypt`. 

  ```js
  // user.js

  // require dependencies
  var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

  // set up shorthand method name
  var Schema = mongoose.Schema;
  ```

4. Also in `user.js`, write your `userSchema`. For our simple example, users should have the properties **email** and **passwordDigest**.

  ```js
  // user.js

  // define user schema
  var userSchema = new Schema({
    email: String,
    passwordDigest: String
  });
  ```

5. Continuing in `user.js`, define a new, more secure create method for our `User` model that stores a hashed and salted version of the user's password instead of their exact password. 

   **Note:** We use `userSchema.statics` to define <a href="http://mongoosejs.com/docs/guide#statics" target="_blank">static methods</a> for our schema, ones that we'll call from the model (like `User.createSecure`).  The other option, `userSchema.methods`, defines <a href="http://mongoosejs.com/docs/guide#methods" target="_blank">instance methods</a> for our schema, which we could call from an individual instance of a user (like `princessPeach.checkPassword`). Static methods can hold any functionality related to the collection, while instance methods define functionality related to individual documents in the collection. You can think of instance methods like prototype methods in OOP!

  ```js
  // user.js

  // create a new user with secure (hashed) password
  userSchema.statics.createSecure = function (email, password, callback) {
    // `this` references our schema
    // store it in variable `user` because `this` changes context in nested callbacks

    var user = this;

    // hash password user enters at sign up
    bcrypt.genSalt(function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        console.log(hash);

        // create the new user (save to db) with hashed password
        user.create({
          email: email,
          passwordDigest: hash
        }, callback);
      });
    });
  };
  ```
  
  **NOTE:** `bcrypt`'s `genSalt` or `genSaltSync` function provides the salt we'll use to randomize the hashing algorithm. The `Sync` at the end of the second method name says we want it to run synchronously. It will complete before the code moves on, so we don't need to give it a callback to say what to do when it finishes.

6. Continuing in `user.js`, define a `User` model using your `userSchema` and export the model (so we can require it in other parts of our application).

  ```js
  // user.js

  // define user model
  var User = mongoose.model('User', userSchema);

  // export user model
  module.exports = User;
  ```
  
  
  **Note:** Make sure all your static and instance methods come before defining and exporting the `User` model. Setting and exporting the `User` model should be the last pieces of logic in `user.js`, since they both rely on the version of the schema that exists when they're called. If you forget,  authentication methods might not get added to the model and exported.


7. Don't forget to require your `User` model in `server.js`.

  ```js
  // server.js
      var User = require('./models/user');
  ```

8. In your `POST /users` route, use your new `createSecure` model method to create a user in your database with a secure password.

  ```js
  // Sign up route - creates a new user with a secure password
  app.post('/users', function (req, res) {
    // use the email and password to authenticate here
    User.createSecure(req.body.email, req.body.password, function (err, user) {
      res.json(user);
    });
  });
  ```

9. Submit your signup form. Did your route return the `user` object? Is the version it returned from your database? How can you check?



## 5. Logging In

1. Flesh out your `login` view template (boilerplate below).

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="scripts.js"></script>

    <title>Simple Login</title>
  </head>
  <body>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Log In</h1>
          <hr>

          <form id="login-form">
            <div class="form-group">
              <input type="text" name="email" class="form-control" placeholder="Email" autofocus>
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="submit" value="Log In" class="btn btn-primary">
            </div>
            <a href="/signup">Sign Up</a>
          </form>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```
  
1. Create a `GET /login` route on your server that renders the login view.

1. Add an "on submit" listener in your `scripts.js` file for the login form. When the login form is submitted, use `$.ajax` or `$.post` to send a request to a `/sessions` path with the user's login data.  As with signup, you can use `serialize()` to package and format the login data to send to the server.  We aren't storing our session data in the database, but we're using this route because the mechanics of logging in will require us to update the session.

  
1. We already have a `POST /sessions` route set up in the server, and it has the form data -- but it just sends back a message right now. To log a user in, we'll need to do more than that:

    * look the user up in the database with the email from the form
    * if a user is found, compare that user's passwordDigest with the password from the form
    * if the passwords match, save the user's data in our session
    * redirect somewhere - they should see site content, not json, as a response
    
    We'll split these tasks between the main server code and the user schema.
  
1. Add a method to the user schema that checks whether a plain text password (like from a form) "matches" the passwordDigest stored in a specific user's database document. It will need to use bcrypt to `compare` or `compareSync` (synchronously compare) the two forms of the password.   We'll call this method once we have a specific user from the database, so put it on `userSchema.methods`.

  ```js
  // models/user.js
  
  // compare password user enters with hashed password (`passwordDigest`)
  userSchema.methods.checkPassword = function (password) {
    // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
    return bcrypt.compareSync(password, this.passwordDigest);
  };
  
  ```
  
1. Add another method that does full authentication based on an email and a password. It will also take a callback, so when our server uses the `authenticate` method, the server code can specifiy what should happen next. This method will be called from the `User` model, since it will be looking up a user instance, not starting with one. It has to be added on `userSchema.statics`.

   ```js
   
   // models/user.js
   
   // authenticate user (when user logs in)
   userSchema.statics.authenticate = function (email, password, callback) {
     // find user by email entered at log in
     this.findOne({email: email}, function (err, foundUser) {
       console.log(foundUser);
 
       // throw error if can't find user
       if (!foundUser) {
         console.log('No user with email ' + email);
         callback("Error: no user found", null);  // better error structures are available, but a string is good enough for now
       // if we found a user, check if password is correct
       } else if (foundUser.checkPassword(password)) {
         callback(null, foundUser);
       } else {
         callback("Error: incorrect password", null);
       }
     });
   };
 
 ```


1. In `server.js`, update your `POST /sessions` route to authenticate a user.

  ```js
  // server.js

  // authenticate the user 
  app.post('/sessions', function (req, res) {
    // call authenticate function to check if password user entered is correct
    User.authenticate(req.body.email, req.body.password, function (err, user) {
      res.json(user);
    });
  });
  ```

1. Try to login with the credentials of the first user you created. Do you get the response you expected?


## 6. Set up sessions and cookies to keep track of logged-in users.

1. In the Terminal, install `express-session`.

  ```
  $ npm install --save express-session
  ```

2. In `server.js`, require `express-session` and set the session options. <a href="https://github.com/expressjs/session#options" target="_blank">Read more about the session options.</a>

  ```js
  // server.js
  var session = require('express-session');

  // middleware (new addition)
  // set session options
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'SuperSecretCookie',
    cookie: { maxAge: 30 * 60 * 1000 } // 30 minute cookie lifespan (in milliseconds)
  }));
  ```

1. Now that the session is defined, let's start keeping data in a session when someone signs up or logs in by setting `req.session.userId` to the user's id. This would go just before the `res` line of your `POST /sessions` route.

  ```js
      req.session.userId = user._id;
  ```

1. After authenticating a user, and loggin them in, we don't want to just send back JSON or a message. They should see site content.  Create a simple profile view.  You could call the view template file `profile.ejs` or `user-show.ejs`. There's boilerplate below. Take a minute to look it over - notice where it's using ejs templating.

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="scripts.js"></script>

    <title>Simple Login</title>
  </head>
  <body>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Profile</h1>
          <hr>
          <h2>Welcome! You're logged in as <%= user.email %>.</h2>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```

2. Create a route to render this profile view at `GET` `/profile`.

  ```js
  // server.js

  // show user profile page
  app.get('/profile', function (req, res) {
    // find the user currently logged in
    User.findOne({_id: req.session.userId}, function (err, currentUser) {
      res.render('user-show.ejs', {user: currentUser})
    });
  });
  ```

1. Modify the `POST /sessions` route to redirect to the user's profile page using `res.redirect('/profile');` instead of its current response. 

1. Test the effect of your modification in the browser. What do you see on the page and in the console?

1. It turns out AJAX doesn't play well with redirects. They're changing your browser in two fundamentally different ways. The AJAX requests we've been making in our client-side JavaScript were helpful for debugging as we set everything up, but now that we want to redirect, we need to move back to non-AJAX requests.

1. Update your `login.ejs` so that the form has a `method` and `action`. Remove the AJAX call for the login form from your scripts.js.  Test your login form again.


1. We don't want new users to get a JSON or message response when they sign up, either. In fact, we probably want to log them in automatically. Modify the `POST /users` route to save a new user's id in the session and then redirect to the profile. Also modify your signup form to use `method` and `action`.

## 7. Enable logout

1. On the profile view, add a logout link.


  ```html
  <!-- profile.ejs -->
  <h1>Profile</h1>
  <hr>
  <h2>Welcome! You're logged in as <%= user.email %>.</h2>
  <a id="logout" href="/logout" class="btn btn-default">Log Out</a>
  ```

1. Make a `GET /logout` route on your server that logs out a user by setting the  `req.session.userId` to `null`, then redirects to the login page.

  ```js

  //server.js
  app.get('/logout', function (req, res) {
    // remove the session user id
    req.session.userId = null;
    // redirect to login (for now)
    res.redirect('/login');
  });
  ```

## 8. Error Handling

Things don't always go right, and we need our apps to respond nicely when they don't. Here are some strategies.

1. Upon login, if a password is not correct, respond with an error message and display it on the client. Remember to use the bootstrap `.alert` and `.alert-warning` classes.
1. Upon login, if a user is not found, respond with an error message and display it on the client.
1. Upon signup, make sure passwords are at least 6 characters long. Return and display an error if this is false.
1. Is there a way to refactor your client- or server-side code to generalize these two examples of error handling?


## Custom Middleware Refactor (Stretch)

1. Let's refactor our lookup of the current user into some custom middleware to find the current user so we will always have it available.

  ```js
    // server.js
    // custom middleware - should go before routes
    // adds a currentUser method to the request (req) that can find the user currently logged in based on the request's `session.userId`
    app.use('/', function (req, res, next) {    
      req.currentUser = function (callback) {
        User.findOne({_id: req.session.userId}, function (err, user) {
          if (!user) { 
            callback("No User Found", null) 
          } else {
            req.user = user;
            callback(null, user);
          }
        });
      };

      next();
    });
  ```

1. Modify your logout route so that it also sets `req.user` to `null`.

5. The `req.currentUser` middleware finds the user who is currently logged in. You can use `req.currentUser` to *authorize* parts of your site.
  * Logged-in users should NOT be able to see the `/signup` or `/login` pages.
  * Users should only be able to see `/profile` when logged in.

  **Hint:** You'll need to add some logic when calling `req.currentUser` to check if a logged-in user was found. You'll want to use `res.redirect` if a user tries to perform an unauthorized action.


