# Sample Work Plan

It's hard to know how to approach a project of this size when you've only been working with some of these tools for a few days.  

<img src="http://3.bp.blogspot.com/_Eiwce13X738/TRIoYJgWTUI/AAAAAAAAJEk/PGOtRyA304k/s1600/How_to_Draw_Owl.jpg" alt="two steps to draw an owl - draw a circle, draw the rest of the owl">

This sample work plan is intended to help you get started without going into every detail.

##Start the server.

Reference Lesson: <a href="https://github.com/sf-wdi-22-23/modules/tree/master/w03-intro-backend-with-express/d1-dawn-express-hello-world" target="_blank">Express Hello World</a>

1. Make a new directory and initialize your app inside it with `npm init`. Give it the entry point `server.js`. 

1. Use `npm install --save` to add express, ejs, body-parser, and mongoose.

1. Create your server file from the Terminal (`touch server.js`). At the top of your server.js file, require the express and body-parser modules to get started.  Use `express()` to create your `app` object.

1. At the bottom of your server.js file, use `app.listen` to set up your server to listen on a port. We usually use port 3000.

1. Run `node server.js`, `npm start`, or `nodemon` in the Terminal to start your server. If you gave `app.listen` a callback with a log message, you should see the log message in your Terminal. 

3. Go to localhost:3000/ to see another message that lets you know your server is listening (but a bit unhappy). In your server code, between the `require`s and the `app.listen`, start a section for routes!  Create a route to handle GET requests at the `/` path. Use a simple `res.send` to send a message that the route is working. Restart your server, reload the page, and you should see the message you sent as a response. Yay!

##Set up a git repo.

Reference: <a href="https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/" target="_blank">GitHub documentation</a>

1. In your Express project root directory, from the Terminal, run `git init`.  

2. On your GitHub account, create a new repo for this project. 

3. Copy the clone url from your new repository.

4. Back in your Terminal, run `git remote add origin YOUR_REPO'S_GITHUB_CLONE_URL`. Paste in your GitHub repo's clone url instead of `YOUR_REPO'S_GITHUB_CLONE_URL`.

1. Before you `git add .`, let's set it up so git will ignore our `node_modules` folder. Anyone who clones our project will be able to `npm install` to get all the dependencies installed just from our `package.json`, so there's no good reason to add all that to our repo.   In the Terminal, `touch .gitignore`.  Add a line to the `.gitignore` file that just says `node_modules`. (You can do this from the Terminal with `echo "node_modules" >> .gitignore`.)

5. Do our favorite sequence - `git add .`, `git commit -m "initial express server"`, and `git push origin master` to see that your code is up on GitHub. 

##Include your existing client-side code.

Reference Lesson: <a href="https://github.com/sf-wdi-22-23/modules/tree/master/w03-intro-backend-with-express/d1-dawn-express-hello-world" target="_blank">Express Hello World</a>

1. Create a folder called `views` in the root directory of your express app.  Make a copy of your `index.html` from Project 0, rename it `index.ejs`, and put it in the `views` folder. Use the `cp` command from the Terminal to copy the file. It might look a little like this: `cp ~/dev/proj-0/index.html  ./views/index.ejs`.  

1. In your server code, after your `require`s, start a section for config(uration)! Configure your app to use ejs as its view engine.

1. Update your app's `GET /` route to render index.ejs as its response. 

2. Create a folder called `public` in the root directory of your Express app.  Make copies of your `style.css` and `script.js` from Project 0, and put them in the `public` folder.

3. In your server code's config section, configure your app to serve the static assets from your `public` directory.

1. Restart your server and check out your page in the browser.

1. If you haven't yet, make a new git commit. Give it a descriptive commit message like `"include client-side microblog code"`.

Your client-side code should have a lot of the functionality requirements already, except that data isn't passed between the server and client.
    


##Modify the existing microblog code.

References: 
  * <a href="https://github.com/sf-wdi-22-23/modules/tree/master/w01-controlling-the-dom/d4_dusk_dom_events" target="_blank">DOM events lesson</a> for DOM events
  *  <a href="https://github.com/sf-wdi-22-23/modules/tree/master/w03-intro-backend-with-express/d1-dawn-express-hello-world" target="_blank">Express Hello World</a> for templating
  *  <a href="https://github.com/sf-wdi-22-23/modules/tree/master/w02-working-with-objects/d3-dusk-ajax" target="_blank">Giphy lab</a> and <a href="https://github.com/sf-wdi-22-23/modules/tree/master/w02-working-with-objects/d4-dusk-geoquakes" target="_blank">Geoquakes lab</a> for AJAX

4. In your client-side JavaScript, check that you have an event handler for the new post form.  Add one if needed.  Also add an event handler for the delete buttons, if needed. For the delete buttons, use event delegation. That is, add the event listener to the document itself and use a selector to filter down which dom elements trigger it (more info can be found in the <a href="http://api.jquery.com/on/#direct-and-delegated-events" target="_blank">jQuery `on` method documentation</a>).

1. Add a template to your `index.ejs` to display the posts. You can put it in a separate `ul` from any seed data you're currently displaying, if you'd like to keep the seed data around a little longer.

1. Add an AJAX request to each event handler. Your requests should use a RESTful route (HTTP verb + path). The request for your new post form should send along the data required. See some examples from <a href="http://api.jquery.com/jquery.ajax/#entry-examples" target="_blank"> the jQuery docs</a>.

1. The request for your delete buttons probably doesn't have an id to use yet, since the posts on the front end only microblog didn't need an id. Update your HTML template in `index.ejs` and any HTML strings that create new posts in your client-side JavaScript so that each post has its id stored with it in the HTML.

1. In the `success` method of your AJAX requests, just `console.log` the server's response for now.

1. If you haven't yet, make a new git commit. Give it a descriptive commit message.

##Add routes to the server.

Reference Reading: <a href="https://github.com/sf-wdi-22-23/modules/blob/master/w03-intro-backend-with-express/d1-homework.md" target="_blank"> RESTful routing</a>
 
1. Since your client-side event handlers are going to make AJAX requests, let's tell the server to expect those kinds of requests.  In the routes section of your server code, add skeletons for all of the RESTful routes listed in the requirements in the README. 

1. Don't fully fill in the function that says how the server should respond to each type of request, just start with a comment that says how the route *will* respond when you're done, and a `res.sendStatus(200)`. 

1. Make another new commit. 

##Move data to the database.

Reference Lesson: <a href="https://github.com/sf-wdi-22-23/modules/tree/master/w03-intro-backend-with-express/d4-dusk-mongoose" target="_blank">Mongoose</a>

1. Create a `models` directory in the root directory of your Express project. Inside the `models` directory, create an `index.js` file. The `index.js` file should require mongoose and connect to your app's mongoose db.

1. Create a `post.js` file in the `models` directory. Set up a schema and a model for posts. Set `post.js`'s `module.exports` to be the post model.

1. Modify `models/index.js` to have it incorporate your post model.  It will need to:
    - require your model from the other file
    - add your model to `index.js`'s `module.exports`

1. Optional: Create a `seed.js` file. Move the seed data array from your client-side javascript code into the seed.js file. The seed.js file should remove all posts from the database, then create all the posts from your seed data again. It will need to require your models: `var db = require("./models")`.

1. This seems like a great time for a commit.

##Connect database to server routes.

Reference: <a href="https://github.com/sf-wdi-22-23/toEatly_mongoose" target="_blank">toEatly-mongoose</a>

1. In your server code, with the other `require`s, add one to bring in your database models: `var db = require("./models")`. This should make your post model available with `db.Post`.

1. Update your `GET '/'` route to render `index.ejs` with the data from your database.  Make sure you have `mongod` running.  Test your route with Postman, then try to request it from the browser. If you still have seed data in your client-side JavaScript file, be sure to remove it now!

1. Once that's working, make a new commit! Give it a descriptive message like "render data in index.ejs" or "kick ejs's butt".

1. Fill in the `POST '/api/posts'` skeleton API route you created earlier. Test it with Postman. 

1. One by one, fill in the other skeleton routes you created. **Test each route with Postman** before you try to request it from your client.

1. Make another new commit if you haven't yet.

##Use server responses on the client!

Reference: <a href="https://github.com/sf-wdi-22-23/toEatly" target="_blank">toEatly</a>

At this point, the server should be sending the data you need, but if you're following the instructions in order, you're just logging those reponses to the console.

1. Modify the code in your new post form submit event handler so that it takes the server's response and uses it to add a new post to the page.

1. Reminder: make a new commit.

1. Modify the code in your delete button click event handler so that it deletes the post from the page once it successfully gets the server's response. 

1. Make a new commit. 

