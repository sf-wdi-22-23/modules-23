# OOP Refactor Lab

| Objectives |
| :--- |
| Create reusable constructor functions to DRY up code |
| Restructure code step-by-step |

## What is Object-oriented Programming?

[**Object-oriented programming**](https://en.wikipedia.org/wiki/Object-oriented_programming) (OOP) is a programming paradigm based on the concept of "objects", which are data structures that contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.  

Object-oriented programming is a way to store and manage data. OOP lets us encapsulate data and behavior in a single place (generally a class or module). 

### Analogy

Think of it like creating a character in a game or when writing a story. What can they do? What attributes do they have? Using objects in JS groups details together similarly -- instead of having to write a paragraph of explanation about a character every time you refer to them, you can just refer to that character's name.  

When we use constructors and prototypes to define an object type, we take it one step further. That's like creating a race of characters. Instead of explaining every time we meet an elf that the character is a tall, slender humanoid with pointy ears, we can just say "an elf."  

![elves from some Lord of the Rings film](http://usercontent1.hubimg.com/2383594.jpg)

### Benefits of Using Object-oriented Programming

* **Encapsulation** - Keeping code for the same purpose in the same place makes finding it and updating it easier.

* **Code Reuse** - "Don't Repeat Yourself" is a principle of coding - keep your programs **DRY**! Reusing code makes it easier to change how your program works, since you only have to make updates in one place. If you find yourself writing the same code two or more times, a good rule of thumb is to move it into a function / object!

### Example

####Non-OOP - without objects  

```js
var petNames = ["FlufferNutter", "Mr. Bubbles"];
var petSpecies = ["gerbil", "fish"];

petNames.push("Morocco");
petSpecies.push("dog");

function describe(name, species){
  console.log(name + " is a " + species + ".");
}

describe(petNames[2], petSpecies[2]);
// ^ logs "Morocco is a dog."
```

####Non-OOP - with objects

```js
var pets = [
            {name: "FlufferNutter", species: "gerbil"}, 
            {name: "Mr. Bubbles", species:"fish"}
            ];

var morocco = {name: "Morocco", species: "dog"};
pets.push(morocco);

function describe(pet){
  console.log(pet["name"] + " is a " + pet["species"] + ".");
}

describe(pets[2]);
// ^ logs "Morocco is a dog."
```

####OOP - constructor only

```js
function Pet(name, species){
  this.name = name;
  this.species = species;
  this.describe = function(){
    console.log(this.name + " is a " + this.species + ".");
  }
}

var morocco = new Pet("Morocco", "dog");
morocco.describe();
// ^ logs "Morocco is a dog."
```

####OOP - with prototype

Features on the prototype are shared, so 


```js
function Pet(name, species){
  this.name = name;
  this.species = species;
}
Pet.prototype.describe = function(){
    console.log(this.name + " is a " + this.species + ".");
}

var morocco = new Pet("Morocco", "dog");
morocco.describe();
// ^ logs "Morocco is a dog."
```

**Non-OOP **

```js
var board = [ ["", "", ""], [""], [""], [""] ];

var currentPlayer = "X"

var makeMove = function(currentPlayer) {
  if (currentPlayer === "X") {
    // logic determining how to edit board based on clicked square
    gameWon();
    currentPlayer = "O"
    makeMove(currentPlayer);
  } else {
    // logic determining how to edit board based on clicked square
    gameWon();
    currentPlayer = "X"
    makeMove(currentPlayer);
  }
}

var checkBoard = function(board) {
  // logic to check board
  // return "X" / "O" or "neither"
};

var gameWon = function(playerName) {
  if (checkBoard() === "neither") {
    return false;
  } else {
    return "Player " + playerName + " wins!";
  }
};
```

**OOP (abstract):**

```
A button that has two states: clicked and not clicked, as well as a function that fires when clicked.
```

**OOP (concrete):**

```html
<button id="my-button">Click Me</button>
```

```js
// button.js
function Button() {
  // variable inside closure scope of Button constructor function
  // not accessible outside of the function
  var buttonState = "not clicked";

  this.handleClick = function() {
    if (buttonState === "not clicked") {
      buttonState = "clicked";
      // clicked is a class that changes the button's CSS
      $(this).addClass("clicked");
      $(this).text("Unclick me!");
    } else if (buttonState === "clicked") {
      buttonState = "not clicked";
      // clicked is a class that changes the button's CSS
      $(this).removeClass("clicked");
      $(this).text("Click me!");
    }
  }
};


$(document).ready(function() {
  // when the document is ready
  // Make an instance of a Button
  var myButton = new Button();
  // and attach this event listener to the corresponding DOM element
  $('#my-button').on('click', myButton.handleClick);
  // passing the button's click handling function as a callback
});
```

```js
// Pile of JavaScript
$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    console.log("Button clicked");
    $('.dice').append('<div class="die">0</div>');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  });
});

// Object-oriented refactor
$(document).ready(function() {
  new DieController();
});

// Controller
// => Listens for clicks
// => Tell View to render
// => Tell Model to roll die
// => Tell Model to add die
function DieController() {
  this.model = new DieModel();
  // this.model refers to object being created & can use methods of DieModel
  this.view = new DieView();
  // this.view refers to the object being created & can use methods of DieView
  this.listenAddDie();
  this.listenRollDice();
}

DieController.prototype.addDie = function() {
  this.model.addDie();
  this.view.renderDie();
};

DieController.prototype.rollDice = function() {
  this.model.rollDice();
  this.view.updateDice(this.model.diceArray);
};

DieController.prototype.listenAddDie = function() {
  $('#roller button.add').on('click', this.addDie.bind(this));
};

DieController.prototype.listenRollDice = function() {
  $('#roller button.roll').on('click', this.rollDice.bind(this));
};


// Model ////////////////////////////
// => store current value of each die
// => store collection of dice
function DieModel() {
  this.diceArray = [];
}

DieModel.prototype.addDie = function() {
  this.diceArray.push(new Die());
};

DieModel.prototype.rollDice = function() {
  for (var i = 0; i < this.diceArray.length; i++) {
    console.log("in roll dice loop");
    this.diceArray[i].roll();
  }
};
// each Die object stores value of its current side
function Die() {
  this.currentSide = 0;
}

Die.prototype.roll = function() {
  this.currentSide = Math.floor((Math.random()*6)+1);
};

// View /////////////////////////////////////
function DieView() {
}
// => Render Board (based on info controller provides from model)
DieView.prototype.renderDie = function() {
  $('.dice').append('<div class="die"> 0 </div>');
};

DieView.prototype.updateDice = function(data) {
  for (var i = 0; i < data.length; i++) {
  console.log('in updateDice loop');
     $('.die')[i].innerHTML = data[i].currentSide;
     console.log(data[i].currentSide);
  }
};
```

## Why refactor?

"If it ain't broke, don't fix it" doesn't apply to software development. Sloppy or confusing code will cause not only you, but your teammates, coworkers, and possibly customers, headaches down the road. Programming is about managing complexity, and allowing difficult to read or inefficient code to stay in the code base is like letting dishes pile up in the sink.

>*" Refactoring
…is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.

Its heart is a series of small behavior preserving transformations. Each transformation (called a “refactoring”) does little, but a sequence of transformations can produce a significant restructuring. Since each refactoring is small, it’s less likely to go wrong. The system is kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring." - Martin Fowler, [Refactoring](http://refactoring.com/)*

> *"Code is never finished, only abandoned." - paraphase of [Paul Valéry](https://en.wikiquote.org/wiki/Paul_Val%C3%A9ry)*

> *"It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove." - Antoine de Saint Exupéry*

---

## Break Time

### 10 minutes

<img src="http://i.giphy.com/wsEX8uMrTRDoI.gif" style="width: 250px;">
