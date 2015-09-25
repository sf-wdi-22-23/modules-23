##Objectives  
| Objectives |
| :--- |
| Predict the output of boolean logic expressions|
| Trace the flow of a program based on its code |
| Describe the structure of `if/else` and `switch` statements |
| Explain the purpose of `for` loops and `while` loops, and when to use each |
| Implement `if/else` logic, `for` and `while` loops, and combinations |

## Motivation

Conditionals and loops are fundamental to all programming in every language and paradigm.

## Boolean Logic

### Basic Boolean Operators

| English | "and" | "or" | "not" or "bang" | "double bang" |
| ------------- |:-------------|:-------------|:-------------| :------- |
| Javascript | `&&` | &#124;&#124; | `!` | `!!` | |  
| e.g. | `a && b` | a  &#124;&#124; b | `!b` | `!!b` |
| English | A and B | A or B | not B | not NOT B |

### Boolean Comparison Operators

| strict equality | loose equality | not strictly equal | not loosely equal | greater than | less than | greater than or equal to | less than or equal to |
| ------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
| `===` | `==` | `!==` | `!=` | `>` | `<` | `>=` | `<=` |

## Conditinal Control Flow Structures

### `if/else`

A diehard Giants fan:

```
if (giantsPlaying) {
  getTickets();
}

if (!giantsPlaying) {
  watchOnTV();
}
```

```
if (giantsPlaying) {
  getTickets();
} else {
  watchOnTV();
}
```

#### `else if`

A commuter:

```
if ( hasCar ) {
	// drive it!
} else if ( hasBike ) {
	// ride it!
} else if ( hasTransitPass ) {
	// take the bus!
} else {
	// better start walking!
}
```

#### `switch`


A vending machine with a different price for each row:

```
switch (row){	
	case 1: 	
		price = 0.25;
	case 2: 
		price = 0.50;
	case 3:
		price = 0.75;
	case 4: 
		price = 1.00;
	default:  // the rest of the products (rows 5-7) 
		price = 1.25
}			
```

### Loops

#### `for` loops

For loops for arrays:

```
var m = ["Bill", "Nicki", "Kelly"]
for (i = 0; i < m.length; i++) {
  console.log(m[i] + " is a nice person")
}

```

For loops for objects:

```
var movieData = {director: "Burton", year: 1993, title: "The Nightmare Before Christmas", price: 4.55}
for (key in movieData){
	if (movieData.hasOwnProperty(key)){
		console.log(key + ": ", movieData[key]);
	}
}
```

### `while` loops

```
while (timeBeforeWork > 180000) { // Remember JS counts time in milliseconds
  hitSnooze()
}
```

##Challenges

### Docs & Resources

[Loops - JSforcats](http://jsforcats.com/#loops)
</br>
[Conditionals - Codeacademy](http://www.codecademy.com/glossary/javascript/if-statement)
</br>
[Loops - CodeAcademy](http://www.codecademy.com/glossary/javascript/loops)
</br>


### Basic Challenges
1. Which of the following are truthy values? (hint: try `if("abc"){console.log("I'm truthy!")}` in the JS console)
  * 1
  * -1 
  * 0 
  * 3.14159
  * "abc"
  * ""
  * Array 
  * []
  * Object
  * {}
2. Log to the console "This is awesome!" 25 times.
3. Create a snippet inside of chrome's developer tools. Create snippets to do the rest of the challenges.
4. In your snippet, create a new variable that is an array of 4 phrases: `Howdy there`, `OMG`, `javascript`, and `Pair Programming`.
5. Loop over the array and console log each phrase.
6. Loop over the array and log each phrase to the console if its total length is 4 or longer. Otherwise, console log that the phrase is too short.


1. Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding:

For starters, it costs 5 tokens. Here's how we might code that:

```
var tokens = 3; // Jimmy's tokens

// Can he ride?
if ( tokens >= 5 ) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride")
}
```
Edit the code above to check the following additional Requirements:

    Must be at least 4ft tall
    Must be at least 12 years old
    Replace the prevoius rule: now riders under 12 must be accompanied by an adult
    (If the boss isn't looking, you can sneak in!)
    Riders with a park pass get in free.


### Stretch Challenges

5. In a snippet, create a new variable that is an array containing 5 objects, each of which has the keys `name` and `age`. You can make up the names and ages for your objects.
6. Log the name value of each object to the console.
7. Create and log an array with the age of each object in months (assume the original ages were in years).
9. Find and log the sum of the ages.
8. Log to the console only the name of the oldest person.
9. Log to the console the index of each element in the array.
10. Create and log an array containing only the objects with an age over 20.
11. Create and log an array of all the names, in which any names that begin with a consonant are upper case.
12. Create and log an array that is the original array in a random order.

### External Reading and Tutorials

[Javascripting](https://github.com/sethvincent/javascripting)
</br>
