# Objects and Arrays 

| Students will be able to... |
| :--- |
| Identify primitive and reference data types in JavaScript |
| Manipulate data inside arrays and objects |
| Use iteration methods to loop over objects and arrays |


## Primitive and Reference Data Types

When your computer looks up the value of a variable, you can think of that like asking a librarian for some information.  

If the librarian knows the answer "off the top of their head," they'll give it to you immediately. Computer programming languages purposefully store some types of variables so that they'll immediately know what to give you when you access a variable. These are called the "primitive data types" of the language. 

If a librarian doesn't know the answer to your question, they'll tell you where to look it up.  Computer programming languages purposefully store some types of variables this way -- so your computer doesn't know the exact value but knows where to look up the information. These are called the "reference types" of a computer programming language.  

###Primitive Data Types in JavaScript

  * Boolean (just `true` or `false`)
  * Null (no value - a placeholder: just `null`)
  * Undefined (empty/unassigned: just `undefined`)
  * Number (integers and floating point values: like `3`, `9.5`, `-0.288`)
  * String (words in quotes: like `"hello"`, `"AWESOME!"`)
  * Symbol (coming in the next version of JavaScript, known as ES6)

  Many students wonder about the difference between `null` and `undefined`. As a rule of thumb, you should let JavaScript decide when something is `undefined`.  You should use `null` wherever you want to "blank out" a variable so that it has no value. 

### Reference Data Types in JavaScript

Objects are a *reference data type* that allow us to group data together. There often isn't enough room in a variable to store an entire complex Object; instead, we store a reference to another location in memory, and the computer looks it up when needed.

You should recognize **object literals**, which are enclosed in curly braces:

  ```
  var car = { make: "Tesla", model: "S", year: 2015 };
  ```
  ```
  var shirt = { size: "L", color: 'green' };
  ```

`Object` is the most basic reference type in JavaScript. Every other non-primitive we'll use -- `Array`, `Function`, `Date` -- is actually built out from the basic `Object` type.

## Objects

Objects are composed of key-value pairs.  Keys usually represent properties of an object type.   An object representing a person, for instance, might have keys like `name`, `height`, `age`.  Values are the actual value of a key for a particular object, like `'Bill'`, `'5 feet, 9 inches'`, `34`. In JavaScript Objects, keys are always converted to strings.


#### Object Method Basics

**Creating** an object literal:

```js
var person = { name: 'Bill', height: '5 feet, 9 inches', age: 34 };
```

Accessing the **age** value:

```js
// this is called bracket notation:
person['age']; // 34
// this is called dot notation:
person.age;    // 34
```

**Adding** a key-value pair:

```js
person["hairColor"] = 'blonde';
person.hairColor = 'blonde';
// { name: 'Bill', height: '5 feet, 9 inches', age: 34, hairColor: 'blonde' }
```

**Changing** the value for a key:

```js
person.hairColor = 'green';
// { name: 'Bill', height: '5 feet, 9 inches', age: 34, hairColor: 'green' }
```


**Semi-removing** a value:  

There's not a way to remove just a value. Use `null` as a marker for an empty value.

```js
person.hairColor = null;
``` 


**Fully removing** a key-value pair:

```js
delete person.height;
// { name: 'Bill', age: 34, hairColor: 'green' }
```

**Checking** if the object has a certain key:

```js
person['height'];  // undefined
// undefined means the key doesn't exist
```

Finding **keys** in the object:

```js
var keys = Object.keys(person);
// ['name', 'age', 'hairColor']
```


**Looping** through Objects

One way to loop through objects in JavaScript is to use `for ... in` loops:

```js
  for (key in person){
    // this next condition is required because of the prototype chain, which we haven't talked about quite yet
    if (person.hasOwnProperty(key)){  
      console.log(key, ": ", person1[key]);
    }
  }
  // the order is not guaranteed, but this console logs:
  //   'name': 'Bill'
  //   'age': 34
  //   'hairColor': null
```

## Arrays

Arrays are a special kind of _ordered_ object. Instead of having keys that are *strings*, every key is a number called an "index", starting with 0. 

##Array Method Basics##

**Creating** an array:

```js
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry", 
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];
```

Accessing the **first** element:

```js
fruits[0]; // "Apple"
```

Accessing the **length**:

```js
fruits.length; // 10
```
Accessing the **last** element:  

```js
fruits[fruits.length-1]; // "Jackfruit
```
**Adding** an element to the **front**:

```js
fruits.unshift("Apricot"); // 11
```

**Adding** an element to the **end**:  

```js
fruits.push("Kiwi"); // 12
``` 

**Removing** an element from the **front**:

```js
fruits.shift(); // "Apricot"
```

**Removing** an element from the **end**:  

```js
fruits.pop(); // "Kiwi"
``` 
**Finding** the index of an element:  

```js
fruits.indexOf("Jackfruit"); // 9
fruits[9]; // "Jackfruit"
```

**Changing** an element by index position:

```js
var cherryPos = fruits.indexOf("Cherry");
fruits[cherryPos] = "Cantaloupe";
// ["Apple", "Banana", "Cantaloupe", "Durian", "Elderberry", 
// "Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];
```

**Removing** an element by index position:  
  
```js
var huckleBerryPos = fruits.indexOf("HuckleBerry");
var removedItem = fruits.splice(huckleBerryPos, 1); 
// ["Apple", "Banana", "Cantaloupe", "Durian", "Elderberry", 
// "Fig", "Guava", "Ice plant", "Jackfruit"]
```

**Copying** elements:

```js
var commonFruits = fruits.slice(0,4);
// commonFruits is ["Apple", "Banana", "Cantaloupe"]
// fruits is ["Apple", "Banana", "Cantaloupe", "Durian", 
// "Elderberry", "Fig", "Guava", "Ice plant", "Jackfruit"]
```

![img](http://www.frusion.com/media/1011/fruit-row.png)

### Iteration Methods

JavaScript has quite a few helper functions that implement common patterns.  "Iteration methods" follow the pattern of looping through an array and do something with each element.  Iteration methods take a function as one of their arguments. This "callback" function says what should be done with each element of the array.

Iteration methods are useful because they're generic and reusable. We don't have to write the same pattern over and over again, because the iteration methods take care of the details.

The most well-known iteration methods are `each`/`forEach`, `map`, and `reduce`.  

The `map` iteration method does something to each element of the array, and forms a new array made up of the results.  Here's how we'd use JavaScript's built-in `map`:

Fruity Example - pluralize all of our fruits  

```js

var pluralize = function(word){
  // if word ends in 'y', remove 'y' and add 'ies' to the end
  word = word.split('');  // turn the string into an array
  var lastLetter = word[word.length -1];
  if (lastLetter === 'y') { 
    word.pop();  // remove y
    word.push('i', 'e');  // add i and e
  } 
  word.push('s');
  word = word.join('');  // convert back to a string
  return word;
}

fruits = fruits.map(pluralize);

// [ "Apples", "Bananas", "Cantaloupes", "Durians", "Elderberries",
//   "Figs", "Guavas", "Ice plants", "Jackfruits" ]
```

Numbers Example - Square each number in an array

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var square = function(num){
  return Math.pow(num, 2);
}

numbers.map(square);
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

```


Here's how another version of a `map` iteration method might be coded in JavaScript:

```js
// define the myMap function
var myMap = function(arr, callback){
  var outputArray = [];  // create a new array to hold output
  for (var i=0; i<arr.length; i++){
    outputArray.push(callback(arr[i], i));
  }
  return outputArray;
};

// call the myMap function
myMap(fruits, pluralize); 
// [ "Apples", "Bananas", "Cantaloupes", "Durians", "Elderberries",
//   "Figs", "Guavas", "Ice plants", "Jackfruits" ] 
myMap(numbers, square);
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```


### Other Array Methods

Check out Mozilla Developer Network's <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array documentation</a> for more information on arrays. In particular, all of the methods listed in the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_instances" target="_blank">Array instances</a> section are available to use with JavaScript arrays. Commonly used ones include `join`, `sort`, and `reverse`.
