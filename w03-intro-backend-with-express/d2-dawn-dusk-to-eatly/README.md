# All you can Eatly!
Building a single page todo-style application.

## Learning Objectives

* Synthesize the past few weeks worth of knowledge to build a single-page todo-style app
  * AJAX
  * Front-end Javascript
  * jQuery
  * Express
  * ejs
  * Restful routing

## Instructions

Fork & clone this [app](https://github.com/sf-wdi-22-23/toEatly)

Follow the instructions of each of the sprints below. If/when you get stuck, checkout the solution. For example if I want to see the solution to sprint three I can: `git checkout branch sprint-three`.

## Sprint One

Modify your server JavaScript code in `server.js`:

* Render your index page when a client makes a get request to the  `/` path.

* Create an API GET route to send back all food data. While we won't be using this route in this app, but it's a good idea to include it so that other clients can use your API.

Modify your `index.ejs`:

* Create a `ul` with the id `#food-ul` to display your foods data in.

* Create a template inside `#food-ul` that displays each food item as an `li`. Each food item's `li` should include both the food's `name` and its `yumminess`.

## Sprint Two

* Create a form in `index.ejs` so you can add a new food to your list. It should let the user input a food's name and yumminess.

* In your server file, create a POST `/api/foods` route that will accept requests from the form. The route should pull the form data from the request body, create a new food object, and add it to the server's list of foods. Make sure to add a unique `id` to the new food. Respond with the new food.

* In your client side JavaScript code, set an event listener on your new form so that on submit the default action is prevented and an ajax request is sent to your new server route with the form's data.
  * Add `name` attributes in the new food form hmtl to name the parts of the form data (if you don't have them already)   
  * Use `serialize()` to format the data from the form

* In your client side JavaScript code, create a `makeHTMLString` function that takes in a food data object (like from the server's array or the POST `/api/foods` response)  and returns a new HTML string that represents a list item for that food. (Hint: It should look similar to your template from `index.ejs`.)

* In your client side JavaScript code, once the POST to `/api/foods` has succeeded:
  * Using jQuery and your new `makeHTMLString` method from the last step, create a new jQuery `li` from the server's response
  * Prepend the new food to `#food-ul`
  * Clear the new food form's input fields with the native JavaScript `reset` method (you'll have to pull the base HTML element out of the jQuery to use native JavaScript on it)


## Sprint Three

* Modify the template in `index.ejs` to include a delete button next to each food item.
   * Give the button a `data-id` attribute with the id of the food 
   * Use bootstrap's class `.close` to style the button
 
* In your client side JavaScript code, create a `deleteFood` function that has a `context` parameter.  The context will be one of the delete buttons.  Your `deleteFood` function should:
  * Use the context that the `deleteFood` function has received to grab the food's id (remember it exists as a data attribute), aka `$(context).data().id`
  * Make an AJAX DELETE request to `/api/foods/:id` for the id of the food whose delete button was passed in as the context.
  * After the DELETE request succeeds, use jQuery to <a href="https://api.jquery.com/remove/" target="_blank"> `remove` </a> the deleted food's list item from the DOM. (Hint: it will probably be the <a href="https://api.jquery.com/closest/" target="_blank">`closest`</a> list item.)

* In your client side JavaScript code, add an event listener to the `document` that filters to events on one of your delete buttons.  
   * Use event delegation from the `document` object.  That is, use <a href="http://api.jquery.com/on/" target="_blank"> jQuery's `on` method</a> with three arguments -- the event type as usual, *a selector to filter the event targets*, and an event handler function as usual. 
   * The event handler should call the `deleteFood` function with `this` (the context) as its argument. `this` will be the button itself.

* In the server's `index.js` file, create a parameterized API delete route for `/api/foods/:id` that removes the food item with that id from the array.
  * Use the `where()` function we created this morning to find which food object to delete.
      * Put the `where()` function code in a new file: `/utils/where.js`
      * Export the where function from its file by adding `module.exports = where` at the bottom of your new `where.js`.
      * `require` the `where` function in your server's `index.js` file, like so: `where = require("./utils/where")`
      * Tip: you need to `parseInt()` the `id` before using `where()`
  * Use `splice` to remove the item from the array.

[Documentation](http://expressjs.com/api.html#app.delete.method) - Express' delete method
