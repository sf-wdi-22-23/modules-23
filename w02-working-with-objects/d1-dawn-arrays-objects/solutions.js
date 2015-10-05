/* Manipulate Data in Objects and Arrays */

var clubs =  [
	{
    	name: 'Yearbook',
        students: [
	        { first: 'Joe', last: 'Lakin' },
	        { first: 'Evalyn', last: 'Bradtke' },
			{ first: 'Samuel', last: 'Black' }
	    ], 
        teacher: 'James Friar'
    },
    {
    	name: 'Jazz Band',
        students: [
			{ first: 'Douglas', last: 'Wisoky' },
        	{ first: 'Cora', last: 'Thompson' },
			{ first: 'Samuel', last: 'Ziemann' },
			{ first: 'Alana', last: 'Cortez'}
	    ], 
        teacher: 'Luther Richards'
    },
    {
    	name: 'Swim Team',
        students: [
        	{ first: 'Cora', last: 'Thompson' },
			{ first: 'Samuel', last: 'Black' },
			{ first: 'Alana', last: 'Cortez'},
			{ first: 'Joe', last: 'Lakin' }
	    ], 
        teacher: 'Carol Darby'
    }
];

// the array that contains all the student club data
console.log(clubs);
// the number of clubs
console.log(clubs.length);
// the object that contains all of the information for the second club
console.log(clubs[1]);
// the teacher of the first club
console.log(clubs[0]['teacher']); // bracket notation, or
console.log(clubs[0].teacher);    // dot notation
// the array of students in the second team
console.log(clubs[1]['students']);
console.log(clubs[1].students);
// the last name of the second student on the third team
console.log(clubs[2]['students'][1]['last']); 
console.log(clubs[2].students[1].last);

// create an object literal representing a student with your name,
   // and assign it to a variable
var me = { first: 'Bob', last: 'Loblaw' };
// update one of the clubs to include you as a student member
clubs[2]['students'].push(me);
clubs[2].students.push(me);  // joining the swim team

// create an object literal representing a new club,
   // and assign it to a variable
   // make sure it has values for name, students, and teacher
var lawClub = {
	name: 'Legal Eagles',
	students: [],
	teacher: 'Abby Fuentes'
};

// add your new club to the array of clubs
clubs.push(lawClub);
// add yourself as a student in the new club
clubs[3]['students'].push(me);
clubs[3].students.push(me);

// update Samuel Black's first name to Sam everywhere it occurs
clubs[0]['students'][2]['first'] = 'Sam';
clubs[2]['students'][1]['first'] = 'Sam';
clubs[0].students[2].first = 'Sam';
clubs[2].students[1].first = 'Sam';

// remove one of the clubs from the array
clubs.shift(); // sorry yearbook!



/* Array Manipulation Practice */
// takes in an array of names and outputs random pairs of names
// Note that this method does not produce a 100% perfectly random answer...
// but it's good enough for now!
var getPairs = function(namesArr){
  var outputArr = [];
  // pick random pairs and add to the output
  while (namesArr.length >= 2){
    outputArr.push([spliceRandom(namesArr), spliceRandom(namesArr)]);
  }
  // if we had an odd number, one will be left over
  // add it to the output alone
  if (namesArr.length === 1){
    outputArr.push(namesArr);
  }
  return outputArr;
};

// helper function to splice out and return a random value from the array
var spliceRandom = function(arr){
  var randomIndex = Math.random() * arr.length;
  var randomlyRemoved = arr.splice(randomIndex, 1);
  return randomlyRemoved[0];
};



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
  	if (arr[i][key]){
    	outputArr.push(arr[i][key]);
    }
  }
  return outputArr;
};
