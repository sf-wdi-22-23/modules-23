#Control Flow Exercise Solutions

## Boolean Expressions and Truthy Values

1. What is the outcome of the following expressions?

  * true || false    	// true
  * false && false	// false
  * true && false	// false
  * (false || true) && true	// true
  * false && ((true || false) && (false || true))	// false (note you can tell from just the first `false &&`


1. Which of the following are truthy values? (hint: try `if("abc"){"console.log('I'm truthy!')"}` in the JS console).       
	truthy: 1, "abc", [], {}, 3.14159, Array, Object       
	falsy: "", 0    


## Conditionals!


Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding. For starters, it costs 5 tokens. Check the following additional Requirements:

1. Must be at least 4ft tall

	```
	var tokens = 3; // Jimmy's tokens
	var height; // Jimmy's height in feet

	// Can he ride?
	if ( tokens >= 5 && height >= 4) {
	    console.log("Step right up!");
	} else {
	    console.log("Sorry, you can't ride.");
	}
	```

1. Must be at least 12 years old

	```
	var tokens = 3; // Jimmy's tokens
	var height; // Jimmy's height in feet
	var age; // Jimmy's age in years

	// Can he ride?
	if ( tokens >= 5 && height >= 4 && age >=12) {
	    console.log("Step right up!");
	} else {
	    console.log("Sorry, you can't ride.");
	}
	```


1. Replace the prevoius rule: now riders under 12 must be accompanied by an adult

	```
	var tokens = 3; // Jimmy's tokens
	var height; 	// Jimmy's height in feet
	var age; 		// Jimmy's age in years
	var hasAdult; 	// bool - does Jimmy have an adult?

	// Can he ride?
	if ( tokens >= 5 && height >= 4 ) {
		if (age >= 12 || hasAdult){
		    console.log("Step right up!");
		} else {
			console.log("Sorry, you can't ride.");
		}
	} else {
	    console.log("Sorry, you can't ride.");
	}
	```




1. (If the boss isn't looking, you can sneak in!)

    ```
	var tokens = 3; // Jimmy's tokens
	var height; 	// Jimmy's height in feet
	var age; 		// Jimmy's age in years
	var hasAdult; 	// bool - does Jimmy have an adult?
	var isLooking; 	// bool - is the boss looking?

	// Can he ride?
	if (!isLooking){
		console.log("Step right up!");
	} else {
		if ( tokens >= 5 && height >= 4 ) {
			if (age >= 12 || hasAdult){
			    console.log("Step right up!");
			} else {
				console.log("Sorry, you can't ride.");
			}
		} else {
		    console.log("Sorry, you can't ride.");
		}
	}
	```



1.  Riders with a park pass get in free.

    ```
	var tokens = 3; // Jimmy's tokens
	var height; 	// Jimmy's height in feet
	var age; 		// Jimmy's age in years
	var hasAdult; 	// bool - does Jimmy have an adult?
	var isLooking; 	// bool - is the boss looking?
	var hasPass; 	// bool - does Jimmy have a park pass?

	// Can he ride?
	if (!isLooking){
		console.log("Step right up!");
	} else {
		if ( (tokens >= 5 || hasPass) && height >= 4 ) {
			if (age >= 12 || hasAdult){
			    console.log("Step right up!");
			} else {
				console.log("Sorry, you can't ride.");
			}
		} else {
		    console.log("Sorry, you can't ride.");
		}
	}
	```



## Loops!

2. Log "This is awesome!" to the console 25 times.   
	```
	for (var i=0; i<25; i++){
		console.log("This is awesome!");
	}
	```


1. Create a new variable that is an array of 4 phrases: `Howdy there`, `OMG`, `javascript`, and `Pair Programming`.

	`var phrases = ["Howdy there", "OMG", "javascript", "Pair Programming"];`

5. Loop over the array and console log each phrase.

	```
	for (var i=0; i<phrases.length; i++){
		console.log(phrases[i]);
	}
	```
