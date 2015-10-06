# OOP Refactor Exercises

1. Create a new `die-game` directory inside your `dev` directory. Copy the code from the `starter-code` directory into your new `die-game` directory.

**Goal: explore existing code**

1. Open `index.html` in your browser and see what the site does. 

1. Open `index.html` in Sublime. What JavaScript file(s) are linked to it?  What do they do?

1. Open `scripts.js` and read over it. It has four lines with comments that ask "What will the next line(s) do?"  Change `script.js` so those comments actually say what the next line(s) do.


**Goal: set up first object type**

Add your code to `scripts.js` below the original code. 

1. What kind of objects might be useful for this app?

1. One type of object we'll set up is Die. Create a constructor function for this object type. Give it a `currentSide` attribute to track which side should be showing.  

1. Without using a function parameter, set the value of every die's current side to initially be `1`.

1. Create a `roll` method for die. Add the method to the Die prototype.  The `roll` method should change the die's current side to a random side.  Hint: You can reuse a line from the original code.

1. Refresh your page in the browser. Create a new instance of Die in the console and test the `roll` method.

**Goal: create DieHandler object**

We'll control the entire "game" with a DieHandler object.

1. Create a constructor for the DieHandler object. It should have a `dice` attribute to store an array of all the die.

1. Add an `addDie` method to the die handler prototype.  It should add a new die to the dice handler's array, and it should add a new die to the page.  Hint: You can reuse a line from the original code. 

1. Add a `rollDice` method to the die handler prototype.  It should go through all the dice, roll each one, and change each number showing on the page to the side that is now showing.

1. Add an `addListeners` method to the die handler prototype. It should add an event listener to the Add dice! button that adds a die using `addDice`. It should also add an event listener to the Roll dice! button that rolls all the dice using `rollDice`.  Hint: Log `this` to the console frequently, and use JavaScript's bind method if you need to change the context for a function.