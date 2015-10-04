# Arrays and Objects Exercises

## Exercise 1: Manipulating Data in Arrays

1. Create an array with 5 elements inside it.   
1. Create a 


## Exercise 3: Iterators

"Iterators" in JavaScript are function that loop through an array and do something with each elemetn.

1. Write a function called `each` that takes in an array argument (called `arr`) and a function argument (called `callback`). The function argument should itself take two arguments: one element from the array, and the index of that element.  The `each` function should loop through all elements in the array and call `cb` on each one. After the loop, `each` should return `arr`, the original array that was passed in.

	```js
	// Example of how to use each!

	// variables to set up
	var scores = [18, 14, 15];        // our arr
	var logMessage = function(element, index){   // our cb
		console.log("Player " + i + " earned " + scores[i] + " points.");
	}

	each(points, logMessage); 
	// logs to the console:
	//   "Player 0 earned 18 points."
	//   "Player 1 earned 14 points."
	//   "Player 2 earned 15 points."
	// returns [2,3,4,5];

	```