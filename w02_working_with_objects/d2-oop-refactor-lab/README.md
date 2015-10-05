# OOP Refactor Lab

| Objectives |
| :--- |
| DRY up your code by creating reusable constructor functions |
| Demonstrate algorithmic problem solving by restructuring code step-by-step |

## What are functions?

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

Refactoring is like revising a novel – it's already written, and now you get to make improvements. Maybe there's a character or scene that isn't necessary, so you cut it. Maybe the protagonist isn't likeable enough, or the theme or moral doesn't impact the reader as much as you'd hoped. It's a process of iteration that one comes back to again and again.

```js

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

The **parameters** are what you delare as being passed into the fuction in its definition, while *arguments* are what is actually passed into the function when called.

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

##Declaring a function

```js
greet();

function greet() {
  console.log("Hello, there!");
}

// prints "Hello, there!"
```

---

##Break Time

###15 minutes

<img src="http://i.giphy.com/wsEX8uMrTRDoI.gif" style="width: 250px;">


---

##Scope

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

##Callbacks

A **callback** is a function that is passed into another function. A function that can take a callback is known as a **first-class function**.

```
var consoleMe = function(message) {
  console.log("I'm the callback, now displaying message...");
  console.log(message);
}
var firstClassFunction = function(message, callback) {
  console.log("I'm the first class function, now calling the callback...");
  callback(message);
}
firstClassFunction("AYO!", consoleMe);
```

Question: Consider the JS function `sort`, is it a firstclass function?

---

##Further Reading

We discuss these concepts at a later date. They are related, but more advanced. So have a solid understanding of these topics before you move on.

* [The 'this' keyword](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/) - JavaScriptIsSexy Blog
* [The Call Stack](https://www.youtube.com/watch?t=1310&v=8aGhZQkoFbQ) - A video with a great explanation and visual representation of the Call Stack
* [Variable Hoisting](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/#hoisting) – Sitepoint article
* [Closures](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work#answer-111200) – Stack Overflow post
* [Recursion](http://www.codecademy.com/courses/javascript-lesson-205/0/1) — Code Academy lesson

---

##Starter Challenges

1. Write a 'sayHello' function that logs 'Hello' to the console.

2. Rewrite 'sayHello' to accept a name as a parameter, and logs 'Hello' + the name to the console.

3. Write a `multiply` function that finds the product of two numbers.

  ```js
  multiply(5, 7) => 35
  ```
3. Write a 'negative' function that takes an integer, and if that integer is positive, it turns it into a negative integer and returns that integer.
