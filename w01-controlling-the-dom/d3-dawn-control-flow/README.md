# JavaScript Control Flow

##Objectives  

| Students will be able to... |
| :--- |
| Predict the output of boolean logic expressions|
| Trace the flow of a program based on its code |
| Describe the structure of `if/else` and `switch` statements |
| Explain the purpose of `for` loops and `while` loops, and when to use each |
| Implement `if/else` logic, `for` and `while` loops, and combinations |

## Motivation

"Control flow" refers to the way our computers move through a program's code.   The ability to trade the flow of a program based on its code is essential for working with any programs.  In particular, conditionals and loops are fundamental to understanding programming in every language and paradigm.

## Boolean Logic

At the very lowest level, computers understand our instructions as sequences of 1s and 0s.  This "binary code" drives everything a computer does, from outputting text in the terminal, to displaying complex video game graphics, to communicating with other computers across the internet. 

"Boolean" logic is the closest web developers need to get to thinking about binary code.  In boolean logic, every value is either true or false.

```js
typeof(true)    // boolean
typeof(false)   // boolean
```

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

A diehard Giants fan might have the following rules for baseball games:

```js
if (giantsPlaying) {
  getTickets();
}

if (!giantsPlaying) {
  watchOnTV();
}
```

We can rephrase this more succinctly using `if` and `else`.

```js
if (giantsPlaying) {
  getTickets();
} else {
  watchOnTV();
}
```

The expression in `if( EXPRESSION )` will always be evaluated as truthy or falsy to determine what will happen next. 

A slightly more complex boolean expression will help our Giants fan save some money:

```js 
if (giantsPlaying && gameInSF){
  getTickets();
} else {
  watchOnTV();
}
```

### `else if`

Here's a sample ruleset for commuters (though maybe not in SF):

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


A `switch` statement checks the value of one variable or expression to determine which of many "cases" to jump to.  Here's code for a vending machine with a different price for each row:

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

## Docs & Resources

[Loops - JSforcats](http://jsforcats.com/#loops)
</br>
[Conditionals - Codeacademy](http://www.codecademy.com/glossary/javascript/if-statement)
</br>
[Loops - CodeAcademy](http://www.codecademy.com/glossary/javascript/loops)
</br>

### External Reading and Tutorials

[Javascripting](https://github.com/sethvincent/javascripting)
</br>
