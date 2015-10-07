function assertEqual(testExpression, expectedOutput, message){
	if ((testExpression===expectedOutput)){
		console.log("Pass : " + message);
		return true;
	} else {
		console.log("Fail : " + message);
		return false;
	}
}

assertEqual(Math.round(-1.5), -1, "Math.round rounds up from -1.5");
// This test passes.


assertEqual([], [], "JavaScript considers two empty arrays equal");
// This test fails because arrays are a reference type in JS.
// Remember reference types are stored as memory locations.
// The two empty arrays aren't equal because they're not
// stored in the same place in memory!
