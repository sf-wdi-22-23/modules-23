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
	var b = today.getTime();
	var c = 24*60*60*1000;
	var diffDays = Math.round((a - b)/c);

// 13. You are almost there!
// We need a variable where we can concatenate the integer value difference of days and display that in a concatenated HTML string.
// "You have ____ days left!"

};

$("#datepicker").on("change", function(){
	daysLeft();

// 14. Now, instead of console.log, let's update the HTML string every time the user clicks a date.
// Use jQuery to write the result string in the element with an id of 'result'

_____

});

// UH-OH! We defined the variable inside daysLeft and we need the same data in our .on('change', function(){})
// 15. Define the variable globally (with the other var's at the top of the file) and leave your references alone.


// 16. STRETCH Challenge:

// For the highly ambitious, you may write a couple if statements and customize the result HTML string accordingly.
// Here are the possibilities I've thought of; there may be more.
// condition 1:  there is an input but someone has selected a date in the past
// condition 2:  there is an input and the day is tomorrow
// condition 3:  there is an input and the date is in the future
// condition 4:  there is NO input but someone has selected a date in the past
// condition 5:  there is NO input and the day is tomorrow
// condition 6:  there is NO input and the date is in the future.




