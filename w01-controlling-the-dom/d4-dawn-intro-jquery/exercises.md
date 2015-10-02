# jQuery and DOM Exercises

### Docs & Resources

* [Document Object Model docs (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/API/document)
* [Document Object Model docs (W3Schools)](http://www.w3schools.com/jsref/dom_obj_document.asp)
* [List of DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)

### Exercise 0: Traversing the DOM

1. Go to https://generalassemb.ly and open your Dev Tools. Use jQuery to select the `html` element and look at its children. What type of data structure is this collection of elements?
1. Select the `body` element and save it as a variable. Now you can use this variable to play with jQuery traversal methods.
1. Find the children of the header with a class of `welcome-text`.
1. Find the parent of first `<p>` tag.

### Exercise 1: Manipulating the DOM
1. Put some DOM elements in your `index.html`. Make sure they have classes and/or ids. Ex. (use Emmet!) `.test`, `ul.list>li.item`.
1. Manipulate one of these elements using `.append()`.
1. Manipulate a different element using `.css()`.
1. Use `.hide()` to make elements disappear. Inspect this element in dev tools. What is this method doing to the css?
1. Go to the [jQuery docs](http://api.jquery.com/) and pick 3 functions we haven't covered yet. Implement them in your app!

### Exercise 2: Make a ToDo List (Solution is in this folder)
Use the same project that you used for Exercise 1. Remember to use Bootstrap classes so that it looks nice!

1. Create 2 text input elements: one for the todo title, the other for description. *Hint: create a todo object in your js that has title and description attribute.*
1. Add a submit button. *Hint: giving your element an id or class will make it easier to select with jQuery*
1. Add an event listener to the submit button that triggers a function that appends the input text to the page when the button is clicked. *Hint:* use `.val()` to get text from the input.
1. Discuss with a partner: What arguments does the callback need to take, and why?
1. Add an event listener to the element you are appending so that it gets crossed out when clicked. *Hint: use a CSS class for this*
1. After appending the new todo, clear the input fields. *Hint:* `.reset()`

### Stretch Exercises
1. Change your callback to append a HTML string containing the input text and a delete button.
1. Make your delete button work! Add an event listener to handle delete buttons being clicked.
1. Revise your function that appends text to empty the text box with each submit.
