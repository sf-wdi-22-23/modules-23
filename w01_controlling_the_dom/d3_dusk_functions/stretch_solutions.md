## Stretch Challenges

1. Write a `getMax` function that finds the maximum number in an array.

```js
  function getMax(array){
     return Math.max.apply( Math, array );
  } 

  ```

1. Write a function called `explainMather` that takes in three arguments: two numbers and a function called `mather`. The `explainMather` function should pass the two numbers into `mather` and write out a message in the console to show the two number inputs and the output from `mather`. Test `explainMather` by passing in your `multiply` function from challenge #3.

```js
  function explainMather(x, y, mather){
     console.log('Passing ' + x + ' and ' + y + ' to ' + mather.name);
     console.log(mather(x,y));
  } 

  explainMather(2, 3, multiply) // Passing 2 and 3 to multiply
                                // 270

  ```

1. Write a `vowels` function that counts the number of vowels in a given string.

  ```js
  function vowels(string){
    var vowelCount = 0;
    var i;
    var length = string.length;
    for(i=0; i < length; i ++){
      if(isVowel(string[i])){
        vowelCount += 1
      }
    }
    return vowelCount
  } 

  function isVowel(letter){
    var vowels = ["a","e","i","o","u"];
    var length = vowels.length;
    var i;
    var vowelness = false;
    for(i=0; i < length; i++){
      if(letter === vowels[i]){
        vowelness = true
      }
    }
    return vowelness
  }


  ```

1. merge(arr1, arr2)

Write a function that takes two sorted arrays of numbers and returns a merged array of the sorted numbers. For example, if the input arrays were `var arr1 = [3,6,11]` and `var arr2 = [2,4,5,8,9]`, the returned array would be: `[2,3,4,5,6,8,9,11]`.

```js
  function merge(arr1, arr2){
    var mergerArray =  arr1.concat(arr2);
     
    mergerArray.sort(function (a, b) { 
      return a - b;
    });
    return mergerArray
  } 

  ```

1. letterCount(word)

Write a function that counts the number of times each letter occurs in a given string. It should return an object containing the count for each letter. For example, the string "apple" would return the following:

```js
  function letterCount(string){
    var vowelCount = {};
    var length = string.length;
    var i;
    for(i=0; i < length; i ++){
      var currentLetter = string[i];
      if (vowelCount[currentLetter]){
        vowelCount[currentLetter] += 1;
      }
      else {
        vowelCount[currentLetter] = 1;
      } 
    }
    return vowelCount;
  } 
```

  **Bonus**: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.

```js
  function letterCount(string){
    var letterCount = {};
    var length = string.length;
    var string = string.toLowerCase();
    var i;
    for(i=0; i < length; i ++){
      var currentLetter = string[i];
      if(isLetter(currentLetter)){
        if (letterCount[currentLetter]){
          letterCount[currentLetter] += 1;
        }
        else {
          letterCount[currentLetter] = 1;
        } 
      }
    }
    return letterCount
  } 


  function isLetter(letter){
    return /^[a-zA-Z]+$/.test(letter);
  }

  ```

1. numSquare(max)

Create a function called `numSquare` that will return an array of all perfect square numbers up to, but not exceeding a max number.

## Extra-Stretch Challenges

1. isPrime(num)

Create a function that returns `true` if the number passed in is a prime number and `false` if not.

2. primes(max)

Using your `isPrime` function, create a function `primes` that will return an array of all prime numbers up to, but not exceeding a max number.
