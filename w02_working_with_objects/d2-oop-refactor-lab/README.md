# OOP Refactor Lab

| Objectives |
| :--- |
| DRY up your code by creating reusable constructor functions |
| Demonstrate algorithmic problem solving by restructuring code step-by-step |

## What is Object-oriented Programming?

[**Object-oriented programming**](https://en.wikipedia.org/wiki/Object-oriented_programming) (OOP) is a programming paradigm based on the concept of "objects", which are data structures that contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

**OOP (abstract):**

```
A die that has sides and that you can roll.
```

**OOP (concrete):**

```js
function Die(sides) {
  this.sides = sides;
  this.currentSide = 0;

}

Die.prototype.roll = function() {
  this.currentSide = Math.floor((Math.random()*this.sides)+1);
  return this.currentSide;
}

var die = new Die(6);
var d20 = new Die(20);
```

#### Analogy:

Object-oriented programming is a way to store and manage data. OOP is a way to encapsulate data and behavior in a single place (generally a class or module). Think of it like creating a character in a game or when writing a story. What can they do? What attributes do they have? Instead of having to write a paragraph of explanation about a character every time you refer to them, you can just refer to that character's name.

```js
// Pile of JavaScript
$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    console.log("WAT")
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

>*" Refactoring
…is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.

Its heart is a series of small behavior preserving transformations. Each transformation (called a “refactoring”) does little, but a sequence of transformations can produce a significant restructuring. Since each refactoring is small, it’s less likely to go wrong. The system is kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring." - Martin Fowler, [Refactoring](http://refactoring.com/)*

> *"Code is never finished, only abandoned." - paraphase of [Paul Valéry](https://en.wikiquote.org/wiki/Paul_Val%C3%A9ry)*

> *"It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove." - Antoine de Saint Exupéry*

#### Benefits of Using Object-oriented Programming

* **Encapsulation** - Keeping code for the same purpose in the same place makes finding it and updating it easier.

* **Code Reuse** - "Don't Repeat Yourself" is a principle of coding - keep your programs **DRY**! Reusing code makes it easier to change how your program works, since you only have to make updates in one place. If you find yourself writing the same code two or more times, a good rule of thumb is to move it into a function / object!

##Anatomy of a object (class)

The **parameters** are what you declare as being passed into the fuction in its definition, while *arguments* are what is actually passed into the function when called.

```
var iHaveParameters = function(firstParam, secondParam, heyImTheThirdParam) {
  //do something with the parameters
}
```

The **return statement** is what the function outputs; you only have one thing return from a function.

```
var functionThatReturns = function() {
  return true;  //simply returns true
}
```

The **function body** is everything inside the actual function.

```
var rockingBod = function() {
  //this is the body of the function
}
```

---

## Declaring a function

```js
greet();

function greet() {
  console.log("Hello, there!");
}

// prints "Hello, there!"
```

---

## Break Time

### 15 minutes

<img src="http://i.giphy.com/wsEX8uMrTRDoI.gif" style="width: 250px;">


---

## Scope

Understanding this concept is essential to a proper foundation of JavaScript. Scoping rules vary from language to language. JavaScript has two scopes: *global* & *local* scope.


Quite simply, a **scope** represents the area of your program where variable is defined. You can think of scope

As a rule: **A new function introduces a new scope**

---

##Scope Example

```
var cityBoy = "I'm global";

function smallTown() {
  var cityBoy = "I'm local";

  console.log ("local:", cityBoy);     
}

smallTown();          

console.log("global:", cityBoy);     
```

Question: What happens to a variable's scope if you forget to declare the variable by using the keyword `var`?

---


---

##Further Reading

Curious for more? Looking for more information? Check out these resources:

* [Article name](url) - Source
* [Article name](url) - Source
* [Article name](url) - Source

---

## Starter Challenges

1.

2.

3.
