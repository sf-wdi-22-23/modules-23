# Debugging JavaScript

## `console.log()`

Often when debugging, you might write:

```js
function greatest(a, b){
	console.log(a, " vs ", b);
	if (a > b){
		return a;
	} else {
		return b;
	}
}
console.log("testing greatest");
console.log(greatest(50, 50));
```

1. Write an `assertEqual` function that takes in a test expression, an expected output, and a message. If the output of the test expression is equal to the expected output, the `assertEqual` function should log the word "Pass", log the message, and return `true`.  If the output of the test expression is not the expected output, the function should log the word "Fail", log the message, and return `false`.

 	Your task is to **define** the `assertEqual` function.  Here's how we would **use** the `assertEqual` function:

	```js
	assertEqual(Math.round(-1.5), -1, "Math.round rounds up from -1.5");
	// returns false
	// console logs: "Pass : Math.round rounds up from -1.5"


	assertEqual(4+10, 16, "four plus ten is sixteen");
	// returns false
	// console logs: "Fail: four plus ten is sixteen"
	```

1. 


## `debugger` 

`debugger` is a JavaScript tool for debugging! It lets you pause your code wherever you write the keyword `debugger` and examine the scope, the call stack, and other useful information.


### Chrome Dev Tools

Chrome's "Sources" tab provides a nice Graphical User Interface, or GUI (pronounced "gooey") for the debugger tool. 


![chrome dev tools sources tab](sources.png)

Here's an example you can use to explore recursion with `debugger`:

```js
	function count(n){
	    console.log('counting down...');
	    console.log(n);
	    debugger;
	    if (n > 0) {
	        count(n-1);
	    } else {
	        console.log('at the bottom!');
	    }
	    console.log('counting up...');
	    console.log(n);
	    debugger;
	}

count(3);
```

If you'd like your dev tools in a separate window from your browser, click and hold the dev tools positioning icon to undock them.  

![dev tools positioning](undock.png)



1. Use the chrome dev tools and `debugger` to diagnose a problem with the following code snippet:


	```js
	function addLinks () {
		var $link;
		var $body = $('body');
	    for (var i=0; i<5; i++) {
	        $link = $('a');
	        $link.html('Link '+i);
	        $link.on('click', function () {
	            alert(i);
	        });
	        $body.append($link);
	    }
	}
	```

1.

### Node.js

Since Node.js is built on the same JavaScript engine Chrome uses (called "V8"), we can also use `debugger` when running a file from the terminal with Node.js:

```bash
node debug script.js
```

You don't have a GUI in the Terminal, so you'll have to enter debugger text commands. A full list of commands and more information on how to use `debugger` with Node.js is avaiable in the <a href="https://nodejs.org/api/debugger.html" target="_blank">Node.js debugger documentation</a>.

## Conditional Breakpoints in Chrome Dev Tools

