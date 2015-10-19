# Binary Search

Binary search is a type of search method used to find the position of a target item in a sorted array.

```js
function binarySearch(array, target) {
  // your code here
};

var sample = [0, 1, 3, 5, 8, 13, 21];
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

## A real-life example

Searching for a name in a telephone book using binary search - https://study.cs50.net/binary_search (an awesome introduction to binary search).

## Exercise

Each student will be assigned a number. Based on their number, the students will sort themselves lowest to highest. The instructor will then act as the `mid` variable, determining which half of the students to continue navigating through in search of the target value.

After this real-life demo, students will pseudocode their plan for implementing a binary search, swap solutions with a partner from across the room, exchange feedback, and then start coding.

**Stretch**

~~Implement a solution that handles non-unique data sets.~~ (this might be too much)

Implement a recursive solution (instead of iterative).

## Solution
[Solution](https://github.com/sf-wdi-21/notes/blob/master/week-04/drills_solutions.md)

### Further Reading

[Big O Notation cheatsheet](http://bigocheatsheet.com/)
[Carnagie Mellon University - Binary Search](http://www.cs.cmu.edu/~15110-f12/Unit05PtB-handout.pdf)
[Rob Bell - beginner's guide to Big O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
