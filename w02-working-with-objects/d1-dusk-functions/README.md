# Callbacks, Closures and Loops

| Students will be able to... |
| :--- |
| Call functions with a variety of parameters |
| Identify JSON objects  |
| Loop through nested data structures |
| Leverage scope concepts for precedence, hoisting, basic recursion and closure |
| Write better functions |

## Review of loops from this morning. 10 min

###Loops:

 do while,  for in, for each

#### This morning we reviewed looping through Objects and Arrays.

```js
var someArray = new Array("zero", "one", "two", "etc");
for (var i = 0; i < someArray.length; i++) {
    console.log("The object at index " + [i] + " is " + someArray[i]);
}
```

*What did you notice about how we created our Array?


####The for...in statement shows us how to loop through an Object literal:

```js
for (name in object){
    // Douglas Crockford recommends wrapping every internal statement in an if()
    // to filter out unwanted parts of the inheritance chain:
    if (object.hasOwnProperty(name)){
        //...
    }
}
```

It is very common to see for...in like this:

```js
var randomHomeDetailsObject = {"style": "Eichler", "sqft": 1800, "oven": "electric", "date built": 1952, "garage": false}

for (key in randomHomeDetailsObject){
        console.log("My house " + key + " is " + someObject[key]);
}

```
####The do while statement:

```js
var i = 0;
do {
   i += 1;
   console.log(i);
} while (i < 5);

// or...

var i = 99;
do {
   console.log( i + ' bottles of beer on the wall, ' +
                    i + ' bottles of beer! Take one down, pass it around, ' +
                   (i-1) + ' bottles of beer on the wall!');
   i -= 1;
} while (i >80);

```

#### JSON
What is JSON? JavaScript Object Notation. It's a series of nested objects and arrays.
You can traverse complex JSON data structures by combining array and object looping techniques.

```js
var myFirstJSON =
	{"language basics":
		[{"Spanish":
			{
                                    "letters":["a", "b", "c","ch","d","e","f","g","h","i","j","k","l","ll","m","n","&ntilde;","o","p",
                                    "q","r","rr","s","t","u","v","w","x","y","z"],
                                    "numbers":["uno","dos","tres","quatro","cinco","seis","siete","ocho","nueve","diez",
                                    "once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho",
                                    "diecinueve","veinte"]
			}
                      },
		{"Japanese":
			{
                                    "letters":["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so",
                                    "ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma",
                                    "mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","n"],
                                    "numbers": ["ichi","ni","san","shi","go","roku","shichi","hachi","kyuu","jyuu",
                                    "jyuui chi","jyuu ni","jyuu san","jyuu yon","jyuu go","jyuu roku","jyuu nana",
                                    "jyuu hachi","jyuu kyuu","ni jyuu"]
			}
		}]
	};
```

We already practiced something similar this morning, but it bears repeating. _(These exercises may add 10 - 20 minutes to the lecture.)_

*Exercise 1. Loop through the ```"Spanish" "letters"```.

*Exercise 2. Write a function languageBasics() that will take a language and a type and return a list stating the first, next and last values of the data requested

The ```for each in``` loop has been deprecated and is no longer recommended for using in Javascript.

There are some useful Array methods that can help refactor crufty code. I recommend you read up on the following when you have time:

```js
.forEach()
.map()
.reduce()
```

...all can be found in the Mozilla Developer Network <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array documentation</a> link referenced this morning.


### Writing better Functions
(20 min)

Last week we talked about *global* versus *local* scope. Here it is again:

```js
// Block scope
var inBlock = false;

for(var i = 0; i < 1; i++){
    var inBlock = true;
}

if(inBlock){
    console.log("inBlock must be true.");
}

```

Now let's look at some more advanced scoping concepts in Javascript:

####Precedence
Read the code below.
Which alert will show first?

```js
var g = "global";

function go() {
    var l = "local";
    var g = "in here!";
    alert(g, " inside go");
}
go();
alert(g, " outside go");

```

#### Hoisting
In the function bugHunter(), what value do you expect to be returned? Run it to find out

```js
var bugHunter = function(){
    var butterfly = 1;
    var bees = 5;
    var wasps = 3;
    wasps = wasps * bees;
    console.log(wasps);
    bees = bees * bees;
};
```
Next move the last line ```bees = bees * bees;``` up two lines. What is the expected result?

####Recursion
Is a technique where a function calls itself to do the same repetitive task on smaller versions of the original argument. This is an important concept to understand the power of callbacks.

```js
var bottles = function(c){
    if (c > 0){
        console.log( c + ' bottles of beer on the wall, ' + c + ' bottles of beer! Take one down, pass it around, ' + (c-1) + ' bottles of beer on the wall!');
        c--;
        bottles(c);
    } else {
        console.log("That's enough!");
    }
}
```
How does this compare with writing the same function in a do...while loop?

```js
var countR = function(num){
    console.log(num);
    if(num > 0)countR(num-1);
};
```

####Closure
A closure happens when you nest one function inside another function. This creates a private function. The inside functions can then access the arguments and variables of outside, parent functions, but the parent functions cannot touch inside the child function.

##### A recipe for closure:
1. create your parent function
2. define some variables in the parent’s local scope (this can be accessed by the child function)
3. define a function inside the parent function. We call this a child.
4. return that function from inside the parent function


```js
var makeStopwatch = function(n){
    console.log('initialized');
    var elapsed = 0;
    console.log(elapsed);

    var stopwatch = function(){  
        console.log('stopwatch');
        if(elapsed < n){
            return elapsed;
        } else {
            console.log(elapsed + ' seconds elapsed');
            return;
        }
    };

    var increase  = function(){
        if(elapsed < n){
            elapsed++;
        }
    };

    setInterval(increase, 1000);
    return stopwatch;
};

var x = makeStopwatch(n);

```

Here you can see makeStopwatch() calls increase() and returns stopwatch()
But if we try to call either function outside of makeStopwatch, we will get the Uncaught Reference Error.
The functions are not defined.

Closure is also very useful for embuing Objects with

```js
function counter() {
    var n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

var c, d = counter();

c.count();
d.count();
c.reset();
c.count();
d.count();

```

This week's theme is working with Objects, so if you only learn one new approach, make it closure.
