# Reblog - Microblog API Weekend Lab

**Objective:** Build an API for your Microblog app using Node.js, Express, and MongoDB.

Last week, you learned how to call APIs with AJAX. This week, you built your first API with Node and Express, and you stored data in a database! This weekend, you'll be:
  * Creating an API for blog posts with Node and Express
  * Storing post data in a Mongo database
  * Hooking up your microblog's client-side code to your Express project
  * Requesting data from your blog post API with AJAX

You'll also be reading about modeling data relationships in Mongoose to prepare for next week, so save some time for the <a href="mongo-relationships.md" target="_blank">pre-reading</a>! 

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
1. App data stored in the database.

## Client-Side Requirements

1. A form to create a new blog post. You'll need:
  * A jQuery event-handler on the form
  * An AJAX call to `POST` the data to your API
  * jQuery and HTML strings to render the newly created post in the view
4. Buttons to delete each individual blog post. You'll need:
  * jQuery event-handlers on the buttons
  * An AJAX call to `DELETE` the data from your server
  * jQuery to remove the deleted blog post from the view

## Submission

1. Your lab work must be tracked in a git repository.
1. Push your local lab work up to a repostiory on your GitHub account.  
1. Don't forget to do the <a href="mongo-relationships.md" target="_blank">pre-reading</a> to prep for Monday!
7. Answer a few questions and submit the link to your finished lab on GitHub in <a href="https://docs.google.com/forms/d/1r8kZSa76l6yEYY9u2fha3snBBtpmLjaTUmrpNBkGr9g/viewform" target="_blank">this homework submission form</a>.

## Sample Work Plan

A <a href="work-plan.md" target="_blank">sample work plan</a> is available if you're looking for an idea of how to proceed.

## Stretch Ideas

1. **Client Side: Post Update Forms**
  While a route to update an individual post is required, actually using them from the client side is a stretch. You'll need:
  * a jQuery event-handler for the forms
  * an AJAX call to `PATCH` the updated post data to your API
  * jQuery and HTML strings to replace the current blog post with the updated version from the server's response

1. **Both Sides: Single Post View**
  It's nice to see all the posts at once, but why not make another view for just one post at a time? You'll need:
  * a wireframe/sketch for your single post view idea
  * an `ejs` file for the single post view
  * a parameterized route on your server that renders the single post
  * links for users to go from the all posts view in `index.ejs` to the view for one of your posts

## Docs & Resources 

* All lessons from this week, and last week's material on APIs.
* <a href="http://expressjs.com/api.html#app" target="_blank">Express App Docs</a>
* <a href="https://github.com/sf-wdi-22-23/toEatly_mongoose" target="_blank">toEat.ly</a> (This is a great example of the type of client-server interaction you'll be building. DO NOT copy any of this code unless you understand exactly what it's doing. You've been warned.)

