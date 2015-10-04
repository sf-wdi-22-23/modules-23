# Arrays and Objects Exercises



## Iterators

"Iterators" in JavaScript are function that loop through an array and do something with each element.

1. `each(arr, callback)`

Write a function called `each` that takes in an array argument (called `arr`) and a function argument (called `callback`). The function argument should itself take two arguments: one element from the array, and the index of that element.  The `each` function should loop through all elements in the array and call `cb` on each one. After the loop, `each` should return `arr`, the original array that was passed in.

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


1. `partition(arr, truthTest)`


	```js
	var isOdd = function(num){
		return num % 2 !== 0;
	}

	partition([0, 1, 2, 3, 4, 5], isOdd);
	// returns [[1, 3, 5], [0, 2, 4]]
	```

	Write a function called `partition` that takes in an array and another function (a truth test).  `partition` should split the array into two groups: one whose elements all pass the truth test and one whose elements all fail. It should return a new array with the two groups nested inside.



1. `pluck(arr, key)`

	```js
	var grandparents = [
		{first: "June", last: "Crane", age: 74},
		{first: "Jim", last: "Crane", age:76},
		{first: "Linda", "Fuentes", age: 62},
		{first: "Panfilo", "Fuentes", age: 76}
		];

	pluck(grandparents, 'first');
	// returns ["June", "Jim", "Linda", "Panfilo"]
	```

	Write a function called `pluck` that takes in an array of objects and a key. `pluck` should iterate through the array, pick out the value each object has associated with the given key, and return a new array containing those values.
