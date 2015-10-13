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

* Render your `index.html` page on `/`

* Send foods data with your `index.html`

* Create a `ul` with the id `#food-ul` to display your foods data in.

* Create a template inside `#food-ul` that displays each food item as an `li` with both the food's `name` and `yumminess`.

## Sprint Two

* Create a form in `index.html` so you can add a new food to your list.

* In your server file, create a POST route that will accept this new food item and add it to the list. Make sure to add a unique `id` to the new food. Respond with the new food.

* Set an event listener on your new form so that on submit the default action is prevented and an ajax post request is sent with the form's data.
  * Use `serialize()` to format the data in the form
  * In the POST callback:
      * prepend the new food (using the response from the server) to `#food-ul`
      * clear the form

## Sprint Three

* Modify the template in `index.ejs` to include a delete button next to each food item
   * Give the button a `data-id` with the id of the food
   * Use bootstrap's class `.close`
   * Use an `onclick` to trigger a `deleteFood()` function. Now pass in `this` (the context) into the function. `this` will be the button itself.
   * Using the context (this) that the `deleteFood` function has received, grab the id (remember it exists as a data attribute) aka `$(context).data().id`

* In the server's `index.js` file, create an API delete route that removes the item from the array.
  * Use the `where()` function we create this morning to find which food object to delete.
      * Put the `where()` function code in a file `/utils/where.js`
      * `require` the `where()` function in your server's `index.js` file like so `where = require("./utils/where")`
      * Tip: you need to `parseInt()` the `id` before using `where()`

* When a successful response (the item has been delete) is sent back to the client, `.remove()` that item from the client view.

[Documentation](http://expressjs.com/api.html#app.delete.method) - Express' delete method
