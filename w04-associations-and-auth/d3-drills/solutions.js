function binarySearchIterative(array, target) {
  // declare variables for high, low, and mid points of the array
  var mid, low = 0,
      high = array.length - 1; // declaring multiple variables at once

  // while the low is less than the high
  while (low <= high) {
    // set mid equal to halfway between the low and the high
    mid = Math.floor((low + high) / 2);

    // if the value of indexing the array using mid is greater than the target
    if (array[mid] > target) {
      // set the high to mid - 1, start loop over
      high = mid - 1;
    // else if the value of indexing the array using mid is greater than the target
    } else if (array[mid] < target) {
      // set the low to mid - 1, start loop over
      low = mid + 1;
    } else {
      // return the midpoint when the indexed midpoint matches the target
      return mid;
    }
  }
  // return null if the target is not found
  return null;
}

var testArray = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearchIterative(testArray, 3, 1, 10));
console.log(binarySearchIterative(testArray, 7, 1, 10));

function binarySearchRecursive(array, target, low, high) {
  // break if the high is less than the low
  if (high < low) { return null; }
  // set mid to be between low and high
  var mid = Math.floor((low + high) / 2);
  // use mid to index the array and compare its value with the target
  if (array[mid] > target) {
    // if the indexed value is higher than the target,
    // call the function again with these new values
    return binarySearchRecursive(array, target, low, mid - 1);
  }
  if (array[mid] < target) {
    // if the indexed value is lower than the target,
    // adjust the midpoint and call the function again
    return binarySearchRecursive(array, target, mid + 1, high);
  }
  // return the index of the array where the target value is located
  return mid;
}

var testArray = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearchRecursive(testArray, 3, 1, 10));
console.log(binarySearchRecursive(testArray, 7, 1, 10));
