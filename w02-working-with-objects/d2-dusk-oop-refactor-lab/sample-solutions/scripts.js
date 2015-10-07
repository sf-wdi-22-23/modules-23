//Original code -- WITH COMMENTS FILLED IN
$(document).ready(function() {

    // add a click event listener to the Add Dice! button
        $('#roller button.add').on('click', function() {
        console.log('add button was clicked');
        // add a new die div to the page inside the dice-container
        $('.dice-container').append('<div class="die">1</div>');
    });

    // add a click event listener to the Roll Dice! button
    $('#roller button.roll').on('click', function() {
        // using jQuery's each method to loop through the die elements
        $('.die').each(function(index, die) {
            // simulate rolling the dice -- get a random value 
            // between 1 and 6
            var value = Math.floor((Math.random() * 6) + 1);
            $(die).text(value);
        });
    });
});