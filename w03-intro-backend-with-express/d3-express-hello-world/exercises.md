## Exercises


### Basic Challenges - Build an Express App

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

    var server = app.listen(process.env.PORT || 3000, function () {
      console.log('Example app listening at http://localhost:3000/');
    });
  ```

1. Add a comment above each line of code saying what each line does.

  > **Hint**: `process.env.PORT || 3000` means "in production use the production port, otherwise use 3000 (for development)".

1. run `node server.js` and visit `http://localhost:3000/`. You should see "Hello World!"
1. Console log the req and the res object inside of the `app.get` method.

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

    app.get('/', function (req, res) {
      res.render('index', { paintings: paintings });
    });
  ```

  index.html

  ```ejs
  <ul>
    <% for(var i=0; i<paintings.length; i++) { %>
      <li>
        <%= paintings[i].title %>
      </li>
    <% } %>
  </ul>
  ```
1. Get the painting images and authors to display using `<img src""/>`?

**Add a Static Files (CSS, JS, Images)**
1. Make a directory in your project called `public` and add to it `styles.css`, `scripts.js`, and a directory called `images`. Then send these static files (css, js).

  ```js
    app.use(express.static('public'));
  ```
1. Add your scripts and styles files to the `<head>` of your index.ejs
1. Get a 'console.log("I live to serve")' from your `scripts.js` to appear in your console.
1. Get a custom style to work on your index.ejs page.

**Send Just JSON (with No Template)**

We're making a weird app. Paintings and taquerias.

1. Add a route to `/api/taquerias`.
  ```js
    var taquerias = [
      { name: "La Taqueria" },
      { name: "El Farolito" },
      { name: "Taqueria Cancun" }
    ]

    app.get('/api/taquerias', function (req, res) {
      res.json('index', taquerias);
    });
  ```
1. Navigate to http://localhost:3000/api/taquerias (remember to restart your server!)

![Zoidberg hooray gif](http://31.media.tumblr.com/tumblr_l9y7wqbkag1qzjefho1_500.gif#hooray%20gif%20483x500)

### Stretch Challenges

1. In your `scripts.js` file write a jQuery `$.get('/api/taquerias', function(data){})` request that gets the taquerias and displayes them in the index.ejs file `/`.
1. Add a `vendor` folder and download bootstrap css and js files and add them to the `vendor` folder. Can you include bootstrap in your project form there? What is the benefit of having a separate `vendor` folder for external front-end libraries?
  ```js
    app.use(express.static('vendor'));
  ```
1. Add an image to your `public/images` folder and display it in `index.ejs`
<!-- 1. Add a post method to `/api/taquerias` and push a new taqueria into the array
1. Add a post method to `/api/paintings` and push a new painting into the array -->
