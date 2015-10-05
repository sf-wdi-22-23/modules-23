####Looping Exercises (Optional, for extra practice):
Begin with the JSON object from the lecture:

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
1. Loop through the ```"Spanish" > "letters"``` and `console.log()` them.

1. Write a function languageBasics() that will take a language and a type (ex. `languageBasics('Japanese', 'numbers'`)) and return a list of all the data requested.

####Closure Exercise 1:
Write a function that takes a number as it’s only argument, let’s name the parameter firstNum (ex. `var closeCall = function(firstNum){};`) and include one function inside. Have the inner function take one number as it’s argument, let’s name that one secondNum. Now in the inner function, add firstNum and secondNum being sure that secondNum is scoped inside of the parent. See closure recipe in the README for this lesson for step-by-step guidance!


####Closure Exercise 2:
*  Create an Animal object

*  Give the Animal a name attribute and a string value.

*  Give the Animal a 'speak' method and a string value.

*  Instantiate several Animals and call their speak methods, returning different values for each.


####Closure Exercise 3:
Imagine we are coding a demolition derby-style driving game. In the following exercises, we will create a Car object and give it a variety of attributes, including functions, then we will make callbacks to those internal functions.

* Create a new Object and assign it to the variable 'Car'

* Give 'Car' a 'brand' attribute and assign it a string

* Give 'Car' a 'year' attribute and assign it a Number (or a Date() if you know
how!)

*  Give 'Car' a 'horsepower' attribute and assign it a Number, such as 350

*  Add anything else you think would be cool to track in your game. You might enjoy classic game attributes such as speed, hit points, armor, shields, ammunition... or maybe you'd prefer to do something a little more peaceful.

*  Now write two functions to change the values of a car object.

*  Finally, create two instances of the Car object and call their internal functions (methods).

*  Stretch. Can you pass in an argument for one to act on the other and let them battle it out in the console?
