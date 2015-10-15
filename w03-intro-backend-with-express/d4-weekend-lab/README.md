# Reblog - Microblog API Weekend Lab

**Objective:** Build an API for your Microblog app using Node.js, Express, and MongoDB.

Last week, you learned how to call APIs with AJAX. This week, you built your first API with Node and Express, and you stored data in a database! This weekend, you'll be:
  * Creating an API for blog posts with Node and Express
  * Storing post data in a Mongo database
  * Hooking up your microblog's client-side code to your Express project
  * Requesting data from your blog post API with AJAX

## Server-Side Requirements

### View routes

1. A route to show an index page view.
1. Ejs templating to show post data in the index.



### API routes

1. A route to read all blog posts: `GET /api/posts`
2. A route to read one blog post: `GET /api/posts/:id`
3. A route to create a new blog post: `POST /api/posts`
4. A route to update a single blog post: `PUT /api/posts/:id`
5. A route to delete a single blog post: `DELETE /api/posts/:id`

### Database

1. A connection to a Mongo database.
1. A schema and a model for a post.

## Client-Side Requirements

1. A form to create a new blog post. You'll need:
  * A jQuery event-handler on the form
  * An AJAX call to `POST` the data to your API
  * jQuery and HTML strings to render the newly created post in the view
4. Buttons to delete each individual blog post. You'll need:
  * jQuery event-handlers on the buttons
  * An AJAX call to `DELETE` the data from your server
  * jQuery to remove the deleted blog post from the view
1. Forms for editing each individual blog post. You'll need:
  * jQuery event-handlers on the forms
  * An AJAX call to `PATCH` the new post data to your API
  * jQuery and HTML strings to replace the current blog post with the updated version


## How to Get Started

**Start your server**

1. Make a new directory and initialize your app with `npm init`. Give it the entry point `server.js`. 

1. Use `npm install --save` to add express, ejs, body-parser, and mongoose.

1. At the top of your server.js file, require the modules you've added.  Use `express()` to create your `app` object.

1. At the bottom of your server.js file, use `app.listen` to set up your server to listen on a port. We usually use port 3000.

1. Run `node server.js`, `npm start`, or `nodemon` in the Terminal to start your server. Go to localhost:3000/ to see a message that lets you know your server is listening.

1. In your server code, between the `require`s and the `app.listen`, start a section for routes!  Create a route to handle GET requests at the `/` path. Use a simple `res.send` to test that the route is working.

**Include your client-side code.**

1. Create a folder called `views` in the root directory of your express app.  Make a copy of your `index.html` from Project 0, rename it `index.ejs`, and put it in the `views` folder.

1. In your server code, after your `requrie`s, start a section for config! Configure your app to use ejs as its view engine.

1. Update your app's `GET /` route to render  index.ejs as its response. 

2. Create a folder called `public` in the root directory of your Express app.  Make copies of your `style.css` and `script.js` from Project 0, and put them in the `public` folder.

3. In your server code's config section, configure your app to serve the static assets from your `public` directory.

1. Restart your server and check out your page in the browser.

4. Check that you have an event handler for the new post form.  Add one if needed.  Also add an event handler for the delete buttons, if needed. 

    Your client-side code should have a lot of the functionality requirements already, except that data isn't passed between the server and client.

1. Add an AJAX request to each event handler. Your requests should use a RESTful route (HTTP verb + path) and send along any data required.

1. In the `success` method of your AJAX requests, just `console.log` the server's response for now.

**Add routes to server.**
 
1. Since your client-side event handlers are going to make AJAX requests, let's tell the server to expect those kinds of requests.  In the routes section of your server code, add skeletons for all of the RESTful routes listed above. 

1. Don't fully fill in the function that says how the server should respond to each type of request, just start with a comment that says how the route *will* respond when you're done, and a `res.sendStatus(200)`. 

1. Fill in the parts of your client code that.


**Move data to the database**

1. Create a `models` directory in the root directory of your Express project. Inside the `models` directory, create an `index.js` file. The `index.js` file should require mongoose and connect to your app's mongoose db.

1. Create a `post.js` file in the `models` directory. Set up a schema and a model for posts. Set `post.js`'s `module.exports` to be the post model.

1. Modify `models/index.js` to have it incorporate your post model.  It will need to:
    - require your model from the other file
    - add your model to `index.js`'s `module.exports`

1. Optional: Create a `seed.js` file. Move the seed data array from your client-side javascript code into the seed.js file. The seed.js file should remove all posts from the database, then create all the posts from your seed data again. It will need to require your models: `var db = require("./models")`.

**Connect database to server routes**

1. In your server code, with the other requires, add one to bring in your database models: `var db = require("./models")`. This should make your post model available with `db.Post`. 



**Test all your routes via Postman** before trying to request them from your client.

6. Submit the link to your finished project on GitHub in the <a href="https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform" target="_blank">homework submission form</a>.

## Bonus (@TODO)

## Docs & Resources (@TODO)

* <a href="http://expressjs.com/api.html#app" target="_blank">Express App Docs</a>
* <a href="https://github.com/sf-wdi-19-20/modules/blob/master/how_tos/express_project_setup.md" target="_blank">How to Set Up an Express Project</a>
* <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w3_d3_2_update_and_delete" target="_blank">Updating and Deleting Data</a>
* <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w2_d2_1_underscore_templating" target="_blank">Underscore Templating</a>
* <a href="https://github.com/sf-wdi-19-20/w3_catchphrasely" target="_blank">Catchphrasely</a> (This is a great example of the type of client-server interaction you'll be building. DO NOT copy any of this code unless you understand exactly what it's doing. You've been warned.)
