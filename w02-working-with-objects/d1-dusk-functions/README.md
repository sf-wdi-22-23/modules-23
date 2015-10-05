#First Draft of my notes.

## Review of loops from this morning. 10 min

###Loops:

 do while,  for in, for each   .each()  .map()  _.underscore or .jQuery methods

#### This morning we reviewed looping through Objects and Arrays.

```
var someArray = new Array("zero", "one", "two", "etc");
for (var i = 0; i < someArray.length; i++) {
    console.log("The object at index " + [i] + " is " + someArray[i]);
}
```

*What did you notice about how we created our Array?


####The for...in statement shows us how to loop through an Object literal:

```
for (name in object){
    // Douglas Crockford recommends wrapping every internal statement in an if() to filter out unwanted parts of the inheritance chain:

    if (object.hasOwnProperty(name)){

    }

}

```

It is very common to see for...in like this:

```
var randomHomeDetailsObject = {"style": "Eichler", "sqft": 1800, "oven": "electric", "date built": 1952, "garage": false}

for (key in randomHomeDetailsObject){
        console.log("My house " + key + " is " + someObject[key]);
}

```
####The do while statement:


```
var i = 0;
do {
   i += 1;
   console.log(i);
} while (i < 5);

// or...

var i = 99;
do {
   console.log( i + ' bottles of beer on the wall, ' + i + ' bottles of beer! Take one down, pass it around, ' + (i-1) + ' bottles of beer on the wall!');
   i -= 1;
} while (i >80);


// What is JSON? JavaScript Object Notation. It's a series of nested objects and arrays
// You can easily create and traverse complex JSON data structures by combining array and object looping techniques

var myFirstJSON = 
	{"language basics":
		[{"Spanish":
			{
            			"letters":["a", "b", "c","ch","d","e","f","g","h","i","j","(k)","l","ll","m","n","o","p","q","r","rr","s","t","u","v","w","x","y","z"], 
                                            "numbers":["uno","dos","tres","quatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","diez y seis","diez y siete","diez y ocho","diez y nueve","veinte"]
			}
                      },
		{"Japanese":
			{
				"letters":["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","n"],
				"numbers": ["ichi","ni","san","shi","go","roku","shichi","hachi","kyu","jyuu","jyuuichi","jyuuni","jyuusan","jyuushi","jyuugo","jyuuroku","jyuushichi","jyuuhachi","jyuukyu","nijyuu"]
			}
		}]
	};
```
Exercise 1. Loop through Spanish and show us the letters


Exercise 1. Write a function languageBasics() that will take a language and a type and return a list stating the first, next and last values of the data requested


### Writing better Functions:

We've talked about global versus local scope. Here it is again:
```

// Block scope
var inBlock = false;

for(var i = 0; i < 1; i++){
    var inBlock = true;
}

if(inBlock){
    console.log("inBlock must be true.");
}

```

Now let's look at some cool scoping concepts in Javascript:

####Precedence

Read the code below.
Which alert will show first?

```
var g = "global";

function go() { 
var l = "local";
var g = "in here!";
alert(g, "inside go");
}
go();
alert(g, "outside go")

```


#### Hoisting

In the function bugHunter(), what value do you expect to be returned? Run it to find out

```
var bugHunter = function(){
    var butterfly = 1;
    var bees = 5;
    var wasps = 3;
    wasps = wasps * bees;
    console.log(wasps);
    bees = bees * bees;
};
```
Next move the last line "bees = bees * bees;" up two lines. What is the new result?


####Recursion

Is a technique where a function calls itself to do the same repetitive task on smaller versions of the original argument.

```
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

What…???

```
var countR = function(num){
    console.log(num);
    if(num > 0)countR(num-1);
};
```


####Closure

A closure happens when you nest a function inside another function. This creates a private function.
The inside functions can then access the arguments and variables of outside, parent functions, but the parent functions cannot touch inside the child function.
Something really special happens when you return that function inside another function. Let’s take a look!


```
function counter() {
    var n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}
var c = counter(), d = counter(); c.count()
d.count()
c.reset()
c.count()
d.count()
```

This week's theme is working with Objects, so closure is the most important concept

//exercise:

// create an object with keys to functional values

// example:
// var myCarObject = { }
