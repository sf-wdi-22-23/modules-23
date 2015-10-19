# Binary Search
- [solution](drills_solutions.md)

```js
function binarySearch(array, target) {
  // your code here
};

var sample = [0, 1, 1, 3, 5, 8, 13, 21];
var target = 1;

binarySearch(sample, 1); // 3 (the index it is located at in the sample array)
```

The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array.

```js
var low = 0;
var high  = array.length - 1;
var mid = Math.floor((low + high) / 2);
mid; // 3
```

If the target value is equal to the middle element's value, then the position is returned and the search is finished.

```js
array[mid] === target // 3 === 1
// Nope, keep going
```

If the target value is less than the middle element's value, then the search continues on the lower half of the array; or if the target value is greater than the middle element's value, then the search continues on the upper half of the array.

```js
array[mid] > target // 3 > 1
// Yep, move to lower half

array[mid] < target // 3 < 1
// Nope, you shouldn't be here
```

This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned).

[Source Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

Searching for a name in a telephone book using binary search - https://study.cs50.net/binary_search (an awesome introduction to binary search).

[solution](https://github.com/sf-wdi-21/notes/blob/master/week-04/drills_solutions.md)
