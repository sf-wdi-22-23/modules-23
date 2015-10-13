## Exercises

### Base Challenges - Build an Express App

**Check Install**

1. You should have Node.js and NPM installed from installfest. Run the Terminal commands `which node` and `which npm` to check that they are installed. If they are installed, you will see a file path after each command, like `/usr/local/bin/node`.

1. **Only if you do not have node and npm installed**: 
  Install Node & NPM   
  * Standalone installer: [https://nodejs.org/download/](https://nodejs.org/download/)   
  * Homebrew: [http://blog.teamtreehouse.com/install-node-js-npm-mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)  
    1. To install Homebrew:

        ```bash
          ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        ```

    2. To install Node.js: `brew install node`


**Initialize a Node.js Project with Express**

1. Make a directory called `simple-express`. From inside your `simple-express` directory, enter the Terminal command `npm init`. It asks a series of questions about your project and uses the information to create a `package.json` file for you. For now, we'll use all of the defaults except "entry point". Type in `server.js` for your entry point, and then you can just hit enter until `npm init` is done.  

1. Add express to the local project using `npm`. Use the `save` option so that NPM automatically adds express to your dependencies in `package.json`.

  ```bash
  npm install express --save
  ```

**Express Hello World!**

1. Create a `server.js` file and add this basic hello world code:

  ```js
    // server.js
    // SERVER SIDE JAVASCRIPT
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

  > **Hint**: Reference the documentation linked in the README.  
  > **Hint**: `process.env.PORT || 3000` means "in production use the production port, otherwise use 3000 (for development)".

1. Run `node server.js` in the Terminal, and visit `http://localhost:3000/` in your browser. You should see "Hello World!"   

1. Console log the `req` (request) and the `res` (response) objects inside your server code's `app.get` method for the `/` path. (The `/` path is often called the "root" path.) Restart the server and briefly check out what the `req` and `res` are.


**Add Server-Side HTML Templating**

All of the files and data for a website usually live on its server(s) and are sent to clients when they request it.  So, even files like HTML and CSS that are only front end related have to get to our users through our server.

We could just send along a lot of static files -- and we'll look at how to do that with Express a little later today. In that case, we'd make a separate jQuery AJAX request for any of our data we wanted to display.

For HTML, though, we're going to take advantage of something called server-side templating.  Server-side HTML templating basically lets us put data into an HTML file before the server sends it over to the client. The template is like a version of an HTML file with blanks, and we let a server-side "view engine" know how to fill them in with the server's data.


1. Install the templating system `ejs` for this project using the Terminal:

  ```bash
     npm install ejs --save
  ```

1. Create a new folder `views` with a file `index.ejs` inside. The `index.ejs` file will be our template, and ejs will translate it into HTML before sending it to clients. Our `index.ejs` can look exactly like an HMTL file.  For now, it should just say `<h1>General Assembly Rocks!</h1>` (or a custom message of your choice).

1. Set the project's view engine to ejs. This lets express know what module should render the template (i.e., fill in the blanks). 

  ```js
    // server.js
    // ...
    app.set('view engine', 'ejs');
  ```

1. Change the `app.get` route to render the template file instead of just sending back a string.

  > **Hint**: The method you'll need to use is [`res.render`](http://expressjs.com/api.html#res.render). 

1. Visit `http://localhost:3000/` in your browser. You should see "General Assembly Rocks!"

  > **Hint**: Remember to stop and restart your server from the Terminal to view any changes. Hit `control + c` to stop your server, and run `node server.js` again to restart it.
  
1. If our `index.ejs` is just plain HTML, we're not taking advantage of templating.  Add the following header to your `index.ejs` jumbotron:

  ```html
  <h1><%= name %> is awesome!</h1>
  ```

1. Restart your server and refresh your page. What do you see?

1. EJS uses `<%` ... `%>` to figure out what to interpret as a template. The areas where a template has blanks that need to be filled in with some data are inside `<%=` and `%>`.  So, `<%= name %>` makes ejs think there should be some `name` data available for it to use to fill in this blank.  Let's get some name data set up. In your server.js file, define a `myName` variable and assign your name to it as a string.

1. The `myName` variable is holding on to your name data on the server.  Now, we need to let ejs know to use that variable to fill in the `name` blank. To have this data show up on the page, we'll need to pass it to the render method. Update the `app.get` method for the `/` path:

  ```js
    // server.js
    app.get('/', function (req, res) {
      res.render('index', { name: myName });
    });
  ```
  
  Note that `name` is what the template looks for to fill the blank, and `myName` is the name of the variable storing that data. 

**Add Some Data on the Server**

Now that we see how ejs uses simple data to fill in blanks, let's do something a little more complex -- ejs using JavaScript logic to loop over a list of data.

1. Add some starter data  (often called "seed data") to serve when the users view '/'. (They're not technically all paintings, but that's okay.)


  ```js
    // server.js
    var paintings = [
      { title: 'Ladies d\'Avignon', artist: 'Pabolo Picasso', imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d\'Avignon.jpg" },
      { title: 'Rothko Chapel', artist: 'Mark Rothko', imgUrl: "http://forums.ssrc.org/ndsp/wp-content/blogs.dir/23/files/2014/07/Rothko_Chapel_2.jpg" },
      { title: 'The Kiss', artist: 'Gustav Klimt', imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"}
      ]
  ```

1.  To have this data show up on the page, we'll need to pass it to the render method. Update the `app.get` method for `/` again so it can also render the `paintings` data with the ejs template. 

  > **Hint**: Add a key-value pair to the object we're already passing to the `render` method.

1. We also need to put a blank in our html template where the data will be filled in. 

  ```html
  <!-- index.ejs -->
  <ul>
    <% for(var i=0; i<paintings.length; i++) { %>
      <li>
        <%= paintings[i].title %>
      </li>
    <% } %>
  </ul>
  ```

1. Restart your server and refresh the page. You should see a list of artwork titles.

1. Modify the basic template above so that the artist name is also shown with the title of each painting.  

1. Modify the template so that the painting images are displayed as well.

  > **Hint**: Use `<img src="">`.

**Add Static Files (CSS, JS, Images)**

1. Make a directory in your project called `public` and add to it `styles.css`, `scripts.js`, and a directory called `images`. These files are called static files.

1. Set up the express app to serve the static files (actually, the whole public directory.)

  ```js
    // server.js
    app.use(express.static('public'));
  ```

1. Add your scripts and styles files to the `<head>` of your index.ejs

1. Get a 'console.log("I live to serve")' from your `scripts.js` to appear in your browser dev tools console.

1. Get a custom style to work on your index.ejs page.

**Send Just JSON Data (with No Template)**

So far, we've been using server-side HTML templating with ejs to put the painting data directly into our HTML before we send it.  Now, we'll add an API route that sends back raw JSON data instead of a filled-in HTML page.

We're making a weird app. Paintings and taquerias.  Treat your senses.  

1. Add some taqueria seed data to your server file.

  ```js
    // server.js
    var taquerias = [
      { name: "La Taqueria" },
      { name: "El Farolito" },
      { name: "Taqueria Cancun" }
    ]
  ```

1. Add a route to your server side javascript that clients can use to get taqueria data.  The route's path should be `/api/taquerias`.  Instead of `res.send` (for simple strings) or `res.render` (for HTML templates), this route will use `res.json`.


  ```
    app.get('/api/taquerias', function (req, res) {
      res.json(taquerias);
    });
  ```

1. Navigate to http://localhost:3000/api/taquerias (remember to restart your server first!) and check that the data is showing up. 

![Zoidberg hooray gif](http://31.media.tumblr.com/tumblr_l9y7wqbkag1qzjefho1_500.gif#hooray%20gif%20483x500)

### Stretch Challenges

1. In your `scripts.js` file, write a jQuery ajax request to get the taqueria data. When the response comes back, display all the taqueria names above the paintings on your site's root page (localhost:3000/).  

  > **Hint**: `$.get('/api/taquerias', function(data){// your code here});`


1. Add a `vendor` folder to your project. The `vendor` folder is traditionally used for third-party (external) library code.  Download Bootstrap's CSS and JavaScript files and add them to the `vendor` folder. Can you include Bootstrap in your project from this location instead of the CDN? What is the benefit of having a separate `vendor` folder for external front-end libraries?

  > **Hint**: Remember to serve the static vendor files to make them available to your front end.

  ```js
    // server.js
    app.use(express.static('vendor'));
  ```

1. Add an image to your `public/images` folder and display it in `index.ejs`. Note: this is where Ganesh is coming from in the solutions. 

<!-- 1. Add a post method to `/api/taquerias` and push a new taqueria into the array.

1. Add a post method to `/api/paintings` and push a new painting into the array. -->
