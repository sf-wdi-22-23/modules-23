#First Draft of my notes.

## More to come.


```
// Loops:
// do while,  for in, for each   .each()  .map()  _.underscore or .jQuery methods

// looping arrays:

var someArray = new Array("zero", "one", "two", "etc");
for (var i = 0; i < someArray.length; i++) {
    console.log("The object at index " + [i] + " is " + someArray[i]);
}


// looping objects (for...in):

// for in shows how to loop through an Object literal
for (name in object){
    // recommended wrap every statement in an if statement to filter out unwanted parts of the inheritance chain
    if (object.hasOwnProperty(name)){

    }

}

var someObject = {"style": "Eichler", "sqft": 1800, "oven": "electric"}
for (key in someObject){
        console.log("My key is " + key + " and my value is " + someObject[key]);
}

// do while statement:
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
		[{"espanol":
			{
				"abecedario":["a", "b", "c","ch","d"], "numeros":["uno","dos","tres","quatro","cinco"]
			}},
		{"nihongo":
			{
				"romaji no jibo":["a","i","u","e","o"],
				"romaji no kazu": ["ichi","ni","san","shi","go"]
			}
		}]
	};

for (var key in myFirstJSON){
	for (var i = 0; i < myFirstJSON['language basics'][0]['espanol']['abecedario'].length; i++){
		if (i === 0){
			console.log('la primera letra es ' + myFirstJSON['language basics'][0]['espanol']['abecedario'][i] )
		} else {
			console.log('el proximo letra es ' + myFirstJSON['language basics'][0]['espanol']['abecedario'][i] );
		}
	}
}


// Looping Exercises:

{"pancakeBatter" : [
	{"ingredients": [
		{"ingredient": "all-purpose flour", "type": "dry", "quantity": 1.75, "unit": "cups"},
	            {"ingredient": "baking powder", "type": "dry", "quantity": 1, "unit": "tbsp"},
	            {"ingredient": "sugar", "type": "dry", "quantity": 1, "unit": "tbsp"},
	            {"ingredient": "salt", "type": "dry", "quantity": 0.5, "unit": "tsp"},
	            {"ingredient": "eggs", "type": "wet", "quantity": 3, "unit": "large"},
	            {"ingredient": "melted butter", "type": "wet", "quantity": 8, "unit": "tbsp"},
	            {"ingredient": "milk", "type": "wet", "quantity": 1.5, "unit": "cups"},
	            {"ingredient": "vanilla extract", "type": "wet", "quantity": 2, "unit": "tsp"}
	         ]},
	 {"instructions": ["Stir together dry ingredients.",
	  	"Stir together wet ingredients.",
	  	"Add wet ingredients to dry ingredients and stir slightly to form a lumpy batter.",
	  	"Scoop .25 cups at a time onto buttered griddle over medium high heat.",
	  	"Cook until slightly brown on each side."]
	}]
}

// EXERCISE 1: change quantity of sugar to 3

// solution:
BananaSourCreamPancakes.ingredients[2].quanity = 3;

// EXERCISE 2: change quanity of all-purpose flour to 1.5

// solution:
for (var i = 0; i < BananaSourCreamPancakes.ingredients.length; i++){
    for (var key in BananaSourCreamPancakes.ingredients[i]) {
        if (BananaSourCreamPancakes.ingredients[i][key] == "all-purpose flour"){
            BananaSourCreamPancakes.ingredients[i].quantity = 1.5;
        }
    }
}

// EXERCISE 3: try to write a loop to do ALL of the following:
// change quantity of baking poweder to 2
// change quantity of salt to 1.5
// change quantity of eggs to 2
// change quanity of milk to 3/4 cup

// solution:

for (var i = 0; i < BananaSourCreamPancakes.ingredients.length; i++){
    for (var key in BananaSourCreamPancakes.ingredients[i]) {
        if (BananaSourCreamPancakes.ingredients[i][key] == "baking powder"){
            BananaSourCreamPancakes.ingredients[i].quantity = 2;
        } else if (BananaSourCreamPancakes.ingredients[i][key] == "salt"){
            BananaSourCreamPancakes.ingredients[i].quantity = 1.5;
        } else if (BananaSourCreamPancakes.ingredients[i][key] == "eggs"){
            BananaSourCreamPancakes.ingredients[i].quantity = 2;
        } else if (BananaSourCreamPancakes.ingredients[i][key] == "milk"){
            BananaSourCreamPancakes.ingredients[i].quantity = 0.75;
        }
    }
}


// Let's look at some cool scoping concepts in Javascript:

// precedence -- which alert will show first?
var g = "global";

function go() { 
var l = "local";
var g = "in here!";
alert(g, "inside go");
}
go();
alert(g, "outside go")

// block scope
var inBlock = false;

for(var i = 0; i < 1; i++){
    var inBlock = true;
}

if(inBlock){
    console.log("inBlock must be true.");
}


// Hoisting.
// First show the code as-is. What value do you expect? Run it to find out.
// Next move the last line "bees = bees * bees;" up two lines. What is the new result?

var bugHunter = function(){
    var butterfly = 1;
    var bees = 5;
    var wasps = 3;
    wasps = wasps * bees;
    console.log(wasps);
    bees = bees * bees;
};



// closure definition:
A closure happens when you nest a function inside another function. This creates a private function.
The inside functions can then access the arguments and variables of outside, parent functions, but the parent functions cannot touch inside the child function.
Something really special happens when you return that function inside another function. Let’s take a look!


// closure example

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


// recursion
// Is a technique where a function calls itself to do the same repetitive task on smaller versions of the original argument.

var bottles = function(c){
    if (c > 0){
        console.log( c + ' bottles of beer on the wall, ' + c + ' bottles of beer! Take one down, pass it around, ' + (c-1) + ' bottles of beer on the wall!');
        c--;
        bottles(c);
    } else {
        console.log("That's enough!");
    }
}

// What…???

var countR = function(num){
    console.log(num);
    if(num > 0)countR(num-1);
};
```