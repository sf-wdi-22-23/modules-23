# Objects and Arrays 

| Students will be able to... |
| :--- |
| Explain the difference between primitive and reference data types |
| CRUD data inside arrays |
| CRUD data inside objects |
| Iterate (loop) over objects and arrays |

CRUD stands for **C**reate, **R**ead, **U**pdate, **D**elete.


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
  * _Symbol (coming in the next version of JavaScript, known as ES6)_

  Many students wonder about the difference between null and undefined. As a rule of thumb, you should let JavaScript decide when something is undefined (and use conditionals to check if something might be undefined).  You should use null wherever you want to "blank out" a variable so that it has no value. 

### Reference Data Types in JavaScript

Objects are a *reference data type* that allow us to group primitives together. There often isn't enough room in a variable to store an entire complex Object; instead, we store a reference to another location in memory and the computer looks it up when needed.

You should recognize **object literals**, which are enclosed in curly braces:

  ```
  var car = { make: "Tesla", model: "S", year: 2015 };
  ```
  ```
  var shirt = { size: "L", color: 'green' };
  ```

`Object` is the most basic reference type in JavaScript. Every other non-primitive we'll use -- `Array`, `Function`, `Date` -- is actually built out from the basic `Object` type.

## Objects

Objects are composed of key-value pairs.  Keys are usually properties of an object type.   An object representing a person, for instance, might have keys like `name`, `height`, `age`.  Values are the actual value of a key for a particular object, like `'Bill'`, `'5 feet, 9 inches'`, `34`. 

Here's how we'd create a few objects using "object literal syntax" -- that is, writing out all the key-value pairs:

```js
  var person1 = { 
    name: 'Bill',
    height: '5 feet, 9 inches',
    age: 34
  }
```

```js
  var person2 = {
    name: "Anila",
    height: '5 feet, 6 inches',
    age: 27
  }
```

In JavaScript, object keys can be any primitive data type, but usually we'll use strings. 


### CRUD and Objects

CRUD is a handy acronym for four basic things we might want to do with pieces of data inside an object.  It stands for **C**reate, **R**ead, **U**pdate, **D**elete.  Create here means _adding_ one piece of data, not creating the object itself.


We usually **C**reate a new key-value pair inside an object with this syntax:

```js
// person1 is { name: 'Bill', height: '5 feet, 9 inches', age: 34 }
person1['hairColor'] = 'blonde';
// now person1 is { name: 'Bill', height: '5 feet, 9 inches', age: 34, hairColor: 'blonde' }
```

This is called "bracket notation" because it uses square brackets (`[` and `]`).  

We **R**ead from objects by accessing the key within the object:

```js
person1['hairColor'] // returns 'blonde'
```

We can also use another notation, called "dot notation":

```js
person1.hairColor // returns 'blonde'
```

**U**pdating data inside objects looks a lot like creating data:

```js
// person1 is { name: 'Bill', height: '5 feet, 9 inches', age: 34, hairColor: 'blonde' }
person1['hairColor'] = 'green'; 
// now person1 is { name: 'Bill', height: '5 feet, 9 inches', age: 34, hairColor: 'green' }
```

To **D**elete data from an object, we usually just update a key's value to `null` or some other default value. 

```js
person1['age'] = null;
```

There is a `delete` operator, but it's used much less commonly:

```js
  // person1 is { name: 'Bill', height: '5 feet, 9 inches', age: 34, hairColor: 'green' }
  delete person1.age;
  // delete returns true
  // now person1 is { name: 'Bill', height: '5 feet, 9 inches', hairColor: 'green' }
```

### Looping through Objects

One way to loop through objects in JavaScript is to use `for ... in` loops:

```js
  for (key in person1){
    // this next condition is required because of the prototype chain, which we haven't talked about quite yet
    if (person1.hasOwnProperty(key)){  
      console.log(key, ": ", person1[key]);
    }
  }
  // the order is not guaranteed, but this console logs:
  //   'name': 'Bill'
  //   'height': '5 feet, 9 inches'
  //   'age': 34
  //   'hairColor': 'green'
```

## Arrays

Arrays are a special kind of _ordered_ object. Instead of having keys that are *any primitive*, every key is a number called an "index", starting with 0. The values associated with array indices are usually referred to as array "elements".

Here are a few ways to create whole arrays:

```js
var arr = []; // creates an empty array
var arr = new Array(); // also creates an empty array - more on this soon!
var arr = ['a', 'b', 'c'];  // creates an array with items in it
```

That last example gets into the **C**RUD territory - creating a few pieces of data within a data object.

### Array CRUD

Because array indices have to be consecutive numbers, JavaScript doesn't allow us to create data inside an array the same way we can with an object - making up a new key.  We'll usually add data to arrays with JavaScript's Array `push` method. This is the **C**reate in CRUD.  

```js
// arr is now ['a', 'b', 'c']
arr.push('d');
// arr is now ['a', 'b', 'c', 'd']
```

We can **R**ead data from an array using the data's index.

```js
arr[0] // returns 'a'
```

We also **U**pdate data in arrays using indices:

```js
// arr is now ['a', 'b', 'c', 'd']
arr[2] = 'sea';
// arr is now ['a', 'b', 'sea', 'd']
```

The method we'll usually use to **D**elete data from the middle of an array is called `splice`.  The `splice` method requires a start index and a number of things to remove. It returns a new array with the element(s) it removed.

```js
// arr is now ['a', 'b', 'sea', 'd']
arr.splice(0, 2);
// splice returns ['a', 'b']
// arr is now just ['sea', 'd']
```

We also have a special method to remove one element from the end of an array - `pop`.

```js
// arr is now ['sea', 'd']
arr.pop();
// pop returns 'd'
// arr is now just ['sea']
```

A similar method, `shift`, removes an element from the beginning of an array:


```js
// arr is now ['sea']
arr.shift();
// shift returns 'sea'
// arr is now []
```

### Other Array Methods

Check out Mozilla Developer Network's <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array documentation</a> for more information on arrays. In particular, all of the methods listed in the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_instances" target="_blank">Array instances</a> section are available to use with JavaScript arrays. Commonly used ones include `indexOf`, `sort`, and `join`.