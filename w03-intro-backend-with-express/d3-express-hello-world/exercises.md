## Exercises

**Install and Initialize**

1. Install Node & NPM
  * Standalone installer: [https://nodejs.org/download/](https://nodejs.org/download/)
  * Homebrew: [http://blog.teamtreehouse.com/install-node-js-npm-mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
    1. Install Homebrew:

        ```bash
          ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        ```

    2. Install node: `brew install node`
1. Make a directory called `simple-express` and call `npm init` and accept all defaults by just hitting enter until `npm init` is done.
1. Add express to the local project using `npm`

  ```bash
  npm install express --save
  ```

**Express Hello World!**
1. create a `server.js` file and add this basic hello world code:

  ```js
    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    var server = app.listen(3000, function () {
      console.log('Example app listening at localhost:3000');
    });
  ```

1. Add a comment above each line of code saying what each line does.
1. run `node server.js` and visit `http://localhost:3000/`. You should see "Hello World!"

**Add a Template Engine - EJS**
1. Install `ejs` with npm

  ```bash
     npm install ejs --save
  ```
1. Add a folder `views` with a file `index.ejs` inside. `index.ejs` should say `<h1>General Assembly Rocks!</h1>`

1. Set view engine to ejs
  ```js
    app.set('view engine', 'ejs');
  ```
1. Visit `http://localhost:3000/`. You should see "General Assembly Rocks!"

> **Hint**: Remember to stop and restart your server by hitting `control + c` to stop your server and run `node server.js` again to restart it.

**Add Some Data**

1. Add some static data to serve when the users view '/'.

  server.js
  ```js
    var paintings = [
      { title: 'Ladies d\'Avignon', artist: 'Pabolo Picasso', imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d\'Avignon.jpg" },
      { title: 'Rothko Chapel', artist: 'Mark Rothko', imgUrl: "http://forums.ssrc.org/ndsp/wp-content/blogs.dir/23/files/2014/07/Rothko_Chapel_2.jpg" },
      { title: 'The Kiss', artist: 'Gustav Klimt', imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"}
    ]

    res.render('index', paintings);
  ```

  index.html

  ```ejs
  <% for(var i=0; i<paintings.length; i++) { %>
    <li>
      <%= paintings[i].title %>
    </li>
  <% } %>
  ```
1. Get the painting images to display using `<img src""/>`?
1.
**Add a Static Files (CSS, JS, Images)**
1. Make a directory in your project called `public` and add to it `styles.css`, `scripts.js`, and a directory called `images`. Then send these static files (css, js).

  ```js
    app.use(express.static('public'));
  ```
1. Add your scripts and styles files to the `<head>` of your index.ejs
1.

**Add a Template Engine - EJS**

### Docs & Resources

1. [Starting an Express Project](http://expressjs.com/starter/installing.html)
2. [Express Hello World](http://expressjs.com/starter/hello-world.html)
3. [Express Basic Routing](http://expressjs.com/starter/basic-routing.html)
4. [Express Static Files](http://expressjs.com/starter/static-files.html)
5. [Express res.render()](http://expressjs.com/4x/api.html#res.render)

### Basic Challenges

4. Make a route to ```/hello/:name``` that returns "Hello NAME_FROM_URL".
  * Hint:
  ```
  app.get("/my_name_is/:name", function (req, res) {
      res.send( "My name is " + req.params.name );
  });
  ```
5. Give your server another route to ```/api/users``` and return an array of two users with names and ages. (hint: use ```res.json()```)
6. Give your server another route to ```/api/books``` and return an array of three books with titles.
7. Use a clone of a jQuery, Underscore, Bootstrap project you've already done to query and display your ```/api/books``` endpoint. (hint: use ```$.get('localhost:3000/api/books', function(data) {})```)
8. Do [this heroku deployment tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). The tutorial will provide you with a starter node project to push to heroku.
9. Now do what you did in the tutorial for your ```my-first-server``` project.
  * Start with ```git init``` (don't worry about putting a remote repo in github, we'll just push to heroku).
  * Skip the ```Prepare the App``` step - we're gonna use your app!
  * Do the ```Define a Procfile``` step before the ```Deploy the App``` step.
  * Make sure you're setting the port properly in the ```app.listen``` function before deploying:
  ```
  var server = app.listen(process.env.PORT || 3000, function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log('Example app listening at http://%s:%s', host, port);
  });
  ```
10. Now, point your jQuery, Underscore, Bootstrap project from your local url ```localhost:XXXX``` to your public heroku url ```YOUR_APP.herokuapp.com```.


##Homework

For homework we'll continue to work on the challenges above.

**Important notes:**
* Skip challenges 7 and 10.
* Heroku tutorial is only required up to the Push Local Changes step, no need to go farther.
* Focus on challenge 9, deploying your `my_first_server` app on heroku.

Submit the heroku url for your `my_first_server` app in [the homework submission form](https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform). If you didn't get the `my_first_server` app up and running on heroku, please tell us how far you got in the submission form comments section.

##Hooray

You've made your first server, and it's serving up a cool books/users API, and it's live on the web!

![Zoidberg hooray gif](http://31.media.tumblr.com/tumblr_l9y7wqbkag1qzjefho1_500.gif#hooray%20gif%20483x500)
