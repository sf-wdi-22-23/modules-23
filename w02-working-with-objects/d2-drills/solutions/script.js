var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();
var resultString = "";

function daysLeft() {
	var a = $( "#datepicker" ).datepicker('getDate').getTime();
	var b = today.getTime();
	// c = hours per day * minutes per hour * seconds per minute * ms per sec
	var c = 24*60*60*1000;

	// here we use the native Math object to solve a problem:
	var diffDays = Math.round((a - b)/c);

	if( $('input').val() ){
		if (diffDays < 0 ) {
			resultString = "<p>Please pick a date in the future.</p>";
		} else if (diffDays === 1){
			resultString = ("<p>You only have ONE day left until " + $('input').val() + "!</p>");
		} else {
			resultString = ("<p>You have " + diffDays + " days left until " + $('input').val() + "!</p>");
		}
	} else {
		if (diffDays < 0 ) {
			resultString = "<p>Please pick a date in the future.</p>";
		} else if (diffDays === 1){
			resultString = ("<p>You only have ONE day left!</p>");
		} else {
			resultString = ("<p>You have " + diffDays + " days left!");
		}
	}
	// return diffDays;
};

$("#datepicker").on("change", function(){
	daysLeft();
	$("#result").html(resultString);
});

$("button").click(function(){
	$("#result").addClass("showResult");
});

