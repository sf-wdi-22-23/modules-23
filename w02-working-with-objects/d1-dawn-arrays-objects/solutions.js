
/* Iterators */

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


var partition = function(arr, truthTest){
  var trueArr = [];
  var falseArr = [];
  for (var i=0; i<arr.length; i++){
    if (truthTest(arr[i])) {
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }
  return [trueArr, falseArr];
};


var pluck = function(arr, key){
  var outputArr = [];
  for (var i=0; i<arr.length; i++){
    outputArr.push(arr[i][key]);
  }
  return outputArr;
};
