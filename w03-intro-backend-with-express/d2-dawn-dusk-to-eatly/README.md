# All you can Eatly!
Building a single page todo-style application.

## Learning Objectives

* Synthesize the past few weeks worth of knowledge to build a single-page todo-style app
  * AJAX
  * Front-end Javascript
  * jQuery
  * Express
  * Restful routing

## Instructions

Fork & clone this [app](https://github.com/sf-wdi-22-23/toEatly)

Follow the instructions of each of the sprints below. If/when you get stuck, checkout the solution. For example if I want to see the solution to sprint three I can: `git checkout branch sprint-three`.

## Sprint One: Set the table

* Render your `index.html` page on `/`

* Start your server on port 3000

[Reference lesson](https://github.com/sf-wdi-21/notes/blob/master/week-03/day-01-bootstrap-orm/dawn-bootstrap/readme.md)

## Sprint Two: Fast food

* Create a foods API GET route that serves up all your food data as JSON. Put it at `/api/foods`

* In your client javascript, create a function called `getFoods()` that uses AJAX to GET the food data.

* Log the response in the browser's console.

[Reference lesson](https://github.com/sf-wdi-21/notes/tree/master/week-02/day-02-forms+AJAX/dusk-ajax)

## Sprint Three: Where's the beef?

* Create an empty `ul` with the id `#food-ul` to display your foods data in.

* Create a function called `renderFoods()` that gets called from the `getFoods` callback. `renderFoods()` should append the foods data to your page. Append the data as an `li` and display both the food's `name` and `yumminess`.

* On page load call the `getFoods()` function.

[Reference lesson](https://github.com/sf-wdi-21/notes/blob/master/week-02/day-03-jquery-templating/html-templating/readme.md)

## Sprint Four: Serve up a new dish

* Create a form in `index.html` so you can add a new food to your list!

* In your server's `index.js` file, create a POST route that will accept this new food item and add it to the list. Make sure to add a unique `id` to the new food.

* Set an event listener on your new form so that on submit the default action is prevented and an ajax post request is sent with the form's data.
  * Use `serialize` to format the data in the form
  * In the POST callback:
      * run the `getFoods()` function to get the new data
      * clear the form

[Reference lesson](https://github.com/sf-wdi-21/notes/tree/master/week-02/day-02-forms+AJAX/dawn-forms)

## Sprint Five: Set the table

* Create a function called `pageLoad` that does everything already being done when the page is loaded. Call it once when the page is loaded.

* Load the foods in reverse order so that the most recent one appears at the top.

* Beautify your page to take advantage of Bootstrap styling!

[Reference lesson](https://github.com/sf-wdi-21/notes/blob/master/week-03/day-01-bootstrap-orm/dawn-bootstrap/readme.md)

## Sprint Six: Clean up your mess

* Next to each food create a delete button that will send an ajax delete request
   * Use bootstrap's class `.close`
   * Use an `onclick` to trigger a `deleteFood()` function. Now pass in `this` (the context) into the function. "This" will be the button itself.
   * Using the context (this) that the `deleteFood` function has recieved, grab the id (remember it exists as a data attribute). Now you can formulate an ajax delete request.

* In the server's `index.js` file, create an API delete route that removes the item from the array.
  * Use the `where()` function we create this morning to find which food object to delete.
      * Put the `where()` function code in a file `/utils/where.js`
      * `require` the `where()` function in your server's `index.js` file like so `where = require("./utils/where")`
      * Tip: you need to `parseInt()` the `id` before using `where()`

* When a successful response (the item has been delete) is sent back to the client, get all the foods again and redraw the list.

[Reference lesson](https://github.com/sf-wdi-21/intro_express_live_code/blob/master/index.js) - deleting a food item is similar to how you'd show it, in that you have to have it's id as a parameter in the path `:id`

[Documentation](http://expressjs.com/api.html#app.delete.method) - Express' delete method
