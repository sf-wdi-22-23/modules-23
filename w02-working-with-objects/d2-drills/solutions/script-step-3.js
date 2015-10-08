var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();

function daysLeft() {
	var a = $( "#datepicker" ).datepicker('getDate').getTime();
	// solutions for 9, 10, 11 and 12 go here:

	_____
	_____
	_____

	// we will remove this later:
	return a;
}


$("#datepicker").on("change", function(a){
	daysLeft();
	console.log(a);
});



// 9. For the second variable, you need to call getTime on your today variable

// 10. Now we need a variable to store the difference in days between today and the end date selected by the user.
// Basically, we need to subtract b from a


// 11. SPOILER ALERT!  If you've done it correctly, you will get a difference in milliseconds, which is not what we want.
// ...so we need one more variable to store a constant and we need to define it before we store the difference in days.
// That makes difference in days our FOURTH variable, so let's call our THIRD variable c. 
// c = hours per day * minutes per hour * seconds per minute * ms per sec
// Do the math and store the value.

// If all is well, you can console.log your difference in days variable and it will change depending on what date is clicked on the datepicker.

// 12. There is still a problem. We need the result to be an integer.
// Here is a link to the Math object:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// I bet you can figure out which method to call on your difference in days variable.
// It's one of the ones listed under Methods in the left column of the page linked above.


