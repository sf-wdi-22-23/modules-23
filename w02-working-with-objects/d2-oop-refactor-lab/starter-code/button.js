// ToggleButton - a more abstract example of an object type
// that interacts with the DOM. 
function ToggleButton() {
  var buttonState = "not clicked";

  this.handleClick = function() {
    console.log(buttonState);
    if (buttonState === "not clicked") {
      console.log("unclicked button was clicked");
      buttonState = "clicked";
      // clicked is a class that changes the button's CSS
      $(this).addClass("clicked");
      $(this).text("Unclick me!");
    } else if (buttonState === "clicked") {
      console.log("clicked button was unclicked");
      buttonState = "not clicked";
      // clicked is a class that changes the button's CSS
      $(this).removeClass("clicked");
      $(this).text("Click me!");
    }
  };
}

$(document).ready(function() {
  // when the document is ready
  // Make an instance of a ToggleButton
  var myButton = new ToggleButton();
  console.log(myButton);
  // and attach this event listener to it
  $('#my-button').on('click', myButton.handleClick);
  // passing the button's click handling function as a callback
});