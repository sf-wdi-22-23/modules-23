
/* Exercise 3: Iterators */

// `each` takes in an array and a callback function
var each = function(arr, callback) {
  // iterates through each item in array
  for (var i = 0; i < arr.length; i += 1) {
    // calls callback function with item and index
    callback(arr[i], i);
  }
  // returns original array
  return arr;
};
