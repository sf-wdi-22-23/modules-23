var today = new Date();

var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);


// 5. For this project, we are using the jQuery .datepicker(), which is actually part of the jQuery UI library.
// You can read more about it here: 
// Use jQuery to grab the element with an id of "datepicker" and call .datepicker() on it.

_____


// Read more about the jQuery UI datepicker here:
// https://jqueryui.com/datepicker/


// 6. Now we need to create a function daysLeft()

_____

// 7. daysLeft needs 4 local variables.

// We'll give you the first one because it is highly unlikely you will figure it out unless you have prior experience with the .datepicker()
// You need to call datepicker's 'getDate' method (this is an example of closure) ...and then you have to call the Date() object's .getTime(); method on the whole thing:

var a = $( "#datepicker" ).datepicker('getDate').getTime();

// 8. Outside of the daysLeft() function, we need to call daysLeft() using jQuery's .on('change', ____) event handler.
// Implement the function so it logs the value of a every time you click the calendar.



// HINT:
// You may need to temporarily add a return a inside the daysLeft function in order for this to work.




