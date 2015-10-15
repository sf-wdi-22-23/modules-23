function bubbleSort(arr){
	var temp;  // a temporary variable for when we swap array values
	var swapped; // boolean, tracks if we've swapped this time through

	var pass; // used as a counter of passes through the array
	var i; // the index used to loop through the array on each pass

	// we'll need to make at most arr.length passes through the array to sort it
	for (pass=0; pass<arr.length; pass++){
		// to start each pass, we haven't swapped at all
		swapped = false;

		// loop through the array
		for (i=0; i<arr.length-1; i++){
			if (arr[i] > arr[i+1]){
				// swap if two values are out of order
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				// remember to update swapped so we'll know
				swapped = true;
			}
		}
		if (swapped === false){
			// we didn't have to swap at all this pass through
			// the array is sorted!
			return arr;
		}
	}
	// this return trigger with empty arrays
	return arr;
}

var tests = [
	{ input: [0,1,2], expected: [0,1,2] },
	{ input: [8,5,3], expected: [3,5,8] },
	{ input: [], expected: [] },
	{ input: [9,4,7,6], expected: [4,6,7,9]}
]

for (var t=0; t<tests.length; t++){
	console.log("testing bubbleSort with input ", tests[t].input);
	console.log("expected output is ", tests[t].expected);
	console.log("actual output is ", bubbleSort(tests[t].input));
	console.log("\n");
}
  