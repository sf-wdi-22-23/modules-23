// Before you begin, take a good look at index.html
// You don't have to make any changes to that file, but you should be familiar with the structure of the file--especially its id's.

// Our first challenge is to display the current day, month and year in an HTML string, like this:
// <p>Today is <span id="todayDate">Oct. 6, 2015</span></p>

// 1. To begin, we need a variable to reference the current time when a user loads the page.
// Create a variable "today" as an instance of the Date object.

_____

// You can read all about the Date object here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


// 2. Next we need the values for the current day, month and year.
// The Date object gives us a ton of methods to get the data we want.
// Create variables for the current date (day of the month, 1-31), current month (0-11) and current year (2015).
// Assign values for each by calling the following methods on the today variable:
// Date.getDate();
// Date.getMonth();
// Date.getFullYear();

_____
_____
_____

// 3. As we saw in class, Date.getMonth(); returns a number. We want a three-letter abbreviation for the month.
// Maybe we can get that from the Date object, but let's just make our own array and use the data we already have.
// Create a month names array using the new keyword and the Array() prototype object.
// Populate the array with three-letter string abbreviations for each month.

_____

// 4. Now we have everything we need to create our HTML string. Use jQuery's .html() method.

$("#todayDate").html(____);
