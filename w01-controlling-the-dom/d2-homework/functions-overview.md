#JavaScript Functions

| Objectives |
| :--- |
| Explain what a function is and why we should use functions |
| Create a function definition based on written specifications |
| Implement functions that incorporate conditionals, loops, and other function calls |
| Identify the scope where a variable is defined |

## What are functions?

A [**function**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) is a concrete implementation of an algorithm in a computer language. *It is a "subprogram" that encapsulates a specific behavior.*

**Algorithm (abstract):**

```
Take a number, multiply it by itself, and return the product.
```

**Function (concrete):**

```js
var square = function(num) {
  return num * num;
}
```

#### Analogy: Dry Cleaner

Your programs can "hand off" some of their work to functions the way you might hand off tasks to another person. When you take your laundry to a dry cleaner, the dry cleaner returns clean clothes to you a day or two later. You don't have to know how to use the dry cleaning machinery, or even exactly what it does (and maybe the dry cleaner wants to protect a secret step in the process!). Plus, many other customers can go to the same dry cleaner. It's so DRY!

```js
var dryClean = function(dirtyClothes) {
  // code that turns dirtyClothes into cleanClothes
  return cleanClothes;
}
```

## Why use functions?

> "Functions are the bread and butter of JavaScript programming.

> The concept of wrapping a piece of program in a value has many uses.

> It is a tool to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other."

> -Marjin Haverbeke, *Eloquent Javascript*

#### Benefits of Using Functions

* **Encapsulation** - Keeping code for the same purpose in the same place makes finding it and updating it easier.

* **Code Reuse** - "Don't Repeat Yourself" is a principle of coding - keep your programs **DRY**! Reusing code makes it easier to change how your program works, since you only have to make updates in one place. If you find yourself writing the same code two or more times, a good rule of thumb is to move it into a function!

##Anatomy of a function

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

##Optional Further Reading

Here are some resources for more advanced JavaScript topics. Feel free to dig in tonight if you feel like stretching yourself, but we will come back to these later in the course. 

* [The 'this' keyword](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/) - JavaScriptIsSexy Blog
* [The Call Stack](https://www.youtube.com/watch?t=1310&v=8aGhZQkoFbQ) - A video with a great explanation and visual representation of the Call Stack
* [Variable Hoisting](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/#hoisting) – Sitepoint article
* [Closures](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work#answer-111200) – Stack Overflow post
* [Recursion](http://www.codecademy.com/courses/javascript-lesson-205/0/1) — Code Academy lesson
