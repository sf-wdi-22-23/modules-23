## Solutions

1. Write a 'sayHello' function that logs 'Hello' to the console.
  ```js
  function sayHello(){
    console.log('Hello');
  };
  ```
  
1. Rewrite 'sayHello' to accept a name as a parameter, and logs 'Hello' + the name to the console.
```js
  function sayHello(name){
    console.log('Hello ' + name);
  };
  ```

1. Write a `multiply` function that finds the product of two numbers.

  ```js
  function multiply(x, y){
    return x * y
  }
  ```
1. Write a 'negative' function that takes an integer, and if that integer is positive, it turns it into a negative integer and returns that integer.

  ```js
  function negative(integer){
    if (integer > 0){
      return integer * -1;
    }
    else {
      return integer
    }
  }
  ``` 

1. Write a function that takes in a number and returns `true` if the number is even and `false` if the number is odd (**Hint:** Look up the `%` operator).

  ```js
  function isEven(integer){
    return ( integer % 2 === 0 );
  }
  ```

1. Write a function that generates a random number in a specified range (**Hint:** Look up Math.random()).

  ```js
  function getRand(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }

  ```

1. Write a function that generates an array of specified length that contains random numbers from 1 to 100.

  ```js
  function randArr(length){
    var array = [];
    for(var i=0; i < length; i++){
      var randomNum = Math.floor(Math.random() * 100);
      array.push(randomNum);
    }
    return array
  }
  randArr(3) => [23, 11, 82]
  ```

1. Write a function that swaps two values at two different indexes in an array.

  ```js
  function swap(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array
  } 

  ```
