#Intro to JavaScript Functions

##Learning Objectives

* Contrast an algorithm with a function
* Articulate the importance of functions in a computer language
* Create Javascript functions with parameters
* Explain what scope is and compare global and local scope
* Write functions that incorporate conditionals, loops
* Understand and Implement Callbacks
* Use functions to break programs into smaller sub-programs

---

##What are functions?

Computer science can essentially be divided into two core elements: **data structures** & **algorithms**.

A **data structure** organizes information.

An **algorithm** *abstractly* describes how to manipulate data to solve a problem.

A [**function**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) is a concrete implementation of an algorithm in a computer language. *It is a "subprogram" that encapsulates a specific behavior.*

---

##Algorithms vs functions

How could we describe the act of `squaring` a number in an algorithm vs in a function?

**Algorithm —**
*abstract*

```
Take a number, multiply it by itself, and return the product.
```

**Function —**
*concrete*

```
var square = function(num) {
	return num * num;
}
```
Question: What are the fundamental differences between an algorithm and a function?

---

##Why do we care?

"Functions are the *bread and butter* of JavaScript programming.

The concept of wrapping a *piece of program* in a value has many uses.

It is a *tool to structure* larger programs, to *reduce repetition*, to *associate names with subprograms*, and to isolate these subprograms from each other."

-Marjin Haverbeke, *Eloquent Javascript*.

Question: Why are functions important?

---

##Components of a function

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

Either:

```
var sweetFunk = function() {
	//sweetness
} 
```

or:

```
function sweetFunk() {
	//sweetness
}
```
is acceptable for declaring a function; just stick to one convention.

---

##Break Time

###15 minutes

<img src="http://i.giphy.com/wsEX8uMrTRDoI.gif" style="width: 250px;">

---

##Challenge: Variable output

In the next **10m**:

1) Define a function `maxOrMin` that takes three parameters: two numbers and a boolean.

2) Have it return the larger of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers.

---

##Example solution

```
function maxOrMin(num1, num2, max) {
    //sort the numbers
    var sorted = [num1, num2].sort(function(a, b){
      return a - b;
    });
    if(max) {
    	//if max is true return the greater number
        return sorted[1];
    } else {
    	//otherwise return the lesser number
        return sorted[0];
    }
}
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

##Challenge: Callbacks

Create a function called `sweetNothings` that takes a name as a parameter and outputs a love poem to that person.

Create another funtion called `swoon` that also takes in a name and a callback as parameters and in the body of the function calls the callback with the name passed in.

Finally try calling `swoon("Delmer", sweetNothings);` so that a love poem is written to Del.

---
<img src="http://i.giphy.com/dsKnRuALlWsZG.gif" style="width:350px">

---

##Further Discussion Topics

Check out the [refactor_to_functions.js](https://github.com/sf-wdi-22-23/Intro-to-JavaScript-Functions/blob/master/refactor_to_functions.js) file for an example of how functions make life better!

We discuss these concepts at a later date. They are related, but more advanced. So have a solid understanding of these topics before you move on.

* [The 'this' keyword](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/) - JavaScriptIsSexy Blog
* [The Call Stack](https://www.youtube.com/watch?t=1310&v=8aGhZQkoFbQ) - A video with a great explanation and visual representation of the Call Stack
* [Variable Hoisting](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/#hoisting) – Sitepoint article
* [Closures](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work#answer-111200) – Stack Overflow post
* [Recursion](http://www.codecademy.com/courses/javascript-lesson-205/0/1) — Code Academy lesson

---